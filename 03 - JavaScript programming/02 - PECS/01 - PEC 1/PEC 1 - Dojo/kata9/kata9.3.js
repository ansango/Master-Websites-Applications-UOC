/*
Kata #9.3

Implementa por tu cuenta el getter para especie: obtenerEspecie. 
Elimina del objeto devuelto las propiedades fruta y especie y cambialos por los getters obtenerFruta y obtenerEspecie. 

Debe cumplir estos tests:

1 - El objeto devuelto incluye dos propiedades: obtenerEspecie y obtenerFruta
2 - Al invocar el método obtenerEspecie nos devuelve el valor peral
3 - Al invocar el método obtenerFruta nos devuelve el valor pera.

*/

export default function plantarArbol(especie, fruta) {

  const arbol = {
    obtenerEspecie() { 
      return especie
    },
    obtenerFruta() {
      return fruta
    }
  }
  return typeof especie === 'string' && typeof fruta === 'string' ? arbol : null
}