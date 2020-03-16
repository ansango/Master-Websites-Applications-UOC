/*
Kata #8.1 

Implementa el objeto arbol con las propiedades especie de valor manzano y fruta de valor manzana. 

El objeto arbol debe cumplir estos tests:

1 - Debe tener una propiedad especie y una fruta

2 - El valor de la propiedad especie debe ser manzano 

3 - El valor de la propiedad fruta debe ser manzana
 
4 - Debe existir un método obtenerFruta

5 - El resultado de invocar el método obtenerFruta debe ser manzana
 

Nota: me gustaría hacer hincapié en lo similar que es el enunciado a la definición de los tests. 
Es por esto que un buen conjunto de tests definen exactamente lo que hace y cómo funciona el módulo.
*/

export const arbol = {

    especie: 'manzano',
    fruta: 'manzana',
    
    obtenerFruta: function () {
        return this.fruta
    }
}