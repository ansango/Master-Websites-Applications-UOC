/**
 * * Declaramos funcion para buscar que recibe como parametros:
 *  @param list
 *  @param { key, value }
 *  @param { onSuccess, onError }
 */

const findOne = (list, { key, value }, { onSuccess, onError }) => {
  /**
   * * Declaramos una funcion anonima con Timeout,
   * * que se ejecutará al pasar 2000 milisegundos
   */

  setTimeout(() => {

    /**
     * * Declaramos un elemento que almacenara  el array list que recibimos,
     * * y buscamos un elemento que contenga un key value recibido
     */

    const element = list.find((element) => element[key] === value);

    /**
     * * Modificamos el elemento,
     * * si se cumple el condicional ternario mostramos un mensaje de exito
     * * si no se cumple el condicional ternario mostramos un mensaje de error
     */

    element ? onSuccess(element) : onError({ msg: "ERROR: Element Not Found" });
  }, 2000);
};

/**
 * * Declaramos los mensajes de error que serán pasados como callback
 */

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

/**
 * * Declaramos la constante users,
 * * que será pasada a nuestra función para buscar entre ellos
 */

const users = [
  {
    name: "Carlos",
    rol: "Teacher",
  },
  {
    name: "Ana",
    rol: "Boss",
  },
];

// * Llamamos a nuestra función pasandole valores que existen 

console.log("findOne success");
findOne(users, { key: "name", value: "Carlos" }, { onSuccess, onError });

// * Llamamos a nuestra función pasandole valores que no existen "name: Fermin"

console.log("findOne error");
findOne(users, { key: "name", value: "Fermin" }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
