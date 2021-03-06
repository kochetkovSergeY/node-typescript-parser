import { Declaration } from './Declaration';

/**
 * Class that defines information about a declaration.
 * Contains the declaration and the origin of the declaration.
 *
 * @export
 * @class DeclarationInfo
 */
export class DeclarationInfo {
    constructor(public declaration: Declaration, public from: string) { }
}
