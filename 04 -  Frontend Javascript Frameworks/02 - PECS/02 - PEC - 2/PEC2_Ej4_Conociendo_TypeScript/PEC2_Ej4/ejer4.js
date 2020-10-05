let dog;

dog = {
  kind: "mammal",
  weight: 10
};

dog = {
  kind: true,
  weight: 10
};

function baby(dog1, dog2) {
  return {
    kind: dog1.kind,
    weight: (dog1.weight + dog2.weight) / 4
  };
}
