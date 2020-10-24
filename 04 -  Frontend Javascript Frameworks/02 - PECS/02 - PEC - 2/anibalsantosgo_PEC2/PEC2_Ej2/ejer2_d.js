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
        : // * sabemos donde falla la promesa
          reject(new Error(`ERROR: Element with ${key} ${value} Not Found`));
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

// * Declaramos una función asíncrona que consumirá un array de promsesas
// * una promesa siempre devuelve una promesa

async function findManyParallel() {
  try {
    // * array de promsesa que invocan findOne

    const promises = [
      findOne(users, { key: "name", value: "Ana" }),
      findOne(users, { key: "name", value: "Carlos" }),
      findOne(users, { key: "name", value: "Pepe" }),
    ];

    // * almacenamos el resultado de ejecutar el array de promesas

    const result = await Promise.all(promises);

    //* imprimios el resultado del array de promesas

    result.forEach((element) => onSuccess(element));
  } catch (error) {
    // * capturamos el error

    onError(error);
  }
}

// * invocamos la funcion que consume las promesas

findManyParallel();
