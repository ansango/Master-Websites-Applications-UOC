/*

Kata #0: sumatorio

sumar todos sus valores consecutivos hasta llegar a 0, siendo 1 el último valor a sumar. Por ejemplo: sumatorio de 3 equivale a 3 + 2 + 1 = 6.

*/

export default function sumatorio(num) {
    let sumatorio = 0;
    let valorActual = num;

    while (valorActual !== 0) {
        sumatorio = sumatorio + valorActual;
        valorActual = valorActual - 1;
    }

  return sumatorio;
}