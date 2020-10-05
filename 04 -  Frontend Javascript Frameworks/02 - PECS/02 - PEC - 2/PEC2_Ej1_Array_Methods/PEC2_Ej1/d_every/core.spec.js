const assert = require("assert");
const core = require("./core");

describe("core", function() {
  it("#allEven", function() {
    const goodInput = [2, 4, 10];
    assert.equal(core.allEven(goodInput), true);

    const badInput = [2, 4, 11];
    assert.equal(core.allEven(badInput), false);
  });

  it("#allSameType", function() {
    const goodInput = [1, 2, 3];
    assert.equal(core.allSameType(goodInput), true);

    const badInput = [1, 2, 3, "4"];
    assert.equal(core.allSameType(badInput), false);
  });

  it("#positiveMatrix", function() {
    const goodInput = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    assert.equal(core.positiveMatrix(goodInput), true);

    const badInput = [[-1, 2, 3], [4, -5, 6], [7, 8, -9]];
    assert.equal(core.positiveMatrix(badInput), false);
  });

  it("#allSameVowels", function() {
    const goodInput = ["amalgam", "zoom"];
    assert.equal(core.allSameVowels(goodInput), true);

    const badInput = ["zoom", "oligopoly"];
    assert.equal(core.allSameVowels(badInput), false);
  });
});
