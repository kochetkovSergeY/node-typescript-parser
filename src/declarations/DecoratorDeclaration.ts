import { Declaration } from './Declaration';

/**
 * @export
 * @class DecoratorDeclaration
 * @implements {Declaration}
 */
export class DecoratorDeclaration implements Declaration {
    public parameters: string[] = [];

    constructor(public name: string) {
    }
}
