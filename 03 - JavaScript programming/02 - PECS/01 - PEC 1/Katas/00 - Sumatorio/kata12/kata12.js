/*

Kata #12: Expresiones regulares

El uso de expresiones regulares es habitual en JavaScript para detectar patrones en cadenas de texto. 
Para nuestros ejercicios vamos a tomarnos ciertas licencias para generalizar el nombre de la especie y la fruta. Antes de validar un cambio mediante setters vamos a validar la fruta con respecto a la especie. Como ejemplo: 

    manzano - manzana OK
    peral - pera OK
    naranjo - naranja OK
    nogal - nueces KO

 

De los tres primeros casos vemos que se repiten las 4 primeras letras de la especie también en la fruta. 
Ésta será la comprobación que haremos en nuestro setter.

 

Debe cumplir estos tests:

    1 - Al crear un arbol con los valores manzano y manzana e invocar posteriormente definirFruta con el valor pera el método lanza un error y mantiene su valor previo
    2 - Al crear un arbol con los valores peral y manzana e invocar posteriormente definirFruta con el valor pera el método modifica el valor de la propiedad fruta

 
Pistas: 

    Creación de RegEx (usad el método que prefirais): https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions#Creaci%C3%B3n_de_una_expresi%C3%B3n_regular
    Probador de regex: https://regexr.com, https://regex101.com/


*/


String.prototype.presentarArbol = function (value) {

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
                let match = value.match(/^[a-zA-Z]{4}/)
                let _especie = especie.match(/^[a-zA-Z]{4}/)
                
                if (!isNaN(parseFloat(_fruta)) && isFinite(_fruta)) {
                    throw new Error();
                } else if(match[0] !== _especie[0]) {
                    throw new Error();
                }else {
                    return fruta = _fruta
                }
            },
        }
        return arbol
    }
}