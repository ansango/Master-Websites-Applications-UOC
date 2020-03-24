import plantarArbol from './kata12'

const arbol1 = plantarArbol('manzano', 'manzana')

const arbol2 = plantarArbol('peral', 'manzana')

describe('Kata #12', () => {
    test('Capturamos el error de introducir 12', () => {
        expect(() => {
            arbol1.definirFruta('12');
        }).toThrow();
    })
    test('Capturamos el error de introducir una fruta incorrecta', () => {
        expect(() => {
            arbol1.definirFruta('pera');
        }).toThrow();
    })
    test('Obtenemos el valor anterior a introducir pera: manzana', () => {
        expect(arbol1.obtenerFruta()).toBe('manzana')
    })
    test('Creamos el objeto arbol 2, con los valores peral y manzana', () => {
        expect(arbol2.obtenerEspecie()).toBe('peral')
        expect(arbol2.obtenerFruta()).toBe('manzana')
    })
    test('Definimos en arbol2 la fruta: pera', () => {
        expect(arbol2.definirFruta('pera')).toBe('pera')
    })
})