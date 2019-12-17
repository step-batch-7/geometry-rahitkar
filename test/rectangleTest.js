const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle", () => {
  describe("toString", () => {
    it("should give string representation of rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.toString();
      const expected = "[Rectangle (1,1) to (5,4)]";
      assert.strictEqual(actual, expected);
    });
  });

  describe("area", () => {
    it("should give the area of a rectangle by given points of diagonal", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.area;
      const expected = 12;
      assert.strictEqual(actual, expected);
    });

    it("should give the area as zero of a rectangle whose diagonal is parallel to any the two axis", () => {
      let rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 1 });
      let actual = rectangle.area;
      const expected = 0;
      assert.strictEqual(actual, expected);

      rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 5 });
      actual = rectangle.area;
      assert.strictEqual(actual, expected);
    });
  });

  describe("perimeter", () => {
    it("should give perimeter of a rectangle by gives points of diagonal", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.perimeter;
      const expected = 14;
      assert.strictEqual(actual, expected);
    });

    it("should give the perimeter of a rectangle whose diagonal is parallel to x-axis", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 1 });
      const actual = rectangle.perimeter;
      const expected = 8;
      assert.strictEqual(actual, expected);
    });

    it("should give the perimeter of a rectangle whose diagonal is parallel to y-axis", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 5 });
      const actual = rectangle.perimeter;
      const expected = 8;
      assert.strictEqual(actual, expected);
    });
  });
});
