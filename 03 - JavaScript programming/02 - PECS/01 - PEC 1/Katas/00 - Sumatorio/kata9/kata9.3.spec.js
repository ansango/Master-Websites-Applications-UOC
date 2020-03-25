import plantarArbol from './kata9.3'

const arbol1 = plantarArbol('peral', 'pera')

describe('Kata #9.3', () => {
    test('El objeto devuelve obtenerEspecie y obtenerFruta', () => {
        expect(arbol1).toHaveProperty('obtenerFruta')
        expect(arbol1).toHaveProperty('obtenerEspecie')
    })
    
    test('obtenerEspecie devuelve: peral', () => {
        expect(arbol1.obtenerEspecie()).toBe('peral')
    })
    test('obtenerFruta devuelve: pera', () => {
        expect(arbol1.obtenerFruta()).toBe('pera')
    })
})