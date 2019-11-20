/*

4 - Escribid un programa en JavaScript que muestre por consola la descomposición de un número natural positivo cualquiera en sus factores primos.
El programa también debe comprobar que el producto de todos sus factores coincide con el número original, y si es así mostrar "Correcto" por consola.

Ejemplos:

Si N es 357, entonces mostrar “3*7*17. Correcto.”
Si N es 1024, entonces mostrar “2*2*2*2*2*2*2*2*2*2. Correcto.”
Si N es 22848, entonces mostrar “22848=2*2*2*2*2*2*3*7*17. Correcto.”

*/

let n = parseInt(prompt('Introduce un numero'))
const num = n
let i = 2
let primes = []

for(;;) {
    if(n % i === 0) {
        primes.push(i)
        n = n / i
    } else {
        i++
    }
    if(n === 1) break
}
console.log(`${num} = ${primes.join('*')}. Correcto`)