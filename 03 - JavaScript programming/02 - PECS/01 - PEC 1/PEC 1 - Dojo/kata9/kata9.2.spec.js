import plantarArbol from './kata9.2'

const arbol1 = plantarArbol('peral', 'pera')


describe('Kata #9.2', () => {
    test('El objeto tiene las propiedades especie, fruta y obtenerFruta', () => {
        expect(arbol1).toHaveProperty('especie')
        expect(arbol1).toHaveProperty('fruta')
        expect(arbol1).toHaveProperty('obtenerFruta')
    })
    test('obtenerFruta devuelve el valor: pera', () => {
        expect(arbol1.obtenerFruta()).toBe('pera')
    })
})