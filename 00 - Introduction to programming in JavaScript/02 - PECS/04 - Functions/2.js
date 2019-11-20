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

function getProd(n) {
    prod = 1
    while ( n!=0){
        prod = prod * (n % 10)
        n = n / 10
    }
    return prod
}

console.log(getProd(145))
