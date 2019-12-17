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
    return (
      arePointsEqual(this.center, other.center) && this.radius === other.radius
    );
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

module.exports = Circle;
