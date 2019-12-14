const assert = require("chai").assert;
const Point = require("../src/point");

describe("point", () => {
  describe("toString", () => {
    it("should give string representation of point", () => {
      const point = new Point(2, 4);
      const actual = point.toString();
      const expected = `point @(2, 4)`;
      assert.strictEqual(actual, expected);
    });
  });

  describe("visit", () => {
    it("should give sum of two numbers when addition function is passed", () => {
      const point = new Point(2, 4);
      const add = (x, y) => x + y;
      const actual = point.visit(add);
      const expected = 6;
      assert.strictEqual(actual, expected);
    });
  });
});
