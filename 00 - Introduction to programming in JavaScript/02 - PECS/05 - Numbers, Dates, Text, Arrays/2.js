// Anibal Santos Gomez

/*

2. Escribid una función en JavaScript que devuelva la fecha anterior a una fecha pasada como parámetro en formato de texto 'DD/MM/AAAA', 
donde DD es el día, MM el mes y AAAA el año.

Ejemplo: si la entrada es '01/01/2019', la salida debe ser '31/12/2018'.

*/

function getYesterday(d) {
    let date = new Date(d);
    date.setDate(date.getDate()-1);
    return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
  }
  
  console.log(getYesterday('01/01/2019'))
  