/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
class GameBoard {
  constructor(owner) {
    this.owner = owner;
    this.grid = {};
    this.initGrid(this.length, this.width);
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
    for (let x = 1; x <= 10; x++) {
      for (let y = 1; y <= 10; y++) {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lQm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmdyaWQgPSB7fTtcbiAgICB0aGlzLmluaXRHcmlkKHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoKTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIC8vIENyZWF0ZSBhIDEweDEwIGdyaWRcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF0gPSB7fTtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0ge307XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICAvLyBQbGFjZSBzaGlwIGF0IGNvb3JkaW5hdGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBQbGFjZSBzaGlwIHVwd2FyZHNcbiAgICAgIGlmICh5ID4geCkge1xuICAgICAgICB0aGlzLmdyaWRbeF1beSArIGldID0gc2hpcDtcbiAgICAgIH1cblxuICAgICAgLy8gUGxhY2Ugc2hpcCBkb3dud2FyZHNcbiAgICAgIGlmICh5IDwgeCkge1xuICAgICAgICB0aGlzLmdyaWRbeF1beSAtIGldID0gc2hpcDtcbiAgICAgIH1cblxuICAgICAgLy8gUGxhY2Ugc2hpcCBsZWZ0d2FyZHNcbiAgICAgIGlmICh4IDwgeSkge1xuICAgICAgICB0aGlzLmdyaWRbeCAtIGldW3ldID0gc2hpcDtcbiAgICAgIH1cblxuICAgICAgLy8gUGxhY2Ugc2hpcCByaWdodHdhcmRzXG4gICAgICBpZiAoeCA+IHkpIHtcbiAgICAgICAgdGhpcy5ncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgLy8gQ2hlY2sgaWYgYSBjb29yZGluYXRlIGhpdCBvciBtaXNzIGEgc2hpcFxuICAgIGlmIChPYmplY3QudmFsdWVzKHRoaXMuZ3JpZFt4XVt5XSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBzaGlwLmhpdHMgKz0gMTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5oaXQoKTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5zdGF0dXMgPSBcImhpdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWRbeF1beV0uc3RhdHVzID0gXCJtaXNzXCI7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tQbGF5ZXJTaGlwcygpIHtcbiAgICAvLyBJbml0IGFycmF5c1xuICAgIGxldCBzdW5rU2hpcHMgPSAwO1xuICAgIGNvbnN0IHNoaXBTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBTdG9yZSBhbGwgc2hpcHMgaW50byBzZXRcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMTsgeSA8PSAxMDsgeSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWRbeF1beV0uaGFzT3duUHJvcGVydHkoXCJsZW5ndGhcIikpIHtcbiAgICAgICAgICBzaGlwU2V0LmFkZCh0aGlzLmdyaWRbeF1beV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgc2hpcHMgc3VuayB0aGVuIHB1c2ggdG8gYXJyYXlcbiAgICBzaGlwU2V0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENoZWNrIGlmIG51bWJlciBvZiBzdW5rIHNoaXBzIGlzIGVxdWFsIHRvIG51bWJlciBvZiBhbGwgc2hpcHMgb24gYm9hcmRcbiAgICBpZiAoc3Vua1NoaXBzID09IHNoaXBTZXQuc2l6ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9