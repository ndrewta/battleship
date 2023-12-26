import ps from "./pubSub";

export default class GameBoard {
  constructor(owner, boardPosition) {
    this.owner = owner;
    this.boardPosition = boardPosition;
    this.grid = {};
    this.initGrid(this.length, this.width);
    this.sunkShips = 0;
    this.shipSet = new Set();
    this.totalShips = 0;
    ps.subscribe("attack-grid", (e) => this.receiveAttack(e));
    ps.subscribe("reset-values", () => this.resetValues());
  }

  resetValues() {
    // Reset ship set
    this.shipSet = null;
    this.shipSet = new Set();

    // Reset grid
    this.grid = {};
    this.initGrid(this.length, this.width);

    // Reset variables
    this.sunkShips = 0;
    this.totalShips = 0;
  }

  initGrid() {
    // Create a 10x10 grid
    for (let x = 1; x <= 10; x++) {
      this.grid[x] = {};
      for (let y = 1; y <= 10; y++) {
        this.grid[x][y] = {};
      }
    }
  }

  placeShipDown(ship, x, y) {
    if (y > 10) {
      console.log("placeshipdown error. y > 10");
      return;
    }
    // Place ship downwards
    for (let i = 0; i < ship.length; i++) {
      this.grid[x][y - i] = ship;
    }
    this.shipSet.add(ship);
    this.totalShips += 1;
  }

  placeShipRight(ship, x, y) {
    if (x > 10) {
      console.log("placeshipright error. x > 10");
      return;
    }
    // Place ship rightwards
    for (let i = 0; i < ship.length; i++) {
      this.grid[x + i][y] = ship;
    }
    this.shipSet.add(ship);
    this.totalShips += 1;
  }

  receiveAttack(coord) {
    const { x } = coord;
    const { y } = coord;
    const { owner } = coord;
    if (owner !== this.boardPosition) {
      return;
    }
    // Check if a coordinate hit or miss a ship
    if (this.grid[x][y].status == "hit" || this.grid[x][y].status == "miss") {
      return;
    }
    if (Object.values(this.grid[x][y]).length !== 0) {
      // Check if already hit or miss then do nothing
      // ship.hits += 1;
      this.grid[x][y].hit();
      this.grid[x][y].isSunk();
      const gridObj = { status: "hit" };
      this.grid[x][y] = gridObj;
    } else {
      this.grid[x][y].status = "miss";
    }
    // Update grid
    // Check player ships status
    this.checkPlayerShips();
    this.updateGrid(owner);
  }

  checkPlayerShips() {
    // Check if ships sunk then push to array
    this.shipSet.forEach((ship) => {
      if (ship.sunk == true && ship.length == ship.hits) {
        this.sunkShips += 1;
        this.shipSet.delete(ship);
      }
    });

    // Check if number of sunk ships is equal to number of all ships on board
    if (this.sunkShips == this.totalShips) {
      console.log(`${this.owner.name} lost!`);
      ps.publish("game-over", this.boardPosition);
      return true;
    }
    return false;
  }

  updateGrid(elem) {
    // console.log(this.owner, this.grid);

    // Publish updated grid values
    const obj = { owner: this.owner, grid: this.grid, elem };
    ps.publish("update-board", obj);
  }
}
