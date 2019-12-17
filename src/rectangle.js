const Point = require("./point");
console.log(Point.findDistanceTo);

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endC.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
    this.endD = new Point(endA.x, endC.y);
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }

  get area() {
    const length = this.endA.findDistanceTo(this.endB);
    const breath = this.endB.findDistanceTo(this.endC);

    return length * breath;
  }
}

module.exports = Rectangle;
