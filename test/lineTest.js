const assert = require("assert");
const Line = require("../src/line");

describe("line", function() {
  describe("toString", function() {
    it("should give a string version of newly made object", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.toString();
      const expected = `Line (1, 2) to (3, 4)`;

      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", function() {
    it("should give true for two objects having same keys and values and also having made from same constructor", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

      const actual = line.isEqualTo(otherLine);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false for two objects having made from same constructor but having different keys and values", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });

      const actual = line.isEqualTo(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for two objects having same keys and values but not made from same constructor", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

      const actual = line.isEqualTo({
        start: { x: 1, y: 2 },
        end: { x: 3, y: 4 }
      });
      const expected = false;

      assert.strictEqual(actual, expected);
    });

    it("should give false for not having same fields and type", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });

      const actual = line.isEqualTo({});
      const expected = false;

      assert.strictEqual(actual, expected);
    });
  });

  describe("length", function() {
    it("should give the length of a line having two different end points", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.length;
      const expected = 2.8284271247461903;
      assert.strictEqual(actual, expected);
    });

    it("should give length zero for a point", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 2 });
      const actual = line.length;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });
  });

  describe("parallel", function() {
    it("should give true for two parallel lines having same slope", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 3 }, { x: 4, y: 6 });
      const actual = line.parallel(otherLine);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should give false for non parallel lines having different slopes", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 3 }, { x: 4, y: 4 });
      const actual = line.parallel(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given same line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.parallel(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give false for given two lines having one end coordinate same but other end different", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 4, y: 4 });
      const actual = line.parallel(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should give true for given two lines having same ordinates but different abscissas", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const otherLine = new Line({ x: 1, y: 2 }, { x: 4, y: 4 });
      const actual = line.parallel(otherLine);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });

  describe("slope", function() {
    it("should give the slope of a given line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.slope;
      const expected = 1;
      assert.strictEqual(actual, expected);
    });

    it("should give slope zero for lines parallel to x-axis", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 2 });
      const actual = line.slope;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });

    it("should give slope positive infinity for lines parallel to y-axis and having relative end point's ordinate greater then starting point's ordinate", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
      const actual = line.slope;
      const expected = Infinity;
      assert.strictEqual(actual, expected);
    });

    it("should give slope negative infinity for lines parallel to y-axis and having relative end point's ordinate lesser then starting point's ordinate", function() {
      const line = new Line({ x: 1, y: 4 }, { x: 1, y: 2 });
      const actual = line.slope;
      const expected = -Infinity;
      assert.strictEqual(actual, expected);
    });

    it("should give slope NaN for a point", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const actual = line.slope;
      const expected = NaN;
      assert.strictEqual(actual, expected);
    });
  });
});
