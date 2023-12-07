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
  constructor(owner) {
    this.owner = owner;
    this.grid = {};
    this.initGrid(this.length, this.width);
    this.sunkShips = 0;
    this.shipSet = new Set();
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
    // Place ship downwards
    for (let i = 0; i < ship.length; i++) {
      this.grid[x][y - i] = ship;
    }
    this.shipSet.add(ship);
    this.totalShips += 1;
  }

  placeShipRight(ship, x, y) {
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
      console.log(`${this.owner} lost all their ships!`);

      return true;
    }
    return false;
  }

  updateGrid(elem) {
    // Publish updated grid values
    const obj = { owner: this.owner, grid: this.grid, elem };
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("update-board", obj);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLElBQUk7QUFDaEIsWUFBWSxJQUFJO0FBQ2hCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixJQUFJLCtDQUFFO0FBQ047QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcHViU3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVCb2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwdWJTdWIoKSB7XG4gIGNvbnN0IHN1YnNjcmliZXJzID0ge307XG5cbiAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMTtcblxuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7IHB1Ymxpc2gsIHN1YnNjcmliZSB9O1xufVxuXG5jb25zdCBzaGFyZWRQdWJTdWIgPSBwdWJTdWIoKTtcbmV4cG9ydCBkZWZhdWx0IHNoYXJlZFB1YlN1YjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBzIGZyb20gXCIuL3B1YlN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmdyaWQgPSB7fTtcbiAgICB0aGlzLmluaXRHcmlkKHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoKTtcbiAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy5zaGlwU2V0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMudG90YWxTaGlwcyA9IDA7XG4gIH1cblxuICBpbml0R3JpZCgpIHtcbiAgICAvLyBDcmVhdGUgYSAxMHgxMCBncmlkXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgdGhpcy5ncmlkW3hdID0ge307XG4gICAgICBmb3IgKGxldCB5ID0gMTsgeSA8PSAxMDsgeSsrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcERvd24oc2hpcCwgeCwgeSkge1xuICAgIC8vIFBsYWNlIHNoaXAgZG93bndhcmRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF1beSAtIGldID0gc2hpcDtcbiAgICB9XG4gICAgdGhpcy5zaGlwU2V0LmFkZChzaGlwKTtcbiAgICB0aGlzLnRvdGFsU2hpcHMgKz0gMTtcbiAgfVxuXG4gIHBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIHkpIHtcbiAgICAvLyBQbGFjZSBzaGlwIHJpZ2h0d2FyZHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ3JpZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgIH1cbiAgICB0aGlzLnNoaXBTZXQuYWRkKHNoaXApO1xuICAgIHRoaXMudG90YWxTaGlwcyArPSAxO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgIGNvbnN0IHsgeCB9ID0gY29vcmQ7XG4gICAgY29uc3QgeyB5IH0gPSBjb29yZDtcbiAgICBjb25zdCB7IG93bmVyIH0gPSBjb29yZDtcbiAgICAvLyBDaGVjayBpZiBhIGNvb3JkaW5hdGUgaGl0IG9yIG1pc3MgYSBzaGlwXG4gICAgaWYgKHRoaXMuZ3JpZFt4XVt5XS5zdGF0dXMgPT0gXCJoaXRcIiB8fCB0aGlzLmdyaWRbeF1beV0uc3RhdHVzID09IFwibWlzc1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChPYmplY3QudmFsdWVzKHRoaXMuZ3JpZFt4XVt5XSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGhpdCBvciBtaXNzIHRoZW4gZG8gbm90aGluZ1xuXG4gICAgICAvLyBzaGlwLmhpdHMgKz0gMTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5oaXQoKTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgIGNvbnN0IGdyaWRPYmogPSB7IHN0YXR1czogXCJoaXRcIiB9O1xuICAgICAgdGhpcy5ncmlkW3hdW3ldID0gZ3JpZE9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9IFwibWlzc1wiO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgZ3JpZFxuICAgIHRoaXMuY2hlY2tQbGF5ZXJTaGlwcygpO1xuICAgIHRoaXMudXBkYXRlR3JpZChvd25lcik7XG4gIH1cblxuICBjaGVja1BsYXllclNoaXBzKCkge1xuICAgIC8vIENoZWNrIGlmIHNoaXBzIHN1bmsgdGhlbiBwdXNoIHRvIGFycmF5XG5cbiAgICB0aGlzLnNoaXBTZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuc3VuayA9PSB0cnVlICYmIHNoaXAubGVuZ3RoID09IHNoaXAuaGl0cykge1xuICAgICAgICB0aGlzLnN1bmtTaGlwcyArPSAxO1xuICAgICAgICB0aGlzLnNoaXBTZXQuZGVsZXRlKHNoaXApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2hlY2sgaWYgbnVtYmVyIG9mIHN1bmsgc2hpcHMgaXMgZXF1YWwgdG8gbnVtYmVyIG9mIGFsbCBzaGlwcyBvbiBib2FyZFxuICAgIGlmICh0aGlzLnN1bmtTaGlwcyA9PSB0aGlzLnRvdGFsU2hpcHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMub3duZXJ9IGxvc3QgYWxsIHRoZWlyIHNoaXBzIWApO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlR3JpZChlbGVtKSB7XG4gICAgLy8gUHVibGlzaCB1cGRhdGVkIGdyaWQgdmFsdWVzXG4gICAgY29uc3Qgb2JqID0geyBvd25lcjogdGhpcy5vd25lciwgZ3JpZDogdGhpcy5ncmlkLCBlbGVtIH07XG4gICAgcHMucHVibGlzaChcInVwZGF0ZS1ib2FyZFwiLCBvYmopO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=