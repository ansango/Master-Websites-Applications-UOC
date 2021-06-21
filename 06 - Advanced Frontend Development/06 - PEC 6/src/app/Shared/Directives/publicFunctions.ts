import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export class PublicFunctions {
    /**
     * Función que añade al objeto T la variable uid con el valor máximo de la colección + 1.
     * @param collection - Collección de objeto T
     * @param object - Obejeto T
     * @return se añade al objeto T la variable uid con el valor máximo de la colección + 1
     */
    public static fakeIncreaseUid <T>(collection, object: T): T {
        const _object = object;
        const uid = collection.length > 0 ? Math.max(...collection.map( x => x.uid)) + 1 : 1;
        _object['uid'] = uid;
        return _object;
    }

    /**
     * Función que añade al objeto T la variable id con el valor máximo de la colección + 1.
     * @param collection - Collección de objeto T
     * @param object - Obejeto T
     * @return se añade al objeto T la variable uid con el valor máximo de la colección + 1
     */
    public static fakeIncreaseId <T>(collection, object: T): T {
        const _object = object;
        const id = collection.length > 0 ? Math.max(...collection.map( x => x.id)) + 1 : 1;
        _object['id'] = id;
        return _object;
    }
}