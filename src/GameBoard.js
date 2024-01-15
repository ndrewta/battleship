/* eslint-disable no-restricted-syntax */
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
    this.selectedMoves = new Set();
    this.adjacentCoord = new Set();
    ps.subscribe("attack-grid", (e) => this.receiveAttack(e));
    ps.subscribe("reset-values", () => this.resetValues());
    ps.subscribe("cpu-attack", (e) => this.cpuAttack(e));
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
    this.selectedMoves = null;
    this.selectedMoves = new Set();
    this.adjacentCoord = null;
    this.adjacentCoord = new Set();
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

  generateCoords() {
    // Generate coordinates
    let numX = Math.floor(Math.random() * 10) + 1;
    let numY = Math.floor(Math.random() * 10) + 1;
    let absDifference = Math.abs(numX - numY);
    let coordinates = [numX, numY];

    while (absDifference > 4 || absDifference == 0) {
      numX = Math.floor(Math.random() * 10) + 1;
      numY = Math.floor(Math.random() * 10) + 1;
      absDifference = Math.abs(numX - numY);
    }

    return coordinates;
  }

  placeShipDown(ship, x, y) {
    // Generate coordinates if null
    if ((x && y) == null) [x, y] = this.generateCoords();

    // Check if y coordinate is out of bounds
    if (y - ship.length + 1 <= 0) {
      // Modify coordinate
      y += Math.abs(y - ship.length);
    }

    // Check if another ship has occupied the square
    let overlap = false;
    for (let i = 0; i < ship.length; i++) {
      if (this.grid[x][y - i].length) {
        overlap = true;
        break;
      }
    }

    // If overlap then change x coordinate
    if (overlap) {
      const newX = Math.floor(Math.random() * 10) + 1;
      this.placeShipDown(ship, newX, y);
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
    // Generate coordinates if null
    if ((x && y) == null) [x, y] = this.generateCoords();

    // Check if x coordinate is out of bounds
    if (x + ship.length - 1 > 10) {
      // Modify coordinate
      x -= x + ship.length - 11;
    }

    // Check if another ship has occupied the square
    let overlap = false;
    for (let i = 0; i < ship.length; i++) {
      if (this.grid[x + i][y].length) {
        overlap = true;
        break;
      }
    }

    // If overlap then change x coordinate
    if (overlap) {
      const newY = Math.floor(Math.random() * 10) + 1;
      this.placeShipRight(ship, x, newY);
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
      // Add coordinate to checkAdjacentCoord for AI behaviour
      this.adjacentCoord.add({ x: coord.x, y: coord.y });
    } else {
      this.grid[x][y].status = "miss";
    }
    // Update grid
    // Check player ships status
    this.updateGrid(owner);
    this.checkPlayerShips();
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
      ps.publish("game-over", this.boardPosition);
      return true;
    }
    return false;
  }

  updateGrid(elem) {
    // Publish updated grid values
    const obj = { owner: this.owner, grid: this.grid, elem };
    ps.publish("update-board", obj);
  }

  // AI logic
  cpuMove(x = 10, y = 10) {
    let returnMove;
    let decidedMove = false;
    let checkedAdjacentMoves = false;

    // check adjacentcoord set with +-1 x,y.
    // then cross check the coord with selectedmoves set
    // if that adjacent coord isnt in selectedmoves then proceed.
    // otherwise if they're all matched up in both sets
    // continue to generate a random coord

    const checkAdjacentCoord = () => {
      // Check adjacent squares of previous hits
      for (const coord of this.adjacentCoord) {
        // Check if valid move
        let tempCoord = { owner: "bot", x: coord.x, y: coord.y };

        // Check if x is valid and is available
        if (coord.x + 1 <= 10) {
          tempCoord.x = coord.x + 1;
          if (!checkMoves(tempCoord)) {
            return tempCoord;
          }
        }

        if (coord.x - 1 > 0) {
          tempCoord.x = coord.x - 1;
          if (!checkMoves(tempCoord)) {
            return tempCoord;
          }
        }

        // Reset tempCoord.x
        tempCoord.x = coord.x;

        if (coord.y + 1 <= 10) {
          tempCoord.y = coord.y + 1;
          if (!checkMoves(tempCoord)) {
            return tempCoord;
          }
        }

        if (coord.y - 1 > 0) {
          tempCoord.y = coord.y - 1;
          if (!checkMoves(tempCoord)) {
            return tempCoord;
          }
        }
      }
    };

    const randomCoord = () => {
      // Generate random coordinates
      const obj = { owner: "bot" };
      const coordX = Math.floor(Math.random() * x) + 1;
      const coordY = Math.floor(Math.random() * y) + 1;
      obj.x = coordX;
      obj.y = coordY;
      return obj;
    };

    const checkMoves = (newMove) => {
      // Check if coordinates have been selected previously
      for (const move of this.selectedMoves) {
        if (move.x === newMove.x && move.y === newMove.y) {
          return true;
        }
      }
      return false;
    };

    if (this.selectedMoves.size >= 100) {
      // If all squares have been filled then return
      return;
    }

    while (!decidedMove) {
      let move;
      // Exit loop if all moves exhausted

      // If adjacent move to previous move pool found then return
      if (!checkedAdjacentMoves) {
        checkedAdjacentMoves = true;
        move = checkAdjacentCoord();
      }

      // Continue looping until a unique coordinate is found
      if (move == undefined) {
        move = randomCoord();
      }

      if (!checkMoves(move)) {
        // If move has been found then return move
        decidedMove = true;
        returnMove = move;
      }
    }

    this.selectedMoves.add(returnMove);

    return returnMove;
  }

  cpuAttack(boardCheck) {
    if (this.boardPosition == boardCheck) {
      const move = this.cpuMove();
      this.receiveAttack(move);
    }
  }
}
