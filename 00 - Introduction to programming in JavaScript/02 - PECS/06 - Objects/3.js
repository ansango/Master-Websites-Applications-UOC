// Anibal Santos Gomez

/*

3. Escribid una función en JavaScript que dado un objeto, devuelva otro donde los nombres de las propiedades se han transformado en valores, 
y los valores en nombres de las propiedades.

Ejemplo: dado el objeto { 0: 'a', 1: 'b', 2: 'c' }, la función podría devolver el objeto { 'a': 0, 'b': 1, 'c': 2 }.

*/

let firstObject = {
  0: "a",
  1: "b",
  2: "c"
};

let result = {};

function reverseValues(obj) {
  let keys = [];
  let values = [];
  for (let i in obj) {
    keys.push(i);
    values.push(obj[i]);
  }
  values.forEach((key, i) => (result[key] = keys[i]));
  return result;
}

reverseValues(firstObject);
console.log(result);
