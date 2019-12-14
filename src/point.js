class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `point @(${this.x}, ${this.y})`;
  }

  visit(func) {
    return func(this.x, this.y);
  }
}

module.exports = Point;
