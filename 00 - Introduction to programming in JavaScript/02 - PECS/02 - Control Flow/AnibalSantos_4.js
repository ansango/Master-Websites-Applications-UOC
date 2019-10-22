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