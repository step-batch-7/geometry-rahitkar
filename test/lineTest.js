const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("line", () => {
  describe("toString", () => {
    it("should give a string version of newly made object", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.toString();
      const expected = `[Line (1,2) to (3,4)]`;

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

    it("should give true for given two same line", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

      const actual = line.isEqualTo(line);
      const expected = true;

      assert.strictEqual(actual, expected);
    });

    it("should give true for given with altered start and end", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 3, y: 4 }, { x: 1, y: 2 });

      const actual = line.isEqualTo(otherLine);
      const expected = true;
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

    it("should give false for given two lines over each other but having both different ends", () => {
      const line = new Line({ x: 4, y: 4 }, { x: 8, y: 4 });
      const otherLine = new Line({ x: 5, y: 4 }, { x: 6, Y: 4 });
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

    it("should give false for two lines over each other and inclined to both  the axis", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 10, y: 11 });
      const otherLine = new Line({ x: 2, y: 3 }, { x: 3, y: 4 });
      const actual = line.isParallelTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for two different line segments which are part of same line and inclined to both axis", () => {
      const line = new Line({ x: 6, y: 7 }, { x: 10, y: 11 });
      const otherLine = new Line({ x: 2, y: 3 }, { x: 3, y: 4 });
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

  describe("split", () => {
    it("should give a list of two line object splitted from middle", () => {
      const line = new Line({ x: 8, y: 4 }, { x: 4, y: 12 });
      const actual = line.split();
      const expected = [
        new Line({ x: 8, y: 4 }, { x: 6, y: 8 }),
        new Line({ x: 6, y: 8 }, { x: 4, y: 12 })
      ];
      assert.deepStrictEqual(actual, expected);
    });

    it("should give a list of two ", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 2 });
      const actual = line.split();
      const expected = [
        new Line({ x: 2, y: 2 }, { x: 2, y: 2 }),
        new Line({ x: 2, y: 2 }, { x: 2, y: 2 })
      ];
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("hasPoint", () => {
    it("should give true for given point which is on the line segment", () => {
      const line = new Line({ x: 8, y: 4 }, { x: 4, y: 12 });
      const point = new Point(4, 12);
      const actual = line.hasPoint(point);
      const expected = true;
      assert.strictEqual(actual, expected);
    });
    it("should give false for point which is not on the line segment", () => {
      const line = new Line({ x: 8, y: 4 }, { x: 4, y: 12 });
      const point = new Point(1, 2);
      const actual = line.hasPoint(point);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given point which is on the line but not on the line segment ", () => {
      const line = new Line({ x: 6, y: 7 }, { x: 10, y: 11 });
      const point = new Point(2, 3);
      const actual = line.hasPoint(point);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given input which is not a point object", () => {
      const line = new Line({ x: 6, y: 7 }, { x: 10, y: 11 });
      const actual = line.hasPoint(2, 3);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    // it("should validate if the given point is on the line segment and the line is a vertical line", () => {
    // const actual =  ;
    // const expected =  ;
    // assert.equalizer(actual, expected)
    // })
  });

  describe("findPointFromStart", () => {
    it("should return a point at a given distance of from the start of line", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromStart(5);
      const expected = new Point(4, 5);
      assert.deepStrictEqual(actual, expected);
    });

    it("should give null if given distance is greater then the line length", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromStart(11);
      const expected = null;
      assert.strictEqual(actual, expected);
    });

    it("should give null if given distance is not a integer", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromStart(11.1435);
      const expected = null;
      assert.strictEqual(actual, expected);
    });

    it("should give null if given distance is negative", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromStart(-11);
      const expected = null;
      assert.strictEqual(actual, expected);
    });

    it("should give last point if given distance is zero", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromStart(0);
      const expected = new Point(1, 1);
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("findPointFromEnd", () => {
    it("should return a point at a given distance of from the end of line", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromEnd(5);
      const expected = new Point(4, 5);
      assert.deepStrictEqual(actual, expected);
    });

    it("should give null if given distance is greater then the line length", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromEnd(11);
      const expected = null;
      assert.strictEqual(actual, expected);
    });

    it("should give null if given distance is not a integer", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromEnd(11.1435);
      const expected = null;
      assert.strictEqual(actual, expected);
    });

    it("should give null if given distance is negative", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromEnd(-11);
      const expected = null;
      assert.strictEqual(actual, expected);
    });

    it("should give last point if given distance is zero", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 7, y: 9 });
      const actual = line.findPointFromEnd(0);
      const expected = new Point(7, 9);
      assert.deepStrictEqual(actual, expected);
    });
  });
});
