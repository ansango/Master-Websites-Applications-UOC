function findOne(list, { key, value }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((element) => element[key] === value);
      element ? resolve(element) : reject(new Error("ERROR: Element Not Found"));
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

findOne(users, { key: "name", value: "Carlos" })
  .then((element) => {
    onSuccess(element);
  })
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

/*const findOne = (list, { key, value }, { onSuccess, onError }) => {
  setTimeout(() => {
    const element = list.find((element) => element[key] === value);
    element ? onSuccess(element) : onError({ msg: "ERROR: Element Not Found" });
  }, 2000);
};

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

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

console.log("findOne success");
findOne(users, { key: "name", value: "Carlos" }, { onSuccess, onError });

console.log("findOne error");
findOne(users, { key: "name", value: "Fermin" }, { onSuccess, onError });
*/
/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
