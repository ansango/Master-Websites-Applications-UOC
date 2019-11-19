/*
// Prueba de bucle con for
for (let i = 1; i < 5; i++){
  console.log(i);
*/

/*
Modifica el bucle que hemos presentado de ejemplo, para que escriba los números al revés, de 4 a 1. 
*/

for (let i = 4; i >=1; i--) {
  console.log(i)
}

/*
Modifica el bucle que hemos presentado de ejemplo, para que escriba los números del 50 al 54.
*/

for (let i = 50; i <=54; i++) {
  console.log(i)
}


/*
Modifica el bucle que hemos presentado de ejemplo, para que escriba los números del 1 al 7 pero de 2 en 2. En la práctica esto se puede hacer de dos maneras:
- incrementando la variable del for en dos en vez de uno. ¿Sabrías hacerlo?
- poniendo un if dentro del bucle para que solo se escriban los números impares. ¿Sabrías hacerlo?
*/

for (let i = 1; i <= 7; i+=2 ) {
  console.log(i)
}


for (let i = 1; i <= 7; i++) {
  if(i % 2 !== 0){
    console.log(i)
  }
}


/*
Reflexiona sobre las dos opciones anteriores. ¿Cuál es mejor? ¿Por qué?
*/

for (let i = 1; i <= 7; i+=2 ) {
  console.log(i)
}

/*
Hacer una tabla de multiplicar usando los bucles es fácil... Haz la tabla de multiplicar del 4.
*/

for (let i = 1; i <= 10; i++) {
    console.log(`4 x ${i} = ${4 * i}`) 
}


/*
Un poco más complicado... ¿Cómo harías para escribir las tablas de multiplicar del 1 al 10?. Una pista, necesitarás dos bucles, uno dentro de otro.
*/

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++){
    console.log(`${i} x ${j} = ${i * j}`)
  } 
}

/*Hacer el último ejercicio del apartado anterior, pero utilizando, primero la instrucción while y después con la instrucción for.*/

let i = 0

while (i <= 10) {
  for(let j = 0; j <= 10; j ++){
    console.log(`${i} x ${j} = ${i*j}`)
  }
  i++
}

/*Hacer un programa que cuente el número de "a" que hay en una cadena de caracteres.*/

let t =  'super AAAAAfrase que cuenta la letra a'

let r = t.match(/a/gi).length

console.log(r)

/*Hacer un programa que cuente el número de palabras que hay en una cadena terminada en punto, teniendo en cuenta que entre palabra y palabra hay siempre un espacio (y sólo un espacio).*/



/*Hacer un programa que cuente el número de palabras que hay en una cadena terminada en punto, teniendo en cuenta que entre dos palabras puede haber uno o más espacios.*/


