export default class Ship {
  constructor() {
    this.length = 4;
    this.hits = 0;
    this.sunk = false;
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
