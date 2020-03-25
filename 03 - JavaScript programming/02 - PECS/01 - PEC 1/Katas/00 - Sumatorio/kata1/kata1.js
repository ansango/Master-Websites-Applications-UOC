/*

Kata #1: par o impar

Implementa la función par_o_impar(Number) que toma un entero como argumento y devuelve “Par” para números pares o “Impar” para números impares. 

Debe cumplir estos tests:

par_o_impar(0) devuelve el string “Par”
par_o_impar(1) devuelve el string “Impar”
par_o_impar(2) devuelve el string “Par”
par_o_impar(3) devuelve el string “Impar”

*/

export default function par_o_impar(num) {
  return num % 2 === 0 ? 'pair' : 'unpair'
}