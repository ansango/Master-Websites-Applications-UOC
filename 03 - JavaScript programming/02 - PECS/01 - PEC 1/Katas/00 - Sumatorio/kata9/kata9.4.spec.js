import plantarArbol from './kata9.4'

const arbol1 = plantarArbol('peral', 'pera')

describe('Kata #9.4', () => {
    test('El objeto tiene las propiedades obtenerFruta, obtenerEspecie, definirEspecie, definirFruta', () => {
        expect(arbol1).toHaveProperty('obtenerFruta')
        expect(arbol1).toHaveProperty('obtenerEspecie')
        expect(arbol1).toHaveProperty('definirEspecie')
        expect(arbol1).toHaveProperty('definirFruta')
    })

    test('Comprobación de 12 devuelve valor anterior: pera', () => {
        expect(arbol1.definirFruta('12')).toBe('pera')
        expect(arbol1.obtenerFruta()).toBe('pera');
    })

    test('Definimos nuevo valor para la fruta: manzana', () => {
        expect(arbol1.definirFruta('manzana')).toBe('manzana')
        expect(arbol1.obtenerFruta()).toBe('manzana');
    })

    test('Comprobación de 12 devuelve valor anterior: pera', () => {
        expect(arbol1.definirEspecie('12')).toBe('peral')
        expect(arbol1.obtenerEspecie()).toBe('peral');
    })

    test('Comprobamos que el valor de especie nueva es manzano', () => {
        expect(arbol1.definirEspecie('manzano')).toBe('manzano');
        expect(arbol1.obtenerEspecie()).toBe('manzano');
    })
})