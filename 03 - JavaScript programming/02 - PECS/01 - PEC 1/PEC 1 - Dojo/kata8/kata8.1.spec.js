import arbol from './kata8.1'

describe('Kata #8.1', () => {
    test('Comprobamos propiedades especie y fruta', () => {
        expect(arbol).toHaveProperty('especie')
        expect(arbol).toHaveProperty('fruta')
    })
    test('El valor de la propiedad especie es: manzano', () => {
        expect(arbol).toHaveProperty('especie', 'manzano')
    })
    test('El valor de la propiedad fruta es: manzana', () => {
        expect(arbol).toHaveProperty('fruta', 'manzana')
    })
    test('Comprobamos metodo obtenerFruta', () => {
        expect(arbol).toHaveProperty('obtenerFruta')
    })
    test('Resultado de invocar el metodo obtenerFruta es: manzana', () => {
        expect(arbol.obtenerFruta()).toBe('manzana')
    })
})