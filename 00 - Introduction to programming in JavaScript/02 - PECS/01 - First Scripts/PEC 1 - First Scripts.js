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

2 - Analizad el siguiente programa en JavaScript y calculad qué valores tendrá la variable x en cada línea. 
Debéis considerar las cinco líneas como un único programa. Explicad el porqué de cada resultado.

let x=0;
x+=(x++===0?1:0);
x-=(++x!==2?3:4);
x+=(--x<0?4:5);
x-=(++x!==2?0:1);

3- Escribid un programa en JavaScript que muestre por consola el máximo de cuatro números. 
El programa sólo puede usar asignaciones, expresiones y operadores (no puede usar sentencias condicionales ni funciones como Math.max).

4 - Escribid un programa en JavaScript que convierta un número de días a años, meses y días, y muestre el resultado por consola 
(sin considerar los años bisiestos, suponed que todos los meses tienen 30 días y que todos los años tienen 360 días). 
El número de meses no puede ser mayor que 12, y el número de días no puede ser mayor que 30.

Ejemplo: 5236 días => 14 años, 6 meses, 16 días

5 - Escribid un programa en JavaScript que calcule y muestre por consola el mínimo número de billetes que sumen una determinada cantidad de euros 
(hay disponibles billetes de 500, 200, 100, 50, 20, 10 y 5 euros). El resto debe ser menor de 5 euros. 
Después de este cálculo el programa deberá mostrar por consola los resultados y deberá comprobar que el valor de los billetes más el resto coincide con la cantidad inicial de euros, 
en caso que coincidan el programa deberá mostrar por consola el mensaje "Resultado correcto".

Ejemplo: 3.878 euros => 7 de 500, 1 de 200, 1 de 100, 1 de 50, 1 de 20, 0 de 10, i 1 de 5. El resto son 3 euros. Resultado correcto.

6 - Escribid un programa en JavaScript que muestre por consola si un año concreto es bisiesto o no. 
Podéis consultar la wikipedia https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto

*/