/*
5. Escribid una función en JavaScript que calcule el término enésimo de una serie de Fibonacci.
    Escribid otra funcion que, usando la función anterior, calcule el factorial de Fibonacci (o fibonorial) de un número natural n,
    el cual es el producto de los n primeros términos de Fibonacci (empezando por 1).
Escribid un programa en JavaScript que, usando las anteriores funciones, muestre por consola  los 15 primeros factoriales de Fibonacci.

    Podéis consultar la wikipedia:

    https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci
        https://en.wikipedia.org/wiki/Fibonorial

*/

function fib(x) {
    let fibonacci = []
  
    for(let n = 0; n < x; n++) {
        if(n <= 1) {
            fibonacci.push(n)
        } else {
            fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
        }
    }
    return fibonacci
  }
  
  function facFib(n) {
    let a = 1
    fib(n).forEach(e => {
      if(e >= 1) {
        a *= e
      } 
    })
    console.log('N: '+ n)
    console.log(fib(n))
    return a
  }
  
  for(let i = 0; i < 15; i++) {
    console.log(facFib(i))
  }