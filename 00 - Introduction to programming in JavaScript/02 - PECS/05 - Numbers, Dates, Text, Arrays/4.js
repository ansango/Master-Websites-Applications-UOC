// Anibal Santos Gomez

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