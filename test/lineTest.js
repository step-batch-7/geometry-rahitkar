const assert = require("assert");
const Line = require("../src/line");

describe("lineTest", function() {
  it("should give a string version of newly made object", function() {
    const lineObj = new Line(1, 2, 3, 4);
    const actual = lineObj.toString();
    const expected = `Line (1, 2) to (3, 4)`;

    assert.strictEqual(actual, expected);
  });

  it("should give true for equal object", function() {
    const lineObj = new Line(1, 2, 3, 4);
    const otherLine = new Line(1, 2, 3, 4);
    const actual = lineObj.isEqual(otherLine);

    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("should give false for two objects having same keys and values but not made from same constructor", function() {
    const lineObj = new Line(1, 2, 3, 4);
    const actual = lineObj.isEqual({
      positionX1: 1,
      positionY1: 2,
      positionX2: 3,
      positionY2: 4
    });
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});
