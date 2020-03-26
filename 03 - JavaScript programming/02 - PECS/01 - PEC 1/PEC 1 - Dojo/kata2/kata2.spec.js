import suma_de_elementos_positivos from './kata2'

describe('Kata #02: suma de elementos de un array', () => {
  test('devuelve el número 0', () => {
    expect(suma_de_elementos_positivos([0])).toBe(0)
  })
  test('devuelve el número 15', () => {
    expect(suma_de_elementos_positivos([1,2,3,4,5])).toBe(15)
  })
  test('devuelve el número 13', () => {
    expect(suma_de_elementos_positivos([1,-2,3,4,5])).toBe(13)
  })
  test('devuelve el número 9', () => {
    expect(suma_de_elementos_positivos([-1,2,3,4,-5])).toBe(9)
  })
  test('devuelve el número 0', () => {
    expect(suma_de_elementos_positivos([-1,-2,-3,-4,-5])).toBe(0)
  })
})