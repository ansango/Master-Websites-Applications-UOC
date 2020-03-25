import plantarArbol from './kata9.1'

const arbol1 = {
    especie: 'peral',
    fruta: 'pera'
}

describe('Kata #9.1', () => {
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol(3, 'pera')).toBeNull()
        expect(plantarArbol(3, 1)).toBeNull()
        expect(plantarArbol(true, 1)).toBeNull()
        expect(plantarArbol('manzano', false)).toBeNull()
        expect(plantarArbol('manzano', [])).toBeNull()
        expect(plantarArbol({}, 'sandia')).toBeNull()
        expect(plantarArbol(undefined, 'sandia')).toBeNull()
        expect(plantarArbol('melocotonero', null)).toBeNull()
    })
    test(`devuelve el objeto { especie : 'peral', fruta: 'peral'}`, () => {
        expect(plantarArbol('peral', 'pera')).toEqual(arbol1)
    })
})