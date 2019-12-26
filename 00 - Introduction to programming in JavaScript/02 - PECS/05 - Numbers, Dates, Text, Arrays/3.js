// Anibal Santos Gomez

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