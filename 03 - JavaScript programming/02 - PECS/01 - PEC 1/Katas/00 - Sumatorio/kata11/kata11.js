/*

Kata #11: Gestión de errores

A partir del caso anterior vamos a usar la manera habitual para lanzar un error JavaScript. 
Añadid estas líneas en la comprobación de tipo en el setter definirFruta.


throw new Error();

 
Debe cumplir estos tests:

Al crear un arbol e invocar posteriormente definirFruta con el valor 12 el método lanza un error y mantiene su valor previo

 

Pista: https://jestjs.io/docs/en/expect#tothrowerror
*/


String.prototype.presentarArbol = function(value) {

    if (value !== undefined) {
        console.log(`Este árbol es un ${this} y da ${value}`)
    } else {
        console.log(`Este árbol es un ${this}`)
    }
}

export default function plantarArbol(especie, fruta) {

    if (typeof especie !== 'string' || typeof fruta !== 'string') {
        return null
    } else {
        const arbol = {
            obtenerEspecie() {
                return especie
            },
            definirEspecie(value) {
                let _especie = value
                if (!isNaN(parseFloat(_especie)) && isFinite(_especie)) {
                    return especie
                } else {
                    return especie = _especie
                }
            },
            obtenerFruta() {
                return fruta
            },
            definirFruta(value) {
                let _fruta = value
                if (!isNaN(parseFloat(_fruta)) && isFinite(_fruta)) {
                    throw new Error();
                } else {
                    return fruta = _fruta
                }
            },
        }
        return arbol
    }
}