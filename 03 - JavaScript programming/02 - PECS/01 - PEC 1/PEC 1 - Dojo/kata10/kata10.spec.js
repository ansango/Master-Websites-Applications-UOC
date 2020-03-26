import plantarArbol from './kata10'

const arbol1 = plantarArbol('peral', 'pera')
const spy = jest.spyOn(console,'log')

arbol1.obtenerEspecie().presentarArbol()
arbol1.obtenerEspecie().presentarArbol('pera')


describe('Kata #10 ', () => {
    test('El objeto tiene el metodo obtenerEspecie', () => {
       expect(arbol1).toHaveProperty('obtenerEspecie')
    })
    test('Prototype String: Este arbol es un peral', () => {
        expect(spy).toHaveBeenCalledWith('Este árbol es un peral')
    })
    test('Prototype String: Este arbol es un peral y da pera', () => {
        expect(spy).toHaveBeenCalledWith('Este árbol es un peral y da pera')
    })
})