// p = new Point(2,3)// creates a point at 2,3
class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `point (${this.x}, ${this.y})`;
  }
}

module.exports = Point;
