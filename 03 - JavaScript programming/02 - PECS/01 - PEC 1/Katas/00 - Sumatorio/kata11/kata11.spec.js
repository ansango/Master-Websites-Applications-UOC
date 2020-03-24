import plantarArbol from './kata11'

const arbol1 = plantarArbol('peral', 'pera')

describe('Kata #11', () => {
    test('Capturamos el error de introducir 12', () => {
        expect(() => {
            arbol1.definirFruta('12');
          }).toThrow();
    })
    test('Comprobamos que el valor es el anterior', () => {
        expect(arbol1.obtenerFruta()).toBe('pera')
    })
    test('Definimos un el valor nuevo: manzana', () => {
        expect(arbol1.definirFruta('manzana')).toBe('manzana')
    })
    test('Comprobamos que el valor nuevo es manzana', () => {
        expect(arbol1.obtenerFruta()).toBe('manzana')
    })
})