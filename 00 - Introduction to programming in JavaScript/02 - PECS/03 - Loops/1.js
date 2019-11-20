/*

1 - Escribid un programa en JavaScript que, dado un número entero, si el número es par lo divida por 2, y si es impar lo multiplique por 3 y le sume 1.
Repetir estas operaciones hasta que el resultado sea 1.

Ejemplo: Si el número inicial es 30, la serie calculada es 15,46,23,70,35,106,53,160,80,40,20,10,5,16,8,4,2,1

*/

let n = parseInt(prompt('Introduce un número'))
let arrN = []

while (n > 1){
    if (n % 2 === 0) {
        n = n / 2
    } else if (n % 2 !== 0) {
        n = n * 3 + 1
    }
    arrN.push(n)
}
console.log(arrN)