/*

Kata #11: Gestión de errores

A partir del caso anterior vamos a usar la manera habitual para lanzar un error JavaScript. 
Añadid estas líneas en la comprobación de tipo en el setter definirFruta.


throw new Error();

 
Debe cumplir estos tests:

Al crear un arbol e invocar posteriormente definirFruta con el valor 12 el método lanza un error y mantiene su valor previo

 

Pista: https://jestjs.io/docs/en/expect#tothrowerror
*/

export default function repiteString(txt, num) {
    return txt.repeat(num)
}