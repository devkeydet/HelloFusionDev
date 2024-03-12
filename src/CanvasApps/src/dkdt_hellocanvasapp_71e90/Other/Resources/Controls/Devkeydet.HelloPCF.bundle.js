/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./HelloPCF/HelloWorld.tsx":
/*!*********************************!*\
  !*** ./HelloPCF/HelloWorld.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.HelloWorld = void 0;\nvar React = __webpack_require__(/*! react */ \"react\");\nvar react_1 = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\nvar HelloWorld = /** @class */function (_super) {\n  __extends(HelloWorld, _super);\n  function HelloWorld() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  HelloWorld.prototype.render = function () {\n    return React.createElement(react_1.Label, null, this.props.name);\n  };\n  return HelloWorld;\n}(React.Component);\nexports.HelloWorld = HelloWorld;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./HelloPCF/HelloWorld.tsx?");

/***/ }),

/***/ "./HelloPCF/index.ts":
/*!***************************!*\
  !*** ./HelloPCF/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.HelloPCF = void 0;\nvar HelloWorld_1 = __webpack_require__(/*! ./HelloWorld */ \"./HelloPCF/HelloWorld.tsx\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar HelloPCF = /** @class */function () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function HelloPCF() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   */\n  HelloPCF.prototype.init = function (context, notifyOutputChanged, state) {\n    this.notifyOutputChanged = notifyOutputChanged;\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   * @returns ReactElement root react element for the control\r\n   */\n  HelloPCF.prototype.updateView = function (context) {\n    var props = {\n      name: 'Hello, World!'\n    };\n    return React.createElement(HelloWorld_1.HelloWorld, props);\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n  HelloPCF.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  HelloPCF.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  return HelloPCF;\n}();\nexports.HelloPCF = HelloPCF;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./HelloPCF/index.ts?");

/***/ }),

/***/ "@fluentui/react":
/*!*************************************!*\
  !*** external "FluentUIReactv8290" ***!
  \*************************************/
/***/ ((module) => {

module.exports = FluentUIReactv8290;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./HelloPCF/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('Devkeydet.HelloPCF', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.HelloPCF);
} else {
	var Devkeydet = Devkeydet || {};
	Devkeydet.HelloPCF = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.HelloPCF;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}