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

  isEqualTo(otherPoint) {
    if (!(otherPoint instanceof Point)) return false;

    return this.x === otherPoint.x && this.y === otherPoint.y;
  }

  clone() {
    return new Point(this.x, this.y);
  }
  
}

module.exports = Point;
