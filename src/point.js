class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];

    Object.defineProperties(this, {
      x: { writable: false },
      y: { writable: false }
    });
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(func) {
    return func(this.x, this.y);
  }

  isEqualTo(otherPoint) {
    if (!(otherPoint instanceof Point)) return false;

    return this.x === otherPoint.x && this.y === otherPoint.y;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  findDistanceTo(otherPoint) {
    if (!(otherPoint instanceof Point)) return NaN;

    return Math.sqrt(
      (otherPoint.x - this.x) ** 2 + (otherPoint.y - this.y) ** 2
    );
  }

  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
