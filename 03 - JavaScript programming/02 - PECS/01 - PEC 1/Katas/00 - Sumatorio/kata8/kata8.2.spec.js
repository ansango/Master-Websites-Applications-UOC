import obtenerFruta from './kata8.2'
import arbol from './kata8.1'

const arbol2 =  {
    especie: 'pino'
}

describe('Kata 8.2', () => {
    test('El objeto tiene la propiedad fruta', () => {
        expect(arbol).toHaveProperty('fruta')
    })
    test('El valor de la propiedad fruta es manzana', () => {
        expect(obtenerFruta(arbol)).toBe('manzana')
    })
    test('El valor de la propiedad fruta no existe', () => {
        expect(obtenerFruta(arbol2)).toBe('No fruta')
    })
})