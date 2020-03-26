
/*

Kata #6: scope y closure
En este ejercicio no debéis implementar ningún código a no ser que queráis verificar vuestra respuesta. 

La solución a este ejercicio pasa por una explicación redactada por vuestra parte, con vuestras palabras sobre lo que sucede en este código
 y el resultado de cada una de las líneas ejecutadas.

No espero una explicación perfecta a nivel académico sino comprobar que vuestro entendimiento del código es correcto. 
Por supuesto, podéis implementar el código y ejecutarlo para corroborar vuestras respuestas.
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

/**
 * Kata 6 - Scope & Closure 
 * 
 * En el código anterior sucede lo siguiente:
 * 
 * 1 - Declaramos la función test()
 * 2 - Invocamos la función test()
 * 
 * La función test() crea una variable local y una función foo(), está función interna es un clousure y solo está disponible
 * dentro de test(), esta función no tiene variables locales.
 * 
 * Dentro de la función sucede:
 * 
 * 1 - llamada al método de Javascript console.log, al cual le pasamos una variable "a", para que la muestre por consola.
 * 2 - llamada al método de Javascript console.log, al cual le pasamos una funcion "foo()".
 * 
 * Cuando hacemos el primer console.log(a), la variable no ha sido declarada aún, y siendo el scope el de la función test(),
 * sucederá que al intentar buscar una variable global o de nivel superior tampoco se encontrará nada, por lo que el console.log(a),
 * será undefined.
 * 
 * Posteriormente cuando hacemos el console.log(foo()), la función declarativa en Javascript hace que su identificador se vincule
 * antes de que se ejecute cualquier cosa en su bloque de código. Esto difiere totalmente de una asignación con una expresión
 * de función que se evalúa en el orden normal, de arriba hacia abajo. 
 * 
 * Esto es lo que se conoce como Hoisting, lo que sucede básicamente es que las funciones son asignadas en memoria durante la fase
 * de compilación, pero quedan donde han sido escritas. Colocar una declaración de una función es, ponerla en memoria. 
 * 
 * Cuando llamamos a la función antes de que sea escrita y funciona es debido a la manera en la que el contexto de ejecución trabaja.
 * En Javascript el hoisting funciona en declaraciones, por eso funciona en el caso de la función declarativa foo(),
 * mientras que en una variable no definida no se da el caso, porque no es así en inicializadores.
 * 
 * 
 * 
 */