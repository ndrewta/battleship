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
    /*! **************************!*\
  !*** ./src/statBoard.js ***!
  \************************* */
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => /* binding */ statBoard,
      /* harmony export */
    });
    /* harmony import */ let _pubSub__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");

    function statBoard() {
      // Initial variables
      let topPlayerName = "Top player";
      let botPlayerName = "Bottom player";
      let topPlayerScore = 0;
      let botPlayerScore = 0;

      // Main container
      const container = document.getElementsByClassName("stats-container")[0];

      // Player stats container
      const playerContainer = document.createElement("div");
      playerContainer.setAttribute("id", "player-scores-div");

      const playersDiv = document.createElement("div");
      playersDiv.setAttribute("id", "players-div");

      const topPlayer = document.createElement("p");
      topPlayer.setAttribute("id", "top-player");
      topPlayer.textContent = `${topPlayerName}: ${topPlayerScore}`;

      const botPlayer = document.createElement("p");
      botPlayer.setAttribute("id", "bot-player");
      botPlayer.textContent = `${botPlayerName}: ${botPlayerScore}`;

      playersDiv.appendChild(topPlayer);
      playersDiv.appendChild(botPlayer);
      playerContainer.appendChild(playersDiv);
      container.appendChild(playerContainer);

      // Mode select container
      const modeDiv = document.createElement("div");
      modeDiv.setAttribute("id", "mode-select-div");

      // Mode select question
      const questionDiv = document.createElement("div");
      questionDiv.setAttribute("id", "question-div");
      const questionText = document.createElement("p");
      questionText.textContent = "Verse CPU?";
      questionDiv.appendChild(questionText);

      // Mode select buttons
      const btnContainer = document.createElement("div");
      btnContainer.setAttribute("id", "btn-container");
      const yesBtn = document.createElement("button");
      yesBtn.setAttribute("id", "yes-btn");
      yesBtn.textContent = "Yes";
      const noBtn = document.createElement("button");
      noBtn.setAttribute("id", "no-btn");
      noBtn.textContent = "No";

      modeDiv.appendChild(questionDiv);
      btnContainer.appendChild(yesBtn);
      btnContainer.appendChild(noBtn);
      modeDiv.appendChild(btnContainer);
      container.appendChild(modeDiv);

      // Player container buttons
      const playerContainerBtns = document.createElement("div");
      playerContainerBtns.setAttribute("id", "player-container-btns");
      playerContainer.appendChild(playerContainerBtns);

      // Start button
      const startBtn = document.createElement("button");
      startBtn.textContent = "New Game";
      startBtn.setAttribute("id", "start-btn");
      startBtn.disabled = true;
      playerContainerBtns.appendChild(startBtn);

      // Reset button
      const resetBtn = document.createElement("button");
      resetBtn.setAttribute("id", "reset-btn");
      resetBtn.textContent = "Reset";
      playerContainerBtns.appendChild(resetBtn);

      // Turn/victory notification
      const infoDiv = document.createElement("div");
      infoDiv.setAttribute("id", "info-div");
      playerContainer.appendChild(infoDiv);

      const infoText = document.createElement("p");
      infoText.textContent = "";
      infoDiv.appendChild(infoText);

      function updateInfoText(text) {
        // Loser Board info
        if (text == "top") {
          infoText.textContent = `${botPlayerName} won!`;
        } else if (text == "bot") {
          infoText.textContent = `${topPlayerName} won!`;
        } else {
          infoText.textContent = text;
        }
      }

      function updateScores(loserBoard) {
        // Update scores
        if (loserBoard == "top") {
          botPlayerScore += 1;
          botPlayer.textContent = `${botPlayerName}: ${botPlayerScore}`;
        } else {
          topPlayerScore += 1;
          topPlayer.textContent = `${topPlayerName}: ${topPlayerScore}`;
        }
      }

      function resetScores() {
        // Reset scores and update board
        topPlayerScore = 0;
        botPlayerScore = 0;

        topPlayer.textContent = `${topPlayerName}: ${topPlayerScore}`;
        botPlayer.textContent = `${botPlayerName}: ${botPlayerScore}`;
      }

      function enableBtns() {
        startBtn.disabled = false;
      }

      function gameOverCleanUp(loserBoard) {
        updateInfoText(loserBoard);
        updateScores(loserBoard);
        enableBtns();
      }

      function showModeDiv() {
        modeDiv.style.opacity = 1;
        modeDiv.style.pointerEvents = "auto";
      }

      function hideModeDiv() {
        modeDiv.style.opacity = 0;
        modeDiv.style.pointerEvents = "none";
      }

      function showPlayerScoreDiv() {
        playerContainer.style.opacity = 1;
        playerContainer.style.pointerEvents = "auto";
      }

      function hidePlayerScoreDiv() {
        playerContainer.style.opacity = 0;
        playerContainer.style.pointerEvents = "none";
      }

      // Event listeners
      startBtn.addEventListener("click", () => {
        startBtn.disabled = true;
        _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish("new-game");
      });

      yesBtn.addEventListener("click", () => {
        // Switch button disabled states
        _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish("cpu-on");
        topPlayerName = "CPU";
        botPlayerName = "Player";
        hideModeDiv();
        resetScores();
        showPlayerScoreDiv();

        yesBtn.disabled = true;
        noBtn.disabled = true;
        startBtn.disabled = false;
      });

      noBtn.addEventListener("click", () => {
        // Switch button disabled states
        _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish("cpu-off");
        topPlayerName = "Top Player";
        botPlayerName = "Bottom Player";
        hideModeDiv();
        resetScores();
        showPlayerScoreDiv();
        yesBtn.disabled = true;
        noBtn.disabled = true;
        startBtn.disabled = false;
      });

      resetBtn.addEventListener("click", () => {
        // Reset stats
        hidePlayerScoreDiv();
        showModeDiv();
        resetScores();

        // Switch button disabled states
        _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish("cpu-off");
        _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.publish("clear-board");
        infoText.textContent = "";
        startBtn.disabled = true;
        yesBtn.disabled = false;
        noBtn.disabled = false;
      });

      // Pubsub
      _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe(
        "game-over",
        gameOverCleanUp,
      );
      _pubSub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe(
        "info-update",
        updateInfoText,
      );

      // Hide player score div on init
      hidePlayerScoreDiv();

      return container;
    }
  })();

  /** *** */
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdEJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYyxJQUFJLGVBQWU7O0FBRTlEO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYyxJQUFJLGVBQWU7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DLE1BQU07QUFDTixnQ0FBZ0MsZUFBZTtBQUMvQyxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWMsSUFBSSxlQUFlO0FBQ2xFLE1BQU07QUFDTjtBQUNBLGlDQUFpQyxjQUFjLElBQUksZUFBZTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixjQUFjLElBQUksZUFBZTtBQUNoRSwrQkFBK0IsY0FBYyxJQUFJLGVBQWU7QUFDaEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBRTtBQUNOLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksK0NBQUU7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksK0NBQUU7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBRTtBQUNOLElBQUksK0NBQUU7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxFQUFFLCtDQUFFO0FBQ0osRUFBRSwrQ0FBRTs7QUFFSjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdGF0Qm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHViU3ViKCkge1xuICBjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBwdWJsaXNoLCBzdWJzY3JpYmUgfTtcbn1cblxuY29uc3Qgc2hhcmVkUHViU3ViID0gcHViU3ViKCk7XG5leHBvcnQgZGVmYXVsdCBzaGFyZWRQdWJTdWI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdEJvYXJkKCkge1xuICAvLyBJbml0aWFsIHZhcmlhYmxlc1xuICBsZXQgdG9wUGxheWVyTmFtZSA9IFwiVG9wIHBsYXllclwiO1xuICBsZXQgYm90UGxheWVyTmFtZSA9IFwiQm90dG9tIHBsYXllclwiO1xuICBsZXQgdG9wUGxheWVyU2NvcmUgPSAwO1xuICBsZXQgYm90UGxheWVyU2NvcmUgPSAwO1xuXG4gIC8vIE1haW4gY29udGFpbmVyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGF0cy1jb250YWluZXJcIilbMF07XG5cbiAgLy8gUGxheWVyIHN0YXRzIGNvbnRhaW5lclxuICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItc2NvcmVzLWRpdlwiKTtcblxuICBjb25zdCBwbGF5ZXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyc0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllcnMtZGl2XCIpO1xuXG4gIGNvbnN0IHRvcFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b3BQbGF5ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b3AtcGxheWVyXCIpO1xuICB0b3BQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHt0b3BQbGF5ZXJOYW1lfTogJHt0b3BQbGF5ZXJTY29yZX1gO1xuXG4gIGNvbnN0IGJvdFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBib3RQbGF5ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib3QtcGxheWVyXCIpO1xuICBib3RQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHtib3RQbGF5ZXJOYW1lfTogJHtib3RQbGF5ZXJTY29yZX1gO1xuXG4gIHBsYXllcnNEaXYuYXBwZW5kQ2hpbGQodG9wUGxheWVyKTtcbiAgcGxheWVyc0Rpdi5hcHBlbmRDaGlsZChib3RQbGF5ZXIpO1xuICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyc0Rpdik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXIpO1xuXG4gIC8vIE1vZGUgc2VsZWN0IGNvbnRhaW5lclxuICBjb25zdCBtb2RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGUtc2VsZWN0LWRpdlwiKTtcblxuICAvLyBNb2RlIHNlbGVjdCBxdWVzdGlvblxuICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1ZXN0aW9uRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicXVlc3Rpb24tZGl2XCIpO1xuICBjb25zdCBxdWVzdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcXVlc3Rpb25UZXh0LnRleHRDb250ZW50ID0gXCJWZXJzZSBDUFU/XCI7XG4gIHF1ZXN0aW9uRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uVGV4dCk7XG5cbiAgLy8gTW9kZSBzZWxlY3QgYnV0dG9uc1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidG4tY29udGFpbmVyXCIpO1xuICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB5ZXNCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ5ZXMtYnRuXCIpO1xuICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICBjb25zdCBub0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5vQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm8tYnRuXCIpO1xuICBub0J0bi50ZXh0Q29udGVudCA9IFwiTm9cIjtcblxuICBtb2RlRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uRGl2KTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHllc0J0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChub0J0bik7XG4gIG1vZGVEaXYuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGVEaXYpO1xuXG4gIC8vIFBsYXllciBjb250YWluZXIgYnV0dG9uc1xuICBjb25zdCBwbGF5ZXJDb250YWluZXJCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQ29udGFpbmVyQnRucy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1jb250YWluZXItYnRuc1wiKTtcbiAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvbnRhaW5lckJ0bnMpO1xuXG4gIC8vIFN0YXJ0IGJ1dHRvblxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJOZXcgR2FtZVwiO1xuICBzdGFydEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0YXJ0LWJ0blwiKTtcbiAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBwbGF5ZXJDb250YWluZXJCdG5zLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcblxuICAvLyBSZXNldCBidXR0b25cbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZXNldEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc2V0LWJ0blwiKTtcbiAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XG4gIHBsYXllckNvbnRhaW5lckJ0bnMuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gIC8vIFR1cm4vdmljdG9yeSBub3RpZmljYXRpb25cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmZvLWRpdlwiKTtcbiAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm9UZXh0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvVGV4dCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlSW5mb1RleHQodGV4dCkge1xuICAgIC8vIExvc2VyIEJvYXJkIGluZm9cbiAgICBpZiAodGV4dCA9PSBcInRvcFwiKSB7XG4gICAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IGAke2JvdFBsYXllck5hbWV9IHdvbiFgO1xuICAgIH0gZWxzZSBpZiAodGV4dCA9PSBcImJvdFwiKSB7XG4gICAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9IHdvbiFgO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2NvcmVzKGxvc2VyQm9hcmQpIHtcbiAgICAvLyBVcGRhdGUgc2NvcmVzXG4gICAgaWYgKGxvc2VyQm9hcmQgPT0gXCJ0b3BcIikge1xuICAgICAgYm90UGxheWVyU2NvcmUgKz0gMTtcbiAgICAgIGJvdFBsYXllci50ZXh0Q29udGVudCA9IGAke2JvdFBsYXllck5hbWV9OiAke2JvdFBsYXllclNjb3JlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcFBsYXllclNjb3JlICs9IDE7XG4gICAgICB0b3BQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHt0b3BQbGF5ZXJOYW1lfTogJHt0b3BQbGF5ZXJTY29yZX1gO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0U2NvcmVzKCkge1xuICAgIC8vIFJlc2V0IHNjb3JlcyBhbmQgdXBkYXRlIGJvYXJkXG4gICAgdG9wUGxheWVyU2NvcmUgPSAwO1xuICAgIGJvdFBsYXllclNjb3JlID0gMDtcblxuICAgIHRvcFBsYXllci50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9OiAke3RvcFBsYXllclNjb3JlfWA7XG4gICAgYm90UGxheWVyLnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX06ICR7Ym90UGxheWVyU2NvcmV9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUJ0bnMoKSB7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdhbWVPdmVyQ2xlYW5VcChsb3NlckJvYXJkKSB7XG4gICAgdXBkYXRlSW5mb1RleHQobG9zZXJCb2FyZCk7XG4gICAgdXBkYXRlU2NvcmVzKGxvc2VyQm9hcmQpO1xuICAgIGVuYWJsZUJ0bnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dNb2RlRGl2KCkge1xuICAgIG1vZGVEaXYuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgbW9kZURpdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlTW9kZURpdigpIHtcbiAgICBtb2RlRGl2LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIG1vZGVEaXYuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1BsYXllclNjb3JlRGl2KCkge1xuICAgIHBsYXllckNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBwbGF5ZXJDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVBsYXllclNjb3JlRGl2KCkge1xuICAgIHBsYXllckNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBwbGF5ZXJDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICB9XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXJzXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHBzLnB1Ymxpc2goXCJuZXctZ2FtZVwiKTtcbiAgfSk7XG5cbiAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU3dpdGNoIGJ1dHRvbiBkaXNhYmxlZCBzdGF0ZXNcbiAgICBwcy5wdWJsaXNoKFwiY3B1LW9uXCIpO1xuICAgIHRvcFBsYXllck5hbWUgPSBcIkNQVVwiO1xuICAgIGJvdFBsYXllck5hbWUgPSBcIlBsYXllclwiO1xuICAgIGhpZGVNb2RlRGl2KCk7XG4gICAgcmVzZXRTY29yZXMoKTtcbiAgICBzaG93UGxheWVyU2NvcmVEaXYoKTtcblxuICAgIHllc0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgbm9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU3dpdGNoIGJ1dHRvbiBkaXNhYmxlZCBzdGF0ZXNcbiAgICBwcy5wdWJsaXNoKFwiY3B1LW9mZlwiKTtcbiAgICB0b3BQbGF5ZXJOYW1lID0gXCJUb3AgUGxheWVyXCI7XG4gICAgYm90UGxheWVyTmFtZSA9IFwiQm90dG9tIFBsYXllclwiO1xuICAgIGhpZGVNb2RlRGl2KCk7XG4gICAgcmVzZXRTY29yZXMoKTtcbiAgICBzaG93UGxheWVyU2NvcmVEaXYoKTtcbiAgICB5ZXNCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIG5vQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcblxuICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFJlc2V0IHN0YXRzXG4gICAgaGlkZVBsYXllclNjb3JlRGl2KCk7XG4gICAgc2hvd01vZGVEaXYoKTtcbiAgICByZXNldFNjb3JlcygpO1xuXG4gICAgLy8gU3dpdGNoIGJ1dHRvbiBkaXNhYmxlZCBzdGF0ZXNcbiAgICBwcy5wdWJsaXNoKFwiY3B1LW9mZlwiKTtcbiAgICBwcy5wdWJsaXNoKFwiY2xlYXItYm9hcmRcIik7XG4gICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB5ZXNCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBub0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcblxuICAvLyBQdWJzdWJcbiAgcHMuc3Vic2NyaWJlKFwiZ2FtZS1vdmVyXCIsIGdhbWVPdmVyQ2xlYW5VcCk7XG4gIHBzLnN1YnNjcmliZShcImluZm8tdXBkYXRlXCIsIHVwZGF0ZUluZm9UZXh0KTtcblxuICAvLyBIaWRlIHBsYXllciBzY29yZSBkaXYgb24gaW5pdFxuICBoaWRlUGxheWVyU2NvcmVEaXYoKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
