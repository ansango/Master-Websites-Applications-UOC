export default function sumatorio(num) {
    let sumatorio = 0;
    let valorActual = num;

    while (valorActual !== 0) {
        sumatorio = sumatorio + valorActual;
        valorActual = valorActual - 1;
    }

  return sumatorio;

  // Otras soluciones menos legibles

  //return(num * (num + 1)/2)
  //return num ? num + sumatorio(num - 1):0;
}