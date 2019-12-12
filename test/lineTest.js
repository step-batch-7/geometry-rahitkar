const assert = require("assert");
const Line = require("../src/line");

describe("lineTest", function() {
  it("should return a string version of newly made object", function() {
    const lineObj = new Line(1, 2, 3, 4);
    const actual = lineObj.toString();
    const expected =
      "{coordinateX1:1,coordinateY1:2,coordinateX2:3,coordinateY2:4}";

    assert.strictEqual(actual, expected);
  });
});
