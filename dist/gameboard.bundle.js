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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBRTtBQUNOLElBQUksK0NBQUU7QUFDTixJQUFJLCtDQUFFO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksSUFBSTtBQUNoQixZQUFZLElBQUk7QUFDaEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEMsTUFBTSwrQ0FBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsSUFBSSwrQ0FBRTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcHViU3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVCb2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwdWJTdWIoKSB7XG4gIGNvbnN0IHN1YnNjcmliZXJzID0ge307XG5cbiAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMTtcblxuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7IHB1Ymxpc2gsIHN1YnNjcmliZSB9O1xufVxuXG5jb25zdCBzaGFyZWRQdWJTdWIgPSBwdWJTdWIoKTtcbmV4cG9ydCBkZWZhdWx0IHNoYXJlZFB1YlN1YjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBzIGZyb20gXCIuL3B1YlN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lciwgYm9hcmRQb3NpdGlvbikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmJvYXJkUG9zaXRpb24gPSBib2FyZFBvc2l0aW9uO1xuICAgIHRoaXMuZ3JpZCA9IHt9O1xuICAgIHRoaXMuaW5pdEdyaWQodGhpcy5sZW5ndGgsIHRoaXMud2lkdGgpO1xuICAgIHRoaXMuc3Vua1NoaXBzID0gMDtcbiAgICB0aGlzLnNoaXBTZXQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy50b3RhbFNoaXBzID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMgPSBbXTtcbiAgICBwcy5zdWJzY3JpYmUoXCJhdHRhY2stZ3JpZFwiLCAoZSkgPT4gdGhpcy5yZWNlaXZlQXR0YWNrKGUpKTtcbiAgICBwcy5zdWJzY3JpYmUoXCJyZXNldC12YWx1ZXNcIiwgKCkgPT4gdGhpcy5yZXNldFZhbHVlcygpKTtcbiAgICBwcy5zdWJzY3JpYmUoXCJjcHUtYXR0YWNrXCIsICgpID0+IHRoaXMuY3B1QXR0YWNrKCkpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZXMoKSB7XG4gICAgLy8gUmVzZXQgc2hpcCBzZXRcbiAgICB0aGlzLnNoaXBTZXQgPSBudWxsO1xuICAgIHRoaXMuc2hpcFNldCA9IG5ldyBTZXQoKTtcblxuICAgIC8vIFJlc2V0IGdyaWRcbiAgICB0aGlzLmdyaWQgPSB7fTtcbiAgICB0aGlzLmluaXRHcmlkKHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoKTtcblxuICAgIC8vIFJlc2V0IHZhcmlhYmxlc1xuICAgIHRoaXMuc3Vua1NoaXBzID0gMDtcbiAgICB0aGlzLnRvdGFsU2hpcHMgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWRNb3ZlcyA9IFtdO1xuICB9XG5cbiAgaW5pdEdyaWQoKSB7XG4gICAgLy8gQ3JlYXRlIGEgMTB4MTAgZ3JpZFxuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgIHRoaXMuZ3JpZFt4XSA9IHt9O1xuICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgICAgICB0aGlzLmdyaWRbeF1beV0gPSB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNvb3JkcygpIHtcbiAgICAvLyBHZW5lcmF0ZSBjb29yZGluYXRlc1xuICAgIGxldCBudW1YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICBsZXQgbnVtWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgbGV0IGFic0RpZmZlcmVuY2UgPSBNYXRoLmFicyhudW1YIC0gbnVtWSk7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gW251bVgsIG51bVldO1xuXG4gICAgd2hpbGUgKGFic0RpZmZlcmVuY2UgPiA0IHx8IGFic0RpZmZlcmVuY2UgPT0gMCkge1xuICAgICAgbnVtWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICBudW1ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgIGFic0RpZmZlcmVuY2UgPSBNYXRoLmFicyhudW1YIC0gbnVtWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcGxhY2VTaGlwRG93bihzaGlwLCB4LCB5KSB7XG4gICAgLy8gR2VuZXJhdGUgY29vcmRpbmF0ZXMgaWYgbnVsbFxuICAgIGlmICgoeCAmJiB5KSA9PSBudWxsKSBbeCwgeV0gPSB0aGlzLmdlbmVyYXRlQ29vcmRzKCk7XG5cbiAgICAvLyBDaGVjayBpZiB5IGNvb3JkaW5hdGUgaXMgb3V0IG9mIGJvdW5kc1xuICAgIGlmICh5IC0gc2hpcC5sZW5ndGggKyAxIDw9IDApIHtcbiAgICAgIC8vIE1vZGlmeSBjb29yZGluYXRlXG4gICAgICB5ICs9IE1hdGguYWJzKHkgLSBzaGlwLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYW5vdGhlciBzaGlwIGhhcyBvY2N1cGllZCB0aGUgc3F1YXJlXG4gICAgbGV0IG92ZXJsYXAgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdyaWRbeF1beSAtIGldLmxlbmd0aCkge1xuICAgICAgICBvdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgb3ZlcmxhcCB0aGVuIGNoYW5nZSB4IGNvb3JkaW5hdGVcbiAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgY29uc3QgbmV3WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICB0aGlzLnBsYWNlU2hpcERvd24oc2hpcCwgbmV3WCwgeSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGxhY2Ugc2hpcCBkb3dud2FyZHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5IC0gaV0gPSBzaGlwO1xuICAgIH1cbiAgICB0aGlzLnNoaXBTZXQuYWRkKHNoaXApO1xuICAgIHRoaXMudG90YWxTaGlwcyArPSAxO1xuICB9XG5cbiAgcGxhY2VTaGlwUmlnaHQoc2hpcCwgeCwgeSkge1xuICAgIC8vIEdlbmVyYXRlIGNvb3JkaW5hdGVzIGlmIG51bGxcbiAgICBpZiAoKHggJiYgeSkgPT0gbnVsbCkgW3gsIHldID0gdGhpcy5nZW5lcmF0ZUNvb3JkcygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgeCBjb29yZGluYXRlIGlzIG91dCBvZiBib3VuZHNcbiAgICBpZiAoeCArIHNoaXAubGVuZ3RoIC0gMSA+IDEwKSB7XG4gICAgICAvLyBNb2RpZnkgY29vcmRpbmF0ZVxuICAgICAgeCAtPSB4ICsgc2hpcC5sZW5ndGggLSAxMTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhbm90aGVyIHNoaXAgaGFzIG9jY3VwaWVkIHRoZSBzcXVhcmVcbiAgICBsZXQgb3ZlcmxhcCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ3JpZFt4ICsgaV1beV0ubGVuZ3RoKSB7XG4gICAgICAgIG92ZXJsYXAgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBvdmVybGFwIHRoZW4gY2hhbmdlIHggY29vcmRpbmF0ZVxuICAgIGlmIChvdmVybGFwKSB7XG4gICAgICBjb25zdCBuZXdZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgIHRoaXMucGxhY2VTaGlwUmlnaHQoc2hpcCwgeCwgbmV3WSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGxhY2Ugc2hpcCByaWdodHdhcmRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyaWRbeCArIGldW3ldID0gc2hpcDtcbiAgICB9XG4gICAgdGhpcy5zaGlwU2V0LmFkZChzaGlwKTtcbiAgICB0aGlzLnRvdGFsU2hpcHMgKz0gMTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICBjb25zdCB7IHggfSA9IGNvb3JkO1xuICAgIGNvbnN0IHsgeSB9ID0gY29vcmQ7XG4gICAgY29uc3QgeyBvd25lciB9ID0gY29vcmQ7XG4gICAgaWYgKG93bmVyICE9PSB0aGlzLmJvYXJkUG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgYSBjb29yZGluYXRlIGhpdCBvciBtaXNzIGEgc2hpcFxuICAgIGlmICh0aGlzLmdyaWRbeF1beV0uc3RhdHVzID09IFwiaGl0XCIgfHwgdGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9PSBcIm1pc3NcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyh0aGlzLmdyaWRbeF1beV0pLmxlbmd0aCAhPT0gMCkge1xuICAgICAgLy8gQ2hlY2sgaWYgYWxyZWFkeSBoaXQgb3IgbWlzcyB0aGVuIGRvIG5vdGhpbmdcbiAgICAgIC8vIHNoaXAuaGl0cyArPSAxO1xuICAgICAgdGhpcy5ncmlkW3hdW3ldLmhpdCgpO1xuICAgICAgdGhpcy5ncmlkW3hdW3ldLmlzU3VuaygpO1xuICAgICAgY29uc3QgZ3JpZE9iaiA9IHsgc3RhdHVzOiBcImhpdFwiIH07XG4gICAgICB0aGlzLmdyaWRbeF1beV0gPSBncmlkT2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWRbeF1beV0uc3RhdHVzID0gXCJtaXNzXCI7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSBncmlkXG4gICAgLy8gQ2hlY2sgcGxheWVyIHNoaXBzIHN0YXR1c1xuICAgIHRoaXMuY2hlY2tQbGF5ZXJTaGlwcygpO1xuICAgIHRoaXMudXBkYXRlR3JpZChvd25lcik7XG4gIH1cblxuICBjaGVja1BsYXllclNoaXBzKCkge1xuICAgIC8vIENoZWNrIGlmIHNoaXBzIHN1bmsgdGhlbiBwdXNoIHRvIGFycmF5XG4gICAgdGhpcy5zaGlwU2V0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnN1bmsgPT0gdHJ1ZSAmJiBzaGlwLmxlbmd0aCA9PSBzaGlwLmhpdHMpIHtcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgdGhpcy5zaGlwU2V0LmRlbGV0ZShzaGlwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENoZWNrIGlmIG51bWJlciBvZiBzdW5rIHNoaXBzIGlzIGVxdWFsIHRvIG51bWJlciBvZiBhbGwgc2hpcHMgb24gYm9hcmRcbiAgICBpZiAodGhpcy5zdW5rU2hpcHMgPT0gdGhpcy50b3RhbFNoaXBzKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm93bmVyLm5hbWV9IGxvc3QhYCk7XG4gICAgICBwcy5wdWJsaXNoKFwiZ2FtZS1vdmVyXCIsIHRoaXMuYm9hcmRQb3NpdGlvbik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlR3JpZChlbGVtKSB7XG4gICAgLy8gUHVibGlzaCB1cGRhdGVkIGdyaWQgdmFsdWVzXG4gICAgY29uc3Qgb2JqID0geyBvd25lcjogdGhpcy5vd25lciwgZ3JpZDogdGhpcy5ncmlkLCBlbGVtIH07XG4gICAgcHMucHVibGlzaChcInVwZGF0ZS1ib2FyZFwiLCBvYmopO1xuICB9XG5cbiAgLy8gQUkgbG9naWNcbiAgY3B1TW92ZSh4ID0gMTAsIHkgPSAxMCkge1xuICAgIGxldCBtb3ZlO1xuICAgIGxldCBkZWNpZGVkTW92ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmFuZG9tQ29vcmQgPSAoKSA9PiB7XG4gICAgICAvLyBHZW5lcmF0ZSByYW5kb20gY29vcmRpbmF0ZXNcbiAgICAgIGNvbnN0IG9iaiA9IHsgb3duZXI6IFwiYm90XCIgfTtcbiAgICAgIGNvbnN0IGNvb3JkWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHgpICsgMTtcbiAgICAgIGNvbnN0IGNvb3JkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHkpICsgMTtcbiAgICAgIG9iai54ID0gY29vcmRYO1xuICAgICAgb2JqLnkgPSBjb29yZFk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja01vdmVzID0gKG5ld01vdmUpID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIGNvb3JkaW5hdGVzIGhhdmUgYmVlbiBzZWxlY3RlZCBwcmV2aW91c2x5XG4gICAgICBmb3IgKGNvbnN0IG1vdmUgb2YgdGhpcy5zZWxlY3RlZE1vdmVzKSB7XG4gICAgICAgIGlmIChtb3ZlLnggPT09IG5ld01vdmUueCAmJiBtb3ZlLnkgPT09IG5ld01vdmUueSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHdoaWxlICghZGVjaWRlZE1vdmUpIHtcbiAgICAgIC8vIEV4aXQgbG9vcCBpZiBhbGwgbW92ZXMgZXhoYXVzdGVkXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE1vdmVzLmxlbmd0aCA+PSAxMDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQ29udGludWUgbG9vcGluZyB1bnRpbCBhIHVuaXF1ZSBjb29yZGluYXRlIGlzIGZvdW5kXG4gICAgICBtb3ZlID0gcmFuZG9tQ29vcmQoKTtcbiAgICAgIGlmICghY2hlY2tNb3Zlcyhtb3ZlKSkge1xuICAgICAgICBkZWNpZGVkTW92ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZE1vdmVzLnB1c2gobW92ZSk7XG5cbiAgICByZXR1cm4gbW92ZTtcbiAgfVxuXG4gIGNwdUF0dGFjaygpIHtcbiAgICBjb25zdCBtb3ZlID0gdGhpcy5jcHVNb3ZlKCk7XG4gICAgdGhpcy5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=