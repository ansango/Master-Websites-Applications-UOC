import elimina_los_espacios from './kata5'

describe('Kata #05 ', () => {
    test('devuelve: bunenosdias ', () => {
        expect(elimina_los_espacios('buenos dias', )).toBe('buenosdias')
    })
    test('devuelve: pasteldezanhaoria', () => {
        expect(elimina_los_espacios('  pastel de zanahoria  ', )).toBe('pasteldezanahoria')
    })
    test('devuelve: dábalearrozalazorraelabad', () => {
        expect(elimina_los_espacios('dábale arroz a la zorra el abad', )).toBe('dábalearrozalazorraelabad')
    })
})