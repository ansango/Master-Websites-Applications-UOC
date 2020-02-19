export default function sumatorio(num) {
    let sumatorio = 0;
    let valorActual = num;

    while (valorActual !== 0) {
        sumatorio = sumatorio + valorActual;
        valorActual = valorActual - 1;
    }

  return sumatorio;
}