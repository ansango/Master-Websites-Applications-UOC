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

/*

2 - Escribid un programa en JavaScript que encuentre y muestre por consola los 5 primeros números perfectos.
Un número perfecto es un entero que es igual a la suma de sus divisores positivos, excepto él mismo. 


*/

const ZERO = 0
const LIMIT_PERFECTS = 4
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

/*

5 - Escribid un programa en JavaScript que muestre por consola una aproximación al número Pi mediante la serie de Leibniz. 
Podéis consultar la wikipedia https://es.wikipedia.org/wiki/Serie_de_Leibniz

Ejemplo:

Haciendo 100 iteraciones, entonces mostrar “pi = 3.1315929035585537”
Haciendo 1000 iteraciones, entonces mostrar “pi = 3.140592653839794”
Haciendo 10000 iteraciones, entonces mostrar “pi = 3.1414926535900345”
Haciendo 100000 iteraciones, entonces mostrar “pi = 3.1415826535897198”
Haciendo 1000000 iteraciones, entonces mostrar “pi = 3.1415916535897743”
Haciendo 10000000 iteraciones, entonces mostrar “pi = 3.1415925535897915”

*/

const MAX = 1000000

let sum = 0

for(let i = 0; i < MAX; i++) {
  sum += (Math.pow(-1, i)) / ((2 * i) + 1)
}

let PI = sum * 4

console.log(PI)