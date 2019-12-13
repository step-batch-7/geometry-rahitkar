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
    it("should give the length of a line having two end points", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.length;
      const expected = 2.8284271247461903;
      assert.strictEqual(actual, expected);
    });

    it("should give zero for given input having end points of x,y as zero", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
      const actual = line.length;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });
  });
});
