function sum(array) {
  const reducer = (acc, value) => acc + value;
  const result = array.reduce(reducer);
  return result;
}

function productAll(array) {
  const reducer = (acc, value) => acc * value;
  const result = array.reduce(reducer);
  return result;
}

function objectify(array) {
  // your code here
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
