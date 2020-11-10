1 - # code1.ts

hemos modificado el valor de a por un string,
al modificarlo el valor de d no puede realizarse como
operacion aritmética ya que los tipos no son válidos,
asegurando la coherencia del tipado podemos controlar
que los valores de las variables (constantes en este caso),
van a ser más seguros.

2 - #code2.ts

const a = 1042; // number
const b = "apples and oranges"; // string
const c = "pineapples"; // string
const d = [true, true, false]; // array de booleanos
const e = { type: "ficus" }; // objeto con propiedad de tipo string
const f = [1, false]; // array de number o booleano
const g = [3]; // array de numeros
const h = null; // tipo any

3 - #code3.ts

const i: 3 = 3;
i = 4; // Error TS2322: Type '4' is not assignable to type '3'

- No podemos reasignar un valor a una constante, deberiamos cambiar const por let para esto.

const j = [1, 2, 3];
j.push(4);
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.

- el tipo de j es un array de numeros, no podemos insertar un valor de tipo string en un array de numeros.

let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.

- el tipo never introducido por TypeScript no puede tener cualquier valor.

let l: unknown = 4;
let m = l \* 2; // Error TS2571: Object is of type 'unknown'.

- el tipo unkwnon es solo asignable a tipos any o unkwnown.

4 - ¿Cuál es la diferencia entre una clase y una interface?

Una clase es como una estructura predefinida que sirve como molde para crear Objetos. En este «molde» se declaran atributos y métodos; un atributo puede ser una variable, y un método puede ser una función.

Cada clase es un modelo que define un conjunto de variables, y métodos apropiados para operar con dichos datos. Cada objeto creado a partir de la clase se denomina instancia de la clase.

La diferencia de las clases que extiendes con respecto a las interfaces es que las interfaces no contienen implementación de sus métodos, por lo que la clase que implementa una interfaz debe escribir el código de todos los métodos que contiene.

En TypeScript una interfaz puede definir propiedades.

interface sumergibleInterface {
    tiempoMaxBajoElAgua: number;
    profundidadMaxima: number;

    repelerAgua(): void;
}

Una vez definida tu interfaz, podremos implementarla en todas las clases que queramos mediante la palabra "implements" en la cabecera de la clase. 

class relojSumergible implements sumergibleInterface {
  tiempoMaxBajoElAgua = 1;
  profundidadMaxima = 10;
  repelerAgua() {
    console.log('El agua me resbala');
  }
}

La interfaz provoca que sea necesario declarar todas las propiedades e implementar todos los métodos a la hora de definir la clase. En resumen, es como un contrato.

TypeScript nos permite además una aplicación adicional de las interfaces: la creación de un nuevo tipo que podemos usar a lo largo de nuestro código.

interface citaCalendario {
  fechaHora: Date;
  titulo: string;
  lugar: string;
}

let cita1: citaCalendario;

cita1 = {
  fechaHora: new Date(Date.now()),
  titulo: 'Programar en TypeScript',
  lugar: 'Oficina'
}