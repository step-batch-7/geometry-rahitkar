const assert = require("chai").assert;
const Point = require("../src/point");
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

  describe("isEqualTo", () => {
    it("should give true if given rectangle is in same coordinate", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const otherRectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.isEqualTo(otherRectangle);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should gives false if given rectangle is not in coordinate", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const otherRectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 4 });
      const actual = rectangle.isEqualTo(otherRectangle);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false if given rectangle is not a rectangle object", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.isEqualTo({
        endA: { x: 1, y: 1 },
        endC: { x: 5, y: 4 }
      });
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });

  describe("hasPoint", () => {
    it("should give true for given point which is on the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(1, 1);
      const actual = rectangle.hasPoint(point);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given point which is not on rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(0, 0);
      const actual = rectangle.hasPoint(point);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given point which is not a point object", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.hasPoint({ x: 1, y: 1 });
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });

  describe("covers", () => {
    it("should give true if given point is inside the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(2, 2);
      const actual = rectangle.covers(point);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false if given point is not inside the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(0, 0);
      const actual = rectangle.covers(point);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give if false given point is not a point object", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.covers({ x: 1, y: 1 });
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });
});
