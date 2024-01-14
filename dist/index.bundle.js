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

.ship {
  background-color: rgb(97, 169, 202);
}

.hit {
  background-color: rgb(175, 129, 129);
}

.miss {
  background-color: rgb(41, 37, 37);
}

p {
  pointer-events: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["body {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  min-width: 30vw;\n}\n\n.stats-container {\n  position: relative;\n  border: solid 1px black;\n  width: 300px;\n  height: 700px;\n}\n\n#players-div > p,\n#question-div > p,\n#info-div > p {\n  font-size: 20px;\n}\n\n#mode-select-div,\n#player-scores-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-top: 150px;\n}\n\n#info-div {\n  text-align: center;\n  width: 150px;\n  height: 150px;\n}\n\n#btn-container,\n#player-container-btns {\n  display: flex;\n  justify-content: space-between;\n  width: 150px;\n}\n\nbutton {\n  width: 70px;\n  height: 40px;\n  font-size: 14px;\n  border-radius: 5px;\n  background-color: rgb(255, 255, 255);\n}\n\n.board {\n  font-size: 36px;\n  border: solid 1px;\n  width: 500px;\n  height: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-column-start: 2;\n  grid-row-start: 2;\n}\n\n#top-label {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column-start: 2;\n  text-align: center;\n  height: 50px;\n  margin-top: 20px;\n}\n\n#left-label {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-row-start: 2;\n  text-align: center;\n}\n\n.content {\n  margin-bottom: 25px;\n  width: 575px;\n  display: grid;\n  grid-template-columns: 75px 500px;\n  grid-template-rows: 75px 500px;\n}\n\n.squares {\n  border: solid 1px;\n}\n\n.ship {\n  background-color: rgb(97, 169, 202);\n}\n\n.hit {\n  background-color: rgb(175, 129, 129);\n}\n\n.miss {\n  background-color: rgb(41, 37, 37);\n}\n\np {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = "rgb(97, 169, 202)";
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
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = "rgb(97, 169, 202)";
          }
        });
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
      if (playerMoved && !disableAllBoards) {
        setTimeout(cpuAttack, 800);
      }
    }
  }

  function disableBoards() {
    // Game end
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBRTtBQUNWLFFBQVE7QUFDUixRQUFRLCtDQUFFO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQUU7QUFDVixRQUFRO0FBQ1IsUUFBUSwrQ0FBRTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBRTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLE1BQU0sK0NBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QixNQUFNLCtDQUFFO0FBQ1I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtDQUFFO0FBQ0osRUFBRSwrQ0FBRTtBQUNKLEVBQUUsK0NBQUU7QUFD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RTFCO0FBQ0Esc0RBQVM7QUFDVCw0REFBWTs7QUFFWjtBQUNBLG9CQUFvQiwrQ0FBTTtBQUMxQixvQkFBb0IsK0NBQU07O0FBRTFCO0FBQ0EseUJBQXlCLGtEQUFTO0FBQ2xDLHlCQUF5QixrREFBUzs7QUFFbEM7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkIsbUJBQW1CLDZDQUFJO0FBQ3ZCLG1CQUFtQiw2Q0FBSTtBQUN2QixtQkFBbUIsNkNBQUk7O0FBRXZCO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCLG1CQUFtQiw2Q0FBSTtBQUN2QixtQkFBbUIsNkNBQUk7QUFDdkIsbUJBQW1CLDZDQUFJOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDZDQUFJO0FBQ3JCLGlCQUFpQiw2Q0FBSTtBQUNyQixpQkFBaUIsNkNBQUk7QUFDckIsaUJBQWlCLDZDQUFJOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw2Q0FBSTtBQUNyQixpQkFBaUIsNkNBQUk7QUFDckIsaUJBQWlCLDZDQUFJO0FBQ3JCLGlCQUFpQiw2Q0FBSTs7QUFFckIsRUFBRSwrQ0FBRTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZExheW91dC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0YXRCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzB2dztcbn1cblxuLnN0YXRzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cblxuI3BsYXllcnMtZGl2ID4gcCxcbiNxdWVzdGlvbi1kaXYgPiBwLFxuI2luZm8tZGl2ID4gcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI21vZGUtc2VsZWN0LWRpdixcbiNwbGF5ZXItc2NvcmVzLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbiNpbmZvLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4jYnRuLWNvbnRhaW5lcixcbiNwbGF5ZXItY29udGFpbmVyLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmJvYXJkIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLXJvdy1zdGFydDogMjtcbn1cblxuI3RvcC1sYWJlbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNsZWZ0LWxhYmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgd2lkdGg6IDU3NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggNTAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCA1MDBweDtcbn1cblxuLnNxdWFyZXMge1xuICBib3JkZXI6IHNvbGlkIDFweDtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDE2OSwgMjAyKTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDEyOSwgMTI5KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM3LCAzNyk7XG59XG5cbnAge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMzB2dztcXG59XFxuXFxuLnN0YXRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNzAwcHg7XFxufVxcblxcbiNwbGF5ZXJzLWRpdiA+IHAsXFxuI3F1ZXN0aW9uLWRpdiA+IHAsXFxuI2luZm8tZGl2ID4gcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNtb2RlLXNlbGVjdC1kaXYsXFxuI3BsYXllci1zY29yZXMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcXG59XFxuXFxuI2luZm8tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbiNidG4tY29udGFpbmVyLFxcbiNwbGF5ZXItY29udGFpbmVyLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbn1cXG5cXG4jdG9wLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2xlZnQtbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICB3aWR0aDogNTc1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDUwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IDUwMHB4O1xcbn1cXG5cXG4uc3F1YXJlcyB7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAxNjksIDIwMik7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMTI5LCAxMjkpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM3LCAzNyk7XFxufVxcblxcbnAge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHBzIGZyb20gXCIuL3B1YlN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lciwgYm9hcmRQb3NpdGlvbikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmJvYXJkUG9zaXRpb24gPSBib2FyZFBvc2l0aW9uO1xuICAgIHRoaXMuZ3JpZCA9IHt9O1xuICAgIHRoaXMuaW5pdEdyaWQodGhpcy5sZW5ndGgsIHRoaXMud2lkdGgpO1xuICAgIHRoaXMuc3Vua1NoaXBzID0gMDtcbiAgICB0aGlzLnNoaXBTZXQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy50b3RhbFNoaXBzID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5hZGphY2VudENvb3JkID0gbmV3IFNldCgpO1xuICAgIHBzLnN1YnNjcmliZShcImF0dGFjay1ncmlkXCIsIChlKSA9PiB0aGlzLnJlY2VpdmVBdHRhY2soZSkpO1xuICAgIHBzLnN1YnNjcmliZShcInJlc2V0LXZhbHVlc1wiLCAoKSA9PiB0aGlzLnJlc2V0VmFsdWVzKCkpO1xuICAgIHBzLnN1YnNjcmliZShcImNwdS1hdHRhY2tcIiwgKGUpID0+IHRoaXMuY3B1QXR0YWNrKGUpKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWVzKCkge1xuICAgIC8vIFJlc2V0IHNoaXAgc2V0XG4gICAgdGhpcy5zaGlwU2V0ID0gbnVsbDtcbiAgICB0aGlzLnNoaXBTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBSZXNldCBncmlkXG4gICAgdGhpcy5ncmlkID0ge307XG4gICAgdGhpcy5pbml0R3JpZCh0aGlzLmxlbmd0aCwgdGhpcy53aWR0aCk7XG5cbiAgICAvLyBSZXNldCB2YXJpYWJsZXNcbiAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy50b3RhbFNoaXBzID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRNb3ZlcyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmFkamFjZW50Q29vcmQgPSBudWxsO1xuICAgIHRoaXMuYWRqYWNlbnRDb29yZCA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIC8vIENyZWF0ZSBhIDEweDEwIGdyaWRcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF0gPSB7fTtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0ge307XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb29yZHMoKSB7XG4gICAgLy8gR2VuZXJhdGUgY29vcmRpbmF0ZXNcbiAgICBsZXQgbnVtWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgbGV0IG51bVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgIGxldCBhYnNEaWZmZXJlbmNlID0gTWF0aC5hYnMobnVtWCAtIG51bVkpO1xuICAgIGxldCBjb29yZGluYXRlcyA9IFtudW1YLCBudW1ZXTtcblxuICAgIHdoaWxlIChhYnNEaWZmZXJlbmNlID4gNCB8fCBhYnNEaWZmZXJlbmNlID09IDApIHtcbiAgICAgIG51bVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgbnVtWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICBhYnNEaWZmZXJlbmNlID0gTWF0aC5hYnMobnVtWCAtIG51bVkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIHBsYWNlU2hpcERvd24oc2hpcCwgeCwgeSkge1xuICAgIC8vIEdlbmVyYXRlIGNvb3JkaW5hdGVzIGlmIG51bGxcbiAgICBpZiAoKHggJiYgeSkgPT0gbnVsbCkgW3gsIHldID0gdGhpcy5nZW5lcmF0ZUNvb3JkcygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgeSBjb29yZGluYXRlIGlzIG91dCBvZiBib3VuZHNcbiAgICBpZiAoeSAtIHNoaXAubGVuZ3RoICsgMSA8PSAwKSB7XG4gICAgICAvLyBNb2RpZnkgY29vcmRpbmF0ZVxuICAgICAgeSArPSBNYXRoLmFicyh5IC0gc2hpcC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFub3RoZXIgc2hpcCBoYXMgb2NjdXBpZWQgdGhlIHNxdWFyZVxuICAgIGxldCBvdmVybGFwID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ncmlkW3hdW3kgLSBpXS5sZW5ndGgpIHtcbiAgICAgICAgb3ZlcmxhcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG92ZXJsYXAgdGhlbiBjaGFuZ2UgeCBjb29yZGluYXRlXG4gICAgaWYgKG92ZXJsYXApIHtcbiAgICAgIGNvbnN0IG5ld1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgdGhpcy5wbGFjZVNoaXBEb3duKHNoaXAsIG5ld1gsIHkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXAgZG93bndhcmRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF1beSAtIGldID0gc2hpcDtcbiAgICB9XG4gICAgdGhpcy5zaGlwU2V0LmFkZChzaGlwKTtcbiAgICB0aGlzLnRvdGFsU2hpcHMgKz0gMTtcbiAgfVxuXG4gIHBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIHkpIHtcbiAgICAvLyBHZW5lcmF0ZSBjb29yZGluYXRlcyBpZiBudWxsXG4gICAgaWYgKCh4ICYmIHkpID09IG51bGwpIFt4LCB5XSA9IHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcblxuICAgIC8vIENoZWNrIGlmIHggY29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzXG4gICAgaWYgKHggKyBzaGlwLmxlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgLy8gTW9kaWZ5IGNvb3JkaW5hdGVcbiAgICAgIHggLT0geCArIHNoaXAubGVuZ3RoIC0gMTE7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYW5vdGhlciBzaGlwIGhhcyBvY2N1cGllZCB0aGUgc3F1YXJlXG4gICAgbGV0IG92ZXJsYXAgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdyaWRbeCArIGldW3ldLmxlbmd0aCkge1xuICAgICAgICBvdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgb3ZlcmxhcCB0aGVuIGNoYW5nZSB4IGNvb3JkaW5hdGVcbiAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgY29uc3QgbmV3WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICB0aGlzLnBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIG5ld1kpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXAgcmlnaHR3YXJkc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgfVxuICAgIHRoaXMuc2hpcFNldC5hZGQoc2hpcCk7XG4gICAgdGhpcy50b3RhbFNoaXBzICs9IDE7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgY29uc3QgeyB4IH0gPSBjb29yZDtcbiAgICBjb25zdCB7IHkgfSA9IGNvb3JkO1xuICAgIGNvbnN0IHsgb3duZXIgfSA9IGNvb3JkO1xuICAgIGlmIChvd25lciAhPT0gdGhpcy5ib2FyZFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGEgY29vcmRpbmF0ZSBoaXQgb3IgbWlzcyBhIHNoaXBcbiAgICBpZiAodGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9PSBcImhpdFwiIHx8IHRoaXMuZ3JpZFt4XVt5XS5zdGF0dXMgPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKE9iamVjdC52YWx1ZXModGhpcy5ncmlkW3hdW3ldKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIENoZWNrIGlmIGFscmVhZHkgaGl0IG9yIG1pc3MgdGhlbiBkbyBub3RoaW5nXG4gICAgICAvLyBzaGlwLmhpdHMgKz0gMTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5oaXQoKTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgIGNvbnN0IGdyaWRPYmogPSB7IHN0YXR1czogXCJoaXRcIiB9O1xuICAgICAgdGhpcy5ncmlkW3hdW3ldID0gZ3JpZE9iajtcbiAgICAgIC8vIEFkZCBjb29yZGluYXRlIHRvIGNoZWNrQWRqYWNlbnRDb29yZCBmb3IgQUkgYmVoYXZpb3VyXG4gICAgICB0aGlzLmFkamFjZW50Q29vcmQuYWRkKHsgeDogY29vcmQueCwgeTogY29vcmQueSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9IFwibWlzc1wiO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgZ3JpZFxuICAgIC8vIENoZWNrIHBsYXllciBzaGlwcyBzdGF0dXNcbiAgICB0aGlzLnVwZGF0ZUdyaWQob3duZXIpO1xuICAgIHRoaXMuY2hlY2tQbGF5ZXJTaGlwcygpO1xuICB9XG5cbiAgY2hlY2tQbGF5ZXJTaGlwcygpIHtcbiAgICAvLyBDaGVjayBpZiBzaGlwcyBzdW5rIHRoZW4gcHVzaCB0byBhcnJheVxuICAgIHRoaXMuc2hpcFNldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zdW5rID09IHRydWUgJiYgc2hpcC5sZW5ndGggPT0gc2hpcC5oaXRzKSB7XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIHRoaXMuc2hpcFNldC5kZWxldGUoc2hpcCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBpZiBudW1iZXIgb2Ygc3VuayBzaGlwcyBpcyBlcXVhbCB0byBudW1iZXIgb2YgYWxsIHNoaXBzIG9uIGJvYXJkXG4gICAgaWYgKHRoaXMuc3Vua1NoaXBzID09IHRoaXMudG90YWxTaGlwcykge1xuICAgICAgcHMucHVibGlzaChcImdhbWUtb3ZlclwiLCB0aGlzLmJvYXJkUG9zaXRpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZUdyaWQoZWxlbSkge1xuICAgIC8vIFB1Ymxpc2ggdXBkYXRlZCBncmlkIHZhbHVlc1xuICAgIGNvbnN0IG9iaiA9IHsgb3duZXI6IHRoaXMub3duZXIsIGdyaWQ6IHRoaXMuZ3JpZCwgZWxlbSB9O1xuICAgIHBzLnB1Ymxpc2goXCJ1cGRhdGUtYm9hcmRcIiwgb2JqKTtcbiAgfVxuXG4gIC8vIEFJIGxvZ2ljXG4gIGNwdU1vdmUoeCA9IDEwLCB5ID0gMTApIHtcbiAgICBsZXQgcmV0dXJuTW92ZTtcbiAgICBsZXQgZGVjaWRlZE1vdmUgPSBmYWxzZTtcbiAgICBsZXQgY2hlY2tlZEFkamFjZW50TW92ZXMgPSBmYWxzZTtcblxuICAgIC8vIGNoZWNrIGFkamFjZW50Y29vcmQgc2V0IHdpdGggKy0xIHgseS5cbiAgICAvLyB0aGVuIGNyb3NzIGNoZWNrIHRoZSBjb29yZCB3aXRoIHNlbGVjdGVkbW92ZXMgc2V0XG4gICAgLy8gaWYgdGhhdCBhZGphY2VudCBjb29yZCBpc250IGluIHNlbGVjdGVkbW92ZXMgdGhlbiBwcm9jZWVkLlxuICAgIC8vIG90aGVyd2lzZSBpZiB0aGV5J3JlIGFsbCBtYXRjaGVkIHVwIGluIGJvdGggc2V0c1xuICAgIC8vIGNvbnRpbnVlIHRvIGdlbmVyYXRlIGEgcmFuZG9tIGNvb3JkXG5cbiAgICBjb25zdCBjaGVja0FkamFjZW50Q29vcmQgPSAoKSA9PiB7XG4gICAgICAvLyBDaGVjayBhZGphY2VudCBzcXVhcmVzIG9mIHByZXZpb3VzIGhpdHNcbiAgICAgIGZvciAoY29uc3QgY29vcmQgb2YgdGhpcy5hZGphY2VudENvb3JkKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHZhbGlkIG1vdmVcbiAgICAgICAgbGV0IHRlbXBDb29yZCA9IHsgb3duZXI6IFwiYm90XCIsIHg6IGNvb3JkLngsIHk6IGNvb3JkLnkgfTtcblxuICAgICAgICAvLyBDaGVjayBpZiB4IGlzIHZhbGlkIGFuZCBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGNvb3JkLnggKyAxIDw9IDEwKSB7XG4gICAgICAgICAgdGVtcENvb3JkLnggPSBjb29yZC54ICsgMTtcbiAgICAgICAgICBpZiAoIWNoZWNrTW92ZXModGVtcENvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBDb29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmQueCAtIDEgPiAwKSB7XG4gICAgICAgICAgdGVtcENvb3JkLnggPSBjb29yZC54IC0gMTtcbiAgICAgICAgICBpZiAoIWNoZWNrTW92ZXModGVtcENvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBDb29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCB0ZW1wQ29vcmQueFxuICAgICAgICB0ZW1wQ29vcmQueCA9IGNvb3JkLng7XG5cbiAgICAgICAgaWYgKGNvb3JkLnkgKyAxIDw9IDEwKSB7XG4gICAgICAgICAgdGVtcENvb3JkLnkgPSBjb29yZC55ICsgMTtcbiAgICAgICAgICBpZiAoIWNoZWNrTW92ZXModGVtcENvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBDb29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmQueSAtIDEgPiAwKSB7XG4gICAgICAgICAgdGVtcENvb3JkLnkgPSBjb29yZC55IC0gMTtcbiAgICAgICAgICBpZiAoIWNoZWNrTW92ZXModGVtcENvb3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBDb29yZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmFuZG9tQ29vcmQgPSAoKSA9PiB7XG4gICAgICAvLyBHZW5lcmF0ZSByYW5kb20gY29vcmRpbmF0ZXNcbiAgICAgIGNvbnN0IG9iaiA9IHsgb3duZXI6IFwiYm90XCIgfTtcbiAgICAgIGNvbnN0IGNvb3JkWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHgpICsgMTtcbiAgICAgIGNvbnN0IGNvb3JkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHkpICsgMTtcbiAgICAgIG9iai54ID0gY29vcmRYO1xuICAgICAgb2JqLnkgPSBjb29yZFk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja01vdmVzID0gKG5ld01vdmUpID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIGNvb3JkaW5hdGVzIGhhdmUgYmVlbiBzZWxlY3RlZCBwcmV2aW91c2x5XG4gICAgICBmb3IgKGNvbnN0IG1vdmUgb2YgdGhpcy5zZWxlY3RlZE1vdmVzKSB7XG4gICAgICAgIGlmIChtb3ZlLnggPT09IG5ld01vdmUueCAmJiBtb3ZlLnkgPT09IG5ld01vdmUueSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkTW92ZXMuc2l6ZSA+PSAxMDApIHtcbiAgICAgIC8vIElmIGFsbCBzcXVhcmVzIGhhdmUgYmVlbiBmaWxsZWQgdGhlbiByZXR1cm5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aGlsZSAoIWRlY2lkZWRNb3ZlKSB7XG4gICAgICBsZXQgbW92ZTtcbiAgICAgIC8vIEV4aXQgbG9vcCBpZiBhbGwgbW92ZXMgZXhoYXVzdGVkXG5cbiAgICAgIC8vIElmIGFkamFjZW50IG1vdmUgdG8gcHJldmlvdXMgbW92ZSBwb29sIGZvdW5kIHRoZW4gcmV0dXJuXG4gICAgICBpZiAoIWNoZWNrZWRBZGphY2VudE1vdmVzKSB7XG4gICAgICAgIGNoZWNrZWRBZGphY2VudE1vdmVzID0gdHJ1ZTtcbiAgICAgICAgbW92ZSA9IGNoZWNrQWRqYWNlbnRDb29yZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb250aW51ZSBsb29waW5nIHVudGlsIGEgdW5pcXVlIGNvb3JkaW5hdGUgaXMgZm91bmRcbiAgICAgIGlmIChtb3ZlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBtb3ZlID0gcmFuZG9tQ29vcmQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGVja01vdmVzKG1vdmUpKSB7XG4gICAgICAgIC8vIElmIG1vdmUgaGFzIGJlZW4gZm91bmQgdGhlbiByZXR1cm4gbW92ZVxuICAgICAgICBkZWNpZGVkTW92ZSA9IHRydWU7XG4gICAgICAgIHJldHVybk1vdmUgPSBtb3ZlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRNb3Zlcy5hZGQocmV0dXJuTW92ZSk7XG5cbiAgICByZXR1cm4gcmV0dXJuTW92ZTtcbiAgfVxuXG4gIGNwdUF0dGFjayhib2FyZENoZWNrKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRQb3NpdGlvbiA9PSBib2FyZENoZWNrKSB7XG4gICAgICBjb25zdCBtb3ZlID0gdGhpcy5jcHVNb3ZlKCk7XG4gICAgICB0aGlzLnJlY2VpdmVBdHRhY2sobW92ZSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgaGl0cyA+IGxlbmd0aFxuICAgIC8vIEhpdCB0YXJnZXRcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICAvLyBDaGVjayBpZiBzaGlwIGhpdHMgPj0gbGVuZ3RoIHRoZW4gaXQncyBzdW5rXG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgfVxufVxuIiwiaW1wb3J0IHBzIGZyb20gXCIuL3B1YlN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgLy8gQ3JlYXRlIGdhbWUgY29udGVudCBib2FyZFxuICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJcIilbMF07XG4gIGxldCB0b3BCb2FyZCA9IGdlbmVyYXRlQm9hcmQoXCJ0b3BcIik7XG4gIGxldCBib3RCb2FyZCA9IGdlbmVyYXRlQm9hcmQoXCJib3RcIik7XG4gIGxldCBkaXNhYmxlQWxsQm9hcmRzID0gdHJ1ZTtcbiAgbGV0IHBsYXllck1vdmVkID0gZmFsc2U7XG4gIGxldCBjcHVBY3RpdmUgPSBmYWxzZTtcbiAgbGV0IHRvcEJvYXJkc1R1cm4gPSBmYWxzZTtcbiAgbGV0IGJvdEJvYXJkc1R1cm4gPSBmYWxzZTtcblxuICBib2FyZERpdi5hcHBlbmRDaGlsZCh0b3BCb2FyZCk7XG4gIGJvYXJkRGl2LmFwcGVuZENoaWxkKGJvdEJvYXJkKTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZUJvYXJkKGlkKSB7XG4gICAgLy8gQ3JlYXRlIGJvYXJkXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250ZW50XCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm9hcmRcIik7XG5cbiAgICAvLyBDcmVhdGUgc3F1YXJlc1xuICAgIGZvciAobGV0IHkgPSAxMDsgeSA+IDA7IHktLSkge1xuICAgICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzcXVhcmVzXCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHgpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIHkpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsYWJlbHNcbiAgICBjb25zdCBsZXR0ZXJzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICBjb25zdCBsZWZ0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlZnRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxlZnQtbGFiZWxcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGxldHRlci50ZXh0Q29udGVudCA9IGxldHRlcnNbaV07XG4gICAgICBsZWZ0TGFiZWwuYXBwZW5kQ2hpbGQobGV0dGVyKTtcbiAgICB9XG4gICAgY29uc3QgdG9wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvcExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wLWxhYmVsXCIpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gaTtcbiAgICAgIHRvcExhYmVsLmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIG9iamVjdHMgdG8gdG9wIGJvYXJkXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdExhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9wTGFiZWwpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkKG9iaikge1xuICAgIC8vIFVwZGF0ZSBib2FyZCBlbGVtZW50c1xuXG4gICAgY29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouZWxlbSk7XG4gICAgY29uc3QgYm9hcmRFbGVtID0gY29udGVudEVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJvYXJkXCIpWzBdO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29vcmRpbmF0ZShvYmosIHgsIHkpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlIHdpdGggb2JqXG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYm9hcmRFbGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGRhdGFYID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIik7XG4gICAgICAgIGNvbnN0IGRhdGFZID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG5cbiAgICAgICAgaWYgKGRhdGFYID09IHggJiYgZGF0YVkgPT0geSkge1xuICAgICAgICAgIC8vIEFwcGVuZCBvYmogZGF0YSB0byB0aGUgc3F1YXJlcyB3aXRoIGNsYXNzZXNcblxuICAgICAgICAgIGlmIChvYmoubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBJZiBBSSBhY3RpdmUgdGhlbiBoaWRlIHRvcCBib2FyZCBzaGlwc1xuICAgICAgICAgICAgaWYgKGNwdUFjdGl2ZSAmJiBjb250ZW50RWxlbS5pZCA9PSBcInRvcFwiKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9iai5zdGF0dXMgPT0gXCJoaXRcIikge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob2JqLnN0YXR1cyA9PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgYm9hcmQgY29vcmRpbmF0ZXNcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMTsgeSA8PSAxMDsgeSsrKSB7XG4gICAgICAgIC8vIEZvciBlYWNoIHggJiB5IGNvb3JkaW5hdGVcbiAgICAgICAgLy8gaWYgKG9iai5kYXRhW3hdW3ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBoaXQvbWlzcyBvciBzaGlwIG9iamVjdFxuXG4gICAgICAgIHVwZGF0ZUNvb3JkaW5hdGUob2JqLmdyaWRbeF1beV0sIHgsIHkpO1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIGFjdGl2ZSBib2FyZCBzdGF0ZVxuICAgIHN3aXRjaEFjdGl2ZUJvYXJkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hIaWRkZW5Cb2FyZCgpIHtcbiAgICAvLyBJZiBwdnAgbW9kZSB0aGVuIGhpZGUgc2hpcHMgb24gYm9hcmQsIGRpc2FibGUgYWxsIGlucHV0XG4gICAgY29uc3QgdG9wQm9hcmRTaGlwcyA9IEFycmF5LmZyb20odG9wQm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNoaXBcIikpO1xuICAgIGNvbnN0IGJvdEJvYXJkU2hpcHMgPSBBcnJheS5mcm9tKGJvdEJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaGlwXCIpKTtcbiAgICB0b3BCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgYm90Qm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gICAgLy8gVGVtcCBoaWRlIHNoaXBzXG4gICAgdG9wQm9hcmRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfSBlbHNlIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE3NSwgMTI5LCAxMjkpXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYm90Qm9hcmRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfSBlbHNlIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE3NSwgMTI5LCAxMjkpXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gV2FpdCAyIHNlY29uZHMgdGhlbiBkaXNwbGF5IHNoaXAgc3RhdHVzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYm90Qm9hcmRzVHVybikge1xuICAgICAgICAvLyBUb3AgYm9hcmQncyB0dXJuXG4gICAgICAgIHRvcEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoOTcsIDE2OSwgMjAyKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRvcEJvYXJkc1R1cm4pIHtcbiAgICAgICAgLy8gQm90dG9tIGJvYXJkJ3MgdHVyblxuICAgICAgICB0b3BCb2FyZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBib3RCb2FyZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDk3LCAxNjksIDIwMilcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc3dpdGNoUGxheWVyQ29udHJvbCgpO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyQ29udHJvbCgpIHtcbiAgICAvLyBTd2l0Y2ggcGxheWVyIGNvbnRyb2xcbiAgICBpZiAoYm90Qm9hcmRzVHVybikge1xuICAgICAgLy8gVG9wIGJvYXJkcyB0dXJuXG4gICAgICB0b3BCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICBpZiAoY3B1QWN0aXZlKSB7XG4gICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgQ1BVJ3MgdHVybmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHMucHVibGlzaChcImluZm8tdXBkYXRlXCIsIGBUb3AgUGxheWVyJ3MgdHVybmApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdHVybiB2YXJpYWJsZXMgZm9yIG5leHQgdHVyblxuICAgICAgdG9wQm9hcmRzVHVybiA9IHRydWU7XG4gICAgICBib3RCb2FyZHNUdXJuID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0b3BCb2FyZHNUdXJuKSB7XG4gICAgICB0b3BCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICBpZiAoY3B1QWN0aXZlKSB7XG4gICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgWW91ciB0dXJuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcy5wdWJsaXNoKFwiaW5mby11cGRhdGVcIiwgYEJvdHRvbSBQbGF5ZXIncyB0dXJuYCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB0dXJuIHZhcmlhYmxlcyBmb3IgbmV4dCB0dXJuXG4gICAgICB0b3BCb2FyZHNUdXJuID0gZmFsc2U7XG4gICAgICBib3RCb2FyZHNUdXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc3dpdGNoQWN0aXZlQm9hcmQoKSB7XG4gICAgLy8gU3dpdGNoIGFjdGl2ZSBib2FyZHNcbiAgICBpZiAoZGlzYWJsZUFsbEJvYXJkcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHB2cCBtb2RlIGVuYWJsZWRcbiAgICBpZiAoIWNwdUFjdGl2ZSkge1xuICAgICAgc3dpdGNoSGlkZGVuQm9hcmQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBBSSBhY3RpdmUgdGhlbiBhdHRhY2tcbiAgICBpZiAoY3B1QWN0aXZlKSB7XG4gICAgICBzd2l0Y2hQbGF5ZXJDb250cm9sKCk7XG4gICAgICBpZiAocGxheWVyTW92ZWQgJiYgIWRpc2FibGVBbGxCb2FyZHMpIHtcbiAgICAgICAgc2V0VGltZW91dChjcHVBdHRhY2ssIDgwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZUJvYXJkcygpIHtcbiAgICAvLyBHYW1lIGVuZFxuICAgIGRpc2FibGVBbGxCb2FyZHMgPSB0cnVlO1xuICAgIGlmICh0b3BCb2FyZCB8fCBib3RCb2FyZCkge1xuICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgYm90Qm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gICAgLy8gQ2xlYXIgYm90aCBib2FyZHMgZnJvbSBjb250YWluZXJcbiAgICB3aGlsZSAoYm9hcmREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgYm9hcmREaXYucmVtb3ZlQ2hpbGQoYm9hcmREaXYubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICB0b3BCb2FyZCA9IGdlbmVyYXRlQm9hcmQoXCJ0b3BcIik7XG4gICAgYm90Qm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwiYm90XCIpO1xuXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQodG9wQm9hcmQpO1xuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGJvdEJvYXJkKTtcbiAgfVxuXG4gIC8vIEFJIE1vdmVcbiAgZnVuY3Rpb24gY3B1QXR0YWNrKCkge1xuICAgIC8vIFBhc3MgdHVybiBiYWNrIHRvIHBsYXllciBhbmQgYXR0YWNrXG4gICAgcGxheWVyTW92ZWQgPSBmYWxzZTtcbiAgICBwcy5wdWJsaXNoKFwiY3B1LWF0dGFja1wiLCBcImJvdFwiKTtcbiAgfVxuXG4gIC8vIE1vdXNlIGV2ZW50c1xuICBib2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBwYXJlbnRCb2FyZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50Qm9hcmQuaWQgPT0gXCJ0b3BcIikge1xuICAgICAgY29uc3QgZGF0YVggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgICAgIGNvbnN0IGRhdGFZID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSk7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHsgb3duZXI6IFwidG9wXCIsIHg6IGRhdGFYLCB5OiBkYXRhWSB9O1xuXG4gICAgICAvLyBQbGF5ZXIgaGFzIG1vdmVkIChBSSBjaGVjaylcbiAgICAgIHBsYXllck1vdmVkID0gdHJ1ZTtcbiAgICAgIHBzLnB1Ymxpc2goXCJhdHRhY2stZ3JpZFwiLCBjb29yZGluYXRlcyk7XG4gICAgfVxuICAgIC8vIERpc2FibGUgY2hlY2tpbmcgYm90IGJvYXJkIGlmIEFJIGFjdGl2ZVxuICAgIGlmIChwYXJlbnRCb2FyZC5pZCA9PSBcImJvdFwiICYmIGNwdUFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgY29uc3QgZGF0YVggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgICAgIGNvbnN0IGRhdGFZID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSk7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHsgb3duZXI6IFwiYm90XCIsIHg6IGRhdGFYLCB5OiBkYXRhWSB9O1xuXG4gICAgICBwcy5wdWJsaXNoKFwiYXR0YWNrLWdyaWRcIiwgY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGRpc2FibGVBbGxCb2FyZHMgPSBmYWxzZTtcbiAgICBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuICAgIHRvcEJvYXJkc1R1cm4gPSBmYWxzZTtcbiAgICBib3RCb2FyZHNUdXJuID0gdHJ1ZTtcbiAgICAvLyBjbGVhciBib2FyZCBzdGF0dXMgYW5kIHJlYnVpbGQgc2hpcHNcbiAgICByZXNldEJvYXJkKCk7XG4gIH1cblxuICBkaXNhYmxlQm9hcmRzKCk7XG4gIHBzLnN1YnNjcmliZShcInVwZGF0ZS1ib2FyZFwiLCB1cGRhdGVCb2FyZCk7XG4gIHBzLnN1YnNjcmliZShcImdhbWUtb3ZlclwiLCBkaXNhYmxlQm9hcmRzKTtcbiAgcHMuc3Vic2NyaWJlKFwibmV3LWdhbWVcIiwgc3RhcnRHYW1lKTtcbiAgcHMuc3Vic2NyaWJlKFwiY2xlYXItYm9hcmRcIiwgcmVzZXRCb2FyZCk7XG4gIHBzLnN1YnNjcmliZShcImNwdS1vblwiLCAoKSA9PiB7XG4gICAgY3B1QWN0aXZlID0gdHJ1ZTtcbiAgfSk7XG4gIHBzLnN1YnNjcmliZShcImNwdS1vZmZcIiwgKCkgPT4ge1xuICAgIGNwdUFjdGl2ZSA9IGZhbHNlO1xuICB9KTtcbn1cbiIsImZ1bmN0aW9uIHB1YlN1YigpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgcHVibGlzaCwgc3Vic2NyaWJlIH07XG59XG5cbmNvbnN0IHNoYXJlZFB1YlN1YiA9IHB1YlN1YigpO1xuZXhwb3J0IGRlZmF1bHQgc2hhcmVkUHViU3ViO1xuIiwiaW1wb3J0IHBzIGZyb20gXCIuL3B1YlN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0Qm9hcmQoKSB7XG4gIC8vIEluaXRpYWwgdmFyaWFibGVzXG4gIGxldCB0b3BQbGF5ZXJOYW1lID0gXCJUb3AgcGxheWVyXCI7XG4gIGxldCBib3RQbGF5ZXJOYW1lID0gXCJCb3R0b20gcGxheWVyXCI7XG4gIGxldCB0b3BQbGF5ZXJTY29yZSA9IDA7XG4gIGxldCBib3RQbGF5ZXJTY29yZSA9IDA7XG5cbiAgLy8gTWFpbiBjb250YWluZXJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXRzLWNvbnRhaW5lclwiKVswXTtcblxuICAvLyBQbGF5ZXIgc3RhdHMgY29udGFpbmVyXG4gIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1zY29yZXMtZGl2XCIpO1xuXG4gIGNvbnN0IHBsYXllcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJzRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVycy1kaXZcIik7XG5cbiAgY29uc3QgdG9wUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvcFBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1wbGF5ZXJcIik7XG4gIHRvcFBsYXllci50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9OiAke3RvcFBsYXllclNjb3JlfWA7XG5cbiAgY29uc3QgYm90UGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJvdFBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvdC1wbGF5ZXJcIik7XG4gIGJvdFBsYXllci50ZXh0Q29udGVudCA9IGAke2JvdFBsYXllck5hbWV9OiAke2JvdFBsYXllclNjb3JlfWA7XG5cbiAgcGxheWVyc0Rpdi5hcHBlbmRDaGlsZCh0b3BQbGF5ZXIpO1xuICBwbGF5ZXJzRGl2LmFwcGVuZENoaWxkKGJvdFBsYXllcik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJzRGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvbnRhaW5lcik7XG5cbiAgLy8gTW9kZSBzZWxlY3QgY29udGFpbmVyXG4gIGNvbnN0IG1vZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kZS1zZWxlY3QtZGl2XCIpO1xuXG4gIC8vIE1vZGUgc2VsZWN0IHF1ZXN0aW9uXG4gIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcXVlc3Rpb25EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJxdWVzdGlvbi1kaXZcIik7XG4gIGNvbnN0IHF1ZXN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBxdWVzdGlvblRleHQudGV4dENvbnRlbnQgPSBcIlZlcnNlIENQVT9cIjtcbiAgcXVlc3Rpb25EaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25UZXh0KTtcblxuICAvLyBNb2RlIHNlbGVjdCBidXR0b25zXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ0bi1jb250YWluZXJcIik7XG4gIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHllc0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInllcy1idG5cIik7XG4gIHllc0J0bi50ZXh0Q29udGVudCA9IFwiWWVzXCI7XG4gIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbm9CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuby1idG5cIik7XG4gIG5vQnRuLnRleHRDb250ZW50ID0gXCJOb1wiO1xuXG4gIG1vZGVEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25EaXYpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoeWVzQnRuKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vQnRuKTtcbiAgbW9kZURpdi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kZURpdik7XG5cbiAgLy8gUGxheWVyIGNvbnRhaW5lciBidXR0b25zXG4gIGNvbnN0IHBsYXllckNvbnRhaW5lckJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJDb250YWluZXJCdG5zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLWNvbnRhaW5lci1idG5zXCIpO1xuICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyQnRucyk7XG5cbiAgLy8gU3RhcnQgYnV0dG9uXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBHYW1lXCI7XG4gIHN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnQtYnRuXCIpO1xuICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHBsYXllckNvbnRhaW5lckJ0bnMuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gIC8vIFJlc2V0IGJ1dHRvblxuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlc2V0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzZXQtYnRuXCIpO1xuICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgcGxheWVyQ29udGFpbmVyQnRucy5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG5cbiAgLy8gVHVybi92aWN0b3J5IG5vdGlmaWNhdGlvblxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZm8tZGl2XCIpO1xuICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9UZXh0KTtcblxuICBmdW5jdGlvbiB1cGRhdGVJbmZvVGV4dCh0ZXh0KSB7XG4gICAgLy8gTG9zZXIgQm9hcmQgaW5mb1xuICAgIGlmICh0ZXh0ID09IFwidG9wXCIpIHtcbiAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX0gd29uIWA7XG4gICAgfSBlbHNlIGlmICh0ZXh0ID09IFwiYm90XCIpIHtcbiAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX0gd29uIWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY29yZXMobG9zZXJCb2FyZCkge1xuICAgIC8vIFVwZGF0ZSBzY29yZXNcbiAgICBpZiAobG9zZXJCb2FyZCA9PSBcInRvcFwiKSB7XG4gICAgICBib3RQbGF5ZXJTY29yZSArPSAxO1xuICAgICAgYm90UGxheWVyLnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX06ICR7Ym90UGxheWVyU2NvcmV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wUGxheWVyU2NvcmUgKz0gMTtcbiAgICAgIHRvcFBsYXllci50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9OiAke3RvcFBsYXllclNjb3JlfWA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRTY29yZXMoKSB7XG4gICAgLy8gUmVzZXQgc2NvcmVzIGFuZCB1cGRhdGUgYm9hcmRcbiAgICB0b3BQbGF5ZXJTY29yZSA9IDA7XG4gICAgYm90UGxheWVyU2NvcmUgPSAwO1xuXG4gICAgdG9wUGxheWVyLnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX06ICR7dG9wUGxheWVyU2NvcmV9YDtcbiAgICBib3RQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHtib3RQbGF5ZXJOYW1lfTogJHtib3RQbGF5ZXJTY29yZX1gO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnRucygpIHtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZU92ZXJDbGVhblVwKGxvc2VyQm9hcmQpIHtcbiAgICB1cGRhdGVJbmZvVGV4dChsb3NlckJvYXJkKTtcbiAgICB1cGRhdGVTY29yZXMobG9zZXJCb2FyZCk7XG4gICAgZW5hYmxlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd01vZGVEaXYoKSB7XG4gICAgbW9kZURpdi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBtb2RlRGl2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVNb2RlRGl2KCkge1xuICAgIG1vZGVEaXYuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgbW9kZURpdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93UGxheWVyU2NvcmVEaXYoKSB7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBsYXllckNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlUGxheWVyU2NvcmVEaXYoKSB7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHBsYXllckNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH1cblxuICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcHMucHVibGlzaChcIm5ldy1nYW1lXCIpO1xuICB9KTtcblxuICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTd2l0Y2ggYnV0dG9uIGRpc2FibGVkIHN0YXRlc1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtb25cIik7XG4gICAgdG9wUGxheWVyTmFtZSA9IFwiQ1BVXCI7XG4gICAgYm90UGxheWVyTmFtZSA9IFwiUGxheWVyXCI7XG4gICAgaGlkZU1vZGVEaXYoKTtcbiAgICByZXNldFNjb3JlcygpO1xuICAgIHNob3dQbGF5ZXJTY29yZURpdigpO1xuXG4gICAgeWVzQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBub0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTd2l0Y2ggYnV0dG9uIGRpc2FibGVkIHN0YXRlc1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtb2ZmXCIpO1xuICAgIHRvcFBsYXllck5hbWUgPSBcIlRvcCBQbGF5ZXJcIjtcbiAgICBib3RQbGF5ZXJOYW1lID0gXCJCb3R0b20gUGxheWVyXCI7XG4gICAgaGlkZU1vZGVEaXYoKTtcbiAgICByZXNldFNjb3JlcygpO1xuICAgIHNob3dQbGF5ZXJTY29yZURpdigpO1xuICAgIHllc0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgbm9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gUmVzZXQgc3RhdHNcbiAgICBoaWRlUGxheWVyU2NvcmVEaXYoKTtcbiAgICBzaG93TW9kZURpdigpO1xuICAgIHJlc2V0U2NvcmVzKCk7XG5cbiAgICAvLyBTd2l0Y2ggYnV0dG9uIGRpc2FibGVkIHN0YXRlc1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtb2ZmXCIpO1xuICAgIHBzLnB1Ymxpc2goXCJjbGVhci1ib2FyZFwiKTtcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHllc0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIG5vQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIC8vIFB1YnN1YlxuICBwcy5zdWJzY3JpYmUoXCJnYW1lLW92ZXJcIiwgZ2FtZU92ZXJDbGVhblVwKTtcbiAgcHMuc3Vic2NyaWJlKFwiaW5mby11cGRhdGVcIiwgdXBkYXRlSW5mb1RleHQpO1xuXG4gIC8vIEhpZGUgcGxheWVyIHNjb3JlIGRpdiBvbiBpbml0XG4gIGhpZGVQbGF5ZXJTY29yZURpdigpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUxheW91dCBmcm9tIFwiLi9nYW1lQm9hcmRMYXlvdXRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IHN0YXRCb2FyZCBmcm9tIFwiLi9zdGF0Qm9hcmRcIjtcbmltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuLy8gQ3JlYXRlIGJvYXJkIGxheW91dFxuc3RhdEJvYXJkKCk7XG5jcmVhdGVMYXlvdXQoKTtcblxuLy8gQ3JlYXRlIHBsYXllcnNcbmxldCBib3RQbGF5ZXIgPSBuZXcgUGxheWVyKFwiUExBWUVSIDFcIik7XG5sZXQgdG9wUGxheWVyID0gbmV3IFBsYXllcihcIlBMQVlFUiAyXCIpO1xuXG4vLyBHYW1lYm9hcmQgc2V0dXBcbmxldCBib3RQbGF5ZXJCb2FyZCA9IG5ldyBHYW1lQm9hcmQoYm90UGxheWVyLCBcImJvdFwiKTtcbmxldCB0b3BQbGF5ZXJCb2FyZCA9IG5ldyBHYW1lQm9hcmQodG9wUGxheWVyLCBcInRvcFwiKTtcblxuLy8gQm90dG9tIFBsYXllciBzaGlwc1xubGV0IGJvdFNoaXAxID0gbmV3IFNoaXAoKTtcbmxldCBib3RTaGlwMiA9IG5ldyBTaGlwKCk7XG5sZXQgYm90U2hpcDMgPSBuZXcgU2hpcCgpO1xubGV0IGJvdFNoaXA0ID0gbmV3IFNoaXAoKTtcblxuLy8gVG9wIHBsYXllciBzaGlwc1xubGV0IHRvcFNoaXAxID0gbmV3IFNoaXAoKTtcbmxldCB0b3BTaGlwMiA9IG5ldyBTaGlwKCk7XG5sZXQgdG9wU2hpcDMgPSBuZXcgU2hpcCgpO1xubGV0IHRvcFNoaXA0ID0gbmV3IFNoaXAoKTtcblxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgLy8gQm90dG9tIHBsYXllciBzaGlwc1xuICBib3RTaGlwMSA9IG51bGw7XG4gIGJvdFNoaXAyID0gbnVsbDtcbiAgYm90U2hpcDMgPSBudWxsO1xuICBib3RTaGlwNCA9IG51bGw7XG5cbiAgYm90U2hpcDEgPSBuZXcgU2hpcCgyKTtcbiAgYm90U2hpcDIgPSBuZXcgU2hpcCgzKTtcbiAgYm90U2hpcDMgPSBuZXcgU2hpcCg0KTtcbiAgYm90U2hpcDQgPSBuZXcgU2hpcCg0KTtcblxuICAvLyBUb3AgcGxheWVyIHNoaXBzXG4gIHRvcFNoaXAxID0gbnVsbDtcbiAgdG9wU2hpcDIgPSBudWxsO1xuICB0b3BTaGlwMyA9IG51bGw7XG4gIHRvcFNoaXA0ID0gbnVsbDtcblxuICB0b3BTaGlwMSA9IG5ldyBTaGlwKDIpO1xuICB0b3BTaGlwMiA9IG5ldyBTaGlwKDMpO1xuICB0b3BTaGlwMyA9IG5ldyBTaGlwKDQpO1xuICB0b3BTaGlwNCA9IG5ldyBTaGlwKDQpO1xuXG4gIHBzLnB1Ymxpc2goXCJyZXNldC12YWx1ZXNcIik7XG5cbiAgLy8gUGxhY2UgcGxheWVyIHNoaXBzXG4gIGJvdFBsYXllckJvYXJkLnBsYWNlU2hpcERvd24oYm90U2hpcDEpO1xuICBib3RQbGF5ZXJCb2FyZC5wbGFjZVNoaXBEb3duKGJvdFNoaXAyKTtcbiAgYm90UGxheWVyQm9hcmQucGxhY2VTaGlwUmlnaHQoYm90U2hpcDMpO1xuICBib3RQbGF5ZXJCb2FyZC5wbGFjZVNoaXBSaWdodChib3RTaGlwNCk7XG5cbiAgLy8gUGxhY2UgQ1BVIHNoaXBzXG4gIHRvcFBsYXllckJvYXJkLnBsYWNlU2hpcERvd24odG9wU2hpcDEpO1xuICB0b3BQbGF5ZXJCb2FyZC5wbGFjZVNoaXBEb3duKHRvcFNoaXAyKTtcbiAgdG9wUGxheWVyQm9hcmQucGxhY2VTaGlwUmlnaHQodG9wU2hpcDMpO1xuICB0b3BQbGF5ZXJCb2FyZC5wbGFjZVNoaXBSaWdodCh0b3BTaGlwNCk7XG5cbiAgLy8gVXBkYXRlIGJvdGggZ3JpZHNcbiAgYm90UGxheWVyQm9hcmQudXBkYXRlR3JpZChcImJvdFwiKTtcbiAgdG9wUGxheWVyQm9hcmQudXBkYXRlR3JpZChcInRvcFwiKTtcbn1cblxucHMuc3Vic2NyaWJlKFwibmV3LWdhbWVcIiwgbmV3R2FtZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=