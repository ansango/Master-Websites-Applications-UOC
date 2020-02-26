var coche = {
    marca: "Ford",
    obtenerMarca (){
      console.log(this.marca);
    }
  };
  
  coche.obtenerMarca(); // Ford
  
  var marcaDelCoche = coche.obtenerMarca;
  
  marcaDelCoche(); // undefined