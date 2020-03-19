/*
Kata #9.4
Es posible que los getters no den una percepción total de la potencia de haber implementado privacidad de datos. 
Por ello vamos a verlo implementado los setters. 

Vamos a implementar y devolver en el objeto dos métodos más: definirEspecie y definirFruta. 

Es obvio su propósito y su implementación pero su potencia radica en que al no acceder directamente 
a los parámetros podemos hacer un control de errores.

Debe cumplir estos tests:

1 - El objeto devuelto incluye cuatro propiedades: obtenerEspecie, definirEspecie y obtenerFruta y definirFruta

2 - Al crear un arbol e invocar posteriormente definirFruta con el valor 12 el objeto arbol 
    mantiene su valor previo (volveremos a este punto cuando estemos viendo gestión de errores)
3 - Al crear un arbol e invocar posteriormente definirFruta con el valor ‘manzana’ 
    el objeto arbol tiene manzana como valor la propiedad fruta.
4 - Haced el equivalente del superior para definirEspecie
 

Pista: es posible que necesiteis definir variables internas var o let (reasignables) 
para poder hacer la asignación inicial y la posterior reasignación de valores.
 */

export default function plantarArbol(especie, fruta) {

    if (typeof especie !== 'string' && typeof fruta !== 'string') {
        return null
    } else {
        const arbol = {
            obtenerEspecie() {
                return especie
            },
            definirEspecie(especie) {
                if (isNaN(parseFloat(especie)) && isFinite(especie)) {
                    this.especie = especie
                } else {
                    throw new Error('yuck, octopus flavor');
                }
            },
            obtenerFruta() {
                return fruta
            },
            definirFruta(fruta) {
                if (isNaN(parseFloat(fruta)) && isFinite(fruta)) {
                    this.fruta = fruta
                } else {
                    throw new Error('yuck, octopus flavor');
                }
            },
        }
        return arbol
    }
}