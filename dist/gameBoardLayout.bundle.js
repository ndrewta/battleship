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
/*!********************************!*\
  !*** ./src/gameBoardLayout.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");


function createBoard() {
  // Create game content board
  const boardDiv = document.getElementsByClassName("container")[0];
  let topBoard = generateBoard("top");
  let botBoard = generateBoard("bot");
  let disableAllBoards = true;
  let playerMoved = false;
  let cpuActive = false;

  boardDiv.appendChild(topBoard);
  boardDiv.appendChild(botBoard);

  function generateBoard(id) {
    // Create board
    const container = document.createElement("div");
    container.setAttribute("class", "content");
    container.setAttribute("id", id);
    const board = document.createElement("div");
    board.setAttribute("class", "board");

    // Create squares
    for (let y = 10; y > 0; y--) {
      for (let x = 1; x <= 10; x++) {
        const square = document.createElement("div");
        square.setAttribute("class", "squares");
        square.setAttribute("data-x", x);
        square.setAttribute("data-y", y);
        board.appendChild(square);
      }
    }

    // Create labels
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const leftLabel = document.createElement("div");
    leftLabel.setAttribute("id", "left-label");
    for (let i = 0; i < 10; i++) {
      const letter = document.createElement("p");
      letter.textContent = letters[i];
      leftLabel.appendChild(letter);
    }
    const topLabel = document.createElement("div");
    topLabel.setAttribute("id", "top-label");
    for (let i = 1; i <= 10; i++) {
      const number = document.createElement("p");
      number.textContent = i;
      topLabel.appendChild(number);
    }

    // Append objects to top board
    container.appendChild(board);
    container.appendChild(leftLabel);
    container.appendChild(topLabel);

    return container;
  }

  function updateBoard(obj) {
    // Update board elements

    const contentElem = document.getElementById(obj.elem);
    const boardElem = contentElem.getElementsByClassName("board")[0];
    function updateCoordinate(obj, x, y) {
      // Update coordinate with obj
      for (const node of boardElem.children) {
        const dataX = node.getAttribute("data-x");
        const dataY = node.getAttribute("data-y");

        if (dataX == x && dataY == y) {
          // Append obj data to the squares with classes

          if (obj.length) {
            // If AI active then hide top board ships
            if (cpuActive && contentElem.id == "top") {
              break;
            } else {
              node.classList.add("ship");
            }
          }
          if (obj.status == "hit") {
            node.classList.add("hit");
          }
          if (obj.status == "miss") {
            node.classList.add("miss");
          }
        }
      }
    }

    // Update board coordinates
    for (let x = 1; x <= 10; x++) {
      for (let y = 1; y <= 10; y++) {
        // For each x & y coordinate
        // if (obj.data[x][y].length > 1) {
        // If there is a hit/miss or ship object

        updateCoordinate(obj.grid[x][y], x, y);
        // }
      }
    }
  }

  function switchActiveBoard() {
    // Switch active boards
    if (disableAllBoards) {
      return;
    }
    if (topBoard || botBoard) {
      if (topBoard.style.pointerEvents == "auto") {
        topBoard.style.pointerEvents = "none";
        botBoard.style.pointerEvents = "auto";
      } else {
        topBoard.style.pointerEvents = "auto";
        botBoard.style.pointerEvents = "none";
      }
    }

    // If AI active then attack
    cpuAttack();
  }

  function disableBoards() {
    disableAllBoards = true;
    if (topBoard || botBoard) {
      topBoard.style.pointerEvents = "none";
      botBoard.style.pointerEvents = "none";
    }
  }

  function resetBoard() {
    // Clear both boards from container
    while (boardDiv.firstChild) {
      boardDiv.removeChild(boardDiv.lastChild);
    }

    topBoard = generateBoard("top");
    botBoard = generateBoard("bot");

    boardDiv.appendChild(topBoard);
    boardDiv.appendChild(botBoard);
  }

  // AI Move
  function cpuAttack() {
    // Check if player has moved and AI mode active
    if (cpuActive && playerMoved) {
      playerMoved = false;
      _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("cpu-attack");
    }
  }

  // Mouse events
  boardDiv.addEventListener("click", (e) => {
    const parentBoard = e.target.parentElement.parentElement;
    if (parentBoard.id == "top") {
      const dataX = Number(e.target.getAttribute("data-x"));
      const dataY = Number(e.target.getAttribute("data-y"));
      const coordinates = { owner: "top", x: dataX, y: dataY };

      // Player has moved (AI check)
      playerMoved = true;
      _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("attack-grid", coordinates);
    }
    // Disable checking bot board if AI active
    if (parentBoard.id == "bot" && cpuActive == false) {
      const dataX = Number(e.target.getAttribute("data-x"));
      const dataY = Number(e.target.getAttribute("data-y"));
      const coordinates = { owner: "bot", x: dataX, y: dataY };

      _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("attack-grid", coordinates);
    }
  });

  function startGame() {
    disableAllBoards = false;
    playerMoved = false;
    // clear board status and rebuild ships
    resetBoard();
    switchActiveBoard();
  }

  disableBoards();
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("update-board", updateBoard);
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("update-board", switchActiveBoard);
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("game-over", disableBoards);
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("new-game", startGame);
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("cpu-on", () => {
    cpuActive = true;
  });
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("cpu-off", () => {
    cpuActive = false;
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUJvYXJkTGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0Isc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtDQUFFO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSxNQUFNLCtDQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsTUFBTSwrQ0FBRTtBQUNSO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsK0NBQUU7QUFDSixFQUFFLCtDQUFFO0FBQ0osRUFBRSwrQ0FBRTtBQUNKLEVBQUUsK0NBQUU7QUFDSixFQUFFLCtDQUFFO0FBQ0o7QUFDQSxHQUFHO0FBQ0gsRUFBRSwrQ0FBRTtBQUNKO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkTGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHB1YlN1YigpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgcHVibGlzaCwgc3Vic2NyaWJlIH07XG59XG5cbmNvbnN0IHNoYXJlZFB1YlN1YiA9IHB1YlN1YigpO1xuZXhwb3J0IGRlZmF1bHQgc2hhcmVkUHViU3ViO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHMgZnJvbSBcIi4vcHViU3ViXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAvLyBDcmVhdGUgZ2FtZSBjb250ZW50IGJvYXJkXG4gIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVswXTtcbiAgbGV0IHRvcEJvYXJkID0gZ2VuZXJhdGVCb2FyZChcInRvcFwiKTtcbiAgbGV0IGJvdEJvYXJkID0gZ2VuZXJhdGVCb2FyZChcImJvdFwiKTtcbiAgbGV0IGRpc2FibGVBbGxCb2FyZHMgPSB0cnVlO1xuICBsZXQgcGxheWVyTW92ZWQgPSBmYWxzZTtcbiAgbGV0IGNwdUFjdGl2ZSA9IGZhbHNlO1xuXG4gIGJvYXJkRGl2LmFwcGVuZENoaWxkKHRvcEJvYXJkKTtcbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoYm90Qm9hcmQpO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoaWQpIHtcbiAgICAvLyBDcmVhdGUgYm9hcmRcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnRcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib2FyZFwiKTtcblxuICAgIC8vIENyZWF0ZSBzcXVhcmVzXG4gICAgZm9yIChsZXQgeSA9IDEwOyB5ID4gMDsgeS0tKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNxdWFyZXNcIik7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgeCk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgeSk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxhYmVsc1xuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgIGNvbnN0IGxlZnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdC1sYWJlbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbGV0dGVyLnRleHRDb250ZW50ID0gbGV0dGVyc1tpXTtcbiAgICAgIGxlZnRMYWJlbC5hcHBlbmRDaGlsZChsZXR0ZXIpO1xuICAgIH1cbiAgICBjb25zdCB0b3BMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b3AtbGFiZWxcIik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBpO1xuICAgICAgdG9wTGFiZWwuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgb2JqZWN0cyB0byB0b3AgYm9hcmRcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0TGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BMYWJlbCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQm9hcmQob2JqKSB7XG4gICAgLy8gVXBkYXRlIGJvYXJkIGVsZW1lbnRzXG5cbiAgICBjb25zdCBjb250ZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5lbGVtKTtcbiAgICBjb25zdCBib2FyZEVsZW0gPSBjb250ZW50RWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYm9hcmRcIilbMF07XG4gICAgZnVuY3Rpb24gdXBkYXRlQ29vcmRpbmF0ZShvYmosIHgsIHkpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlIHdpdGggb2JqXG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYm9hcmRFbGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGRhdGFYID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIik7XG4gICAgICAgIGNvbnN0IGRhdGFZID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG5cbiAgICAgICAgaWYgKGRhdGFYID09IHggJiYgZGF0YVkgPT0geSkge1xuICAgICAgICAgIC8vIEFwcGVuZCBvYmogZGF0YSB0byB0aGUgc3F1YXJlcyB3aXRoIGNsYXNzZXNcblxuICAgICAgICAgIGlmIChvYmoubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBJZiBBSSBhY3RpdmUgdGhlbiBoaWRlIHRvcCBib2FyZCBzaGlwc1xuICAgICAgICAgICAgaWYgKGNwdUFjdGl2ZSAmJiBjb250ZW50RWxlbS5pZCA9PSBcInRvcFwiKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9iai5zdGF0dXMgPT0gXCJoaXRcIikge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob2JqLnN0YXR1cyA9PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgYm9hcmQgY29vcmRpbmF0ZXNcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMTsgeSA8PSAxMDsgeSsrKSB7XG4gICAgICAgIC8vIEZvciBlYWNoIHggJiB5IGNvb3JkaW5hdGVcbiAgICAgICAgLy8gaWYgKG9iai5kYXRhW3hdW3ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBoaXQvbWlzcyBvciBzaGlwIG9iamVjdFxuXG4gICAgICAgIHVwZGF0ZUNvb3JkaW5hdGUob2JqLmdyaWRbeF1beV0sIHgsIHkpO1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoQWN0aXZlQm9hcmQoKSB7XG4gICAgLy8gU3dpdGNoIGFjdGl2ZSBib2FyZHNcbiAgICBpZiAoZGlzYWJsZUFsbEJvYXJkcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodG9wQm9hcmQgfHwgYm90Qm9hcmQpIHtcbiAgICAgIGlmICh0b3BCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID09IFwiYXV0b1wiKSB7XG4gICAgICAgIHRvcEJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgYm90Qm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgQUkgYWN0aXZlIHRoZW4gYXR0YWNrXG4gICAgY3B1QXR0YWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlQm9hcmRzKCkge1xuICAgIGRpc2FibGVBbGxCb2FyZHMgPSB0cnVlO1xuICAgIGlmICh0b3BCb2FyZCB8fCBib3RCb2FyZCkge1xuICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgYm90Qm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gICAgLy8gQ2xlYXIgYm90aCBib2FyZHMgZnJvbSBjb250YWluZXJcbiAgICB3aGlsZSAoYm9hcmREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgYm9hcmREaXYucmVtb3ZlQ2hpbGQoYm9hcmREaXYubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICB0b3BCb2FyZCA9IGdlbmVyYXRlQm9hcmQoXCJ0b3BcIik7XG4gICAgYm90Qm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwiYm90XCIpO1xuXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQodG9wQm9hcmQpO1xuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGJvdEJvYXJkKTtcbiAgfVxuXG4gIC8vIEFJIE1vdmVcbiAgZnVuY3Rpb24gY3B1QXR0YWNrKCkge1xuICAgIC8vIENoZWNrIGlmIHBsYXllciBoYXMgbW92ZWQgYW5kIEFJIG1vZGUgYWN0aXZlXG4gICAgaWYgKGNwdUFjdGl2ZSAmJiBwbGF5ZXJNb3ZlZCkge1xuICAgICAgcGxheWVyTW92ZWQgPSBmYWxzZTtcbiAgICAgIHBzLnB1Ymxpc2goXCJjcHUtYXR0YWNrXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1vdXNlIGV2ZW50c1xuICBib2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBwYXJlbnRCb2FyZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50Qm9hcmQuaWQgPT0gXCJ0b3BcIikge1xuICAgICAgY29uc3QgZGF0YVggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgICAgIGNvbnN0IGRhdGFZID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSk7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHsgb3duZXI6IFwidG9wXCIsIHg6IGRhdGFYLCB5OiBkYXRhWSB9O1xuXG4gICAgICAvLyBQbGF5ZXIgaGFzIG1vdmVkIChBSSBjaGVjaylcbiAgICAgIHBsYXllck1vdmVkID0gdHJ1ZTtcbiAgICAgIHBzLnB1Ymxpc2goXCJhdHRhY2stZ3JpZFwiLCBjb29yZGluYXRlcyk7XG4gICAgfVxuICAgIC8vIERpc2FibGUgY2hlY2tpbmcgYm90IGJvYXJkIGlmIEFJIGFjdGl2ZVxuICAgIGlmIChwYXJlbnRCb2FyZC5pZCA9PSBcImJvdFwiICYmIGNwdUFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgY29uc3QgZGF0YVggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgICAgIGNvbnN0IGRhdGFZID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSk7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHsgb3duZXI6IFwiYm90XCIsIHg6IGRhdGFYLCB5OiBkYXRhWSB9O1xuXG4gICAgICBwcy5wdWJsaXNoKFwiYXR0YWNrLWdyaWRcIiwgY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGRpc2FibGVBbGxCb2FyZHMgPSBmYWxzZTtcbiAgICBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuICAgIC8vIGNsZWFyIGJvYXJkIHN0YXR1cyBhbmQgcmVidWlsZCBzaGlwc1xuICAgIHJlc2V0Qm9hcmQoKTtcbiAgICBzd2l0Y2hBY3RpdmVCb2FyZCgpO1xuICB9XG5cbiAgZGlzYWJsZUJvYXJkcygpO1xuICBwcy5zdWJzY3JpYmUoXCJ1cGRhdGUtYm9hcmRcIiwgdXBkYXRlQm9hcmQpO1xuICBwcy5zdWJzY3JpYmUoXCJ1cGRhdGUtYm9hcmRcIiwgc3dpdGNoQWN0aXZlQm9hcmQpO1xuICBwcy5zdWJzY3JpYmUoXCJnYW1lLW92ZXJcIiwgZGlzYWJsZUJvYXJkcyk7XG4gIHBzLnN1YnNjcmliZShcIm5ldy1nYW1lXCIsIHN0YXJ0R2FtZSk7XG4gIHBzLnN1YnNjcmliZShcImNwdS1vblwiLCAoKSA9PiB7XG4gICAgY3B1QWN0aXZlID0gdHJ1ZTtcbiAgfSk7XG4gIHBzLnN1YnNjcmliZShcImNwdS1vZmZcIiwgKCkgPT4ge1xuICAgIGNwdUFjdGl2ZSA9IGZhbHNlO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==