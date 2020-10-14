function onlyEven(array) {
  const result = array.filter((x) => {
    return x % 2 === 0;
  });
  return result;
}

function onlyOneWord(array) {
  const result = array.filter((word) => {
    if (!/\s/.test(word)) {
      return word;
    }
  });
  return result;
}

function positiveRowsOnly(array) {
  const result = [];
  array.forEach((arr) => {
    const negatives = arr.filter((number) => number < 0);
    if (negatives.length === 0) {
      result.push(arr);
    }
  });
  return result;
}

function allSameVowels(array) {
  const result = array.filter((el) => {
    const chars = el.split("");
    const vowels = chars.filter((char) => /[aeiouAEIOU]/.test(char));
    const sameVowels = vowels.some((vowel) => vowel !== vowels[0]);
    return sameVowels === false;
  });
  return result;
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels,
};
