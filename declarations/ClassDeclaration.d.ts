import { AccessorDeclaration } from './AccessorDeclaration';
import { ConstructorDeclaration } from './ConstructorDeclaration';
import { ClassLikeDeclaration, ExportableDeclaration, GenericDeclaration } from './Declaration';
import { MethodDeclaration } from './MethodDeclaration';
import { PropertyDeclaration } from './PropertyDeclaration';
import { DecoratorDeclaration } from './DecoratorDeclaration';
/**
 * Class declaration that contains methods, properties and a constructor
 *
 * @export
 * @class ClassDeclaration
 * @implements {ClassLikeDeclaration}
 * @implements {ExportableDeclaration}
 * @implements {GenericDeclaration}
 */
export declare class ClassDeclaration implements ClassLikeDeclaration, ExportableDeclaration, GenericDeclaration {
    name: string;
    isExported: boolean;
    start?: number | undefined;
    end?: number | undefined;
    ctor: ConstructorDeclaration | undefined;
    accessors: AccessorDeclaration[];
    getters: AccessorDeclaration[];
    setters: AccessorDeclaration[];
    decorators: DecoratorDeclaration[];
    properties: PropertyDeclaration[];
    methods: MethodDeclaration[];
    typeParameters: string[] | undefined;
    extendsClauses: string[];
    implementsClauses: string[];
    constructor(name: string, isExported: boolean, start?: number | undefined, end?: number | undefined);
}
