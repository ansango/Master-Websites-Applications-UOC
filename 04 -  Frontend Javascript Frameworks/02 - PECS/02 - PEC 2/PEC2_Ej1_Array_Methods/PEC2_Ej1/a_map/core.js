function multiplyBy10(array) {
  const result = array.map((x) => {
    return x * 10;
  });
  return result;
}

function shiftRight(array) {
  const result = array.map((_, i, a) => a[(i + a.length - 1) % a.length]);
  return result;
}

function onlyVowels(array) {
  const result = array.map((x) => x.replace(/[^aeiou]/g, ""));
  return result;
}

function doubleMatrix(array) {
  const double = (x) => x * 2;
  const doubledArray = array.map((subarray) => subarray.map(double));
  return doubledArray;
  
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix,
};
