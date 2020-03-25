import plantarArbol from './kata9.4'

const arbol1 = plantarArbol('peral', 'pera')

describe('Kata #9.4', () => {
    test('el objeto tiene la propiedad obtenerFruta', () => {
        expect(arbol1).toHaveProperty('obtenerFruta')
    })
    test('el objeto devuelve la propiedad obtenerEspecie', () => {
        expect(arbol1).toHaveProperty('obtenerEspecie')
    })
    test('el objeto tiene la propiedad definirEspecie', () => {
        expect(arbol1).toHaveProperty('definirEspecie')
    })
    test('el objeto devuelve la propiedad definirFruta', () => {
        expect(arbol1).toHaveProperty('definirFruta')
    })

    /*
    
    Para la Kata 11

    test('Capturamos el error de introducir 12', () => {
        expect(() => {
            arbol1.definirEspecie('12');
          }).toThrow();
    })
    
    */

    test('Comprobamos que se ejecuta la comprobación de 12', () => {
        expect(arbol1.definirEspecie('12')).toBe('peral')
    })

    test('Comprobamos que el valor de especie es el anterior', () => {
        expect(arbol1.obtenerEspecie()).toBe('peral');
    })
    test('Comprobamos que el valor de especie nueva es manzano', () => {
        expect(arbol1.definirEspecie('manzano')).toBe('manzano');
    })
    test('Comprobamos que el valor de la fruta es el anterior', () => {
        expect(arbol1.obtenerFruta()).toBe('pera');
    })
    test('Comprobamos que el valor de la fruta nueva es manzana', () => {
        expect(arbol1.definirFruta('manzana')).toBe('manzana');
    })
})