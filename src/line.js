const arePointsEqual = (pointA, pointB) => {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const areOrdinatesEqual = (myLine, otherLine) => {
  return (
    myLine.start.y === otherLine.start.y && myLine.end.y === otherLine.end.y
  );
};

const areAbscissasEqual = (myLine, otherLine) => {
  return (
    myLine.start.x === otherLine.start.x && myLine.end.x === otherLine.end.x
  );
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  toString() {
    return `Line (${this.start.x}, ${this.start.y}) to (${this.end.x}, ${this.end.y})`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) {
      return false;
    }
    return (
      arePointsEqual(this.start, other.start) &&
      arePointsEqual(this.end, other.end)
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

  parallel(other) {
    if (this.isEqualTo(other)) {
      return false;
    }

    return (
      this.slope === other.slope &&
      !(areOrdinatesEqual(this, other) || areAbscissasEqual(this, other))
    );
  }

  findX(y) {
    return (y - this.start.y + this.slope * this.start.x) / this.slope;
  }
}

module.exports = Line;
