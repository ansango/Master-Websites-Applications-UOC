/*

3 - Escribid un programa en JavaScript que muestre por consola los 50 primeros términos de la serie de Fibonacci (n=0 a n=49).
El programa también debe mostrar la suma de estos 50 términos. Podéis consultar la wikipedia https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci

Ejemplo:

n=0 f=0
n=1 f=1
n=2 f=1
n=3 f=2
n=4 f=3
n=5 f=5
n=6 f=8
n=7 f=13
n=8 f=21
n=9 f=34
n=10 f=55
...
n=47 f=2971215073
n=48 f=4807526976
n=49 f=7778742049
suma=20365011073

*/

let fibonacci = []

for(let n = 0; n < 50; n++) {
    if(n <= 1) {
        fibonacci.push(n)
    } else {
        fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    }
    console.log(`n=${n}, f=${fibonacci[n]}`)
}
console.log(`Suma: ${fibonacci.reduce((total, num) => { return total += num })}`)
