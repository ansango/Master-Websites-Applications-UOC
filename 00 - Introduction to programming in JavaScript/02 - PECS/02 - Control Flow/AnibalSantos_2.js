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