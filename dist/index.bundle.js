/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 30vw;
}

.stats-container {
  position: relative;
  border: solid 1px black;
  width: 300px;
  height: 700px;
}

#players-div > p,
#question-div > p,
#info-div > p {
  font-size: 20px;
}

#mode-select-div,
#player-scores-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 150px;
}

#info-div {
  text-align: center;
  width: 150px;
  height: 150px;
}

#btn-container,
#player-container-btns {
  display: flex;
  justify-content: space-between;
  width: 150px;
}

button {
  width: 70px;
  height: 40px;
  font-size: 14px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}

.board {
  font-size: 36px;
  border: solid 1px;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-start: 2;
  grid-row-start: 2;
}

#top-label {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column-start: 2;
  text-align: center;
  height: 50px;
  margin-top: 20px;
}

#left-label {
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-row-start: 2;
  text-align: center;
}

.content {
  margin-bottom: 25px;
  width: 575px;
  display: grid;
  grid-template-columns: 75px 500px;
  grid-template-rows: 75px 500px;
}

.squares {
  border: solid 1px;
}

.miss {
  background-color: rgb(41, 37, 37);
}

p {
  pointer-events: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["body {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  min-width: 30vw;\n}\n\n.stats-container {\n  position: relative;\n  border: solid 1px black;\n  width: 300px;\n  height: 700px;\n}\n\n#players-div > p,\n#question-div > p,\n#info-div > p {\n  font-size: 20px;\n}\n\n#mode-select-div,\n#player-scores-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-top: 150px;\n}\n\n#info-div {\n  text-align: center;\n  width: 150px;\n  height: 150px;\n}\n\n#btn-container,\n#player-container-btns {\n  display: flex;\n  justify-content: space-between;\n  width: 150px;\n}\n\nbutton {\n  width: 70px;\n  height: 40px;\n  font-size: 14px;\n  border-radius: 5px;\n  background-color: rgb(255, 255, 255);\n}\n\n.board {\n  font-size: 36px;\n  border: solid 1px;\n  width: 500px;\n  height: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-column-start: 2;\n  grid-row-start: 2;\n}\n\n#top-label {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column-start: 2;\n  text-align: center;\n  height: 50px;\n  margin-top: 20px;\n}\n\n#left-label {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-row-start: 2;\n  text-align: center;\n}\n\n.content {\n  margin-bottom: 25px;\n  width: 575px;\n  display: grid;\n  grid-template-columns: 75px 500px;\n  grid-template-rows: 75px 500px;\n}\n\n.squares {\n  border: solid 1px;\n}\n\n.miss {\n  background-color: rgb(41, 37, 37);\n}\n\np {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");
/* eslint-disable no-restricted-syntax */


class GameBoard {
  constructor(owner, boardPosition) {
    this.owner = owner;
    this.boardPosition = boardPosition;
    this.grid = {};
    this.initGrid(this.length, this.width);
    this.sunkShips = 0;
    this.shipSet = new Set();
    this.totalShips = 0;
    this.selectedMoves = new Set();
    this.adjacentCoord = new Set();
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("attack-grid", (e) => this.receiveAttack(e));
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("reset-values", () => this.resetValues());
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("cpu-attack", (e) => this.cpuAttack(e));
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
    this.selectedMoves = null;
    this.selectedMoves = new Set();
    this.adjacentCoord = null;
    this.adjacentCoord = new Set();
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
      // Add coordinate to checkAdjacentCoord for AI behaviour
      this.adjacentCoord.add({ x: coord.x, y: coord.y });
    } else {
      this.grid[x][y].status = "miss";
    }
    // Update grid
    // Check player ships status
    this.updateGrid(owner);
    this.checkPlayerShips();
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
    let returnMove;
    let decidedMove = false;
    let checkedAdjacentMoves = false;

    // check adjacentcoord set with +-1 x,y.
    // then cross check the coord with selectedmoves set
    // if that adjacent coord isnt in selectedmoves then proceed.
    // otherwise if they're all matched up in both sets
    // continue to generate a random coord

    const checkAdjacentCoord = () => {
      // Check adjacent squares of previous hits
      for (const coord of this.adjacentCoord) {
        // Check if valid move
        let tempCoord = { owner: "bot", x: coord.x, y: coord.y };

        // Check if x is valid and is available
        if (coord.x + 1 <= 10) {
          tempCoord.x = coord.x + 1;
          if (!checkMoves(tempCoord)) {
            return tempCoord;
          }
        }

        if (coord.x - 1 > 0) {
          tempCoord.x = coord.x - 1;
          if (!checkMoves(tempCoord)) {
            return tempCoord;
          }
        }

        // Reset tempCoord.x
        tempCoord.x = coord.x;

        if (coord.y + 1 <= 10) {
          tempCoord.y = coord.y + 1;
          if (!checkMoves(tempCoord)) {
            return tempCoord;
          }
        }

        if (coord.y - 1 > 0) {
          tempCoord.y = coord.y - 1;
          if (!checkMoves(tempCoord)) {
            return tempCoord;
          }
        }
      }
    };

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

    if (this.selectedMoves.size >= 100) {
      // If all squares have been filled then return
      return;
    }

    while (!decidedMove) {
      let move;
      // Exit loop if all moves exhausted

      // If adjacent move to previous move pool found then return
      if (!checkedAdjacentMoves) {
        checkedAdjacentMoves = true;
        move = checkAdjacentCoord();
      }

      // Continue looping until a unique coordinate is found
      if (move == undefined) {
        move = randomCoord();
      }

      if (!checkMoves(move)) {
        // If move has been found then return move
        decidedMove = true;
        returnMove = move;
      }
    }

    this.selectedMoves.add(returnMove);

    return returnMove;
  }

  cpuAttack(boardCheck) {
    if (this.boardPosition == boardCheck) {
      const move = this.cpuMove();
      this.receiveAttack(move);
    }
  }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(name) {
    this.name = name;
  }
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
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


/***/ }),

/***/ "./src/gameBoardLayout.js":
/*!********************************!*\
  !*** ./src/gameBoardLayout.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    const topBoardShips = Array.from(topBoard.getElementsByClassName("ship"));
    const botBoardShips = Array.from(botBoard.getElementsByClassName("ship"));
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
        _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("info-update", `CPU's turn`);
      } else {
        _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("info-update", `Top Player's turn`);
      }

      // Set turn variables for next turn
      topBoardsTurn = true;
      botBoardsTurn = false;
    } else if (topBoardsTurn) {
      topBoard.style.pointerEvents = "auto";
      botBoard.style.pointerEvents = "none";
      if (cpuActive) {
        _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("info-update", `Your turn`);
      } else {
        _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("info-update", `Bottom Player's turn`);
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
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("cpu-attack", "bot");
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
    topBoardsTurn = false;
    botBoardsTurn = true;
    // clear board status and rebuild ships
    resetBoard();
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


/***/ }),

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


/***/ }),

