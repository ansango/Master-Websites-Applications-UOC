// Anibal Santos Gomez

/*

4. Un triplete pitagórico es un conjunto de tres números naturales, a < b < c, para los cuales se cumple que a*a+b*b=c*c.
Escribid una función en JavaScript que, dados tres valores a, b y c, compruebe que forman un triplete pitagórico.
Escribid un programa en JavaScript que, usando esta función, encuentre un triplete pitagórico que cumpla que a+b+c=1000.

*/

function esTripleteP(a, b, c) {
    return (a < b && b < c && (a * a + b * b === c * c))  ? true : false
  }
  
  for(let c = 0; c <= 1000; c++) {
    for(let b = 0; b <= 1000; b++) {
      for(let a = 0; a <= 1000; a++) {
        let sum = a + b + c
        if(sum == 1000 && esTripleteP(a, b, c)) console.log(`Los numeros son: ${a} + ${b} + ${c}`)
      }
    }
  }