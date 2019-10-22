/*

3 - Los libros tienen un código identificador, el ISBN (International Standard Book Number).
Hay códigos ISBN de 10 dígitos (ISBN-10) o de 13 dígitos (ISBN-13), estos últimos desde 2007.
El dígito de control  de un código ISBN-13 se calcula multiplicando el primer dígito por 1, el segundo por 3, el tercero por 1, el cuarto por 3, etc, hasta llegar al 12º dígito.
El 13º dígito es el de control, y es el valor que hay que añadir a la suma de todos estos productos para que sea divisible por 10.


Escribid un programa en JavaScript que compruebe si un código ISBN-13 dado tiene el dígito de control correcto o no.
Si el dígito de control es correcto debe escribir por consola el mensaje "CORRECTO", sinó debe escribir "INCORRECTO".

Podéis consultar la wikipedia: https://es.wikipedia.org/wiki/ISBN

Ejemplos:

Si el código ISBN es 9781593272821, debe escribir "CORRECTO"
Si el código ISBN es 9781593272820, debe escribir "INCORRECTO"


*/

let isbn = Array.from(
    String(prompt("introduce el código ISBN-13 para comprobar el dígito")),
    Number
  );
  let digit = parseInt(isbn.slice(-1).toString());
  let isbnValidate = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3];
  isbn.pop();
  let result = 0;
  
  for (let i = 0; i < isbn.length; i++) {
    result += isbn[i] * isbnValidate[i];
  }
  result = result + digit;
  
  if (result % 10 === 0) {
    console.log("correcto");
  } else {
    console.log("incorrecto");
  }