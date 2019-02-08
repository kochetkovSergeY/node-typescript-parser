"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class declaration that contains methods, properties and a constructor
 *
 * @export
 * @class ClassDeclaration
 * @implements {ClassLikeDeclaration}
 * @implements {ExportableDeclaration}
 * @implements {GenericDeclaration}
 */
class ClassDeclaration {
    constructor(name, isExported, start, end) {
        this.name = name;
        this.isExported = isExported;
        this.start = start;
        this.end = end;
        this.accessors = [];
        this.getters = [];
        this.setters = [];
        this.decorators = [];
        this.properties = [];
        this.methods = [];
        this.extendsClauses = [];
        this.implementsClauses = [];
    }
}
exports.ClassDeclaration = ClassDeclaration;
