/** *** */ (() => {
  // webpackBootstrap
  /** *** */

  /** *** */ let __webpack_modules__ = {
    /***/ "./src/pubSub.js":
      /*! ***********************!*\
  !*** ./src/pubSub.js ***!
  \********************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
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
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          sharedPubSub;

        /***/
      },

    /** *** */
  };
  /** ********************************************************************* */
  /** *** */ // The module cache
  /** *** */ let __webpack_module_cache__ = {};
  /** *** */
  /** *** */ // The require function
  /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ let cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ if (cachedModule !== undefined) {
      /** *** */ return cachedModule.exports;
      /** *** */
    }
    /** *** */ // Create a new module (and put it into the cache)
    /** *** */ let module = (__webpack_module_cache__[moduleId] = {
      /** *** */ // no module.id needed
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */
    });
    /** *** */
    /** *** */ // Execute the module function
    /** *** */ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /** *** */
    /** *** */ // Return the exports of the module
    /** *** */ return module.exports;
    /** *** */
  }
  /** *** */
  /** ********************************************************************* */
  /** *** */ /* webpack/runtime/define property getters */
  /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (let key in definition) {
        /** *** */ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /** *** */ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /** *** */
        }
        /** *** */
      }
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/make namespace object */
  /** *** */ (() => {
    /** *** */ // define __esModule on exports
    /** *** */ __webpack_require__.r = (exports) => {
      /** *** */ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, "__esModule", { value: true });
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** ********************************************************************* */
  let __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*! ********************************!*\
  !*** ./src/gameBoardLayout.js ***!
  \******************************* */
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => /* binding */ createBoard,
      /* harmony export */
    });
    /* harmony import */ let _pubSub__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");

    function createBoard() {
      // Create game content board
      const boardDiv = document.getElementsByClassName("container")[0];
      let topBoard = generateBoard("top");
      let botBoard = generateBoard("bot");
      let disableAllBoards = true;
      let playerMoved = false;
      let cpuActive = false;
      let topBoardsTurn = false;
      let botBoardsTurn = false;

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
                  node.setAttribute("colour", obj.colour);
                  node.style.backgroundColor = obj.colour;
                }
              }
              if (obj.status == "hit") {
                node.classList.add("hit");
                node.style.backgroundColor = "rgb(175, 129, 129)";
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
        // If pvp mode then hide ships on board, disable all input
        const topBoardShips = Array.from(
          topBoard.getElementsByClassName("ship"),
        );
        const botBoardShips = Array.from(
          botBoard.getElementsByClassName("ship"),
        );
        topBoard.style.pointerEvents = "none";
        botBoard.style.pointerEvents = "none";

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
          if (botBoardsTurn) {
            // Top board's turn
            topBoardShips.forEach((ship) => {
              const shipColour = ship.getAttribute("colour");
              if (!ship.classList.contains("hit")) {
                ship.style.backgroundColor = shipColour;
              }
            });
            botBoardShips.forEach((ship) => {
              if (!ship.classList.contains("hit")) {
                ship.style.backgroundColor = "white";
              }
            });
          } else if (topBoardsTurn) {
            // Bottom board's turn
            topBoardShips.forEach((ship) => {
              if (!ship.classList.contains("hit")) {
                ship.style.backgroundColor = "white";
              }
            });
            botBoardShips.forEach((ship) => {
              const shipColour = ship.getAttribute("colour");
              if (!ship.classList.contains("hit")) {
                ship.style.backgroundColor = shipColour;
              }
            });
          }

          if (disableAllBoards) {
            return;
          }

          switchPlayerControl();
        }, 2000);
      }

      function switchPlayerControl() {
        // Switch player control
        if (botBoardsTurn) {
          // Top boards turn
          topBoard.style.pointerEvents = "none";
          botBoard.style.pointerEvents = "auto";
          if (cpuActive) {
            _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish(
              "info-update",
              `CPU's turn`,
            );
          } else {
            _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish(
              "info-update",
              `Top Player's turn`,
            );
          }

          // Set turn variables for next turn
          topBoardsTurn = true;
          botBoardsTurn = false;
        } else if (topBoardsTurn) {
          topBoard.style.pointerEvents = "auto";
          botBoard.style.pointerEvents = "none";
          if (cpuActive) {
            _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish(
              "info-update",
              `Your turn`,
            );
          } else {
            _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish(
              "info-update",
              `Bottom Player's turn`,
            );
          }

          // Set turn variables for next turn
          topBoardsTurn = false;
          botBoardsTurn = true;
        }
      }

      function switchActiveBoard() {
        // Switch active boards
        if (disableAllBoards) {
          return;
        }

        // If pvp mode enabled
        if (!cpuActive) {
          switchHiddenBoard();
        }

        // If AI active then attack
        if (cpuActive) {
          switchPlayerControl();
          if (playerMoved) {
            setTimeout(cpuAttack, 800);
          }
        }
      }

      function disableBoards() {
        // Game end
        disableAllBoards = true;
        topBoard.style.pointerEvents = "none";
        botBoard.style.pointerEvents = "none";
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
        // Check if game has ended
        if (disableAllBoards) {
          return;
        }

        // Pass turn back to player and attack
        playerMoved = false;
        _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish(
          "cpu-attack",
          "bot",
        );
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
          _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish(
            "attack-grid",
            coordinates,
          );
        }
        // Disable checking bot board if AI active
        if (parentBoard.id == "bot" && cpuActive == false) {
          const dataX = Number(e.target.getAttribute("data-x"));
          const dataY = Number(e.target.getAttribute("data-y"));
          const coordinates = { owner: "bot", x: dataX, y: dataY };

          _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish(
            "attack-grid",
            coordinates,
          );
        }
      });

      function startGame() {
        disableAllBoards = false;
        playerMoved = false;
        topBoardsTurn = false;
        botBoardsTurn = true;
        // clear board status and rebuild ships
        resetBoard();
      }

      disableBoards();
      _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe(
        "update-board",
        updateBoard,
      );
      _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe(
        "game-over",
        disableBoards,
      );
      _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe(
        "new-game",
        startGame,
      );
      _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe(
        "clear-board",
        resetBoard,
      );
      _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("cpu-on", () => {
        cpuActive = true;
      });
      _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("cpu-off", () => {
        cpuActive = false;
      });
    }
  })();

  /** *** */
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUJvYXJkTGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQUU7QUFDVixRQUFRO0FBQ1IsUUFBUSwrQ0FBRTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFFO0FBQ1YsUUFBUTtBQUNSLFFBQVEsK0NBQUU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksK0NBQUU7QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSxNQUFNLCtDQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsTUFBTSwrQ0FBRTtBQUNSO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrQ0FBRTtBQUNKLEVBQUUsK0NBQUU7QUFDSixFQUFFLCtDQUFFO0FBQ0osRUFBRSwrQ0FBRTtBQUNKLEVBQUUsK0NBQUU7QUFDSjtBQUNBLEdBQUc7QUFDSCxFQUFFLCtDQUFFO0FBQ0o7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmRMYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHViU3ViKCkge1xuICBjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBwdWJsaXNoLCBzdWJzY3JpYmUgfTtcbn1cblxuY29uc3Qgc2hhcmVkUHViU3ViID0gcHViU3ViKCk7XG5leHBvcnQgZGVmYXVsdCBzaGFyZWRQdWJTdWI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gIC8vIENyZWF0ZSBnYW1lIGNvbnRlbnQgYm9hcmRcbiAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFpbmVyXCIpWzBdO1xuICBsZXQgdG9wQm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwidG9wXCIpO1xuICBsZXQgYm90Qm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwiYm90XCIpO1xuICBsZXQgZGlzYWJsZUFsbEJvYXJkcyA9IHRydWU7XG4gIGxldCBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuICBsZXQgY3B1QWN0aXZlID0gZmFsc2U7XG4gIGxldCB0b3BCb2FyZHNUdXJuID0gZmFsc2U7XG4gIGxldCBib3RCb2FyZHNUdXJuID0gZmFsc2U7XG5cbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQodG9wQm9hcmQpO1xuICBib2FyZERpdi5hcHBlbmRDaGlsZChib3RCb2FyZCk7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZChpZCkge1xuICAgIC8vIENyZWF0ZSBib2FyZFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvYXJkXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHNxdWFyZXNcbiAgICBmb3IgKGxldCB5ID0gMTA7IHkgPiAwOyB5LS0pIHtcbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3F1YXJlc1wiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCB4KTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCB5KTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGFiZWxzXG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgY29uc3QgbGVmdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0TGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsZWZ0LWxhYmVsXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSBsZXR0ZXJzW2ldO1xuICAgICAgbGVmdExhYmVsLmFwcGVuZENoaWxkKGxldHRlcik7XG4gICAgfVxuICAgIGNvbnN0IHRvcExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b3BMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1sYWJlbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IGk7XG4gICAgICB0b3BMYWJlbC5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCBvYmplY3RzIHRvIHRvcCBib2FyZFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRMYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvcExhYmVsKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCb2FyZChvYmopIHtcbiAgICAvLyBVcGRhdGUgYm9hcmQgZWxlbWVudHNcblxuICAgIGNvbnN0IGNvbnRlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmVsZW0pO1xuICAgIGNvbnN0IGJvYXJkRWxlbSA9IGNvbnRlbnRFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJib2FyZFwiKVswXTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvb3JkaW5hdGUob2JqLCB4LCB5KSB7XG4gICAgICAvLyBVcGRhdGUgY29vcmRpbmF0ZSB3aXRoIG9ialxuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGJvYXJkRWxlbS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBkYXRhWCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgICAgICBjb25zdCBkYXRhWSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuXG4gICAgICAgIGlmIChkYXRhWCA9PSB4ICYmIGRhdGFZID09IHkpIHtcbiAgICAgICAgICAvLyBBcHBlbmQgb2JqIGRhdGEgdG8gdGhlIHNxdWFyZXMgd2l0aCBjbGFzc2VzXG5cbiAgICAgICAgICBpZiAob2JqLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gSWYgQUkgYWN0aXZlIHRoZW4gaGlkZSB0b3AgYm9hcmQgc2hpcHNcbiAgICAgICAgICAgIGlmIChjcHVBY3RpdmUgJiYgY29udGVudEVsZW0uaWQgPT0gXCJ0b3BcIikge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY29sb3VyXCIsIG9iai5jb2xvdXIpO1xuICAgICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9iai5jb2xvdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvYmouc3RhdHVzID09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTc1LCAxMjksIDEyOSlcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9iai5zdGF0dXMgPT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGJvYXJkIGNvb3JkaW5hdGVzXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgICAgICAvLyBGb3IgZWFjaCB4ICYgeSBjb29yZGluYXRlXG4gICAgICAgIC8vIGlmIChvYmouZGF0YVt4XVt5XS5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgaGl0L21pc3Mgb3Igc2hpcCBvYmplY3RcblxuICAgICAgICB1cGRhdGVDb29yZGluYXRlKG9iai5ncmlkW3hdW3ldLCB4LCB5KTtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCBhY3RpdmUgYm9hcmQgc3RhdGVcbiAgICBzd2l0Y2hBY3RpdmVCb2FyZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoSGlkZGVuQm9hcmQoKSB7XG4gICAgLy8gSWYgcHZwIG1vZGUgdGhlbiBoaWRlIHNoaXBzIG9uIGJvYXJkLCBkaXNhYmxlIGFsbCBpbnB1dFxuICAgIGNvbnN0IHRvcEJvYXJkU2hpcHMgPSBBcnJheS5mcm9tKHRvcEJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaGlwXCIpKTtcbiAgICBjb25zdCBib3RCb2FyZFNoaXBzID0gQXJyYXkuZnJvbShib3RCb2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2hpcFwiKSk7XG4gICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGJvdEJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICAgIC8vIFRlbXAgaGlkZSBzaGlwc1xuICAgIHRvcEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNzUsIDEyOSwgMTI5KVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNzUsIDEyOSwgMTI5KVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFdhaXQgMiBzZWNvbmRzIHRoZW4gZGlzcGxheSBzaGlwIHN0YXR1c1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGJvdEJvYXJkc1R1cm4pIHtcbiAgICAgICAgLy8gVG9wIGJvYXJkJ3MgdHVyblxuICAgICAgICB0b3BCb2FyZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBjb25zdCBzaGlwQ29sb3VyID0gc2hpcC5nZXRBdHRyaWJ1dGUoXCJjb2xvdXJcIik7XG4gICAgICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzaGlwQ29sb3VyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRvcEJvYXJkc1R1cm4pIHtcbiAgICAgICAgLy8gQm90dG9tIGJvYXJkJ3MgdHVyblxuICAgICAgICB0b3BCb2FyZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBib3RCb2FyZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBjb25zdCBzaGlwQ29sb3VyID0gc2hpcC5nZXRBdHRyaWJ1dGUoXCJjb2xvdXJcIik7XG4gICAgICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzaGlwQ29sb3VyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXNhYmxlQWxsQm9hcmRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoUGxheWVyQ29udHJvbCgpO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyQ29udHJvbCgpIHtcbiAgICAvLyBTd2l0Y2ggcGxheWVyIGNvbnRyb2xcbiAgICBpZiAoYm90Qm9hcmRzVHVybikge1xuICAgICAgLy8gVG9wIGJvYXJkcyB0dXJuXG4gICAgICB0b3BCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICBpZiAoY3B1QWN0aXZlKSB7XG4gICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgQ1BVJ3MgdHVybmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHMucHVibGlzaChcImluZm8tdXBkYXRlXCIsIGBUb3AgUGxheWVyJ3MgdHVybmApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdHVybiB2YXJpYWJsZXMgZm9yIG5leHQgdHVyblxuICAgICAgdG9wQm9hcmRzVHVybiA9IHRydWU7XG4gICAgICBib3RCb2FyZHNUdXJuID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0b3BCb2FyZHNUdXJuKSB7XG4gICAgICB0b3BCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICBpZiAoY3B1QWN0aXZlKSB7XG4gICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgWW91ciB0dXJuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcy5wdWJsaXNoKFwiaW5mby11cGRhdGVcIiwgYEJvdHRvbSBQbGF5ZXIncyB0dXJuYCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB0dXJuIHZhcmlhYmxlcyBmb3IgbmV4dCB0dXJuXG4gICAgICB0b3BCb2FyZHNUdXJuID0gZmFsc2U7XG4gICAgICBib3RCb2FyZHNUdXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hBY3RpdmVCb2FyZCgpIHtcbiAgICAvLyBTd2l0Y2ggYWN0aXZlIGJvYXJkc1xuICAgIGlmIChkaXNhYmxlQWxsQm9hcmRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgcHZwIG1vZGUgZW5hYmxlZFxuICAgIGlmICghY3B1QWN0aXZlKSB7XG4gICAgICBzd2l0Y2hIaWRkZW5Cb2FyZCgpO1xuICAgIH1cblxuICAgIC8vIElmIEFJIGFjdGl2ZSB0aGVuIGF0dGFja1xuICAgIGlmIChjcHVBY3RpdmUpIHtcbiAgICAgIHN3aXRjaFBsYXllckNvbnRyb2woKTtcbiAgICAgIGlmIChwbGF5ZXJNb3ZlZCkge1xuICAgICAgICBzZXRUaW1lb3V0KGNwdUF0dGFjaywgODAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlQm9hcmRzKCkge1xuICAgIC8vIEdhbWUgZW5kXG4gICAgZGlzYWJsZUFsbEJvYXJkcyA9IHRydWU7XG4gICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGJvdEJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gICAgLy8gQ2xlYXIgYm90aCBib2FyZHMgZnJvbSBjb250YWluZXJcbiAgICB3aGlsZSAoYm9hcmREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgYm9hcmREaXYucmVtb3ZlQ2hpbGQoYm9hcmREaXYubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICB0b3BCb2FyZCA9IGdlbmVyYXRlQm9hcmQoXCJ0b3BcIik7XG4gICAgYm90Qm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwiYm90XCIpO1xuXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQodG9wQm9hcmQpO1xuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGJvdEJvYXJkKTtcbiAgfVxuXG4gIC8vIEFJIE1vdmVcbiAgZnVuY3Rpb24gY3B1QXR0YWNrKCkge1xuICAgIC8vIENoZWNrIGlmIGdhbWUgaGFzIGVuZGVkXG4gICAgaWYgKGRpc2FibGVBbGxCb2FyZHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQYXNzIHR1cm4gYmFjayB0byBwbGF5ZXIgYW5kIGF0dGFja1xuICAgIHBsYXllck1vdmVkID0gZmFsc2U7XG4gICAgcHMucHVibGlzaChcImNwdS1hdHRhY2tcIiwgXCJib3RcIik7XG4gIH1cblxuICAvLyBNb3VzZSBldmVudHNcbiAgYm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Qm9hcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudEJvYXJkLmlkID09IFwidG9wXCIpIHtcbiAgICAgIGNvbnN0IGRhdGFYID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKSk7XG4gICAgICBjb25zdCBkYXRhWSA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7IG93bmVyOiBcInRvcFwiLCB4OiBkYXRhWCwgeTogZGF0YVkgfTtcblxuICAgICAgLy8gUGxheWVyIGhhcyBtb3ZlZCAoQUkgY2hlY2spXG4gICAgICBwbGF5ZXJNb3ZlZCA9IHRydWU7XG4gICAgICBwcy5wdWJsaXNoKFwiYXR0YWNrLWdyaWRcIiwgY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgICAvLyBEaXNhYmxlIGNoZWNraW5nIGJvdCBib2FyZCBpZiBBSSBhY3RpdmVcbiAgICBpZiAocGFyZW50Qm9hcmQuaWQgPT0gXCJib3RcIiAmJiBjcHVBY3RpdmUgPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGRhdGFYID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKSk7XG4gICAgICBjb25zdCBkYXRhWSA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7IG93bmVyOiBcImJvdFwiLCB4OiBkYXRhWCwgeTogZGF0YVkgfTtcblxuICAgICAgcHMucHVibGlzaChcImF0dGFjay1ncmlkXCIsIGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBkaXNhYmxlQWxsQm9hcmRzID0gZmFsc2U7XG4gICAgcGxheWVyTW92ZWQgPSBmYWxzZTtcbiAgICB0b3BCb2FyZHNUdXJuID0gZmFsc2U7XG4gICAgYm90Qm9hcmRzVHVybiA9IHRydWU7XG4gICAgLy8gY2xlYXIgYm9hcmQgc3RhdHVzIGFuZCByZWJ1aWxkIHNoaXBzXG4gICAgcmVzZXRCb2FyZCgpO1xuICB9XG5cbiAgZGlzYWJsZUJvYXJkcygpO1xuICBwcy5zdWJzY3JpYmUoXCJ1cGRhdGUtYm9hcmRcIiwgdXBkYXRlQm9hcmQpO1xuICBwcy5zdWJzY3JpYmUoXCJnYW1lLW92ZXJcIiwgZGlzYWJsZUJvYXJkcyk7XG4gIHBzLnN1YnNjcmliZShcIm5ldy1nYW1lXCIsIHN0YXJ0R2FtZSk7XG4gIHBzLnN1YnNjcmliZShcImNsZWFyLWJvYXJkXCIsIHJlc2V0Qm9hcmQpO1xuICBwcy5zdWJzY3JpYmUoXCJjcHUtb25cIiwgKCkgPT4ge1xuICAgIGNwdUFjdGl2ZSA9IHRydWU7XG4gIH0pO1xuICBwcy5zdWJzY3JpYmUoXCJjcHUtb2ZmXCIsICgpID0+IHtcbiAgICBjcHVBY3RpdmUgPSBmYWxzZTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
