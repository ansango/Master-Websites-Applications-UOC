/*
Kata #8.2 

Implementa la función obtenerFruta que recibe un objeto y devuelve el valor de la propiedad fruta.

Debe cumplir estos tests:

1 - El elemento recibido tiene la propiedad fruta
2 - Si el elemento recibido tiene la propiedad fruta devuelve su valor
(usad el objeto arbol para que devuelva manzana), 
3 - en cualquier otro caso devuelve el string “No fruta”

*/

export default function obtenerFruta(objeto) {
    if(typeof objeto.fruta != "undefined"){
        return objeto.fruta
    } else {
      return 'No fruta'
    }
  }