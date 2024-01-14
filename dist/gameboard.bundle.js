/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pubSub.js":
/*!***********************!*\
  !*** ./src/pubSub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pubSub() {
  const subscribers = {};

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }
  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
    const index = subscribers[eventName].length - 1;

    return {
      unsubscribe() {
        subscribers[eventName].splice(index, 1);
      },
    };
  }
  return { publish, subscribe };
}

const sharedPubSub = pubSub();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sharedPubSub);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");
/* eslint-disable no-restricted-syntax */


class GameBoard {
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
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("attack-grid", (e) => this.receiveAttack(e));
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("reset-values", () => this.resetValues());
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("cpu-attack", (e) => this.cpuAttack(e));
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
      _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("game-over", this.boardPosition);
      return true;
    }
    return false;
  }

  updateGrid(elem) {
    // Publish updated grid values
    const obj = { owner: this.owner, grid: this.grid, elem };
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("update-board", obj);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHB1YlN1YigpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgcHVibGlzaCwgc3Vic2NyaWJlIH07XG59XG5cbmNvbnN0IHNoYXJlZFB1YlN1YiA9IHB1YlN1YigpO1xuZXhwb3J0IGRlZmF1bHQgc2hhcmVkUHViU3ViO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHBzIGZyb20gXCIuL3B1YlN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lciwgYm9hcmRQb3NpdGlvbikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmJvYXJkUG9zaXRpb24gPSBib2FyZFBvc2l0aW9uO1xuICAgIHRoaXMuZ3JpZCA9IHt9O1xuICAgIHRoaXMuaW5pdEdyaWQodGhpcy5sZW5ndGgsIHRoaXMud2lkdGgpO1xuICAgIHRoaXMuc3Vua1NoaXBzID0gMDtcbiAgICB0aGlzLnNoaXBTZXQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy50b3RhbFNoaXBzID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5hZGphY2VudENvb3JkID0gbmV3IFNldCgpO1xuICAgIHBzLnN1YnNjcmliZShcImF0dGFjay1ncmlkXCIsIChlKSA9PiB0aGlzLnJlY2VpdmVBdHRhY2soZSkpO1xuICAgIHBzLnN1YnNjcmliZShcInJlc2V0LXZhbHVlc1wiLCAoKSA9PiB0aGlzLnJlc2V0VmFsdWVzKCkpO1xuICAgIHBzLnN1YnNjcmliZShcImNwdS1hdHRhY2tcIiwgKGUpID0+IHRoaXMuY3B1QXR0YWNrKGUpKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWVzKCkge1xuICAgIC8vIFJlc2V0IHNoaXAgc2V0XG4gICAgdGhpcy5zaGlwU2V0ID0gbnVsbDtcbiAgICB0aGlzLnNoaXBTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBSZXNldCBncmlkXG4gICAgdGhpcy5ncmlkID0ge307XG4gICAgdGhpcy5pbml0R3JpZCh0aGlzLmxlbmd0aCwgdGhpcy53aWR0aCk7XG5cbiAgICAvLyBSZXNldCB2YXJpYWJsZXNcbiAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy50b3RhbFNoaXBzID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRNb3ZlcyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmFkamFjZW50Q29vcmQgPSBudWxsO1xuICAgIHRoaXMuYWRqYWNlbnRDb29yZCA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIC8vIENyZWF0ZSBhIDEweDEwIGdyaWRcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF0gPSB7fTtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0ge307XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb29yZHMoKSB7XG4gICAgLy8gR2VuZXJhdGUgY29vcmRpbmF0ZXNcbiAgICBsZXQgbnVtWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgbGV0IG51bVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgIGxldCBhYnNEaWZmZXJlbmNlID0gTWF0aC5hYnMobnVtWCAtIG51bVkpO1xuICAgIGxldCBjb29yZGluYXRlcyA9IFtudW1YLCBudW1ZXTtcblxuICAgIHdoaWxlIChhYnNEaWZmZXJlbmNlID4gNCB8fCBhYnNEaWZmZXJlbmNlID09IDApIHtcbiAgICAgIG51bVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgbnVtWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICBhYnNEaWZmZXJlbmNlID0gTWF0aC5hYnMobnVtWCAtIG51bVkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIHBsYWNlU2hpcERvd24oc2hpcCwgeCwgeSkge1xuICAgIC8vIEdlbmVyYXRlIGNvb3JkaW5hdGVzIGlmIG51bGxcbiAgICBpZiAoKHggJiYgeSkgPT0gbnVsbCkgW3gsIHldID0gdGhpcy5nZW5lcmF0ZUNvb3JkcygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgeSBjb29yZGluYXRlIGlzIG91dCBvZiBib3VuZHNcbiAgICBpZiAoeSAtIHNoaXAubGVuZ3RoICsgMSA8PSAwKSB7XG4gICAgICAvLyBNb2RpZnkgY29vcmRpbmF0ZVxuICAgICAgeSArPSBNYXRoLmFicyh5IC0gc2hpcC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFub3RoZXIgc2hpcCBoYXMgb2NjdXBpZWQgdGhlIHNxdWFyZVxuICAgIGxldCBvdmVybGFwID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ncmlkW3hdW3kgLSBpXS5sZW5ndGgpIHtcbiAgICAgICAgb3ZlcmxhcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG92ZXJsYXAgdGhlbiBjaGFuZ2UgeCBjb29yZGluYXRlXG4gICAgaWYgKG92ZXJsYXApIHtcbiAgICAgIGNvbnN0IG5ld1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgdGhpcy5wbGFjZVNoaXBEb3duKHNoaXAsIG5ld1gsIHkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXAgZG93bndhcmRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF1beSAtIGldID0gc2hpcDtcbiAgICB9XG4gICAgdGhpcy5zaGlwU2V0LmFkZChzaGlwKTtcbiAgICB0aGlzLnRvdGFsU2hpcHMgKz0gMTtcbiAgfVxuXG4gIHBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIHkpIHtcbiAgICAvLyBHZW5lcmF0ZSBjb29yZGluYXRlcyBpZiBudWxsXG4gICAgaWYgKCh4ICYmIHkpID09IG51bGwpIFt4LCB5XSA9IHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcblxuICAgIC8vIENoZWNrIGlmIHggY29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzXG4gICAgaWYgKHggKyBzaGlwLmxlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgLy8gTW9kaWZ5IGNvb3JkaW5hdGVcbiAgICAgIHggLT0geCArIHNoaXAubGVuZ3RoIC0gMTE7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYW5vdGhlciBzaGlwIGhhcyBvY2N1cGllZCB0aGUgc3F1YXJlXG4gICAgbGV0IG92ZXJsYXAgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdyaWRbeCArIGldW3ldLmxlbmd0aCkge1xuICAgICAgICBvdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgb3ZlcmxhcCB0aGVuIGNoYW5nZSB4IGNvb3JkaW5hdGVcbiAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgY29uc3QgbmV3WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICB0aGlzLnBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIG5ld1kpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXAgcmlnaHR3YXJkc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgfVxuICAgIHRoaXMuc2hpcFNldC5hZGQoc2hpcCk7XG4gICAgdGhpcy50b3RhbFNoaXBzICs9IDE7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgY29uc3QgeyB4IH0gPSBjb29yZDtcbiAgICBjb25zdCB7IHkgfSA9IGNvb3JkO1xuICAgIGNvbnN0IHsgb3duZXIgfSA9IGNvb3JkO1xuICAgIGlmIChvd25lciAhPT0gdGhpcy5ib2FyZFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGEgY29vcmRpbmF0ZSBoaXQgb3IgbWlzcyBhIHNoaXBcbiAgICBpZiAodGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9PSBcImhpdFwiIHx8IHRoaXMuZ3JpZFt4XVt5XS5zdGF0dXMgPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKE9iamVjdC52YWx1ZXModGhpcy5ncmlkW3hdW3ldKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIENoZWNrIGlmIGFscmVhZHkgaGl0IG9yIG1pc3MgdGhlbiBkbyBub3RoaW5nXG4gICAgICAvLyBzaGlwLmhpdHMgKz0gMTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5oaXQoKTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgIGNvbnN0IGdyaWRPYmogPSB7IHN0YXR1czogXCJoaXRcIiB9O1xuICAgICAgdGhpcy5ncmlkW3hdW3ldID0gZ3JpZE9iajtcbiAgICAgIC8vIEFkZCBjb29yZGluYXRlIHRvIGNoZWNrQWRqYWNlbnRDb29yZCBmb3IgQUkgYmVoYXZpb3VyXG4gICAgICB0aGlzLmFkamFjZW50Q29vcmQuYWRkKHsgeDogY29vcmQueCwgeTogY29vcmQueSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9IFwibWlzc1wiO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgZ3JpZFxuICAgIC8vIENoZWNrIHBsYXllciBzaGlwcyBzdGF0dXNcbiAgICB0aGlzLnVwZGF0ZUdyaWQob3duZXIpO1xuICAgIHRoaXMuY2hlY2tQbGF5ZXJTaGlwcygpO1xuICB9XG5cbiAgY2hlY2tQbGF5ZXJTaGlwcygpIHtcbiAgICAvLyBDaGVjayBpZiBzaGlwcyBzdW5rIHRoZW4gcHVzaCB0byBhcnJheVxuICAgIHRoaXMuc2hpcFNldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zdW5rID09IHRydWUgJiYgc2hpcC5sZW5ndGggPT0gc2hpcC5oaXRzKSB7XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIHRoaXMuc2hpcFNldC5kZWxldGUoc2hpcCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBpZiBudW1iZXIgb2Ygc3VuayBzaGlwcyBpcyBlcXVhbCB0byBudW1iZXIgb2YgYWxsIHNoaXBzIG9uIGJvYXJkXG4gICAgaWYgKHRoaXMuc3Vua1NoaXBzID09IHRoaXMudG90YWxTaGlwcykge1xuICAgICAgcHMucHVibGlzaChcImdhbWUtb3ZlclwiLCB0aGlzLmJvYXJkUG9zaXRpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZUdyaWQoZWxlbSkge1xuICAgIC8vIFB1Ymxpc2ggdXBkYXRlZCBncmlkIHZhbHVlc1xuICAgIGNvbnN0IG9iaiA9IHsgb3duZXI6IHRoaXMub3duZXIsIGdyaWQ6IHRoaXMuZ3JpZCwgZWxlbSB9O1xuICAgIHBzLnB1Ymxpc2goXCJ1cGRhdGUtYm9hcmRcIiwgb2JqKTtcbiAgfVxuXG4gIC8vIEFJIGxvZ2ljXG4gIGNwdU1vdmUoeCA9IDEwLCB5ID0gMTApIHtcbiAgICBsZXQgcmV0dXJuTW92ZTtcbiAgICBsZXQgZGVjaWRlZE1vdmUgPSBmYWxzZTtcbiAgICBsZXQgY2hlY2tlZEFkamFjZW50TW92ZXMgPSBmYWxzZTtcblxuICAgIC8vIGNoZWNrIGFkamFjZW50Y29vcmQgc2V0IHdpdGggKy0xIHgseS5cbiAgICAvLyB0aGVuIGNyb3NzIGNoZWNrIHRoZSBjb29yZCB3aXRoIHNlbGVjdGVkbW92ZXMgc2V0XG4gICAgLy8gaWYgdGhhdCBhZGphY2VudCBjb29yZCBpc250IGluIHNlbGVjdGVkbW92ZXMgdGhlbiBwcm9jZWVkLlxuICAgIC8vIG90aGVyd2lzZSBpZiB0aGV5J3JlIGFsbCBtYXRjaGVkIHVwIGluIGJvdGggc2V0c1xuICAgIC8vIGNvbnRpbnVlIHRvIGdlbmVyYXRlIGEgcmFuZG9tIGNvb3JkXG5cbiAgICBjb25zdCBjaGVja0FkamFjZW50Q29vcmQgPSAoKSA9PiB7XG4gICAgICAvLyBDaGVjayBhZGphY2VudCBzcXVhcmVzIG9mIHByZXZpb3VzIGhpdHNcbiAgICAgIGZvciAoY29uc3QgY29vcmQgb2YgdGhpcy5hZGphY2VudENvb3JkKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHZhbGlkIG1vdmVcbiAgICAgICAgbGV0IHRlbXBDb29yZCA9IHsgb3duZXI6IFwiYm90XCIsIHg6IGNvb3JkLngsIHk6IGNvb3JkLnkgfTtcblxuICAgICAgICAvLyBDaGVjayBpZiB4IGlzIHZhbGlkIGFuZCBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGNvb3JkLnggKyAxIDw9IDEwKSB7XG4gICAgICAgICAgdGVtcENvb3JkLnggPSBjb29yZC54ICsgMTtcbiAgICAgICAgICBpZiAoIWNoZWNrTW92ZXModGVtcENvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBDb29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmQueCAtIDEgPiAwKSB7XG4gICAgICAgICAgdGVtcENvb3JkLnggPSBjb29yZC54IC0gMTtcbiAgICAgICAgICBpZiAoIWNoZWNrTW92ZXModGVtcENvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBDb29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCB0ZW1wQ29vcmQueFxuICAgICAgICB0ZW1wQ29vcmQueCA9IGNvb3JkLng7XG5cbiAgICAgICAgaWYgKGNvb3JkLnkgKyAxIDw9IDEwKSB7XG4gICAgICAgICAgdGVtcENvb3JkLnkgPSBjb29yZC55ICsgMTtcbiAgICAgICAgICBpZiAoIWNoZWNrTW92ZXModGVtcENvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBDb29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmQueSAtIDEgPiAwKSB7XG4gICAgICAgICAgdGVtcENvb3JkLnkgPSBjb29yZC55IC0gMTtcbiAgICAgICAgICBpZiAoIWNoZWNrTW92ZXModGVtcENvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBDb29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmFuZG9tQ29vcmQgPSAoKSA9PiB7XG4gICAgICAvLyBHZW5lcmF0ZSByYW5kb20gY29vcmRpbmF0ZXNcbiAgICAgIGNvbnN0IG9iaiA9IHsgb3duZXI6IFwiYm90XCIgfTtcbiAgICAgIGNvbnN0IGNvb3JkWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHgpICsgMTtcbiAgICAgIGNvbnN0IGNvb3JkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHkpICsgMTtcbiAgICAgIG9iai54ID0gY29vcmRYO1xuICAgICAgb2JqLnkgPSBjb29yZFk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja01vdmVzID0gKG5ld01vdmUpID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIGNvb3JkaW5hdGVzIGhhdmUgYmVlbiBzZWxlY3RlZCBwcmV2aW91c2x5XG4gICAgICBmb3IgKGNvbnN0IG1vdmUgb2YgdGhpcy5zZWxlY3RlZE1vdmVzKSB7XG4gICAgICAgIGlmIChtb3ZlLnggPT09IG5ld01vdmUueCAmJiBtb3ZlLnkgPT09IG5ld01vdmUueSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkTW92ZXMuc2l6ZSA+PSAxMDApIHtcbiAgICAgIC8vIElmIGFsbCBzcXVhcmVzIGhhdmUgYmVlbiBmaWxsZWQgdGhlbiByZXR1cm5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aGlsZSAoIWRlY2lkZWRNb3ZlKSB7XG4gICAgICBsZXQgbW92ZTtcbiAgICAgIC8vIEV4aXQgbG9vcCBpZiBhbGwgbW92ZXMgZXhoYXVzdGVkXG5cbiAgICAgIC8vIElmIGFkamFjZW50IG1vdmUgdG8gcHJldmlvdXMgbW92ZSBwb29sIGZvdW5kIHRoZW4gcmV0dXJuXG4gICAgICBpZiAoIWNoZWNrZWRBZGphY2VudE1vdmVzKSB7XG4gICAgICAgIGNoZWNrZWRBZGphY2VudE1vdmVzID0gdHJ1ZTtcbiAgICAgICAgbW92ZSA9IGNoZWNrQWRqYWNlbnRDb29yZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb250aW51ZSBsb29waW5nIHVudGlsIGEgdW5pcXVlIGNvb3JkaW5hdGUgaXMgZm91bmRcbiAgICAgIGlmIChtb3ZlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBtb3ZlID0gcmFuZG9tQ29vcmQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGVja01vdmVzKG1vdmUpKSB7XG4gICAgICAgIC8vIElmIG1vdmUgaGFzIGJlZW4gZm91bmQgdGhlbiByZXR1cm4gbW92ZVxuICAgICAgICBkZWNpZGVkTW92ZSA9IHRydWU7XG4gICAgICAgIHJldHVybk1vdmUgPSBtb3ZlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRNb3Zlcy5hZGQocmV0dXJuTW92ZSk7XG5cbiAgICByZXR1cm4gcmV0dXJuTW92ZTtcbiAgfVxuXG4gIGNwdUF0dGFjayhib2FyZENoZWNrKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRQb3NpdGlvbiA9PSBib2FyZENoZWNrKSB7XG4gICAgICBjb25zdCBtb3ZlID0gdGhpcy5jcHVNb3ZlKCk7XG4gICAgICB0aGlzLnJlY2VpdmVBdHRhY2sobW92ZSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=