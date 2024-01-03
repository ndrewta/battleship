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


class GameBoard {
  constructor(owner, boardPosition) {
    this.owner = owner;
    this.boardPosition = boardPosition;
    this.grid = {};
    this.initGrid(this.length, this.width);
    this.sunkShips = 0;
    this.shipSet = new Set();
    this.totalShips = 0;
    this.selectedMoves = [];
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("attack-grid", (e) => this.receiveAttack(e));
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("reset-values", () => this.resetValues());
    _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("cpu-attack", () => this.cpuAttack());
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
    this.selectedMoves = [];
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
    let move;
    let decidedMove = false;

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

    while (!decidedMove) {
      // Exit loop if all moves exhausted
      if (this.selectedMoves.length >= 100) {
        return;
      }
      // Continue looping until a unique coordinate is found
      move = randomCoord();
      if (!checkMoves(move)) {
        decidedMove = true;
      }
    }

    this.selectedMoves.push(move);

    return move;
  }

  cpuAttack() {
    const move = this.cpuMove();
    this.receiveAttack(move);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFFO0FBQ1osVUFBVTtBQUNWLFVBQVUsK0NBQUU7QUFDWjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFFO0FBQ1osVUFBVTtBQUNWLFVBQVUsK0NBQUU7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLCtDQUFFO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSxNQUFNLCtDQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsTUFBTSwrQ0FBRTtBQUNSO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsK0NBQUU7QUFDSixFQUFFLCtDQUFFO0FBQ0osRUFBRSwrQ0FBRTtBQUNKLEVBQUUsK0NBQUU7QUFDSixFQUFFLCtDQUFFO0FBQ0o7QUFDQSxHQUFHO0FBQ0gsRUFBRSwrQ0FBRTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUMxUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkY7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixjQUFjLElBQUksZUFBZTs7QUFFOUQ7QUFDQTtBQUNBLDZCQUE2QixjQUFjLElB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aUJBQWlCLDZDQUFJO0FBQ3JCLGlCQUFpQiw2Q0FBSTtBQUNyQixpQkFBaUIsNkNBQUk7QUFDckIsaUJBQWlCLDZDQUFJOztBQUVyQixFQUFFLCtDQUFFOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkTGF5b3V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcHViU3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RhdEJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAzMHZ3O1xufVxuXG4uc3RhdHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDcwMHB4O1xufVxuXG4jcGxheWVycy1kaXYgPiBwLFxuI3F1ZXN0aW9uLWRpdiA+IHAsXG4jaW5mby1kaXYgPiBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jbW9kZS1zZWxlY3QtZGl2LFxuI3BsYXllci1zY29yZXMtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cblxuI2luZm8tZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbiNidG4tY29udGFpbmVyLFxuI3BsYXllci1jb250YWluZXItYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uYm9hcmQge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xufVxuXG4jdG9wLWxhYmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI2xlZnQtbGFiZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB3aWR0aDogNTc1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzVweCA1MDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IDUwMHB4O1xufVxuXG4uc3F1YXJlcyB7XG4gIGJvcmRlcjogc29saWQgMXB4O1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTY5LCAyMDIpO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMTI5LCAxMjkpO1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMzcsIDM3KTtcbn1cblxucCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAzMHZ3O1xcbn1cXG5cXG4uc3RhdHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA3MDBweDtcXG59XFxuXFxuI3BsYXllcnMtZGl2ID4gcCxcXG4jcXVlc3Rpb24tZGl2ID4gcCxcXG4jaW5mby1kaXYgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI21vZGUtc2VsZWN0LWRpdixcXG4jcGxheWVyLXNjb3Jlcy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xcbn1cXG5cXG4jaW5mby1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuI2J0bi1jb250YWluZXIsXFxuI3BsYXllci1jb250YWluZXItYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5ib2FyZCB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxufVxcblxcbiN0b3AtbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jbGVmdC1sYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gIHdpZHRoOiA1NzVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggNTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggNTAwcHg7XFxufVxcblxcbi5zcXVhcmVzIHtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDE2OSwgMjAyKTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc1LCAxMjksIDEyOSk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMzcsIDM3KTtcXG59XFxuXFxucCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3Iob3duZXIsIGJvYXJkUG9zaXRpb24pIHtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5ib2FyZFBvc2l0aW9uID0gYm9hcmRQb3NpdGlvbjtcbiAgICB0aGlzLmdyaWQgPSB7fTtcbiAgICB0aGlzLmluaXRHcmlkKHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoKTtcbiAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy5zaGlwU2V0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMudG90YWxTaGlwcyA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZE1vdmVzID0gW107XG4gICAgcHMuc3Vic2NyaWJlKFwiYXR0YWNrLWdyaWRcIiwgKGUpID0+IHRoaXMucmVjZWl2ZUF0dGFjayhlKSk7XG4gICAgcHMuc3Vic2NyaWJlKFwicmVzZXQtdmFsdWVzXCIsICgpID0+IHRoaXMucmVzZXRWYWx1ZXMoKSk7XG4gICAgcHMuc3Vic2NyaWJlKFwiY3B1LWF0dGFja1wiLCAoKSA9PiB0aGlzLmNwdUF0dGFjaygpKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWVzKCkge1xuICAgIC8vIFJlc2V0IHNoaXAgc2V0XG4gICAgdGhpcy5zaGlwU2V0ID0gbnVsbDtcbiAgICB0aGlzLnNoaXBTZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBSZXNldCBncmlkXG4gICAgdGhpcy5ncmlkID0ge307XG4gICAgdGhpcy5pbml0R3JpZCh0aGlzLmxlbmd0aCwgdGhpcy53aWR0aCk7XG5cbiAgICAvLyBSZXNldCB2YXJpYWJsZXNcbiAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy50b3RhbFNoaXBzID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkTW92ZXMgPSBbXTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIC8vIENyZWF0ZSBhIDEweDEwIGdyaWRcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF0gPSB7fTtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0ge307XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb29yZHMoKSB7XG4gICAgLy8gR2VuZXJhdGUgY29vcmRpbmF0ZXNcbiAgICBsZXQgbnVtWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgbGV0IG51bVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgIGxldCBhYnNEaWZmZXJlbmNlID0gTWF0aC5hYnMobnVtWCAtIG51bVkpO1xuICAgIGxldCBjb29yZGluYXRlcyA9IFtudW1YLCBudW1ZXTtcblxuICAgIHdoaWxlIChhYnNEaWZmZXJlbmNlID4gNCB8fCBhYnNEaWZmZXJlbmNlID09IDApIHtcbiAgICAgIG51bVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgbnVtWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICBhYnNEaWZmZXJlbmNlID0gTWF0aC5hYnMobnVtWCAtIG51bVkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIHBsYWNlU2hpcERvd24oc2hpcCwgeCwgeSkge1xuICAgIC8vIEdlbmVyYXRlIGNvb3JkaW5hdGVzIGlmIG51bGxcbiAgICBpZiAoKHggJiYgeSkgPT0gbnVsbCkgW3gsIHldID0gdGhpcy5nZW5lcmF0ZUNvb3JkcygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgeSBjb29yZGluYXRlIGlzIG91dCBvZiBib3VuZHNcbiAgICBpZiAoeSAtIHNoaXAubGVuZ3RoICsgMSA8PSAwKSB7XG4gICAgICAvLyBNb2RpZnkgY29vcmRpbmF0ZVxuICAgICAgeSArPSBNYXRoLmFicyh5IC0gc2hpcC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFub3RoZXIgc2hpcCBoYXMgb2NjdXBpZWQgdGhlIHNxdWFyZVxuICAgIGxldCBvdmVybGFwID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ncmlkW3hdW3kgLSBpXS5sZW5ndGgpIHtcbiAgICAgICAgb3ZlcmxhcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG92ZXJsYXAgdGhlbiBjaGFuZ2UgeCBjb29yZGluYXRlXG4gICAgaWYgKG92ZXJsYXApIHtcbiAgICAgIGNvbnN0IG5ld1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgdGhpcy5wbGFjZVNoaXBEb3duKHNoaXAsIG5ld1gsIHkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXAgZG93bndhcmRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF1beSAtIGldID0gc2hpcDtcbiAgICB9XG4gICAgdGhpcy5zaGlwU2V0LmFkZChzaGlwKTtcbiAgICB0aGlzLnRvdGFsU2hpcHMgKz0gMTtcbiAgfVxuXG4gIHBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIHkpIHtcbiAgICAvLyBHZW5lcmF0ZSBjb29yZGluYXRlcyBpZiBudWxsXG4gICAgaWYgKCh4ICYmIHkpID09IG51bGwpIFt4LCB5XSA9IHRoaXMuZ2VuZXJhdGVDb29yZHMoKTtcblxuICAgIC8vIENoZWNrIGlmIHggY29vcmRpbmF0ZSBpcyBvdXQgb2YgYm91bmRzXG4gICAgaWYgKHggKyBzaGlwLmxlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgLy8gTW9kaWZ5IGNvb3JkaW5hdGVcbiAgICAgIHggLT0geCArIHNoaXAubGVuZ3RoIC0gMTE7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYW5vdGhlciBzaGlwIGhhcyBvY2N1cGllZCB0aGUgc3F1YXJlXG4gICAgbGV0IG92ZXJsYXAgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdyaWRbeCArIGldW3ldLmxlbmd0aCkge1xuICAgICAgICBvdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgb3ZlcmxhcCB0aGVuIGNoYW5nZSB4IGNvb3JkaW5hdGVcbiAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgY29uc3QgbmV3WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICB0aGlzLnBsYWNlU2hpcFJpZ2h0KHNoaXAsIHgsIG5ld1kpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXAgcmlnaHR3YXJkc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgfVxuICAgIHRoaXMuc2hpcFNldC5hZGQoc2hpcCk7XG4gICAgdGhpcy50b3RhbFNoaXBzICs9IDE7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgY29uc3QgeyB4IH0gPSBjb29yZDtcbiAgICBjb25zdCB7IHkgfSA9IGNvb3JkO1xuICAgIGNvbnN0IHsgb3duZXIgfSA9IGNvb3JkO1xuICAgIGlmIChvd25lciAhPT0gdGhpcy5ib2FyZFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGEgY29vcmRpbmF0ZSBoaXQgb3IgbWlzcyBhIHNoaXBcbiAgICBpZiAodGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9PSBcImhpdFwiIHx8IHRoaXMuZ3JpZFt4XVt5XS5zdGF0dXMgPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKE9iamVjdC52YWx1ZXModGhpcy5ncmlkW3hdW3ldKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIENoZWNrIGlmIGFscmVhZHkgaGl0IG9yIG1pc3MgdGhlbiBkbyBub3RoaW5nXG4gICAgICAvLyBzaGlwLmhpdHMgKz0gMTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5oaXQoKTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgIGNvbnN0IGdyaWRPYmogPSB7IHN0YXR1czogXCJoaXRcIiB9O1xuICAgICAgdGhpcy5ncmlkW3hdW3ldID0gZ3JpZE9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkW3hdW3ldLnN0YXR1cyA9IFwibWlzc1wiO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgZ3JpZFxuICAgIC8vIENoZWNrIHBsYXllciBzaGlwcyBzdGF0dXNcbiAgICB0aGlzLnVwZGF0ZUdyaWQob3duZXIpO1xuICAgIHRoaXMuY2hlY2tQbGF5ZXJTaGlwcygpO1xuICB9XG5cbiAgY2hlY2tQbGF5ZXJTaGlwcygpIHtcbiAgICAvLyBDaGVjayBpZiBzaGlwcyBzdW5rIHRoZW4gcHVzaCB0byBhcnJheVxuICAgIHRoaXMuc2hpcFNldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zdW5rID09IHRydWUgJiYgc2hpcC5sZW5ndGggPT0gc2hpcC5oaXRzKSB7XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIHRoaXMuc2hpcFNldC5kZWxldGUoc2hpcCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBpZiBudW1iZXIgb2Ygc3VuayBzaGlwcyBpcyBlcXVhbCB0byBudW1iZXIgb2YgYWxsIHNoaXBzIG9uIGJvYXJkXG4gICAgaWYgKHRoaXMuc3Vua1NoaXBzID09IHRoaXMudG90YWxTaGlwcykge1xuICAgICAgcHMucHVibGlzaChcImdhbWUtb3ZlclwiLCB0aGlzLmJvYXJkUG9zaXRpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZUdyaWQoZWxlbSkge1xuICAgIC8vIFB1Ymxpc2ggdXBkYXRlZCBncmlkIHZhbHVlc1xuICAgIGNvbnN0IG9iaiA9IHsgb3duZXI6IHRoaXMub3duZXIsIGdyaWQ6IHRoaXMuZ3JpZCwgZWxlbSB9O1xuICAgIHBzLnB1Ymxpc2goXCJ1cGRhdGUtYm9hcmRcIiwgb2JqKTtcbiAgfVxuXG4gIC8vIEFJIGxvZ2ljXG4gIGNwdU1vdmUoeCA9IDEwLCB5ID0gMTApIHtcbiAgICBsZXQgbW92ZTtcbiAgICBsZXQgZGVjaWRlZE1vdmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJhbmRvbUNvb3JkID0gKCkgPT4ge1xuICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIGNvb3JkaW5hdGVzXG4gICAgICBjb25zdCBvYmogPSB7IG93bmVyOiBcImJvdFwiIH07XG4gICAgICBjb25zdCBjb29yZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KSArIDE7XG4gICAgICBjb25zdCBjb29yZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB5KSArIDE7XG4gICAgICBvYmoueCA9IGNvb3JkWDtcbiAgICAgIG9iai55ID0gY29vcmRZO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tNb3ZlcyA9IChuZXdNb3ZlKSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlcyBoYXZlIGJlZW4gc2VsZWN0ZWQgcHJldmlvdXNseVxuICAgICAgZm9yIChjb25zdCBtb3ZlIG9mIHRoaXMuc2VsZWN0ZWRNb3Zlcykge1xuICAgICAgICBpZiAobW92ZS54ID09PSBuZXdNb3ZlLnggJiYgbW92ZS55ID09PSBuZXdNb3ZlLnkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICB3aGlsZSAoIWRlY2lkZWRNb3ZlKSB7XG4gICAgICAvLyBFeGl0IGxvb3AgaWYgYWxsIG1vdmVzIGV4aGF1c3RlZFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNb3Zlcy5sZW5ndGggPj0gMTAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIENvbnRpbnVlIGxvb3BpbmcgdW50aWwgYSB1bmlxdWUgY29vcmRpbmF0ZSBpcyBmb3VuZFxuICAgICAgbW92ZSA9IHJhbmRvbUNvb3JkKCk7XG4gICAgICBpZiAoIWNoZWNrTW92ZXMobW92ZSkpIHtcbiAgICAgICAgZGVjaWRlZE1vdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRNb3Zlcy5wdXNoKG1vdmUpO1xuXG4gICAgcmV0dXJuIG1vdmU7XG4gIH1cblxuICBjcHVBdHRhY2soKSB7XG4gICAgY29uc3QgbW92ZSA9IHRoaXMuY3B1TW92ZSgpO1xuICAgIHRoaXMucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIC8vIENoZWNrIGlmIGhpdHMgPiBsZW5ndGhcbiAgICAvLyBIaXQgdGFyZ2V0XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgLy8gQ2hlY2sgaWYgc2hpcCBoaXRzID49IGxlbmd0aCB0aGVuIGl0J3Mgc3Vua1xuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN1bms7XG4gIH1cbn1cbiIsImltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gIC8vIENyZWF0ZSBnYW1lIGNvbnRlbnQgYm9hcmRcbiAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFpbmVyXCIpWzBdO1xuICBsZXQgdG9wQm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwidG9wXCIpO1xuICBsZXQgYm90Qm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwiYm90XCIpO1xuICBsZXQgZGlzYWJsZUFsbEJvYXJkcyA9IHRydWU7XG4gIGxldCBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuICBsZXQgY3B1QWN0aXZlID0gZmFsc2U7XG5cbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQodG9wQm9hcmQpO1xuICBib2FyZERpdi5hcHBlbmRDaGlsZChib3RCb2FyZCk7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZChpZCkge1xuICAgIC8vIENyZWF0ZSBib2FyZFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvYXJkXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHNxdWFyZXNcbiAgICBmb3IgKGxldCB5ID0gMTA7IHkgPiAwOyB5LS0pIHtcbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3F1YXJlc1wiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCB4KTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCB5KTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGFiZWxzXG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgY29uc3QgbGVmdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0TGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsZWZ0LWxhYmVsXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSBsZXR0ZXJzW2ldO1xuICAgICAgbGVmdExhYmVsLmFwcGVuZENoaWxkKGxldHRlcik7XG4gICAgfVxuICAgIGNvbnN0IHRvcExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b3BMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1sYWJlbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IGk7XG4gICAgICB0b3BMYWJlbC5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCBvYmplY3RzIHRvIHRvcCBib2FyZFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRMYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvcExhYmVsKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCb2FyZChvYmopIHtcbiAgICAvLyBVcGRhdGUgYm9hcmQgZWxlbWVudHNcblxuICAgIGNvbnN0IGNvbnRlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmVsZW0pO1xuICAgIGNvbnN0IGJvYXJkRWxlbSA9IGNvbnRlbnRFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJib2FyZFwiKVswXTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvb3JkaW5hdGUob2JqLCB4LCB5KSB7XG4gICAgICAvLyBVcGRhdGUgY29vcmRpbmF0ZSB3aXRoIG9ialxuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGJvYXJkRWxlbS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBkYXRhWCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgICAgICBjb25zdCBkYXRhWSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuXG4gICAgICAgIGlmIChkYXRhWCA9PSB4ICYmIGRhdGFZID09IHkpIHtcbiAgICAgICAgICAvLyBBcHBlbmQgb2JqIGRhdGEgdG8gdGhlIHNxdWFyZXMgd2l0aCBjbGFzc2VzXG5cbiAgICAgICAgICBpZiAob2JqLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gSWYgQUkgYWN0aXZlIHRoZW4gaGlkZSB0b3AgYm9hcmQgc2hpcHNcbiAgICAgICAgICAgIGlmIChjcHVBY3RpdmUgJiYgY29udGVudEVsZW0uaWQgPT0gXCJ0b3BcIikge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvYmouc3RhdHVzID09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9iai5zdGF0dXMgPT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGJvYXJkIGNvb3JkaW5hdGVzXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgICAgICAvLyBGb3IgZWFjaCB4ICYgeSBjb29yZGluYXRlXG4gICAgICAgIC8vIGlmIChvYmouZGF0YVt4XVt5XS5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgaGl0L21pc3Mgb3Igc2hpcCBvYmplY3RcblxuICAgICAgICB1cGRhdGVDb29yZGluYXRlKG9iai5ncmlkW3hdW3ldLCB4LCB5KTtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCBhY3RpdmUgYm9hcmQgc3RhdGVcbiAgICBzd2l0Y2hBY3RpdmVCb2FyZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoSGlkZGVuQm9hcmQoKSB7XG4gICAgLy8gSWYgcHZwIG1vZGUgdGhlbiBoaWRlIHNoaXBzIG9uIGJvYXJkXG4gICAgY29uc3QgdG9wQm9hcmRTaGlwcyA9IEFycmF5LmZyb20odG9wQm9hcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNoaXBcIikpO1xuICAgIGNvbnN0IGJvdEJvYXJkU2hpcHMgPSBBcnJheS5mcm9tKGJvdEJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaGlwXCIpKTtcblxuICAgIC8vIFRlbXAgaGlkZSBzaGlwc1xuICAgIHRvcEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNzUsIDEyOSwgMTI5KVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNzUsIDEyOSwgMTI5KVwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV2FpdCAyIHNlY29uZHMgdGhlbiBkaXNwbGF5IHNoaXAgc3RhdHVzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9PSBcIm5vbmVcIikge1xuICAgICAgICAvLyBUb3AgYm9hcmQncyB0dXJuXG4gICAgICAgIHRvcEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoOTcsIDE2OSwgMjAyKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCb3R0b20gYm9hcmQncyB0dXJuXG4gICAgICAgIHRvcEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJvdEJvYXJkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoOTcsIDE2OSwgMjAyKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hBY3RpdmVCb2FyZCgpIHtcbiAgICAvLyBTd2l0Y2ggYWN0aXZlIGJvYXJkc1xuICAgIGlmIChkaXNhYmxlQWxsQm9hcmRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHBsYXllciBjb250cm9sXG4gICAgaWYgKHRvcEJvYXJkIHx8IGJvdEJvYXJkKSB7XG4gICAgICBpZiAodG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9PSBcImF1dG9cIikge1xuICAgICAgICB0b3BCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIGJvdEJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICAgICAgaWYgKGNwdUFjdGl2ZSkge1xuICAgICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgQ1BVJ3MgdHVybmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgVG9wIFBsYXllcidzIHR1cm5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgICBib3RCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIGlmIChjcHVBY3RpdmUpIHtcbiAgICAgICAgICBwcy5wdWJsaXNoKFwiaW5mby11cGRhdGVcIiwgYFlvdXIgdHVybmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBzLnB1Ymxpc2goXCJpbmZvLXVwZGF0ZVwiLCBgQm90dG9tIFBsYXllcidzIHR1cm5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHB2cCBtb2RlIGVuYWJsZWRcbiAgICBpZiAoIWNwdUFjdGl2ZSkge1xuICAgICAgc3dpdGNoSGlkZGVuQm9hcmQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBBSSBhY3RpdmUgdGhlbiBhdHRhY2tcbiAgICBzZXRUaW1lb3V0KGNwdUF0dGFjaywgMTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlQm9hcmRzKCkge1xuICAgIGRpc2FibGVBbGxCb2FyZHMgPSB0cnVlO1xuICAgIGlmICh0b3BCb2FyZCB8fCBib3RCb2FyZCkge1xuICAgICAgdG9wQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgYm90Qm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gICAgLy8gQ2xlYXIgYm90aCBib2FyZHMgZnJvbSBjb250YWluZXJcbiAgICB3aGlsZSAoYm9hcmREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgYm9hcmREaXYucmVtb3ZlQ2hpbGQoYm9hcmREaXYubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICB0b3BCb2FyZCA9IGdlbmVyYXRlQm9hcmQoXCJ0b3BcIik7XG4gICAgYm90Qm9hcmQgPSBnZW5lcmF0ZUJvYXJkKFwiYm90XCIpO1xuXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQodG9wQm9hcmQpO1xuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGJvdEJvYXJkKTtcbiAgfVxuXG4gIC8vIEFJIE1vdmVcbiAgZnVuY3Rpb24gY3B1QXR0YWNrKCkge1xuICAgIC8vIENoZWNrIGlmIHBsYXllciBoYXMgbW92ZWQgYW5kIEFJIG1vZGUgYWN0aXZlXG4gICAgaWYgKGNwdUFjdGl2ZSAmJiBwbGF5ZXJNb3ZlZCkge1xuICAgICAgcGxheWVyTW92ZWQgPSBmYWxzZTtcblxuICAgICAgcHMucHVibGlzaChcImNwdS1hdHRhY2tcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gTW91c2UgZXZlbnRzXG4gIGJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudEJvYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnRCb2FyZC5pZCA9PSBcInRvcFwiKSB7XG4gICAgICBjb25zdCBkYXRhWCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgICAgY29uc3QgZGF0YVkgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0geyBvd25lcjogXCJ0b3BcIiwgeDogZGF0YVgsIHk6IGRhdGFZIH07XG5cbiAgICAgIC8vIFBsYXllciBoYXMgbW92ZWQgKEFJIGNoZWNrKVxuICAgICAgcGxheWVyTW92ZWQgPSB0cnVlO1xuICAgICAgcHMucHVibGlzaChcImF0dGFjay1ncmlkXCIsIGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gICAgLy8gRGlzYWJsZSBjaGVja2luZyBib3QgYm9hcmQgaWYgQUkgYWN0aXZlXG4gICAgaWYgKHBhcmVudEJvYXJkLmlkID09IFwiYm90XCIgJiYgY3B1QWN0aXZlID09IGZhbHNlKSB7XG4gICAgICBjb25zdCBkYXRhWCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgICAgY29uc3QgZGF0YVkgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0geyBvd25lcjogXCJib3RcIiwgeDogZGF0YVgsIHk6IGRhdGFZIH07XG5cbiAgICAgIHBzLnB1Ymxpc2goXCJhdHRhY2stZ3JpZFwiLCBjb29yZGluYXRlcyk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZGlzYWJsZUFsbEJvYXJkcyA9IGZhbHNlO1xuICAgIHBsYXllck1vdmVkID0gZmFsc2U7XG4gICAgLy8gY2xlYXIgYm9hcmQgc3RhdHVzIGFuZCByZWJ1aWxkIHNoaXBzXG4gICAgcmVzZXRCb2FyZCgpO1xuICAgIHN3aXRjaEFjdGl2ZUJvYXJkKCk7XG4gIH1cblxuICBkaXNhYmxlQm9hcmRzKCk7XG4gIHBzLnN1YnNjcmliZShcInVwZGF0ZS1ib2FyZFwiLCB1cGRhdGVCb2FyZCk7XG4gIHBzLnN1YnNjcmliZShcImdhbWUtb3ZlclwiLCBkaXNhYmxlQm9hcmRzKTtcbiAgcHMuc3Vic2NyaWJlKFwibmV3LWdhbWVcIiwgc3RhcnRHYW1lKTtcbiAgcHMuc3Vic2NyaWJlKFwiY2xlYXItYm9hcmRcIiwgcmVzZXRCb2FyZCk7XG4gIHBzLnN1YnNjcmliZShcImNwdS1vblwiLCAoKSA9PiB7XG4gICAgY3B1QWN0aXZlID0gdHJ1ZTtcbiAgfSk7XG4gIHBzLnN1YnNjcmliZShcImNwdS1vZmZcIiwgKCkgPT4ge1xuICAgIGNwdUFjdGl2ZSA9IGZhbHNlO1xuICB9KTtcbn1cbiIsImZ1bmN0aW9uIHB1YlN1YigpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgcHVibGlzaCwgc3Vic2NyaWJlIH07XG59XG5cbmNvbnN0IHNoYXJlZFB1YlN1YiA9IHB1YlN1YigpO1xuZXhwb3J0IGRlZmF1bHQgc2hhcmVkUHViU3ViO1xuIiwiaW1wb3J0IHBzIGZyb20gXCIuL3B1YlN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0Qm9hcmQoKSB7XG4gIC8vIEluaXRpYWwgdmFyaWFibGVzXG4gIGxldCB0b3BQbGF5ZXJOYW1lID0gXCJUb3AgcGxheWVyXCI7XG4gIGxldCBib3RQbGF5ZXJOYW1lID0gXCJCb3R0b20gcGxheWVyXCI7XG4gIGxldCB0b3BQbGF5ZXJTY29yZSA9IDA7XG4gIGxldCBib3RQbGF5ZXJTY29yZSA9IDA7XG5cbiAgLy8gTWFpbiBjb250YWluZXJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXRzLWNvbnRhaW5lclwiKVswXTtcblxuICAvLyBQbGF5ZXIgc3RhdHMgY29udGFpbmVyXG4gIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1zY29yZXMtZGl2XCIpO1xuXG4gIGNvbnN0IHBsYXllcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJzRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVycy1kaXZcIik7XG5cbiAgY29uc3QgdG9wUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvcFBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1wbGF5ZXJcIik7XG4gIHRvcFBsYXllci50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9OiAke3RvcFBsYXllclNjb3JlfWA7XG5cbiAgY29uc3QgYm90UGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJvdFBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvdC1wbGF5ZXJcIik7XG4gIGJvdFBsYXllci50ZXh0Q29udGVudCA9IGAke2JvdFBsYXllck5hbWV9OiAke2JvdFBsYXllclNjb3JlfWA7XG5cbiAgcGxheWVyc0Rpdi5hcHBlbmRDaGlsZCh0b3BQbGF5ZXIpO1xuICBwbGF5ZXJzRGl2LmFwcGVuZENoaWxkKGJvdFBsYXllcik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJzRGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvbnRhaW5lcik7XG5cbiAgLy8gTW9kZSBzZWxlY3QgY29udGFpbmVyXG4gIGNvbnN0IG1vZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kZS1zZWxlY3QtZGl2XCIpO1xuXG4gIC8vIE1vZGUgc2VsZWN0IHF1ZXN0aW9uXG4gIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcXVlc3Rpb25EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJxdWVzdGlvbi1kaXZcIik7XG4gIGNvbnN0IHF1ZXN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBxdWVzdGlvblRleHQudGV4dENvbnRlbnQgPSBcIlZlcnNlIENQVT9cIjtcbiAgcXVlc3Rpb25EaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25UZXh0KTtcblxuICAvLyBNb2RlIHNlbGVjdCBidXR0b25zXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ0bi1jb250YWluZXJcIik7XG4gIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHllc0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInllcy1idG5cIik7XG4gIHllc0J0bi50ZXh0Q29udGVudCA9IFwiWWVzXCI7XG4gIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbm9CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuby1idG5cIik7XG4gIG5vQnRuLnRleHRDb250ZW50ID0gXCJOb1wiO1xuXG4gIG1vZGVEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25EaXYpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoeWVzQnRuKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vQnRuKTtcbiAgbW9kZURpdi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kZURpdik7XG5cbiAgLy8gUGxheWVyIGNvbnRhaW5lciBidXR0b25zXG4gIGNvbnN0IHBsYXllckNvbnRhaW5lckJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJDb250YWluZXJCdG5zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLWNvbnRhaW5lci1idG5zXCIpO1xuICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyQnRucyk7XG5cbiAgLy8gU3RhcnQgYnV0dG9uXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBHYW1lXCI7XG4gIHN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnQtYnRuXCIpO1xuICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHBsYXllckNvbnRhaW5lckJ0bnMuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gIC8vIFJlc2V0IGJ1dHRvblxuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlc2V0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzZXQtYnRuXCIpO1xuICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgcGxheWVyQ29udGFpbmVyQnRucy5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG5cbiAgLy8gVHVybi92aWN0b3J5IG5vdGlmaWNhdGlvblxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZm8tZGl2XCIpO1xuICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9UZXh0KTtcblxuICBmdW5jdGlvbiB1cGRhdGVJbmZvVGV4dCh0ZXh0KSB7XG4gICAgLy8gTG9zZXIgQm9hcmQgaW5mb1xuICAgIGlmICh0ZXh0ID09IFwidG9wXCIpIHtcbiAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX0gd29uIWA7XG4gICAgfSBlbHNlIGlmICh0ZXh0ID09IFwiYm90XCIpIHtcbiAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX0gd29uIWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY29yZXMobG9zZXJCb2FyZCkge1xuICAgIC8vIFVwZGF0ZSBzY29yZXNcbiAgICBpZiAobG9zZXJCb2FyZCA9PSBcInRvcFwiKSB7XG4gICAgICBib3RQbGF5ZXJTY29yZSArPSAxO1xuICAgICAgYm90UGxheWVyLnRleHRDb250ZW50ID0gYCR7Ym90UGxheWVyTmFtZX06ICR7Ym90UGxheWVyU2NvcmV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wUGxheWVyU2NvcmUgKz0gMTtcbiAgICAgIHRvcFBsYXllci50ZXh0Q29udGVudCA9IGAke3RvcFBsYXllck5hbWV9OiAke3RvcFBsYXllclNjb3JlfWA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRTY29yZXMoKSB7XG4gICAgLy8gUmVzZXQgc2NvcmVzIGFuZCB1cGRhdGUgYm9hcmRcbiAgICB0b3BQbGF5ZXJTY29yZSA9IDA7XG4gICAgYm90UGxheWVyU2NvcmUgPSAwO1xuXG4gICAgdG9wUGxheWVyLnRleHRDb250ZW50ID0gYCR7dG9wUGxheWVyTmFtZX06ICR7dG9wUGxheWVyU2NvcmV9YDtcbiAgICBib3RQbGF5ZXIudGV4dENvbnRlbnQgPSBgJHtib3RQbGF5ZXJOYW1lfTogJHtib3RQbGF5ZXJTY29yZX1gO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnRucygpIHtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZU92ZXJDbGVhblVwKGxvc2VyQm9hcmQpIHtcbiAgICB1cGRhdGVJbmZvVGV4dChsb3NlckJvYXJkKTtcbiAgICB1cGRhdGVTY29yZXMobG9zZXJCb2FyZCk7XG4gICAgZW5hYmxlQnRucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd01vZGVEaXYoKSB7XG4gICAgbW9kZURpdi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBtb2RlRGl2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVNb2RlRGl2KCkge1xuICAgIG1vZGVEaXYuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgbW9kZURpdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93UGxheWVyU2NvcmVEaXYoKSB7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBsYXllckNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlUGxheWVyU2NvcmVEaXYoKSB7XG4gICAgcGxheWVyQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHBsYXllckNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH1cblxuICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcHMucHVibGlzaChcIm5ldy1nYW1lXCIpO1xuICB9KTtcblxuICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTd2l0Y2ggYnV0dG9uIGRpc2FibGVkIHN0YXRlc1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtb25cIik7XG4gICAgdG9wUGxheWVyTmFtZSA9IFwiQ1BVXCI7XG4gICAgYm90UGxheWVyTmFtZSA9IFwiUGxheWVyXCI7XG4gICAgaGlkZU1vZGVEaXYoKTtcbiAgICByZXNldFNjb3JlcygpO1xuICAgIHNob3dQbGF5ZXJTY29yZURpdigpO1xuXG4gICAgeWVzQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBub0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTd2l0Y2ggYnV0dG9uIGRpc2FibGVkIHN0YXRlc1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtb2ZmXCIpO1xuICAgIHRvcFBsYXllck5hbWUgPSBcIlRvcCBQbGF5ZXJcIjtcbiAgICBib3RQbGF5ZXJOYW1lID0gXCJCb3R0b20gUGxheWVyXCI7XG4gICAgaGlkZU1vZGVEaXYoKTtcbiAgICByZXNldFNjb3JlcygpO1xuICAgIHNob3dQbGF5ZXJTY29yZURpdigpO1xuICAgIHllc0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgbm9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gUmVzZXQgc3RhdHNcbiAgICBoaWRlUGxheWVyU2NvcmVEaXYoKTtcbiAgICBzaG93TW9kZURpdigpO1xuICAgIHJlc2V0U2NvcmVzKCk7XG5cbiAgICAvLyBTd2l0Y2ggYnV0dG9uIGRpc2FibGVkIHN0YXRlc1xuICAgIHBzLnB1Ymxpc2goXCJjcHUtb2ZmXCIpO1xuICAgIHBzLnB1Ymxpc2goXCJjbGVhci1ib2FyZFwiKTtcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHllc0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIG5vQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIC8vIFB1YnN1YlxuICBwcy5zdWJzY3JpYmUoXCJnYW1lLW92ZXJcIiwgZ2FtZU92ZXJDbGVhblVwKTtcbiAgcHMuc3Vic2NyaWJlKFwiaW5mby11cGRhdGVcIiwgdXBkYXRlSW5mb1RleHQpO1xuXG4gIC8vIEhpZGUgcGxheWVyIHNjb3JlIGRpdiBvbiBpbml0XG4gIGhpZGVQbGF5ZXJTY29yZURpdigpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUxheW91dCBmcm9tIFwiLi9nYW1lQm9hcmRMYXlvdXRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IHN0YXRCb2FyZCBmcm9tIFwiLi9zdGF0Qm9hcmRcIjtcbmltcG9ydCBwcyBmcm9tIFwiLi9wdWJTdWJcIjtcblxuLy8gQ3JlYXRlIGJvYXJkIGxheW91dFxuc3RhdEJvYXJkKCk7XG5jcmVhdGVMYXlvdXQoKTtcblxuLy8gQ3JlYXRlIHBsYXllcnNcbmxldCBib3RQbGF5ZXIgPSBuZXcgUGxheWVyKFwiUExBWUVSIDFcIik7XG5sZXQgdG9wUGxheWVyID0gbmV3IFBsYXllcihcIlBMQVlFUiAyXCIpO1xuXG4vLyBHYW1lYm9hcmQgc2V0dXBcbmxldCBib3RQbGF5ZXJCb2FyZCA9IG5ldyBHYW1lQm9hcmQoYm90UGxheWVyLCBcImJvdFwiKTtcbmxldCB0b3BQbGF5ZXJCb2FyZCA9IG5ldyBHYW1lQm9hcmQodG9wUGxheWVyLCBcInRvcFwiKTtcblxuLy8gQm90dG9tIFBsYXllciBzaGlwc1xubGV0IGJvdFNoaXAxID0gbmV3IFNoaXAoKTtcbmxldCBib3RTaGlwMiA9IG5ldyBTaGlwKCk7XG5sZXQgYm90U2hpcDMgPSBuZXcgU2hpcCgpO1xubGV0IGJvdFNoaXA0ID0gbmV3IFNoaXAoKTtcblxuLy8gVG9wIHBsYXllciBzaGlwc1xubGV0IHRvcFNoaXAxID0gbmV3IFNoaXAoKTtcbmxldCB0b3BTaGlwMiA9IG5ldyBTaGlwKCk7XG5sZXQgdG9wU2hpcDMgPSBuZXcgU2hpcCgpO1xubGV0IHRvcFNoaXA0ID0gbmV3IFNoaXAoKTtcblxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgLy8gQm90dG9tIHBsYXllciBzaGlwc1xuICBib3RTaGlwMSA9IG51bGw7XG4gIGJvdFNoaXAyID0gbnVsbDtcbiAgYm90U2hpcDMgPSBudWxsO1xuICBib3RTaGlwNCA9IG51bGw7XG5cbiAgYm90U2hpcDEgPSBuZXcgU2hpcCgyKTtcbiAgYm90U2hpcDIgPSBuZXcgU2hpcCgzKTtcbiAgYm90U2hpcDMgPSBuZXcgU2hpcCg0KTtcbiAgYm90U2hpcDQgPSBuZXcgU2hpcCg0KTtcblxuICAvLyBUb3AgcGxheWVyIHNoaXBzXG4gIHRvcFNoaXAxID0gbnVsbDtcbiAgdG9wU2hpcDIgPSBudWxsO1xuICB0b3BTaGlwMyA9IG51bGw7XG4gIHRvcFNoaXA0ID0gbnVsbDtcblxuICB0b3BTaGlwMSA9IG5ldyBTaGlwKDIpO1xuICB0b3BTaGlwMiA9IG5ldyBTaGlwKDMpO1xuICB0b3BTaGlwMyA9IG5ldyBTaGlwKDQpO1xuICB0b3BTaGlwNCA9IG5ldyBTaGlwKDQpO1xuXG4gIHBzLnB1Ymxpc2goXCJyZXNldC12YWx1ZXNcIik7XG5cbiAgLy8gUGxhY2UgcGxheWVyIHNoaXBzXG4gIGJvdFBsYXllckJvYXJkLnBsYWNlU2hpcERvd24oYm90U2hpcDEpO1xuICBib3RQbGF5ZXJCb2FyZC5wbGFjZVNoaXBEb3duKGJvdFNoaXAyKTtcbiAgYm90UGxheWVyQm9hcmQucGxhY2VTaGlwUmlnaHQoYm90U2hpcDMpO1xuICBib3RQbGF5ZXJCb2FyZC5wbGFjZVNoaXBSaWdodChib3RTaGlwNCk7XG5cbiAgLy8gUGxhY2UgQ1BVIHNoaXBzXG4gIHRvcFBsYXllckJvYXJkLnBsYWNlU2hpcERvd24odG9wU2hpcDEpO1xuICB0b3BQbGF5ZXJCb2FyZC5wbGFjZVNoaXBEb3duKHRvcFNoaXAyKTtcbiAgdG9wUGxheWVyQm9hcmQucGxhY2VTaGlwUmlnaHQodG9wU2hpcDMpO1xuICB0b3BQbGF5ZXJCb2FyZC5wbGFjZVNoaXBSaWdodCh0b3BTaGlwNCk7XG5cbiAgLy8gVXBkYXRlIGJvdGggZ3JpZHNcbiAgYm90UGxheWVyQm9hcmQudXBkYXRlR3JpZChcImJvdFwiKTtcbiAgdG9wUGxheWVyQm9hcmQudXBkYXRlR3JpZChcInRvcFwiKTtcbn1cblxucHMuc3Vic2NyaWJlKFwibmV3LWdhbWVcIiwgbmV3R2FtZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=