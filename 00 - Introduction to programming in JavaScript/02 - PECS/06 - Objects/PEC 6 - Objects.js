/*

1 . Escribid un programa en JavaScript que cree un array de objetos, donde cada objeto describa un libro con las propiedades siguientes: 
título, autor y código ISBN. Escribid una función que itere sobre todos los libros, y para cada uno escriba por consola el título, el autor, el código ISBN, 
y si éste empieza por 84 o 97884, además escriba "ISBN España".

2. Escribid una función en JavaScript que muestre por consola las propiedades y los métodos de un objeto.

Por ejemplo, dado un objeto construído así:

  function Auto(marca, modelo, potencia, antiguedad, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.antiguedad = antiguedad;
    this.precio = precio;
    this.edadAprox = function (anio) {
      return (anio - this.antiguedad);
    }
  }

  var coche=new Auto("Seat", "Ibiza", 90, 2010, 5000);

La función del ejercicio, pasándole como argumento la variable coche, tendría que escribir por consola algo parecido a ésto:

  Propiedades: marca, modelo, potencia, antiguedad, precio
  Métodos: edadAprox

3. Escribid una función en JavaScript que dado un objeto, devuelva otro donde los nombres de las propiedades se han transformado en valores, 
y los valores en nombres de las propiedades.

Ejemplo: dado el objeto { 0: 'a', 1: 'b', 2: 'c' }, la función podría devolver el objeto { 'a': 0, 'b': 1, 'c': 2 }.

4. Escribid una función en JavaScript que analice una URL y devuelva un objecto con las siguientes propiedades: protocolo, hot, query y un array params.

Ejemplo: Si la entrada es “http://cv.uoc.edu/webapps/bustiaca/listMails.do?mailId=5848042_774330153&l=181_m4_250_01_t01”, la salida debe ser:
{ "protocolo": "http", "host": "cv.uoc.edu", "path": "/webapps/bustiaca/listMails.do", "query": {"mailId": "5848042_774330153", "l": "181_m4_250_01_t01"} }

5. Escribid una función en JavaScript que convierta un objeto a formato JSON, sin usar la función JSON.stringify().

*/