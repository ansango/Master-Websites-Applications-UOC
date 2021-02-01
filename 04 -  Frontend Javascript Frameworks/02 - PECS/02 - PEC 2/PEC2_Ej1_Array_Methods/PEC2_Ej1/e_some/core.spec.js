const assert = require("assert");
const core = require("./core");

describe("core", function() {
  it("#anyGreaterThan10", function() {
    const goodInput = [8, 9, 10, 11];
    assert.equal(core.anyGreaterThan10(goodInput), true);

    const badInput = [1, 2, 3, 4];
    assert.equal(core.anyGreaterThan10(badInput), false);
  });

  it("#longWord", function() {
    const goodInput = ["democracy", "aristocracy"];
    assert.equal(core.longWord(goodInput), true);

    const badInput = ["democracy", "republic"];
    assert.equal(core.longWord(badInput), false);
  });

  it("#truePossibilities", function() {
    const goodInput = [
      [false, false, false],
      [false, false, false],
      [false, false, true]
    ];
    assert.equal(core.truePossibilities(goodInput), true);

    const badInput = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
    assert.equal(core.truePossibilities(badInput), false);
  });

  it("#lostCarcosa", function() {
    const goodInput = [
      "Strange is the night where black stars rise,",
      "And strange moons circle through the skies,",
      "But stranger still is",
      "Lost Carcosa."
    ];
    assert.equal(core.lostCarcosa(goodInput), true);

    const badInput = [
      "Along the shore the cloud waves break,",
      "The twin suns sink behind the lake,",
      "The shadows lengthen",
      "In Carcosa."
    ];
    assert.equal(core.lostCarcosa(badInput), false);
  });
});
