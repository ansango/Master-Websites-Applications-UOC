/*

1 - Analizad el siguiente programa en JavaScript y calculad qué valores acabarán teniendo las variables. 
Debéis considerar las ocho líneas como un único programa: cada expresión puede contener variables cuyos valores se han calculado en líneas anteriores. 
Explicad el porqué de cada resultado:


let z01=0;
let z02=(z01=="0");
let z03=(z01===0);
let z04=(z01="0");
let z05=(z04=="0");
let z06=(z01==="0");
let z07=(z01===0);
let z08=(z01==0);

z01 --- 0 (int), es entero
z02 --- true, porque == convierte los operandos aunque no sean del mismo tipo de dato, por lo que devuelve true al ser 0 un entero y 0 un string
z03 --- true, z01 vale 0 como entero por lo que === devuelve true al ser estrictamente igual 0 entero.
z04 --- 0 (string), devuelve 0 string modificando el valor de z01 a "0", con el operador de asignación =
z05 --- true, como z01 vale "0" strig, y este se le compara con el operador de igualdad simple == a "0" string, devuelve true
z06 --- true, z01 vale "0" string por lo que estrictamente === tiene el mismo valor que "0", devuelve true
z07 --- false, z01 ya no vale 0 como numero entero, por lo que estrictamente === devuelve false al no ser el mismo tipo de dato (ya que javascript no lo convierte)
z08 --- true, devuelve tru porque javascript convierte el mediante igualdad siemple y no siendo del mismo tipo los operandos "0" y 0.

*/



/*

2 - Analizad el siguiente programa en JavaScript y calculad qué valores tendrá la variable x en cada línea. 
Debéis considerar las cinco líneas como un único programa. Explicad el porqué de cada resultado.

let x=0;
x+=(x++===0?1:0);
x-=(++x!==2?3:4);
x+=(--x<0?4:5);
x-=(++x!==2?0:1);


let x=0; --- 0
x+=(x++===0?1:0); --- 1, si x++ es 0 
x-=(++x!==2?3:4); --- -3,
x+=(--x<0?4:5); --- 1,
x-=(++x!==2?0:1); --- 0,

*/



/*

3- Escribid un programa en JavaScript que muestre por consola el máximo de cuatro números. 
El programa sólo puede usar asignaciones, expresiones y operadores (no puede usar sentencias condicionales ni funciones como Math.max).

*/

let n1 = prompt("Introduce un numero")
let n2 = prompt("Introduce un numero")
let n3 = prompt("Introduce un numero")
let n4 = prompt("Introduce un numero")

let max = n1 > n2 && n3 && n4 ? n1 : n2 > n3 && n4 ? n2 : n3 > n4 ? n3 : n4

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

console.log(`Los billetes son ${fiveH} de 500, ${twoH} de 200, ${oneH} de 100, ${fifty} de 50, ${twenty} de 20, ${ten} de 10, ${five} de 5, y el resto es ${q}`)

/*

6 - Escribid un programa en JavaScript que muestre por consola si un año concreto es bisiesto o no.
Podéis consultar la wikipedia https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto

*/