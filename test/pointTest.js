// p = new Point(2,3)// creates a point at 2,3
const assert = require("chai").assert;
const Point = require("../src/point");

describe("point", () => {
  describe("toString", () => {
    it("should give string representation of point", () => {
      const point = new Point(2, 4);
      const actual = point.toString();
      const expected = `point (2, 4)`;
      assert.strictEqual(actual, expected);
    });
  });
});
