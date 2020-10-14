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
  const result = array.reduce((acc, el) => {
    acc[el[0]] = el[1];
    return acc;
  }, {});

  return result;
}

function luckyNumbers(array) {
  const result = array.reduce((acc, el) => {
    return `${acc} ${el}`;
  }, `Your lucky numbers are: `);
  return result;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers,
};
