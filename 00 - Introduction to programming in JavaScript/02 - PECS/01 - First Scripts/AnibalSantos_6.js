/*

6 - Escribid un programa en JavaScript que muestre por consola si un año concreto es bisiesto o no.
Podéis consultar la wikipedia https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto

*/

let year = prompt('Introduce un año')
let yearLeap = (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0) ? `${year} es bisiesto` : `${year} no es bisiesto`
console.log(`El año ${yearLeap}`)