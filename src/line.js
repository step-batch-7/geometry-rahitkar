class Line {
  constructor(positionX1, positionY1, positionX2, positionY2) {
    this.positionX1 = positionX1;
    this.positionY1 = positionY1;
    this.positionX2 = positionX2;
    this.positionY2 = positionY2;
  }

  toString() {
    return `Line (${this.positionX1}, ${this.positionY1}) to (${this.positionX2}, ${this.positionY2})`;
  }

  areBothEqual(other) {
    return (
      this.positionX1 === other.positionX1 &&
      this.positionY1 === other.positionY1 &&
      this.positionX2 === other.positionX2 &&
      this.positionY2 === other.positionY2
    );
  }

  isEqual(other) {
    return (
      this.areBothEqual(other) && this instanceof Line && other instanceof Line
    );
  }
}

module.exports = Line;
