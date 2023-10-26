export default class GameBoard {
  constructor(owner) {
    this.owner = owner;
    this.length = 10;
    this.width = 10;
    this.grid = {};
    this.initGrid(this.length, this.width);
  }

  initGrid() {
    // Create a 10x10 grid
    for (let x = 1; x <= this.length; x++) {
      this.grid[x] = {};
      for (let y = 1; y <= this.width; y++) {
        this.grid[x][y] = {};
      }
    }
  }

  placeShip(ship, x, y) {
    // Place ship at coordinates
    for (let i = 0; i < ship.length; i++) {
      // Place ship upwards
      if (y > x) {
        this.grid[x][y + i] = ship;
      }

      // Place ship downwards
      if (y < x) {
        this.grid[x][y - i] = ship;
      }

      // Place ship leftwards
      if (x < y) {
        this.grid[x - i][y] = ship;
      }

      // Place ship rightwards
      if (x > y) {
        this.grid[x + i][y] = ship;
      }
    }
  }

  receiveAttack(x, y) {
    // Check if a coordinate hit or miss a ship
    if (Object.values(this.grid[x][y]).length !== 0) {
      // ship.hits += 1;
      this.grid[x][y].hit();
      this.grid[x][y].status = "hit";
    } else {
      this.grid[x][y].status = "miss";
    }
  }

  checkPlayerShips() {
    // Init arrays
    let sunkShips = 0;
    const shipSet = new Set();

    // Store all ships into set
    for (let x = 1; x <= this.length; x++) {
      for (let y = 1; y <= this.width; y++) {
        if (this.grid[x][y].hasOwnProperty("length")) {
          shipSet.add(this.grid[x][y]);
        }
      }
    }

    // Check if ships sunk then push to array
    shipSet.forEach((ship) => {
      if (ship.sunk == true) {
        sunkShips += 1;
      }
    });

    // Check if number of sunk ships is equal to number of all ships on board
    if (sunkShips == shipSet.size) {
      return true;
    }
    return false;
  }
}
