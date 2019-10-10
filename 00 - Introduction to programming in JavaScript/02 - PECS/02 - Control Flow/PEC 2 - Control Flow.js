/*

1- Comprobad si estos fragmentos de código JavaScript muestran un mensaje de error cuando se ejecutan. Decid qué mensaje muestran y por qué:

    A - 
    var x;
    try {
    x = y - 1;
    }
    catch(err) { console.log(err.name); }

    B-
    var x=1;
    try {
    x.toLowerCase();
    }
    catch(err) { console.log(err.name); }

    C-
    var x=0.9999;
    try {
    console.log(x.toFixed(1000));
    }
    catch(err) { console.log(err.name); }

*/

/*

2 - Escribid un programa en JavaScript que, dada una fecha como un número de día (Número natural entre 1 y 31, ambos incluídos) 
y un número de mes (número natural entre 1 y 12, ambos incluídos), muestre por consola el nombre del mes y la estación del año, según estos rangos de datos:

Entre 21/03 y 20/06 la estación es "primavera"
Entre 21/06 y 22/09 la estación es "verano"
Entre 23/09 y 20/12 la estación es "otoño"
Entre 21/12 y 20/03 la estación es "invierno"

Ejemplos:

Si el día es 1 y el mes es 5 debe escribir "mayo" y "primavera".
Si el día es 25 y el mes es 6 debe escribir "junio" y "verano".
Si el día es 31 y el mes es 12 debe escribir "diciembre" e "invierno".

Los libros tienen un código identificador, el ISBN (International Standard Book Number). 
Hay códigos ISBN de 10 dígitos (ISBN-10) o de 13 dígitos (ISBN-13), estos últimos desde 2007. 
El dígito de control  de un código ISBN-13 se calcula multiplicando el primer dígito por 1, el segundo por 3, el tercero por 1, el cuarto por 3, etc, hasta llegar al 12º dígito. 
El 13º dígito es el de control, y es el valor que hay que añadir a la suma de todos estos productos para que sea divisible por 10.

*/

/*

3 - Escribid un programa en JavaScript que compruebe si un código ISBN-13 dado tiene el dígito de control correcto o no. 
Si el dígito de control es correcto debe escribir por consola el mensaje "CORRECTO", sinó debe escribir "INCORRECTO".

Podéis consultar la wikipedia: https://es.wikipedia.org/wiki/ISBN

Ejemplos:

Si el código ISBN es 9781593272821, debe escribir "CORRECTO"
Si el código ISBN es 9781593272820, debe escribir "INCORRECTO"


*/

/*

4 - Escribid un programa en JavaScript que decida, dadas las longitudes de sus lados, si un triángulo es equilátero (los tres lados de la misma longitud), isósceles (sólo dos lados de la misma longitud) o escaleno (los tres lados de longitud diferente). Debe mostrarse por consola el tipo de triángulo ("equilátero", "isósceles" o "escaleno"). El programa también debe calcular y mostrar por pantalla el área del triángulo. haciendo uso de la fórmula de Herón. En caso que no se pueda calcular el área debe mostrar el mensaje "Área no calculable".

Podeís consultar la wikipedia https://es.wikipedia.org/wiki/F%C3%B3rmula_de_Her%C3%B3n

Ejemplos:

Si los lados miden  3,3 y 3, entonces mostrar “equilátero, área=3.897114317029974”

Si los lados miden 3,4 y 4, entonces mostrar “isósceles, área=5.562148865321747”

Si los lados miden 3,4 y 5, entonces mostrar “escaleno, área=6”

Si los lados miden 3,3 y 7, entonces mostrar “Área no calculable”


*/

/*

5 - Escribid un programa en JavaScript que, dados 5 números, calcule y muestre por consola:

- la media aritmética,
- el máximo valor,
- el mínimo valor, y
- el rango medio (media del máximo y el mínimo)

No hace falta usar bucles, arrays ni funciones, pues se tratarán en temas posteriores.

Ejemplos:

Si los valores son 2, 3, 1, 8, 5, entonces muestra:

media=3.8
máximo=8
mínimo=1
rango=4.5

Si los valores son -45, -30, 10, 40, 80, entonces muestra:

media=11
máximo=80
mínimo=-45
rango=17.5

*/