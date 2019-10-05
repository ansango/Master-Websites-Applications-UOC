/*1. Intentad averiguar el resultado de las siguientes expresiones en  JavaScript. Comprobad después los resultados con pequeños programas:

    true && true  --- true
    false && true  --- false
    1 == 1 && 2 == 1  --- false
    "prueba" == "prueba"  --- true
    1 == 1 || 2 != 1  --- true
    true && 1 == 1  --- true
    false && 0 != 0  --- fasle
    true || 1 == 1  --- true
    "prueba" == "probado"  --- false
    1 != 0 && 2 == 1  --- false
    "prueba" != "probado"  --- true
    "prueba" == 1  --- false
    !(true && false)  --- true
    !(1 == 1 && 0 != 1)  --- false
    !(10 == 1 || 100 == 100)  --- false
    !(1 != 10 || 3 == 4)  --- false
    !("prueba" == "prueba" && "Java" == "JavaScript")  --- true
    1 == 1 && (!("prueba" == 1 || 1 == 0))  --- true
    "Java" == "JavaScript" && (!(2 == 3 || 2 == 2))  --- false
    2 == 2 && (!("prueba" == "prueba" || "Java" == "JavaScript"))  --- false
    
*/

let ev = true && true;
console.log(ev);

let ev1 = false && true;
console.log(ev1);

let ev2 = 1 == 1 && 2 == 1;
console.log(ev2);

let ev3 = "prueba" == "prueba";
console.log(ev3);

let ev4 = 1 == 1 || 2 != 1;
console.log(ev4);

let ev5 = 1 == 1 || 2 != 1;
console.log(ev5);

let ev6 = true && 1 == 1;
console.log(ev6);

let ev7 = false && 0 != 0;
console.log(ev7);

let ev8 = true || 1 == 1;
console.log(ev8);

let ev9 = "prueba" == "probado";
console.log(ev9);

let ev10 = 1 != 0 && 2 == 1;
console.log(ev10);

let ev11 = "prueba" != "probado";
console.log(ev11);

let ev12 = "prueba" == 1;
console.log(ev12);

let ev13 = !(true && false);
console.log(ev13);

let ev14 = !(1 == 1 && 0 != 1);
console.log(ev14);

let ev15 = !(10 == 1 || 100 == 100);
console.log(ev15);

let ev16 = !(1 != 10 || 3 == 4);
console.log(ev16);

let ev17 = !("prueba" == "prueba" && "Java" == "JavaScript");
console.log(ev17);

let ev17 = 1 == 1 && !("prueba" == 1 || 1 == 0);
console.log(ev17);

let ev17 = "Java" == "JavaScript" && !(2 == 3 || 2 == 2);
console.log(ev17);

let ev17 = 2 == 2 && !("prueba" == "prueba" || "Java" == "JavaScript");
console.log(ev17);

//2. Escribid un programa en JavaScript que calcule el perímetro y el área de un rectángulo de lados 20 y 80 unidades. Probad con otros valores.

let a = 20;
let b = 80;

let area = b * a;
let perimetro = 2 * (b + a);

console.log("Area", area);
console.log("Perimetro", perimetro);

//3. Escribid un programa en JavaScript que calcule el perímetro y el área de un círculo de radio 10 unidades. Probad con otros valores.

let pi = Math.PI;
let radio = 10;
let area = pi * 10 ** 2;
let perimetro = 2 * pi * radio;

console.log("Area", area);
console.log("Perimetro", perimetro);

//4. Escribid un programa en JavaScript que calcule el sueldo mensual a partir del número de horas trabajadas (160 horas) y el precio por hora trabajada (12 €). Probad con otros valores.

let horas = 160;
let precioHora = 12;
let salario = horas * precioHora;

console.log("Salario", salario + " € " + "mensual");

//5. Escribid un programa en JavaScript que calcule el índice de masa corporal (IMC) de una persona de 70 kg de peso y 1, 80 m de altura. Comprobad el resultado con diversos valores. Podéis consultar la fórmula en la wikipedia  https://es.wikipedia.org/wiki/%C3%8Dndice_de_masa_corporal

let peso = 70;
let altura = 1.8;

let imc = 70 / 1.8 ** 2;

console.log("IMC", imc);

//6. Escribid un programa en JavaScript que calcule las soluciones de una ecuación de segundo grado de la forma a*x*x + b*x + c = 0, dados a, b i c (suponemos que b*b > 4*a*c).

let a = 2;
let b = -2;
let c = -4;
let discr = b ** 2 - 4 * a * c;
let x1 = (-b + Math.sqrt(discr)) / 2;
let x2 = (-b - Math.sqrt(discr)) / 2;

console.log(`La solución es, para x1 = ${x1} y para x2 = ${x2}`);

/*7. Escribid un programa en JavaScript que calcule el número de días de un mes concreto de un año concreto (teniendo en cuenta los años bisiestos). Podéis consultar la wikipedia https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto

    Ejemplos:

    Mes:2 Año:2000 Días:29  (bisiesto, divisible por 400)
    Mes:2 Año:2018 Días:28  (no bisiesto, no divisible por 4)
    Mes:2 Año:2020 Días:29  (bisiesto, divisible por 4)
    Mes:2 Año:2100 Días:28 (no bisiesto, divisible por 100)
*/

let year = prompt("Introduce un año (número):");
let month = prompt("Introduce un mes (número)");
let day = null;

days =
    month === 4 || month === 6 || month === 9 || month === 11 ?
    30 :
    month === 2 ?
    28 :
    31;
days =
    month === 2 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ?
    28 :
    29;

console.log(`El mes ${month} del año ${year} tiene ${days} días`);

/*8. Escribid un programa en JavaScript que calcule el día de la semana de una fecha cualquiera. Podéis consultar la wikipedia https://es.wikipedia.org/wiki/Congruencia_de_Zeller

    Podéis comprobar los resultados en el sitio web https://www.timeanddate.com/calendar/

*/

let day = prompt("Introduce un dia (número):");

let month = prompt("Introduce un mes (número):");
let century = prompt("Introduce una centuria (dos primeros dígitos del año):");
let decade = prompt("Introduce una década (dos últimos dígitos del año):");


// dia de la semana

let h = (day + Math.floor(2.6 * (month + 1)) + decade + Math.floor(decade / 4) + Math.floor(century / 4) - 2 * century) % 7;

let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

console.log(days[h]);

/*9. Escribid un programa en JavaScript que calcule en qué cuadrante se encuentra un punto definido por la coordenadas cartesianas (x, y) definidas por las variables x e y. El programa sólo puede usar asignaciones, expresiones y operadores (no puede usar sentencias condicionales), y debe cumplir lo siguiente:

    Si (x>=0) y (y>=0), entonces el cuadrante es 3
    Si (x<0) y (y>=0), entonces el cuadrante es 2
    Si (x>=0) y (y<0), entonces el cuadrante es 1
    Si (x<0) y (y<0), entonces el cuadrante es 0

*/

let x = prompt("Introduce un número (x");
let y = prompt("Introduce un número (y");

let quadrant = (x >= 0) && (y >= 0) ? 3 : (x < 0) && (y >= 0) ? 2 : (x >= 0) && (y < 0) ? 1 : 0

console.log(`el cuadrante es: (${x}, ${y} )`)