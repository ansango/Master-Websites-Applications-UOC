function sum(array) {
  const reducer = (acc, el) => acc + el;
  const result = array.reduce(reducer, 0);
  return result;
}

function productAll(array) {
  const reducer = (acc, el) => acc.concat(el);
  const reducerProduct = (acc, el) => acc * el;
  const plain = array.reduce(reducer, []);
  const result = plain.reduce(reducerProduct);
  return result;
}

function objectify(array) {
  const result = array.reduce((accumulator, currentValue) => {
    accumulator[currentValue[0]] = currentValue[1];
    return accumulator;
  }, {});

  return result;
}

function luckyNumbers(array) {
  // your code here
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers,
};
