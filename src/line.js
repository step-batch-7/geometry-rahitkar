const Point = require("./point");

const arePointsEqual = (pointA, pointB) => {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const isColinear = (pointOne, pointTwo, pointThree) => {
  return (
    (pointThree.y - pointTwo.y) * (pointTwo.x - pointOne.x) ===
    (pointTwo.y - pointOne.y) * (pointThree.x - pointTwo.x)
  );
};

class Line {
  constructor(start, end) {
    this.start = new Point(start.x, start.y);
    this.end = new Point(end.x, end.y);
  }

  toString() {
    return `[Line (${this.start.x},${this.start.y}) to (${this.end.x},${this.end.y})]`;
  }

  isEqualTo(other) {
    if (this === other) return true;

    if (!(other instanceof Line)) return false;

    return (
      (arePointsEqual(this.start, other.start) &&
        arePointsEqual(this.end, other.end)) ||
      (arePointsEqual(this.start, other.end) &&
        arePointsEqual(this.end, other.start))
    );
  }

  get length() {
    return Math.sqrt(
      (this.start.x - this.end.x) ** 2 + (this.start.y - this.end.y) ** 2
    );
  }

  get slope() {
    return (this.end.y - this.start.y) / (this.end.x - this.start.x);
  }

  isParallelTo(other) {
    return (
      this.slope === other.slope &&
      !isColinear(this.start, this.end, other.start)
    );
  }

  findX(y) {
    if (y < this.start.y || y > this.end.y) return NaN;

    if (this.slope === 0) return this.start.x;

    return (y - this.start.y + this.slope * this.start.x) / this.slope;
  }

  findY(x) {
    if (x < this.start.x || x > this.end.x) return NaN;

    if (this.slope === Infinity || this.slope === -Infinity)
      return this.start.y;

    return this.slope * (x - this.start.x) + this.start.y;
  }

  split() {
    const midPoint = {
      x: (this.start.x + this.end.x) / 2,
      y: (this.start.y + this.end.y) / 2
    };

    const start = { x: this.start.x, y: this.start.y };
    const end = { x: this.end.x, y: this.end.y };
    return [new Line(start, midPoint), new Line(midPoint, end)];
  }

  hasPoint(otherPoint) {
    return (
      otherPoint instanceof Point &&
      (otherPoint.x === this.findX(otherPoint.y) ||
        otherPoint.y === this.findY(otherPoint.x))
    );
  }

  findPointFromStart(distance) {
    if (distance > this.length || !Number.isInteger(distance) || distance < 0)
      return null;
    const ratio = distance / this.length;

    const xCoordinate = (1 - ratio) * this.start.x + this.end.x * ratio;
    const yCoordinate = (1 - ratio) * this.start.y + this.end.y * ratio;

    const point = new Point(xCoordinate, yCoordinate);
    return point;
  }

  findPointFromEnd(distance) {
    new Line(
      new Point(this.end.x, this.end.y),
      new Point(this.start.x, this.start.y)
    );
    return this.findPointFromStart(distance);
  }
}

module.exports = Line;
