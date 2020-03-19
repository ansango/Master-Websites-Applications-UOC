/*

Kata #10: Prototipo

La potencia del prototipo en JavaScript es enorme. 
Nosotros vamos a hacer un caso sencillo y bastante insustancial 
pero que nos servirá para entender cómo podemos extender la funcionalidad.


Podríamos hacer una extensión de nuestro propio módulo 
pero resulta poco concluyente cuando tenemos acceso directo a su implementación. 

Sin embargo imaginad que queremos añadir una funcionalidad muy concreta sobre 
cada instancia del tipo String en nuestra aplicación. 
Vamos a añadir un método para que dado un string cualquiera podamos invocar el método presentarArbol 
que lo único que hará es un console.log del string sobre el que se ejecuta más el texto 


"Este árbol es un ${nuestro_arbol} y da ${nuestra_fruta}".


Debéis modificar el prototipo de String dentro o fuera de la función pero dentro del módulo y luego pasar los siguientes tests:

    arbol tiene el método obtenerEspecie que devuelve un string que tiene el método presentarArbol
    Al ejecutar presentarArbol se presentar por consola “"Este árbol es un ${nuestro_arbol}”, siendo nuestro_arbol el string sobre el que se ejecuta el método presentarArbol
    Al ejecutar presentarArbol con un parámetro de tipo string se presentar por consola “"Este árbol es un ${nuestro_arbol} y da ${nuestra_fruta}”, siendo nuestra_frutal el string que hemos pasado al método

Pista: https://developer.mozilla.org/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos

*/

export default function repiteString(txt, num) {
    return txt.repeat(num)
}