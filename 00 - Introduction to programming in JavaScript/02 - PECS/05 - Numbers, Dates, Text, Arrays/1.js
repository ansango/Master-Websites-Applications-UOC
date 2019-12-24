// Anibal Santos Gomez

/*

1 . Escribid una función en JavaScript que devuelva la fecha actual en formato de texto "día de mes de año".

Ejemplo: si hoy es 13/08/2018, la salida debe ser "13 de agosto de 2018".


*/

let today = new Date()
let day = today.getDate()
let month = today.getMonth()
let year = today.getFullYear()

switch (month) {
  case 1:
  month = 'enero'
  break;
  case 2:
  month = 'febrero'
  break;
  case 3:
  month = 'marzo'
  break;
  case 4:
  month = 'abril'
  break;
  case 5:
  month = 'mayo'
  break;
  case 6:
  month = 'junio'
  break;
  case 7:
  month = 'julio'
  break;
  case 8:
  month = 'agosto'
  break;
  case 9:
  month = 'septiembre'
  break;
  case 10:
  month = 'octubre'
  break;
  case 11:
  month = 'noviembre'
  break;
  case 12:
  month = 'diciembre'
  break;
}

console.log(`${day} de ${month} de ${year}`)