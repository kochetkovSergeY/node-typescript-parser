import { Declaration } from './Declaration';
/**
 * @export
 * @class DecoratorDeclaration
 * @implements {Declaration}
 */
export declare class DecoratorDeclaration implements Declaration {
    name: string;
    parameters: string[];
    constructor(name: string);
}
