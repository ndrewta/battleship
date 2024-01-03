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
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("clear-board");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdEJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsSUFBSSxlQUFlOztBQUU5RDtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsSUFBSSxlQUFlOztBQUU5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWMsSUFBSSxlQUFlO0FBQ2xFLE1BQU07QUFDTjtBQUNBLGlDQUFpQyxjQUFjLElBQUksZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLGNBQWMsSUFBSSxlQUFlO0FBQ2hFLCtCQUErQixjQUFjLElBQUksZUFBZTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQUU7QUFDTixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLElBQUksK0NBQUU7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFFO0FBQ04sSUFBSSwrQ0FBRTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLEVBQUUsK0NBQUU7O0FBRUo7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RhdEJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHB1YlN1YigpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgcHVibGlzaCwgc3Vic2NyaWJlIH07XG59XG5cbmNvbnN0IHNoYXJlZFB1YlN1YiA9IHB1YlN1YigpO1xuZXhwb3J0IGRlZmF1bHQgc2hhcmVkUHViU3ViO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHMgZnJvbSBcIi4vcHViU3ViXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRCb2FyZCgpIHtcbiAgLy8gSW5pdGlhbCB2YXJpYWJsZXNcbiAgbGV0IHRvcFBsYXllck5hbWUgPSBcIlRvcCBwbGF5ZXJcIjtcbiAgbGV0IGJvdFBsYXllck5hbWUgPSBcIkJvdHRvbSBwbGF5ZXJcIjtcbiAgbGV0IHRvcFBsYXllclNjb3JlID0gMDtcbiAgbGV0IGJvdFBsYXllclNjb3JlID0gMDtcblxuICAvLyBNYWluIGNvbnRhaW5lclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhdHMtY29udGFpbmVyXCIpWzBdO1xuXG4gIC8vIFBsYXllciBzdGF0cyBjb250YWluZXJcbiAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLXNjb3Jlcy1kaXZcIik7XG5cbiAgY29uc3QgdG9wUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvcFBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1wbGF5ZXJcIik7XG4gIHRvcFBsYXllci50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9OiAke3RvcFBsYXllclNjb3JlfWA7XG5cbiAgY29uc3QgYm90UGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJvdFBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvdC1wbGF5ZXJcIik7XG4gIGJvdFBsYXllci50ZXh0Q29udGVudCA9IGAke2JvdFBsYXllck5hbWV9OiAke2JvdFBsYXllclNjb3JlfWA7XG5cbiAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFBsYXllcik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChib3RQbGF5ZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcblxuICAvLyBNb2RlIHNlbGVjdCBjb250YWluZXJcbiAgY29uc3QgbW9kZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RlLXNlbGVjdC1kaXZcIik7XG5cbiAgLy8gTW9kZSBzZWxlY3QgcXVlc3Rpb25cbiAgY29uc3QgcXVlc3Rpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHF1ZXN0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiVmVyc2UgQ1BVP1wiO1xuXG4gIC8vIE1vZGUgc2VsZWN0IGJ1dHRvbnNcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnRuLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgeWVzQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwieWVzLWJ0blwiKTtcbiAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbiAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBub0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vLWJ0blwiKTtcbiAgbm9CdG4udGV4dENvbnRlbnQgPSBcIk5vXCI7XG5cbiAgbW9kZURpdi5hcHBlbmRDaGlsZChxdWVzdGlvblRleHQpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoeWVzQnRuKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vQnRuKTtcbiAgbW9kZURpdi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kZURpdik7XG5cbiAgLy8gQ29udGFpbmVyIGJ1dHRvbnNcbiAgY29uc3QgY29udGFpbmVyQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lckJ0bnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXItYnRuc1wiKTtcbiAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckJ0bnMpO1xuXG4gIC8vIFN0YXJ0IGJ1dHRvblxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG4gIHN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnQtYnRuXCIpO1xuICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIGNvbnRhaW5lckJ0bnMuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gIC8vIFJlc2V0IGJ1dHRvblxuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlc2V0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzZXQtYnRuXCIpO1xuICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgcmVzZXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBjb250YWluZXJCdG5zLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcblxuICBmdW5jdGlvbiB1cGRhdGVTY29yZXMobG9zZXJCb2FyZCkge1xuICAgIC8vIFVwZGF0ZSBzY29yZXNcbiAgICBpZiAobG9zZXJCb2FyZCA9PSBcInRvcFwiKSB7XG4gICAgICBib3RQbGF5ZXJTY29yZSArPSAxO1xuICAgICAgYm90UGxheWVyLnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX06ICR7Ym90UGxheWVyU2NvcmV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wUGxheWVyU2NvcmUgKz0gMTtcbiAgICAgIHRvcFBsYXllci50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9OiAke3RvcFBsYXllclNjb3JlfWA7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlc2V0U2NvcmVzKCkge1xuICAgIC8vIFJlc2V0IHNjb3JlcyBhbmQgdXBkYXRlIGJvYXJkXG4gICAgdG9wUGxheWVyU2NvcmUgPSAwO1xuICAgIGJvdFBsYXllclNjb3JlID0gMDtcblxuICAgIHRvcFBsYXllci50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9OiAke3RvcFBsYXllclNjb3JlfWA7XG4gICAgYm90UGxheWVyLnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX06ICR7Ym90UGxheWVyU2NvcmV9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUJ0bnMoKSB7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZXNldEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZU92ZXJDbGVhblVwKGxvc2VyQm9hcmQpIHtcbiAgICB1cGRhdGVTY29yZXMobG9zZXJCb2FyZCk7XG4gICAgZW5hYmxlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd01vZGVEaXYoKSB7XG4gICAgbW9kZURpdi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBtb2RlRGl2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVNb2RlRGl2KCkge1xuICAgIG1vZGVEaXYuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgbW9kZURpdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93UGxheWVyU2NvcmVEaXYoKSB7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBsYXllckNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlUGxheWVyU2NvcmVEaXYoKSB7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHBsYXllckNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH1cblxuICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVzZXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHBzLnB1Ymxpc2goXCJuZXctZ2FtZVwiKTtcbiAgfSk7XG5cbiAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJZZXMsIHZzaW5nIENQVS5cIik7XG5cbiAgICAvLyBTd2l0Y2ggYnV0dG9uIGRpc2FibGVkIHN0YXRlc1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtb25cIik7XG4gICAgdG9wUGxheWVyTmFtZSA9IFwiQ1BVXCI7XG4gICAgYm90UGxheWVyTmFtZSA9IFwiUGxheWVyXCI7XG4gICAgaGlkZU1vZGVEaXYoKTtcbiAgICByZXNldFNjb3JlcygpO1xuICAgIHNob3dQbGF5ZXJTY29yZURpdigpO1xuXG4gICAgeWVzQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBub0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZXNldEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcblxuICBub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTm8sIHZzaW5nIGh1bWFuLlwiKTtcblxuICAgIC8vIFN3aXRjaCBidXR0b24gZGlzYWJsZWQgc3RhdGVzXG4gICAgcHMucHVibGlzaChcImNwdS1vZmZcIik7XG4gICAgdG9wUGxheWVyTmFtZSA9IFwiVG9wIFBsYXllclwiO1xuICAgIGJvdFBsYXllck5hbWUgPSBcIkJvdHRvbSBQbGF5ZXJcIjtcbiAgICBoaWRlTW9kZURpdigpO1xuICAgIHJlc2V0U2NvcmVzKCk7XG4gICAgc2hvd1BsYXllclNjb3JlRGl2KCk7XG4gICAgeWVzQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBub0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZXNldEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcblxuICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFJlc2V0IHN0YXRzXG4gICAgaGlkZVBsYXllclNjb3JlRGl2KCk7XG4gICAgc2hvd01vZGVEaXYoKTtcbiAgICByZXNldFNjb3JlcygpO1xuXG4gICAgLy8gU3dpdGNoIGJ1dHRvbiBkaXNhYmxlZCBzdGF0ZXNcbiAgICBwcy5wdWJsaXNoKFwiY3B1LW9mZlwiKTtcbiAgICBwcy5wdWJsaXNoKFwiY2xlYXItYm9hcmRcIik7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJlc2V0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB5ZXNCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBub0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcblxuICAvLyBQdWJzdWJcbiAgcHMuc3Vic2NyaWJlKFwiZ2FtZS1vdmVyXCIsIGdhbWVPdmVyQ2xlYW5VcCk7XG5cbiAgLy8gSGlkZSBwbGF5ZXIgc2NvcmUgZGl2IG9uIGluaXRcbiAgaGlkZVBsYXllclNjb3JlRGl2KCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==