const assert = require("chai").assert;
const Circle = require("../src/circle");
describe("circle", () => {
  describe("toString", () => {
    it("should give string representation of circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.toString();
      const expected = `[Circle @(0,0) radius 5]`;
      assert.strictEqual(actual, expected);
    });
  });
});