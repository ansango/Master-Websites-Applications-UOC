/*

Kata #2: suma de los elementos positivos de una matriz
 

Implementa la función suma_de_elementos_positivos(Array de Numbers) que toma una array de enteros como argumento y devuelve la suma total de los elementos positivos. 

Debe cumplir estos tests:

suma_de_elementos_positivos([]) devuelve el número 0
suma_de_elementos_positivos([1,2,3,4,5]) devuelve el número 15
suma_de_elementos_positivos([1,-2,3,4,5]) devuelve el número 13
suma_de_elementos_positivos([-1,2,3,4,-5]) devuelve el número 9
suma_de_elementos_positivos([-1,-2,-3,-4,-5]) devuelve el número 0

*/

export default function suma_de_elementos_positivos(array) {
let sum = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] > 0){
      sum += array[i]
    }
  }
  return sum
}