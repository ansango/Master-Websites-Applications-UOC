import plantarArbol from './kata9.3'

const arbol1 = plantarArbol('peral', 'pera')

describe('Kata #9.3', () => {
    test('el objeto tiene la propiedad obtenerFruta', () => {
        expect(arbol1).toHaveProperty('obtenerFruta')
    })
    test('el objeto devuelve la propiedad obtenerEspecie', () => {
        expect(arbol1).toHaveProperty('obtenerEspecie')
    })
    test('el objeto devuelve la propiedad peral', () => {
        expect(arbol1.obtenerEspecie()).toBe('peral')
    })
    test('el objeto devuelve la propiedad pera', () => {
        expect(arbol1.obtenerFruta()).toBe('pera')
    })
})