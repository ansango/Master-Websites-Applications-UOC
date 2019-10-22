/*

1- Comprobad si estos fragmentos de código JavaScript muestran un mensaje de error cuando se ejecutan. Decid qué mensaje muestran y por qué:

    A - 
    var x;
    try {
    x = y - 1;
    }
    catch(err) { console.log(err.name); }

    B-
    var x=1;
    try {
    x.toLowerCase();
    }
    catch(err) { console.log(err.name); }

    C-
    var x=0.9999;
    try {
    console.log(x.toFixed(1000));
    }
    catch(err) { console.log(err.name); }



*/

/* 

A - 'ReferenceError' 

    Este error quiere decir que hay una variable que está siendo referida en algún lugar y no está declarada, como vemos, se declara la variable x pero no la y.

B - 'TypeError'

    Este error hace referencia a que el argumento o el operando que se pasa a toLowercase() es incompatible con el tipo esperado por la función. En este caso le estamos pasando un número entero.
    El metodo espera que le pasemos una cadena (string como argumento para devolverlo en minúsculas.

C - 'RangeError'

    Este error indica que un valor no se encuentra dentro de un rango de valores permitidos. Como el método toFixed() formatea un numero usando notacion de punto fijo, puede dar este error si los digitos
    introducidos son demasiado grandes o demasiado pequeños, como en este caso el pasarle 1000.

*/

/*

2 - Escribid un programa en JavaScript que, dada una fecha como un número de día (Número natural entre 1 y 31, ambos incluídos) 
y un número de mes (número natural entre 1 y 12, ambos incluídos), muestre por consola el nombre del mes y la estación del año, según estos rangos de datos:

Entre 21/03 y 20/06 la estación es "primavera"
Entre 21/06 y 22/09 la estación es "verano"
Entre 23/09 y 20/12 la estación es "otoño"
Entre 21/12 y 20/03 la estación es "invierno"

Ejemplos:

Si el día es 1 y el mes es 5 debe escribir "mayo" y "primavera".
Si el día es 25 y el mes es 6 debe escribir "junio" y "verano".
Si el día es 31 y el mes es 12 debe escribir "diciembre" e "invierno".

*/

let day = parseInt(prompt("Introduce un número de día"));
let month = parseInt(prompt("Introduce un nuḿero de mes"));

if (day > 31 || day <= 0) {
  console.log("introduce un valor válido de día");
} else {
  switch (month) {
    case 1:
      console.log("es enero y es invierno");
      break;
    case 2:
      console.log("es febrero y es invierno");
      break;
    case 3:
      if (day <= 20) {
        console.log("es marzo y es invierno");
      } else {
        console.log("es marzo y es primavera");
      }
      break;
    case 4:
      console.log("es abril y es primavera");
      break;
    case 5:
      console.log("es mayo y es primevera");
      break;
    case 6:
      if (day <= 20) {
        console.log("es junio y es primavera");
      } else {
        console.log("es junio y es verano");
      }
      break;
    case 7:
      console.log("es julio y es verano");
      break;
    case 8:
      console.log("es agosto y es verano");
      break;
    case 9:
      if (day <= 20) {
        console.log("es septiembre y es verano");
      } else {
        console.log("es septiembre y es otoño");
      }
      break;
    case 10:
      console.log("es octubre y es otoño");
      break;
    case 11:
      console.log("es noviembre y es otoño");
      break;
    case 12:
      if (day <= 20) {
        console.log("es diciembre y es otoño");
      } else {
        console.log("es diciembre y es invierno");
      }
      break;
    default:
      console.log("introduce un número de mes correcto por favor.");
      break;
  }
}

/*

3 - Los libros tienen un código identificador, el ISBN (International Standard Book Number).
Hay códigos ISBN de 10 dígitos (ISBN-10) o de 13 dígitos (ISBN-13), estos últimos desde 2007.
El dígito de control  de un código ISBN-13 se calcula multiplicando el primer dígito por 1, el segundo por 3, el tercero por 1, el cuarto por 3, etc, hasta llegar al 12º dígito.
El 13º dígito es el de control, y es el valor que hay que añadir a la suma de todos estos productos para que sea divisible por 10.


Escribid un programa en JavaScript que compruebe si un código ISBN-13 dado tiene el dígito de control correcto o no.
Si el dígito de control es correcto debe escribir por consola el mensaje "CORRECTO", sinó debe escribir "INCORRECTO".

Podéis consultar la wikipedia: https://es.wikipedia.org/wiki/ISBN

Ejemplos:

Si el código ISBN es 9781593272821, debe escribir "CORRECTO"
Si el código ISBN es 9781593272820, debe escribir "INCORRECTO"


*/

let isbn = Array.from(
  String(prompt("introduce el código ISBN-13 para comprobar el dígito")),
  Number
);
let digit = parseInt(isbn.slice(-1).toString());
let isbnValidate = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3];
isbn.pop();
let result = 0;

for (let i = 0; i < isbn.length; i++) {
  result += isbn[i] * isbnValidate[i];
}
result = result + digit;

if (result % 10 === 0) {
  console.log("correcto");
} else {
  console.log("incorrecto");
}

/*

4 - Escribid un programa en JavaScript que decida, dadas las longitudes de sus lados, si un triángulo es equilátero (los tres lados de la misma longitud), isósceles (sólo dos lados de la misma longitud) o escaleno (los tres lados de longitud diferente). 
Debe mostrarse por consola el tipo de triángulo ("equilátero", "isósceles" o "escaleno"). El programa también debe calcular y mostrar por pantalla el área del triángulo. haciendo uso de la fórmula de Herón. 
En caso que no se pueda calcular el área debe mostrar el mensaje "Área no calculable".

Podeís consultar la wikipedia https://es.wikipedia.org/wiki/F%C3%B3rmula_de_Her%C3%B3n

Ejemplos:

Si los lados miden  3,3 y 3, entonces mostrar “equilátero, área=3.897114317029974”

Si los lados miden 3,4 y 4, entonces mostrar “isósceles, área=5.562148865321747”

Si los lados miden 3,4 y 5, entonces mostrar “escaleno, área=6”

Si los lados miden 3,3 y 7, entonces mostrar “Área no calculable”


*/

let a = parseInt(prompt("Introduce el primer lado"));
let b = parseInt(prompt("Introduce el segundo lado"));
let c = parseInt(prompt("Introduce el tercer lado"));
let sem = (a + b + c) * 0.5;
let area = Math.sqrt(sem * (sem - a) * (sem - b) * (sem - c));

if (Number.isNaN(area)) {
  console.log("Área no ejecutable");
} else {
  if (a === b && a === c && b === c) {
    console.log(`el triangulo es equilatero y tiene un área de ${area}`);
  } else if (a === b || a === c || b === c) {
    console.log(`el triangulo es isósceles y tiene un área de ${area}`);
  } else {
    console.log(`el triangulo es escaleno y tiene un área de ${area}`);
  }
}

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
