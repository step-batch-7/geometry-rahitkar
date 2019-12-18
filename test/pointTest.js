const assert = require("chai").assert;
const Point = require("../src/point");
const Line = require("../src/line");
const Circle = require("../src/circle");

describe("point", () => {
  describe("toString", () => {
    it("should give string representation of point", () => {
      const point = new Point(2, 4);
      const actual = point.toString();
      const expected = `[Point @(2,4)]`;
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

    it("should give multiplied value of two numbers when multiplication function is passed", () => {
      const point = new Point(2, 4);
      const mul = (x, y) => x * y;
      const actual = point.visit(mul);
      const expected = 8;
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", () => {
    it("should give true for same points", () => {
      const point = new Point(2, 4);
      const otherPoint = new Point(2, 4);
      const actual = point.isEqualTo(otherPoint);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false for same points", () => {
      const point = new Point(2, 4);
      const otherPoint = new Point(7, 3);
      const actual = point.isEqualTo(otherPoint);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for passed object is not a point", () => {
      const point = new Point(2, 4);
      const actual = point.isEqualTo(2, 4);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });

  describe("clone", () => {
    it("should give a copy of given point", () => {
      const point = new Point(2, 4);
      const actual = point.clone();
      const expected = new Point(2, 4);
      assert.deepStrictEqual(actual, expected);
      assert.notStrictEqual(actual, expected);
    });
  });

  describe("findDistanceTo", () => {
    it("should give distance between two points", () => {
      const point = new Point(1, 2);
      const otherPoint = new Point(3, 4);
      const actual = point.findDistanceTo(otherPoint);
      const expected = 2.8;
      assert.approximately(actual, expected, 0.1, "numbers are close by 0.1");
    });
    it("should give distance zero if given both points are same", () => {
      const point = new Point(1, 2);
      const otherPoint = new Point(1, 2);
      const actual = point.findDistanceTo(otherPoint);
      const expected = 0;
      assert.strictEqual(actual, expected);
    });

    it("should give NaN if given point is not a point object", () => {
      const point = new Point(1, 2);
      const actual = point.findDistanceTo(3, 4);
      const expected = NaN;
      assert.isNaN(actual, expected);
    });
  });

  describe("isOn", () => {
    describe("line", () => {
      it("should give true if point is on line", () => {
        const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
        const point = new Point(1, 2);
        const actual = point.isOn(line);
        const expected = true;
        assert.strictEqual(actual, expected);
      });

      it("should give false if a line is given but the point is not on the line", () => {
        const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
        const point = new Point(1, 1);
        const actual = point.isOn(line);
        const expected = false;
        assert.strictEqual(actual, expected);
      });
    });
  });

  describe("circle", () => {
    it("should give true if point is on line", () => {
      const point = new Point(0, 5);
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = point.isOn(circle);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false if a circle is given but the point is not on the circle", () => {
      const point = new Point(0, 6);
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = point.isOn(circle);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });
});
