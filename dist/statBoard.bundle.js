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
  !*** ./src/statBoard.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ statBoard)
/* harmony export */ });
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");


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

  const topPlayer = document.createElement("p");
  topPlayer.setAttribute("id", "top-player");
  topPlayer.textContent = `${topPlayerName}: ${topPlayerScore}`;

  const botPlayer = document.createElement("p");
  botPlayer.setAttribute("id", "bot-player");
  botPlayer.textContent = `${botPlayerName}: ${botPlayerScore}`;

  playerContainer.appendChild(topPlayer);
  playerContainer.appendChild(botPlayer);
  container.appendChild(playerContainer);

  // Mode select container
  const modeDiv = document.createElement("div");
  modeDiv.setAttribute("id", "mode-select-div");

  // Mode select question
  const questionText = document.createElement("p");
  questionText.textContent = "Verse CPU?";

  // Mode select buttons
  const btnContainer = document.createElement("div");
  btnContainer.setAttribute("id", "btn-container");
  const yesBtn = document.createElement("button");
  yesBtn.setAttribute("id", "yes-btn");
  yesBtn.textContent = "Yes";
  const noBtn = document.createElement("button");
  noBtn.setAttribute("id", "no-btn");
  noBtn.textContent = "No";

  modeDiv.appendChild(questionText);
  btnContainer.appendChild(yesBtn);
  btnContainer.appendChild(noBtn);
  modeDiv.appendChild(btnContainer);
  container.appendChild(modeDiv);

  // Container buttons
  const containerBtns = document.createElement("div");
  containerBtns.setAttribute("id", "container-btns");
  playerContainer.appendChild(containerBtns);

  // Start button
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start Game";
  startBtn.setAttribute("id", "start-btn");
  startBtn.disabled = true;
  containerBtns.appendChild(startBtn);

  // Reset button
  const resetBtn = document.createElement("button");
  resetBtn.setAttribute("id", "reset-btn");
  resetBtn.textContent = "Reset";
  resetBtn.disabled = true;
  containerBtns.appendChild(resetBtn);

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
    resetBtn.disabled = false;
  }

  function gameOverCleanUp(loserBoard) {
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
    resetBtn.disabled = true;
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("new-game");
  });

  yesBtn.addEventListener("click", () => {
    console.log("Yes, vsing CPU.");

    // Switch button disabled states
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("cpu-on");
    topPlayerName = "CPU";
    botPlayerName = "Player";
    hideModeDiv();
    resetScores();
    showPlayerScoreDiv();

    yesBtn.disabled = true;
    noBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
  });

  noBtn.addEventListener("click", () => {
    console.log("No, vsing human.");

    // Switch button disabled states
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("cpu-off");
    topPlayerName = "Top Player";
    botPlayerName = "Bottom Player";
    hideModeDiv();
    resetScores();
    showPlayerScoreDiv();
    yesBtn.disabled = true;
    noBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
  });

  resetBtn.addEventListener("click", () => {
    // Reset stats
    hidePlayerScoreDiv();
    showModeDiv();
    resetScores();

    // Switch button disabled states
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("cpu-off");
    startBtn.disabled = true;
    resetBtn.disabled = true;
    yesBtn.disabled = false;
    noBtn.disabled = false;
  });

  // Pubsub
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("game-over", gameOverCleanUp);

  // Hide player score div on init
  hidePlayerScoreDiv();

  return container;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdEJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsSUFBSSxlQUFlOztBQUU5RDtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsSUFBSSxlQUFlOztBQUU5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWMsSUFBSSxlQUFlO0FBQ2xFLE1BQU07QUFDTjtBQUNBLGlDQUFpQyxjQUFjLElBQUksZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLGNBQWMsSUFBSSxlQUFlO0FBQ2hFLCtCQUErQixjQUFjLElBQUksZUFBZTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQUU7QUFDTixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLElBQUksK0NBQUU7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsRUFBRSwrQ0FBRTs7QUFFSjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdGF0Qm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHViU3ViKCkge1xuICBjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBwdWJsaXNoLCBzdWJzY3JpYmUgfTtcbn1cblxuY29uc3Qgc2hhcmVkUHViU3ViID0gcHViU3ViKCk7XG5leHBvcnQgZGVmYXVsdCBzaGFyZWRQdWJTdWI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdEJvYXJkKCkge1xuICAvLyBJbml0aWFsIHZhcmlhYmxlc1xuICBsZXQgdG9wUGxheWVyTmFtZSA9IFwiVG9wIHBsYXllclwiO1xuICBsZXQgYm90UGxheWVyTmFtZSA9IFwiQm90dG9tIHBsYXllclwiO1xuICBsZXQgdG9wUGxheWVyU2NvcmUgPSAwO1xuICBsZXQgYm90UGxheWVyU2NvcmUgPSAwO1xuXG4gIC8vIE1haW4gY29udGFpbmVyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGF0cy1jb250YWluZXJcIilbMF07XG5cbiAgLy8gUGxheWVyIHN0YXRzIGNvbnRhaW5lclxuICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItc2NvcmVzLWRpdlwiKTtcblxuICBjb25zdCB0b3BQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9wUGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wLXBsYXllclwiKTtcbiAgdG9wUGxheWVyLnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX06ICR7dG9wUGxheWVyU2NvcmV9YDtcblxuICBjb25zdCBib3RQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYm90UGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm90LXBsYXllclwiKTtcbiAgYm90UGxheWVyLnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX06ICR7Ym90UGxheWVyU2NvcmV9YDtcblxuICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wUGxheWVyKTtcbiAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdFBsYXllcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXIpO1xuXG4gIC8vIE1vZGUgc2VsZWN0IGNvbnRhaW5lclxuICBjb25zdCBtb2RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGUtc2VsZWN0LWRpdlwiKTtcblxuICAvLyBNb2RlIHNlbGVjdCBxdWVzdGlvblxuICBjb25zdCBxdWVzdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcXVlc3Rpb25UZXh0LnRleHRDb250ZW50ID0gXCJWZXJzZSBDUFU/XCI7XG5cbiAgLy8gTW9kZSBzZWxlY3QgYnV0dG9uc1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidG4tY29udGFpbmVyXCIpO1xuICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB5ZXNCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ5ZXMtYnRuXCIpO1xuICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICBjb25zdCBub0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5vQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm8tYnRuXCIpO1xuICBub0J0bi50ZXh0Q29udGVudCA9IFwiTm9cIjtcblxuICBtb2RlRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uVGV4dCk7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQobm9CdG4pO1xuICBtb2RlRGl2LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RlRGl2KTtcblxuICAvLyBDb250YWluZXIgYnV0dG9uc1xuICBjb25zdCBjb250YWluZXJCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyQnRucy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lci1idG5zXCIpO1xuICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQnRucyk7XG5cbiAgLy8gU3RhcnQgYnV0dG9uXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcbiAgc3RhcnRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGFydC1idG5cIik7XG4gIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgY29udGFpbmVyQnRucy5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG5cbiAgLy8gUmVzZXQgYnV0dG9uXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVzZXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNldC1idG5cIik7XG4gIHJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICByZXNldEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIGNvbnRhaW5lckJ0bnMuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjb3Jlcyhsb3NlckJvYXJkKSB7XG4gICAgLy8gVXBkYXRlIHNjb3Jlc1xuICAgIGlmIChsb3NlckJvYXJkID09IFwidG9wXCIpIHtcbiAgICAgIGJvdFBsYXllclNjb3JlICs9IDE7XG4gICAgICBib3RQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHtib3RQbGF5ZXJOYW1lfTogJHtib3RQbGF5ZXJTY29yZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3BQbGF5ZXJTY29yZSArPSAxO1xuICAgICAgdG9wUGxheWVyLnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX06ICR7dG9wUGxheWVyU2NvcmV9YDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRTY29yZXMoKSB7XG4gICAgLy8gUmVzZXQgc2NvcmVzIGFuZCB1cGRhdGUgYm9hcmRcbiAgICB0b3BQbGF5ZXJTY29yZSA9IDA7XG4gICAgYm90UGxheWVyU2NvcmUgPSAwO1xuXG4gICAgdG9wUGxheWVyLnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX06ICR7dG9wUGxheWVyU2NvcmV9YDtcbiAgICBib3RQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHtib3RQbGF5ZXJOYW1lfTogJHtib3RQbGF5ZXJTY29yZX1gO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnRucygpIHtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJlc2V0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lT3ZlckNsZWFuVXAobG9zZXJCb2FyZCkge1xuICAgIHVwZGF0ZVNjb3Jlcyhsb3NlckJvYXJkKTtcbiAgICBlbmFibGVCdG5zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93TW9kZURpdigpIHtcbiAgICBtb2RlRGl2LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIG1vZGVEaXYuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU1vZGVEaXYoKSB7XG4gICAgbW9kZURpdi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBtb2RlRGl2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dQbGF5ZXJTY29yZURpdigpIHtcbiAgICBwbGF5ZXJDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVQbGF5ZXJTY29yZURpdigpIHtcbiAgICBwbGF5ZXJDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIC8vIEV2ZW50IGxpc3RlbmVyc1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXNldEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcHMucHVibGlzaChcIm5ldy1nYW1lXCIpO1xuICB9KTtcblxuICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlllcywgdnNpbmcgQ1BVLlwiKTtcblxuICAgIC8vIFN3aXRjaCBidXR0b24gZGlzYWJsZWQgc3RhdGVzXG4gICAgcHMucHVibGlzaChcImNwdS1vblwiKTtcbiAgICB0b3BQbGF5ZXJOYW1lID0gXCJDUFVcIjtcbiAgICBib3RQbGF5ZXJOYW1lID0gXCJQbGF5ZXJcIjtcbiAgICBoaWRlTW9kZURpdigpO1xuICAgIHJlc2V0U2NvcmVzKCk7XG4gICAgc2hvd1BsYXllclNjb3JlRGl2KCk7XG5cbiAgICB5ZXNCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIG5vQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJlc2V0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJObywgdnNpbmcgaHVtYW4uXCIpO1xuXG4gICAgLy8gU3dpdGNoIGJ1dHRvbiBkaXNhYmxlZCBzdGF0ZXNcbiAgICBwcy5wdWJsaXNoKFwiY3B1LW9mZlwiKTtcbiAgICB0b3BQbGF5ZXJOYW1lID0gXCJUb3AgUGxheWVyXCI7XG4gICAgYm90UGxheWVyTmFtZSA9IFwiQm90dG9tIFBsYXllclwiO1xuICAgIGhpZGVNb2RlRGl2KCk7XG4gICAgcmVzZXRTY29yZXMoKTtcbiAgICBzaG93UGxheWVyU2NvcmVEaXYoKTtcbiAgICB5ZXNCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIG5vQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJlc2V0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gUmVzZXQgc3RhdHNcbiAgICBoaWRlUGxheWVyU2NvcmVEaXYoKTtcbiAgICBzaG93TW9kZURpdigpO1xuICAgIHJlc2V0U2NvcmVzKCk7XG5cbiAgICAvLyBTd2l0Y2ggYnV0dG9uIGRpc2FibGVkIHN0YXRlc1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtb2ZmXCIpO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXNldEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgeWVzQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgbm9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gUHVic3ViXG4gIHBzLnN1YnNjcmliZShcImdhbWUtb3ZlclwiLCBnYW1lT3ZlckNsZWFuVXApO1xuXG4gIC8vIEhpZGUgcGxheWVyIHNjb3JlIGRpdiBvbiBpbml0XG4gIGhpZGVQbGF5ZXJTY29yZURpdigpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=