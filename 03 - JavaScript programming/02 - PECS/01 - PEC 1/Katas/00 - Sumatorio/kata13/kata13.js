/*
Kata #13: Clases

Implementa todo lo anterior pero con el formato de clases. Todos los tests deben pasar. 
El nuevo código es en realidad solo una restructuración de todo lo hecho hasta ahora, con el formato de definición de las clases de ES6 
y el constructor como método de llamada inicial al instanciar.


Pista: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes

*/
String.prototype.presentarArbol = function (value) {

    if (value !== undefined) {
        console.log(`Este árbol es un ${this} y da ${value}`)
    } else {
        console.log(`Este árbol es un ${this}`)
    }
}

export default class Arbol {

    constructor(especie, fruta){
        if (typeof especie !== 'string' || typeof fruta !== 'string') {
            return null
        } else {
            this.especie = especie
            this.fruta = fruta
        }
    }

    obtenerEspecie(){
        return this.especie
    }
    definirEspecie(value) {
        let _especie = value
        return !isNaN(parseFloat(_especie)) && isFinite(_especie) ? this.especie : this.especie = _especie
    }
    obtenerFruta() {
        return this.fruta
    }
    definirFruta(value) {
        let _fruta = value
        let match = value.match(/^[a-zA-Z]{4}/)
        let _especie = this.especie.match(/^[a-zA-Z]{4}/)
        if (!isNaN(parseFloat(_fruta)) && isFinite(_fruta)) {
            throw new Error();
        } else if (match[0] !== _especie[0]) {
            throw new Error();
        }
        else {
            return this.fruta = _fruta
        }
    }
}