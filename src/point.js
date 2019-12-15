class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(func) {
    return func(this.x, this.y);
  }

  isEqualTo(point) {
    return this.x === point.x && this.y === point.y;
  }

  clone() {
    return new Point(this.x, this.y);
  }
}

module.exports = Point;
