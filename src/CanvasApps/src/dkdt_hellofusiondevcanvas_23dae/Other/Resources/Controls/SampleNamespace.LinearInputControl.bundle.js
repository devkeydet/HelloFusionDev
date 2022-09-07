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

/***/ "./LinearInputControl/index.ts":
/*!*************************************!*\
  !*** ./LinearInputControl/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/*\r\n    This file is part of the Microsoft PowerApps code samples.\r\n    Copyright (C) Microsoft Corporation.  All rights reserved.\r\n    This source code is intended only as a supplement to Microsoft Development Tools and/or\r\n    on-line documentation.  See these other materials for detailed information regarding\r\n    Microsoft code samples.\r\n\r\n    THIS CODE AND INFORMATION ARE PROVIDED \"AS IS\" WITHOUT WARRANTY OF ANY KIND, EITHER\r\n    EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF\r\n    MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.\r\n */\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.LinearInputControl = void 0;\n\nvar LinearInputControl =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function LinearInputControl() {// no-op: method not leveraged by this example custom control\n  }\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  LinearInputControl.prototype.init = function (context, notifyOutputChanged, state, container) {\n    this._context = context;\n    this._container = document.createElement(\"div\");\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._refreshData = this.refreshData.bind(this); // creating HTML elements for the input type range and binding it to the function which refreshes the control data\n\n    this.inputElement = document.createElement(\"input\");\n    this.inputElement.setAttribute(\"type\", \"range\");\n    this.inputElement.addEventListener(\"input\", this._refreshData); //setting the max and min values for the control.\n\n    this.inputElement.setAttribute(\"min\", \"1\");\n    this.inputElement.setAttribute(\"max\", \"1000\");\n    this.inputElement.setAttribute(\"class\", \"linearslider\");\n    this.inputElement.setAttribute(\"id\", \"linearrangeinput\"); // creating a HTML label element that shows the value that is set on the linear range control\n\n    this.labelElement = document.createElement(\"label\");\n    this.labelElement.setAttribute(\"class\", \"LinearRangeLabel\");\n    this.labelElement.setAttribute(\"id\", \"lrclabel\"); // retrieving the latest value from the control and setting it to the HTMl elements.\n\n    this._value = context.parameters.controlValue.raw;\n    this.inputElement.setAttribute(\"value\", context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"0\");\n    this.labelElement.innerHTML = context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"0\"; // appending the HTML elements to the control's HTML container element.\n\n    this._container.appendChild(this.inputElement);\n\n    this._container.appendChild(this.labelElement);\n\n    container.appendChild(this._container);\n  };\n  /**\r\n   * Updates the values to the internal value variable we are storing and also updates the html label that displays the value\r\n   * @param evt : The \"Input Properties\" containing the parameters, control metadata and interface functions\r\n   */\n\n\n  LinearInputControl.prototype.refreshData = function (evt) {\n    this._value = this.inputElement.value;\n    this.labelElement.innerHTML = this.inputElement.value;\n\n    this._notifyOutputChanged();\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  LinearInputControl.prototype.updateView = function (context) {\n    // storing the latest context from the control.\n    this._value = context.parameters.controlValue.raw;\n    this._context = context;\n    this.inputElement.value = context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"\";\n    this.labelElement.innerHTML = context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"\";\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as \"bound\" or \"output\"\r\n   */\n\n\n  LinearInputControl.prototype.getOutputs = function () {\n    return {\n      controlValue: this._value\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  LinearInputControl.prototype.destroy = function () {\n    this.inputElement.removeEventListener(\"input\", this._refreshData);\n  };\n\n  return LinearInputControl;\n}();\n\nexports.LinearInputControl = LinearInputControl;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./LinearInputControl/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./LinearInputControl/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('SampleNamespace.LinearInputControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LinearInputControl);
} else {
	var SampleNamespace = SampleNamespace || {};
	SampleNamespace.LinearInputControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LinearInputControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}