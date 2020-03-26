import elimina_primer_y_ultimo from './kata4'

describe('Kata #04 ', () => {
    test('devuelve: avaScrip', () => {
        expect(elimina_primer_y_ultimo('JavaScript')).toBe('avaScrip')
    })
    test('devuelve: lejandri', () => {
        expect(elimina_primer_y_ultimo('Alejandria')).toBe('lejandri')
    })
    test('devuelve: idrogen', () => {
        expect(elimina_primer_y_ultimo('hidrogeno')).toBe('idrogen')
    })
    test('devuelve: ok', () => {
        expect(elimina_primer_y_ultimo('ok')).toBe('ok')
    })
})