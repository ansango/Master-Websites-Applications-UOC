import repiteString from './kata3'

describe('Kata #03 repite un string', () => {
    test('devuelve \' \'', () => {
        expect(repiteString('JavaScript', 0)).toBe('')
    })
    test('devuelve: miau', () => {
        expect(repiteString('miau', 1)).toBe('miau')
    })
    test('devuelve: holaholahola', () => {
        expect(repiteString('hola', 3)).toBe('holaholahola')
    })
    test('devuelve ??????????', () => {
        expect(repiteString('?', 10)).toBe('??????????')
    })
})