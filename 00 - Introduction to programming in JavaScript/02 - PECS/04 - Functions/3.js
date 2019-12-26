// Anibal Santos Gomez

/*

3. Escribid una función en JavaScript que calcule el factorial de un número natural.
Escribid otra función que, usando la anterior función, compruebe si dos número naturales (m, n) son números de Brown, es decir, cumplen que n!+1=m*m.
Escribid un programa en JavaScript que, usando estas funciones, encuentre números de Brown (considerad sólo numeros 1<=m<=100, 1<=n<=100).

*/

function factorial(n) {
    let total = 1; 
      for (i=1; i<=n; i++) {
          total *= i; 
      }
      return total; 
  }
  
  function areBrownNumbers(n, m) {
    if((n < 1 || n > 100) || (m < 1 || m > 100) ) return "Numbers not valid"
    return ((factorial(n) + 1) == (m * m)) ? true : false
  }
  
  console.log(areBrownNumbers(4,5))  // true
  console.log(areBrownNumbers(7,71)) // true
  console.log(areBrownNumbers(78,7)) // false