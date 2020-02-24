
/*

Kata #6: scope y closure
En este ejercicio no debéis implementar ningún código a no ser que queráis verificar vuestra respuesta. La solución a este ejercicio pasa por una explicación redactada por vuestra parte, con vuestras palabras sobre lo que sucede en este código y el resultado de cada una de las líneas ejecutadas.

No espero una explicación perfecta a nivel académico sino comprobar que vuestro entendimiento del código es correcto. Por supuesto, podéis implementar el código y ejecutarlo para corroborar vuestras respuestas.
*/

function test() {

    // 1 - variable "a" no definida, no se imprime

    console.log(a);

    // 2- imprimimos función foo() (donde se llama la función foo()) devuelve 2


    console.log(foo());

    // 3 - se declara la variable a, en este momento existe y tiene un valor de 1

    var a = 1;
    
    // 4 - funcion foo()

    function foo() {
        return 2;
    }   
}

test();