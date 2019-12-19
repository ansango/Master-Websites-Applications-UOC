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


/*

2. Escribid una función en JavaScript que devuelva la fecha anterior a una fecha pasada como parámetro en formato de texto 'DD/MM/AAAA', 
donde DD es el día, MM el mes y AAAA el año.

Ejemplo: si la entrada es '01/01/2019', la salida debe ser '31/12/2018'.

*/

function getYesterday(d) {
  let date = new Date(d);
  date.setDate(date.getDate()-1);
  return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
}

console.log(getYesterday('01/01/2019'))

/*

3. Escribid un programa en JavaScript que, dada una frase, la transforme y escriba por consola de manera que después de cada vocal se añada una "p" 
y a continuación se repita la vocal.

Ejemplo: si la entrada és "Hola qué tal", la salida debe ser "Hopolapa qupuépé tapal"

*/

function changeString(string) {
  return string.split('').map(e => {
    if(e.toUpperCase() === 'A' ||
       e.toUpperCase() === 'E' ||
       e.toUpperCase() === 'I' ||
       e.toUpperCase() === 'O' ||
       e.toUpperCase() === 'U' ||
       e.toUpperCase() === 'Á' ||
       e.toUpperCase() === 'É' ||
       e.toUpperCase() === 'Í' ||
       e.toUpperCase() === 'Ó' ||
       e.toUpperCase() === 'Ú') {
      return e + 'p' + e
    } else {
      return e
    }
  }).join('')
}

console.log(changeString('Hola qué tal'))

/*

4. Escribid una función en JavaScript que ordene un array de números mediante ordenación de burbuja. 
Escribid otra función que compruebe que un array de números está ordenado: debe devolver True si están ordenados o False si no lo están. 
Escribid un programa en JavaScript que genere 1000 números aleatorios,
y use las funciones anteriores para ordenarlos y comprobar que están ordenados, a continuación mostrarlos por consola.

Podeís consultar la wikipedia:

https://es.wikipedia.org/wiki/Ordenamiento_de_burbuja

*/

function bubble(arr) {
  for (let i = 0; i < arr.length ; i++) {
    for(let j = 0 ; j < arr.length - i - 1; j++){
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j + 1] = temp;
    }
   }
  }
  return arr;
}

function isSorted(arr) {
let sorted = true;
 for(let i = 0; i < arr.length -1; i++){
   if (arr[i] > arr[i+1]) {
     sorted = false;
   }
 }
 return sorted;
}

let nRandom = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000))

let randomBubble = bubble(nRandom);
let randomCheckSorted = isSorted(randomBubble)

console.log(randomBubble)
console.log(randomCheckSorted)

/*

5. Escribid un programa en JavaScript que muestre por consola un triángulo de Pascal ( o triángulo de Tartaglia) de 20 filas. 
La primera fila sólo tiene un 1. La segunda fila tiene dos 1s. 
En las siguientes filas, los números son el resultado de sumar los dos números inmediatamiente superiores. Los números situados en los laterales siempre son 1.

Podéis consultar la wikipedia:

https://es.wikipedia.org/wiki/Tri%C3%A1ngulo_de_Pascal

https://medium.com/javascript-in-plain-english/algorithms-101-pascals-triangle-in-javascript-9fbd9032871

*/

let numRows = 5

var generate = function(numRows) {
    let triangle = [[1], [1,1]]
    
    if(numRows === 0){
        return []
    } else if(numRows == 1){
        return [[1]]       
    } else if(numRows == 2){
        return  [[1], [1,1]]
    } else {      
        for(let i = 2; i < numRows; i++){       
            addRow(triangle)
        }
    }
    return triangle
    
};
var addRow = function(triangle){
    let previous = triangle[triangle.length - 1]
    let newRow = [1]
    for(let i = 0; i < previous.length - 1; i++){
        let current = previous[i]
        let next = previous[i+1] 
        newRow.push(current + next)
    }
    newRow.push(1)
    return triangle.push(newRow)
    
}

generate(numRows)
