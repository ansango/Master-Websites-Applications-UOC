import plantarArbol from './kata10'

const arbol1 = plantarArbol('peral', 'pera')
const spy = jest.spyOn(console,'log')
console.log(arbol1.obtenerEspecie())

describe('Kata #10 ', () => {
    test('', () => {
       // expect(arbol1.obtenerEspecie())
    })
    test('devuelve ', () => {
        expect(spy).toHaveBeenCalledWith('Este árbol es un peral')
    })
})