// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10(input) {
  isGreaterTen = (val) => val > 10;
  input = input.some(isGreaterTen);
  return input;
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord(input) {
  const isLonger = (val) => val > 10;
  const length = input.map((el) => {
    return el.length;
  });
  const result = length.some(isLonger);
  return result;
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities(input) {
  const isTrue = (val) => val === true;
  const col = input.map((el) => {
    return el.some(isTrue);
  });
  const row = col.some(isTrue);
  return row;
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa(input) {
  const isThisWord = (val) => val === "Lost";
  const isTrue = (val) => val === true;
  const words = input.map((el) => {
    return el.split(" ");
  });
  const check = words.map((el) => {
    return el.some(isThisWord);
  });
  const result = check.some(isTrue);
  return result;
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa,
};
