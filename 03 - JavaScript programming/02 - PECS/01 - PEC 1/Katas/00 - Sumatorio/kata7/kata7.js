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

function marcaDelCoche () {
  coche.obtenerMarca()
} 

marcaDelCoche(); // Ford