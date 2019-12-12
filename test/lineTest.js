const assert = require("assert");
const Line = require("../src/line");

describe("lineTest", function() {
  it("should give a string version of newly made object", function() {
    const lineObj = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
    const actual = lineObj.toString();
    const expected = `Line (1, 2) to (3, 4)`;

    assert.strictEqual(actual, expected);
  });

  it("should give true for equal object", function() {
    const lineObj = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
    const otherLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

    const actual = lineObj.isEqual(otherLine);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("should give false for two objects having same keys and values but not made from same constructor", function() {
    const lineObj = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

    const actual = lineObj.isEqual({
      start: { x: 1, y: 2 },
      end: { x: 3, y: 4 }
    });
    const expected = false;

    assert.strictEqual(actual, expected);
  });
});
