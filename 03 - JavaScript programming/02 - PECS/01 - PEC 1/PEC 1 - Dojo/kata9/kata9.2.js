/*
Kata #9.2

Al haber creado una función para crear y devolver objetos, 
hemos construido un closure alrededor de nuestros datos,
por lo que podemos asignarlos al scope propio de la función. 

En la implementación de la función en lugar de devolver directamente los parámetros recibidos,
vamos a implementar una nueva propiedad (método) en el objeto devuelto,
que sea la función obtenerFruta que lo que hace es, 
obviamente, devolver fruta.

Debe cumplir estos tests (es posible que tengáis que modificar alguno previo):

1 - El objeto devuelto incluye tres propiedades: especie, fruta y obtenerFruta (esto son tres comprobaciones independientes)
2 - Al invocar el método obtenerFruta nos devuelve el valor pera
 

Con esto comprobamos cómo gracias a un método podemos enmascarar el valor de la propiedad al obtenerla mediante un método. 
Esto nos permite tener privacidad de datos ya que desactivamos el acceso directo a los datos. 
Estos métodos que nos permiten acceder a propiedades se conocen como getters.
*/

export default function plantarArbol(especie, fruta) {

  const arbol = {
    especie: especie,
    fruta: fruta,
    obtenerFruta() {
      return fruta
    }
  }

  return typeof especie === 'string' && typeof fruta === 'string' ? arbol : null

}
