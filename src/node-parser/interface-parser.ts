import { Identifier, InterfaceDeclaration, SyntaxKind } from 'typescript';

import { DeclarationVisibility } from '../declarations/DeclarationVisibility';
import { DefaultDeclaration } from '../declarations/DefaultDeclaration';
import { InterfaceDeclaration as TshInterface } from '../declarations/InterfaceDeclaration';
import { MethodDeclaration } from '../declarations/MethodDeclaration';
import { PropertyDeclaration } from '../declarations/PropertyDeclaration';
import { Resource } from '../resources/Resource';
import { isMethodSignature, isPropertySignature } from '../type-guards/TypescriptGuards';
import { parseMethodParams } from './function-parser';
import {
    containsModifier,
    getDefaultResourceIdentifier,
    getNodeType,
    isNodeDefaultExported,
    isNodeExported,
} from './parse-utilities';

/**
 * Parses an interface node into its declaration.
 * Calculates the property and method defintions of the interface as well.
 *
 * @export
 * @param {Resource} resource
 * @param {InterfaceDeclaration} node
 */
export function parseInterface(resource: Resource, node: InterfaceDeclaration): void {
    const name = node.name ? node.name.text : getDefaultResourceIdentifier(resource);
    const interfaceDeclaration = new TshInterface(
        name, isNodeExported(node), node.getStart(), node.getEnd(),
    );

    if (isNodeDefaultExported(node)) {
        interfaceDeclaration.isExported = false;
        resource.declarations.push(new DefaultDeclaration(interfaceDeclaration.name, resource));
    }

    if (node.heritageClauses) {
        node.heritageClauses.forEach((clause) => {

            if (clause.token === SyntaxKind.ExtendsKeyword) {
                clause.types.forEach(type => interfaceDeclaration.extendsClauses.push(type.getText()));
            } else if (clause.token === SyntaxKind.ImplementsKeyword) {
                clause.types.forEach(type => interfaceDeclaration.implementsClauses.push(type.getText()));
            }
        });
    }

    if (node.members) {
        node.members.forEach((o) => {
            if (isPropertySignature(o)) {
                interfaceDeclaration.properties.push(
                    new PropertyDeclaration(
                        (o.name as Identifier).text,
                        DeclarationVisibility.Public,
                        getNodeType(o.type),
                        !!o.questionToken,
                        containsModifier(o, SyntaxKind.StaticKeyword),
                        o.getStart(),
                        o.getEnd(),
                    ),
                );
            } else if (isMethodSignature(o)) {
                const method = new MethodDeclaration(
                    (o.name as Identifier).text,
                    true,
                    DeclarationVisibility.Public,
                    getNodeType(o.type),
                    !!o.questionToken,
                    containsModifier(o, SyntaxKind.StaticKeyword),
                    containsModifier(o, SyntaxKind.AsyncKeyword),
                    o.getStart(),
                    o.getEnd(),
                );
                method.parameters = parseMethodParams(o);
                interfaceDeclaration.methods.push(method);
            }
        });
    }

    if (node.typeParameters) {
        interfaceDeclaration.typeParameters = node.typeParameters.map(param => param.getText());
    }

    resource.interfaces.push(interfaceDeclaration);
}
