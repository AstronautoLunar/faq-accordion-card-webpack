/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.sass":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.sass ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\n.attribution {\\n  font-size: 11px;\\n  text-align: center;\\n  position: absolute;\\n  bottom: 20px;\\n  color: #e7e7e9; }\\n  .attribution a {\\n    color: #9fabdb; }\\n\\nbody {\\n  background-color: #e7e7e9; }\\n\\n#main {\\n  width: 100%;\\n  height: 100vh;\\n  background-image: linear-gradient(to bottom, #af67e9, #6565e7);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center; }\\n\\n@media screen and (max-width: 1048px) {\\n  #main {\\n    height: 120vh; } }\\n\\n@media screen and (max-width: 426px) {\\n  #main {\\n    height: 140vh; } }\\n\\n#container {\\n  width: 900px;\\n  height: 500px;\\n  position: relative; }\\n  #container #illustration-box {\\n    position: absolute;\\n    top: 57%;\\n    left: 3px;\\n    transform: translate(-50%, -50%);\\n    z-index: 2;\\n    width: 170px; }\\n  #container #card {\\n    width: 100%;\\n    height: 100%;\\n    background-color: #e7e7e9;\\n    border-radius: 25px;\\n    overflow: hidden;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n    #container #card #illustration,\\n    #container #card #faq {\\n      width: 50%;\\n      height: 100%; }\\n    #container #card #illustration {\\n      position: relative; }\\n      #container #card #illustration #illustration-woman {\\n        width: 450px;\\n        top: 50%;\\n        left: 35%; }\\n      #container #card #illustration #illustration-woman,\\n      #container #card #illustration #illustration-pattern {\\n        position: absolute;\\n        transform: translate(-50%, -50%); }\\n      #container #card #illustration #illustration-pattern {\\n        width: 600px;\\n        top: 50%;\\n        left: 19%; }\\n    #container #card #faq {\\n      padding: 50px;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: space-between;\\n      align-items: flex-start; }\\n      #container #card #faq h1 {\\n        margin-bottom: 24px; }\\n      #container #card #faq #answers {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: flex-start;\\n        align-items: center;\\n        overflow-y: auto;\\n        overflow-x: hidden;\\n        padding-right: 20px; }\\n        #container #card #faq #answers #list {\\n          width: 100%;\\n          list-style-type: none; }\\n          #container #card #faq #answers #list .item {\\n            width: 100%;\\n            margin-top: 24px; }\\n            #container #card #faq #answers #list .item:first-of-type {\\n              margin-top: 0; }\\n            #container #card #faq #answers #list .item div {\\n              width: 100%; }\\n            #container #card #faq #answers #list .item .area-answer {\\n              display: flex;\\n              justify-content: space-between;\\n              align-items: center; }\\n              #container #card #faq #answers #list .item .area-answer .arrow-answer {\\n                transition: transform 200ms; }\\n            #container #card #faq #answers #list .item .area-response {\\n              display: none;\\n              overflow: hidden;\\n              margin-top: 8px; }\\n              #container #card #faq #answers #list .item .area-response .response {\\n                color: #787887;\\n                font-size: 15px; }\\n            #container #card #faq #answers #list .item hr {\\n              margin-top: 16px; }\\n\\n@media screen and (max-width: 1048px) {\\n  #container {\\n    width: 80%; }\\n    #container #illustration-box {\\n      display: none; }\\n    #container #card {\\n      flex-direction: column;\\n      overflow: visible; }\\n      #container #card #illustration {\\n        height: 20%; }\\n        #container #card #illustration #illustration-woman,\\n        #container #card #illustration #illustration-pattern {\\n          left: 50%;\\n          width: 200px; }\\n        #container #card #illustration #illustration-woman {\\n          top: -13px; }\\n        #container #card #illustration #illustration-pattern {\\n          top: 43px; }\\n      #container #card #faq {\\n        width: 100%;\\n        height: 80%;\\n        padding: 0 32px 32px; }\\n        #container #card #faq h1 {\\n          width: 100%;\\n          text-align: center; }\\n        #container #card #faq #answers {\\n          justify-content: flex-start; }\\n  .attribution {\\n    position: static;\\n    bottom: 0;\\n    margin-top: 24px; } }\\n\\n@media screen and (max-width: 426px) {\\n  #container {\\n    height: auto; }\\n    #container #card #illustration {\\n      height: auto; }\\n    #container #card #faq {\\n      margin-top: 100px;\\n      height: auto; }\\n      #container #card #faq h1 {\\n        margin-bottom: 24px; }\\n      #container #card #faq #answers #list .item .area-answer .question {\\n        font-size: 12px; }\\n      #container #card #faq #answers #list .item .area-response .response {\\n        font-size: 10px; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/sass/main.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://faq-accordion-card-ts/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://faq-accordion-card-ts/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/sass/main.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://faq-accordion-card-ts/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://faq-accordion-card-ts/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://faq-accordion-card-ts/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://faq-accordion-card-ts/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://faq-accordion-card-ts/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://faq-accordion-card-ts/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ts/data/answers.ts":
/*!********************************!*\
  !*** ./src/ts/data/answers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst answer = [\n    {\n        id: \"01\",\n        question: \"How many team members can I invite?\",\n        response: \"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.\",\n        show: false\n    },\n    {\n        id: \"02\",\n        question: \"What is the maximum file upload size?\",\n        response: \"No more than 2GB. All files in your account must fit your allotted storage space.\",\n        show: false\n    },\n    {\n        id: \"03\",\n        question: \"How do I reset my password?\",\n        response: \"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.\",\n        show: false\n    },\n    {\n        id: \"04\",\n        question: \"Can I cancel my subscription?\",\n        response: \"Yes! Send us a message and we’ll process your request no questions asked.\",\n        show: false\n    },\n    {\n        id: \"05\",\n        question: \"Do you provide additional support?\",\n        response: \"Chat and email support is available 24/7. Phone lines are open during normal business hours.\",\n        show: false\n    }\n];\nexports[\"default\"] = answer;\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/data/answers.ts?");

/***/ }),

