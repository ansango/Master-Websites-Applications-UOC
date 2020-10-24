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
      element
        ? resolve(element)
        : reject(new Error("ERROR: Element Not Found"));
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

// * Declaramos constantes de usuarios

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ message }) => console.log(message);

// * Declaramos una función asíncrona que consumirá finfOne

async function findMany() {
  try {
    // * await siempre en funciones async

    const element = await findOne(users, { key: "name", value: "Carlos" });
    
    // * capturamos el exito

    onSuccess(element);
  } catch (error) {

    // * capturamos el error

    onError(error);
  }

  try {
    const element = await findOne(users, { key: "name", value: "Pepe" });
  } catch (error) {
    onError(error);
  }
}

//* Invocamos nuestra funcion asincrona

findMany();
