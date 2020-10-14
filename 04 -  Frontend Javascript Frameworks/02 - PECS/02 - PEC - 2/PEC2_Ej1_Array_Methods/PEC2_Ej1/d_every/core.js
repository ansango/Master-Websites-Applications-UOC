// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  const isEven = (value) => value % 2 === 0;
  input = input.every(isEven);
  return input;
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  const sameType = (value) => typeof value === "number";
  input = input.every(sameType);
  return input;
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  const isMatrix = Array.isArray(input);
  const isPositive = (val) => {
    return val > 0 ? true : false;
  };
  const isColumnPositive = (val) => val === true;
  if (isMatrix === true) {
    const check = input.map((el) => {
      return el.every(isPositive);
    });
    return check.every(isColumnPositive);
  }
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  const isString = (value) => typeof value === "string";
  const arrStrings = input.every(isString);
  if (arrStrings === true) {
    const result = input.every((el) => {
      const chars = el.split("");
      const vowels = chars.filter((char) => /[aeiouAEIOU]/.test(char));
      const sameVowels = vowels.some((vowel) => vowel !== vowels[0]);
      return sameVowels === false;
    });
    return result;
  }
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels,
};
