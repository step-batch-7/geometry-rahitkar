const assert = require("chai").assert;
const Line = require("../src/line");

describe("line", () => {
  describe("toString", () => {
    it("should give a string version of newly made object", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.toString();
      const expected = `Line (1, 2) to (3, 4)`;

      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", () => {
    it("should give true for two objects having same keys and values and also having made from same constructor", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

      const actual = line.isEqualTo(otherLine);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false for two objects having made from same constructor but having different keys and values", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });

      const actual = line.isEqualTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for two objects having same keys and values but not made from same constructor", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

      const actual = line.isEqualTo({
        start: { x: 1, y: 2 },
        end: { x: 3, y: 4 }
      });
      const expected = false;

      assert.strictEqual(actual, expected);
    });

    it("should give false for not having same fields and type", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

      const actual = line.isEqualTo({});
      const expected = false;

      assert.strictEqual(actual, expected);
    });
  });

  describe("length", () => {
    it("should give the length of a line having two different end points", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.length;
      const expected = 2.8;
      assert.approximately(actual, expected, 0.1, "numbers are close by 0.1");
    });

    it("should give length zero for a point", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 2 });
      const actual = line.length;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });
  });

  describe("isParallelTo", () => {
    it("should give true for two inclined parallel lines", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 3 }, { x: 4, y: 6 });
      const actual = line.isParallelTo(otherLine);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give true for two lines parallel to x-axis and also parallel to each other", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 4, y: 2 });
      const otherLine = new Line({ x: 1, y: 4 }, { x: 3, y: 4 });
      const actual = line.isParallelTo(otherLine);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give true for two lines parallel to y-axis and also parallel to each other", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
      const otherLine = new Line({ x: 3, y: 2 }, { x: 3, y: 6 });
      const actual = line.isParallelTo(otherLine);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false for non parallel lines", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 3 }, { x: 4, y: 4 });
      const actual = line.isParallelTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given same line", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.isParallelTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given two lines inclined to both the axis and having one end same but other end different", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 4, y: 4 });
      const actual = line.isParallelTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given two lines parallel to x-axis and having one end same but other end different", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 4, y: 2 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 3, y: 2 });
      const actual = line.isParallelTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given two lines parallel to y-axis and having one end same but other end different", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 1, y: 6 });
      const actual = line.isParallelTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given two colinear lines parallel to x-axis", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 2 });
      const otherLine = new Line({ x: 4, y: 2 }, { x: 6, y: 2 });
      const actual = line.isParallelTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given two colinear lines parallel to y-axis", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
      const otherLine = new Line({ x: 1, y: 6 }, { x: 1, y: 8 });
      const actual = line.isParallelTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });

  describe("slope", () => {
    it("should give the slope of a given line", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.slope;
      const expected = 1;
      assert.strictEqual(actual, expected);
    });

    it("should give slope zero for lines parallel to x-axis", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 2 });
      const actual = line.slope;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });

    it("should give slope positive infinity for lines parallel to y-axis and having relative end point's ordinate greater then starting point's ordinate", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
      const actual = line.slope;
      const expected = Infinity;
      assert.strictEqual(actual, expected);
    });

    it("should give slope negative infinity for lines parallel to y-axis and having relative end point's ordinate lesser then starting point's ordinate", () => {
      const line = new Line({ x: 1, y: 4 }, { x: 1, y: 2 });
      const actual = line.slope;
      const expected = -Infinity;
      assert.strictEqual(actual, expected);
    });

    it("should give slope NaN for a point", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const actual = line.slope;
      const expected = NaN;
      assert.isNaN(actual, expected);
    });
  });

  describe("findX", () => {
    it("should give x value for given y value", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 7 });
      const actual = line.findX(4);
      const expected = 2;
      assert.strictEqual(actual, expected);
    });

    it("should give NaN for given y value which is outside the Line Segment", () => {
      const line = new Line({ x: 1, y: 4 }, { x: 3, y: 6 });
      const actual = line.findX(2);
      const expected = NaN;
      assert.isNaN(actual, expected);
    });

    it("should give the start point value of x for 0 value of slope", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 1 });
      const actual = line.findX(1);
      const expected = 1;
      assert.strictEqual(actual, expected);
    });
  });

  describe("findY", () => {
    it("should give y value for given x value", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 7 });
      const actual = line.findY(2);
      const expected = 4;
      assert.strictEqual(actual, expected);
    });

    it("should give NaN for given x value which is outside the Line Segment", () => {
      const line = new Line({ x: 1, y: 4 }, { x: 3, y: 6 });
      const actual = line.findY(0);
      const expected = NaN;
      assert.isNaN(actual, expected);
    });

    it("should give the start point value of x for +infinity value of slope", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 1 });
      const actual = line.findY(1);
      const expected = 1;
      assert.strictEqual(actual, expected);
    });

    it("should give the start point value of x for -infinity value of slope", () => {
      const line = new Line({ x: 1, y: -1 }, { x: 1, y: 1 });
      const actual = line.findY(1);
      const expected = -1;
      assert.strictEqual(actual, expected);
    });
  });
});
