/*
2. Escribid una función en JavaScript que, dada una serie de 3 dígitos, devuelva su producto. Usad esta función en un programa que,
dada una serie de dígitos numéricos en un único String,
muestre por consola el mayor producto de una subserie de 3 dígitos consecutivos.

 Ejemplo: si la entrada es "1456324", la salida debe ser 120. Las subseries evaluadas serían las siguientes:
   1*4*5=20
   4*5*6=120
   5*6*3=90
   6*3*2=36
   3*2*4=24
*/

function mult(elements) {
    return elements.reduce((a, e) => a * e)
  }
  const input = "1456324" /* Entrada */
  
  /* Convertimos la cadena en un array de cada uno de sus dígitos */
  let array = input.split('').map(e => parseInt(e))
  
  /* Candidatos a ser pasados a la función que los multiplica */
  let candidates = []
  
  /* Recorremos el array y realizamos la llamada al nuestra función */
  for(;;) {
    candidates.push(mult([array.shift(), array[0], array[1]]))
    if(array.length == 0) break
  }
  
  /* Eliminamos los NaN */
  const result = candidates.filter(e => !isNaN(e))
  
  /* Obtenemos el producto mayor */
  console.log(Math.max(...result))
