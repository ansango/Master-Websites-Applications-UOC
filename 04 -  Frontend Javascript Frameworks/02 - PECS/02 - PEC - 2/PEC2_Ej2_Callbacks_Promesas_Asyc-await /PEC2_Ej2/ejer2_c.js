function findOne(list, { key, value }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((element) => element[key] === value);
      element
        ? resolve(element)
        : reject(new Error("ERROR: Element Not Found"));
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

async function findMany() {
  try {
    // * await siempre en funciones async
    const element = await findOne(users, { key: "name", value: "Carlos" });
    onSuccess(element);
  } catch (error) {
    onError(error);
  }

  try {
    const element = await findOne(users, { key: "name", value: "Pepe" });
  } catch (error) {
    onError(error);
  }
}

findMany();
