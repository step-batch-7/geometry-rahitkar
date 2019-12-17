const Point = require("./point");

const arePointsEqual = (pointA, pointB) => {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

class Circle {
  constructor(point, radius) {
    this.center = new Point(point.x, point.y);
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;

    return (
      arePointsEqual(this.center, other.center) && this.radius === other.radius
    );
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(otherPoint) {
    if (!(otherPoint instanceof Point)) return false;

    return this.center.findDistanceTo(otherPoint) === this.radius;
  }

  moveTo(point) {
    const movedCircle = new Circle(point, this.radius);
    return movedCircle;
  }

  covers(otherPoint) {
    if (!(otherPoint instanceof Point)) return false;

    return this.center.findDistanceTo(otherPoint) <= this.radius;
  }
}

module.exports = Circle;
