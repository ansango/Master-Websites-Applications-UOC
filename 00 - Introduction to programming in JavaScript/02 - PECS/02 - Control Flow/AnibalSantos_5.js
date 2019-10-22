/*

5 - Escribid un programa en JavaScript que, dados 5 números, calcule y muestre por consola:

- la media aritmética,
- el máximo valor,
- el mínimo valor, y
- el rango medio (media del máximo y el mínimo)

No hace falta usar bucles, arrays ni funciones, pues se tratarán en temas posteriores.

Ejemplos:

Si los valores son 2, 3, 1, 8, 5, entonces muestra:

media=3.8
máximo=8
mínimo=1
rango=4.5

Si los valores son -45, -30, 10, 40, 80, entonces muestra:

media=11
máximo=80
mínimo=-45
rango=17.5

*/

let a = parseInt(prompt("Introduce el primer número"));
let b = parseInt(prompt("Introduce el segundo número"));
let c = parseInt(prompt("Introduce el tercer número"));
let d = parseInt(prompt("Introduce el cuarto número"));
let e = parseInt(prompt("Introduce el quinto número"));
let media = (a + b + c + d + e) / 5;
console.log(`media = ${media}`)
let maxVal
if (a > b && a > c && a > d && a > e){
    maxVal = a
} else if (b >a && b > c && b > d && b > e) {
    maxVal = b
} else if (c > a && c > b && c > d && c > e) {
    maxVal = c
} else if (d > a && d > b && d > c && d > e) {
    maxVal = d
} else if (e > a && e > b && e > c && e > d) {
    maxVal = e
}
console.log(`máximo = ${maxVal}`)
let minVal
if (a < b && a < c && a < d && a < e){
    minVal = a
} else if (b <a && b < c && b < d && b < e) {
    minVal = b
} else if (c < a && c < b && c < d && c < e) {
    minVal = c
} else if (d < a && d < b && d < c && d < e) {
    minVal = d
} else if (e < a && e < b && e < c && e < d) {
    minVal = e
}
console.log(`mínimo = ${minVal}`)
let range = (minVal + maxVal) / 2
console.log(`rango = ${range}`)