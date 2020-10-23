// * Decalramos la funcion findOne

// * recibe un array, y un objeto clave valor
function findOne(list, { key, value }) {

  // * devuelve una promesa que declaramos a continuacion

  return new Promise((resolve, reject) => {

    //* despues de ejecutarse los 3000 milisegundos
    // * se ejecuta un resolve si existe el elemento
    // * se ejecuta un reject si no existe el elemento
    // * ya no pasamos las funciones onSuccess onError

    setTimeout(() => {
      const element = list.find((element) => element[key] === value);
      element ? resolve(element) : reject(new Error("ERROR: Element Not Found"));
    }, 3000);
  });
}

// * Declaramos constantes de usuarios

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

// * Declaramos las funciones onSuccess y onError

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ message }) => console.log(message);

// * Invocamos la función que devuelve una promesa

findOne(users, { key: "name", value: "Carlos" })

  // * si existe el elemento llamamos a onSuccess

  .then((element) => {
    onSuccess(element);
  })

  // * si no existe el elemento llamamos a onError

  .catch((err) => {
    onError(err);
  });

findOne(users, { key: "name", value: "Pepe" })
  .then((element) => {
    onSuccess(element);
  })
  .catch((err) => {
    onError(err);
  });


