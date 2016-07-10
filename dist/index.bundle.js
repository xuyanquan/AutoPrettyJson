/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var space = ["                                                                           ", "                                                                           ", "                                                                           ", "                                                                           ", "                                                                           ", "                                                                           ", "                                                                           ", "                                                                           ", "                                                                           ", "                                                                           "].join("");
	
	function pretty(json, level) {
	
		level = level || 1;
	
		var parseJson = json;
	
		if (parseJson === undefined) {
			var html = document.getElementById('input').value;
			parseJson = eval("(" + html + ")");
		}
	
		var maxkeylength = 0;
		var maxvaluelength = 0;
	
		Object.keys(parseJson).map(function (key) {
			if (key.toString().length > maxkeylength) maxkeylength = key.toString().length;
			if (_typeof(parseJson[key]) == 'object') return true;
			if (parseJson[key].toString().length > maxvaluelength) maxvaluelength = parseJson[key].toString().length;
		});
	
		var output = ['{\n'];
	
		for (var key in parseJson) {
			for (var i = 0; i < level; i++) {
				output.push('\t');
			}
			if (_typeof(parseJson[key]) == 'object') {
				output.push("" + key.toString() + space.substring(0, maxkeylength - key.toString().length) + " : " + pretty(parseJson[key], level + 1) + " ,\n");
			} else {
				output.push("" + key.toString() + space.substring(0, maxkeylength - key.toString().length) + " : " + parseJson[key] + space.substring(0, Math.abs(maxvaluelength - parseJson[key].toString().length)) + " ,\n");
			}
		}
	
		var last = output.pop();
		output.push(last.substring(0, last.length - 3) + '\n');
	
		for (var _i = 0; _i < level - 1; _i++) {
			output.push('\t');
		}
		output.push('}');
	
		return output.join('');
	}
	
	document.getElementById('pretty').onclick = function () {
		document.getElementById('result').value = pretty();
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map