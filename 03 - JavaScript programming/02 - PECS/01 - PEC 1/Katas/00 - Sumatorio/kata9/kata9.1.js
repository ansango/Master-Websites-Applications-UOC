/*
Kata #9.1

Implementa la función plantarArbol que se invoca pasándole dos argumentos (especie y fruta),
y devuelve un objeto con esos valores para dichas propiedades. 
Esto es básicamente un constructor o una factoría.

Debe cumplir estos tests:

1 - En caso de no recibir dos parámetros string del tipo string devolverá null (esto son varios tests)
2 - Al invocar la función con los parámetros peral y pera devuelve el objeto:

{
    especie: 'peral', 
    fruta: pera
}

Pistas: 

https://jestjs.io/docs/en/expect#tobenull
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/typeof
*/

export default function plantarArbol(especie, fruta) {

    const arbol = {
        especie: especie,
        fruta: fruta
    }

    return typeof especie === 'string' && typeof fruta === 'string' ? arbol : null
}