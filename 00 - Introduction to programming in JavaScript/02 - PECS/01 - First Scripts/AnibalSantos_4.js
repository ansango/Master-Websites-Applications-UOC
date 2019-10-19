/*

4 - Escribid un programa en JavaScript que convierta un número de días a años, meses y días, y muestre el resultado por consola
(sin considerar los años bisiestos, suponed que todos los meses tienen 30 días y que todos los años tienen 360 días).
El número de meses no puede ser mayor que 12, y el número de días no puede ser mayor que 30.

Ejemplo: 5236 días => 14 años, 6 meses, 16 días

*/

let n = prompt("Introduce un numero")
let years = Math.floor(n / 365)
let months = Math.floor(n % 365 / 30)
let days = Math.floor(n % 365 % 30)

let nYears = years > 0 ? years + (years == 1 ? ' año, ' : ' años ') : ''
let nMonths = months > 0 ? months + (months == 1 ? ' mes, ' : ' meses ') : ''
let nDays = days > 0 ? days + (days == 1 ? ' dia ' : ' dias ') : ''

console.log(`${nYears} ${nMonths} ${nDays}`)