/*
2 - Escribid un programa en JavaScript que encuentre y muestre por consola los 5 primeros números perfectos.
Un número perfecto es un entero que es igual a la suma de sus divisores positivos, excepto él mismo.
*/

const ZERO = 0
const LIMIT_PERFECTS = 5
const FIRST_CANDIDATE = 1

let i =  FIRST_CANDIDATE // Candidato a ser perfecto
let arrayPerfects = []

// Bucle infito que buscará los números perfectos
for(;;) {
    let sum = ZERO
    // Bucle que compruebe si el número es perfecto
    for (let j = 1; j < i; j++) {
        if(i % j === ZERO) {
            sum += j
        }
    }
    if(sum === i) {
        arrayPerfects.push(i)
        console.log(arrayPerfects)
    }
    if(arrayPerfects.length === LIMIT_PERFECTS) break
    i++ // Incrementamos el candidato a perfecto
}