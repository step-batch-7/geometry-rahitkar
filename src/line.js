class Line {
  constructor(coordinateX1, coordinateY1, coordinateX2, coordinateY2) {
    this.coordinateX1 = coordinateX1;
    this.coordinateY1 = coordinateY1;
    this.coordinateX2 = coordinateX2;
    this.coordinateY2 = coordinateY2;
  }

  toString() {
    return `{coordinateX1:${this.coordinateX1},coordinateY1:${this.coordinateY1},coordinateX2:${this.coordinateX2},coordinateY2:${this.coordinateY2}}`;
  }
}

module.exports = Line;
