import plantarArbol from './kata9.2'

const arbol1 = plantarArbol('peral', 'pera')


describe('Kata #9.2', () => {
    test('el objeto tiene la propiedad especie', () => {
        expect(arbol1).toHaveProperty('especie')
    })
    test('el objeto tiene la propiedad fruta', () => {
        expect(arbol1).toHaveProperty('especie')
    })
    test('el objeto tiene la propiedad especie', () => {
        expect(arbol1).toHaveProperty('obtenerFruta')
    })
    test('el objeto devuelve la propiedad pera', () => {
        expect(arbol1.obtenerFruta()).toBe('pera')
    })
})