import obtenerFruta from './kata8.2'

const arbol1 = {
    especie: 'manzano',
    fruta: 'manzana',
    obtenerFruta() {
        return this.fruta
    }
}

const arbol2 =  {
    especie: 'pino'
}

describe('Kata 8.2', () => {
    test('El objeto tiene la propiedad fruta', () => {
        expect(arbol1).toHaveProperty('fruta')
    })
    test('El valor de la propiedad fruta es manzana', () => {
        expect(obtenerFruta(arbol1)).toBe('manzana')
    })
    test('El valor de la propiedad fruta no existe', () => {
        expect(obtenerFruta(arbol2)).toBe('No fruta')
    })
})