import Arbol from './kata13'

const arbol = new Arbol('manzano', 'manzana')

const spy = jest.spyOn(console, 'log')

arbol.obtenerEspecie().presentarArbol()
arbol.obtenerEspecie().presentarArbol('manzana')

describe('Kata #13', () => {

    // Probamos por orden 

    // 1 - Los valores de especie y fruta son los asignados en el constructor

    test('1.1 - Probamos que el constructor funciona', () => {
        const arbol1 = new Arbol('peral', 'pera');
        expect(arbol1.especie).toBe('peral')
        expect(arbol1.fruta).toBe('pera')
    })


    // ESTO NO FUNCIONA !!!

    test('1.2 - Probamos que el constructor valida si es o no un string', () => {
        const arbol1 = new Arbol(12, 'pera');
        expect(arbol1).toBeNull()
    })

    // 2 - Propiedades del objeto devuelto

    test('2 - Probamos que el objeto tiene las propiedades: especie, fruta, obtenerEspecie, ObtenerFruta, definirEspecie, definirFruta', () => {
        expect(arbol.especie).toBe('manzano')
        expect(arbol.fruta).toBe('manzana')
        expect(arbol.fruta).toBe('manzana')
        expect(arbol).toHaveProperty('obtenerEspecie')
        expect(arbol).toHaveProperty('obtenerFruta')
        expect(arbol).toHaveProperty('definirEspecie')
        expect(arbol).toHaveProperty('definirFruta')
    })

    // 3 - Comprobamos métodos getters

    test('3 - Probamos que funcionan los getters obtenerEspecie y obtenerFruta', () => {
        expect(arbol.obtenerEspecie()).toBe('manzano')
        expect(arbol.obtenerFruta()).toBe('manzana')
    })

    // 4 - Comprobamos métodos setters

    test('4.1 - Probamos a definir una nueva especie y la obtenemos', () => {
        expect(arbol.definirEspecie('peral')).toBe('peral')
        expect(arbol.obtenerEspecie()).toBe('peral')
    })

    test('4.2 - Probamos a definir una nueva especie incorrecta y obtenemos la anterior', () => {
        expect(arbol.definirEspecie(12)).toBe('peral')
        expect(arbol.obtenerFruta()).toBe('manzana');
    })

    test('4.3 - Probamos a definir una nueva fruta', () => {
        expect(arbol.definirFruta('pera')).toBe('pera');
    })

    // 5 - Comprobamos prototype

    test('5.1 - Prototype: Este arbol es un manzano', () => {
        expect(spy).toHaveBeenCalledWith('Este árbol es un manzano')
    })
    test('5.2 - Prototype: Este arbol es un manzano y da manzana', () => {
        expect(spy).toHaveBeenCalledWith('Este árbol es un manzano y da manzana')
    })

    // 6 - Comprobamos error capturado

    test('6 - Probamos a definir una fruta como numero 12 y obtenemos el valor anterior', () => {
        expect(() => {
            arbol.definirFruta(12);
        }).toThrow();
        expect(arbol.obtenerFruta()).toBe('pera')
    })

    // 7 - Comprobamos Regex

    test('7.1 - Probamos la regla Regex y capturamos el error', () => {
        expect(() => {
            arbol.definirFruta('naranja');
        }).toThrow();
    })

    test('7.2 - Obtenemos la el valor de la fruta anterior (4.3)', () => {
        expect(arbol.obtenerFruta()).toBe('pera')
    })
})