/***/ "./src/ts/data/illustrations.ts":
/*!**************************************!*\
  !*** ./src/ts/data/illustrations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst elements_1 = __webpack_require__(/*! ../elements */ \"./src/ts/elements/index.ts\");\nconst illustrations = [\n    {\n        element: elements_1.illustrationWoman,\n        src: \"./assets/illustration-woman-online-mobile.svg\"\n    },\n    {\n        element: elements_1.illustrationPattern,\n        src: \"./assets/bg-pattern-mobile.svg\"\n    }\n];\nexports[\"default\"] = illustrations;\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/data/illustrations.ts?");

/***/ }),

/***/ "./src/ts/data/index.ts":
/*!******************************!*\
  !*** ./src/ts/data/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.illustrations = exports.answer = void 0;\nconst answers_1 = __importDefault(__webpack_require__(/*! ./answers */ \"./src/ts/data/answers.ts\"));\nexports.answer = answers_1.default;\nconst illustrations_1 = __importDefault(__webpack_require__(/*! ./illustrations */ \"./src/ts/data/illustrations.ts\"));\nexports.illustrations = illustrations_1.default;\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/data/index.ts?");

/***/ }),

/***/ "./src/ts/elements/faq.ts":
/*!********************************!*\
  !*** ./src/ts/elements/faq.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.listOfFaq = void 0;\nexports.listOfFaq = window.document.querySelector(\"ul#list\");\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/elements/faq.ts?");

/***/ }),

/***/ "./src/ts/elements/illustrationElement.ts":
/*!************************************************!*\
  !*** ./src/ts/elements/illustrationElement.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.illustrationPattern = exports.illustrationWoman = void 0;\nexports.illustrationWoman = window.document.querySelector(\"img#illustration-woman\");\nexports.illustrationPattern = window.document.querySelector(\"img#illustration-pattern\");\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/elements/illustrationElement.ts?");

/***/ }),

/***/ "./src/ts/elements/index.ts":
/*!**********************************!*\
  !*** ./src/ts/elements/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.illustrationPattern = exports.illustrationWoman = exports.listOfFaq = void 0;\nconst faq_1 = __webpack_require__(/*! ./faq */ \"./src/ts/elements/faq.ts\");\nObject.defineProperty(exports, \"listOfFaq\", ({ enumerable: true, get: function () { return faq_1.listOfFaq; } }));\nconst illustrationElement_1 = __webpack_require__(/*! ./illustrationElement */ \"./src/ts/elements/illustrationElement.ts\");\nObject.defineProperty(exports, \"illustrationWoman\", ({ enumerable: true, get: function () { return illustrationElement_1.illustrationWoman; } }));\nObject.defineProperty(exports, \"illustrationPattern\", ({ enumerable: true, get: function () { return illustrationElement_1.illustrationPattern; } }));\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/elements/index.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../sass/main.sass */ \"./src/sass/main.sass\");\nconst objects_1 = __webpack_require__(/*! ./objects */ \"./src/ts/objects/index.ts\");\nconst data_1 = __webpack_require__(/*! ./data */ \"./src/ts/data/index.ts\");\nconst elements_1 = __webpack_require__(/*! ./elements */ \"./src/ts/elements/index.ts\");\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/ts/utils/index.ts\");\nconst answers = new objects_1.Answers({\n    data: data_1.answer,\n    children: elements_1.listOfFaq\n});\nconst MEDIAQUERIEILLUSTRATION = 1048;\nfor (let illustration of data_1.illustrations) {\n    const { element, src } = illustration;\n    (0, utils_1.convertImgResponsive)({\n        element,\n        src,\n        mediaQuerie: MEDIAQUERIEILLUSTRATION\n    });\n}\nanswers.render();\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/objects/Answers.ts":
