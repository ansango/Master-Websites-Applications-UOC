/*

3- Escribid un programa en JavaScript que muestre por consola el máximo de cuatro números. 
El programa sólo puede usar asignaciones, expresiones y operadores (no puede usar sentencias condicionales ni funciones como Math.max).

*/

let n1 = prompt("Introduce un numero")
let n2 = prompt("Introduce un numero")
let n3 = prompt("Introduce un numero")
let n4 = prompt("Introduce un numero")

let max = ((n1 > n2) && (n1 > n3) && (n1 > n4)) ? n1 : ((n2 > n3) && (n2 > n4)) ? n2 : (n3 > n4) ? n3 : n4

console.log(`El número máximo introducido es: ${max}`)