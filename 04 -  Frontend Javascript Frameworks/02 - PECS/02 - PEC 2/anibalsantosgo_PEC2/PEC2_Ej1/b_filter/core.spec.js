const assert = require("assert");
const core = require("./core");

describe("Filter", function() {
  describe("#onlyEven()", function() {
    it("returns only those numbers that are even", function() {
      const input = [10, 15, 20, 25, 30, 35];
      const expected = [10, 20, 30];
      const actual = core.onlyEven(input);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#onlyOneWord()", function() {
    it("returns only those strings with a single word (no spaces)", function() {
      const input = ["return", "phrases", "with one word"];
      const expected = ["return", "phrases"];
      const actual = core.onlyOneWord(input);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#positiveRowsOnly()", function() {
    it("return only the rows in the matrix that have all positive integers", function() {
      const input = [[1, 10, -100], [2, -20, 200], [3, 30, 300]];
      const expected = [[3, 30, 300]];
      const actual = core.positiveRowsOnly(input);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#allSameVowels()", function() {
    it("return only those words where all the vowels are the same", function() {
      const input = ["racecar", "amalgam", "oligopoly", "zoom"];
      const expected = ["amalgam", "zoom"];
      const actual = core.allSameVowels(input);

      assert.deepEqual(actual, expected);
    });
  });
});
