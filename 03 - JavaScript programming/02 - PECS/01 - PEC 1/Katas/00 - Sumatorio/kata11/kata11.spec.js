import plantarArbol from './kata11'

const arbol1 = plantarArbol('peral', 'pera')

describe('Kata #11', () => {
    test('Capturamos Error de introducir 12 y obtenemos el valor anterior', () => {
        expect(() => {
            arbol1.definirFruta(12);
        }).toThrow();
        expect(arbol1.obtenerFruta()).toBe('pera')
    })
    test('Definimos un el valor nuevo: manzana y lo obtenemos', () => {
        expect(arbol1.definirFruta('manzana')).toBe('manzana')
        expect(arbol1.obtenerFruta()).toBe('manzana')
    })
})