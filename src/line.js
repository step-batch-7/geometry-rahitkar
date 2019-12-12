class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  toString() {
    return `Line (${this.start.x}, ${this.start.y}) to (${this.end.x}, ${this.end.y})`;
  }

  areBothEqual(other) {
    return (
      this.start.x === other.start.x &&
      this.start.y === other.start.y &&
      this.end.x === other.end.x &&
      this.end.y === other.end.y
    );
  }

  isEqual(other) {
    return (
      this.areBothEqual(other) && this instanceof Line && other instanceof Line
    );
  }
}

module.exports = Line;