/***/ "./src/statBoard.js":
/*!**************************!*\
  !*** ./src/statBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("new-game");
  });

  yesBtn.addEventListener("click", () => {
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
  });

  noBtn.addEventListener("click", () => {
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
  });

  resetBtn.addEventListener("click", () => {
    // Reset stats
    hidePlayerScoreDiv();
    showModeDiv();
    resetScores();

    // Switch button disabled states
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("cpu-off");
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("clear-board");
    infoText.textContent = "";
    startBtn.disabled = true;
    yesBtn.disabled = false;
    noBtn.disabled = false;
  });

  // Pubsub
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("game-over", gameOverCleanUp);
  _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("info-update", updateInfoText);

  // Hide player score div on init
  hidePlayerScoreDiv();

  return container;
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameBoardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardLayout */ "./src/gameBoardLayout.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameBoard */ "./src/GameBoard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _statBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statBoard */ "./src/statBoard.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");








// Create board layout
(0,_statBoard__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_gameBoardLayout__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Create players
let botPlayer = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]("PLAYER 1");
let topPlayer = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]("PLAYER 2");

// Gameboard setup
let botPlayerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_3__["default"](botPlayer, "bot");
let topPlayerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_3__["default"](topPlayer, "top");

// Bottom Player ships
let botShip1 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"]();
let botShip2 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"]();
let botShip3 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"]();
let botShip4 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"]();

// Top player ships
let topShip1 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"]();
let topShip2 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"]();
let topShip3 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"]();
let topShip4 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"]();

function newGame() {
  // Bottom player ships
  botShip1 = null;
  botShip2 = null;
  botShip3 = null;
  botShip4 = null;

  botShip1 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"](2);
  botShip2 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"](3);
  botShip3 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"](4);
  botShip4 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"](4);

  // Top player ships
  topShip1 = null;
  topShip2 = null;
  topShip3 = null;
  topShip4 = null;

  topShip1 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"](2);
  topShip2 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"](3);
  topShip3 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"](4);
  topShip4 = new _Ship__WEBPACK_IMPORTED_MODULE_4__["default"](4);

  _pubSub__WEBPACK_IMPORTED_MODULE_6__["default"].publish("reset-values");

  // Place player ships
  botPlayerBoard.placeShipDown(botShip1);
  botPlayerBoard.placeShipDown(botShip2);
  botPlayerBoard.placeShipRight(botShip3);
  botPlayerBoard.placeShipRight(botShip4);

  // Place CPU ships
  topPlayerBoard.placeShipDown(topShip1);
  topPlayerBoard.placeShipDown(topShip2);
  topPlayerBoard.placeShipRight(topShip3);
  topPlayerBoard.placeShipRight(topShip4);

  // Update both grids
  botPlayerBoard.updateGrid("bot");
  topPlayerBoard.updateGrid("top");
}

