export default function suma_de_elementos_positivos(array) {
let sum = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] > 0){
      sum += array[i]
    }
  }
  return sum
}