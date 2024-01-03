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


class GameBoard {
  constructor(owner, boardPosition) {
    this.owner = owner;
    this.boardPosition = boardPosition;
    this.grid = {};
    this.initGrid(this.length, this.width);
    this.sunkShips = 0;
    this.shipSet = new Set();
    this.totalShips = 0;
    this.selectedMoves = [];
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("attack-grid", (e) => this.receiveAttack(e));
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("reset-values", () => this.resetValues());
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("cpu-attack", () => this.cpuAttack());
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
    this.selectedMoves = [];
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
    let move;
    let decidedMove = false;

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

    while (!decidedMove) {
      // Exit loop if all moves exhausted
      if (this.selectedMoves.length >= 100) {
        return;
      }
      // Continue looping until a unique coordinate is found
      move = randomCoord();
      if (!checkMoves(move)) {
        decidedMove = true;
      }
    }

    this.selectedMoves.push(move);

    return move;
  }

  cpuAttack() {
    const move = this.cpuMove();
    this.receiveAttack(move);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBRTtBQUNOLElBQUksK0NBQUU7QUFDTixJQUFJLCtDQUFFO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksSUFBSTtBQUNoQixZQUFZLElBQUk7QUFDaEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLE1BQU0sK0NBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLElBQUksK0NBQUU7QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lQm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHViU3ViKCkge1xuICBjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBwdWJsaXNoLCBzdWJzY3JpYmUgfTtcbn1cblxuY29uc3Qgc2hhcmVkUHViU3ViID0gcHViU3ViKCk7XG5leHBvcnQgZGVmYXVsdCBzaGFyZWRQdWJTdWI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3Iob3duZXIsIGJvYXJkUG9zaXRpb24pIHtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5ib2FyZFBvc2l0aW9uID0gYm9hcmRQb3NpdGlvbjtcbiAgICB0aGlzLmdyaWQgPSB7fTtcbiAgICB0aGlzLmluaXRHcmlkKHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoKTtcbiAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy5zaGlwU2V0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMudG90YWxTaGlwcyA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZE1vdmVzID0gW107XG4gICAgcHMuc3Vic2NyaWJlKFwiYXR0YWNrLWdyaWRcIiwgKGUpID0+IHRoaXMucmVjZWl2ZUF0dGFjayhlKSk7XG4gICAgcHMuc3Vic2NyaWJlKFwicmVzZXQtdmFsdWVzXCIsICgpID0+IHRoaXMucmVzZXRWYWx1ZXMoKSk7XG4gICAgcHMuc3Vic2NyaWJlKFwiY3B1LWF0dGFja1wiLCAoKSA9PiB0aGlzLmNwdUF0dGFjaygpKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWVzKCkge1xuICAgIC8vIFJlc2V0IHNoaXAgc2V0XG4gICAgdGhpcy5zaGlwU2V0ID0gbnVsbDtcbiAgICB0aGlzLnNoaXBTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBSZXNldCBncmlkXG4gICAgdGhpcy5ncmlkID0ge307XG4gICAgdGhpcy5pbml0R3JpZCh0aGlzLmxlbmd0aCwgdGhpcy53aWR0aCk7XG5cbiAgICAvLyBSZXNldCB2YXJpYWJsZXNcbiAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy50b3RhbFNoaXBzID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMgPSBbXTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIC8vIENyZWF0ZSBhIDEweDEwIGdyaWRcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF0gPSB7fTtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0ge307XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb29yZHMoKSB7XG4gICAgLy8gR2VuZXJhdGUgY29vcmRpbmF0ZXNcbiAgICBsZXQgbnVtWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgbGV0IG51bVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgIGxldCBhYnNEaWZmZXJlbmNlID0gTWF0aC5hYnMobnVtWCAtIG51bVkpO1xuICAgIGxldCBjb29yZGluYXRlcyA9IFtudW1YLCBudW1ZXTtcblxuICAgIHdoaWxlIChhYnNEaWZmZXJlbmNlID4gNCB8fCBhYnNEaWZmZXJlbmNlID09IDApIHtcbiAgICAgIG51bVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgbnVtWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICBhYnNEaWZmZXJlbmNlID0gTWF0aC5hYnMobnVtWCAtIG51bVkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIHBsYWNlU2hpcERvd24oc2hpcCwgeCwgeSkge1xuICAgIC8vIEdlbmVyYXRlIGNvb3JkaW5hdGVzIGlmIG51bGxcbiAgICBpZiAoKHggJiYgeSkgPT0gbnVsbCkgW3gsIHldID0gdGhpcy5nZW5lcmF0ZUNvb3JkcygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgeSBjb29yZGluYXRlIGlzIG91dCBvZiBib3VuZHNcbiAgICBpZiAoeSAtIHNoaXAubGVuZ3RoICsgMSA8PSAwKSB7XG4gICAgICAvLyBNb2RpZnkgY29vcmRpbmF0ZVxuICAgICAgeSArPSBNYXRoLmFicyh5IC0gc2hpcC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFub3RoZXIgc2hpcCBoYXMgb2NjdXBpZWQgdGhlIHNxdWFyZVxuICAgIGxldCBvdmVybGFwID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ncmlkW3hdW3kgLSBpXS5sZW5ndGgpIHtcbiAgICAgICAgb3ZlcmxhcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG92ZXJsYXAgdGhlbiBjaGFuZ2UgeCBjb29yZGluYXRlXG4gICAgaWYgKG92ZXJsYXApIHtcbiAgICAgIGNvbnN0IG5ld1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgdGhpcy5wbGFjZVNoaXBEb3duKHNoaXAsIG5ld1gsIHkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXAgZG93bndhcmRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF1beSAtIGldID0gc2hpcDtcbiAgICB9XG4gICAgdGhpcy5zaGlwU2V0LmFkZChzaGlwKTtcbiAgICB0aGlzLnRvdGFsU2hpcHMgKz0gMTtcbiAgfVxuXG4gIHBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIHkpIHtcbiAgICAvLyBHZW5lcmF0ZSBjb29yZGluYXRlcyBpZiBudWxsXG4gICAgaWYgKCh4ICYmIHkpID09IG51bGwpIFt4LCB5XSA9IHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcblxuICAgIC8vIENoZWNrIGlmIHggY29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzXG4gICAgaWYgKHggKyBzaGlwLmxlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgLy8gTW9kaWZ5IGNvb3JkaW5hdGVcbiAgICAgIHggLT0geCArIHNoaXAubGVuZ3RoIC0gMTE7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYW5vdGhlciBzaGlwIGhhcyBvY2N1cGllZCB0aGUgc3F1YXJlXG4gICAgbGV0IG92ZXJsYXAgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdyaWRbeCArIGldW3ldLmxlbmd0aCkge1xuICAgICAgICBvdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgb3ZlcmxhcCB0aGVuIGNoYW5nZSB4IGNvb3JkaW5hdGVcbiAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgY29uc3QgbmV3WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICB0aGlzLnBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIG5ld1kpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXAgcmlnaHR3YXJkc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgfVxuICAgIHRoaXMuc2hpcFNldC5hZGQoc2hpcCk7XG4gICAgdGhpcy50b3RhbFNoaXBzICs9IDE7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgY29uc3QgeyB4IH0gPSBjb29yZDtcbiAgICBjb25zdCB7IHkgfSA9IGNvb3JkO1xuICAgIGNvbnN0IHsgb3duZXIgfSA9IGNvb3JkO1xuICAgIGlmIChvd25lciAhPT0gdGhpcy5ib2FyZFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGEgY29vcmRpbmF0ZSBoaXQgb3IgbWlzcyBhIHNoaXBcbiAgICBpZiAodGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9PSBcImhpdFwiIHx8IHRoaXMuZ3JpZFt4XVt5XS5zdGF0dXMgPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKE9iamVjdC52YWx1ZXModGhpcy5ncmlkW3hdW3ldKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIENoZWNrIGlmIGFscmVhZHkgaGl0IG9yIG1pc3MgdGhlbiBkbyBub3RoaW5nXG4gICAgICAvLyBzaGlwLmhpdHMgKz0gMTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5oaXQoKTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgIGNvbnN0IGdyaWRPYmogPSB7IHN0YXR1czogXCJoaXRcIiB9O1xuICAgICAgdGhpcy5ncmlkW3hdW3ldID0gZ3JpZE9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9IFwibWlzc1wiO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgZ3JpZFxuICAgIC8vIENoZWNrIHBsYXllciBzaGlwcyBzdGF0dXNcbiAgICB0aGlzLnVwZGF0ZUdyaWQob3duZXIpO1xuICAgIHRoaXMuY2hlY2tQbGF5ZXJTaGlwcygpO1xuICB9XG5cbiAgY2hlY2tQbGF5ZXJTaGlwcygpIHtcbiAgICAvLyBDaGVjayBpZiBzaGlwcyBzdW5rIHRoZW4gcHVzaCB0byBhcnJheVxuICAgIHRoaXMuc2hpcFNldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zdW5rID09IHRydWUgJiYgc2hpcC5sZW5ndGggPT0gc2hpcC5oaXRzKSB7XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIHRoaXMuc2hpcFNldC5kZWxldGUoc2hpcCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBpZiBudW1iZXIgb2Ygc3VuayBzaGlwcyBpcyBlcXVhbCB0byBudW1iZXIgb2YgYWxsIHNoaXBzIG9uIGJvYXJkXG4gICAgaWYgKHRoaXMuc3Vua1NoaXBzID09IHRoaXMudG90YWxTaGlwcykge1xuICAgICAgcHMucHVibGlzaChcImdhbWUtb3ZlclwiLCB0aGlzLmJvYXJkUG9zaXRpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZUdyaWQoZWxlbSkge1xuICAgIC8vIFB1Ymxpc2ggdXBkYXRlZCBncmlkIHZhbHVlc1xuICAgIGNvbnN0IG9iaiA9IHsgb3duZXI6IHRoaXMub3duZXIsIGdyaWQ6IHRoaXMuZ3JpZCwgZWxlbSB9O1xuICAgIHBzLnB1Ymxpc2goXCJ1cGRhdGUtYm9hcmRcIiwgb2JqKTtcbiAgfVxuXG4gIC8vIEFJIGxvZ2ljXG4gIGNwdU1vdmUoeCA9IDEwLCB5ID0gMTApIHtcbiAgICBsZXQgbW92ZTtcbiAgICBsZXQgZGVjaWRlZE1vdmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJhbmRvbUNvb3JkID0gKCkgPT4ge1xuICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIGNvb3JkaW5hdGVzXG4gICAgICBjb25zdCBvYmogPSB7IG93bmVyOiBcImJvdFwiIH07XG4gICAgICBjb25zdCBjb29yZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KSArIDE7XG4gICAgICBjb25zdCBjb29yZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB5KSArIDE7XG4gICAgICBvYmoueCA9IGNvb3JkWDtcbiAgICAgIG9iai55ID0gY29vcmRZO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tNb3ZlcyA9IChuZXdNb3ZlKSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlcyBoYXZlIGJlZW4gc2VsZWN0ZWQgcHJldmlvdXNseVxuICAgICAgZm9yIChjb25zdCBtb3ZlIG9mIHRoaXMuc2VsZWN0ZWRNb3Zlcykge1xuICAgICAgICBpZiAobW92ZS54ID09PSBuZXdNb3ZlLnggJiYgbW92ZS55ID09PSBuZXdNb3ZlLnkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICB3aGlsZSAoIWRlY2lkZWRNb3ZlKSB7XG4gICAgICAvLyBFeGl0IGxvb3AgaWYgYWxsIG1vdmVzIGV4aGF1c3RlZFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNb3Zlcy5sZW5ndGggPj0gMTAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIENvbnRpbnVlIGxvb3BpbmcgdW50aWwgYSB1bmlxdWUgY29vcmRpbmF0ZSBpcyBmb3VuZFxuICAgICAgbW92ZSA9IHJhbmRvbUNvb3JkKCk7XG4gICAgICBpZiAoIWNoZWNrTW92ZXMobW92ZSkpIHtcbiAgICAgICAgZGVjaWRlZE1vdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRNb3Zlcy5wdXNoKG1vdmUpO1xuXG4gICAgcmV0dXJuIG1vdmU7XG4gIH1cblxuICBjcHVBdHRhY2soKSB7XG4gICAgY29uc3QgbW92ZSA9IHRoaXMuY3B1TW92ZSgpO1xuICAgIHRoaXMucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9