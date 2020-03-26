import plantarArbol from './kata12'

const arbol1 = plantarArbol('manzano', 'manzana')
const arbol2 = plantarArbol('peral', 'manzana')

describe('Kata #12', () => {
    test('Capturamos error de fruta incorrecta y devolvemos la anterior', () => {
        expect(() => {
            arbol1.definirFruta('pera');
        }).toThrow();
        expect(arbol1.obtenerFruta()).toBe('manzana')
    })
    test('Creamos el objeto arbol 2, con los valores peral y manzana', () => {
        expect(arbol2.obtenerEspecie()).toBe('peral')
        expect(arbol2.obtenerFruta()).toBe('manzana')
        expect(arbol2.definirFruta('pera')).toBe('pera')
    })
})