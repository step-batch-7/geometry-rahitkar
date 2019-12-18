const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

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

    it("should  give false if given circle is not a circle object", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.isEqualTo({ x: 0, y: 5 }, 5);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });

  describe("area", () => {
    it("should give the area of a given circle object", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.area;
      const expected = 78.53;
      assert.approximately(actual, expected, 0.1, "numbers are close by 0.1");
    });
  });

  describe("perimeter", () => {
    it("should give perimeter of a given circle object", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.perimeter;
      const expected = 31.41;
      assert.approximately(actual, expected, 0.1, "numbers are close by 0.1");
    });
  });

  describe("hasPoint", () => {
    it("should give true if the given point is on the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 5);
      const actual = circle.hasPoint(point);
      const expected = true;
      assert.strictEqual(actual, expected);
    });
    it("should give false if the given point is inside the circle but on circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 0);
      const actual = circle.hasPoint(point);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false if the given point is out of circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(10, 10);
      const actual = circle.hasPoint(point);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false if the given point is not a point object", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.hasPoint(1, 2);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });

  describe("moveTo", () => {
    it("should give new circle at given point with same dimensions", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.moveTo({ x: 1, y: 1 });
      const expected = new Circle({ x: 1, y: 1 }, 5);
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("covers", () => {
    it("should give true if given point is inside the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(1, 1);
      const actual = circle.covers(point);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false if given point is outside the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 6);
      const actual = circle.covers(point);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false if given point is on circle circumference", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 5);
      const actual = circle.covers(point);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false if given point is not a Point object", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.covers({ x: 0, y: 0 });
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });
});
