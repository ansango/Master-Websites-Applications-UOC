// Anibal Santos Gomez

/*

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

  */

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

let coche = new Auto("Seat", "Ibiza", 90, 2010, 5000);

function getObjectAuto (car){
  let methods = []
  let props = []
  for(let i in car) {
    if (typeof car[i] == 'function'){
      methods.push(i)
    }
    else{
      props.push(i)
    }
  }
  console.log(`Propiedades: ${props}`)
  console.log(`Métodos: ${methods}`)
}

getObjectAuto(coche)
