import plantarArbol from './kata9.4'

const arbol1 = plantarArbol('peral', 'pera')
arbol1.definirEspecie(12)
console.log(arbol1)
console.log(arbol1.obtenerEspecie())
console.log(arbol1.obtenerFruta())

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
    test('throws on octopus', () => {
        function testingTree() {
          arbol1.definirEspecie('a12');
        }
        expect(testingTree).toThrowError(DisgustingFlavorError);
    })
})