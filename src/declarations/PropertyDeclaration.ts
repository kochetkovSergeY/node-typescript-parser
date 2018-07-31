import { OptionalDeclaration, ScopedDeclaration, TypedDeclaration } from './Declaration';
import { DeclarationVisibility } from './DeclarationVisibility';

/**
 * Property declaration that contains its visibility.
 *
 * @export
 * @class PropertyDeclaration
 * @implements {ScopedDeclaration}
 * @implements {TypedDeclaration}
 */
export class PropertyDeclaration implements OptionalDeclaration, ScopedDeclaration, TypedDeclaration {
    constructor(
        public name: string,
        public visibility: DeclarationVisibility | undefined,
        public type: string | undefined,
        public isOptional: boolean,
        public start?: number,
        public end?: number,
    ) { }
}
