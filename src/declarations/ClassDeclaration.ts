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
export class ClassDeclaration implements ClassLikeDeclaration, ExportableDeclaration, GenericDeclaration {
    public ctor: ConstructorDeclaration | undefined;
    public accessors: AccessorDeclaration[] = [];
    public getters: AccessorDeclaration[] = [];
    public setters: AccessorDeclaration[] = [];
    public decorators: DecoratorDeclaration[] = [];
    public properties: PropertyDeclaration[] = [];
    public methods: MethodDeclaration[] = [];
    public typeParameters: string[] | undefined;
    public extendsClauses: string[] = [];
    public implementsClauses: string[] = [];

    constructor(
        public name: string,
        public isExported: boolean,
        public start?: number,
        public end?: number,
    ) { }
}
