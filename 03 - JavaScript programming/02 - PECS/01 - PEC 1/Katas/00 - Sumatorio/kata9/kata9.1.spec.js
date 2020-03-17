import plantarArbol from './kata9.1'

const arbol1 = {
    especie: 'peral', 
    fruta: 'pera'
}

describe('Kata #9.1', () => {
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol(3, 'pera')).toBeNull()
    })
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol(3, 1)).toBeNull()
    })
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol(true, 1)).toBeNull()
    })
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol('manzano', false)).toBeNull()
    })
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol('manzano', [])).toBeNull()
    })
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol({}, 'sandia')).toBeNull()
    })
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol(undefined, 'sandia')).toBeNull()
    })
    test('devuelve null si los parametros no son string', () => {
        expect(plantarArbol('melocotonero', null)).toBeNull()
    })
    test(`devuelve el objeto { especie : 'peral', fruta: 'peral'}`, () => {
        expect(plantarArbol('peral', 'pera')).toEqual(arbol1)
    })
})