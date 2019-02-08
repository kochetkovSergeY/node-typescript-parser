import { Declaration } from '../declarations/Declaration';
import { Export } from '../exports/Export';
import { Import } from '../imports/Import';
import { Node } from '../Node';
import { Resource } from './Resource';
import { ClassDeclaration, EnumDeclaration, InterfaceDeclaration } from '../declarations';
/**
 * TypeScript resource. Declaration of a typescript module (i.e. declare module "foobar").
 *
 * @export
 * @class Module
 * @implements {Resource}
 * @implements {Node}
 */
export declare class Module implements Resource, Node {
    name: string;
    start: number;
    end: number;
    imports: Import[];
    exports: Export[];
    declarations: Declaration[];
    classes: ClassDeclaration[];
    interfaces: InterfaceDeclaration[];
    enums: EnumDeclaration[];
    resources: Resource[];
    usages: string[];
    readonly identifier: string;
    readonly nonLocalUsages: string[];
    constructor(name: string, start: number, end: number);
    /**
     * Function that calculates the alias name of a namespace.
     * Removes all underlines and dashes and camelcases the name.
     *
     * @returns {string}
     *
     * @memberof Module
     */
    getNamespaceAlias(): string;
}
