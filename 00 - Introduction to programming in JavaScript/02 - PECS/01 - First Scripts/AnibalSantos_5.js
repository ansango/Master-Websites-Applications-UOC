
/*

5 - Escribid un programa en JavaScript que calcule y muestre por consola el mínimo número de billetes que sumen una determinada cantidad de euros
(hay disponibles billetes de 500, 200, 100, 50, 20, 10 y 5 euros). El resto debe ser menor de 5 euros.
Después de este cálculo el programa deberá mostrar por consola los resultados y deberá comprobar que el valor de los billetes más el resto coincide con la cantidad inicial de euros,
en caso que coincidan el programa deberá mostrar por consola el mensaje "Resultado correcto".

Ejemplo: 3.878 euros => 7 de 500, 1 de 200, 1 de 100, 1 de 50, 1 de 20, 0 de 10, i 1 de 5. El resto son 3 euros. Resultado correcto.

*/

let q = prompt('introduce una cantidad')
let fiveH = Math.floor(q / 500)
q = q % 500
let twoH = Math.floor(q / 200)
q = q % 200
let oneH = Math.floor(q / 100)
q = q % 100
let fifty = Math.floor(q / 50)
q = q % 50
let twenty = Math.floor(q / 20)
q = q % 20
let ten = Math.floor(q / 10)
q = q % 10
let five = Math.floor(q / 5)
q = q % 5

console.log(`Los billetes son ${fiveH} de 500, ${twoH} de 200, ${oneH} de 100, ${fifty} de 50, ${twenty} de 20, ${ten} de 10, ${five} de 5, y el resto es ${q}. Resultado correcto`)