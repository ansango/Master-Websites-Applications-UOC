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