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
  describe("isEqualTo", () => {
    it("should give true if circles are at same location & have same radius", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const otherCircle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.isEqualTo(otherCircle);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false if circles are at same location but have different radius", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const otherCircle = new Circle({ x: 0, y: 0 }, 6);
      const actual = circle.isEqualTo(otherCircle);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false if circles are at not at same location but have same radius", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const otherCircle = new Circle({ x: 2, y: 2 }, 5);
      const actual = circle.isEqualTo(otherCircle);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false if circles are at not at same location and also have different radius", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const otherCircle = new Circle({ x: 2, y: 2 }, 6);
      const actual = circle.isEqualTo(otherCircle);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });
});