_pubSub__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe("new-game", newGame);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBRTtBQUNWLFFBQVE7QUFDUixRQUFRLCtDQUFFO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQUU7QUFDVixRQUFRO0FBQ1IsUUFBUSwrQ0FBRTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBRTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLE1BQU0sK0NBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QixNQUFNLCtDQUFFO0FBQ1I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtDQUFFO0FBQ0osRUFBRSwrQ0FBRTtBQUNKLEVBQUUsK0NB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Q1Y7O0FBRTFCO0FBQ0Esc0RBQVM7QUFDVCw0REFBWTs7QUFFWjtBQUNBLG9CQUFvQiwrQ0FBTTtBQUMxQixvQkFBb0IsK0NBQU07O0FBRTFCO0FBQ0EseUJBQXlCLGtEQUFTO0FBQ2xDLHlCQUF5QixrREFBUzs7QUFFbEM7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkIsbUJBQW1CLDZDQUFJO0FBQ3ZCLG1CQUFtQiw2Q0FBSTtBQUN2QixtQkFBbUIsNkNBQUk7O0FBRXZCO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCLG1CQUFtQiw2Q0FBSTtBQUN2QixtQkFBbUIsNkNBQUk7QUFDdkIsbUJBQW1CLDZDQUFJOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDZDQUFJO0FBQ3JCLGlCQUFpQiw2Q0FBSTtBQUNyQixpQkFBaUIsNkNBQUk7QUFDckIsaUJBQWlCLDZDQUFJOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw2Q0FBSTtBQUNyQixpQkFBaUIsNkNBQUk7QUFDckIsaUJBQWlCLDZDQUFJO0FBQ3JCLGlCQUFpQiw2Q0FBSTs7QUFFckIsRUFBRSwrQ0FBRTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZExheW91dC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0YXRCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzB2dztcbn1cblxuLnN0YXRzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cblxuI3BsYXllcnMtZGl2ID4gcCxcbiNxdWVzdGlvbi1kaXYgPiBwLFxuI2luZm8tZGl2ID4gcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI21vZGUtc2VsZWN0LWRpdixcbiNwbGF5ZXItc2NvcmVzLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbiNpbmZvLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4jYnRuLWNvbnRhaW5lcixcbiNwbGF5ZXItY29udGFpbmVyLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmJvYXJkIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLXJvdy1zdGFydDogMjtcbn1cblxuI3RvcC1sYWJlbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNsZWZ0LWxhYmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgd2lkdGg6IDU3NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggNTAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCA1MDBweDtcbn1cblxuLnNxdWFyZXMge1xuICBib3JkZXI6IHNvbGlkIDFweDtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM3LCAzNyk7XG59XG5cbnAge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMzB2dztcXG59XFxuXFxuLnN0YXRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNzAwcHg7XFxufVxcblxcbiNwbGF5ZXJzLWRpdiA+IHAsXFxuI3F1ZXN0aW9uLWRpdiA+IHAsXFxuI2luZm8tZGl2ID4gcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNtb2RlLXNlbGVjdC1kaXYsXFxuI3BsYXllci1zY29yZXMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcXG59XFxuXFxuI2luZm8tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbiNidG4tY29udGFpbmVyLFxcbiNwbGF5ZXItY29udGFpbmVyLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbn1cXG5cXG4jdG9wLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2xlZnQtbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICB3aWR0aDogNTc1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDUwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IDUwMHB4O1xcbn1cXG5cXG4uc3F1YXJlcyB7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAzNywgMzcpO1xcbn1cXG5cXG5wIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3Iob3duZXIsIGJvYXJkUG9zaXRpb24pIHtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5ib2FyZFBvc2l0aW9uID0gYm9hcmRQb3NpdGlvbjtcbiAgICB0aGlzLmdyaWQgPSB7fTtcbiAgICB0aGlzLmluaXRHcmlkKHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoKTtcbiAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy5zaGlwU2V0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMudG90YWxTaGlwcyA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZE1vdmVzID0gbmV3IFNldCgpO1xuICAgIHRoaXMuYWRqYWNlbnRDb29yZCA9IG5ldyBTZXQoKTtcbiAgICBwcy5zdWJzY3JpYmUoXCJhdHRhY2stZ3JpZFwiLCAoZSkgPT4gdGhpcy5yZWNlaXZlQXR0YWNrKGUpKTtcbiAgICBwcy5zdWJzY3JpYmUoXCJyZXNldC12YWx1ZXNcIiwgKCkgPT4gdGhpcy5yZXNldFZhbHVlcygpKTtcbiAgICBwcy5zdWJzY3JpYmUoXCJjcHUtYXR0YWNrXCIsIChlKSA9PiB0aGlzLmNwdUF0dGFjayhlKSk7XG4gIH1cblxuICByZXNldFZhbHVlcygpIHtcbiAgICAvLyBSZXNldCBzaGlwIHNldFxuICAgIHRoaXMuc2hpcFNldCA9IG51bGw7XG4gICAgdGhpcy5zaGlwU2V0ID0gbmV3IFNldCgpO1xuXG4gICAgLy8gUmVzZXQgZ3JpZFxuICAgIHRoaXMuZ3JpZCA9IHt9O1xuICAgIHRoaXMuaW5pdEdyaWQodGhpcy5sZW5ndGgsIHRoaXMud2lkdGgpO1xuXG4gICAgLy8gUmVzZXQgdmFyaWFibGVzXG4gICAgdGhpcy5zdW5rU2hpcHMgPSAwO1xuICAgIHRoaXMudG90YWxTaGlwcyA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZE1vdmVzID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5hZGphY2VudENvb3JkID0gbnVsbDtcbiAgICB0aGlzLmFkamFjZW50Q29vcmQgPSBuZXcgU2V0KCk7XG4gIH1cblxuICBpbml0R3JpZCgpIHtcbiAgICAvLyBDcmVhdGUgYSAxMHgxMCBncmlkXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgdGhpcy5ncmlkW3hdID0ge307XG4gICAgICBmb3IgKGxldCB5ID0gMTsgeSA8PSAxMDsgeSsrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQ29vcmRzKCkge1xuICAgIC8vIEdlbmVyYXRlIGNvb3JkaW5hdGVzXG4gICAgbGV0IG51bVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgIGxldCBudW1ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICBsZXQgYWJzRGlmZmVyZW5jZSA9IE1hdGguYWJzKG51bVggLSBudW1ZKTtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSBbbnVtWCwgbnVtWV07XG5cbiAgICB3aGlsZSAoYWJzRGlmZmVyZW5jZSA+IDQgfHwgYWJzRGlmZmVyZW5jZSA9PSAwKSB7XG4gICAgICBudW1YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgIG51bVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgYWJzRGlmZmVyZW5jZSA9IE1hdGguYWJzKG51bVggLSBudW1ZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBwbGFjZVNoaXBEb3duKHNoaXAsIHgsIHkpIHtcbiAgICAvLyBHZW5lcmF0ZSBjb29yZGluYXRlcyBpZiBudWxsXG4gICAgaWYgKCh4ICYmIHkpID09IG51bGwpIFt4LCB5XSA9IHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcblxuICAgIC8vIENoZWNrIGlmIHkgY29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzXG4gICAgaWYgKHkgLSBzaGlwLmxlbmd0aCArIDEgPD0gMCkge1xuICAgICAgLy8gTW9kaWZ5IGNvb3JkaW5hdGVcbiAgICAgIHkgKz0gTWF0aC5hYnMoeSAtIHNoaXAubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhbm90aGVyIHNoaXAgaGFzIG9jY3VwaWVkIHRoZSBzcXVhcmVcbiAgICBsZXQgb3ZlcmxhcCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ3JpZFt4XVt5IC0gaV0ubGVuZ3RoKSB7XG4gICAgICAgIG92ZXJsYXAgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBvdmVybGFwIHRoZW4gY2hhbmdlIHggY29vcmRpbmF0ZVxuICAgIGlmIChvdmVybGFwKSB7XG4gICAgICBjb25zdCBuZXdYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgIHRoaXMucGxhY2VTaGlwRG93bihzaGlwLCBuZXdYLCB5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQbGFjZSBzaGlwIGRvd253YXJkc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW3hdW3kgLSBpXSA9IHNoaXA7XG4gICAgfVxuICAgIHRoaXMuc2hpcFNldC5hZGQoc2hpcCk7XG4gICAgdGhpcy50b3RhbFNoaXBzICs9IDE7XG4gIH1cblxuICBwbGFjZVNoaXBSaWdodChzaGlwLCB4LCB5KSB7XG4gICAgLy8gR2VuZXJhdGUgY29vcmRpbmF0ZXMgaWYgbnVsbFxuICAgIGlmICgoeCAmJiB5KSA9PSBudWxsKSBbeCwgeV0gPSB0aGlzLmdlbmVyYXRlQ29vcmRzKCk7XG5cbiAgICAvLyBDaGVjayBpZiB4IGNvb3JkaW5hdGUgaXMgb3V0IG9mIGJvdW5kc1xuICAgIGlmICh4ICsgc2hpcC5sZW5ndGggLSAxID4gMTApIHtcbiAgICAgIC8vIE1vZGlmeSBjb29yZGluYXRlXG4gICAgICB4IC09IHggKyBzaGlwLmxlbmd0aCAtIDExO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFub3RoZXIgc2hpcCBoYXMgb2NjdXBpZWQgdGhlIHNxdWFyZVxuICAgIGxldCBvdmVybGFwID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ncmlkW3ggKyBpXVt5XS5sZW5ndGgpIHtcbiAgICAgICAgb3ZlcmxhcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG92ZXJsYXAgdGhlbiBjaGFuZ2UgeCBjb29yZGluYXRlXG4gICAgaWYgKG92ZXJsYXApIHtcbiAgICAgIGNvbnN0IG5ld1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgdGhpcy5wbGFjZVNoaXBSaWdodChzaGlwLCB4LCBuZXdZKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQbGFjZSBzaGlwIHJpZ2h0d2FyZHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ3JpZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgIH1cbiAgICB0aGlzLnNoaXBTZXQuYWRkKHNoaXApO1xuICAgIHRoaXMudG90YWxTaGlwcyArPSAxO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgIGNvbnN0IHsgeCB9ID0gY29vcmQ7XG4gICAgY29uc3QgeyB5IH0gPSBjb29yZDtcbiAgICBjb25zdCB7IG93bmVyIH0gPSBjb29yZDtcbiAgICBpZiAob3duZXIgIT09IHRoaXMuYm9hcmRQb3NpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBhIGNvb3JkaW5hdGUgaGl0IG9yIG1pc3MgYSBzaGlwXG4gICAgaWYgKHRoaXMuZ3JpZFt4XVt5XS5zdGF0dXMgPT0gXCJoaXRcIiB8fCB0aGlzLmdyaWRbeF1beV0uc3RhdHVzID09IFwibWlzc1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChPYmplY3QudmFsdWVzKHRoaXMuZ3JpZFt4XVt5XSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGhpdCBvciBtaXNzIHRoZW4gZG8gbm90aGluZ1xuICAgICAgLy8gc2hpcC5oaXRzICs9IDE7XG4gICAgICB0aGlzLmdyaWRbeF1beV0uaGl0KCk7XG4gICAgICB0aGlzLmdyaWRbeF1beV0uaXNTdW5rKCk7XG4gICAgICBjb25zdCBncmlkT2JqID0geyBzdGF0dXM6IFwiaGl0XCIgfTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IGdyaWRPYmo7XG4gICAgICAvLyBBZGQgY29vcmRpbmF0ZSB0byBjaGVja0FkamFjZW50Q29vcmQgZm9yIEFJIGJlaGF2aW91clxuICAgICAgdGhpcy5hZGphY2VudENvb3JkLmFkZCh7IHg6IGNvb3JkLngsIHk6IGNvb3JkLnkgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5zdGF0dXMgPSBcIm1pc3NcIjtcbiAgICB9XG4gICAgLy8gVXBkYXRlIGdyaWRcbiAgICAvLyBDaGVjayBwbGF5ZXIgc2hpcHMgc3RhdHVzXG4gICAgdGhpcy51cGRhdGVHcmlkKG93bmVyKTtcbiAgICB0aGlzLmNoZWNrUGxheWVyU2hpcHMoKTtcbiAgfVxuXG4gIGNoZWNrUGxheWVyU2hpcHMoKSB7XG4gICAgLy8gQ2hlY2sgaWYgc2hpcHMgc3VuayB0aGVuIHB1c2ggdG8gYXJyYXlcbiAgICB0aGlzLnNoaXBTZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuc3VuayA9PSB0cnVlICYmIHNoaXAubGVuZ3RoID09IHNoaXAuaGl0cykge1xuICAgICAgICB0aGlzLnN1bmtTaGlwcyArPSAxO1xuICAgICAgICB0aGlzLnNoaXBTZXQuZGVsZXRlKHNoaXApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2hlY2sgaWYgbnVtYmVyIG9mIHN1bmsgc2hpcHMgaXMgZXF1YWwgdG8gbnVtYmVyIG9mIGFsbCBzaGlwcyBvbiBib2FyZFxuICAgIGlmICh0aGlzLnN1bmtTaGlwcyA9PSB0aGlzLnRvdGFsU2hpcHMpIHtcbiAgICAgIHBzLnB1Ymxpc2goXCJnYW1lLW92ZXJcIiwgdGhpcy5ib2FyZFBvc2l0aW9uKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVHcmlkKGVsZW0pIHtcbiAgICAvLyBQdWJsaXNoIHVwZGF0ZWQgZ3JpZCB2YWx1ZXNcbiAgICBjb25zdCBvYmogPSB7IG93bmVyOiB0aGlzLm93bmVyLCBncmlkOiB0aGlzLmdyaWQsIGVsZW0gfTtcbiAgICBwcy5wdWJsaXNoKFwidXBkYXRlLWJvYXJkXCIsIG9iaik7XG4gIH1cblxuICAvLyBBSSBsb2dpY1xuICBjcHVNb3ZlKHggPSAxMCwgeSA9IDEwKSB7XG4gICAgbGV0IHJldHVybk1vdmU7XG4gICAgbGV0IGRlY2lkZWRNb3ZlID0gZmFsc2U7XG4gICAgbGV0IGNoZWNrZWRBZGphY2VudE1vdmVzID0gZmFsc2U7XG5cbiAgICAvLyBjaGVjayBhZGphY2VudGNvb3JkIHNldCB3aXRoICstMSB4LHkuXG4gICAgLy8gdGhlbiBjcm9zcyBjaGVjayB0aGUgY29vcmQgd2l0aCBzZWxlY3RlZG1vdmVzIHNldFxuICAgIC8vIGlmIHRoYXQgYWRqYWNlbnQgY29vcmQgaXNudCBpbiBzZWxlY3RlZG1vdmVzIHRoZW4gcHJvY2VlZC5cbiAgICAvLyBvdGhlcndpc2UgaWYgdGhleSdyZSBhbGwgbWF0Y2hlZCB1cCBpbiBib3RoIHNldHNcbiAgICAvLyBjb250aW51ZSB0byBnZW5lcmF0ZSBhIHJhbmRvbSBjb29yZFxuXG4gICAgY29uc3QgY2hlY2tBZGphY2VudENvb3JkID0gKCkgPT4ge1xuICAgICAgLy8gQ2hlY2sgYWRqYWNlbnQgc3F1YXJlcyBvZiBwcmV2aW91cyBoaXRzXG4gICAgICBmb3IgKGNvbnN0IGNvb3JkIG9mIHRoaXMuYWRqYWNlbnRDb29yZCkge1xuICAgICAgICAvLyBDaGVjayBpZiB2YWxpZCBtb3ZlXG4gICAgICAgIGxldCB0ZW1wQ29vcmQgPSB7IG93bmVyOiBcImJvdFwiLCB4OiBjb29yZC54LCB5OiBjb29yZC55IH07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgeCBpcyB2YWxpZCBhbmQgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChjb29yZC54ICsgMSA8PSAxMCkge1xuICAgICAgICAgIHRlbXBDb29yZC54ID0gY29vcmQueCArIDE7XG4gICAgICAgICAgaWYgKCFjaGVja01vdmVzKHRlbXBDb29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wQ29vcmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3JkLnggLSAxID4gMCkge1xuICAgICAgICAgIHRlbXBDb29yZC54ID0gY29vcmQueCAtIDE7XG4gICAgICAgICAgaWYgKCFjaGVja01vdmVzKHRlbXBDb29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wQ29vcmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgdGVtcENvb3JkLnhcbiAgICAgICAgdGVtcENvb3JkLnggPSBjb29yZC54O1xuXG4gICAgICAgIGlmIChjb29yZC55ICsgMSA8PSAxMCkge1xuICAgICAgICAgIHRlbXBDb29yZC55ID0gY29vcmQueSArIDE7XG4gICAgICAgICAgaWYgKCFjaGVja01vdmVzKHRlbXBDb29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wQ29vcmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3JkLnkgLSAxID4gMCkge1xuICAgICAgICAgIHRlbXBDb29yZC55ID0gY29vcmQueSAtIDE7XG4gICAgICAgICAgaWYgKCFjaGVja01vdmVzKHRlbXBDb29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wQ29vcmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbUNvb3JkID0gKCkgPT4ge1xuICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIGNvb3JkaW5hdGVzXG4gICAgICBjb25zdCBvYmogPSB7IG93bmVyOiBcImJvdFwiIH07XG4gICAgICBjb25zdCBjb29yZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KSArIDE7XG4gICAgICBjb25zdCBjb29yZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB5KSArIDE7XG4gICAgICBvYmoueCA9IGNvb3JkWDtcbiAgICAgIG9iai55ID0gY29vcmRZO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tNb3ZlcyA9IChuZXdNb3ZlKSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlcyBoYXZlIGJlZW4gc2VsZWN0ZWQgcHJldmlvdXNseVxuICAgICAgZm9yIChjb25zdCBtb3ZlIG9mIHRoaXMuc2VsZWN0ZWRNb3Zlcykge1xuICAgICAgICBpZiAobW92ZS54ID09PSBuZXdNb3ZlLnggJiYgbW92ZS55ID09PSBuZXdNb3ZlLnkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZE1vdmVzLnNpemUgPj0gMTAwKSB7XG4gICAgICAvLyBJZiBhbGwgc3F1YXJlcyBoYXZlIGJlZW4gZmlsbGVkIHRoZW4gcmV0dXJuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2hpbGUgKCFkZWNpZGVkTW92ZSkge1xuICAgICAgbGV0IG1vdmU7XG4gICAgICAvLyBFeGl0IGxvb3AgaWYgYWxsIG1vdmVzIGV4aGF1c3RlZFxuXG4gICAgICAvLyBJZiBhZGphY2VudCBtb3ZlIHRvIHByZXZpb3VzIG1vdmUgcG9vbCBmb3VuZCB0aGVuIHJldHVyblxuICAgICAgaWYgKCFjaGVja2VkQWRqYWNlbnRNb3Zlcykge1xuICAgICAgICBjaGVja2VkQWRqYWNlbnRNb3ZlcyA9IHRydWU7XG4gICAgICAgIG1vdmUgPSBjaGVja0FkamFjZW50Q29vcmQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udGludWUgbG9vcGluZyB1bnRpbCBhIHVuaXF1ZSBjb29yZGluYXRlIGlzIGZvdW5kXG4gICAgICBpZiAobW92ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbW92ZSA9IHJhbmRvbUNvb3JkKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghY2hlY2tNb3Zlcyhtb3ZlKSkge1xuICAgICAgICAvLyBJZiBtb3ZlIGhhcyBiZWVuIGZvdW5kIHRoZW4gcmV0dXJuIG1vdmVcbiAgICAgICAgZGVjaWRlZE1vdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm5Nb3ZlID0gbW92ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMuYWRkKHJldHVybk1vdmUpO1xuXG4gICAgcmV0dXJuIHJldHVybk1vdmU7XG4gIH1cblxuICBjcHVBdHRhY2soYm9hcmRDaGVjaykge1xuICAgIGlmICh0aGlzLmJvYXJkUG9zaXRpb24gPT0gYm9hcmRDaGVjaykge1xuICAgICAgY29uc3QgbW92ZSA9IHRoaXMuY3B1TW92ZSgpO1xuICAgICAgdGhpcy5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHRoaXMuY29sb3VyID0gYHJnYigkeyhNYXRoLnJhbmRvbSgpICogMjU2KSB8IDB9LCAke1xuICAgICAgKE1hdGgucmFuZG9tKCkgKiAyNTYpIHwgMFxuICAgIH0sICR7KE1hdGgucmFuZG9tKCkgKiAyNTYpIHwgMH0pYDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICAvLyBDaGVjayBpZiBoaXRzID4gbGVuZ3RoXG4gICAgLy8gSGl0IHRhcmdldFxuICAgIHRoaXMuaGl0cyArPSAxO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIC8vIENoZWNrIGlmIHNoaXAgaGl0cyA+PSBsZW5ndGggdGhlbiBpdCdzIHN1bmtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG4iLCJpbXBvcnQgcHMgZnJvbSBcIi4vcHViU3ViXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAvLyBDcmVhdGUgZ2FtZSBjb250ZW50IGJvYXJkXG4gIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVswXTtcbiAgbGV0IHRvcEJvYXJkID0gZ2VuZXJhdGVCb2FyZChcInRvcFwiKTtcbiAgbGV0IGJvdEJvYXJkID0gZ2VuZXJhdGVCb2FyZChcImJvdFwiKTtcbiAgbGV0IGRpc2FibGVBbGxCb2FyZHMgPSB0cnVlO1xuICBsZXQgcGxheWVyTW92ZWQgPSBmYWxzZTtcbiAgbGV0IGNwdUFjdGl2ZSA9IGZhbHNlO1xuICBsZXQgdG9wQm9hcmRzVHVybiA9IGZhbHNlO1xuICBsZXQgYm90Qm9hcmRzVHVybiA9IGZhbHNlO1xuXG4gIGJvYXJkRGl2LmFwcGVuZENoaWxkKHRvcEJvYXJkKTtcbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoYm90Qm9hcmQpO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoaWQpIHtcbiAgICAvLyBDcmVhdGUgYm9hcmRcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnRcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib2FyZFwiKTtcblxuICAgIC8vIENyZWF0ZSBzcXVhcmVzXG4gICAgZm9yIChsZXQgeSA9IDEwOyB5ID4gMDsgeS0tKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNxdWFyZXNcIik7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgeCk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgeSk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxhYmVsc1xuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgIGNvbnN0IGxlZnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdC1sYWJlbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbGV0dGVyLnRleHRDb250ZW50ID0gbGV0dGVyc1tpXTtcbiAgICAgIGxlZnRMYWJlbC5hcHBlbmRDaGlsZChsZXR0ZXIpO1xuICAgIH1cbiAgICBjb25zdCB0b3BMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b3AtbGFiZWxcIik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBpO1xuICAgICAgdG9wTGFiZWwuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgb2JqZWN0cyB0byB0b3AgYm9hcmRcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0TGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BMYWJlbCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQm9hcmQob2JqKSB7XG4gICAgLy8gVXBkYXRlIGJvYXJkIGVsZW1lbnRzXG5cbiAgICBjb25zdCBjb250ZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5lbGVtKTtcbiAgICBjb25zdCBib2FyZEVsZW0gPSBjb250ZW50RWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYm9hcmRcIilbMF07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb29yZGluYXRlKG9iaiwgeCwgeSkge1xuICAgICAgLy8gVXBkYXRlIGNvb3JkaW5hdGUgd2l0aCBvYmpcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBib2FyZEVsZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgZGF0YVggPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgICAgY29uc3QgZGF0YVkgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKTtcblxuICAgICAgICBpZiAoZGF0YVggPT0geCAmJiBkYXRhWSA9PSB5KSB7XG4gICAgICAgICAgLy8gQXBwZW5kIG9iaiBkYXRhIHRvIHRoZSBzcXVhcmVzIHdpdGggY2xhc3Nlc1xuXG4gICAgICAgICAgaWYgKG9iai5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIElmIEFJIGFjdGl2ZSB0aGVuIGhpZGUgdG9wIGJvYXJkIHNoaXBzXG4gICAgICAgICAgICBpZiAoY3B1QWN0aXZlICYmIGNvbnRlbnRFbGVtLmlkID09IFwidG9wXCIpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImNvbG91clwiLCBvYmouY29sb3VyKTtcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvYmouY29sb3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob2JqLnN0YXR1cyA9PSBcImhpdFwiKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE3NSwgMTI5LCAxMjkpXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvYmouc3RhdHVzID09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBib2FyZCBjb29yZGluYXRlc1xuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgLy8gRm9yIGVhY2ggeCAmIHkgY29vcmRpbmF0ZVxuICAgICAgICAvLyBpZiAob2JqLmRhdGFbeF1beV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGhpdC9taXNzIG9yIHNoaXAgb2JqZWN0XG5cbiAgICAgICAgdXBkYXRlQ29vcmRpbmF0ZShvYmouZ3JpZFt4XVt5XSwgeCwgeSk7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggYWN0aXZlIGJvYXJkIHN0YXRlXG4gICAgc3dpdGNoQWN0aXZlQm9hcmQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaEhpZGRlbkJvYXJkKCkge1xuICAgIC8vIElmIHB2cCBtb2RlIHRoZW4gaGlkZSBzaGlwcyBvbiBib2FyZCwgZGlzYWJsZSBhbGwgaW5wdXRcbiAgICBjb25zdCB0b3BCb2FyZFNoaXBzID0gQXJyYXkuZnJvbSh0b3BCb2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2hpcFwiKSk7XG4gICAgY29uc3QgYm90Qm9hcmRTaGlwcyA9IEFycmF5LmZyb20oYm90Qm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNoaXBcIikpO1xuICAgIHRvcEJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgICAvLyBUZW1wIGhpZGUgc2hpcHNcbiAgICB0b3BCb2FyZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTc1LCAxMjksIDEyOSlcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBib3RCb2FyZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTc1LCAxMjksIDEyOSlcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBXYWl0IDIgc2Vjb25kcyB0aGVuIGRpc3BsYXkgc2hpcCBzdGF0dXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChib3RCb2FyZHNUdXJuKSB7XG4gICAgICAgIC8vIFRvcCBib2FyZCdzIHR1cm5cbiAgICAgICAgdG9wQm9hcmRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2hpcENvbG91ciA9IHNoaXAuZ2V0QXR0cmlidXRlKFwiY29sb3VyXCIpO1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2hpcENvbG91cjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBib3RCb2FyZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0b3BCb2FyZHNUdXJuKSB7XG4gICAgICAgIC8vIEJvdHRvbSBib2FyZCdzIHR1cm5cbiAgICAgICAgdG9wQm9hcmRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYm90Qm9hcmRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2hpcENvbG91ciA9IHNoaXAuZ2V0QXR0cmlidXRlKFwiY29sb3VyXCIpO1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2hpcENvbG91cjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlzYWJsZUFsbEJvYXJkcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaFBsYXllckNvbnRyb2woKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFBsYXllckNvbnRyb2woKSB7XG4gICAgLy8gU3dpdGNoIHBsYXllciBjb250cm9sXG4gICAgaWYgKGJvdEJvYXJkc1R1cm4pIHtcbiAgICAgIC8vIFRvcCBib2FyZHMgdHVyblxuICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgYm90Qm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgaWYgKGNwdUFjdGl2ZSkge1xuICAgICAgICBwcy5wdWJsaXNoKFwiaW5mby11cGRhdGVcIiwgYENQVSdzIHR1cm5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgVG9wIFBsYXllcidzIHR1cm5gKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHR1cm4gdmFyaWFibGVzIGZvciBuZXh0IHR1cm5cbiAgICAgIHRvcEJvYXJkc1R1cm4gPSB0cnVlO1xuICAgICAgYm90Qm9hcmRzVHVybiA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodG9wQm9hcmRzVHVybikge1xuICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgYm90Qm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgaWYgKGNwdUFjdGl2ZSkge1xuICAgICAgICBwcy5wdWJsaXNoKFwiaW5mby11cGRhdGVcIiwgYFlvdXIgdHVybmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHMucHVibGlzaChcImluZm8tdXBkYXRlXCIsIGBCb3R0b20gUGxheWVyJ3MgdHVybmApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdHVybiB2YXJpYWJsZXMgZm9yIG5leHQgdHVyblxuICAgICAgdG9wQm9hcmRzVHVybiA9IGZhbHNlO1xuICAgICAgYm90Qm9hcmRzVHVybiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoQWN0aXZlQm9hcmQoKSB7XG4gICAgLy8gU3dpdGNoIGFjdGl2ZSBib2FyZHNcbiAgICBpZiAoZGlzYWJsZUFsbEJvYXJkcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHB2cCBtb2RlIGVuYWJsZWRcbiAgICBpZiAoIWNwdUFjdGl2ZSkge1xuICAgICAgc3dpdGNoSGlkZGVuQm9hcmQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBBSSBhY3RpdmUgdGhlbiBhdHRhY2tcbiAgICBpZiAoY3B1QWN0aXZlKSB7XG4gICAgICBzd2l0Y2hQbGF5ZXJDb250cm9sKCk7XG4gICAgICBpZiAocGxheWVyTW92ZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChjcHVBdHRhY2ssIDgwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZUJvYXJkcygpIHtcbiAgICAvLyBHYW1lIGVuZFxuICAgIGRpc2FibGVBbGxCb2FyZHMgPSB0cnVlO1xuICAgIHRvcEJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEJvYXJkKCkge1xuICAgIC8vIENsZWFyIGJvdGggYm9hcmRzIGZyb20gY29udGFpbmVyXG4gICAgd2hpbGUgKGJvYXJkRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGJvYXJkRGl2LnJlbW92ZUNoaWxkKGJvYXJkRGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgdG9wQm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwidG9wXCIpO1xuICAgIGJvdEJvYXJkID0gZ2VuZXJhdGVCb2FyZChcImJvdFwiKTtcblxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKHRvcEJvYXJkKTtcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChib3RCb2FyZCk7XG4gIH1cblxuICAvLyBBSSBNb3ZlXG4gIGZ1bmN0aW9uIGNwdUF0dGFjaygpIHtcbiAgICAvLyBDaGVjayBpZiBnYW1lIGhhcyBlbmRlZFxuICAgIGlmIChkaXNhYmxlQWxsQm9hcmRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGFzcyB0dXJuIGJhY2sgdG8gcGxheWVyIGFuZCBhdHRhY2tcbiAgICBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtYXR0YWNrXCIsIFwiYm90XCIpO1xuICB9XG5cbiAgLy8gTW91c2UgZXZlbnRzXG4gIGJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudEJvYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnRCb2FyZC5pZCA9PSBcInRvcFwiKSB7XG4gICAgICBjb25zdCBkYXRhWCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgICAgY29uc3QgZGF0YVkgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0geyBvd25lcjogXCJ0b3BcIiwgeDogZGF0YVgsIHk6IGRhdGFZIH07XG5cbiAgICAgIC8vIFBsYXllciBoYXMgbW92ZWQgKEFJIGNoZWNrKVxuICAgICAgcGxheWVyTW92ZWQgPSB0cnVlO1xuICAgICAgcHMucHVibGlzaChcImF0dGFjay1ncmlkXCIsIGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gICAgLy8gRGlzYWJsZSBjaGVja2luZyBib3QgYm9hcmQgaWYgQUkgYWN0aXZlXG4gICAgaWYgKHBhcmVudEJvYXJkLmlkID09IFwiYm90XCIgJiYgY3B1QWN0aXZlID09IGZhbHNlKSB7XG4gICAgICBjb25zdCBkYXRhWCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgICAgY29uc3QgZGF0YVkgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0geyBvd25lcjogXCJib3RcIiwgeDogZGF0YVgsIHk6IGRhdGFZIH07XG5cbiAgICAgIHBzLnB1Ymxpc2goXCJhdHRhY2stZ3JpZFwiLCBjb29yZGluYXRlcyk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZGlzYWJsZUFsbEJvYXJkcyA9IGZhbHNlO1xuICAgIHBsYXllck1vdmVkID0gZmFsc2U7XG4gICAgdG9wQm9hcmRzVHVybiA9IGZhbHNlO1xuICAgIGJvdEJvYXJkc1R1cm4gPSB0cnVlO1xuICAgIC8vIGNsZWFyIGJvYXJkIHN0YXR1cyBhbmQgcmVidWlsZCBzaGlwc1xuICAgIHJlc2V0Qm9hcmQoKTtcbiAgfVxuXG4gIGRpc2FibGVCb2FyZHMoKTtcbiAgcHMuc3Vic2NyaWJlKFwidXBkYXRlLWJvYXJkXCIsIHVwZGF0ZUJvYXJkKTtcbiAgcHMuc3Vic2NyaWJlKFwiZ2FtZS1vdmVyXCIsIGRpc2FibGVCb2FyZHMpO1xuICBwcy5zdWJzY3JpYmUoXCJuZXctZ2FtZVwiLCBzdGFydEdhbWUpO1xuICBwcy5zdWJzY3JpYmUoXCJjbGVhci1ib2FyZFwiLCByZXNldEJvYXJkKTtcbiAgcHMuc3Vic2NyaWJlKFwiY3B1LW9uXCIsICgpID0+IHtcbiAgICBjcHVBY3RpdmUgPSB0cnVlO1xuICB9KTtcbiAgcHMuc3Vic2NyaWJlKFwiY3B1LW9mZlwiLCAoKSA9PiB7XG4gICAgY3B1QWN0aXZlID0gZmFsc2U7XG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gcHViU3ViKCkge1xuICBjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBwdWJsaXNoLCBzdWJzY3JpYmUgfTtcbn1cblxuY29uc3Qgc2hhcmVkUHViU3ViID0gcHViU3ViKCk7XG5leHBvcnQgZGVmYXVsdCBzaGFyZWRQdWJTdWI7XG4iLCJpbXBvcnQgcHMgZnJvbSBcIi4vcHViU3ViXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRCb2FyZCgpIHtcbiAgLy8gSW5pdGlhbCB2YXJpYWJsZXNcbiAgbGV0IHRvcFBsYXllck5hbWUgPSBcIlRvcCBwbGF5ZXJcIjtcbiAgbGV0IGJvdFBsYXllck5hbWUgPSBcIkJvdHRvbSBwbGF5ZXJcIjtcbiAgbGV0IHRvcFBsYXllclNjb3JlID0gMDtcbiAgbGV0IGJvdFBsYXllclNjb3JlID0gMDtcblxuICAvLyBNYWluIGNvbnRhaW5lclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhdHMtY29udGFpbmVyXCIpWzBdO1xuXG4gIC8vIFBsYXllciBzdGF0cyBjb250YWluZXJcbiAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLXNjb3Jlcy1kaXZcIik7XG5cbiAgY29uc3QgcGxheWVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllcnNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXJzLWRpdlwiKTtcblxuICBjb25zdCB0b3BQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9wUGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wLXBsYXllclwiKTtcbiAgdG9wUGxheWVyLnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX06ICR7dG9wUGxheWVyU2NvcmV9YDtcblxuICBjb25zdCBib3RQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYm90UGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm90LXBsYXllclwiKTtcbiAgYm90UGxheWVyLnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX06ICR7Ym90UGxheWVyU2NvcmV9YDtcblxuICBwbGF5ZXJzRGl2LmFwcGVuZENoaWxkKHRvcFBsYXllcik7XG4gIHBsYXllcnNEaXYuYXBwZW5kQ2hpbGQoYm90UGxheWVyKTtcbiAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllcnNEaXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcblxuICAvLyBNb2RlIHNlbGVjdCBjb250YWluZXJcbiAgY29uc3QgbW9kZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RlLXNlbGVjdC1kaXZcIik7XG5cbiAgLy8gTW9kZSBzZWxlY3QgcXVlc3Rpb25cbiAgY29uc3QgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBxdWVzdGlvbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInF1ZXN0aW9uLWRpdlwiKTtcbiAgY29uc3QgcXVlc3Rpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHF1ZXN0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiVmVyc2UgQ1BVP1wiO1xuICBxdWVzdGlvbkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvblRleHQpO1xuXG4gIC8vIE1vZGUgc2VsZWN0IGJ1dHRvbnNcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnRuLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgeWVzQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwieWVzLWJ0blwiKTtcbiAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbiAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBub0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vLWJ0blwiKTtcbiAgbm9CdG4udGV4dENvbnRlbnQgPSBcIk5vXCI7XG5cbiAgbW9kZURpdi5hcHBlbmRDaGlsZChxdWVzdGlvbkRpdik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQobm9CdG4pO1xuICBtb2RlRGl2LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RlRGl2KTtcblxuICAvLyBQbGF5ZXIgY29udGFpbmVyIGJ1dHRvbnNcbiAgY29uc3QgcGxheWVyQ29udGFpbmVyQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckNvbnRhaW5lckJ0bnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItY29udGFpbmVyLWJ0bnNcIik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXJCdG5zKTtcblxuICAvLyBTdGFydCBidXR0b25cbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IEdhbWVcIjtcbiAgc3RhcnRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGFydC1idG5cIik7XG4gIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgcGxheWVyQ29udGFpbmVyQnRucy5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG5cbiAgLy8gUmVzZXQgYnV0dG9uXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVzZXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNldC1idG5cIik7XG4gIHJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICBwbGF5ZXJDb250YWluZXJCdG5zLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcblxuICAvLyBUdXJuL3ZpY3Rvcnkgbm90aWZpY2F0aW9uXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5mby1kaXZcIik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb1RleHQpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUluZm9UZXh0KHRleHQpIHtcbiAgICAvLyBMb3NlciBCb2FyZCBpbmZvXG4gICAgaWYgKHRleHQgPT0gXCJ0b3BcIikge1xuICAgICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBgJHtib3RQbGF5ZXJOYW1lfSB3b24hYDtcbiAgICB9IGVsc2UgaWYgKHRleHQgPT0gXCJib3RcIikge1xuICAgICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBgJHt0b3BQbGF5ZXJOYW1lfSB3b24hYDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjb3Jlcyhsb3NlckJvYXJkKSB7XG4gICAgLy8gVXBkYXRlIHNjb3Jlc1xuICAgIGlmIChsb3NlckJvYXJkID09IFwidG9wXCIpIHtcbiAgICAgIGJvdFBsYXllclNjb3JlICs9IDE7XG4gICAgICBib3RQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHtib3RQbGF5ZXJOYW1lfTogJHtib3RQbGF5ZXJTY29yZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3BQbGF5ZXJTY29yZSArPSAxO1xuICAgICAgdG9wUGxheWVyLnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX06ICR7dG9wUGxheWVyU2NvcmV9YDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFNjb3JlcygpIHtcbiAgICAvLyBSZXNldCBzY29yZXMgYW5kIHVwZGF0ZSBib2FyZFxuICAgIHRvcFBsYXllclNjb3JlID0gMDtcbiAgICBib3RQbGF5ZXJTY29yZSA9IDA7XG5cbiAgICB0b3BQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHt0b3BQbGF5ZXJOYW1lfTogJHt0b3BQbGF5ZXJTY29yZX1gO1xuICAgIGJvdFBsYXllci50ZXh0Q29udGVudCA9IGAke2JvdFBsYXllck5hbWV9OiAke2JvdFBsYXllclNjb3JlfWA7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdG5zKCkge1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lT3ZlckNsZWFuVXAobG9zZXJCb2FyZCkge1xuICAgIHVwZGF0ZUluZm9UZXh0KGxvc2VyQm9hcmQpO1xuICAgIHVwZGF0ZVNjb3Jlcyhsb3NlckJvYXJkKTtcbiAgICBlbmFibGVCdG5zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93TW9kZURpdigpIHtcbiAgICBtb2RlRGl2LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIG1vZGVEaXYuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU1vZGVEaXYoKSB7XG4gICAgbW9kZURpdi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBtb2RlRGl2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dQbGF5ZXJTY29yZURpdigpIHtcbiAgICBwbGF5ZXJDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVQbGF5ZXJTY29yZURpdigpIHtcbiAgICBwbGF5ZXJDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIC8vIEV2ZW50IGxpc3RlbmVyc1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBwcy5wdWJsaXNoKFwibmV3LWdhbWVcIik7XG4gIH0pO1xuXG4gIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFN3aXRjaCBidXR0b24gZGlzYWJsZWQgc3RhdGVzXG4gICAgcHMucHVibGlzaChcImNwdS1vblwiKTtcbiAgICB0b3BQbGF5ZXJOYW1lID0gXCJDUFVcIjtcbiAgICBib3RQbGF5ZXJOYW1lID0gXCJQbGF5ZXJcIjtcbiAgICBoaWRlTW9kZURpdigpO1xuICAgIHJlc2V0U2NvcmVzKCk7XG4gICAgc2hvd1BsYXllclNjb3JlRGl2KCk7XG5cbiAgICB5ZXNCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIG5vQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcblxuICBub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFN3aXRjaCBidXR0b24gZGlzYWJsZWQgc3RhdGVzXG4gICAgcHMucHVibGlzaChcImNwdS1vZmZcIik7XG4gICAgdG9wUGxheWVyTmFtZSA9IFwiVG9wIFBsYXllclwiO1xuICAgIGJvdFBsYXllck5hbWUgPSBcIkJvdHRvbSBQbGF5ZXJcIjtcbiAgICBoaWRlTW9kZURpdigpO1xuICAgIHJlc2V0U2NvcmVzKCk7XG4gICAgc2hvd1BsYXllclNjb3JlRGl2KCk7XG4gICAgeWVzQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBub0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBSZXNldCBzdGF0c1xuICAgIGhpZGVQbGF5ZXJTY29yZURpdigpO1xuICAgIHNob3dNb2RlRGl2KCk7XG4gICAgcmVzZXRTY29yZXMoKTtcblxuICAgIC8vIFN3aXRjaCBidXR0b24gZGlzYWJsZWQgc3RhdGVzXG4gICAgcHMucHVibGlzaChcImNwdS1vZmZcIik7XG4gICAgcHMucHVibGlzaChcImNsZWFyLWJvYXJkXCIpO1xuICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgeWVzQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgbm9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gUHVic3ViXG4gIHBzLnN1YnNjcmliZShcImdhbWUtb3ZlclwiLCBnYW1lT3ZlckNsZWFuVXApO1xuICBwcy5zdWJzY3JpYmUoXCJpbmZvLXVwZGF0ZVwiLCB1cGRhdGVJbmZvVGV4dCk7XG5cbiAgLy8gSGlkZSBwbGF5ZXIgc2NvcmUgZGl2IG9uIGluaXRcbiAgaGlkZVBsYXllclNjb3JlRGl2KCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlTGF5b3V0IGZyb20gXCIuL2dhbWVCb2FyZExheW91dFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgc3RhdEJvYXJkIGZyb20gXCIuL3N0YXRCb2FyZFwiO1xuaW1wb3J0IHBzIGZyb20gXCIuL3B1YlN1YlwiO1xuXG4vLyBDcmVhdGUgYm9hcmQgbGF5b3V0XG5zdGF0Qm9hcmQoKTtcbmNyZWF0ZUxheW91dCgpO1xuXG4vLyBDcmVhdGUgcGxheWVyc1xubGV0IGJvdFBsYXllciA9IG5ldyBQbGF5ZXIoXCJQTEFZRVIgMVwiKTtcbmxldCB0b3BQbGF5ZXIgPSBuZXcgUGxheWVyKFwiUExBWUVSIDJcIik7XG5cbi8vIEdhbWVib2FyZCBzZXR1cFxubGV0IGJvdFBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZChib3RQbGF5ZXIsIFwiYm90XCIpO1xubGV0IHRvcFBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZCh0b3BQbGF5ZXIsIFwidG9wXCIpO1xuXG4vLyBCb3R0b20gUGxheWVyIHNoaXBzXG5sZXQgYm90U2hpcDEgPSBuZXcgU2hpcCgpO1xubGV0IGJvdFNoaXAyID0gbmV3IFNoaXAoKTtcbmxldCBib3RTaGlwMyA9IG5ldyBTaGlwKCk7XG5sZXQgYm90U2hpcDQgPSBuZXcgU2hpcCgpO1xuXG4vLyBUb3AgcGxheWVyIHNoaXBzXG5sZXQgdG9wU2hpcDEgPSBuZXcgU2hpcCgpO1xubGV0IHRvcFNoaXAyID0gbmV3IFNoaXAoKTtcbmxldCB0b3BTaGlwMyA9IG5ldyBTaGlwKCk7XG5sZXQgdG9wU2hpcDQgPSBuZXcgU2hpcCgpO1xuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICAvLyBCb3R0b20gcGxheWVyIHNoaXBzXG4gIGJvdFNoaXAxID0gbnVsbDtcbiAgYm90U2hpcDIgPSBudWxsO1xuICBib3RTaGlwMyA9IG51bGw7XG4gIGJvdFNoaXA0ID0gbnVsbDtcblxuICBib3RTaGlwMSA9IG5ldyBTaGlwKDIpO1xuICBib3RTaGlwMiA9IG5ldyBTaGlwKDMpO1xuICBib3RTaGlwMyA9IG5ldyBTaGlwKDQpO1xuICBib3RTaGlwNCA9IG5ldyBTaGlwKDQpO1xuXG4gIC8vIFRvcCBwbGF5ZXIgc2hpcHNcbiAgdG9wU2hpcDEgPSBudWxsO1xuICB0b3BTaGlwMiA9IG51bGw7XG4gIHRvcFNoaXAzID0gbnVsbDtcbiAgdG9wU2hpcDQgPSBudWxsO1xuXG4gIHRvcFNoaXAxID0gbmV3IFNoaXAoMik7XG4gIHRvcFNoaXAyID0gbmV3IFNoaXAoMyk7XG4gIHRvcFNoaXAzID0gbmV3IFNoaXAoNCk7XG4gIHRvcFNoaXA0ID0gbmV3IFNoaXAoNCk7XG5cbiAgcHMucHVibGlzaChcInJlc2V0LXZhbHVlc1wiKTtcblxuICAvLyBQbGFjZSBwbGF5ZXIgc2hpcHNcbiAgYm90UGxheWVyQm9hcmQucGxhY2VTaGlwRG93bihib3RTaGlwMSk7XG4gIGJvdFBsYXllckJvYXJkLnBsYWNlU2hpcERvd24oYm90U2hpcDIpO1xuICBib3RQbGF5ZXJCb2FyZC5wbGFjZVNoaXBSaWdodChib3RTaGlwMyk7XG4gIGJvdFBsYXllckJvYXJkLnBsYWNlU2hpcFJpZ2h0KGJvdFNoaXA0KTtcblxuICAvLyBQbGFjZSBDUFUgc2hpcHNcbiAgdG9wUGxheWVyQm9hcmQucGxhY2VTaGlwRG93bih0b3BTaGlwMSk7XG4gIHRvcFBsYXllckJvYXJkLnBsYWNlU2hpcERvd24odG9wU2hpcDIpO1xuICB0b3BQbGF5ZXJCb2FyZC5wbGFjZVNoaXBSaWdodCh0b3BTaGlwMyk7XG4gIHRvcFBsYXllckJvYXJkLnBsYWNlU2hpcFJpZ2h0KHRvcFNoaXA0KTtcblxuICAvLyBVcGRhdGUgYm90aCBncmlkc1xuICBib3RQbGF5ZXJCb2FyZC51cGRhdGVHcmlkKFwiYm90XCIpO1xuICB0b3BQbGF5ZXJCb2FyZC51cGRhdGVHcmlkKFwidG9wXCIpO1xufVxuXG5wcy5zdWJzY3JpYmUoXCJuZXctZ2FtZVwiLCBuZXdHYW1lKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==