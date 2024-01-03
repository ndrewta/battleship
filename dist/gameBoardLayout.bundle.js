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

    // Switch active board state
    switchActiveBoard();
  }

  function switchHiddenBoard() {
    // If pvp mode then hide ships on board
    const topBoardShips = Array.from(topBoard.getElementsByClassName("ship"));
    const botBoardShips = Array.from(botBoard.getElementsByClassName("ship"));

    // Temp hide ships
    topBoardShips.forEach((ship) => {
      if (!ship.classList.contains("hit")) {
        ship.style.backgroundColor = "white";
      } else if (ship.classList.contains("hit")) {
        ship.style.backgroundColor = "rgb(175, 129, 129)";
      }
    });
    botBoardShips.forEach((ship) => {
      if (!ship.classList.contains("hit")) {
        ship.style.backgroundColor = "white";
      } else if (ship.classList.contains("hit")) {
        ship.style.backgroundColor = "rgb(175, 129, 129)";
      }
    });

    // Wait 2 seconds then display ship status
    setTimeout(() => {
      if (topBoard.style.pointerEvents == "none") {
        // Top board's turn
        topBoardShips.forEach((ship) => {
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = "rgb(97, 169, 202)";
          }
        });
        botBoardShips.forEach((ship) => {
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = "white";
          }
        });
      } else {
        // Bottom board's turn
        topBoardShips.forEach((ship) => {
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = "white";
          }
        });
        botBoardShips.forEach((ship) => {
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = "rgb(97, 169, 202)";
          }
        });
      }
    }, 2000);
  }

  function switchActiveBoard() {
    // Switch active boards
    if (disableAllBoards) {
      return;
    }

    // Switch player control
    if (topBoard || botBoard) {
      if (topBoard.style.pointerEvents == "auto") {
        topBoard.style.pointerEvents = "none";
        botBoard.style.pointerEvents = "auto";
        if (cpuActive) {
          _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("info-update", `CPU's turn`);
        } else {
          _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("info-update", `Top Player's turn`);
        }
      } else {
        topBoard.style.pointerEvents = "auto";
        botBoard.style.pointerEvents = "none";
        if (cpuActive) {
          _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("info-update", `Your turn`);
        } else {
          _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("info-update", `Bottom Player's turn`);
        }
      }
    }

    // If pvp mode enabled
    if (!cpuActive) {
      switchHiddenBoard();
    }

    // If AI active then attack
    setTimeout(cpuAttack, 1000);
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
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("game-over", disableBoards);
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("new-game", startGame);
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("clear-board", resetBoard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUJvYXJkTGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQUU7QUFDWixVQUFVO0FBQ1YsVUFBVSwrQ0FBRTtBQUNaO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQUU7QUFDWixVQUFVO0FBQ1YsVUFBVSwrQ0FBRTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sK0NBQUU7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLE1BQU0sK0NBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QixNQUFNLCtDQUFFO0FBQ1I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrQ0FBRTtBQUNKLEVBQUUsK0NBQUU7QUFDSixFQUFFLCtDQUFFO0FBQ0osRUFBRSwrQ0FBRTtBQUNKLEVBQUUsK0NBQUU7QUFDSjtBQUNBLEdBQUc7QUFDSCxFQUFFLCtDQUFFO0FBQ0o7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmRMYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHViU3ViKCkge1xuICBjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBwdWJsaXNoLCBzdWJzY3JpYmUgfTtcbn1cblxuY29uc3Qgc2hhcmVkUHViU3ViID0gcHViU3ViKCk7XG5leHBvcnQgZGVmYXVsdCBzaGFyZWRQdWJTdWI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gIC8vIENyZWF0ZSBnYW1lIGNvbnRlbnQgYm9hcmRcbiAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFpbmVyXCIpWzBdO1xuICBsZXQgdG9wQm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwidG9wXCIpO1xuICBsZXQgYm90Qm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwiYm90XCIpO1xuICBsZXQgZGlzYWJsZUFsbEJvYXJkcyA9IHRydWU7XG4gIGxldCBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuICBsZXQgY3B1QWN0aXZlID0gZmFsc2U7XG5cbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQodG9wQm9hcmQpO1xuICBib2FyZERpdi5hcHBlbmRDaGlsZChib3RCb2FyZCk7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZChpZCkge1xuICAgIC8vIENyZWF0ZSBib2FyZFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvYXJkXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHNxdWFyZXNcbiAgICBmb3IgKGxldCB5ID0gMTA7IHkgPiAwOyB5LS0pIHtcbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3F1YXJlc1wiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCB4KTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCB5KTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGFiZWxzXG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgY29uc3QgbGVmdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0TGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsZWZ0LWxhYmVsXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSBsZXR0ZXJzW2ldO1xuICAgICAgbGVmdExhYmVsLmFwcGVuZENoaWxkKGxldHRlcik7XG4gICAgfVxuICAgIGNvbnN0IHRvcExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b3BMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1sYWJlbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IGk7XG4gICAgICB0b3BMYWJlbC5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCBvYmplY3RzIHRvIHRvcCBib2FyZFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRMYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvcExhYmVsKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCb2FyZChvYmopIHtcbiAgICAvLyBVcGRhdGUgYm9hcmQgZWxlbWVudHNcblxuICAgIGNvbnN0IGNvbnRlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmVsZW0pO1xuICAgIGNvbnN0IGJvYXJkRWxlbSA9IGNvbnRlbnRFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJib2FyZFwiKVswXTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvb3JkaW5hdGUob2JqLCB4LCB5KSB7XG4gICAgICAvLyBVcGRhdGUgY29vcmRpbmF0ZSB3aXRoIG9ialxuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGJvYXJkRWxlbS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBkYXRhWCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgICAgICBjb25zdCBkYXRhWSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuXG4gICAgICAgIGlmIChkYXRhWCA9PSB4ICYmIGRhdGFZID09IHkpIHtcbiAgICAgICAgICAvLyBBcHBlbmQgb2JqIGRhdGEgdG8gdGhlIHNxdWFyZXMgd2l0aCBjbGFzc2VzXG5cbiAgICAgICAgICBpZiAob2JqLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gSWYgQUkgYWN0aXZlIHRoZW4gaGlkZSB0b3AgYm9hcmQgc2hpcHNcbiAgICAgICAgICAgIGlmIChjcHVBY3RpdmUgJiYgY29udGVudEVsZW0uaWQgPT0gXCJ0b3BcIikge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvYmouc3RhdHVzID09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9iai5zdGF0dXMgPT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGJvYXJkIGNvb3JkaW5hdGVzXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgICAgICAvLyBGb3IgZWFjaCB4ICYgeSBjb29yZGluYXRlXG4gICAgICAgIC8vIGlmIChvYmouZGF0YVt4XVt5XS5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgaGl0L21pc3Mgb3Igc2hpcCBvYmplY3RcblxuICAgICAgICB1cGRhdGVDb29yZGluYXRlKG9iai5ncmlkW3hdW3ldLCB4LCB5KTtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCBhY3RpdmUgYm9hcmQgc3RhdGVcbiAgICBzd2l0Y2hBY3RpdmVCb2FyZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoSGlkZGVuQm9hcmQoKSB7XG4gICAgLy8gSWYgcHZwIG1vZGUgdGhlbiBoaWRlIHNoaXBzIG9uIGJvYXJkXG4gICAgY29uc3QgdG9wQm9hcmRTaGlwcyA9IEFycmF5LmZyb20odG9wQm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNoaXBcIikpO1xuICAgIGNvbnN0IGJvdEJvYXJkU2hpcHMgPSBBcnJheS5mcm9tKGJvdEJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaGlwXCIpKTtcblxuICAgIC8vIFRlbXAgaGlkZSBzaGlwc1xuICAgIHRvcEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNzUsIDEyOSwgMTI5KVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNzUsIDEyOSwgMTI5KVwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV2FpdCAyIHNlY29uZHMgdGhlbiBkaXNwbGF5IHNoaXAgc3RhdHVzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9PSBcIm5vbmVcIikge1xuICAgICAgICAvLyBUb3AgYm9hcmQncyB0dXJuXG4gICAgICAgIHRvcEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoOTcsIDE2OSwgMjAyKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCb3R0b20gYm9hcmQncyB0dXJuXG4gICAgICAgIHRvcEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoOTcsIDE2OSwgMjAyKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hBY3RpdmVCb2FyZCgpIHtcbiAgICAvLyBTd2l0Y2ggYWN0aXZlIGJvYXJkc1xuICAgIGlmIChkaXNhYmxlQWxsQm9hcmRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHBsYXllciBjb250cm9sXG4gICAgaWYgKHRvcEJvYXJkIHx8IGJvdEJvYXJkKSB7XG4gICAgICBpZiAodG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9PSBcImF1dG9cIikge1xuICAgICAgICB0b3BCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIGJvdEJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICAgICAgaWYgKGNwdUFjdGl2ZSkge1xuICAgICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgQ1BVJ3MgdHVybmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgVG9wIFBsYXllcidzIHR1cm5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIGlmIChjcHVBY3RpdmUpIHtcbiAgICAgICAgICBwcy5wdWJsaXNoKFwiaW5mby11cGRhdGVcIiwgYFlvdXIgdHVybmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgQm90dG9tIFBsYXllcidzIHR1cm5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHB2cCBtb2RlIGVuYWJsZWRcbiAgICBpZiAoIWNwdUFjdGl2ZSkge1xuICAgICAgc3dpdGNoSGlkZGVuQm9hcmQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBBSSBhY3RpdmUgdGhlbiBhdHRhY2tcbiAgICBzZXRUaW1lb3V0KGNwdUF0dGFjaywgMTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlQm9hcmRzKCkge1xuICAgIGRpc2FibGVBbGxCb2FyZHMgPSB0cnVlO1xuICAgIGlmICh0b3BCb2FyZCB8fCBib3RCb2FyZCkge1xuICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgYm90Qm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gICAgLy8gQ2xlYXIgYm90aCBib2FyZHMgZnJvbSBjb250YWluZXJcbiAgICB3aGlsZSAoYm9hcmREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgYm9hcmREaXYucmVtb3ZlQ2hpbGQoYm9hcmREaXYubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICB0b3BCb2FyZCA9IGdlbmVyYXRlQm9hcmQoXCJ0b3BcIik7XG4gICAgYm90Qm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwiYm90XCIpO1xuXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQodG9wQm9hcmQpO1xuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGJvdEJvYXJkKTtcbiAgfVxuXG4gIC8vIEFJIE1vdmVcbiAgZnVuY3Rpb24gY3B1QXR0YWNrKCkge1xuICAgIC8vIENoZWNrIGlmIHBsYXllciBoYXMgbW92ZWQgYW5kIEFJIG1vZGUgYWN0aXZlXG4gICAgaWYgKGNwdUFjdGl2ZSAmJiBwbGF5ZXJNb3ZlZCkge1xuICAgICAgcGxheWVyTW92ZWQgPSBmYWxzZTtcblxuICAgICAgcHMucHVibGlzaChcImNwdS1hdHRhY2tcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gTW91c2UgZXZlbnRzXG4gIGJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudEJvYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnRCb2FyZC5pZCA9PSBcInRvcFwiKSB7XG4gICAgICBjb25zdCBkYXRhWCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgICAgY29uc3QgZGF0YVkgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0geyBvd25lcjogXCJ0b3BcIiwgeDogZGF0YVgsIHk6IGRhdGFZIH07XG5cbiAgICAgIC8vIFBsYXllciBoYXMgbW92ZWQgKEFJIGNoZWNrKVxuICAgICAgcGxheWVyTW92ZWQgPSB0cnVlO1xuICAgICAgcHMucHVibGlzaChcImF0dGFjay1ncmlkXCIsIGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gICAgLy8gRGlzYWJsZSBjaGVja2luZyBib3QgYm9hcmQgaWYgQUkgYWN0aXZlXG4gICAgaWYgKHBhcmVudEJvYXJkLmlkID09IFwiYm90XCIgJiYgY3B1QWN0aXZlID09IGZhbHNlKSB7XG4gICAgICBjb25zdCBkYXRhWCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgICAgY29uc3QgZGF0YVkgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0geyBvd25lcjogXCJib3RcIiwgeDogZGF0YVgsIHk6IGRhdGFZIH07XG5cbiAgICAgIHBzLnB1Ymxpc2goXCJhdHRhY2stZ3JpZFwiLCBjb29yZGluYXRlcyk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZGlzYWJsZUFsbEJvYXJkcyA9IGZhbHNlO1xuICAgIHBsYXllck1vdmVkID0gZmFsc2U7XG4gICAgLy8gY2xlYXIgYm9hcmQgc3RhdHVzIGFuZCByZWJ1aWxkIHNoaXBzXG4gICAgcmVzZXRCb2FyZCgpO1xuICAgIHN3aXRjaEFjdGl2ZUJvYXJkKCk7XG4gIH1cblxuICBkaXNhYmxlQm9hcmRzKCk7XG4gIHBzLnN1YnNjcmliZShcInVwZGF0ZS1ib2FyZFwiLCB1cGRhdGVCb2FyZCk7XG4gIHBzLnN1YnNjcmliZShcImdhbWUtb3ZlclwiLCBkaXNhYmxlQm9hcmRzKTtcbiAgcHMuc3Vic2NyaWJlKFwibmV3LWdhbWVcIiwgc3RhcnRHYW1lKTtcbiAgcHMuc3Vic2NyaWJlKFwiY2xlYXItYm9hcmRcIiwgcmVzZXRCb2FyZCk7XG4gIHBzLnN1YnNjcmliZShcImNwdS1vblwiLCAoKSA9PiB7XG4gICAgY3B1QWN0aXZlID0gdHJ1ZTtcbiAgfSk7XG4gIHBzLnN1YnNjcmliZShcImNwdS1vZmZcIiwgKCkgPT4ge1xuICAgIGNwdUFjdGl2ZSA9IGZhbHNlO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==