/*!***********************************!*\
  !*** ./src/ts/objects/Answers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Answers {\n    constructor({ data, children }) {\n        this._items = null;\n        this._arrow = null;\n        this._question = null;\n        this._data = data;\n        this._children = children;\n    }\n    get data() {\n        return this._data;\n    }\n    get children() {\n        return this._children;\n    }\n    set items(value) {\n        this._items = value;\n    }\n    get items() {\n        return this._items;\n    }\n    set arrow(value) {\n        this._arrow = value;\n    }\n    get arrow() {\n        return this._arrow;\n    }\n    set question(value) {\n        this._question = value;\n    }\n    get question() {\n        return this._question;\n    }\n    render() {\n        if (this.children) {\n            for (let answer of this.data) {\n                const { id, question, response, show } = answer;\n                this.children.innerHTML += `\n                    <li \n                        class=\"item\"\n                        data-id=\"${id}\"\n                    >\n                        <div class=\"area-answer\">\n                            <span class=\"question\">\n                                ${question}\n                            </span>\n    \n                            <img\n                                class=\"arrow-answer\"\n                                src=\"assets/icon-arrow-down.svg\"\n                                alt=\"icon arrow down\"\n                            />\n                        </div>\n                        <div class=\"area-response\">\n                            <span class=\"response\">\n                                ${response}\n                            </span>\n                        </div>\n                        <hr></hr>\n                    </li>\n                `;\n            }\n            this.items = window.document.querySelectorAll(\"li.item\");\n            this.arrow = window.document.querySelectorAll(\"img.arrow-answer\");\n            this.question = window.document.querySelectorAll(\".question\");\n            this.setEventClick();\n        }\n        else {\n            throw \"O elemento children é null\";\n        }\n    }\n    setEventClick() {\n        if (this.items) {\n            this.items.forEach(({ children }, index) => {\n                const areaAnswer = children[0];\n                const areaResponse = children[1];\n                let active = true;\n                areaAnswer.addEventListener(\"click\", () => {\n                    if (active) {\n                        areaResponse.style.display = \"block\";\n                        if (this.arrow) {\n                            this.arrow[index].style.transform = \"rotate(180deg)\";\n                        }\n                        if (this.question) {\n                            this.question[index].style.fontWeight = \"bold\";\n                        }\n                        active = false;\n                    }\n                    else {\n                        areaResponse.style.display = \"none\";\n                        if (this.arrow) {\n                            this.arrow[index].style.transform = \"rotate(0deg)\";\n                        }\n                        if (this.question) {\n                            this.question[index].style.fontWeight = \"normal\";\n                        }\n                        active = true;\n                    }\n                });\n            });\n        }\n        else {\n            throw \"Elementos de item não foram selecionados com sucesso\";\n        }\n    }\n}\nexports[\"default\"] = Answers;\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/objects/Answers.ts?");

/***/ }),

/***/ "./src/ts/objects/index.ts":
/*!*********************************!*\
  !*** ./src/ts/objects/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Answers = void 0;\nconst Answers_1 = __importDefault(__webpack_require__(/*! ./Answers */ \"./src/ts/objects/Answers.ts\"));\nexports.Answers = Answers_1.default;\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/objects/index.ts?");

/***/ }),

/***/ "./src/ts/utils/ConvertImgResponsive.ts":
/*!**********************************************!*\
  !*** ./src/ts/utils/ConvertImgResponsive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction convertImgResponsive({ element, src, mediaQuerie }) {\n    const mediaQuerieList = matchMedia(`(max-width: ${mediaQuerie}px)`);\n    const oldSrc = element.getAttribute(\"src\");\n    function toggleImage() {\n        if (mediaQuerieList.matches) {\n            element.setAttribute(\"src\", src);\n        }\n        else {\n            if (oldSrc) {\n                element.setAttribute(\"src\", oldSrc);\n            }\n            else {\n                throw \"Não foi possivel pegar o endereço antigo da imagem\";\n            }\n        }\n    }\n    mediaQuerieList.addEventListener(\"change\", toggleImage);\n    toggleImage();\n}\nexports[\"default\"] = convertImgResponsive;\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/utils/ConvertImgResponsive.ts?");

/***/ }),

/***/ "./src/ts/utils/index.ts":
/*!*******************************!*\
  !*** ./src/ts/utils/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.convertImgResponsive = void 0;\nconst ConvertImgResponsive_1 = __importDefault(__webpack_require__(/*! ./ConvertImgResponsive */ \"./src/ts/utils/ConvertImgResponsive.ts\"));\nexports.convertImgResponsive = ConvertImgResponsive_1.default;\n\n\n//# sourceURL=webpack://faq-accordion-card-ts/./src/ts/utils/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;