export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.colour = `rgb(${(Math.random() * 256) | 0}, ${
      (Math.random() * 256) | 0
    }, ${(Math.random() * 256) | 0})`;
  }

  hit() {
    // Check if hits > length
    // Hit target
    this.hits += 1;
  }

  isSunk() {
    // Check if ship hits >= length then it's sunk
    if (this.hits >= this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}
