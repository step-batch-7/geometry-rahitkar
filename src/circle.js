class Circle {
  constructor(point, radius) {
    this.x = point.x;
    this.y = point.y;
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.x},${this.y}) radius ${this.radius}]`;
  }
}

module.exports = Circle;
