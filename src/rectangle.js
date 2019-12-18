const Point = require("./point");
const Line = require("./line");

getLength = (point1, point2) => {
  const length = point1.findDistanceTo(point2);
  return length;
};

getBreath = (point1, point2) => {
  const breath = point1.findDistanceTo(point2);
  return breath;
};

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }

  get area() {
    const endB = new Point(this.endC.x, this.endA.y);

    const length = getLength(this.endA, endB);
    const breath = getBreath(endB, this.endC);

    return length * breath;
  }

  get perimeter() {
    const endB = new Point(this.endC.x, this.endA.y);

    const length = getLength(this.endA, endB);
    const breath = getBreath(endB, this.endC);

    return 2 * (length + breath);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;

    const diagonal = new Line(this.endA, this.endC);
    const otherDiagonal = new Line(other.endA, other.endC);
    return diagonal.isEqualTo(otherDiagonal);
  }

  hasPoint(point) {
    const endA = this.endA;
    const endB = new Point(this.endC.x, this.endA.y);
    const endC = this.endC;
    const endD = new Point(this.endA.x, this.endC.y);

    const rectangle = [
      new Line(endA, endB),
      new Line(endB, endC),
      new Line(endC, endD),
      new Line(endD, endA)
    ];

    return rectangle.some(line => line.hasPoint(point));
  }

  // r.covers(p) // is true if point p is inside rectangle r
  
}

module.exports = Rectangle;
