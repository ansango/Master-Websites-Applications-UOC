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

    Al crear un arbol con los valores manzano y manzana e invocar posteriormente definirFruta con el valor pera el método lanza un error y mantiene su valor previo
    Al crear un arbol con los valores peral y manzana e invocar posteriormente definirFruta con el valor pera el método modifica el valor de la propiedad fruta

 
Pistas: 

    Creación de RegEx (usad el método que prefirais): https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions#Creaci%C3%B3n_de_una_expresi%C3%B3n_regular
    Probador de regex: https://regexr.com, https://regex101.com/


*/

export default function repiteString(txt, num) {
    return txt.repeat(num)
}