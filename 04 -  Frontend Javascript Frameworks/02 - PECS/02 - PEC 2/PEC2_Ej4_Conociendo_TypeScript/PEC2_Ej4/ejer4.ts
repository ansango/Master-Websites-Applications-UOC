interface Dog {
  kind: string;
  weight: number;
}

let dog: Dog;

dog = {
  kind: "mammal",
  weight: 10
};

dog = {
  kind: true,
  weight: 10
};

function baby(dog1: Dog, dog2: Dog): Dog {
  return {
    kind: dog1.kind,
    weight: (dog1.weight + dog2.weight) / 4
  } as Dog;
}
