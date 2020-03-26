/*
Kata #7: this

var coche = {
    marca: "Ford",
    obtenerMarca (){
      console.log(this.marca);
    }
  };
  
  coche.obtenerMarca(); // Ford
  
  var marcaDelCoche = coche.obtenerMarca;
  
  marcaDelCoche(); // undefined
  

En este ejercicio estamos definiendo un objeto con un método que podemos invocar como coche.obtenerMarca() y obtener su valor. 

Más tarde asignamos ese método a una variable. Qué hay que hacer para que la última línea devuelva correctamente el valor “Ford”? Razona tu respuesta.
*/

var coche = {
  marca: "Ford",
  obtenerMarca (){
    console.log(this.marca);
  }
};

coche.obtenerMarca(); // Ford

var marcaDelCoche = () => {
  return coche.obtenerMarca()
}

marcaDelCoche(); // Ford

/**
 * 
 * Kata 7 - this
 * 
 * En este caso, tenemos un objeto coche con las siguientes propiedades:
 * 
 * marca : "Ford" -- string
 * obtenerMarca() - método que imprime por consola la marca de este contexto (this), es defir Ford.
 * 
 * Para acceder a una propiedad de un objeto lo hacemos en este caso mediante la denotación ".", 
 * así para acceder a la propiedad obtenerMarca(), haremos coche.obtenerMarca(), lo cual nos devolverá
 * this.marca ("Ford"), mediante un console.log(), aunque podríamos hacerlo mediante return.
 * 
 * Posteriormente asignamos a una variable llamada marcaDelCoche, la propiedad del objeto coche.obtenerMarca,
 * en esta situación, si hacemos marcaDelCoche(), nos devolverá undefined. Esto es así, ya que no hemos definido ninguna
 * función en la asignación de la variable.
 * 
 * Por lo tanto, podemos llevar a cabo la asignación en la variable de una función que lo que nos devuleva sea
 * la propiedad del objeto coche, obtenerMarca, (coche.obtenerMarca()),
 * 
 * de esta manera estaremos declarando una función expresada (FunctionExpression), que nos devolverá el resultado esperado:
 * "Ford".
 * 
 */