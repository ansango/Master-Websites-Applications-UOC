import arbol from './kata8.1'

describe('Kata #8.1', () => {
    test('existe la propiedad especie', () => {
        expect(arbol).toHaveProperty('especie')
    })
    test('existe la propiedad fruta', () => {
        expect(arbol).toHaveProperty('fruta')
    })
    test('el valor de la propiedad especie es: manzano', () => {
        expect(arbol).toHaveProperty('especie', 'manzano')
    })
    test('el valor de la propiedad fruta es: manzana', () => {
        expect(arbol).toHaveProperty('fruta', 'manzana')
    })
    test('existe el metodo obtenerFruta', () => {
        expect(arbol).toHaveProperty('obtenerFruta')
    })
    test('el resultado de invocar el metodo obtenerFruta es: manzana', () => {
        expect(arbol.obtenerFruta()).toBe('manzana')
    })
})