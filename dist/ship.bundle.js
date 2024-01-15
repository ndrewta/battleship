/** *** */ (() => {
  // webpackBootstrap
  /** *** */

  /** *** */ // The require scope
  /** *** */ let __webpack_require__ = {};
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
  /*! *********************!*\
  !*** ./src/Ship.js ***!
  \******************** */
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ default: () => /* binding */ Ship,
    /* harmony export */
  });
  class Ship {
    constructor(length) {
      this.length = length;
      this.hits = 0;
      this.sunk = false;
      this.colour = `rgb(${(Math.random() * 256) | 0}, ${
        (Math.random() * 256) | 0
      }, ${(Math.random() * 256) | 0})`;
    }

    hit() {
      // Check if hits > length
      // Hit target
      this.hits += 1;
    }

    isSunk() {
      // Check if ship hits >= length then it's sunk
      if (this.hits >= this.length) {
        this.sunk = true;
      }
      return this.sunk;
    }
  }

  /** *** */
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBLEtBQUssSUFBSSwwQkFBMEI7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHRoaXMuY29sb3VyID0gYHJnYigkeyhNYXRoLnJhbmRvbSgpICogMjU2KSB8IDB9LCAke1xuICAgICAgKE1hdGgucmFuZG9tKCkgKiAyNTYpIHwgMFxuICAgIH0sICR7KE1hdGgucmFuZG9tKCkgKiAyNTYpIHwgMH0pYDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICAvLyBDaGVjayBpZiBoaXRzID4gbGVuZ3RoXG4gICAgLy8gSGl0IHRhcmdldFxuICAgIHRoaXMuaGl0cyArPSAxO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIC8vIENoZWNrIGlmIHNoaXAgaGl0cyA+PSBsZW5ndGggdGhlbiBpdCdzIHN1bmtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
