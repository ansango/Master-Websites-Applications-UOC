function findOne(list, { key, value }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((element) => element[key] === value);
      element
        ? resolve(element)
        : // * sabemos donde falla la promesa
          reject(new Error(`ERROR: Element with ${key} ${value} Not Found`));
    }, 3000);
  });
}

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

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ message }) => console.log(message);

// * una promesa siempre devuelve una promesa

async function findManyParallel() {
  try {
    const promises = [
      findOne(users, { key: "name", value: "Ana" }),
      findOne(users, { key: "name", value: "Carlos" }),
      findOne(users, { key: "name", value: "Pepe" }),
    ];
    const result = await Promise.all(promises);
    result.forEach((element) => onSuccess(element));
  } catch (error) {
    onError(error);
  }
}

findManyParallel();
