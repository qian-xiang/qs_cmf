/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./qsuploader/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./qsuploader/cropper.css":
/*!******************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./qsuploader/cropper.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Cropper v0.10.0\r\n * https://github.com/fengyuanchen/cropper\r\n *\r\n * Copyright (c) 2014-2015 Fengyuan Chen and other contributors\r\n * Released under the MIT license\r\n *\r\n * Date: 2015-06-08T14:57:26.353Z\r\n */\r\n.cropper-container {\r\n  position: relative;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\r\n.cropper-container img {\r\n  display: block;\r\n  width: 100%;\r\n  min-width: 0 !important;\r\n  max-width: none !important;\r\n  height: 100%;\r\n  min-height: 0 !important;\r\n  max-height: none !important;\r\n\r\n  image-orientation: 0deg !important;\r\n}\r\n.cropper-canvas,\r\n.cropper-drag-box,\r\n.cropper-crop-box,\r\n.cropper-modal {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.cropper-drag-box {\r\n  background-color: #fff;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n.cropper-modal {\r\n  background-color: #000;\r\n  filter: alpha(opacity=50);\r\n  opacity: .5;\r\n}\r\n.cropper-view-box {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  outline: 1px solid #69f;\r\n  outline-color: rgba(102, 153, 255, .75);\r\n}\r\n.cropper-dashed {\r\n  position: absolute;\r\n  display: block;\r\n  filter: alpha(opacity=50);\r\n  border: 0 dashed #fff;\r\n  opacity: .5;\r\n}\r\n.cropper-dashed.dashed-h {\r\n  top: 33.33333333%;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 33.33333333%;\r\n  border-top-width: 1px;\r\n  border-bottom-width: 1px;\r\n}\r\n.cropper-dashed.dashed-v {\r\n  top: 0;\r\n  left: 33.33333333%;\r\n  width: 33.33333333%;\r\n  height: 100%;\r\n  border-right-width: 1px;\r\n  border-left-width: 1px;\r\n}\r\n.cropper-face,\r\n.cropper-line,\r\n.cropper-point {\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  filter: alpha(opacity=10);\r\n  opacity: .1;\r\n}\r\n.cropper-face {\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #fff;\r\n}\r\n.cropper-line {\r\n  background-color: #69f;\r\n}\r\n.cropper-line.line-e {\r\n  top: 0;\r\n  right: -3px;\r\n  width: 5px;\r\n  cursor: e-resize;\r\n}\r\n.cropper-line.line-n {\r\n  top: -3px;\r\n  left: 0;\r\n  height: 5px;\r\n  cursor: n-resize;\r\n}\r\n.cropper-line.line-w {\r\n  top: 0;\r\n  left: -3px;\r\n  width: 5px;\r\n  cursor: w-resize;\r\n}\r\n.cropper-line.line-s {\r\n  bottom: -3px;\r\n  left: 0;\r\n  height: 5px;\r\n  cursor: s-resize;\r\n}\r\n.cropper-point {\r\n  width: 5px;\r\n  height: 5px;\r\n  background-color: #69f;\r\n  filter: alpha(opacity=75);\r\n  opacity: .75;\r\n}\r\n.cropper-point.point-e {\r\n  top: 50%;\r\n  right: -3px;\r\n  margin-top: -3px;\r\n  cursor: e-resize;\r\n}\r\n.cropper-point.point-n {\r\n  top: -3px;\r\n  left: 50%;\r\n  margin-left: -3px;\r\n  cursor: n-resize;\r\n}\r\n.cropper-point.point-w {\r\n  top: 50%;\r\n  left: -3px;\r\n  margin-top: -3px;\r\n  cursor: w-resize;\r\n}\r\n.cropper-point.point-s {\r\n  bottom: -3px;\r\n  left: 50%;\r\n  margin-left: -3px;\r\n  cursor: s-resize;\r\n}\r\n.cropper-point.point-ne {\r\n  top: -3px;\r\n  right: -3px;\r\n  cursor: ne-resize;\r\n}\r\n.cropper-point.point-nw {\r\n  top: -3px;\r\n  left: -3px;\r\n  cursor: nw-resize;\r\n}\r\n.cropper-point.point-sw {\r\n  bottom: -3px;\r\n  left: -3px;\r\n  cursor: sw-resize;\r\n}\r\n.cropper-point.point-se {\r\n  right: -3px;\r\n  bottom: -3px;\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: se-resize;\r\n  filter: alpha(opacity=100);\r\n  opacity: 1;\r\n}\r\n.cropper-point.point-se:before {\r\n  position: absolute;\r\n  right: -50%;\r\n  bottom: -50%;\r\n  display: block;\r\n  width: 200%;\r\n  height: 200%;\r\n  content: \" \";\r\n  background-color: #69f;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .cropper-point.point-se {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .cropper-point.point-se {\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .cropper-point.point-se {\r\n    width: 5px;\r\n    height: 5px;\r\n    filter: alpha(opacity=75);\r\n    opacity: .75;\r\n  }\r\n}\r\n.cropper-bg {\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\");\r\n}\r\n.cropper-invisible {\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n.cropper-hide {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  width: auto!important;\r\n  min-width: 0!important;\r\n  max-width: none!important;\r\n  height: auto!important;\r\n  min-height: 0!important;\r\n  max-height: none!important;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n.cropper-hidden {\r\n  display: none !important;\r\n}\r\n.cropper-move {\r\n  cursor: move;\r\n}\r\n.cropper-crop {\r\n  cursor: crosshair;\r\n}\r\n.cropper-disabled .cropper-drag-box,\r\n.cropper-disabled .cropper-face,\r\n.cropper-disabled .cropper-line,\r\n.cropper-disabled .cropper-point {\r\n  cursor: not-allowed;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./qsuploader/jquery.ossuploader.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./qsuploader/jquery.ossuploader.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/_css-loader@0.28.11@css-loader/lib/url/escape.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ossuploader-upload-box{\r\n  display:flex;\r\n  flex-wrap:wrap;\r\n}\r\n\r\n.ossuploader-add, .ossuploader-dash-border{\r\n  border:1px dashed #bbbbbb;\r\n  width:30%;\r\n  display:flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin-right:2%;\r\n  margin-bottom:2%;\r\n  height:120px;\r\n}\r\n\r\n.ossuploader-add i{\r\n  width:40%;\r\n  height:55px;\r\n  background:url(" + escape(__webpack_require__(/*! ./icon-plus.png */ "./qsuploader/icon-plus.png")) + ");\r\n  background-size:100% 100%;\r\n  background-position:center;\r\n}\r\n\r\n.ossuploader-add p{\r\n  font-size:20px;\r\n  color:#333333;\r\n  margin-top:.2rem;\r\n}\r\n@media (max-width: 500px) {\r\n\r\n  .ossuploader-add, .ossuploader-dash-border{\r\n    border:1px dashed #bbbbbb;\r\n    width:30%;\r\n    display:flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-right:2%;\r\n    margin-bottom:2%;\r\n    height:1.5rem;\r\n  }\r\n\r\n  .ossuploader-add i{\r\n    width:.7rem;\r\n    height:.7rem;\r\n    background:url(" + escape(__webpack_require__(/*! ./icon-plus.png */ "./qsuploader/icon-plus.png")) + ");\r\n    background-size:100% 100%;\r\n    background-position:center;\r\n  }\r\n\r\n  .ossuploader-add p{\r\n    font-size:0.28rem;\r\n    color:#333333;\r\n    margin-top:.2rem;\r\n  }\r\n}\r\n\r\n.ossuploader-dash-border img{\r\n  max-height:100%;\r\n  max-width: 100%;\r\n  vertical-align:middle;\r\n}\r\n\r\n.ossuploader-dash-border{\r\n  position:relative;\r\n  text-align:center;\r\n  background:#e8e8e8;\r\n}\r\n\r\n.ossuploader-dash-border .ossuploader-progress{\r\n  position: absolute;\r\n  height: 0.15rem;\r\n  bottom: 0px;\r\n  left:0px;\r\n  background: #28a745;\r\n  transition:.3s ease;\r\n  opacity:0.7;\r\n}\r\n\r\n.ossuploader-dash-border .ossuploader-filedelete{\r\n  cursor:pointer;\r\n  position:absolute;\r\n  left:90%;\r\n  top:0;\r\n  color:red;\r\n}\r\n\r\n.ossuploader-mask{\r\n    display:none;\r\n    z-index:9999;\r\n    position:fixed;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    top:0;\r\n    background:rgba(0,0,0,.8);\r\n    text-align: center;\r\n    overflow:auto;\r\n}\r\n\r\n.ossuploader-mask .close-container{\r\n    text-align: center;\r\n    padding:20px;\r\n}\r\n\r\n.ossuploader-mask .close{\r\n    color:white;\r\n    font-size:2em;\r\n    position:absolute;\r\n    right:1em;\r\n}\r\n\r\n.ossuploader-mask .crop-btn{\r\n    position: relative;\r\n    background-color:#0f8ce4;\r\n    border-radius:20px;\r\n    padding:0 20px;\r\n    color:#fff;\r\n    height:3em;\r\n    line-height: 3em;\r\n    border:0;\r\n}\r\n\r\n.ossuploader-mask .image .ori-img{\r\n    width:900px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/lib/url/escape.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader/lib/url/escape.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js":
/*!**********************************************************!*\
  !*** ./node_modules/_jquery@3.3.1@jquery/dist/jquery.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/_style-loader@0.20.3@style-loader/lib/addStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.20.3@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/_style-loader@0.20.3@style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/_style-loader@0.20.3@style-loader/lib/urls.js":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.20.3@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./qsuploader/canvas-to-blob.min.js":
/*!******************************************!*\
  !*** ./qsuploader/canvas-to-blob.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!function(t){"use strict";var e=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,o=t.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),n=o&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),r=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,a=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,i=(o||r)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(t){var e,i,l,u,c,f,b,d,B;if(!(e=t.match(a)))throw new Error("invalid data URI");for(i=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII"),l=!!e[4],u=t.slice(e[0].length),c=l?atob(u):decodeURIComponent(u),f=new ArrayBuffer(c.length),b=new Uint8Array(f),d=0;d<c.length;d+=1)b[d]=c.charCodeAt(d);return o?new Blob([n?b:f],{type:i}):((B=new r).append(f),B.getBlob(i))};t.HTMLCanvasElement&&!e.toBlob&&(e.mozGetAsFile?e.toBlob=function(t,o,n){var r=this;setTimeout(function(){t(n&&e.toDataURL&&i?i(r.toDataURL(o,n)):r.mozGetAsFile("blob",o))})}:e.toDataURL&&i&&(e.toBlob=function(t,e,o){var n=this;setTimeout(function(){t(i(n.toDataURL(e,o)))})})), true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return i}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(window);
//# sourceMappingURL=canvas-to-blob.min.js.map

/***/ }),

/***/ "./qsuploader/cropper.css":
/*!********************************!*\
  !*** ./qsuploader/cropper.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/_css-loader@0.28.11@css-loader!./cropper.css */ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./qsuploader/cropper.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/_style-loader@0.20.3@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.20.3@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./qsuploader/cropper.js":
/*!*******************************!*\
  !*** ./qsuploader/cropper.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Cropper v0.10.0
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2014-2015 Fengyuan Chen and other contributors
 * Released under the MIT license
 *
 * Date: 2015-06-08T14:57:26.353Z
 */

(function (factory) {
  if (true) {
    // AMD. Register as anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {

  'use strict';

  var $window = $(window),
      $document = $(document),
      location = window.location,

      // Constants
      CROPPER_NAMESPACE = '.cropper',
      CROPPER_PREVIEW = 'preview' + CROPPER_NAMESPACE,

      // RegExps
      REGEXP_DRAG_TYPES = /^(e|n|w|s|ne|nw|sw|se|all|crop|move|zoom)$/,

      // Classes
      CLASS_MODAL = 'cropper-modal',
      CLASS_HIDE = 'cropper-hide',
      CLASS_HIDDEN = 'cropper-hidden',
      CLASS_INVISIBLE = 'cropper-invisible',
      CLASS_MOVE = 'cropper-move',
      CLASS_CROP = 'cropper-crop',
      CLASS_DISABLED = 'cropper-disabled',
      CLASS_BG = 'cropper-bg',

      // Events
      EVENT_MOUSE_DOWN = 'mousedown touchstart',
      EVENT_MOUSE_MOVE = 'mousemove touchmove',
      EVENT_MOUSE_UP = 'mouseup mouseleave touchend touchleave touchcancel',
      EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll',
      EVENT_DBLCLICK = 'dblclick',
      EVENT_RESIZE = 'resize' + CROPPER_NAMESPACE, // Bind to window with namespace
      EVENT_BUILD = 'build' + CROPPER_NAMESPACE,
      EVENT_BUILT = 'built' + CROPPER_NAMESPACE,
      EVENT_DRAG_START = 'dragstart' + CROPPER_NAMESPACE,
      EVENT_DRAG_MOVE = 'dragmove' + CROPPER_NAMESPACE,
      EVENT_DRAG_END = 'dragend' + CROPPER_NAMESPACE,
      EVENT_ZOOM_IN = 'zoomin' + CROPPER_NAMESPACE,
      EVENT_ZOOM_OUT = 'zoomout' + CROPPER_NAMESPACE,
      EVENT_CHANGE = 'change' + CROPPER_NAMESPACE,

      // Supports
      SUPPORT_CANVAS = $.isFunction($('<canvas>')[0].getContext),

      // Others
      sqrt = Math.sqrt,
      min = Math.min,
      max = Math.max,
      abs = Math.abs,
      sin = Math.sin,
      cos = Math.cos,
      num = parseFloat,

      // Prototype
      prototype = {};

  function isNumber(n) {
    return typeof n === 'number' && !isNaN(n);
  }

  function isUndefined(n) {
    return typeof n === 'undefined';
  }

  function toArray(obj, offset) {
    var args = [];

    if (isNumber(offset)) { // It's necessary for IE8
      args.push(offset);
    }

    return args.slice.apply(obj, args);
  }

  // Custom proxy to avoid jQuery's guid
  function proxy(fn, context) {
    var args = toArray(arguments, 2);

    return function () {
      return fn.apply(context, args.concat(toArray(arguments)));
    };
  }

  function isCrossOriginURL(url) {
    var parts = url.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);

    return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }

  function addTimestamp(url) {
    var timestamp = 'timestamp=' + (new Date()).getTime();

    return (url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp);
  }

  function getRotateValue(degree) {
    return degree ? 'rotate(' + degree + 'deg)' : 'none';
  }

  function getRotatedSizes(data, reverse) {
    var deg = abs(data.degree) % 180,
        arc = (deg > 90 ? (180 - deg) : deg) * Math.PI / 180,
        sinArc = sin(arc),
        cosArc = cos(arc),
        width = data.width,
        height = data.height,
        aspectRatio = data.aspectRatio,
        newWidth,
        newHeight;

    if (!reverse) {
      newWidth = width * cosArc + height * sinArc;
      newHeight = width * sinArc + height * cosArc;
    } else {
      newWidth = width / (cosArc + sinArc / aspectRatio);
      newHeight = newWidth / aspectRatio;
    }

    return {
      width: newWidth,
      height: newHeight
    };
  }

  function getSourceCanvas(image, data) {
    var canvas = $('<canvas>')[0],
        context = canvas.getContext('2d'),
        width = data.naturalWidth,
        height = data.naturalHeight,
        rotate = data.rotate,
        rotated = getRotatedSizes({
          width: width,
          height: height,
          degree: rotate
        });

    if (rotate) {
      canvas.width = rotated.width;
      canvas.height = rotated.height;
      context.save();
      context.translate(rotated.width / 2, rotated.height / 2);
      context.rotate(rotate * Math.PI / 180);
      context.drawImage(image, -width / 2, -height / 2, width, height);
      context.restore();
    } else {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(image, 0, 0, width, height);
    }

    return canvas;
  }

  function Cropper(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Cropper.DEFAULTS, $.isPlainObject(options) && options);

    this.ready = false;
    this.built = false;
    this.rotated = false;
    this.cropped = false;
    this.disabled = false;
    this.canvas = null;
    this.cropBox = null;

    this.load();
  }

  prototype.load = function (url) {
    var options = this.options,
        $this = this.$element,
        crossOrigin,
        bustCacheUrl,
        buildEvent,
        $clone;

    if (!url) {
      if ($this.is('img')) {
        if (!$this.attr('src')) {
          return;
        }

        url = $this.prop('src');
      } else if ($this.is('canvas') && SUPPORT_CANVAS) {
        url = $this[0].toDataURL();
      }
    }

    if (!url) {
      return;
    }

    buildEvent = $.Event(EVENT_BUILD);
    $this.one(EVENT_BUILD, options.build).trigger(buildEvent); // Only trigger once

    if (buildEvent.isDefaultPrevented()) {
      return;
    }

    if (options.checkImageOrigin && isCrossOriginURL(url)) {
      crossOrigin = ' crossOrigin="anonymous"';

      if (!$this.prop('crossOrigin')) { // Only when there was not a "crossOrigin" property
        bustCacheUrl = addTimestamp(url); // Bust cache (#148)
      }
    }

    // IE8 compatibility: Don't use "$().attr()" to set "src"
    this.$clone = $clone = $('<img' + (crossOrigin || '') + ' src="' + (bustCacheUrl || url) + '">');

    $clone.one('load', $.proxy(function () {
      var image = $clone[0],
          naturalWidth = image.naturalWidth || image.width,
          naturalHeight = image.naturalHeight || image.height; // $clone.width() and $clone.height() will return 0 in IE8 (#319)

      this.image = {
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        aspectRatio: naturalWidth / naturalHeight,
        rotate: 0
      };

      this.url = url;
      this.ready = true;
      this.build();
    }, this)).one('error', function () {
      $clone.remove();
    });

    // Hide and insert into the document
    $clone.addClass(CLASS_HIDE).insertAfter($this);
  };

  prototype.build = function () {
    var $this = this.$element,
        $clone = this.$clone,
        options = this.options,
        $cropper,
        $cropBox,
        $face;

    if (!this.ready) {
      return;
    }

    if (this.built) {
      this.unbuild();
    }

    // Create cropper elements
    this.$cropper = $cropper = $(Cropper.TEMPLATE);

    // Hide the original image
    $this.addClass(CLASS_HIDDEN);

    // Show the clone iamge
    $clone.removeClass(CLASS_HIDE);

    this.$container = $this.parent().append($cropper);
    this.$canvas = $cropper.find('.cropper-canvas').append($clone);
    this.$dragBox = $cropper.find('.cropper-drag-box');
    this.$cropBox = $cropBox = $cropper.find('.cropper-crop-box');
    this.$viewBox = $cropper.find('.cropper-view-box');
    this.$face = $face = $cropBox.find('.cropper-face');

    this.addListeners();
    this.initPreview();

    // Format aspect ratio
    options.aspectRatio = num(options.aspectRatio) || NaN; // 0 -> NaN

    if (options.autoCrop) {
      this.cropped = true;

      if (options.modal) {
        this.$dragBox.addClass(CLASS_MODAL);
      }
    } else {
      $cropBox.addClass(CLASS_HIDDEN);
    }

    if (options.background) {
      $cropper.addClass(CLASS_BG);
    }

    if (!options.highlight) {
      $face.addClass(CLASS_INVISIBLE);
    }

    if (!options.guides) {
      $cropBox.find('.cropper-dashed').addClass(CLASS_HIDDEN);
    }

    if (options.cropBoxMovable) {
      $face.addClass(CLASS_MOVE).data('drag', 'all');
    }

    if (!options.cropBoxResizable) {
      $cropBox.find('.cropper-line, .cropper-point').addClass(CLASS_HIDDEN);
    }

    this.setDragMode(options.dragCrop ? 'crop' : options.movable ? 'move' : 'none');

    this.built = true;
    this.render();
    this.setData(options.data);
    $this.one(EVENT_BUILT, options.built).trigger(EVENT_BUILT); // Only trigger once
  };

  prototype.unbuild = function () {
    if (!this.built) {
      return;
    }

    this.built = false;
    this.initialImage = null;
    this.initialCanvas = null; // This is necessary when replace
    this.initialCropBox = null;
    this.container = null;
    this.canvas = null;
    this.cropBox = null; // This is necessary when replace
    this.removeListeners();

    this.resetPreview();
    this.$preview = null;

    this.$viewBox = null;
    this.$cropBox = null;
    this.$dragBox = null;
    this.$canvas = null;
    this.$container = null;

    this.$cropper.remove();
    this.$cropper = null;
  };

  $.extend(prototype, {
    render: function () {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();

      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },

    initContainer: function () {
      var $this = this.$element,
          $container = this.$container,
          $cropper = this.$cropper,
          options = this.options;

      $cropper.addClass(CLASS_HIDDEN);
      $this.removeClass(CLASS_HIDDEN);

      $cropper.css((this.container = {
        width: max($container.width(), num(options.minContainerWidth) || 200),
        height: max($container.height(), num(options.minContainerHeight) || 100)
      }));

      $this.addClass(CLASS_HIDDEN);
      $cropper.removeClass(CLASS_HIDDEN);
    },

    // image box (wrapper)
    initCanvas: function () {
      var container = this.container,
          containerWidth = container.width,
          containerHeight = container.height,
          image = this.image,
          aspectRatio = image.aspectRatio,
          canvas = {
            aspectRatio: aspectRatio,
            width: containerWidth,
            height: containerHeight
          };

      if (containerHeight * aspectRatio > containerWidth) {
        canvas.height = containerWidth / aspectRatio;
      } else {
        canvas.width = containerHeight * aspectRatio;
      }

      canvas.oldLeft = canvas.left = (containerWidth - canvas.width) / 2;
      canvas.oldTop = canvas.top = (containerHeight - canvas.height) / 2;

      this.canvas = canvas;
      this.limitCanvas(true, true);
      this.initialImage = $.extend({}, image);
      this.initialCanvas = $.extend({}, canvas);
    },

    limitCanvas: function (size, position) {
      var options = this.options,
          strict = options.strict,
          container = this.container,
          containerWidth = container.width,
          containerHeight = container.height,
          canvas = this.canvas,
          aspectRatio = canvas.aspectRatio,
          cropBox = this.cropBox,
          cropped = this.cropped && cropBox,
          initialCanvas = this.initialCanvas || canvas,
          initialCanvasWidth = initialCanvas.width,
          initialCanvasHeight = initialCanvas.height,
          minCanvasWidth,
          minCanvasHeight;

      if (size) {
        minCanvasWidth = num(options.minCanvasWidth) || 0;
        minCanvasHeight = num(options.minCanvasHeight) || 0;

        if (minCanvasWidth) {
          if (strict) {
            minCanvasWidth = max(cropped ? cropBox.width : initialCanvasWidth, minCanvasWidth);
          }

          minCanvasHeight = minCanvasWidth / aspectRatio;
        } else if (minCanvasHeight) {
          if (strict) {
            minCanvasHeight = max(cropped ? cropBox.height : initialCanvasHeight, minCanvasHeight);
          }

          minCanvasWidth = minCanvasHeight * aspectRatio;
        } else if (strict) {
          if (cropped) {
            minCanvasWidth = cropBox.width;
            minCanvasHeight = cropBox.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          } else {
            minCanvasWidth = initialCanvasWidth;
            minCanvasHeight = initialCanvasHeight;
          }
        }

        $.extend(canvas, {
          minWidth: minCanvasWidth,
          minHeight: minCanvasHeight,
          maxWidth: Infinity,
          maxHeight: Infinity
        });
      }

      if (position) {
        if (strict) {
          if (cropped) {
            canvas.minLeft = min(cropBox.left, (cropBox.left + cropBox.width) - canvas.width);
            canvas.minTop = min(cropBox.top, (cropBox.top + cropBox.height) - canvas.height);
            canvas.maxLeft = cropBox.left;
            canvas.maxTop = cropBox.top;
          } else {
            canvas.minLeft = min(0, containerWidth - canvas.width);
            canvas.minTop = min(0, containerHeight - canvas.height);
            canvas.maxLeft = max(0, containerWidth - canvas.width);
            canvas.maxTop = max(0, containerHeight - canvas.height);
          }
        } else {
          canvas.minLeft = -canvas.width;
          canvas.minTop = -canvas.height;
          canvas.maxLeft = containerWidth;
          canvas.maxTop = containerHeight;
        }
      }
    },

    renderCanvas: function (changed) {
      var options = this.options,
          canvas = this.canvas,
          image = this.image,
          aspectRatio,
          rotated;

      if (this.rotated) {
        this.rotated = false;

        // Computes rotatation sizes with image sizes
        rotated = getRotatedSizes({
          width: image.width,
          height: image.height,
          degree: image.rotate
        });

        aspectRatio = rotated.width / rotated.height;

        if (aspectRatio !== canvas.aspectRatio) {
          canvas.left -= (rotated.width - canvas.width) / 2;
          canvas.top -= (rotated.height - canvas.height) / 2;
          canvas.width = rotated.width;
          canvas.height = rotated.height;
          canvas.aspectRatio = aspectRatio;
          this.limitCanvas(true, false);
        }
      }

      if (canvas.width > canvas.maxWidth || canvas.width < canvas.minWidth) {
        canvas.left = canvas.oldLeft;
      }

      if (canvas.height > canvas.maxHeight || canvas.height < canvas.minHeight) {
        canvas.top = canvas.oldTop;
      }

      canvas.width = min(max(canvas.width, canvas.minWidth), canvas.maxWidth);
      canvas.height = min(max(canvas.height, canvas.minHeight), canvas.maxHeight);

      this.limitCanvas(false, true);

      canvas.oldLeft = canvas.left = min(max(canvas.left, canvas.minLeft), canvas.maxLeft);
      canvas.oldTop = canvas.top = min(max(canvas.top, canvas.minTop), canvas.maxTop);

      this.$canvas.css({
        width: canvas.width,
        height: canvas.height,
        left: canvas.left,
        top: canvas.top
      });

      this.renderImage();

      if (this.cropped && options.strict) {
        this.limitCropBox(true, true);
      }

      if (changed) {
        this.output();
      }
    },

    renderImage: function () {
      var canvas = this.canvas,
          image = this.image,
          reversed;

      if (image.rotate) {
        reversed = getRotatedSizes({
          width: canvas.width,
          height: canvas.height,
          degree: image.rotate,
          aspectRatio: image.aspectRatio
        }, true);
      }

      $.extend(image, reversed ? {
        width: reversed.width,
        height: reversed.height,
        left: (canvas.width - reversed.width) / 2,
        top: (canvas.height - reversed.height) / 2
      } : {
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0
      });

      this.$clone.css({
        width: image.width,
        height: image.height,
        marginLeft: image.left,
        marginTop: image.top,
        transform: getRotateValue(image.rotate)
      });
    },

    initCropBox: function () {
      var options = this.options,
          canvas = this.canvas,
          aspectRatio = options.aspectRatio,
          autoCropArea = num(options.autoCropArea) || 0.8,
          cropBox = {
            width: canvas.width,
            height: canvas.height
          };

      if (aspectRatio) {
        if (canvas.height * aspectRatio > canvas.width) {
          cropBox.height = cropBox.width / aspectRatio;
        } else {
          cropBox.width = cropBox.height * aspectRatio;
        }
      }

      this.cropBox = cropBox;
      this.limitCropBox(true, true);

      // Initialize auto crop area
      cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
      cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

      // The width of auto crop area must large than "minWidth", and the height too. (#164)
      cropBox.width = max(cropBox.minWidth, cropBox.width * autoCropArea);
      cropBox.height = max(cropBox.minHeight, cropBox.height * autoCropArea);
      cropBox.oldLeft = cropBox.left = canvas.left + (canvas.width - cropBox.width) / 2;
      cropBox.oldTop = cropBox.top = canvas.top + (canvas.height - cropBox.height) / 2;

      this.initialCropBox = $.extend({}, cropBox);
    },

    limitCropBox: function (size, position) {
      var options = this.options,
          strict = options.strict,
          container = this.container,
          containerWidth = container.width,
          containerHeight = container.height,
          canvas = this.canvas,
          cropBox = this.cropBox,
          aspectRatio = options.aspectRatio,
          minCropBoxWidth,
          minCropBoxHeight;

      if (size) {
        minCropBoxWidth = num(options.minCropBoxWidth) || 0;
        minCropBoxHeight = num(options.minCropBoxHeight) || 0;

        // min/maxCropBoxWidth/Height must less than conatiner width/height
        cropBox.minWidth = min(containerWidth, minCropBoxWidth);
        cropBox.minHeight = min(containerHeight, minCropBoxHeight);
        cropBox.maxWidth = min(containerWidth, strict ? canvas.width : containerWidth);
        cropBox.maxHeight = min(containerHeight, strict ? canvas.height : containerHeight);

        if (aspectRatio) {
          // compare crop box size with container first
          if (cropBox.maxHeight * aspectRatio > cropBox.maxWidth) {
            cropBox.minHeight = cropBox.minWidth / aspectRatio;
            cropBox.maxHeight = cropBox.maxWidth / aspectRatio;
          } else {
            cropBox.minWidth = cropBox.minHeight * aspectRatio;
            cropBox.maxWidth = cropBox.maxHeight * aspectRatio;
          }
        }

        // The "minWidth" must be less than "maxWidth", and the "minHeight" too.
        cropBox.minWidth = min(cropBox.maxWidth, cropBox.minWidth);
        cropBox.minHeight = min(cropBox.maxHeight, cropBox.minHeight);
      }

      if (position) {
        if (strict) {
          cropBox.minLeft = max(0, canvas.left);
          cropBox.minTop = max(0, canvas.top);
          cropBox.maxLeft = min(containerWidth, canvas.left + canvas.width) - cropBox.width;
          cropBox.maxTop = min(containerHeight, canvas.top + canvas.height) - cropBox.height;
        } else {
          cropBox.minLeft = 0;
          cropBox.minTop = 0;
          cropBox.maxLeft = containerWidth - cropBox.width;
          cropBox.maxTop = containerHeight - cropBox.height;
        }
      }
    },

    renderCropBox: function () {
      var options = this.options,
          container = this.container,
          containerWidth = container.width,
          containerHeight = container.height,
          cropBox = this.cropBox;

      if (cropBox.width > cropBox.maxWidth || cropBox.width < cropBox.minWidth) {
        cropBox.left = cropBox.oldLeft;
      }

      if (cropBox.height > cropBox.maxHeight || cropBox.height < cropBox.minHeight) {
        cropBox.top = cropBox.oldTop;
      }

      cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
      cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

      this.limitCropBox(false, true);

      cropBox.oldLeft = cropBox.left = min(max(cropBox.left, cropBox.minLeft), cropBox.maxLeft);
      cropBox.oldTop = cropBox.top = min(max(cropBox.top, cropBox.minTop), cropBox.maxTop);

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        this.$face.data('drag', (cropBox.width === containerWidth && cropBox.height === containerHeight) ? 'move' : 'all');
      }

      this.$cropBox.css({
        width: cropBox.width,
        height: cropBox.height,
        left: cropBox.left,
        top: cropBox.top
      });

      if (this.cropped && options.strict) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },

    output: function () {
      var options = this.options,
          $this = this.$element;

      this.preview();

      if (options.crop) {
        options.crop.call($this, this.getData());
      }

      $this.trigger(EVENT_CHANGE);
    }
  });

  prototype.initPreview = function () {
    var url = this.url;

    this.$preview = $(this.options.preview);
    this.$viewBox.html('<img src="' + url + '">');

    // Override img element styles
    // Add `display:block` to avoid margin top issue (Occur only when margin-top <= -height)
    this.$preview.each(function () {
      var $this = $(this);

      $this.data(CROPPER_PREVIEW, {
        width: $this.width(),
        height: $this.height(),
        original: $this.html()
      }).html('<img src="' + url + '" style="display:block;width:100%;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation: 0deg!important">');
    });
  };

  prototype.resetPreview = function () {
    this.$preview.each(function () {
      var $this = $(this);

      $this.html($this.data(CROPPER_PREVIEW).original).removeData(CROPPER_PREVIEW);
    });
  };

  prototype.preview = function () {
    var image = this.image,
        canvas = this.canvas,
        cropBox = this.cropBox,
        width = image.width,
        height = image.height,
        left = cropBox.left - canvas.left - image.left,
        top = cropBox.top - canvas.top - image.top,
        rotate = image.rotate;

    if (!this.cropped || this.disabled) {
      return;
    }

    this.$viewBox.find('img').css({
      width: width,
      height: height,
      marginLeft: -left,
      marginTop: -top,
      transform: getRotateValue(rotate)
    });

    this.$preview.each(function () {
      var $this = $(this),
          data = $this.data(CROPPER_PREVIEW),
          ratio = data.width / cropBox.width,
          newWidth = data.width,
          newHeight = cropBox.height * ratio;

      if (newHeight > data.height) {
        ratio = data.height / cropBox.height;
        newWidth = cropBox.width * ratio;
        newHeight = data.height;
      }

      $this.width(newWidth).height(newHeight).find('img').css({
        width: width * ratio,
        height: height * ratio,
        marginLeft: -left * ratio,
        marginTop: -top * ratio,
        transform: getRotateValue(rotate)
      });
    });
  };

  prototype.addListeners = function () {
    var options = this.options,
        $this = this.$element,
        $cropper = this.$cropper;

    if ($.isFunction(options.dragstart)) {
      $this.on(EVENT_DRAG_START, options.dragstart);
    }

    if ($.isFunction(options.dragmove)) {
      $this.on(EVENT_DRAG_MOVE, options.dragmove);
    }

    if ($.isFunction(options.dragend)) {
      $this.on(EVENT_DRAG_END, options.dragend);
    }

    if ($.isFunction(options.zoomin)) {
      $this.on(EVENT_ZOOM_IN, options.zoomin);
    }

    if ($.isFunction(options.zoomout)) {
      $this.on(EVENT_ZOOM_OUT, options.zoomout);
    }

    if ($.isFunction(options.change)) {
      $this.on(EVENT_CHANGE, options.change);
    }

    $cropper.on(EVENT_MOUSE_DOWN, $.proxy(this.dragstart, this));

    if (options.zoomable && options.mouseWheelZoom) {
      $cropper.on(EVENT_WHEEL, $.proxy(this.wheel, this));
    }

    if (options.doubleClickToggle) {
      $cropper.on(EVENT_DBLCLICK, $.proxy(this.dblclick, this));
    }

    $document.on(EVENT_MOUSE_MOVE, (this._dragmove = proxy(this.dragmove, this))).on(EVENT_MOUSE_UP, (this._dragend = proxy(this.dragend, this)));

    if (options.responsive) {
      $window.on(EVENT_RESIZE, (this._resize = proxy(this.resize, this)));
    }
  };

  prototype.removeListeners = function () {
    var options = this.options,
        $this = this.$element,
        $cropper = this.$cropper;

    if ($.isFunction(options.dragstart)) {
      $this.off(EVENT_DRAG_START, options.dragstart);
    }

    if ($.isFunction(options.dragmove)) {
      $this.off(EVENT_DRAG_MOVE, options.dragmove);
    }

    if ($.isFunction(options.dragend)) {
      $this.off(EVENT_DRAG_END, options.dragend);
    }

    if ($.isFunction(options.zoomin)) {
      $this.off(EVENT_ZOOM_IN, options.zoomin);
    }

    if ($.isFunction(options.zoomout)) {
      $this.off(EVENT_ZOOM_OUT, options.zoomout);
    }

    if ($.isFunction(options.change)) {
      $this.off(EVENT_CHANGE, options.change);
    }

    $cropper.off(EVENT_MOUSE_DOWN, this.dragstart);

    if (options.zoomable && options.mouseWheelZoom) {
      $cropper.off(EVENT_WHEEL, this.wheel);
    }

    if (options.doubleClickToggle) {
      $cropper.off(EVENT_DBLCLICK, this.dblclick);
    }

    $document.off(EVENT_MOUSE_MOVE, this._dragmove).off(EVENT_MOUSE_UP, this._dragend);

    if (options.responsive) {
      $window.off(EVENT_RESIZE, this._resize);
    }
  };

  $.extend(prototype, {
    resize: function () {
      var $container = this.$container,
          container = this.container,
          canvasData,
          cropBoxData,
          ratio;

      if (this.disabled || !container) { // Check "container" for IE8
        return;
      }

      ratio = $container.width() / container.width;

      if (ratio !== 1 || $container.height() !== container.height) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();

        this.render();
        this.setCanvasData($.each(canvasData, function (i, n) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData($.each(cropBoxData, function (i, n) {
          cropBoxData[i] = n * ratio;
        }));
      }
    },

    dblclick: function () {
      if (this.disabled) {
        return;
      }

      if (this.$dragBox.hasClass(CLASS_CROP)) {
        this.setDragMode('move');
      } else {
        this.setDragMode('crop');
      }
    },

    wheel: function (event) {
      var e = event.originalEvent,
          delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault();

      if (e.deltaY) {
        delta = e.deltaY > 0 ? 1 : -1;
      } else if (e.wheelDelta) {
        delta = -e.wheelDelta / 120;
      } else if (e.detail) {
        delta = e.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * 0.1);
    },

    dragstart: function (event) {
      var options = this.options,
          originalEvent = event.originalEvent,
          touches = originalEvent && originalEvent.touches,
          e = event,
          dragType,
          dragStartEvent,
          touchesLength;

      if (this.disabled) {
        return;
      }

      if (touches) {
        touchesLength = touches.length;

        if (touchesLength > 1) {
          if (options.zoomable && options.touchDragZoom && touchesLength === 2) {
            e = touches[1];
            this.startX2 = e.pageX;
            this.startY2 = e.pageY;
            dragType = 'zoom';
          } else {
            return;
          }
        }

        e = touches[0];
      }

      dragType = dragType || $(e.target).data('drag');

      if (REGEXP_DRAG_TYPES.test(dragType)) {
        event.preventDefault();

        dragStartEvent = $.Event(EVENT_DRAG_START, {
          originalEvent: originalEvent,
          dragType: dragType
        });

        this.$element.trigger(dragStartEvent);

        if (dragStartEvent.isDefaultPrevented()) {
          return;
        }

        this.dragType = dragType;
        this.cropping = false;
        this.startX = e.pageX;
        this.startY = e.pageY;

        if (dragType === 'crop') {
          this.cropping = true;
          this.$dragBox.addClass(CLASS_MODAL);
        }
      }
    },

    dragmove: function (event) {
      var options = this.options,
          originalEvent = event.originalEvent,
          touches = originalEvent && originalEvent.touches,
          e = event,
          dragType = this.dragType,
          dragMoveEvent,
          touchesLength;

      if (this.disabled) {
        return;
      }

      if (touches) {
        touchesLength = touches.length;

        if (touchesLength > 1) {
          if (options.zoomable && options.touchDragZoom && touchesLength === 2) {
            e = touches[1];
            this.endX2 = e.pageX;
            this.endY2 = e.pageY;
          } else {
            return;
          }
        }

        e = touches[0];
      }

      if (dragType) {
        event.preventDefault();

        dragMoveEvent = $.Event(EVENT_DRAG_MOVE, {
          originalEvent: originalEvent,
          dragType: dragType
        });

        this.$element.trigger(dragMoveEvent);

        if (dragMoveEvent.isDefaultPrevented()) {
          return;
        }

        this.endX = e.pageX;
        this.endY = e.pageY;

        this.change(e.shiftKey);
      }
    },

    dragend: function (event) {
      var dragType = this.dragType,
          dragEndEvent;

      if (this.disabled) {
        return;
      }

      if (dragType) {
        event.preventDefault();

        dragEndEvent = $.Event(EVENT_DRAG_END, {
          originalEvent: event.originalEvent,
          dragType: dragType
        });

        this.$element.trigger(dragEndEvent);

        if (dragEndEvent.isDefaultPrevented()) {
          return;
        }

        if (this.cropping) {
          this.cropping = false;
          this.$dragBox.toggleClass(CLASS_MODAL, this.cropped && this.options.modal);
        }

        this.dragType = '';
      }
    }
  });

  $.extend(prototype, {
    crop: function () {
      if (!this.built || this.disabled) {
        return;
      }

      if (!this.cropped) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          this.$dragBox.addClass(CLASS_MODAL);
        }

        this.$cropBox.removeClass(CLASS_HIDDEN);
      }

      this.setCropBoxData(this.initialCropBox);
    },

    reset: function () {
      if (!this.built || this.disabled) {
        return;
      }

      this.image = $.extend({}, this.initialImage);
      this.canvas = $.extend({}, this.initialCanvas);
      this.cropBox = $.extend({}, this.initialCropBox); // required for strict mode

      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },

    clear: function () {
      if (!this.cropped || this.disabled) {
        return;
      }

      $.extend(this.cropBox, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });

      this.cropped = false;
      this.renderCropBox();

      this.limitCanvas();
      this.renderCanvas(); // Render canvas after render crop box

      this.$dragBox.removeClass(CLASS_MODAL);
      this.$cropBox.addClass(CLASS_HIDDEN);
    },

    destroy: function () {
      var $this = this.$element;

      if (this.ready) {
        this.unbuild();
        $this.removeClass(CLASS_HIDDEN);
      } else if (this.$clone) {
        this.$clone.remove();
      }

      $this.removeData('cropper');
    },

    replace: function (url) {
      if (!this.disabled && url) {
        this.options.data = null; // Remove previous data
        this.load(url);
      }
    },

    enable: function () {
      if (this.built) {
        this.disabled = false;
        this.$cropper.removeClass(CLASS_DISABLED);
      }
    },

    disable: function () {
      if (this.built) {
        this.disabled = true;
        this.$cropper.addClass(CLASS_DISABLED);
      }
    },

    move: function (offsetX, offsetY) {
      var canvas = this.canvas;

      if (this.built && !this.disabled && this.options.movable && isNumber(offsetX) && isNumber(offsetY)) {
        canvas.left += offsetX;
        canvas.top += offsetY;
        this.renderCanvas(true);
      }
    },

    zoom: function (delta) {
      var canvas = this.canvas,
          zoomEvent,
          width,
          height;

      delta = num(delta);

      if (delta && this.built && !this.disabled && this.options.zoomable) {
        zoomEvent = delta > 0 ? $.Event(EVENT_ZOOM_IN) : $.Event(EVENT_ZOOM_OUT);
        this.$element.trigger(zoomEvent);

        if (zoomEvent.isDefaultPrevented()) {
          return;
        }

        delta = delta <= -1 ? 1 / (1 - delta) : delta <= 1 ? (1 + delta) : delta;
        width = canvas.width * delta;
        height = canvas.height * delta;
        canvas.left -= (width - canvas.width) / 2;
        canvas.top -= (height - canvas.height) / 2;
        canvas.width = width;
        canvas.height = height;
        this.renderCanvas(true);
        this.setDragMode('move');
      }
    },

    rotate: function (degree) {
      var image = this.image;

      degree = num(degree);

      if (degree && this.built && !this.disabled && this.options.rotatable) {
        image.rotate = (image.rotate + degree) % 360;
        this.rotated = true;
        this.renderCanvas(true);
      }
    },

    getData: function (rounded) {
      var cropBox = this.cropBox,
          canvas = this.canvas,
          image = this.image,
          ratio,
          data;

      if (this.built && this.cropped) {
        data = {
          x: cropBox.left - canvas.left,
          y: cropBox.top - canvas.top,
          width: cropBox.width,
          height: cropBox.height
        };

        ratio = image.width / image.naturalWidth;

        $.each(data, function (i, n) {
          n = n / ratio;
          data[i] = rounded ? Math.round(n) : n;
        });

      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      data.rotate = this.ready ? image.rotate : 0;

      return data;
    },

    setData: function (data) {
      var image = this.image,
          canvas = this.canvas,
          cropBoxData = {},
          ratio;

      if (this.built && !this.disabled && $.isPlainObject(data)) {
        if (isNumber(data.rotate) && data.rotate !== image.rotate && this.options.rotatable) {
          image.rotate = data.rotate;
          this.rotated = true;
          this.renderCanvas(true);
        }

        ratio = image.width / image.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvas.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvas.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }
    },

    getContainerData: function () {
      return this.built ? this.container : {};
    },

    getImageData: function () {
      return this.ready ? this.image : {};
    },

    getCanvasData: function () {
      var canvas = this.canvas,
          data;

      if (this.built) {
        data = {
          left: canvas.left,
          top: canvas.top,
          width: canvas.width,
          height: canvas.height
        };
      }

      return data || {};
    },

    setCanvasData: function (data) {
      var canvas = this.canvas,
          aspectRatio = canvas.aspectRatio;

      if (this.built && !this.disabled && $.isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvas.left = data.left;
        }

        if (isNumber(data.top)) {
          canvas.top = data.top;
        }

        if (isNumber(data.width)) {
          canvas.width = data.width;
          canvas.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvas.height = data.height;
          canvas.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }
    },

    getCropBoxData: function () {
      var cropBox = this.cropBox,
          data;

      if (this.built && this.cropped) {
        data = {
          left: cropBox.left,
          top: cropBox.top,
          width: cropBox.width,
          height: cropBox.height
        };
      }

      return data || {};
    },

    setCropBoxData: function (data) {
      var cropBox = this.cropBox,
          aspectRatio = this.options.aspectRatio;

      if (this.built && this.cropped && !this.disabled && $.isPlainObject(data)) {

        if (isNumber(data.left)) {
          cropBox.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBox.top = data.top;
        }

        if (isNumber(data.width)) {
          cropBox.width = data.width;
        }

        if (isNumber(data.height)) {
          cropBox.height = data.height;
        }

        if (aspectRatio) {
          if (isNumber(data.width)) {
            cropBox.height = cropBox.width / aspectRatio;
          } else if (isNumber(data.height)) {
            cropBox.width = cropBox.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }
    },

    getCroppedCanvas: function (options) {
      var originalWidth,
          originalHeight,
          canvasWidth,
          canvasHeight,
          scaledWidth,
          scaledHeight,
          scaledRatio,
          aspectRatio,
          canvas,
          context,
          data;

      if (!this.built || !this.cropped || !SUPPORT_CANVAS) {
        return;
      }

      if (!$.isPlainObject(options)) {
        options = {};
      }

      data = this.getData();
      originalWidth = data.width;
      originalHeight = data.height;
      aspectRatio = originalWidth / originalHeight;

      if ($.isPlainObject(options)) {
        scaledWidth = options.width;
        scaledHeight = options.height;

        if (scaledWidth) {
          scaledHeight = scaledWidth / aspectRatio;
          scaledRatio = scaledWidth / originalWidth;
        } else if (scaledHeight) {
          scaledWidth = scaledHeight * aspectRatio;
          scaledRatio = scaledHeight / originalHeight;
        }
      }

      canvasWidth = scaledWidth || originalWidth;
      canvasHeight = scaledHeight || originalHeight;

      canvas = $('<canvas>')[0];
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context = canvas.getContext('2d');

      if (options.fillColor) {
        context.fillStyle = options.fillColor;
        context.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
      context.drawImage.apply(context, (function () {
        var source = getSourceCanvas(this.$clone[0], this.image),
            sourceWidth = source.width,
            sourceHeight = source.height,
            args = [source],
            srcX = data.x, // source canvas
            srcY = data.y,
            srcWidth,
            srcHeight,
            dstX, // destination canvas
            dstY,
            dstWidth,
            dstHeight;

        if (srcX <= -originalWidth || srcX > sourceWidth) {
          srcX = srcWidth = dstX = dstWidth = 0;
        } else if (srcX <= 0) {
          dstX = -srcX;
          srcX = 0;
          srcWidth = dstWidth = min(sourceWidth, originalWidth + srcX);
        } else if (srcX <= sourceWidth) {
          dstX = 0;
          srcWidth = dstWidth = min(originalWidth, sourceWidth - srcX);
        }

        if (srcWidth <= 0 || srcY <= -originalHeight || srcY > sourceHeight) {
          srcY = srcHeight = dstY = dstHeight = 0;
        } else if (srcY <= 0) {
          dstY = -srcY;
          srcY = 0;
          srcHeight = dstHeight = min(sourceHeight, originalHeight + srcY);
        } else if (srcY <= sourceHeight) {
          dstY = 0;
          srcHeight = dstHeight = min(originalHeight, sourceHeight - srcY);
        }

        args.push(srcX, srcY, srcWidth, srcHeight);

        // Scale destination sizes
        if (scaledRatio) {
          dstX *= scaledRatio;
          dstY *= scaledRatio;
          dstWidth *= scaledRatio;
          dstHeight *= scaledRatio;
        }

        // Avoid "IndexSizeError" in IE and Firefox
        if (dstWidth > 0 && dstHeight > 0) {
          args.push(dstX, dstY, dstWidth, dstHeight);
        }

        return args;
      }).call(this));

      return canvas;
    },

    setAspectRatio: function (aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        options.aspectRatio = num(aspectRatio) || NaN; // 0 -> NaN

        if (this.built) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }
    },

    setDragMode: function (mode) {
      var options = this.options,
          croppable,
          movable;

      if (this.ready && !this.disabled) {
        croppable = options.dragCrop && mode === 'crop';
        movable = options.movable && mode === 'move';
        mode = (croppable || movable) ? mode : 'none';

        this.$dragBox.data('drag', mode).toggleClass(CLASS_CROP, croppable).toggleClass(CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable(#300)
          this.$face.data('drag', mode).toggleClass(CLASS_CROP, croppable).toggleClass(CLASS_MOVE, movable);
        }
      }
    }
  });

  prototype.change = function (shiftKey) {
    var dragType = this.dragType,
        options = this.options,
        canvas = this.canvas,
        container = this.container,
        cropBox = this.cropBox,
        width = cropBox.width,
        height = cropBox.height,
        left = cropBox.left,
        top = cropBox.top,
        right = left + width,
        bottom = top + height,
        minLeft = 0,
        minTop = 0,
        maxWidth = container.width,
        maxHeight = container.height,
        renderable = true,
        aspectRatio = options.aspectRatio,
        range = {
          x: this.endX - this.startX,
          y: this.endY - this.startY
        },
        offset;

    // Locking aspect ratio in "free mode" by holding shift key (#259)
    if (!aspectRatio && shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }

    if (options.strict) {
      minLeft = cropBox.minLeft;
      minTop = cropBox.minTop;
      maxWidth = minLeft + min(container.width, canvas.width);
      maxHeight = minTop + min(container.height, canvas.height);
    }

    if (aspectRatio) {
      range.X = range.y * aspectRatio;
      range.Y = range.x / aspectRatio;
    }

    switch (dragType) {
      // Move cropBox
      case 'all':
        left += range.x;
        top += range.y;
        break;

      // Resize cropBox
      case 'e':
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        width += range.x;

        if (aspectRatio) {
          height = width / aspectRatio;
          top -= range.Y / 2;
        }

        if (width < 0) {
          dragType = 'w';
          width = 0;
        }

        break;

      case 'n':
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        height -= range.y;
        top += range.y;

        if (aspectRatio) {
          width = height * aspectRatio;
          left += range.X / 2;
        }

        if (height < 0) {
          dragType = 's';
          height = 0;
        }

        break;

      case 'w':
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        width -= range.x;
        left += range.x;

        if (aspectRatio) {
          height = width / aspectRatio;
          top += range.Y / 2;
        }

        if (width < 0) {
          dragType = 'e';
          width = 0;
        }

        break;

      case 's':
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        height += range.y;

        if (aspectRatio) {
          width = height * aspectRatio;
          left -= range.X / 2;
        }

        if (height < 0) {
          dragType = 'n';
          height = 0;
        }

        break;

      case 'ne':
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }

          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          dragType = 'sw';
          height = 0;
          width = 0;
        } else if (width < 0) {
          dragType = 'nw';
          width = 0;
        } else if (height < 0) {
          dragType = 'se';
          height = 0;
        }

        break;

      case 'nw':
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }

          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += range.X;
        } else {
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          dragType = 'se';
          height = 0;
          width = 0;
        } else if (width < 0) {
          dragType = 'ne';
          width = 0;
        } else if (height < 0) {
          dragType = 'sw';
          height = 0;
        }

        break;

      case 'sw':
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          dragType = 'ne';
          height = 0;
          width = 0;
        } else if (width < 0) {
          dragType = 'se';
          width = 0;
        } else if (height < 0) {
          dragType = 'nw';
          height = 0;
        }

        break;

      case 'se':
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          width += range.x;
          height = width / aspectRatio;
        } else {
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          dragType = 'nw';
          height = 0;
          width = 0;
        } else if (width < 0) {
          dragType = 'sw';
          width = 0;
        } else if (height < 0) {
          dragType = 'ne';
          height = 0;
        }

        break;

      // Move image
      case 'move':
        canvas.left += range.x;
        canvas.top += range.y;
        this.renderCanvas(true);
        renderable = false;
        break;

      // Scale image
      case 'zoom':
        this.zoom(function (x1, y1, x2, y2) {
          var z1 = sqrt(x1 * x1 + y1 * y1),
              z2 = sqrt(x2 * x2 + y2 * y2);

          return (z2 - z1) / z1;
        }(
          abs(this.startX - this.startX2),
          abs(this.startY - this.startY2),
          abs(this.endX - this.endX2),
          abs(this.endY - this.endY2)
        ));

        this.startX2 = this.endX2;
        this.startY2 = this.endY2;
        renderable = false;
        break;

      // Crop image
      case 'crop':
        if (range.x && range.y) {
          offset = this.$cropper.offset();
          left = this.startX - offset.left;
          top = this.startY - offset.top;
          width = cropBox.minWidth;
          height = cropBox.minHeight;

          if (range.x > 0) {
            if (range.y > 0) {
              dragType = 'se';
            } else {
              dragType = 'ne';
              top -= height;
            }
          } else {
            if (range.y > 0) {
              dragType = 'sw';
              left -= width;
            } else {
              dragType = 'nw';
              left -= width;
              top -= height;
            }
          }

          // Show the cropBox if is hidden
          if (!this.cropped) {
            this.cropped = true;
            this.$cropBox.removeClass(CLASS_HIDDEN);
          }
        }

        break;

      // No default
    }

    if (renderable) {
      cropBox.width = width;
      cropBox.height = height;
      cropBox.left = left;
      cropBox.top = top;
      this.dragType = dragType;

      this.renderCropBox();
    }

    // Override
    this.startX = this.endX;
    this.startY = this.endY;
  };

  $.extend(Cropper.prototype, prototype);

  Cropper.DEFAULTS = {
    // Defines the aspect ratio of the crop box
    // Type: Number
    aspectRatio: NaN,

    // Defines the percentage of automatic cropping area when initializes
    // Type: Number (Must large than 0 and less than 1)
    autoCropArea: 0.8, // 80%

    // Outputs the cropping results.
    // Type: Function
    crop: null,

    // Previous/latest crop data
    // Type: Object
    data: null,

    // Add extra containers for previewing
    // Type: String (jQuery selector)
    preview: '',

    // Toggles
    strict: true, // strict mode, the image cannot zoom out less than the container
    responsive: true, // Rebuild when resize the window
    checkImageOrigin: true, // Check if the target image is cross origin

    modal: true, // Show the black modal
    guides: true, // Show the dashed lines for guiding
    highlight: true, // Show the white modal to highlight the crop box
    background: true, // Show the grid background

    autoCrop: true, // Enable to crop the image automatically when initialize
    dragCrop: true, // Enable to create new crop box by dragging over the image
    movable: true, // Enable to move the image
    rotatable: true, // Enable to rotate the image
    zoomable: true, // Enable to zoom the image
    touchDragZoom: true, // Enable to zoom the image by wheeling mouse
    mouseWheelZoom: true, // Enable to zoom the image by dragging touch
    cropBoxMovable: true, // Enable to move the crop box
    cropBoxResizable: true, // Enable to resize the crop box
    doubleClickToggle: true, // Toggle drag mode between "crop" and "move" when double click on the cropper

    // Dimensions
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,

    // Events
    build: null, // Function
    built: null, // Function
    dragstart: null, // Function
    dragmove: null, // Function
    dragend: null, // Function
    zoomin: null, // Function
    zoomout: null, // Function
    change: null // Function
  };

  Cropper.setDefaults = function (options) {
    $.extend(Cropper.DEFAULTS, options);
  };

  // Use the string compressor: Strmin (https://github.com/fengyuanchen/strmin)
  Cropper.TEMPLATE = (function (source, words) {
    words = words.split(',');
    return source.replace(/\d+/g, function (i) {
      return words[i];
    });
  })('<0 6="5-container"><0 6="5-canvas"></0><0 6="5-2-9"></0><0 6="5-crop-9"><1 6="5-view-9"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-face"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>', 'div,span,drag,data,point,cropper,class,line,dashed,box');

  /* Template source:
  <div class="cropper-container">
    <div class="cropper-canvas"></div>
    <div class="cropper-drag-box"></div>
    <div class="cropper-crop-box">
      <span class="cropper-view-box"></span>
      <span class="cropper-dashed dashed-h"></span>
      <span class="cropper-dashed dashed-v"></span>
      <span class="cropper-face"></span>
      <span class="cropper-line line-e" data-drag="e"></span>
      <span class="cropper-line line-n" data-drag="n"></span>
      <span class="cropper-line line-w" data-drag="w"></span>
      <span class="cropper-line line-s" data-drag="s"></span>
      <span class="cropper-point point-e" data-drag="e"></span>
      <span class="cropper-point point-n" data-drag="n"></span>
      <span class="cropper-point point-w" data-drag="w"></span>
      <span class="cropper-point point-s" data-drag="s"></span>
      <span class="cropper-point point-ne" data-drag="ne"></span>
      <span class="cropper-point point-nw" data-drag="nw"></span>
      <span class="cropper-point point-sw" data-drag="sw"></span>
      <span class="cropper-point point-se" data-drag="se"></span>
    </div>
  </div>
  */

  // Save the other cropper
  Cropper.other = $.fn.cropper;

  // Register as jQuery plugin
  $.fn.cropper = function (options) {
    var args = toArray(arguments, 1),
        result;

    this.each(function () {
      var $this = $(this),
          data = $this.data('cropper'),
          fn;

      if (!data) {
        $this.data('cropper', (data = new Cropper(this, options)));
      }

      if (typeof options === 'string' && $.isFunction((fn = data[options]))) {
        result = fn.apply(data, args);
      }
    });

    return isUndefined(result) ? this : result;
  };

  $.fn.cropper.Constructor = Cropper;
  $.fn.cropper.setDefaults = Cropper.setDefaults;

  // No conflict
  $.fn.cropper.noConflict = function () {
    $.fn.cropper = Cropper.other;
    return this;
  };

});


/***/ }),

/***/ "./qsuploader/icon-plus.png":
/*!**********************************!*\
  !*** ./qsuploader/icon-plus.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9c61c547bddcc6c9bea47fa7c335d3c8.png";

/***/ }),

/***/ "./qsuploader/index.js":
/*!*****************************!*\
  !*** ./qsuploader/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-plus.png */ "./qsuploader/icon-plus.png");
/* harmony import */ var _icon_plus_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icon_plus_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jquery_ossuploader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.ossuploader.css */ "./qsuploader/jquery.ossuploader.css");
/* harmony import */ var _jquery_ossuploader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jquery_ossuploader_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cropper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cropper.css */ "./qsuploader/cropper.css");
/* harmony import */ var _cropper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cropper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cropper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cropper.js */ "./qsuploader/cropper.js");
/* harmony import */ var _cropper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cropper_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plupload_dev_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plupload.dev.js */ "./qsuploader/plupload.dev.js");
/* harmony import */ var _canvas_to_blob_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas-to-blob.min.js */ "./qsuploader/canvas-to-blob.min.js");
/* harmony import */ var _canvas_to_blob_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_canvas_to_blob_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jquery_ossuploader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jquery.ossuploader.js */ "./qsuploader/jquery.ossuploader.js");
/* harmony import */ var _jquery_ossuploader_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jquery_ossuploader_js__WEBPACK_IMPORTED_MODULE_6__);









/***/ }),

/***/ "./qsuploader/jquery.ossuploader.css":
/*!*******************************************!*\
  !*** ./qsuploader/jquery.ossuploader.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/_css-loader@0.28.11@css-loader!./jquery.ossuploader.css */ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./qsuploader/jquery.ossuploader.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/_style-loader@0.20.3@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.20.3@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./qsuploader/jquery.ossuploader.js":
/*!******************************************!*\
  !*** ./qsuploader/jquery.ossuploader.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($){
  function guid() {
      function S4() {
         return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      }
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  function Crop(opt, browse_button, plupload){
     this.options = opt;
     this.browse_button = browse_button;
     this.plupload = plupload;

     this.createDom();
     this.bindEvent();
  };

  Crop.prototype.bindEvent = function(){
      var crop = this;
      var browse_button = this.browse_button;
      $('body').on('click', '#' + browse_button, function(){
          crop.fileInput.trigger('click');
      });
      this.close.on('click', function(){
          crop.hideModal();
      });
      this.fileInput.on('click', function(e){
          this.value = '';
      });
      this.fileInput.on('change', function(e){
          crop.loadUploadImg(e.target.files[0]);
          crop.showModal();
      });
      this.cropButton.on('click', function(){
          var canvas = crop.cropper.getCroppedCanvas();
          canvas.toBlob(function(blob){
              crop.plupload.addFile(blob);
              crop.hideModal();
          },'image/jpeg');
      });
  }

  Crop.prototype.createDom = function(){
    this.fileInput = $('<input type="file" />');
    this.mask = $('<div class="ossuploader-mask"></div>');
    this.mask.attr('id', guid());
    var close_container = $('<div class="close-container"></div>');
    this.cropButton = $('<button class="crop-btn">截取</button>');
    this.close = $('<span class="close"></span>');
    this.close.text('X');
    close_container.append(this.cropButton);
    close_container.append(this.close);
    this.image = $('<div class="image"><img class="ori-img" /></div>');
    this.mask.append(close_container);
    this.mask.append(this.image);
    $('body').append(this.mask);
  };

  Crop.prototype.showModal = function(){
     $(this.mask[0]).show();
  };

  Crop.prototype.hideModal = function(){
     $(this.mask[0]).hide();
     this.closeMask();
  };

  Crop.prototype.closeMask = function(){
      this.image.children('img').removeAttr('src');
      this.cropper.destroy();
  }

  Crop.prototype.loadUploadImg = function(file){
      if($.inArray(file.type, ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/bmp']) == -1){
          alert('请选择图片类型文件');
          throw '请选择图片类型文件';
      }
      var crop = this;
      var reader = new FileReader();
      reader.onload = function(e){
          crop.image.children('img').attr('src', e.target.result);
          crop.initCropper();
      }
      reader.readAsDataURL(file);
  }

  Crop.prototype.initCropper = function(){
      if(this.cropper){
        this.cropper.destroy();
      }
      this.cropper = new Cropper(this.image.children('img')[0], this.options);

  }

     $.fn.ossuploader = function(option){
         var accessid = '';
         var accesskey = '';
         var host = '';
         var policyBase64 = '';
         var signature = '';
         var callbackbody = '';
         var filename = '';
         var key = '';
         var expire = 0;
         var g_object_name = '';
         var callbackvar;
         var oss_meta;
         var now = timestamp = Date.parse(new Date()) / 1000;

         var defaultSetting = { multi_selection:false};
         var setting = $.extend(defaultSetting,option);

         var send_request = function(url){
             var xmlhttp = null;
             if (window.XMLHttpRequest)
             {
                 xmlhttp=new XMLHttpRequest();
             }
             else if (window.ActiveXObject)
             {
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
             }

             if (xmlhttp!=null)
             {
                 serverUrl = url;
                 xmlhttp.open( "GET", serverUrl, false );
                 xmlhttp.send( null );
                 return xmlhttp.responseText
             }
             else
             {
                 alert("Your browser does not support XMLHTTP.");
             }
         }

         var get_signature = function(url){
             //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
             now = timestamp = Date.parse(new Date()) / 1000;
             body = send_request(url);
             var obj = eval ("(" + body + ")");
             host = obj['host'];
             policyBase64 = obj['policy'];
             accessid = obj['accessid'];
             signature = obj['signature'];
             expire = parseInt(obj['expire']);
             callbackbody = obj['callback'];
             callbackvar = obj['callback_var'];
             oss_meta = obj['oss_meta'];
             key = obj['dir'];
             return true;
         }

         var get_suffix = function(filename){
             pos = filename.lastIndexOf('.');
             suffix = '';
             if (pos != -1) {
                 suffix = filename.substring(pos);
             }
             return suffix;
         }

         var calculate_object_name = function(filename){
             suffix = get_suffix(filename);
             g_object_name = key + suffix;
         }

         var set_upload_param = function(up, filename, ret, url){
             if (ret == false)
             {
                 ret = get_signature(url);
             }
             g_object_name = key;
             if (filename != '') {
                 suffix = get_suffix(filename)
                 calculate_object_name(filename)
             }
             new_multipart_params = {
                 'key' : g_object_name,
                 'policy': policyBase64,
                 'OSSAccessKeyId': accessid,
                 'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
                 'callback' : callbackbody,
                 'signature': signature,
             };

             var var_obj = JSON.parse(callbackvar);
             for(var key in var_obj){
                 new_multipart_params[key] = var_obj[key];
             }
             if(oss_meta){
                 var meta_obj = JSON.parse(oss_meta);
                 for(var meta in meta_obj){
                     new_multipart_params[meta] = meta_obj[meta];
                 }
             }
             up.setOption({
                 'url': host,
                 'multipart_params': new_multipart_params
             });
             up.start();
         }

         //upload_flag true 为文件上传流程
         //upload_flag false 数据读取流程
         var add_img = function(parent_div, id, src, upload_flag, file_id){
           var htmlEL = $('<div class="ossuploader-dash-border" id="' + id + '"><img src="' + src + '" alt=""><span class="ossuploader-progress"></span><span class="ossuploader-filedelete">×</span></div>');
           if(upload_flag == true && !setting.multi_selection){
             $(parent_div).children('.ossuploader-dash-border').remove();
           }

           if(upload_flag == false && file_id){
             htmlEL.attr('data-fileid', file_id);
           }
           $(parent_div).append(htmlEL);
         }


         var init = function(o){
            var files_length = 0;
            var file_count = 0;
            var parent = o.parentNode;
            var clone_o = o.cloneNode();
            var div = document.createElement('div');

            div.className = 'ossuploader-upload-box';
            div.id = "ossuploader_upload_box_" + guid();

            var div_add = document.createElement('div');
            div_add.className = 'ossuploader-add';
            div_add.id = 'ossuploader_upload_' + guid();

            setting.browse_button = div_add.id;
            if(setting.crop){
                var div_add1 = document.createElement('div');
                div_add1.id = 'ossuploader_upload1_' + guid();
                setting.browse_button = div_add1.id;
                setting.multi_selection = false;
                div.appendChild(div_add1);
            }

            var i = document.createElement('i');
            var p = document.createElement('p');

            p.innerText = '添加图片';

            div_add.appendChild(i);
            div_add.appendChild(p);

            div.appendChild(div_add);
            div.appendChild(clone_o);

            var values,srcs;
            values = o.value.split(',');
            if(values && o.dataset && o.dataset.srcjson){
              srcs = JSON.parse(o.dataset.srcjson);

              for(var n = 0; n < values.length; n++){

                var id = new Date().getTime();
                id = id + values[n];
                add_img(div, id, srcs[n], false, values[n]);
              }
              clone_o.removeAttribute("data-srcjson");
            }
            parent.replaceChild(div, o);
            o = null;

            var pluploaduploader = new plupload.Uploader({
               runtimes : 'html5,flash,silverlight,html4',
               browse_button : setting.browse_button,
               multi_selection: setting.multi_selection,
               container: document.getElementById(div.id),
               flash_swf_url : '/Public/libs/plupload-2.1.2/js/Moxie.swf',
               silverlight_xap_url : '/Public/libs/plupload-2.1.2/js/Moxie.xap',
               url : 'http://oss.aliyuncs.com',

               filters: {
                   // mime_types : [ //只允许上传图片
                   // { title : "Image files", extensions : "jpg,gif,png,bmp,jpeg" },
                   // ],
                   prevent_duplicates : false //允许选取重复文件
               },

               init: {
                   PostInit: function() {
                       //$('#'+container).children('.uploadify-queue').html('');
                   },

                   FilesAdded: function(up, files) {
                       if(setting.beforeUpload && typeof setting.beforeUpload == 'function'){
                           if(setting.beforeUpload() === false){
                              return;
                           }
                       }
                       files_length += files.length;
                       plupload.each(files, function(file) {
                           var reader = new FileReader();
                           reader.readAsDataURL(file.getNative());
                           reader.onload = function (e) {
                             add_img(div, file.id, e.target.result, true);
                           };

                       });
                       up.start();
                   },

                   BeforeUpload: function(up, file) {
                       if(setting.oss == true){
                           set_upload_param(up, file.name, false, setting.url);
                       }
                       else{
                           up.setOption({
                               'url': setting.url
                           });
                           up.start();
                       }
                   },

                   UploadProgress: function(up, file) {
                       var el = $('#' + file.id).children('.ossuploader-progress');
                       el.css('width', file.percent + '%');
                   },

                   FileUploaded: function(up, file, info) {
                       if (info.status == 200)
                       {
                           var response = JSON.parse(info.response);
                           if(response.err_msg){
                               alert(response.err_msg);
                           }
                           else{
                               if(!setting.multi_selection){
                                    $(clone_o).val(response.file_id);
                               }
                               else{
                                   var file_id = $(clone_o).val();
                                   if(file_id){
                                       $(clone_o).val(file_id + ',' + response.file_id);
                                   }
                                   else{
                                       $(clone_o).val(response.file_id);
                                   }
                               }
                               $('#' + file.id).attr('data-fileid', response.file_id);
                           }
                       }
                       else
                       {
                           alert(info.response);
                       }

                       file_count++;
                       if(files_length === file_count && setting.uploadCompleted && typeof setting.uploadCompleted == "function"){
                           setting.uploadCompleted();
                       }
                   },

                   Error: function(up, err) {
                       if (err.code == -600) {
                           alert("选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                       }
                       else if (err.code == -601) {
                           alert("选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                       }
                       else if (err.code == -602) {
                           alert("这个文件已经上传过一遍了");
                       }
                       else if(err.code == -200){
                           alert('文件太大了');
                       }
                       else
                       {
                           alert(err.response);
                       }
                   }
               }
           });

           pluploaduploader.init();

           if(setting.crop){
               var crop = new Crop(setting.crop, div_add.id, pluploaduploader);
           }

             $(div).on('click', '.ossuploader-filedelete', function() {
                 var box = $(this).parents('.ossuploader-upload-box');
                 var input = box.children('input[type=hidden]');
                 var fileVal = input.val().split(',');
                 var id = $(this).parent().data('fileid');
                 for(var i = 0; i < fileVal.length; i++) {
                     if(parseInt(id) === parseInt(fileVal[i])) {
                         fileVal.splice(i, 1);
                         input.val(fileVal.join(','));
                         break;
                     }
                 }
                 $(this).parent().remove();
             });
         };

         (function(o){
           $(o).each(function(){
              init(this);
           });


        }(this));

     }

}(jQuery));


/***/ }),

/***/ "./qsuploader/moxie.js":
/*!*****************************!*\
  !*** ./qsuploader/moxie.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
 * v1.2.1
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-05-14
 */
/**
 * Compiled inline version. (Library mode)
 */

/*jshint smarttabs:true, undef:true, latedef:true, curly:true, bitwise:true, camelcase:true */
/*globals $code */

(function(exports, undefined) {
	"use strict";

	var modules = {};

	function require(ids, callback) {
		var module, defs = [];

		for (var i = 0; i < ids.length; ++i) {
			module = modules[ids[i]] || resolve(ids[i]);
			if (!module) {
				throw 'module definition dependecy not found: ' + ids[i];
			}

			defs.push(module);
		}

		callback.apply(null, defs);
	}

	function define(id, dependencies, definition) {
		if (typeof id !== 'string') {
			throw 'invalid module definition, module id must be defined and be a string';
		}

		if (dependencies === undefined) {
			throw 'invalid module definition, dependencies must be specified';
		}

		if (definition === undefined) {
			throw 'invalid module definition, definition function must be specified';
		}

		require(dependencies, function() {
			modules[id] = definition.apply(null, arguments);
		});
	}

	function defined(id) {
		return !!modules[id];
	}

	function resolve(id) {
		var target = exports;
		var fragments = id.split(/[.\/]/);

		for (var fi = 0; fi < fragments.length; ++fi) {
			if (!target[fragments[fi]]) {
				return;
			}

			target = target[fragments[fi]];
		}

		return target;
	}

	function expose(ids) {
		for (var i = 0; i < ids.length; i++) {
			var target = exports;
			var id = ids[i];
			var fragments = id.split(/[.\/]/);

			for (var fi = 0; fi < fragments.length - 1; ++fi) {
				if (target[fragments[fi]] === undefined) {
					target[fragments[fi]] = {};
				}

				target = target[fragments[fi]];
			}

			target[fragments[fragments.length - 1]] = modules[id];
		}
	}

// Included from: src/javascript/core/utils/Basic.js

/**
 * Basic.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Basic', [], function() {
	/**
	Gets the true type of the built-in object (better version of typeof).
	@author Angus Croll (http://javascriptweblog.wordpress.com/)

	@method typeOf
	@for Utils
	@static
	@param {Object} o Object to check.
	@return {String} Object [[Class]]
	*/
	var typeOf = function(o) {
		var undef;

		if (o === undef) {
			return 'undefined';
		} else if (o === null) {
			return 'null';
		} else if (o.nodeType) {
			return 'node';
		}

		// the snippet below is awesome, however it fails to detect null, undefined and arguments types in IE lte 8
		return ({}).toString.call(o).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	};
		
	/**
	Extends the specified object with another object.

	@method extend
	@static
	@param {Object} target Object to extend.
	@param {Object} [obj]* Multiple objects to extend with.
	@return {Object} Same as target, the extended object.
	*/
	var extend = function(target) {
		var undef;

		each(arguments, function(arg, i) {
			if (i > 0) {
				each(arg, function(value, key) {
					if (value !== undef) {
						if (typeOf(target[key]) === typeOf(value) && !!~inArray(typeOf(value), ['array', 'object'])) {
							extend(target[key], value);
						} else {
							target[key] = value;
						}
					}
				});
			}
		});
		return target;
	};
		
	/**
	Executes the callback function for each item in array/object. If you return false in the
	callback it will break the loop.

	@method each
	@static
	@param {Object} obj Object to iterate.
	@param {function} callback Callback function to execute for each item.
	*/
	var each = function(obj, callback) {
		var length, key, i, undef;

		if (obj) {
			try {
				length = obj.length;
			} catch(ex) {
				length = undef;
			}

			if (length === undef) {
				// Loop object items
				for (key in obj) {
					if (obj.hasOwnProperty(key)) {
						if (callback(obj[key], key) === false) {
							return;
						}
					}
				}
			} else {
				// Loop array items
				for (i = 0; i < length; i++) {
					if (callback(obj[i], i) === false) {
						return;
					}
				}
			}
		}
	};

	/**
	Checks if object is empty.
	
	@method isEmptyObj
	@static
	@param {Object} o Object to check.
	@return {Boolean}
	*/
	var isEmptyObj = function(obj) {
		var prop;

		if (!obj || typeOf(obj) !== 'object') {
			return true;
		}

		for (prop in obj) {
			return false;
		}

		return true;
	};

	/**
	Recieve an array of functions (usually async) to call in sequence, each  function
	receives a callback as first argument that it should call, when it completes. Finally,
	after everything is complete, main callback is called. Passing truthy value to the
	callback as a first argument will interrupt the sequence and invoke main callback
	immediately.

	@method inSeries
	@static
	@param {Array} queue Array of functions to call in sequence
	@param {Function} cb Main callback that is called in the end, or in case of error
	*/
	var inSeries = function(queue, cb) {
		var i = 0, length = queue.length;

		if (typeOf(cb) !== 'function') {
			cb = function() {};
		}

		if (!queue || !queue.length) {
			cb();
		}

		function callNext(i) {
			if (typeOf(queue[i]) === 'function') {
				queue[i](function(error) {
					/*jshint expr:true */
					++i < length && !error ? callNext(i) : cb(error);
				});
			}
		}
		callNext(i);
	};


	/**
	Recieve an array of functions (usually async) to call in parallel, each  function
	receives a callback as first argument that it should call, when it completes. After 
	everything is complete, main callback is called. Passing truthy value to the
	callback as a first argument will interrupt the process and invoke main callback
	immediately.

	@method inParallel
	@static
	@param {Array} queue Array of functions to call in sequence
	@param {Function} cb Main callback that is called in the end, or in case of erro
	*/
	var inParallel = function(queue, cb) {
		var count = 0, num = queue.length, cbArgs = new Array(num);

		each(queue, function(fn, i) {
			fn(function(error) {
				if (error) {
					return cb(error);
				}
				
				var args = [].slice.call(arguments);
				args.shift(); // strip error - undefined or not

				cbArgs[i] = args;
				count++;

				if (count === num) {
					cbArgs.unshift(null);
					cb.apply(this, cbArgs);
				} 
			});
		});
	};
	
	
	/**
	Find an element in array and return it's index if present, otherwise return -1.
	
	@method inArray
	@static
	@param {Mixed} needle Element to find
	@param {Array} array
	@return {Int} Index of the element, or -1 if not found
	*/
	var inArray = function(needle, array) {
		if (array) {
			if (Array.prototype.indexOf) {
				return Array.prototype.indexOf.call(array, needle);
			}
		
			for (var i = 0, length = array.length; i < length; i++) {
				if (array[i] === needle) {
					return i;
				}
			}
		}
		return -1;
	};


	/**
	Returns elements of first array if they are not present in second. And false - otherwise.

	@private
	@method arrayDiff
	@param {Array} needles
	@param {Array} array
	@return {Array|Boolean}
	*/
	var arrayDiff = function(needles, array) {
		var diff = [];

		if (typeOf(needles) !== 'array') {
			needles = [needles];
		}

		if (typeOf(array) !== 'array') {
			array = [array];
		}

		for (var i in needles) {
			if (inArray(needles[i], array) === -1) {
				diff.push(needles[i]);
			}	
		}
		return diff.length ? diff : false;
	};


	/**
	Find intersection of two arrays.

	@private
	@method arrayIntersect
	@param {Array} array1
	@param {Array} array2
	@return {Array} Intersection of two arrays or null if there is none
	*/
	var arrayIntersect = function(array1, array2) {
		var result = [];
		each(array1, function(item) {
			if (inArray(item, array2) !== -1) {
				result.push(item);
			}
		});
		return result.length ? result : null;
	};
	
	
	/**
	Forces anything into an array.
	
	@method toArray
	@static
	@param {Object} obj Object with length field.
	@return {Array} Array object containing all items.
	*/
	var toArray = function(obj) {
		var i, arr = [];

		for (i = 0; i < obj.length; i++) {
			arr[i] = obj[i];
		}

		return arr;
	};
	
			
	/**
	Generates an unique ID. This is 99.99% unique since it takes the current time and 5 random numbers.
	The only way a user would be able to get the same ID is if the two persons at the same exact milisecond manages
	to get 5 the same random numbers between 0-65535 it also uses a counter so each call will be guaranteed to be page unique.
	It's more probable for the earth to be hit with an ansteriod. Y
	
	@method guid
	@static
	@param {String} prefix to prepend (by default 'o' will be prepended).
	@method guid
	@return {String} Virtually unique id.
	*/
	var guid = (function() {
		var counter = 0;
		
		return function(prefix) {
			var guid = new Date().getTime().toString(32), i;

			for (i = 0; i < 5; i++) {
				guid += Math.floor(Math.random() * 65535).toString(32);
			}
			
			return (prefix || 'o_') + guid + (counter++).toString(32);
		};
	}());
	

	/**
	Trims white spaces around the string
	
	@method trim
	@static
	@param {String} str
	@return {String}
	*/
	var trim = function(str) {
		if (!str) {
			return str;
		}
		return String.prototype.trim ? String.prototype.trim.call(str) : str.toString().replace(/^\s*/, '').replace(/\s*$/, '');
	};


	/**
	Parses the specified size string into a byte value. For example 10kb becomes 10240.
	
	@method parseSizeStr
	@static
	@param {String/Number} size String to parse or number to just pass through.
	@return {Number} Size in bytes.
	*/
	var parseSizeStr = function(size) {
		if (typeof(size) !== 'string') {
			return size;
		}
		
		var muls = {
				t: 1099511627776,
				g: 1073741824,
				m: 1048576,
				k: 1024
			},
			mul;

		size = /^([0-9]+)([mgk]?)$/.exec(size.toLowerCase().replace(/[^0-9mkg]/g, ''));
		mul = size[2];
		size = +size[1];
		
		if (muls.hasOwnProperty(mul)) {
			size *= muls[mul];
		}
		return size;
	};
	

	return {
		guid: guid,
		typeOf: typeOf,
		extend: extend,
		each: each,
		isEmptyObj: isEmptyObj,
		inSeries: inSeries,
		inParallel: inParallel,
		inArray: inArray,
		arrayDiff: arrayDiff,
		arrayIntersect: arrayIntersect,
		toArray: toArray,
		trim: trim,
		parseSizeStr: parseSizeStr
	};
});

// Included from: src/javascript/core/I18n.js

/**
 * I18n.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/core/I18n", [
	"moxie/core/utils/Basic"
], function(Basic) {
	var i18n = {};

	return {
		/**
		 * Extends the language pack object with new items.
		 *
		 * @param {Object} pack Language pack items to add.
		 * @return {Object} Extended language pack object.
		 */
		addI18n: function(pack) {
			return Basic.extend(i18n, pack);
		},

		/**
		 * Translates the specified string by checking for the english string in the language pack lookup.
		 *
		 * @param {String} str String to look for.
		 * @return {String} Translated string or the input string if it wasn't found.
		 */
		translate: function(str) {
			return i18n[str] || str;
		},

		/**
		 * Shortcut for translate function
		 *
		 * @param {String} str String to look for.
		 * @return {String} Translated string or the input string if it wasn't found.
		 */
		_: function(str) {
			return this.translate(str);
		},

		/**
		 * Pseudo sprintf implementation - simple way to replace tokens with specified values.
		 *
		 * @param {String} str String with tokens
		 * @return {String} String with replaced tokens
		 */
		sprintf: function(str) {
			var args = [].slice.call(arguments, 1);

			return str.replace(/%[a-z]/g, function() {
				var value = args.shift();
				return Basic.typeOf(value) !== 'undefined' ? value : '';
			});
		}
	};
});

// Included from: src/javascript/core/utils/Mime.js

/**
 * Mime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/core/utils/Mime", [
	"moxie/core/utils/Basic",
	"moxie/core/I18n"
], function(Basic, I18n) {
	
	var mimeData = "" +
		"application/msword,doc dot," +
		"application/pdf,pdf," +
		"application/pgp-signature,pgp," +
		"application/postscript,ps ai eps," +
		"application/rtf,rtf," +
		"application/vnd.ms-excel,xls xlb," +
		"application/vnd.ms-powerpoint,ppt pps pot," +
		"application/zip,zip," +
		"application/x-shockwave-flash,swf swfl," +
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx," +
		"application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx," +
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx," +
		"application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx," +
		"application/vnd.openxmlformats-officedocument.presentationml.template,potx," +
		"application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx," +
		"application/x-javascript,js," +
		"application/json,json," +
		"audio/mpeg,mp3 mpga mpega mp2," +
		"audio/x-wav,wav," +
		"audio/x-m4a,m4a," +
		"audio/ogg,oga ogg," +
		"audio/aiff,aiff aif," +
		"audio/flac,flac," +
		"audio/aac,aac," +
		"audio/ac3,ac3," +
		"audio/x-ms-wma,wma," +
		"image/bmp,bmp," +
		"image/gif,gif," +
		"image/jpeg,jpg jpeg jpe," +
		"image/photoshop,psd," +
		"image/png,png," +
		"image/svg+xml,svg svgz," +
		"image/tiff,tiff tif," +
		"text/plain,asc txt text diff log," +
		"text/html,htm html xhtml," +
		"text/css,css," +
		"text/csv,csv," +
		"text/rtf,rtf," +
		"video/mpeg,mpeg mpg mpe m2v," +
		"video/quicktime,qt mov," +
		"video/mp4,mp4," +
		"video/x-m4v,m4v," +
		"video/x-flv,flv," +
		"video/x-ms-wmv,wmv," +
		"video/avi,avi," +
		"video/webm,webm," +
		"video/3gpp,3gpp 3gp," +
		"video/3gpp2,3g2," +
		"video/vnd.rn-realvideo,rv," +
		"video/ogg,ogv," + 
		"video/x-matroska,mkv," +
		"application/vnd.oasis.opendocument.formula-template,otf," +
		"application/octet-stream,exe";
	
	
	var Mime = {

		mimes: {},

		extensions: {},

		// Parses the default mime types string into a mimes and extensions lookup maps
		addMimeType: function (mimeData) {
			var items = mimeData.split(/,/), i, ii, ext;
			
			for (i = 0; i < items.length; i += 2) {
				ext = items[i + 1].split(/ /);

				// extension to mime lookup
				for (ii = 0; ii < ext.length; ii++) {
					this.mimes[ext[ii]] = items[i];
				}
				// mime to extension lookup
				this.extensions[items[i]] = ext;
			}
		},


		extList2mimes: function (filters, addMissingExtensions) {
			var self = this, ext, i, ii, type, mimes = [];
			
			// convert extensions to mime types list
			for (i = 0; i < filters.length; i++) {
				ext = filters[i].extensions.split(/\s*,\s*/);

				for (ii = 0; ii < ext.length; ii++) {
					
					// if there's an asterisk in the list, then accept attribute is not required
					if (ext[ii] === '*') {
						return [];
					}
					
					type = self.mimes[ext[ii]];
					if (!type) {
						if (addMissingExtensions && /^\w+$/.test(ext[ii])) {
							mimes.push('.' + ext[ii]);
						} else {
							return []; // accept all
						}
					} else if (Basic.inArray(type, mimes) === -1) {
						mimes.push(type);
					}
				}
			}
			return mimes;
		},


		mimes2exts: function(mimes) {
			var self = this, exts = [];
			
			Basic.each(mimes, function(mime) {
				if (mime === '*') {
					exts = [];
					return false;
				}

				// check if this thing looks like mime type
				var m = mime.match(/^(\w+)\/(\*|\w+)$/);
				if (m) {
					if (m[2] === '*') { 
						// wildcard mime type detected
						Basic.each(self.extensions, function(arr, mime) {
							if ((new RegExp('^' + m[1] + '/')).test(mime)) {
								[].push.apply(exts, self.extensions[mime]);
							}
						});
					} else if (self.extensions[mime]) {
						[].push.apply(exts, self.extensions[mime]);
					}
				}
			});
			return exts;
		},


		mimes2extList: function(mimes) {
			var accept = [], exts = [];

			if (Basic.typeOf(mimes) === 'string') {
				mimes = Basic.trim(mimes).split(/\s*,\s*/);
			}

			exts = this.mimes2exts(mimes);
			
			accept.push({
				title: I18n.translate('Files'),
				extensions: exts.length ? exts.join(',') : '*'
			});
			
			// save original mimes string
			accept.mimes = mimes;

			return accept;
		},


		getFileExtension: function(fileName) {
			var matches = fileName && fileName.match(/\.([^.]+)$/);
			if (matches) {
				return matches[1].toLowerCase();
			}
			return '';
		},

		getFileMime: function(fileName) {
			return this.mimes[this.getFileExtension(fileName)] || '';
		}
	};

	Mime.addMimeType(mimeData);

	return Mime;
});

// Included from: src/javascript/core/utils/Env.js

/**
 * Env.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/core/utils/Env", [
	"moxie/core/utils/Basic"
], function(Basic) {
	
	// UAParser.js v0.6.2
	// Lightweight JavaScript-based User-Agent string parser
	// https://github.com/faisalman/ua-parser-js
	//
	// Copyright © 2012-2013 Faisalman <fyzlman@gmail.com>
	// Dual licensed under GPLv2 & MIT

	var UAParser = (function (undefined) {

	    //////////////
	    // Constants
	    /////////////


	    var EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        MAJOR       = 'major',
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet';


	    ///////////
	    // Helper
	    //////////


	    var util = {
	        has : function (str1, str2) {
	            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        }
	    };


	    ///////////////
	    // Map helper
	    //////////////


	    var mapper = {

	        rgx : function () {

	            // loop through all regexes maps
	            for (var result, i = 0, j, k, p, q, matches, match, args = arguments; i < args.length; i += 2) {

	                var regex = args[i],       // even sequence (0,2,4,..)
	                    props = args[i + 1];   // odd sequence (1,3,5,..)

	                // construct object barebones
	                if (typeof(result) === UNDEF_TYPE) {
	                    result = {};
	                    for (p in props) {
	                        q = props[p];
	                        if (typeof(q) === OBJ_TYPE) {
	                            result[q[0]] = undefined;
	                        } else {
	                            result[q] = undefined;
	                        }
	                    }
	                }

	                // try matching uastring with regexes
	                for (j = k = 0; j < regex.length; j++) {
	                    matches = regex[j].exec(this.getUA());
	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof(q) === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof(q[1]) == FUNC_TYPE) {
	                                        // assign modified match
	                                        result[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        result[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                    } else {
	                                        // sanitize match using given regex
	                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                    }
	                                } else if (q.length == 4) {
	                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                }
	                            } else {
	                                result[q] = match ? match : undefined;
	                            }
	                        }
	                        break;
	                    }
	                }

	                if(!!matches) break; // break the loop immediately if match found
	            }
	            return result;
	        },

	        str : function (str, map) {

	            for (var i in map) {
	                // check if array
	                if (typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined : i;
	                }
	            }
	            return str;
	        }
	    };


	    ///////////////
	    // String map
	    //////////////


	    var maps = {

	        browser : {
	            oldsafari : {
	                major : {
	                    '1' : ['/8', '/1', '/3'],
	                    '2' : '/4',
	                    '?' : '/'
	                },
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            }
	        },

	        device : {
	            sprint : {
	                model : {
	                    'Evo Shift 4G' : '7373KT'
	                },
	                vendor : {
	                    'HTC'       : 'APA',
	                    'Sprint'    : 'Sprint'
	                }
	            }
	        },

	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };


	    //////////////
	    // Regex map
	    /////////////


	    var regexes = {

	        browser : [[

	            // Presto based
	            /(opera\smini)\/((\d+)?[\w\.-]+)/i,                                 // Opera Mini
	            /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,                // Opera Mobi/Tablet
	            /(opera).+version\/((\d+)?[\w\.]+)/i,                               // Opera > 9.80
	            /(opera)[\/\s]+((\d+)?[\w\.]+)/i                                    // Opera < 9.80
	            
	            ], [NAME, VERSION, MAJOR], [

	            /\s(opr)\/((\d+)?[\w\.]+)/i                                         // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION, MAJOR], [

	            // Mixed
	            /(kindle)\/((\d+)?[\w\.]+)/i,                                       // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,
	                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

	            // Trident based
	            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,
	                                                                                // Avant/IEMobile/SlimBrowser/Baidu
	            /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,                                  // Internet Explorer

	            // Webkit/KHTML based
	            /(rekonq)((?:\/)[\w\.]+)*/i,                                        // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i
	                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron
	            ], [NAME, VERSION, MAJOR], [

	            /(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i                   // IE11
	            ], [[NAME, 'IE'], VERSION, MAJOR], [

	            /(yabrowser)\/((\d+)?[\w\.]+)/i                                     // Yandex
	            ], [[NAME, 'Yandex'], VERSION, MAJOR], [

	            /(comodo_dragon)\/((\d+)?[\w\.]+)/i                                 // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION, MAJOR], [

	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i
	                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
	            ], [NAME, VERSION, MAJOR], [

	            /(dolfin)\/((\d+)?[\w\.]+)/i                                        // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION, MAJOR], [

	            /((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i                       // Chrome for Android/iOS
	            ], [[NAME, 'Chrome'], VERSION, MAJOR], [

	            /((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i          // Android Browser
	            ], [[NAME, 'Android Browser'], VERSION, MAJOR], [

	            /version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i                 // Mobile Safari
	            ], [VERSION, MAJOR, [NAME, 'Mobile Safari']], [

	            /version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i              // Safari & Safari Mobile
	            ], [VERSION, MAJOR, NAME], [

	            /webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i                   // Safari < 3.0
	            ], [NAME, [MAJOR, mapper.str, maps.browser.oldsafari.major], [VERSION, mapper.str, maps.browser.oldsafari.version]], [

	            /(konqueror)\/((\d+)?[\w\.]+)/i,                                    // Konqueror
	            /(webkit|khtml)\/((\d+)?[\w\.]+)/i
	            ], [NAME, VERSION, MAJOR], [

	            // Gecko based
	            /(navigator|netscape)\/((\d+)?[\w\.-]+)/i                           // Netscape
	            ], [[NAME, 'Netscape'], VERSION, MAJOR], [
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,                    // Mozilla

	            // Other
	            /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i,
	                                                                                // UCBrowser/Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/QQBrowser
	            /(links)\s\(((\d+)?[\w\.]+)/i,                                      // Links
	            /(gobrowser)\/?((\d+)?[\w\.]+)*/i,                                  // GoBrowser
	            /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,                             // ICE Browser
	            /(mosaic)[\/\s]((\d+)?[\w\.]+)/i                                    // Mosaic
	            ], [NAME, VERSION, MAJOR]
	        ],

	        engine : [[

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows based
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

	            // Mobile/Embedded OS
	            /\((bb)(10);/i                                                      // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [
	            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
	            /(tizen)\/([\w\.]+)/i,                                              // Tizen
	            /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i
	                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo
	            ], [NAME, VERSION], [
	            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
	            ], [[NAME, 'Symbian'], VERSION],[
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [

	            // Console
	            /(nintendo|playstation)\s([wids3portablevu]+)/i,                    // Nintendo/Playstation

	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
	            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk
	            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
	            /(gnu)\s?([\w\.]+)*/i                                               // GNU
	            ], [NAME, VERSION], [

	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Solaris
	            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [

	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [NAME, VERSION],[

	            /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i             // iOS
	            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

	            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i                                    // Mac OS
	            ], [NAME, [VERSION, /_/g, '.']], [

	            // Other
	            /(haiku)\s(\w+)/i,                                                  // Haiku
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
	            /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,
	                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS
	            /(unix)\s?([\w\.]+)*/i                                              // UNIX
	            ], [NAME, VERSION]
	        ]
	    };


	    /////////////////
	    // Constructor
	    ////////////////


	    var UAParser = function (uastring) {

	        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);

	        this.getBrowser = function () {
	            return mapper.rgx.apply(this, regexes.browser);
	        };
	        this.getEngine = function () {
	            return mapper.rgx.apply(this, regexes.engine);
	        };
	        this.getOS = function () {
	            return mapper.rgx.apply(this, regexes.os);
	        };
	        this.getResult = function() {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS()
	            };
	        };
	        this.getUA = function () {
	            return ua;
	        };
	        this.setUA = function (uastring) {
	            ua = uastring;
	            return this;
	        };
	        this.setUA(ua);
	    };

	    return new UAParser().getResult();
	})();


	function version_compare(v1, v2, operator) {
	  // From: http://phpjs.org/functions
	  // +      original by: Philippe Jausions (http://pear.php.net/user/jausions)
	  // +      original by: Aidan Lister (http://aidanlister.com/)
	  // + reimplemented by: Kankrelune (http://www.webfaktory.info/)
	  // +      improved by: Brett Zamir (http://brett-zamir.me)
	  // +      improved by: Scott Baker
	  // +      improved by: Theriault
	  // *        example 1: version_compare('8.2.5rc', '8.2.5a');
	  // *        returns 1: 1
	  // *        example 2: version_compare('8.2.50', '8.2.52', '<');
	  // *        returns 2: true
	  // *        example 3: version_compare('5.3.0-dev', '5.3.0');
	  // *        returns 3: -1
	  // *        example 4: version_compare('4.1.0.52','4.01.0.51');
	  // *        returns 4: 1

	  // Important: compare must be initialized at 0.
	  var i = 0,
	    x = 0,
	    compare = 0,
	    // vm maps textual PHP versions to negatives so they're less than 0.
	    // PHP currently defines these as CASE-SENSITIVE. It is important to
	    // leave these as negatives so that they can come before numerical versions
	    // and as if no letters were there to begin with.
	    // (1alpha is < 1 and < 1.1 but > 1dev1)
	    // If a non-numerical value can't be mapped to this table, it receives
	    // -7 as its value.
	    vm = {
	      'dev': -6,
	      'alpha': -5,
	      'a': -5,
	      'beta': -4,
	      'b': -4,
	      'RC': -3,
	      'rc': -3,
	      '#': -2,
	      'p': 1,
	      'pl': 1
	    },
	    // This function will be called to prepare each version argument.
	    // It replaces every _, -, and + with a dot.
	    // It surrounds any nonsequence of numbers/dots with dots.
	    // It replaces sequences of dots with a single dot.
	    //    version_compare('4..0', '4.0') == 0
	    // Important: A string of 0 length needs to be converted into a value
	    // even less than an unexisting value in vm (-7), hence [-8].
	    // It's also important to not strip spaces because of this.
	    //   version_compare('', ' ') == 1
	    prepVersion = function (v) {
	      v = ('' + v).replace(/[_\-+]/g, '.');
	      v = v.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.');
	      return (!v.length ? [-8] : v.split('.'));
	    },
	    // This converts a version component to a number.
	    // Empty component becomes 0.
	    // Non-numerical component becomes a negative number.
	    // Numerical component becomes itself as an integer.
	    numVersion = function (v) {
	      return !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10));
	    };

	  v1 = prepVersion(v1);
	  v2 = prepVersion(v2);
	  x = Math.max(v1.length, v2.length);
	  for (i = 0; i < x; i++) {
	    if (v1[i] == v2[i]) {
	      continue;
	    }
	    v1[i] = numVersion(v1[i]);
	    v2[i] = numVersion(v2[i]);
	    if (v1[i] < v2[i]) {
	      compare = -1;
	      break;
	    } else if (v1[i] > v2[i]) {
	      compare = 1;
	      break;
	    }
	  }
	  if (!operator) {
	    return compare;
	  }

	  // Important: operator is CASE-SENSITIVE.
	  // "No operator" seems to be treated as "<."
	  // Any other values seem to make the function return null.
	  switch (operator) {
	  case '>':
	  case 'gt':
	    return (compare > 0);
	  case '>=':
	  case 'ge':
	    return (compare >= 0);
	  case '<=':
	  case 'le':
	    return (compare <= 0);
	  case '==':
	  case '=':
	  case 'eq':
	    return (compare === 0);
	  case '<>':
	  case '!=':
	  case 'ne':
	    return (compare !== 0);
	  case '':
	  case '<':
	  case 'lt':
	    return (compare < 0);
	  default:
	    return null;
	  }
	}


	var can = (function() {
		var caps = {
				define_property: (function() {
					/* // currently too much extra code required, not exactly worth it
					try { // as of IE8, getters/setters are supported only on DOM elements
						var obj = {};
						if (Object.defineProperty) {
							Object.defineProperty(obj, 'prop', {
								enumerable: true,
								configurable: true
							});
							return true;
						}
					} catch(ex) {}

					if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) {
						return true;
					}*/
					return false;
				}()),

				create_canvas: (function() {
					// On the S60 and BB Storm, getContext exists, but always returns undefined
					// so we actually have to call getContext() to verify
					// github.com/Modernizr/Modernizr/issues/issue/97/
					var el = document.createElement('canvas');
					return !!(el.getContext && el.getContext('2d'));
				}()),

				return_response_type: function(responseType) {
					try {
						if (Basic.inArray(responseType, ['', 'text', 'document']) !== -1) {
							return true;
						} else if (window.XMLHttpRequest) {
							var xhr = new XMLHttpRequest();
							xhr.open('get', '/'); // otherwise Gecko throws an exception
							if ('responseType' in xhr) {
								xhr.responseType = responseType;
								// as of 23.0.1271.64, Chrome switched from throwing exception to merely logging it to the console (why? o why?)
								if (xhr.responseType !== responseType) {
									return false;
								}
								return true;
							}
						}
					} catch (ex) {}
					return false;
				},

				// ideas for this heavily come from Modernizr (http://modernizr.com/)
				use_data_uri: (function() {
					var du = new Image();

					du.onload = function() {
						caps.use_data_uri = (du.width === 1 && du.height === 1);
					};
					
					setTimeout(function() {
						du.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
					}, 1);
					return false;
				}()),

				use_data_uri_over32kb: function() { // IE8
					return caps.use_data_uri && (Env.browser !== 'IE' || Env.version >= 9);
				},

				use_data_uri_of: function(bytes) {
					return (caps.use_data_uri && bytes < 33000 || caps.use_data_uri_over32kb());
				},

				use_fileinput: function() {
					var el = document.createElement('input');
					el.setAttribute('type', 'file');
					return !el.disabled;
				}
			};

		return function(cap) {
			var args = [].slice.call(arguments);
			args.shift(); // shift of cap
			return Basic.typeOf(caps[cap]) === 'function' ? caps[cap].apply(this, args) : !!caps[cap];
		};
	}());


	var Env = {
		can: can,
		
		browser: UAParser.browser.name,
		version: parseFloat(UAParser.browser.major),
		os: UAParser.os.name, // everybody intuitively types it in a lowercase for some reason
		osVersion: UAParser.os.version,

		verComp: version_compare,
		
		swf_url: "../flash/Moxie.swf",
		xap_url: "../silverlight/Moxie.xap",
		global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
	};

	// for backward compatibility
	// @deprecated Use `Env.os` instead
	Env.OS = Env.os;

	return Env;
});

// Included from: src/javascript/core/utils/Dom.js

/**
 * Dom.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Dom', ['moxie/core/utils/Env'], function(Env) {

	/**
	Get DOM Element by it's id.

	@method get
	@for Utils
	@param {String} id Identifier of the DOM Element
	@return {DOMElement}
	*/
	var get = function(id) {
		if (typeof id !== 'string') {
			return id;
		}
		return document.getElementById(id);
	};

	/**
	Checks if specified DOM element has specified class.

	@method hasClass
	@static
	@param {Object} obj DOM element like object to add handler to.
	@param {String} name Class name
	*/
	var hasClass = function(obj, name) {
		if (!obj.className) {
			return false;
		}

		var regExp = new RegExp("(^|\\s+)"+name+"(\\s+|$)");
		return regExp.test(obj.className);
	};

	/**
	Adds specified className to specified DOM element.

	@method addClass
	@static
	@param {Object} obj DOM element like object to add handler to.
	@param {String} name Class name
	*/
	var addClass = function(obj, name) {
		if (!hasClass(obj, name)) {
			obj.className = !obj.className ? name : obj.className.replace(/\s+$/, '') + ' ' + name;
		}
	};

	/**
	Removes specified className from specified DOM element.

	@method removeClass
	@static
	@param {Object} obj DOM element like object to add handler to.
	@param {String} name Class name
	*/
	var removeClass = function(obj, name) {
		if (obj.className) {
			var regExp = new RegExp("(^|\\s+)"+name+"(\\s+|$)");
			obj.className = obj.className.replace(regExp, function($0, $1, $2) {
				return $1 === ' ' && $2 === ' ' ? ' ' : '';
			});
		}
	};

	/**
	Returns a given computed style of a DOM element.

	@method getStyle
	@static
	@param {Object} obj DOM element like object.
	@param {String} name Style you want to get from the DOM element
	*/
	var getStyle = function(obj, name) {
		if (obj.currentStyle) {
			return obj.currentStyle[name];
		} else if (window.getComputedStyle) {
			return window.getComputedStyle(obj, null)[name];
		}
	};


	/**
	Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.

	@method getPos
	@static
	@param {Element} node HTML element or element id to get x, y position from.
	@param {Element} root Optional root element to stop calculations at.
	@return {object} Absolute position of the specified element object with x, y fields.
	*/
	var getPos = function(node, root) {
		var x = 0, y = 0, parent, doc = document, nodeRect, rootRect;

		node = node;
		root = root || doc.body;

		// Returns the x, y cordinate for an element on IE 6 and IE 7
		function getIEPos(node) {
			var bodyElm, rect, x = 0, y = 0;

			if (node) {
				rect = node.getBoundingClientRect();
				bodyElm = doc.compatMode === "CSS1Compat" ? doc.documentElement : doc.body;
				x = rect.left + bodyElm.scrollLeft;
				y = rect.top + bodyElm.scrollTop;
			}

			return {
				x : x,
				y : y
			};
		}

		// Use getBoundingClientRect on IE 6 and IE 7 but not on IE 8 in standards mode
		if (node && node.getBoundingClientRect && Env.browser === 'IE' && (!doc.documentMode || doc.documentMode < 8)) {
			nodeRect = getIEPos(node);
			rootRect = getIEPos(root);

			return {
				x : nodeRect.x - rootRect.x,
				y : nodeRect.y - rootRect.y
			};
		}

		parent = node;
		while (parent && parent != root && parent.nodeType) {
			x += parent.offsetLeft || 0;
			y += parent.offsetTop || 0;
			parent = parent.offsetParent;
		}

		parent = node.parentNode;
		while (parent && parent != root && parent.nodeType) {
			x -= parent.scrollLeft || 0;
			y -= parent.scrollTop || 0;
			parent = parent.parentNode;
		}

		return {
			x : x,
			y : y
		};
	};

	/**
	Returns the size of the specified node in pixels.

	@method getSize
	@static
	@param {Node} node Node to get the size of.
	@return {Object} Object with a w and h property.
	*/
	var getSize = function(node) {
		return {
			w : node.offsetWidth || node.clientWidth,
			h : node.offsetHeight || node.clientHeight
		};
	};

	return {
		get: get,
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		getStyle: getStyle,
		getPos: getPos,
		getSize: getSize
	};
});

// Included from: src/javascript/core/Exceptions.js

/**
 * Exceptions.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/Exceptions', [
	'moxie/core/utils/Basic'
], function(Basic) {
	function _findKey(obj, value) {
		var key;
		for (key in obj) {
			if (obj[key] === value) {
				return key;
			}
		}
		return null;
	}

	return {
		RuntimeError: (function() {
			var namecodes = {
				NOT_INIT_ERR: 1,
				NOT_SUPPORTED_ERR: 9,
				JS_ERR: 4
			};

			function RuntimeError(code) {
				this.code = code;
				this.name = _findKey(namecodes, code);
				this.message = this.name + ": RuntimeError " + this.code;
			}
			
			Basic.extend(RuntimeError, namecodes);
			RuntimeError.prototype = Error.prototype;
			return RuntimeError;
		}()),
		
		OperationNotAllowedException: (function() {
			
			function OperationNotAllowedException(code) {
				this.code = code;
				this.name = 'OperationNotAllowedException';
			}
			
			Basic.extend(OperationNotAllowedException, {
				NOT_ALLOWED_ERR: 1
			});
			
			OperationNotAllowedException.prototype = Error.prototype;
			
			return OperationNotAllowedException;
		}()),

		ImageError: (function() {
			var namecodes = {
				WRONG_FORMAT: 1,
				MAX_RESOLUTION_ERR: 2
			};

			function ImageError(code) {
				this.code = code;
				this.name = _findKey(namecodes, code);
				this.message = this.name + ": ImageError " + this.code;
			}
			
			Basic.extend(ImageError, namecodes);
			ImageError.prototype = Error.prototype;

			return ImageError;
		}()),

		FileException: (function() {
			var namecodes = {
				NOT_FOUND_ERR: 1,
				SECURITY_ERR: 2,
				ABORT_ERR: 3,
				NOT_READABLE_ERR: 4,
				ENCODING_ERR: 5,
				NO_MODIFICATION_ALLOWED_ERR: 6,
				INVALID_STATE_ERR: 7,
				SYNTAX_ERR: 8
			};

			function FileException(code) {
				this.code = code;
				this.name = _findKey(namecodes, code);
				this.message = this.name + ": FileException " + this.code;
			}
			
			Basic.extend(FileException, namecodes);
			FileException.prototype = Error.prototype;
			return FileException;
		}()),
		
		DOMException: (function() {
			var namecodes = {
				INDEX_SIZE_ERR: 1,
				DOMSTRING_SIZE_ERR: 2,
				HIERARCHY_REQUEST_ERR: 3,
				WRONG_DOCUMENT_ERR: 4,
				INVALID_CHARACTER_ERR: 5,
				NO_DATA_ALLOWED_ERR: 6,
				NO_MODIFICATION_ALLOWED_ERR: 7,
				NOT_FOUND_ERR: 8,
				NOT_SUPPORTED_ERR: 9,
				INUSE_ATTRIBUTE_ERR: 10,
				INVALID_STATE_ERR: 11,
				SYNTAX_ERR: 12,
				INVALID_MODIFICATION_ERR: 13,
				NAMESPACE_ERR: 14,
				INVALID_ACCESS_ERR: 15,
				VALIDATION_ERR: 16,
				TYPE_MISMATCH_ERR: 17,
				SECURITY_ERR: 18,
				NETWORK_ERR: 19,
				ABORT_ERR: 20,
				URL_MISMATCH_ERR: 21,
				QUOTA_EXCEEDED_ERR: 22,
				TIMEOUT_ERR: 23,
				INVALID_NODE_TYPE_ERR: 24,
				DATA_CLONE_ERR: 25
			};

			function DOMException(code) {
				this.code = code;
				this.name = _findKey(namecodes, code);
				this.message = this.name + ": DOMException " + this.code;
			}
			
			Basic.extend(DOMException, namecodes);
			DOMException.prototype = Error.prototype;
			return DOMException;
		}()),
		
		EventException: (function() {
			function EventException(code) {
				this.code = code;
				this.name = 'EventException';
			}
			
			Basic.extend(EventException, {
				UNSPECIFIED_EVENT_TYPE_ERR: 0
			});
			
			EventException.prototype = Error.prototype;
			
			return EventException;
		}())
	};
});

// Included from: src/javascript/core/EventTarget.js

/**
 * EventTarget.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/EventTarget', [
	'moxie/core/Exceptions',
	'moxie/core/utils/Basic'
], function(x, Basic) {
	/**
	Parent object for all event dispatching components and objects

	@class EventTarget
	@constructor EventTarget
	*/
	function EventTarget() {
		// hash of event listeners by object uid
		var eventpool = {};
				
		Basic.extend(this, {
			
			/**
			Unique id of the event dispatcher, usually overriden by children

			@property uid
			@type String
			*/
			uid: null,
			
			/**
			Can be called from within a child  in order to acquire uniqie id in automated manner

			@method init
			*/
			init: function() {
				if (!this.uid) {
					this.uid = Basic.guid('uid_');
				}
			},

			/**
			Register a handler to a specific event dispatched by the object

			@method addEventListener
			@param {String} type Type or basically a name of the event to subscribe to
			@param {Function} fn Callback function that will be called when event happens
			@param {Number} [priority=0] Priority of the event handler - handlers with higher priorities will be called first
			@param {Object} [scope=this] A scope to invoke event handler in
			*/
			addEventListener: function(type, fn, priority, scope) {
				var self = this, list;
				
				type = Basic.trim(type);
				
				if (/\s/.test(type)) {
					// multiple event types were passed for one handler
					Basic.each(type.split(/\s+/), function(type) {
						self.addEventListener(type, fn, priority, scope);
					});
					return;
				}
				
				type = type.toLowerCase();
				priority = parseInt(priority, 10) || 0;
				
				list = eventpool[this.uid] && eventpool[this.uid][type] || [];
				list.push({fn : fn, priority : priority, scope : scope || this});
				
				if (!eventpool[this.uid]) {
					eventpool[this.uid] = {};
				}
				eventpool[this.uid][type] = list;
			},
			
			/**
			Check if any handlers were registered to the specified event

			@method hasEventListener
			@param {String} type Type or basically a name of the event to check
			@return {Mixed} Returns a handler if it was found and false, if - not
			*/
			hasEventListener: function(type) {
				return type ? !!(eventpool[this.uid] && eventpool[this.uid][type]) : !!eventpool[this.uid];
			},
			
			/**
			Unregister the handler from the event, or if former was not specified - unregister all handlers

			@method removeEventListener
			@param {String} type Type or basically a name of the event
			@param {Function} [fn] Handler to unregister
			*/
			removeEventListener: function(type, fn) {
				type = type.toLowerCase();
	
				var list = eventpool[this.uid] && eventpool[this.uid][type], i;
	
				if (list) {
					if (fn) {
						for (i = list.length - 1; i >= 0; i--) {
							if (list[i].fn === fn) {
								list.splice(i, 1);
								break;
							}
						}
					} else {
						list = [];
					}
	
					// delete event list if it has become empty
					if (!list.length) {
						delete eventpool[this.uid][type];
						
						// and object specific entry in a hash if it has no more listeners attached
						if (Basic.isEmptyObj(eventpool[this.uid])) {
							delete eventpool[this.uid];
						}
					}
				}
			},
			
			/**
			Remove all event handlers from the object

			@method removeAllEventListeners
			*/
			removeAllEventListeners: function() {
				if (eventpool[this.uid]) {
					delete eventpool[this.uid];
				}
			},
			
			/**
			Dispatch the event

			@method dispatchEvent
			@param {String/Object} Type of event or event object to dispatch
			@param {Mixed} [...] Variable number of arguments to be passed to a handlers
			@return {Boolean} true by default and false if any handler returned false
			*/
			dispatchEvent: function(type) {
				var uid, list, args, tmpEvt, evt = {}, result = true, undef;
				
				if (Basic.typeOf(type) !== 'string') {
					// we can't use original object directly (because of Silverlight)
					tmpEvt = type;

					if (Basic.typeOf(tmpEvt.type) === 'string') {
						type = tmpEvt.type;

						if (tmpEvt.total !== undef && tmpEvt.loaded !== undef) { // progress event
							evt.total = tmpEvt.total;
							evt.loaded = tmpEvt.loaded;
						}
						evt.async = tmpEvt.async || false;
					} else {
						throw new x.EventException(x.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
					}
				}
				
				// check if event is meant to be dispatched on an object having specific uid
				if (type.indexOf('::') !== -1) {
					(function(arr) {
						uid = arr[0];
						type = arr[1];
					}(type.split('::')));
				} else {
					uid = this.uid;
				}
				
				type = type.toLowerCase();
								
				list = eventpool[uid] && eventpool[uid][type];

				if (list) {
					// sort event list by prority
					list.sort(function(a, b) { return b.priority - a.priority; });
					
					args = [].slice.call(arguments);
					
					// first argument will be pseudo-event object
					args.shift();
					evt.type = type;
					args.unshift(evt);

					// Dispatch event to all listeners
					var queue = [];
					Basic.each(list, function(handler) {
						// explicitly set the target, otherwise events fired from shims do not get it
						args[0].target = handler.scope;
						// if event is marked as async, detach the handler
						if (evt.async) {
							queue.push(function(cb) {
								setTimeout(function() {
									cb(handler.fn.apply(handler.scope, args) === false);
								}, 1);
							});
						} else {
							queue.push(function(cb) {
								cb(handler.fn.apply(handler.scope, args) === false); // if handler returns false stop propagation
							});
						}
					});
					if (queue.length) {
						Basic.inSeries(queue, function(err) {
							result = !err;
						});
					}
				}
				return result;
			},
			
			/**
			Alias for addEventListener

			@method bind
			@protected
			*/
			bind: function() {
				this.addEventListener.apply(this, arguments);
			},
			
			/**
			Alias for removeEventListener

			@method unbind
			@protected
			*/
			unbind: function() {
				this.removeEventListener.apply(this, arguments);
			},
			
			/**
			Alias for removeAllEventListeners

			@method unbindAll
			@protected
			*/
			unbindAll: function() {
				this.removeAllEventListeners.apply(this, arguments);
			},
			
			/**
			Alias for dispatchEvent

			@method trigger
			@protected
			*/
			trigger: function() {
				return this.dispatchEvent.apply(this, arguments);
			},
			
			
			/**
			Converts properties of on[event] type to corresponding event handlers,
			is used to avoid extra hassle around the process of calling them back

			@method convertEventPropsToHandlers
			@private
			*/
			convertEventPropsToHandlers: function(handlers) {
				var h;
						
				if (Basic.typeOf(handlers) !== 'array') {
					handlers = [handlers];
				}

				for (var i = 0; i < handlers.length; i++) {
					h = 'on' + handlers[i];
					
					if (Basic.typeOf(this[h]) === 'function') {
						this.addEventListener(handlers[i], this[h]);
					} else if (Basic.typeOf(this[h]) === 'undefined') {
						this[h] = null; // object must have defined event properties, even if it doesn't make use of them
					}
				}
			}
			
		});
	}

	EventTarget.instance = new EventTarget(); 

	return EventTarget;
});

// Included from: src/javascript/core/utils/Encode.js

/**
 * Encode.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Encode', [], function() {

	/**
	Encode string with UTF-8

	@method utf8_encode
	@for Utils
	@static
	@param {String} str String to encode
	@return {String} UTF-8 encoded string
	*/
	var utf8_encode = function(str) {
		return unescape(encodeURIComponent(str));
	};
	
	/**
	Decode UTF-8 encoded string

	@method utf8_decode
	@static
	@param {String} str String to decode
	@return {String} Decoded string
	*/
	var utf8_decode = function(str_data) {
		return decodeURIComponent(escape(str_data));
	};
	
	/**
	Decode Base64 encoded string (uses browser's default method if available),
	from: https://raw.github.com/kvz/phpjs/master/functions/url/base64_decode.js

	@method atob
	@static
	@param {String} data String to decode
	@return {String} Decoded string
	*/
	var atob = function(data, utf8) {
		if (typeof(window.atob) === 'function') {
			return utf8 ? utf8_decode(window.atob(data)) : window.atob(data);
		}

		// http://kevin.vanzonneveld.net
		// +   original by: Tyler Akins (http://rumkin.com)
		// +   improved by: Thunder.m
		// +      input by: Aman Gupta
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   bugfixed by: Onno Marsman
		// +   bugfixed by: Pellentesque Malesuada
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +      input by: Brett Zamir (http://brett-zamir.me)
		// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
		// *     returns 1: 'Kevin van Zonneveld'
		// mozilla has this native
		// - but breaks in 2.0.0.12!
		//if (typeof this.window.atob == 'function') {
		//    return atob(data);
		//}
		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
			ac = 0,
			dec = "",
			tmp_arr = [];

		if (!data) {
			return data;
		}

		data += '';

		do { // unpack four hexets into three octets using index points in b64
			h1 = b64.indexOf(data.charAt(i++));
			h2 = b64.indexOf(data.charAt(i++));
			h3 = b64.indexOf(data.charAt(i++));
			h4 = b64.indexOf(data.charAt(i++));

			bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

			o1 = bits >> 16 & 0xff;
			o2 = bits >> 8 & 0xff;
			o3 = bits & 0xff;

			if (h3 == 64) {
				tmp_arr[ac++] = String.fromCharCode(o1);
			} else if (h4 == 64) {
				tmp_arr[ac++] = String.fromCharCode(o1, o2);
			} else {
				tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
			}
		} while (i < data.length);

		dec = tmp_arr.join('');

		return utf8 ? utf8_decode(dec) : dec;
	};
	
	/**
	Base64 encode string (uses browser's default method if available),
	from: https://raw.github.com/kvz/phpjs/master/functions/url/base64_encode.js

	@method btoa
	@static
	@param {String} data String to encode
	@return {String} Base64 encoded string
	*/
	var btoa = function(data, utf8) {
		if (utf8) {
			utf8_encode(data);
		}

		if (typeof(window.btoa) === 'function') {
			return window.btoa(data);
		}

		// http://kevin.vanzonneveld.net
		// +   original by: Tyler Akins (http://rumkin.com)
		// +   improved by: Bayron Guevara
		// +   improved by: Thunder.m
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   bugfixed by: Pellentesque Malesuada
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   improved by: Rafał Kukawski (http://kukawski.pl)
		// *     example 1: base64_encode('Kevin van Zonneveld');
		// *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
		// mozilla has this native
		// - but breaks in 2.0.0.12!
		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
			ac = 0,
			enc = "",
			tmp_arr = [];

		if (!data) {
			return data;
		}

		do { // pack three octets into four hexets
			o1 = data.charCodeAt(i++);
			o2 = data.charCodeAt(i++);
			o3 = data.charCodeAt(i++);

			bits = o1 << 16 | o2 << 8 | o3;

			h1 = bits >> 18 & 0x3f;
			h2 = bits >> 12 & 0x3f;
			h3 = bits >> 6 & 0x3f;
			h4 = bits & 0x3f;

			// use hexets to index into b64, and append result to encoded string
			tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
		} while (i < data.length);

		enc = tmp_arr.join('');

		var r = data.length % 3;

		return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
	};


	return {
		utf8_encode: utf8_encode,
		utf8_decode: utf8_decode,
		atob: atob,
		btoa: btoa
	};
});

// Included from: src/javascript/runtime/Runtime.js

/**
 * Runtime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/runtime/Runtime', [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/EventTarget"
], function(Basic, Dom, EventTarget) {
	var runtimeConstructors = {}, runtimes = {};

	/**
	Common set of methods and properties for every runtime instance

	@class Runtime

	@param {Object} options
	@param {String} type Sanitized name of the runtime
	@param {Object} [caps] Set of capabilities that differentiate specified runtime
	@param {Object} [modeCaps] Set of capabilities that do require specific operational mode
	@param {String} [preferredMode='browser'] Preferred operational mode to choose if no required capabilities were requested
	*/
	function Runtime(options, type, caps, modeCaps, preferredMode) {
		/**
		Dispatched when runtime is initialized and ready.
		Results in RuntimeInit on a connected component.

		@event Init
		*/

		/**
		Dispatched when runtime fails to initialize.
		Results in RuntimeError on a connected component.

		@event Error
		*/

		var self = this
		, _shim
		, _uid = Basic.guid(type + '_')
		, defaultMode = preferredMode || 'browser'
		;

		options = options || {};

		// register runtime in private hash
		runtimes[_uid] = this;

		/**
		Default set of capabilities, which can be redifined later by specific runtime

		@private
		@property caps
		@type Object
		*/
		caps = Basic.extend({
			// Runtime can: 
			// provide access to raw binary data of the file
			access_binary: false,
			// provide access to raw binary data of the image (image extension is optional) 
			access_image_binary: false,
			// display binary data as thumbs for example
			display_media: false,
			// make cross-domain requests
			do_cors: false,
			// accept files dragged and dropped from the desktop
			drag_and_drop: false,
			// filter files in selection dialog by their extensions
			filter_by_extension: true,
			// resize image (and manipulate it raw data of any file in general)
			resize_image: false,
			// periodically report how many bytes of total in the file were uploaded (loaded)
			report_upload_progress: false,
			// provide access to the headers of http response 
			return_response_headers: false,
			// support response of specific type, which should be passed as an argument
			// e.g. runtime.can('return_response_type', 'blob')
			return_response_type: false,
			// return http status code of the response
			return_status_code: true,
			// send custom http header with the request
			send_custom_headers: false,
			// pick up the files from a dialog
			select_file: false,
			// select whole folder in file browse dialog
			select_folder: false,
			// select multiple files at once in file browse dialog
			select_multiple: true,
			// send raw binary data, that is generated after image resizing or manipulation of other kind
			send_binary_string: false,
			// send cookies with http request and therefore retain session
			send_browser_cookies: true,
			// send data formatted as multipart/form-data
			send_multipart: true,
			// slice the file or blob to smaller parts
			slice_blob: false,
			// upload file without preloading it to memory, stream it out directly from disk
			stream_upload: false,
			// programmatically trigger file browse dialog
			summon_file_dialog: false,
			// upload file of specific size, size should be passed as argument
			// e.g. runtime.can('upload_filesize', '500mb')
			upload_filesize: true,
			// initiate http request with specific http method, method should be passed as argument
			// e.g. runtime.can('use_http_method', 'put')
			use_http_method: true
		}, caps);
			
	
		// default to the mode that is compatible with preferred caps
		if (options.preferred_caps) {
			defaultMode = Runtime.getMode(modeCaps, options.preferred_caps, defaultMode);
		}
		
		// small extension factory here (is meant to be extended with actual extensions constructors)
		_shim = (function() {
			var objpool = {};
			return {
				exec: function(uid, comp, fn, args) {
					if (_shim[comp]) {
						if (!objpool[uid]) {
							objpool[uid] = {
								context: this,
								instance: new _shim[comp]()
							};
						}
						if (objpool[uid].instance[fn]) {
							return objpool[uid].instance[fn].apply(this, args);
						}
					}
				},

				removeInstance: function(uid) {
					delete objpool[uid];
				},

				removeAllInstances: function() {
					var self = this;
					Basic.each(objpool, function(obj, uid) {
						if (Basic.typeOf(obj.instance.destroy) === 'function') {
							obj.instance.destroy.call(obj.context);
						}
						self.removeInstance(uid);
					});
				}
			};
		}());


		// public methods
		Basic.extend(this, {
			/**
			Specifies whether runtime instance was initialized or not

			@property initialized
			@type {Boolean}
			@default false
			*/
			initialized: false, // shims require this flag to stop initialization retries

			/**
			Unique ID of the runtime

			@property uid
			@type {String}
			*/
			uid: _uid,

			/**
			Runtime type (e.g. flash, html5, etc)

			@property type
			@type {String}
			*/
			type: type,

			/**
			Runtime (not native one) may operate in browser or client mode.

			@property mode
			@private
			@type {String|Boolean} current mode or false, if none possible
			*/
			mode: Runtime.getMode(modeCaps, (options.required_caps), defaultMode),

			/**
			id of the DOM container for the runtime (if available)

			@property shimid
			@type {String}
			*/
			shimid: _uid + '_container',

			/**
			Number of connected clients. If equal to zero, runtime can be destroyed

			@property clients
			@type {Number}
			*/
			clients: 0,

			/**
			Runtime initialization options

			@property options
			@type {Object}
			*/
			options: options,

			/**
			Checks if the runtime has specific capability

			@method can
			@param {String} cap Name of capability to check
			@param {Mixed} [value] If passed, capability should somehow correlate to the value
			@param {Object} [refCaps] Set of capabilities to check the specified cap against (defaults to internal set)
			@return {Boolean} true if runtime has such capability and false, if - not
			*/
			can: function(cap, value) {
				var refCaps = arguments[2] || caps;

				// if cap var is a comma-separated list of caps, convert it to object (key/value)
				if (Basic.typeOf(cap) === 'string' && Basic.typeOf(value) === 'undefined') {
					cap = Runtime.parseCaps(cap);
				}

				if (Basic.typeOf(cap) === 'object') {
					for (var key in cap) {
						if (!this.can(key, cap[key], refCaps)) {
							return false;
						}
					}
					return true;
				}

				// check the individual cap
				if (Basic.typeOf(refCaps[cap]) === 'function') {
					return refCaps[cap].call(this, value);
				} else {
					return (value === refCaps[cap]);
				}
			},

			/**
			Returns container for the runtime as DOM element

			@method getShimContainer
			@return {DOMElement}
			*/
			getShimContainer: function() {
				var container, shimContainer = Dom.get(this.shimid);

				// if no container for shim, create one
				if (!shimContainer) {
					container = this.options.container ? Dom.get(this.options.container) : document.body;

					// create shim container and insert it at an absolute position into the outer container
					shimContainer = document.createElement('div');
					shimContainer.id = this.shimid;
					shimContainer.className = 'moxie-shim moxie-shim-' + this.type;

					Basic.extend(shimContainer.style, {
						position: 'absolute',
						top: '0px',
						left: '0px',
						width: '1px',
						height: '1px',
						overflow: 'hidden'
					});

					container.appendChild(shimContainer);
					container = null;
				}

				return shimContainer;
			},

			/**
			Returns runtime as DOM element (if appropriate)

			@method getShim
			@return {DOMElement}
			*/
			getShim: function() {
				return _shim;
			},

			/**
			Invokes a method within the runtime itself (might differ across the runtimes)

			@method shimExec
			@param {Mixed} []
			@protected
			@return {Mixed} Depends on the action and component
			*/
			shimExec: function(component, action) {
				var args = [].slice.call(arguments, 2);
				return self.getShim().exec.call(this, this.uid, component, action, args);
			},

			/**
			Operaional interface that is used by components to invoke specific actions on the runtime
			(is invoked in the scope of component)

			@method exec
			@param {Mixed} []*
			@protected
			@return {Mixed} Depends on the action and component
			*/
			exec: function(component, action) { // this is called in the context of component, not runtime
				var args = [].slice.call(arguments, 2);

				if (self[component] && self[component][action]) {
					return self[component][action].apply(this, args);
				}
				return self.shimExec.apply(this, arguments);
			},

			/**
			Destroys the runtime (removes all events and deletes DOM structures)

			@method destroy
			*/
			destroy: function() {
				if (!self) {
					return; // obviously already destroyed
				}

				var shimContainer = Dom.get(this.shimid);
				if (shimContainer) {
					shimContainer.parentNode.removeChild(shimContainer);
				}

				if (_shim) {
					_shim.removeAllInstances();
				}

				this.unbindAll();
				delete runtimes[this.uid];
				this.uid = null; // mark this runtime as destroyed
				_uid = self = _shim = shimContainer = null;
			}
		});

		// once we got the mode, test against all caps
		if (this.mode && options.required_caps && !this.can(options.required_caps)) {
			this.mode = false;
		}	
	}


	/**
	Default order to try different runtime types

	@property order
	@type String
	@static
	*/
	Runtime.order = 'html5,flash,silverlight,html4';


	/**
	Retrieves runtime from private hash by it's uid

	@method getRuntime
	@private
	@static
	@param {String} uid Unique identifier of the runtime
	@return {Runtime|Boolean} Returns runtime, if it exists and false, if - not
	*/
	Runtime.getRuntime = function(uid) {
		return runtimes[uid] ? runtimes[uid] : false;
	};


	/**
	Register constructor for the Runtime of new (or perhaps modified) type

	@method addConstructor
	@static
	@param {String} type Runtime type (e.g. flash, html5, etc)
	@param {Function} construct Constructor for the Runtime type
	*/
	Runtime.addConstructor = function(type, constructor) {
		constructor.prototype = EventTarget.instance;
		runtimeConstructors[type] = constructor;
	};


	/**
	Get the constructor for the specified type.

	method getConstructor
	@static
	@param {String} type Runtime type (e.g. flash, html5, etc)
	@return {Function} Constructor for the Runtime type
	*/
	Runtime.getConstructor = function(type) {
		return runtimeConstructors[type] || null;
	};


	/**
	Get info about the runtime (uid, type, capabilities)

	@method getInfo
	@static
	@param {String} uid Unique identifier of the runtime
	@return {Mixed} Info object or null if runtime doesn't exist
	*/
	Runtime.getInfo = function(uid) {
		var runtime = Runtime.getRuntime(uid);

		if (runtime) {
			return {
				uid: runtime.uid,
				type: runtime.type,
				mode: runtime.mode,
				can: function() {
					return runtime.can.apply(runtime, arguments);
				}
			};
		}
		return null;
	};


	/**
	Convert caps represented by a comma-separated string to the object representation.

	@method parseCaps
	@static
	@param {String} capStr Comma-separated list of capabilities
	@return {Object}
	*/
	Runtime.parseCaps = function(capStr) {
		var capObj = {};

		if (Basic.typeOf(capStr) !== 'string') {
			return capStr || {};
		}

		Basic.each(capStr.split(','), function(key) {
			capObj[key] = true; // we assume it to be - true
		});

		return capObj;
	};

	/**
	Test the specified runtime for specific capabilities.

	@method can
	@static
	@param {String} type Runtime type (e.g. flash, html5, etc)
	@param {String|Object} caps Set of capabilities to check
	@return {Boolean} Result of the test
	*/
	Runtime.can = function(type, caps) {
		var runtime
		, constructor = Runtime.getConstructor(type)
		, mode
		;
		if (constructor) {
			runtime = new constructor({
				required_caps: caps
			});
			mode = runtime.mode;
			runtime.destroy();
			return !!mode;
		}
		return false;
	};


	/**
	Figure out a runtime that supports specified capabilities.

	@method thatCan
	@static
	@param {String|Object} caps Set of capabilities to check
	@param {String} [runtimeOrder] Comma-separated list of runtimes to check against
	@return {String} Usable runtime identifier or null
	*/
	Runtime.thatCan = function(caps, runtimeOrder) {
		var types = (runtimeOrder || Runtime.order).split(/\s*,\s*/);
		for (var i in types) {
			if (Runtime.can(types[i], caps)) {
				return types[i];
			}
		}
		return null;
	};


	/**
	Figure out an operational mode for the specified set of capabilities.

	@method getMode
	@static
	@param {Object} modeCaps Set of capabilities that depend on particular runtime mode
	@param {Object} [requiredCaps] Supplied set of capabilities to find operational mode for
	@param {String|Boolean} [defaultMode='browser'] Default mode to use 
	@return {String|Boolean} Compatible operational mode
	*/
	Runtime.getMode = function(modeCaps, requiredCaps, defaultMode) {
		var mode = null;

		if (Basic.typeOf(defaultMode) === 'undefined') { // only if not specified
			defaultMode = 'browser';
		}

		if (requiredCaps && !Basic.isEmptyObj(modeCaps)) {
			// loop over required caps and check if they do require the same mode
			Basic.each(requiredCaps, function(value, cap) {
				if (modeCaps.hasOwnProperty(cap)) {
					var capMode = modeCaps[cap](value);

					// make sure we always have an array
					if (typeof(capMode) === 'string') {
						capMode = [capMode];
					}
					
					if (!mode) {
						mode = capMode;
					} else if (!(mode = Basic.arrayIntersect(mode, capMode))) {
						// if cap requires conflicting mode - runtime cannot fulfill required caps
						return (mode = false);
					}
				}
			});

			if (mode) {
				return Basic.inArray(defaultMode, mode) !== -1 ? defaultMode : mode[0];
			} else if (mode === false) {
				return false;
			}
		}
		return defaultMode; 
	};


	/**
	Capability check that always returns true

	@private
	@static
	@return {True}
	*/
	Runtime.capTrue = function() {
		return true;
	};

	/**
	Capability check that always returns false

	@private
	@static
	@return {False}
	*/
	Runtime.capFalse = function() {
		return false;
	};

	/**
	Evaluate the expression to boolean value and create a function that always returns it.

	@private
	@static
	@param {Mixed} expr Expression to evaluate
	@return {Function} Function returning the result of evaluation
	*/
	Runtime.capTest = function(expr) {
		return function() {
			return !!expr;
		};
	};

	return Runtime;
});

// Included from: src/javascript/runtime/RuntimeClient.js

/**
 * RuntimeClient.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/runtime/RuntimeClient', [
	'moxie/core/Exceptions',
	'moxie/core/utils/Basic',
	'moxie/runtime/Runtime'
], function(x, Basic, Runtime) {
	/**
	Set of methods and properties, required by a component to acquire ability to connect to a runtime

	@class RuntimeClient
	*/
	return function RuntimeClient() {
		var runtime;

		Basic.extend(this, {
			/**
			Connects to the runtime specified by the options. Will either connect to existing runtime or create a new one.
			Increments number of clients connected to the specified runtime.

			@method connectRuntime
			@param {Mixed} options Can be a runtme uid or a set of key-value pairs defining requirements and pre-requisites
			*/
			connectRuntime: function(options) {
				var comp = this, ruid;

				function initialize(items) {
					var type, constructor;

					// if we ran out of runtimes
					if (!items.length) {
						comp.trigger('RuntimeError', new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));
						runtime = null;
						return;
					}

					type = items.shift();
					constructor = Runtime.getConstructor(type);
					if (!constructor) {
						initialize(items);
						return;
					}

					// try initializing the runtime
					runtime = new constructor(options);

					runtime.bind('Init', function() {
						// mark runtime as initialized
						runtime.initialized = true;

						// jailbreak ...
						setTimeout(function() {
							runtime.clients++;
							// this will be triggered on component
							comp.trigger('RuntimeInit', runtime);
						}, 1);
					});

					runtime.bind('Error', function() {
						runtime.destroy(); // runtime cannot destroy itself from inside at a right moment, thus we do it here
						initialize(items);
					});

					/*runtime.bind('Exception', function() { });*/

					// check if runtime managed to pick-up operational mode
					if (!runtime.mode) {
						runtime.trigger('Error');
						return;
					}

					runtime.init();
				}

				// check if a particular runtime was requested
				if (Basic.typeOf(options) === 'string') {
					ruid = options;
				} else if (Basic.typeOf(options.ruid) === 'string') {
					ruid = options.ruid;
				}

				if (ruid) {
					runtime = Runtime.getRuntime(ruid);
					if (runtime) {
						runtime.clients++;
						return runtime;
					} else {
						// there should be a runtime and there's none - weird case
						throw new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR);
					}
				}

				// initialize a fresh one, that fits runtime list and required features best
				initialize((options.runtime_order || Runtime.order).split(/\s*,\s*/));
			},

			/**
			Returns the runtime to which the client is currently connected.

			@method getRuntime
			@return {Runtime} Runtime or null if client is not connected
			*/
			getRuntime: function() {
				if (runtime && runtime.uid) {
					return runtime;
				}
				runtime = null; // make sure we do not leave zombies rambling around
				return null;
			},

			/**
			Disconnects from the runtime. Decrements number of clients connected to the specified runtime.

			@method disconnectRuntime
			*/
			disconnectRuntime: function() {
				if (runtime && --runtime.clients <= 0) {
					runtime.destroy();
					runtime = null;
				}
			}

		});
	};


});

// Included from: src/javascript/file/Blob.js

/**
 * Blob.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/Blob', [
	'moxie/core/utils/Basic',
	'moxie/core/utils/Encode',
	'moxie/runtime/RuntimeClient'
], function(Basic, Encode, RuntimeClient) {
	
	var blobpool = {};

	/**
	@class Blob
	@constructor
	@param {String} ruid Unique id of the runtime, to which this blob belongs to
	@param {Object} blob Object "Native" blob object, as it is represented in the runtime
	*/
	function Blob(ruid, blob) {

		function _sliceDetached(start, end, type) {
			var blob, data = blobpool[this.uid];

			if (Basic.typeOf(data) !== 'string' || !data.length) {
				return null; // or throw exception
			}

			blob = new Blob(null, {
				type: type,
				size: end - start
			});
			blob.detach(data.substr(start, blob.size));

			return blob;
		}

		RuntimeClient.call(this);

		if (ruid) {	
			this.connectRuntime(ruid);
		}

		if (!blob) {
			blob = {};
		} else if (Basic.typeOf(blob) === 'string') { // dataUrl or binary string
			blob = { data: blob };
		}

		Basic.extend(this, {
			
			/**
			Unique id of the component

			@property uid
			@type {String}
			*/
			uid: blob.uid || Basic.guid('uid_'),
			
			/**
			Unique id of the connected runtime, if falsy, then runtime will have to be initialized 
			before this Blob can be used, modified or sent

			@property ruid
			@type {String}
			*/
			ruid: ruid,
	
			/**
			Size of blob

			@property size
			@type {Number}
			@default 0
			*/
			size: blob.size || 0,
			
			/**
			Mime type of blob

			@property type
			@type {String}
			@default ''
			*/
			type: blob.type || '',
			
			/**
			@method slice
			@param {Number} [start=0]
			*/
			slice: function(start, end, type) {		
				if (this.isDetached()) {
					return _sliceDetached.apply(this, arguments);
				}
				return this.getRuntime().exec.call(this, 'Blob', 'slice', this.getSource(), start, end, type);
			},

			/**
			Returns "native" blob object (as it is represented in connected runtime) or null if not found

			@method getSource
			@return {Blob} Returns "native" blob object or null if not found
			*/
			getSource: function() {
				if (!blobpool[this.uid]) {
					return null;	
				}
				return blobpool[this.uid];
			},

			/** 
			Detaches blob from any runtime that it depends on and initialize with standalone value

			@method detach
			@protected
			@param {DOMString} [data=''] Standalone value
			*/
			detach: function(data) {
				if (this.ruid) {
					this.getRuntime().exec.call(this, 'Blob', 'destroy');
					this.disconnectRuntime();
					this.ruid = null;
				}

				data = data || '';

				// if dataUrl, convert to binary string
				var matches = data.match(/^data:([^;]*);base64,/);
				if (matches) {
					this.type = matches[1];
					data = Encode.atob(data.substring(data.indexOf('base64,') + 7));
				}

				this.size = data.length;

				blobpool[this.uid] = data;
			},

			/**
			Checks if blob is standalone (detached of any runtime)
			
			@method isDetached
			@protected
			@return {Boolean}
			*/
			isDetached: function() {
				return !this.ruid && Basic.typeOf(blobpool[this.uid]) === 'string';
			},
			
			/** 
			Destroy Blob and free any resources it was using

			@method destroy
			*/
			destroy: function() {
				this.detach();
				delete blobpool[this.uid];
			}
		});

		
		if (blob.data) {
			this.detach(blob.data); // auto-detach if payload has been passed
		} else {
			blobpool[this.uid] = blob;	
		}
	}
	
	return Blob;
});

// Included from: src/javascript/file/File.js

/**
 * File.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/File', [
	'moxie/core/utils/Basic',
	'moxie/core/utils/Mime',
	'moxie/file/Blob'
], function(Basic, Mime, Blob) {
	/**
	@class File
	@extends Blob
	@constructor
	@param {String} ruid Unique id of the runtime, to which this blob belongs to
	@param {Object} file Object "Native" file object, as it is represented in the runtime
	*/
	function File(ruid, file) {
		var name, type;

		if (!file) { // avoid extra errors in case we overlooked something
			file = {};
		}

		// figure out the type
		if (file.type && file.type !== '') {
			type = file.type;
		} else {
			type = Mime.getFileMime(file.name);
		}

		// sanitize file name or generate new one
		if (file.name) {
			name = file.name.replace(/\\/g, '/');
			name = name.substr(name.lastIndexOf('/') + 1);
		} else {
			var prefix = type.split('/')[0];
			name = Basic.guid((prefix !== '' ? prefix : 'file') + '_');
			
			if (Mime.extensions[type]) {
				name += '.' + Mime.extensions[type][0]; // append proper extension if possible
			}
		}

		Blob.apply(this, arguments);
		
		Basic.extend(this, {
			/**
			File mime type

			@property type
			@type {String}
			@default ''
			*/
			type: type || '',

			/**
			File name

			@property name
			@type {String}
			@default UID
			*/
			name: name || Basic.guid('file_'),
			
			/**
			Date of last modification

			@property lastModifiedDate
			@type {String}
			@default now
			*/
			lastModifiedDate: file.lastModifiedDate || (new Date()).toLocaleString() // Thu Aug 23 2012 19:40:00 GMT+0400 (GET)
		});
	}

	File.prototype = Blob.prototype;

	return File;
});

// Included from: src/javascript/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/FileInput', [
	'moxie/core/utils/Basic',
	'moxie/core/utils/Mime',
	'moxie/core/utils/Dom',
	'moxie/core/Exceptions',
	'moxie/core/EventTarget',
	'moxie/core/I18n',
	'moxie/file/File',
	'moxie/runtime/Runtime',
	'moxie/runtime/RuntimeClient'
], function(Basic, Mime, Dom, x, EventTarget, I18n, File, Runtime, RuntimeClient) {
	/**
	Provides a convenient way to create cross-browser file-picker. Generates file selection dialog on click,
	converts selected files to _File_ objects, to be used in conjunction with _Image_, preloaded in memory
	with _FileReader_ or uploaded to a server through _XMLHttpRequest_.

	@class FileInput
	@constructor
	@extends EventTarget
	@uses RuntimeClient
	@param {Object|String|DOMElement} options If options is string or node, argument is considered as _browse\_button_.
		@param {String|DOMElement} options.browse_button DOM Element to turn into file picker.
		@param {Array} [options.accept] Array of mime types to accept. By default accepts all.
		@param {String} [options.file='file'] Name of the file field (not the filename).
		@param {Boolean} [options.multiple=false] Enable selection of multiple files.
		@param {Boolean} [options.directory=false] Turn file input into the folder input (cannot be both at the same time).
		@param {String|DOMElement} [options.container] DOM Element to use as a container for file-picker. Defaults to parentNode 
		for _browse\_button_.
		@param {Object|String} [options.required_caps] Set of required capabilities, that chosen runtime must support.

	@example
		<div id="container">
			<a id="file-picker" href="javascript:;">Browse...</a>
		</div>

		<script>
			var fileInput = new mOxie.FileInput({
				browse_button: 'file-picker', // or document.getElementById('file-picker')
				container: 'container',
				accept: [
					{title: "Image files", extensions: "jpg,gif,png"} // accept only images
				],
				multiple: true // allow multiple file selection
			});

			fileInput.onchange = function(e) {
				// do something to files array
				console.info(e.target.files); // or this.files or fileInput.files
			};

			fileInput.init(); // initialize
		</script>
	*/
	var dispatches = [
		/**
		Dispatched when runtime is connected and file-picker is ready to be used.

		@event ready
		@param {Object} event
		*/
		'ready',

		/**
		Dispatched right after [ready](#event_ready) event, and whenever [refresh()](#method_refresh) is invoked. 
		Check [corresponding documentation entry](#method_refresh) for more info.

		@event refresh
		@param {Object} event
		*/

		/**
		Dispatched when selection of files in the dialog is complete.

		@event change
		@param {Object} event
		*/
		'change',

		'cancel', // TODO: might be useful

		/**
		Dispatched when mouse cursor enters file-picker area. Can be used to style element
		accordingly.

		@event mouseenter
		@param {Object} event
		*/
		'mouseenter',

		/**
		Dispatched when mouse cursor leaves file-picker area. Can be used to style element
		accordingly.

		@event mouseleave
		@param {Object} event
		*/
		'mouseleave',

		/**
		Dispatched when functional mouse button is pressed on top of file-picker area.

		@event mousedown
		@param {Object} event
		*/
		'mousedown',

		/**
		Dispatched when functional mouse button is released on top of file-picker area.

		@event mouseup
		@param {Object} event
		*/
		'mouseup'
	];

	function FileInput(options) {
		var self = this,
			container, browseButton, defaults;

		// if flat argument passed it should be browse_button id
		if (Basic.inArray(Basic.typeOf(options), ['string', 'node']) !== -1) {
			options = { browse_button : options };
		}

		// this will help us to find proper default container
		browseButton = Dom.get(options.browse_button);
		if (!browseButton) {
			// browse button is required
			throw new x.DOMException(x.DOMException.NOT_FOUND_ERR);
		}

		// figure out the options
		defaults = {
			accept: [{
				title: I18n.translate('All Files'),
				extensions: '*'
			}],
			name: 'file',
			multiple: false,
			required_caps: false,
			container: browseButton.parentNode || document.body
		};
		
		options = Basic.extend({}, defaults, options);

		// convert to object representation
		if (typeof(options.required_caps) === 'string') {
			options.required_caps = Runtime.parseCaps(options.required_caps);
		}
					
		// normalize accept option (could be list of mime types or array of title/extensions pairs)
		if (typeof(options.accept) === 'string') {
			options.accept = Mime.mimes2extList(options.accept);
		}

		container = Dom.get(options.container);
		// make sure we have container
		if (!container) {
			container = document.body;
		}

		// make container relative, if it's not
		if (Dom.getStyle(container, 'position') === 'static') {
			container.style.position = 'relative';
		}

		container = browseButton = null; // IE
						
		RuntimeClient.call(self);
		
		Basic.extend(self, {
			/**
			Unique id of the component

			@property uid
			@protected
			@readOnly
			@type {String}
			@default UID
			*/
			uid: Basic.guid('uid_'),
			
			/**
			Unique id of the connected runtime, if any.

			@property ruid
			@protected
			@type {String}
			*/
			ruid: null,

			/**
			Unique id of the runtime container. Useful to get hold of it for various manipulations.

			@property shimid
			@protected
			@type {String}
			*/
			shimid: null,
			
			/**
			Array of selected mOxie.File objects

			@property files
			@type {Array}
			@default null
			*/
			files: null,

			/**
			Initializes the file-picker, connects it to runtime and dispatches event ready when done.

			@method init
			*/
			init: function() {
				self.convertEventPropsToHandlers(dispatches);

				self.bind('RuntimeInit', function(e, runtime) {
					self.ruid = runtime.uid;
					self.shimid = runtime.shimid;

					self.bind("Ready", function() {
						self.trigger("Refresh");
					}, 999);

					self.bind("Change", function() {
						var files = runtime.exec.call(self, 'FileInput', 'getFiles');

						self.files = [];

						Basic.each(files, function(file) {
							// ignore empty files (IE10 for example hangs if you try to send them via XHR)
							if (file.size === 0) {
								return true; 
							}
							self.files.push(new File(self.ruid, file));
						});
					}, 999);

					// re-position and resize shim container
					self.bind('Refresh', function() {
						var pos, size, browseButton, shimContainer;
						
						browseButton = Dom.get(options.browse_button);
						shimContainer = Dom.get(runtime.shimid); // do not use runtime.getShimContainer(), since it will create container if it doesn't exist

						if (browseButton) {
							pos = Dom.getPos(browseButton, Dom.get(options.container));
							size = Dom.getSize(browseButton);

							if (shimContainer) {
								Basic.extend(shimContainer.style, {
									top     : pos.y + 'px',
									left    : pos.x + 'px',
									width   : size.w + 'px',
									height  : size.h + 'px'
								});
							}
						}
						shimContainer = browseButton = null;
					});
					
					runtime.exec.call(self, 'FileInput', 'init', options);
				});

				// runtime needs: options.required_features, options.runtime_order and options.container
				self.connectRuntime(Basic.extend({}, options, {
					required_caps: {
						select_file: true
					}
				}));
			},

			/**
			Disables file-picker element, so that it doesn't react to mouse clicks.

			@method disable
			@param {Boolean} [state=true] Disable component if - true, enable if - false
			*/
			disable: function(state) {
				var runtime = this.getRuntime();
				if (runtime) {
					runtime.exec.call(this, 'FileInput', 'disable', Basic.typeOf(state) === 'undefined' ? true : state);
				}
			},


			/**
			Reposition and resize dialog trigger to match the position and size of browse_button element.

			@method refresh
			*/
			refresh: function() {
				self.trigger("Refresh");
			},


			/**
			Destroy component.

			@method destroy
			*/
			destroy: function() {
				var runtime = this.getRuntime();
				if (runtime) {
					runtime.exec.call(this, 'FileInput', 'destroy');
					this.disconnectRuntime();
				}

				if (Basic.typeOf(this.files) === 'array') {
					// no sense in leaving associated files behind
					Basic.each(this.files, function(file) {
						file.destroy();
					});
				} 
				this.files = null;
			}
		});
	}

	FileInput.prototype = EventTarget.instance;

	return FileInput;
});

// Included from: src/javascript/file/FileDrop.js

/**
 * FileDrop.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/FileDrop', [
	'moxie/core/I18n',
	'moxie/core/utils/Dom',
	'moxie/core/Exceptions',
	'moxie/core/utils/Basic',
	'moxie/file/File',
	'moxie/runtime/RuntimeClient',
	'moxie/core/EventTarget',
	'moxie/core/utils/Mime'
], function(I18n, Dom, x, Basic, File, RuntimeClient, EventTarget, Mime) {
	/**
	Turn arbitrary DOM element to a drop zone accepting files. Converts selected files to _File_ objects, to be used 
	in conjunction with _Image_, preloaded in memory with _FileReader_ or uploaded to a server through 
	_XMLHttpRequest_.

	@example
		<div id="drop_zone">
			Drop files here
		</div>
		<br />
		<div id="filelist"></div>

		<script type="text/javascript">
			var fileDrop = new mOxie.FileDrop('drop_zone'), fileList = mOxie.get('filelist');

			fileDrop.ondrop = function() {
				mOxie.each(this.files, function(file) {
					fileList.innerHTML += '<div>' + file.name + '</div>';
				});
			};

			fileDrop.init();
		</script>

	@class FileDrop
	@constructor
	@extends EventTarget
	@uses RuntimeClient
	@param {Object|String} options If options has typeof string, argument is considered as options.drop_zone
		@param {String|DOMElement} options.drop_zone DOM Element to turn into a drop zone
		@param {Array} [options.accept] Array of mime types to accept. By default accepts all
		@param {Object|String} [options.required_caps] Set of required capabilities, that chosen runtime must support
	*/
	var dispatches = [
		/**
		Dispatched when runtime is connected and drop zone is ready to accept files.

		@event ready
		@param {Object} event
		*/
		'ready', 

		/**
		Dispatched when dragging cursor enters the drop zone.

		@event dragenter
		@param {Object} event
		*/
		'dragenter',

		/**
		Dispatched when dragging cursor leaves the drop zone.

		@event dragleave
		@param {Object} event
		*/
		'dragleave', 

		/**
		Dispatched when file is dropped onto the drop zone.

		@event drop
		@param {Object} event
		*/
		'drop', 

		/**
		Dispatched if error occurs.

		@event error
		@param {Object} event
		*/
		'error'
	];

	function FileDrop(options) {
		var self = this, defaults;

		// if flat argument passed it should be drop_zone id
		if (typeof(options) === 'string') {
			options = { drop_zone : options };
		}

		// figure out the options
		defaults = {
			accept: [{
				title: I18n.translate('All Files'),
				extensions: '*'
			}],
			required_caps: {
				drag_and_drop: true
			}
		};
		
		options = typeof(options) === 'object' ? Basic.extend({}, defaults, options) : defaults;

		// this will help us to find proper default container
		options.container = Dom.get(options.drop_zone) || document.body;

		// make container relative, if it is not
		if (Dom.getStyle(options.container, 'position') === 'static') {
			options.container.style.position = 'relative';
		}
					
		// normalize accept option (could be list of mime types or array of title/extensions pairs)
		if (typeof(options.accept) === 'string') {
			options.accept = Mime.mimes2extList(options.accept);
		}

		RuntimeClient.call(self);

		Basic.extend(self, {
			uid: Basic.guid('uid_'),

			ruid: null,

			files: null,

			init: function() {
	
				self.convertEventPropsToHandlers(dispatches);
		
				self.bind('RuntimeInit', function(e, runtime) {
					self.ruid = runtime.uid;

					self.bind("Drop", function() {
						var files = runtime.exec.call(self, 'FileDrop', 'getFiles');

						self.files = [];

						Basic.each(files, function(file) {
							self.files.push(new File(self.ruid, file));
						});
					}, 999);

					runtime.exec.call(self, 'FileDrop', 'init', options);

					self.dispatchEvent('ready');
				});
							
				// runtime needs: options.required_features, options.runtime_order and options.container
				self.connectRuntime(options); // throws RuntimeError
			},

			destroy: function() {
				var runtime = this.getRuntime();
				if (runtime) {
					runtime.exec.call(this, 'FileDrop', 'destroy');
					this.disconnectRuntime();
				}
				this.files = null;
			}
		});
	}

	FileDrop.prototype = EventTarget.instance;

	return FileDrop;
});

// Included from: src/javascript/runtime/RuntimeTarget.js

/**
 * RuntimeTarget.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/runtime/RuntimeTarget', [
	'moxie/core/utils/Basic',
	'moxie/runtime/RuntimeClient',
	"moxie/core/EventTarget"
], function(Basic, RuntimeClient, EventTarget) {
	/**
	Instance of this class can be used as a target for the events dispatched by shims,
	when allowing them onto components is for either reason inappropriate

	@class RuntimeTarget
	@constructor
	@protected
	@extends EventTarget
	*/
	function RuntimeTarget() {
		this.uid = Basic.guid('uid_');
		
		RuntimeClient.call(this);

		this.destroy = function() {
			this.disconnectRuntime();
			this.unbindAll();
		};
	}

	RuntimeTarget.prototype = EventTarget.instance;

	return RuntimeTarget;
});

// Included from: src/javascript/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/FileReader', [
	'moxie/core/utils/Basic',
	'moxie/core/utils/Encode',
	'moxie/core/Exceptions',
	'moxie/core/EventTarget',
	'moxie/file/Blob',
	'moxie/file/File',
	'moxie/runtime/RuntimeTarget'
], function(Basic, Encode, x, EventTarget, Blob, File, RuntimeTarget) {
	/**
	Utility for preloading o.Blob/o.File objects in memory. By design closely follows [W3C FileReader](http://www.w3.org/TR/FileAPI/#dfn-filereader)
	interface. Where possible uses native FileReader, where - not falls back to shims.

	@class FileReader
	@constructor FileReader
	@extends EventTarget
	@uses RuntimeClient
	*/
	var dispatches = [

		/** 
		Dispatched when the read starts.

		@event loadstart
		@param {Object} event
		*/
		'loadstart', 

		/** 
		Dispatched while reading (and decoding) blob, and reporting partial Blob data (progess.loaded/progress.total).

		@event progress
		@param {Object} event
		*/
		'progress', 

		/** 
		Dispatched when the read has successfully completed.

		@event load
		@param {Object} event
		*/
		'load', 

		/** 
		Dispatched when the read has been aborted. For instance, by invoking the abort() method.

		@event abort
		@param {Object} event
		*/
		'abort', 

		/** 
		Dispatched when the read has failed.

		@event error
		@param {Object} event
		*/
		'error', 

		/** 
		Dispatched when the request has completed (either in success or failure).

		@event loadend
		@param {Object} event
		*/
		'loadend'
	];
	
	function FileReader() {
		var self = this, _fr;
				
		Basic.extend(this, {
			/**
			UID of the component instance.

			@property uid
			@type {String}
			*/
			uid: Basic.guid('uid_'),

			/**
			Contains current state of FileReader object. Can take values of FileReader.EMPTY, FileReader.LOADING
			and FileReader.DONE.

			@property readyState
			@type {Number}
			@default FileReader.EMPTY
			*/
			readyState: FileReader.EMPTY,
			
			/**
			Result of the successful read operation.

			@property result
			@type {String}
			*/
			result: null,
			
			/**
			Stores the error of failed asynchronous read operation.

			@property error
			@type {DOMError}
			*/
			error: null,
			
			/**
			Initiates reading of File/Blob object contents to binary string.

			@method readAsBinaryString
			@param {Blob|File} blob Object to preload
			*/
			readAsBinaryString: function(blob) {
				_read.call(this, 'readAsBinaryString', blob);
			},
			
			/**
			Initiates reading of File/Blob object contents to dataURL string.

			@method readAsDataURL
			@param {Blob|File} blob Object to preload
			*/
			readAsDataURL: function(blob) {
				_read.call(this, 'readAsDataURL', blob);
			},
			
			/**
			Initiates reading of File/Blob object contents to string.

			@method readAsText
			@param {Blob|File} blob Object to preload
			*/
			readAsText: function(blob) {
				_read.call(this, 'readAsText', blob);
			},
			
			/**
			Aborts preloading process.

			@method abort
			*/
			abort: function() {
				this.result = null;
				
				if (Basic.inArray(this.readyState, [FileReader.EMPTY, FileReader.DONE]) !== -1) {
					return;
				} else if (this.readyState === FileReader.LOADING) {
					this.readyState = FileReader.DONE;
				}

				if (_fr) {
					_fr.getRuntime().exec.call(this, 'FileReader', 'abort');
				}
				
				this.trigger('abort');
				this.trigger('loadend');
			},

			/**
			Destroy component and release resources.

			@method destroy
			*/
			destroy: function() {
				this.abort();

				if (_fr) {
					_fr.getRuntime().exec.call(this, 'FileReader', 'destroy');
					_fr.disconnectRuntime();
				}

				self = _fr = null;
			}
		});
		
		
		function _read(op, blob) {
			_fr = new RuntimeTarget();

			function error(err) {
				self.readyState = FileReader.DONE;
				self.error = err;
				self.trigger('error');
				loadEnd();
			}

			function loadEnd() {
				_fr.destroy();
				_fr = null;
				self.trigger('loadend');
			}

			function exec(runtime) {
				_fr.bind('Error', function(e, err) {
					error(err);
				});

				_fr.bind('Progress', function(e) {
					self.result = runtime.exec.call(_fr, 'FileReader', 'getResult');
					self.trigger(e);
				});
				
				_fr.bind('Load', function(e) {
					self.readyState = FileReader.DONE;
					self.result = runtime.exec.call(_fr, 'FileReader', 'getResult');
					self.trigger(e);
					loadEnd();
				});

				runtime.exec.call(_fr, 'FileReader', 'read', op, blob);
			}

			this.convertEventPropsToHandlers(dispatches);

			if (this.readyState === FileReader.LOADING) {
				return error(new x.DOMException(x.DOMException.INVALID_STATE_ERR));
			}

			this.readyState = FileReader.LOADING;
			this.trigger('loadstart');

			// if source is o.Blob/o.File
			if (blob instanceof Blob) {
				if (blob.isDetached()) {
					var src = blob.getSource();
					switch (op) {
						case 'readAsText':
						case 'readAsBinaryString':
							this.result = src;
							break;
						case 'readAsDataURL':
							this.result = 'data:' + blob.type + ';base64,' + Encode.btoa(src);
							break;
					}
					this.readyState = FileReader.DONE;
					this.trigger('load');
					loadEnd();
				} else {
					exec(_fr.connectRuntime(blob.ruid));
				}
			} else {
				error(new x.DOMException(x.DOMException.NOT_FOUND_ERR));
			}
		}
	}
	
	/**
	Initial FileReader state

	@property EMPTY
	@type {Number}
	@final
	@static
	@default 0
	*/
	FileReader.EMPTY = 0;

	/**
	FileReader switches to this state when it is preloading the source

	@property LOADING
	@type {Number}
	@final
	@static
	@default 1
	*/
	FileReader.LOADING = 1;

	/**
	Preloading is complete, this is a final state

	@property DONE
	@type {Number}
	@final
	@static
	@default 2
	*/
	FileReader.DONE = 2;

	FileReader.prototype = EventTarget.instance;

	return FileReader;
});

// Included from: src/javascript/core/utils/Url.js

/**
 * Url.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Url', [], function() {
	/**
	Parse url into separate components and fill in absent parts with parts from current url,
	based on https://raw.github.com/kvz/phpjs/master/functions/url/parse_url.js

	@method parseUrl
	@for Utils
	@static
	@param {String} url Url to parse (defaults to empty string if undefined)
	@return {Object} Hash containing extracted uri components
	*/
	var parseUrl = function(url, currentUrl) {
		var key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment']
		, i = key.length
		, ports = {
			http: 80,
			https: 443
		}
		, uri = {}
		, regex = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/
		, m = regex.exec(url || '')
		;
					
		while (i--) {
			if (m[i]) {
				uri[key[i]] = m[i];
			}
		}

		// when url is relative, we set the origin and the path ourselves
		if (!uri.scheme) {
			// come up with defaults
			if (!currentUrl || typeof(currentUrl) === 'string') {
				currentUrl = parseUrl(currentUrl || document.location.href);
			}

			uri.scheme = currentUrl.scheme;
			uri.host = currentUrl.host;
			uri.port = currentUrl.port;

			var path = '';
			// for urls without trailing slash we need to figure out the path
			if (/^[^\/]/.test(uri.path)) {
				path = currentUrl.path;
				// if path ends with a filename, strip it
				if (!/(\/|\/[^\.]+)$/.test(path)) {
					path = path.replace(/\/[^\/]+$/, '/');
				} else {
					path += '/';
				}
			}
			uri.path = path + (uri.path || ''); // site may reside at domain.com or domain.com/subdir
		}

		if (!uri.port) {
			uri.port = ports[uri.scheme] || 80;
		} 
		
		uri.port = parseInt(uri.port, 10);

		if (!uri.path) {
			uri.path = "/";
		}

		delete uri.source;

		return uri;
	};

	/**
	Resolve url - among other things will turn relative url to absolute

	@method resolveUrl
	@static
	@param {String} url Either absolute or relative
	@return {String} Resolved, absolute url
	*/
	var resolveUrl = function(url) {
		var ports = { // we ignore default ports
			http: 80,
			https: 443
		}
		, urlp = parseUrl(url)
		;

		return urlp.scheme + '://' + urlp.host + (urlp.port !== ports[urlp.scheme] ? ':' + urlp.port : '') + urlp.path + (urlp.query ? urlp.query : '');
	};

	/**
	Check if specified url has the same origin as the current document

	@method hasSameOrigin
	@param {String|Object} url
	@return {Boolean}
	*/
	var hasSameOrigin = function(url) {
		function origin(url) {
			return [url.scheme, url.host, url.port].join('/');
		}
			
		if (typeof url === 'string') {
			url = parseUrl(url);
		}	
		
		return origin(parseUrl()) === origin(url);
	};

	return {
		parseUrl: parseUrl,
		resolveUrl: resolveUrl,
		hasSameOrigin: hasSameOrigin
	};
});

// Included from: src/javascript/file/FileReaderSync.js

/**
 * FileReaderSync.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/FileReaderSync', [
	'moxie/core/utils/Basic',
	'moxie/runtime/RuntimeClient',
	'moxie/core/utils/Encode'
], function(Basic, RuntimeClient, Encode) {
	/**
	Synchronous FileReader implementation. Something like this is available in WebWorkers environment, here
	it can be used to read only preloaded blobs/files and only below certain size (not yet sure what that'd be,
	but probably < 1mb). Not meant to be used directly by user.

	@class FileReaderSync
	@private
	@constructor
	*/
	return function() {
		RuntimeClient.call(this);

		Basic.extend(this, {
			uid: Basic.guid('uid_'),

			readAsBinaryString: function(blob) {
				return _read.call(this, 'readAsBinaryString', blob);
			},
			
			readAsDataURL: function(blob) {
				return _read.call(this, 'readAsDataURL', blob);
			},
			
			/*readAsArrayBuffer: function(blob) {
				return _read.call(this, 'readAsArrayBuffer', blob);
			},*/
			
			readAsText: function(blob) {
				return _read.call(this, 'readAsText', blob);
			}
		});

		function _read(op, blob) {
			if (blob.isDetached()) {
				var src = blob.getSource();
				switch (op) {
					case 'readAsBinaryString':
						return src;
					case 'readAsDataURL':
						return 'data:' + blob.type + ';base64,' + Encode.btoa(src);
					case 'readAsText':
						var txt = '';
						for (var i = 0, length = src.length; i < length; i++) {
							txt += String.fromCharCode(src[i]);
						}
						return txt;
				}
			} else {
				var result = this.connectRuntime(blob.ruid).exec.call(this, 'FileReaderSync', 'read', op, blob);
				this.disconnectRuntime();
				return result;
			}
		}
	};
});

// Included from: src/javascript/xhr/FormData.js

/**
 * FormData.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/xhr/FormData", [
	"moxie/core/Exceptions",
	"moxie/core/utils/Basic",
	"moxie/file/Blob"
], function(x, Basic, Blob) {
	/**
	FormData

	@class FormData
	@constructor
	*/
	function FormData() {
		var _blob, _fields = [];

		Basic.extend(this, {
			/**
			Append another key-value pair to the FormData object

			@method append
			@param {String} name Name for the new field
			@param {String|Blob|Array|Object} value Value for the field
			*/
			append: function(name, value) {
				var self = this, valueType = Basic.typeOf(value);

				// according to specs value might be either Blob or String
				if (value instanceof Blob) {
					_blob = {
						name: name,
						value: value // unfortunately we can only send single Blob in one FormData
					};
				} else if ('array' === valueType) {
					name += '[]';

					Basic.each(value, function(value) {
						self.append(name, value);
					});
				} else if ('object' === valueType) {
					Basic.each(value, function(value, key) {
						self.append(name + '[' + key + ']', value);
					});
				} else if ('null' === valueType || 'undefined' === valueType || 'number' === valueType && isNaN(value)) {
					self.append(name, "false");
				} else {
					_fields.push({
						name: name,
						value: value.toString()
					});
				}
			},

			/**
			Checks if FormData contains Blob.

			@method hasBlob
			@return {Boolean}
			*/
			hasBlob: function() {
				return !!this.getBlob();
			},

			/**
			Retrieves blob.

			@method getBlob
			@return {Object} Either Blob if found or null
			*/
			getBlob: function() {
				return _blob && _blob.value || null;
			},

			/**
			Retrieves blob field name.

			@method getBlobName
			@return {String} Either Blob field name or null
			*/
			getBlobName: function() {
				return _blob && _blob.name || null;
			},

			/**
			Loop over the fields in FormData and invoke the callback for each of them.

			@method each
			@param {Function} cb Callback to call for each field
			*/
			each: function(cb) {
				Basic.each(_fields, function(field) {
					cb(field.value, field.name);
				});

				if (_blob) {
					cb(_blob.value, _blob.name);
				}
			},

			destroy: function() {
				_blob = null;
				_fields = [];
			}
		});
	}

	return FormData;
});

// Included from: src/javascript/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/xhr/XMLHttpRequest", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/core/EventTarget",
	"moxie/core/utils/Encode",
	"moxie/core/utils/Url",
	"moxie/runtime/Runtime",
	"moxie/runtime/RuntimeTarget",
	"moxie/file/Blob",
	"moxie/file/FileReaderSync",
	"moxie/xhr/FormData",
	"moxie/core/utils/Env",
	"moxie/core/utils/Mime"
], function(Basic, x, EventTarget, Encode, Url, Runtime, RuntimeTarget, Blob, FileReaderSync, FormData, Env, Mime) {

	var httpCode = {
		100: 'Continue',
		101: 'Switching Protocols',
		102: 'Processing',

		200: 'OK',
		201: 'Created',
		202: 'Accepted',
		203: 'Non-Authoritative Information',
		204: 'No Content',
		205: 'Reset Content',
		206: 'Partial Content',
		207: 'Multi-Status',
		226: 'IM Used',

		300: 'Multiple Choices',
		301: 'Moved Permanently',
		302: 'Found',
		303: 'See Other',
		304: 'Not Modified',
		305: 'Use Proxy',
		306: 'Reserved',
		307: 'Temporary Redirect',

		400: 'Bad Request',
		401: 'Unauthorized',
		402: 'Payment Required',
		403: 'Forbidden',
		404: 'Not Found',
		405: 'Method Not Allowed',
		406: 'Not Acceptable',
		407: 'Proxy Authentication Required',
		408: 'Request Timeout',
		409: 'Conflict',
		410: 'Gone',
		411: 'Length Required',
		412: 'Precondition Failed',
		413: 'Request Entity Too Large',
		414: 'Request-URI Too Long',
		415: 'Unsupported Media Type',
		416: 'Requested Range Not Satisfiable',
		417: 'Expectation Failed',
		422: 'Unprocessable Entity',
		423: 'Locked',
		424: 'Failed Dependency',
		426: 'Upgrade Required',

		500: 'Internal Server Error',
		501: 'Not Implemented',
		502: 'Bad Gateway',
		503: 'Service Unavailable',
		504: 'Gateway Timeout',
		505: 'HTTP Version Not Supported',
		506: 'Variant Also Negotiates',
		507: 'Insufficient Storage',
		510: 'Not Extended'
	};

	function XMLHttpRequestUpload() {
		this.uid = Basic.guid('uid_');
	}
	
	XMLHttpRequestUpload.prototype = EventTarget.instance;

	/**
	Implementation of XMLHttpRequest

	@class XMLHttpRequest
	@constructor
	@uses RuntimeClient
	@extends EventTarget
	*/
	var dispatches = ['loadstart', 'progress', 'abort', 'error', 'load', 'timeout', 'loadend']; // & readystatechange (for historical reasons)
	
	var NATIVE = 1, RUNTIME = 2;
					
	function XMLHttpRequest() {
		var self = this,
			// this (together with _p() @see below) is here to gracefully upgrade to setter/getter syntax where possible
			props = {
				/**
				The amount of milliseconds a request can take before being terminated. Initially zero. Zero means there is no timeout.

				@property timeout
				@type Number
				@default 0
				*/
				timeout: 0,

				/**
				Current state, can take following values:
				UNSENT (numeric value 0)
				The object has been constructed.

				OPENED (numeric value 1)
				The open() method has been successfully invoked. During this state request headers can be set using setRequestHeader() and the request can be made using the send() method.

				HEADERS_RECEIVED (numeric value 2)
				All redirects (if any) have been followed and all HTTP headers of the final response have been received. Several response members of the object are now available.

				LOADING (numeric value 3)
				The response entity body is being received.

				DONE (numeric value 4)

				@property readyState
				@type Number
				@default 0 (UNSENT)
				*/
				readyState: XMLHttpRequest.UNSENT,

				/**
				True when user credentials are to be included in a cross-origin request. False when they are to be excluded
				in a cross-origin request and when cookies are to be ignored in its response. Initially false.

				@property withCredentials
				@type Boolean
				@default false
				*/
				withCredentials: false,

				/**
				Returns the HTTP status code.

				@property status
				@type Number
				@default 0
				*/
				status: 0,

				/**
				Returns the HTTP status text.

				@property statusText
				@type String
				*/
				statusText: "",

				/**
				Returns the response type. Can be set to change the response type. Values are:
				the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
				
				@property responseType
				@type String
				*/
				responseType: "",

				/**
				Returns the document response entity body.
				
				Throws an "InvalidStateError" exception if responseType is not the empty string or "document".

				@property responseXML
				@type Document
				*/
				responseXML: null,

				/**
				Returns the text response entity body.
				
				Throws an "InvalidStateError" exception if responseType is not the empty string or "text".

				@property responseText
				@type String
				*/
				responseText: null,

				/**
				Returns the response entity body (http://www.w3.org/TR/XMLHttpRequest/#response-entity-body).
				Can become: ArrayBuffer, Blob, Document, JSON, Text
				
				@property response
				@type Mixed
				*/
				response: null
			},

			_async = true,
			_url,
			_method,
			_headers = {},
			_user,
			_password,
			_encoding = null,
			_mimeType = null,

			// flags
			_sync_flag = false,
			_send_flag = false,
			_upload_events_flag = false,
			_upload_complete_flag = false,
			_error_flag = false,
			_same_origin_flag = false,

			// times
			_start_time,
			_timeoutset_time,

			_finalMime = null,
			_finalCharset = null,

			_options = {},
			_xhr,
			_responseHeaders = '',
			_responseHeadersBag
			;

		
		Basic.extend(this, props, {
			/**
			Unique id of the component

			@property uid
			@type String
			*/
			uid: Basic.guid('uid_'),
			
			/**
			Target for Upload events

			@property upload
			@type XMLHttpRequestUpload
			*/
			upload: new XMLHttpRequestUpload(),
			

			/**
			Sets the request method, request URL, synchronous flag, request username, and request password.

			Throws a "SyntaxError" exception if one of the following is true:

			method is not a valid HTTP method.
			url cannot be resolved.
			url contains the "user:password" format in the userinfo production.
			Throws a "SecurityError" exception if method is a case-insensitive match for CONNECT, TRACE or TRACK.

			Throws an "InvalidAccessError" exception if one of the following is true:

			Either user or password is passed as argument and the origin of url does not match the XMLHttpRequest origin.
			There is an associated XMLHttpRequest document and either the timeout attribute is not zero,
			the withCredentials attribute is true, or the responseType attribute is not the empty string.


			@method open
			@param {String} method HTTP method to use on request
			@param {String} url URL to request
			@param {Boolean} [async=true] If false request will be done in synchronous manner. Asynchronous by default.
			@param {String} [user] Username to use in HTTP authentication process on server-side
			@param {String} [password] Password to use in HTTP authentication process on server-side
			*/
			open: function(method, url, async, user, password) {
				var urlp;
				
				// first two arguments are required
				if (!method || !url) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}
				
				// 2 - check if any code point in method is higher than U+00FF or after deflating method it does not match the method
				if (/[\u0100-\uffff]/.test(method) || Encode.utf8_encode(method) !== method) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}

				// 3
				if (!!~Basic.inArray(method.toUpperCase(), ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'TRACE', 'TRACK'])) {
					_method = method.toUpperCase();
				}
				
				
				// 4 - allowing these methods poses a security risk
				if (!!~Basic.inArray(_method, ['CONNECT', 'TRACE', 'TRACK'])) {
					throw new x.DOMException(x.DOMException.SECURITY_ERR);
				}

				// 5
				url = Encode.utf8_encode(url);
				
				// 6 - Resolve url relative to the XMLHttpRequest base URL. If the algorithm returns an error, throw a "SyntaxError".
				urlp = Url.parseUrl(url);

				_same_origin_flag = Url.hasSameOrigin(urlp);
																
				// 7 - manually build up absolute url
				_url = Url.resolveUrl(url);
		
				// 9-10, 12-13
				if ((user || password) && !_same_origin_flag) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}

				_user = user || urlp.user;
				_password = password || urlp.pass;
				
				// 11
				_async = async || true;
				
				if (_async === false && (_p('timeout') || _p('withCredentials') || _p('responseType') !== "")) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}
				
				// 14 - terminate abort()
				
				// 15 - terminate send()

				// 18
				_sync_flag = !_async;
				_send_flag = false;
				_headers = {};
				_reset.call(this);

				// 19
				_p('readyState', XMLHttpRequest.OPENED);
				
				// 20
				this.convertEventPropsToHandlers(['readystatechange']); // unify event handlers
				this.dispatchEvent('readystatechange');
			},
			
			/**
			Appends an header to the list of author request headers, or if header is already
			in the list of author request headers, combines its value with value.

			Throws an "InvalidStateError" exception if the state is not OPENED or if the send() flag is set.
			Throws a "SyntaxError" exception if header is not a valid HTTP header field name or if value
			is not a valid HTTP header field value.
			
			@method setRequestHeader
			@param {String} header
			@param {String|Number} value
			*/
			setRequestHeader: function(header, value) {
				var uaHeaders = [ // these headers are controlled by the user agent
						"accept-charset",
						"accept-encoding",
						"access-control-request-headers",
						"access-control-request-method",
						"connection",
						"content-length",
						"cookie",
						"cookie2",
						"content-transfer-encoding",
						"date",
						"expect",
						"host",
						"keep-alive",
						"origin",
						"referer",
						"te",
						"trailer",
						"transfer-encoding",
						"upgrade",
						"user-agent",
						"via"
					];
				
				// 1-2
				if (_p('readyState') !== XMLHttpRequest.OPENED || _send_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 3
				if (/[\u0100-\uffff]/.test(header) || Encode.utf8_encode(header) !== header) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}

				// 4
				/* this step is seemingly bypassed in browsers, probably to allow various unicode characters in header values
				if (/[\u0100-\uffff]/.test(value) || Encode.utf8_encode(value) !== value) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}*/

				header = Basic.trim(header).toLowerCase();
				
				// setting of proxy-* and sec-* headers is prohibited by spec
				if (!!~Basic.inArray(header, uaHeaders) || /^(proxy\-|sec\-)/.test(header)) {
					return false;
				}

				// camelize
				// browsers lowercase header names (at least for custom ones)
				// header = header.replace(/\b\w/g, function($1) { return $1.toUpperCase(); });
				
				if (!_headers[header]) {
					_headers[header] = value;
				} else {
					// http://tools.ietf.org/html/rfc2616#section-4.2 (last paragraph)
					_headers[header] += ', ' + value;
				}
				return true;
			},

			/**
			Returns all headers from the response, with the exception of those whose field name is Set-Cookie or Set-Cookie2.

			@method getAllResponseHeaders
			@return {String} reponse headers or empty string
			*/
			getAllResponseHeaders: function() {
				return _responseHeaders || '';
			},

			/**
			Returns the header field value from the response of which the field name matches header, 
			unless the field name is Set-Cookie or Set-Cookie2.

			@method getResponseHeader
			@param {String} header
			@return {String} value(s) for the specified header or null
			*/
			getResponseHeader: function(header) {
				header = header.toLowerCase();

				if (_error_flag || !!~Basic.inArray(header, ['set-cookie', 'set-cookie2'])) {
					return null;
				}

				if (_responseHeaders && _responseHeaders !== '') {
					// if we didn't parse response headers until now, do it and keep for later
					if (!_responseHeadersBag) {
						_responseHeadersBag = {};
						Basic.each(_responseHeaders.split(/\r\n/), function(line) {
							var pair = line.split(/:\s+/);
							if (pair.length === 2) { // last line might be empty, omit
								pair[0] = Basic.trim(pair[0]); // just in case
								_responseHeadersBag[pair[0].toLowerCase()] = { // simply to retain header name in original form
									header: pair[0],
									value: Basic.trim(pair[1])
								};
							}
						});
					}
					if (_responseHeadersBag.hasOwnProperty(header)) {
						return _responseHeadersBag[header].header + ': ' + _responseHeadersBag[header].value;
					}
				}
				return null;
			},
			
			/**
			Sets the Content-Type header for the response to mime.
			Throws an "InvalidStateError" exception if the state is LOADING or DONE.
			Throws a "SyntaxError" exception if mime is not a valid media type.

			@method overrideMimeType
			@param String mime Mime type to set
			*/
			overrideMimeType: function(mime) {
				var matches, charset;
			
				// 1
				if (!!~Basic.inArray(_p('readyState'), [XMLHttpRequest.LOADING, XMLHttpRequest.DONE])) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 2
				mime = Basic.trim(mime.toLowerCase());

				if (/;/.test(mime) && (matches = mime.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))) {
					mime = matches[1];
					if (matches[2]) {
						charset = matches[2];
					}
				}

				if (!Mime.mimes[mime]) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}

				// 3-4
				_finalMime = mime;
				_finalCharset = charset;
			},
			
			/**
			Initiates the request. The optional argument provides the request entity body.
			The argument is ignored if request method is GET or HEAD.

			Throws an "InvalidStateError" exception if the state is not OPENED or if the send() flag is set.

			@method send
			@param {Blob|Document|String|FormData} [data] Request entity body
			@param {Object} [options] Set of requirements and pre-requisities for runtime initialization
			*/
			send: function(data, options) {					
				if (Basic.typeOf(options) === 'string') {
					_options = { ruid: options };
				} else if (!options) {
					_options = {};
				} else {
					_options = options;
				}
													
				this.convertEventPropsToHandlers(dispatches);
				this.upload.convertEventPropsToHandlers(dispatches);
															
				// 1-2
				if (this.readyState !== XMLHttpRequest.OPENED || _send_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}
				
				// 3					
				// sending Blob
				if (data instanceof Blob) {
					_options.ruid = data.ruid;
					_mimeType = data.type || 'application/octet-stream';
				}
				
				// FormData
				else if (data instanceof FormData) {
					if (data.hasBlob()) {
						var blob = data.getBlob();
						_options.ruid = blob.ruid;
						_mimeType = blob.type || 'application/octet-stream';
					}
				}
				
				// DOMString
				else if (typeof data === 'string') {
					_encoding = 'UTF-8';
					_mimeType = 'text/plain;charset=UTF-8';
					
					// data should be converted to Unicode and encoded as UTF-8
					data = Encode.utf8_encode(data);
				}

				// if withCredentials not set, but requested, set it automatically
				if (!this.withCredentials) {
					this.withCredentials = (_options.required_caps && _options.required_caps.send_browser_cookies) && !_same_origin_flag;
				}

				// 4 - storage mutex
				// 5
				_upload_events_flag = (!_sync_flag && this.upload.hasEventListener()); // DSAP
				// 6
				_error_flag = false;
				// 7
				_upload_complete_flag = !data;
				// 8 - Asynchronous steps
				if (!_sync_flag) {
					// 8.1
					_send_flag = true;
					// 8.2
					// this.dispatchEvent('loadstart'); // will be dispatched either by native or runtime xhr
					// 8.3
					//if (!_upload_complete_flag) {
						// this.upload.dispatchEvent('loadstart');	// will be dispatched either by native or runtime xhr
					//}
				}
				// 8.5 - Return the send() method call, but continue running the steps in this algorithm.
				_doXHR.call(this, data);
			},
			
			/**
			Cancels any network activity.
			
			@method abort
			*/
			abort: function() {
				_error_flag = true;
				_sync_flag = false;

				if (!~Basic.inArray(_p('readyState'), [XMLHttpRequest.UNSENT, XMLHttpRequest.OPENED, XMLHttpRequest.DONE])) {
					_p('readyState', XMLHttpRequest.DONE);
					_send_flag = false;

					if (_xhr) {
						_xhr.getRuntime().exec.call(_xhr, 'XMLHttpRequest', 'abort', _upload_complete_flag);
					} else {
						throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
					}

					_upload_complete_flag = true;
				} else {
					_p('readyState', XMLHttpRequest.UNSENT);
				}
			},

			destroy: function() {
				if (_xhr) {
					if (Basic.typeOf(_xhr.destroy) === 'function') {
						_xhr.destroy();
					}
					_xhr = null;
				}

				this.unbindAll();

				if (this.upload) {
					this.upload.unbindAll();
					this.upload = null;
				}
			}
		});

		/* this is nice, but maybe too lengthy

		// if supported by JS version, set getters/setters for specific properties
		o.defineProperty(this, 'readyState', {
			configurable: false,

			get: function() {
				return _p('readyState');
			}
		});

		o.defineProperty(this, 'timeout', {
			configurable: false,

			get: function() {
				return _p('timeout');
			},

			set: function(value) {

				if (_sync_flag) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}

				// timeout still should be measured relative to the start time of request
				_timeoutset_time = (new Date).getTime();

				_p('timeout', value);
			}
		});

		// the withCredentials attribute has no effect when fetching same-origin resources
		o.defineProperty(this, 'withCredentials', {
			configurable: false,

			get: function() {
				return _p('withCredentials');
			},

			set: function(value) {
				// 1-2
				if (!~o.inArray(_p('readyState'), [XMLHttpRequest.UNSENT, XMLHttpRequest.OPENED]) || _send_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 3-4
				if (_anonymous_flag || _sync_flag) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}

				// 5
				_p('withCredentials', value);
			}
		});

		o.defineProperty(this, 'status', {
			configurable: false,

			get: function() {
				return _p('status');
			}
		});

		o.defineProperty(this, 'statusText', {
			configurable: false,

			get: function() {
				return _p('statusText');
			}
		});

		o.defineProperty(this, 'responseType', {
			configurable: false,

			get: function() {
				return _p('responseType');
			},

			set: function(value) {
				// 1
				if (!!~o.inArray(_p('readyState'), [XMLHttpRequest.LOADING, XMLHttpRequest.DONE])) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 2
				if (_sync_flag) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}

				// 3
				_p('responseType', value.toLowerCase());
			}
		});

		o.defineProperty(this, 'responseText', {
			configurable: false,

			get: function() {
				// 1
				if (!~o.inArray(_p('responseType'), ['', 'text'])) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 2-3
				if (_p('readyState') !== XMLHttpRequest.DONE && _p('readyState') !== XMLHttpRequest.LOADING || _error_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				return _p('responseText');
			}
		});

		o.defineProperty(this, 'responseXML', {
			configurable: false,

			get: function() {
				// 1
				if (!~o.inArray(_p('responseType'), ['', 'document'])) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 2-3
				if (_p('readyState') !== XMLHttpRequest.DONE || _error_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				return _p('responseXML');
			}
		});

		o.defineProperty(this, 'response', {
			configurable: false,

			get: function() {
				if (!!~o.inArray(_p('responseType'), ['', 'text'])) {
					if (_p('readyState') !== XMLHttpRequest.DONE && _p('readyState') !== XMLHttpRequest.LOADING || _error_flag) {
						return '';
					}
				}

				if (_p('readyState') !== XMLHttpRequest.DONE || _error_flag) {
					return null;
				}

				return _p('response');
			}
		});

		*/

		function _p(prop, value) {
			if (!props.hasOwnProperty(prop)) {
				return;
			}
			if (arguments.length === 1) { // get
				return Env.can('define_property') ? props[prop] : self[prop];
			} else { // set
				if (Env.can('define_property')) {
					props[prop] = value;
				} else {
					self[prop] = value;
				}
			}
		}
		
		/*
		function _toASCII(str, AllowUnassigned, UseSTD3ASCIIRules) {
			// TODO: http://tools.ietf.org/html/rfc3490#section-4.1
			return str.toLowerCase();
		}
		*/
		
		
		function _doXHR(data) {
			var self = this;
			
			_start_time = new Date().getTime();

			_xhr = new RuntimeTarget();

			function loadEnd() {
				if (_xhr) { // it could have been destroyed by now
					_xhr.destroy();
					_xhr = null;
				}
				self.dispatchEvent('loadend');
				self = null;
			}

			function exec(runtime) {
				_xhr.bind('LoadStart', function(e) {
					_p('readyState', XMLHttpRequest.LOADING);
					self.dispatchEvent('readystatechange');

					self.dispatchEvent(e);
					
					if (_upload_events_flag) {
						self.upload.dispatchEvent(e);
					}
				});
				
				_xhr.bind('Progress', function(e) {
					if (_p('readyState') !== XMLHttpRequest.LOADING) {
						_p('readyState', XMLHttpRequest.LOADING); // LoadStart unreliable (in Flash for example)
						self.dispatchEvent('readystatechange');
					}
					self.dispatchEvent(e);
				});
				
				_xhr.bind('UploadProgress', function(e) {
					if (_upload_events_flag) {
						self.upload.dispatchEvent({
							type: 'progress',
							lengthComputable: false,
							total: e.total,
							loaded: e.loaded
						});
					}
				});
				
				_xhr.bind('Load', function(e) {
					_p('readyState', XMLHttpRequest.DONE);
					_p('status', Number(runtime.exec.call(_xhr, 'XMLHttpRequest', 'getStatus') || 0));
					_p('statusText', httpCode[_p('status')] || "");
					
					_p('response', runtime.exec.call(_xhr, 'XMLHttpRequest', 'getResponse', _p('responseType')));

					if (!!~Basic.inArray(_p('responseType'), ['text', ''])) {
						_p('responseText', _p('response'));
					} else if (_p('responseType') === 'document') {
						_p('responseXML', _p('response'));
					}

					_responseHeaders = runtime.exec.call(_xhr, 'XMLHttpRequest', 'getAllResponseHeaders');

					self.dispatchEvent('readystatechange');
					
					if (_p('status') > 0) { // status 0 usually means that server is unreachable
						if (_upload_events_flag) {
							self.upload.dispatchEvent(e);
						}
						self.dispatchEvent(e);
					} else {
						_error_flag = true;
						self.dispatchEvent('error');
					}
					loadEnd();
				});

				_xhr.bind('Abort', function(e) {
					self.dispatchEvent(e);
					loadEnd();
				});
				
				_xhr.bind('Error', function(e) {
					_error_flag = true;
					_p('readyState', XMLHttpRequest.DONE);
					self.dispatchEvent('readystatechange');
					_upload_complete_flag = true;
					self.dispatchEvent(e);
					loadEnd();
				});

				runtime.exec.call(_xhr, 'XMLHttpRequest', 'send', {
					url: _url,
					method: _method,
					async: _async,
					user: _user,
					password: _password,
					headers: _headers,
					mimeType: _mimeType,
					encoding: _encoding,
					responseType: self.responseType,
					withCredentials: self.withCredentials,
					options: _options
				}, data);
			}

			// clarify our requirements
			if (typeof(_options.required_caps) === 'string') {
				_options.required_caps = Runtime.parseCaps(_options.required_caps);
			}

			_options.required_caps = Basic.extend({}, _options.required_caps, {
				return_response_type: self.responseType
			});

			if (data instanceof FormData) {
				_options.required_caps.send_multipart = true;
			}

			if (!_same_origin_flag) {
				_options.required_caps.do_cors = true;
			}
			

			if (_options.ruid) { // we do not need to wait if we can connect directly
				exec(_xhr.connectRuntime(_options));
			} else {
				_xhr.bind('RuntimeInit', function(e, runtime) {
					exec(runtime);
				});
				_xhr.bind('RuntimeError', function(e, err) {
					self.dispatchEvent('RuntimeError', err);
				});
				_xhr.connectRuntime(_options);
			}
		}
	
		
		function _reset() {
			_p('responseText', "");
			_p('responseXML', null);
			_p('response', null);
			_p('status', 0);
			_p('statusText', "");
			_start_time = _timeoutset_time = null;
		}
	}

	XMLHttpRequest.UNSENT = 0;
	XMLHttpRequest.OPENED = 1;
	XMLHttpRequest.HEADERS_RECEIVED = 2;
	XMLHttpRequest.LOADING = 3;
	XMLHttpRequest.DONE = 4;
	
	XMLHttpRequest.prototype = EventTarget.instance;

	return XMLHttpRequest;
});

// Included from: src/javascript/runtime/Transporter.js

/**
 * Transporter.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/runtime/Transporter", [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Encode",
	"moxie/runtime/RuntimeClient",
	"moxie/core/EventTarget"
], function(Basic, Encode, RuntimeClient, EventTarget) {
	function Transporter() {
		var mod, _runtime, _data, _size, _pos, _chunk_size;

		RuntimeClient.call(this);

		Basic.extend(this, {
			uid: Basic.guid('uid_'),

			state: Transporter.IDLE,

			result: null,

			transport: function(data, type, options) {
				var self = this;

				options = Basic.extend({
					chunk_size: 204798
				}, options);

				// should divide by three, base64 requires this
				if ((mod = options.chunk_size % 3)) {
					options.chunk_size += 3 - mod;
				}

				_chunk_size = options.chunk_size;

				_reset.call(this);
				_data = data;
				_size = data.length;

				if (Basic.typeOf(options) === 'string' || options.ruid) {
					_run.call(self, type, this.connectRuntime(options));
				} else {
					// we require this to run only once
					var cb = function(e, runtime) {
						self.unbind("RuntimeInit", cb);
						_run.call(self, type, runtime);
					};
					this.bind("RuntimeInit", cb);
					this.connectRuntime(options);
				}
			},

			abort: function() {
				var self = this;

				self.state = Transporter.IDLE;
				if (_runtime) {
					_runtime.exec.call(self, 'Transporter', 'clear');
					self.trigger("TransportingAborted");
				}

				_reset.call(self);
			},


			destroy: function() {
				this.unbindAll();
				_runtime = null;
				this.disconnectRuntime();
				_reset.call(this);
			}
		});

		function _reset() {
			_size = _pos = 0;
			_data = this.result = null;
		}

		function _run(type, runtime) {
			var self = this;

			_runtime = runtime;

			//self.unbind("RuntimeInit");

			self.bind("TransportingProgress", function(e) {
				_pos = e.loaded;

				if (_pos < _size && Basic.inArray(self.state, [Transporter.IDLE, Transporter.DONE]) === -1) {
					_transport.call(self);
				}
			}, 999);

			self.bind("TransportingComplete", function() {
				_pos = _size;
				self.state = Transporter.DONE;
				_data = null; // clean a bit
				self.result = _runtime.exec.call(self, 'Transporter', 'getAsBlob', type || '');
			}, 999);

			self.state = Transporter.BUSY;
			self.trigger("TransportingStarted");
			_transport.call(self);
		}

		function _transport() {
			var self = this,
				chunk,
				bytesLeft = _size - _pos;

			if (_chunk_size > bytesLeft) {
				_chunk_size = bytesLeft;
			}

			chunk = Encode.btoa(_data.substr(_pos, _chunk_size));
			_runtime.exec.call(self, 'Transporter', 'receive', chunk, _size);
		}
	}

	Transporter.IDLE = 0;
	Transporter.BUSY = 1;
	Transporter.DONE = 2;

	Transporter.prototype = EventTarget.instance;

	return Transporter;
});

// Included from: src/javascript/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/image/Image", [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/Exceptions",
	"moxie/file/FileReaderSync",
	"moxie/xhr/XMLHttpRequest",
	"moxie/runtime/Runtime",
	"moxie/runtime/RuntimeClient",
	"moxie/runtime/Transporter",
	"moxie/core/utils/Env",
	"moxie/core/EventTarget",
	"moxie/file/Blob",
	"moxie/file/File",
	"moxie/core/utils/Encode"
], function(Basic, Dom, x, FileReaderSync, XMLHttpRequest, Runtime, RuntimeClient, Transporter, Env, EventTarget, Blob, File, Encode) {
	/**
	Image preloading and manipulation utility. Additionally it provides access to image meta info (Exif, GPS) and raw binary data.

	@class Image
	@constructor
	@extends EventTarget
	*/
	var dispatches = [
		'progress',

		/**
		Dispatched when loading is complete.

		@event load
		@param {Object} event
		*/
		'load',

		'error',

		/**
		Dispatched when resize operation is complete.
		
		@event resize
		@param {Object} event
		*/
		'resize',

		/**
		Dispatched when visual representation of the image is successfully embedded
		into the corresponsing container.

		@event embedded
		@param {Object} event
		*/
		'embedded'
	];

	function Image() {
		RuntimeClient.call(this);

		Basic.extend(this, {
			/**
			Unique id of the component

			@property uid
			@type {String}
			*/
			uid: Basic.guid('uid_'),

			/**
			Unique id of the connected runtime, if any.

			@property ruid
			@type {String}
			*/
			ruid: null,

			/**
			Name of the file, that was used to create an image, if available. If not equals to empty string.

			@property name
			@type {String}
			@default ""
			*/
			name: "",

			/**
			Size of the image in bytes. Actual value is set only after image is preloaded.

			@property size
			@type {Number}
			@default 0
			*/
			size: 0,

			/**
			Width of the image. Actual value is set only after image is preloaded.

			@property width
			@type {Number}
			@default 0
			*/
			width: 0,

			/**
			Height of the image. Actual value is set only after image is preloaded.

			@property height
			@type {Number}
			@default 0
			*/
			height: 0,

			/**
			Mime type of the image. Currently only image/jpeg and image/png are supported. Actual value is set only after image is preloaded.

			@property type
			@type {String}
			@default ""
			*/
			type: "",

			/**
			Holds meta info (Exif, GPS). Is populated only for image/jpeg. Actual value is set only after image is preloaded.

			@property meta
			@type {Object}
			@default {}
			*/
			meta: {},

			/**
			Alias for load method, that takes another mOxie.Image object as a source (see load).

			@method clone
			@param {Image} src Source for the image
			@param {Boolean} [exact=false] Whether to activate in-depth clone mode
			*/
			clone: function() {
				this.load.apply(this, arguments);
			},

			/**
			Loads image from various sources. Currently the source for new image can be: mOxie.Image, mOxie.Blob/mOxie.File, 
			native Blob/File, dataUrl or URL. Depending on the type of the source, arguments - differ. When source is URL, 
			Image will be downloaded from remote destination and loaded in memory.

			@example
				var img = new mOxie.Image();
				img.onload = function() {
					var blob = img.getAsBlob();
					
					var formData = new mOxie.FormData();
					formData.append('file', blob);

					var xhr = new mOxie.XMLHttpRequest();
					xhr.onload = function() {
						// upload complete
					};
					xhr.open('post', 'upload.php');
					xhr.send(formData);
				};
				img.load("http://www.moxiecode.com/images/mox-logo.jpg"); // notice file extension (.jpg)
			

			@method load
			@param {Image|Blob|File|String} src Source for the image
			@param {Boolean|Object} [mixed]
			*/
			load: function() {
				// this is here because to bind properly we need an uid first, which is created above
				this.bind('Load Resize', function() {
					_updateInfo.call(this);
				}, 999);

				this.convertEventPropsToHandlers(dispatches);

				_load.apply(this, arguments);
			},

			/**
			Downsizes the image to fit the specified width/height. If crop is supplied, image will be cropped to exact dimensions.

			@method downsize
			@param {Number} width Resulting width
			@param {Number} [height=width] Resulting height (optional, if not supplied will default to width)
			@param {Boolean} [crop=false] Whether to crop the image to exact dimensions
			@param {Boolean} [preserveHeaders=true] Whether to preserve meta headers (on JPEGs after resize)
			*/
			downsize: function(opts) {
				var defaults = {
					width: this.width,
					height: this.height,
					crop: false,
					preserveHeaders: true
				};

				if (typeof(opts) === 'object') {
					opts = Basic.extend(defaults, opts);
				} else {
					opts = Basic.extend(defaults, {
						width: arguments[0],
						height: arguments[1],
						crop: arguments[2],
						preserveHeaders: arguments[3]
					});
				}

				try {
					if (!this.size) { // only preloaded image objects can be used as source
						throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
					}

					// no way to reliably intercept the crash due to high resolution, so we simply avoid it
					if (this.width > Image.MAX_RESIZE_WIDTH || this.height > Image.MAX_RESIZE_HEIGHT) {
						throw new x.ImageError(x.ImageError.MAX_RESOLUTION_ERR);
					}

					this.getRuntime().exec.call(this, 'Image', 'downsize', opts.width, opts.height, opts.crop, opts.preserveHeaders);
				} catch(ex) {
					// for now simply trigger error event
					this.trigger('error', ex.code);
				}
			},

			/**
			Alias for downsize(width, height, true). (see downsize)
			
			@method crop
			@param {Number} width Resulting width
			@param {Number} [height=width] Resulting height (optional, if not supplied will default to width)
			@param {Boolean} [preserveHeaders=true] Whether to preserve meta headers (on JPEGs after resize)
			*/
			crop: function(width, height, preserveHeaders) {
				this.downsize(width, height, true, preserveHeaders);
			},

			getAsCanvas: function() {
				if (!Env.can('create_canvas')) {
					throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
				}

				var runtime = this.connectRuntime(this.ruid);
				return runtime.exec.call(this, 'Image', 'getAsCanvas');
			},

			/**
			Retrieves image in it's current state as mOxie.Blob object. Cannot be run on empty or image in progress (throws
			DOMException.INVALID_STATE_ERR).

			@method getAsBlob
			@param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
			@param {Number} [quality=90] Applicable only together with mime type image/jpeg
			@return {Blob} Image as Blob
			*/
			getAsBlob: function(type, quality) {
				if (!this.size) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				if (!type) {
					type = 'image/jpeg';
				}

				if (type === 'image/jpeg' && !quality) {
					quality = 90;
				}

				return this.getRuntime().exec.call(this, 'Image', 'getAsBlob', type, quality);
			},

			/**
			Retrieves image in it's current state as dataURL string. Cannot be run on empty or image in progress (throws
			DOMException.INVALID_STATE_ERR).

			@method getAsDataURL
			@param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
			@param {Number} [quality=90] Applicable only together with mime type image/jpeg
			@return {String} Image as dataURL string
			*/
			getAsDataURL: function(type, quality) {
				if (!this.size) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}
				return this.getRuntime().exec.call(this, 'Image', 'getAsDataURL', type, quality);
			},

			/**
			Retrieves image in it's current state as binary string. Cannot be run on empty or image in progress (throws
			DOMException.INVALID_STATE_ERR).

			@method getAsBinaryString
			@param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
			@param {Number} [quality=90] Applicable only together with mime type image/jpeg
			@return {String} Image as binary string
			*/
			getAsBinaryString: function(type, quality) {
				var dataUrl = this.getAsDataURL(type, quality);
				return Encode.atob(dataUrl.substring(dataUrl.indexOf('base64,') + 7));
			},

			/**
			Embeds a visual representation of the image into the specified node. Depending on the runtime, 
			it might be a canvas, an img node or a thrid party shim object (Flash or SilverLight - very rare, 
			can be used in legacy browsers that do not have canvas or proper dataURI support).

			@method embed
			@param {DOMElement} el DOM element to insert the image object into
			@param {Object} [options]
				@param {Number} [options.width] The width of an embed (defaults to the image width)
				@param {Number} [options.height] The height of an embed (defaults to the image height)
				@param {String} [type="image/jpeg"] Mime type
				@param {Number} [quality=90] Quality of an embed, if mime type is image/jpeg
				@param {Boolean} [crop=false] Whether to crop an embed to the specified dimensions
			*/
			embed: function(el) {
				var self = this
				, imgCopy
				, type, quality, crop
				, options = arguments[1] || {}
				, width = this.width
				, height = this.height
				, runtime // this has to be outside of all the closures to contain proper runtime
				;

				function onResize() {
					// if possible, embed a canvas element directly
					if (Env.can('create_canvas')) {
						var canvas = imgCopy.getAsCanvas();
						if (canvas) {
							el.appendChild(canvas);
							canvas = null;
							imgCopy.destroy();
							self.trigger('embedded');
							return;
						}
					}

					var dataUrl = imgCopy.getAsDataURL(type, quality);
					if (!dataUrl) {
						throw new x.ImageError(x.ImageError.WRONG_FORMAT);
					}

					if (Env.can('use_data_uri_of', dataUrl.length)) {
						el.innerHTML = '<img src="' + dataUrl + '" width="' + imgCopy.width + '" height="' + imgCopy.height + '" />';
						imgCopy.destroy();
						self.trigger('embedded');
					} else {
						var tr = new Transporter();

						tr.bind("TransportingComplete", function() {
							runtime = self.connectRuntime(this.result.ruid);

							self.bind("Embedded", function() {
								// position and size properly
								Basic.extend(runtime.getShimContainer().style, {
									//position: 'relative',
									top: '0px',
									left: '0px',
									width: imgCopy.width + 'px',
									height: imgCopy.height + 'px'
								});

								// some shims (Flash/SilverLight) reinitialize, if parent element is hidden, reordered or it's
								// position type changes (in Gecko), but since we basically need this only in IEs 6/7 and
								// sometimes 8 and they do not have this problem, we can comment this for now
								/*tr.bind("RuntimeInit", function(e, runtime) {
									tr.destroy();
									runtime.destroy();
									onResize.call(self); // re-feed our image data
								});*/

								runtime = null;
							}, 999);

							runtime.exec.call(self, "ImageView", "display", this.result.uid, width, height);
							imgCopy.destroy();
						});

						tr.transport(Encode.atob(dataUrl.substring(dataUrl.indexOf('base64,') + 7)), type, Basic.extend({}, options, {
							required_caps: {
								display_media: true
							},
							runtime_order: 'flash,silverlight',
							container: el
						}));
					}
				}

				try {
					if (!(el = Dom.get(el))) {
						throw new x.DOMException(x.DOMException.INVALID_NODE_TYPE_ERR);
					}

					if (!this.size) { // only preloaded image objects can be used as source
						throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
					}

					if (this.width > Image.MAX_RESIZE_WIDTH || this.height > Image.MAX_RESIZE_HEIGHT) {
						throw new x.ImageError(x.ImageError.MAX_RESOLUTION_ERR);
					}

					type = options.type || this.type || 'image/jpeg';
					quality = options.quality || 90;
					crop = Basic.typeOf(options.crop) !== 'undefined' ? options.crop : false;

					// figure out dimensions for the thumb
					if (options.width) {
						width = options.width;
						height = options.height || width;
					} else {
						// if container element has measurable dimensions, use them
						var dimensions = Dom.getSize(el);
						if (dimensions.w && dimensions.h) { // both should be > 0
							width = dimensions.w;
							height = dimensions.h;
						}
					}

					imgCopy = new Image();

					imgCopy.bind("Resize", function() {
						onResize.call(self);
					});

					imgCopy.bind("Load", function() {
						imgCopy.downsize(width, height, crop, false);
					});

					imgCopy.clone(this, false);

					return imgCopy;
				} catch(ex) {
					// for now simply trigger error event
					this.trigger('error', ex.code);
				}
			},

			/**
			Properly destroys the image and frees resources in use. If any. Recommended way to dispose mOxie.Image object.

			@method destroy
			*/
			destroy: function() {
				if (this.ruid) {
					this.getRuntime().exec.call(this, 'Image', 'destroy');
					this.disconnectRuntime();
				}
				this.unbindAll();
			}
		});


		function _updateInfo(info) {
			if (!info) {
				info = this.getRuntime().exec.call(this, 'Image', 'getInfo');
			}

			this.size = info.size;
			this.width = info.width;
			this.height = info.height;
			this.type = info.type;
			this.meta = info.meta;

			// update file name, only if empty
			if (this.name === '') {
				this.name = info.name;
			}
		}
		

		function _load(src) {
			var srcType = Basic.typeOf(src);

			try {
				// if source is Image
				if (src instanceof Image) {
					if (!src.size) { // only preloaded image objects can be used as source
						throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
					}
					_loadFromImage.apply(this, arguments);
				}
				// if source is o.Blob/o.File
				else if (src instanceof Blob) {
					if (!~Basic.inArray(src.type, ['image/jpeg', 'image/png'])) {
						throw new x.ImageError(x.ImageError.WRONG_FORMAT);
					}
					_loadFromBlob.apply(this, arguments);
				}
				// if native blob/file
				else if (Basic.inArray(srcType, ['blob', 'file']) !== -1) {
					_load.call(this, new File(null, src), arguments[1]);
				}
				// if String
				else if (srcType === 'string') {
					// if dataUrl String
					if (/^data:[^;]*;base64,/.test(src)) {
						_load.call(this, new Blob(null, { data: src }), arguments[1]);
					}
					// else assume Url, either relative or absolute
					else {
						_loadFromUrl.apply(this, arguments);
					}
				}
				// if source seems to be an img node
				else if (srcType === 'node' && src.nodeName.toLowerCase() === 'img') {
					_load.call(this, src.src, arguments[1]);
				}
				else {
					throw new x.DOMException(x.DOMException.TYPE_MISMATCH_ERR);
				}
			} catch(ex) {
				// for now simply trigger error event
				this.trigger('error', ex.code);
			}
		}


		function _loadFromImage(img, exact) {
			var runtime = this.connectRuntime(img.ruid);
			this.ruid = runtime.uid;
			runtime.exec.call(this, 'Image', 'loadFromImage', img, (Basic.typeOf(exact) === 'undefined' ? true : exact));
		}


		function _loadFromBlob(blob, options) {
			var self = this;

			self.name = blob.name || '';

			function exec(runtime) {
				self.ruid = runtime.uid;
				runtime.exec.call(self, 'Image', 'loadFromBlob', blob);
			}

			if (blob.isDetached()) {
				this.bind('RuntimeInit', function(e, runtime) {
					exec(runtime);
				});

				// convert to object representation
				if (options && typeof(options.required_caps) === 'string') {
					options.required_caps = Runtime.parseCaps(options.required_caps);
				}

				this.connectRuntime(Basic.extend({
					required_caps: {
						access_image_binary: true,
						resize_image: true
					}
				}, options));
			} else {
				exec(this.connectRuntime(blob.ruid));
			}
		}


		function _loadFromUrl(url, options) {
			var self = this, xhr;

			xhr = new XMLHttpRequest();

			xhr.open('get', url);
			xhr.responseType = 'blob';

			xhr.onprogress = function(e) {
				self.trigger(e);
			};

			xhr.onload = function() {
				_loadFromBlob.call(self, xhr.response, true);
			};

			xhr.onerror = function(e) {
				self.trigger(e);
			};

			xhr.onloadend = function() {
				xhr.destroy();
			};

			xhr.bind('RuntimeError', function(e, err) {
				self.trigger('RuntimeError', err);
			});

			xhr.send(null, options);
		}
	}

	// virtual world will crash on you if image has a resolution higher than this:
	Image.MAX_RESIZE_WIDTH = 6500;
	Image.MAX_RESIZE_HEIGHT = 6500; 

	Image.prototype = EventTarget.instance;

	return Image;
});

// Included from: src/javascript/runtime/html5/Runtime.js

/**
 * Runtime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global File:true */

/**
Defines constructor for HTML5 runtime.

@class moxie/runtime/html5/Runtime
@private
*/
define("moxie/runtime/html5/Runtime", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/runtime/Runtime",
	"moxie/core/utils/Env"
], function(Basic, x, Runtime, Env) {
	
	var type = "html5", extensions = {};
	
	function Html5Runtime(options) {
		var I = this
		, Test = Runtime.capTest
		, True = Runtime.capTrue
		;

		var caps = Basic.extend({
				access_binary: Test(window.FileReader || window.File && window.File.getAsDataURL),
				access_image_binary: function() {
					return I.can('access_binary') && !!extensions.Image;
				},
				display_media: Test(Env.can('create_canvas') || Env.can('use_data_uri_over32kb')),
				do_cors: Test(window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()),
				drag_and_drop: Test(function() {
					// this comes directly from Modernizr: http://www.modernizr.com/
					var div = document.createElement('div');
					// IE has support for drag and drop since version 5, but doesn't support dropping files from desktop
					return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && (Env.browser !== 'IE' || Env.version > 9);
				}()),
				filter_by_extension: Test(function() { // if you know how to feature-detect this, please suggest
					return (Env.browser === 'Chrome' && Env.version >= 28) || (Env.browser === 'IE' && Env.version >= 10);
				}()),
				return_response_headers: True,
				return_response_type: function(responseType) {
					if (responseType === 'json' && !!window.JSON) { // we can fake this one even if it's not supported
						return true;
					} 
					return Env.can('return_response_type', responseType);
				},
				return_status_code: True,
				report_upload_progress: Test(window.XMLHttpRequest && new XMLHttpRequest().upload),
				resize_image: function() {
					return I.can('access_binary') && Env.can('create_canvas');
				},
				select_file: function() {
					return Env.can('use_fileinput') && window.File;
				},
				select_folder: function() {
					return I.can('select_file') && Env.browser === 'Chrome' && Env.version >= 21;
				},
				select_multiple: function() {
					// it is buggy on Safari Windows and iOS
					return I.can('select_file') && 
						!(Env.browser === 'Safari' && Env.os === 'Windows') && 
						!(Env.os === 'iOS' && Env.verComp(Env.osVersion, "7.0.4", '<'));
				},
				send_binary_string: Test(window.XMLHttpRequest && (new XMLHttpRequest().sendAsBinary || (window.Uint8Array && window.ArrayBuffer))),
				send_custom_headers: Test(window.XMLHttpRequest),
				send_multipart: function() {
					return !!(window.XMLHttpRequest && new XMLHttpRequest().upload && window.FormData) || I.can('send_binary_string');
				},
				slice_blob: Test(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
				stream_upload: function(){
					return I.can('slice_blob') && I.can('send_multipart');
				},
				summon_file_dialog: Test(function() { // yeah... some dirty sniffing here...
					return (Env.browser === 'Firefox' && Env.version >= 4) ||
						(Env.browser === 'Opera' && Env.version >= 12) ||
						(Env.browser === 'IE' && Env.version >= 10) ||
						!!~Basic.inArray(Env.browser, ['Chrome', 'Safari']);
				}()),
				upload_filesize: True
			}, 
			arguments[2]
		);

		Runtime.call(this, options, (arguments[1] || type), caps);


		Basic.extend(this, {

			init : function() {
				this.trigger("Init");
			},

			destroy: (function(destroy) { // extend default destroy method
				return function() {
					destroy.call(I);
					destroy = I = null;
				};
			}(this.destroy))
		});

		Basic.extend(this.getShim(), extensions);
	}

	Runtime.addConstructor(type, Html5Runtime);

	return extensions;
});

// Included from: src/javascript/runtime/html5/file/Blob.js

/**
 * Blob.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/file/Blob
@private
*/
define("moxie/runtime/html5/file/Blob", [
	"moxie/runtime/html5/Runtime",
	"moxie/file/Blob"
], function(extensions, Blob) {

	function HTML5Blob() {
		function w3cBlobSlice(blob, start, end) {
			var blobSlice;

			if (window.File.prototype.slice) {
				try {
					blob.slice();	// depricated version will throw WRONG_ARGUMENTS_ERR exception
					return blob.slice(start, end);
				} catch (e) {
					// depricated slice method
					return blob.slice(start, end - start);
				}
			// slice method got prefixed: https://bugzilla.mozilla.org/show_bug.cgi?id=649672
			} else if ((blobSlice = window.File.prototype.webkitSlice || window.File.prototype.mozSlice)) {
				return blobSlice.call(blob, start, end);
			} else {
				return null; // or throw some exception
			}
		}

		this.slice = function() {
			return new Blob(this.getRuntime().uid, w3cBlobSlice.apply(this, arguments));
		};
	}

	return (extensions.Blob = HTML5Blob);
});

// Included from: src/javascript/core/utils/Events.js

/**
 * Events.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Events', [
	'moxie/core/utils/Basic'
], function(Basic) {
	var eventhash = {}, uid = 'moxie_' + Basic.guid();
	
	// IE W3C like event funcs
	function preventDefault() {
		this.returnValue = false;
	}

	function stopPropagation() {
		this.cancelBubble = true;
	}

	/**
	Adds an event handler to the specified object and store reference to the handler
	in objects internal Plupload registry (@see removeEvent).
	
	@method addEvent
	@for Utils
	@static
	@param {Object} obj DOM element like object to add handler to.
	@param {String} name Name to add event listener to.
	@param {Function} callback Function to call when event occurs.
	@param {String} [key] that might be used to add specifity to the event record.
	*/
	var addEvent = function(obj, name, callback, key) {
		var func, events;
					
		name = name.toLowerCase();

		// Add event listener
		if (obj.addEventListener) {
			func = callback;
			
			obj.addEventListener(name, func, false);
		} else if (obj.attachEvent) {
			func = function() {
				var evt = window.event;

				if (!evt.target) {
					evt.target = evt.srcElement;
				}

				evt.preventDefault = preventDefault;
				evt.stopPropagation = stopPropagation;

				callback(evt);
			};

			obj.attachEvent('on' + name, func);
		}
		
		// Log event handler to objects internal mOxie registry
		if (!obj[uid]) {
			obj[uid] = Basic.guid();
		}
		
		if (!eventhash.hasOwnProperty(obj[uid])) {
			eventhash[obj[uid]] = {};
		}
		
		events = eventhash[obj[uid]];
		
		if (!events.hasOwnProperty(name)) {
			events[name] = [];
		}
				
		events[name].push({
			func: func,
			orig: callback, // store original callback for IE
			key: key
		});
	};
	
	
	/**
	Remove event handler from the specified object. If third argument (callback)
	is not specified remove all events with the specified name.
	
	@method removeEvent
	@static
	@param {Object} obj DOM element to remove event listener(s) from.
	@param {String} name Name of event listener to remove.
	@param {Function|String} [callback] might be a callback or unique key to match.
	*/
	var removeEvent = function(obj, name, callback) {
		var type, undef;
		
		name = name.toLowerCase();
		
		if (obj[uid] && eventhash[obj[uid]] && eventhash[obj[uid]][name]) {
			type = eventhash[obj[uid]][name];
		} else {
			return;
		}
			
		for (var i = type.length - 1; i >= 0; i--) {
			// undefined or not, key should match
			if (type[i].orig === callback || type[i].key === callback) {
				if (obj.removeEventListener) {
					obj.removeEventListener(name, type[i].func, false);
				} else if (obj.detachEvent) {
					obj.detachEvent('on'+name, type[i].func);
				}
				
				type[i].orig = null;
				type[i].func = null;
				type.splice(i, 1);
				
				// If callback was passed we are done here, otherwise proceed
				if (callback !== undef) {
					break;
				}
			}
		}
		
		// If event array got empty, remove it
		if (!type.length) {
			delete eventhash[obj[uid]][name];
		}
		
		// If mOxie registry has become empty, remove it
		if (Basic.isEmptyObj(eventhash[obj[uid]])) {
			delete eventhash[obj[uid]];
			
			// IE doesn't let you remove DOM object property with - delete
			try {
				delete obj[uid];
			} catch(e) {
				obj[uid] = undef;
			}
		}
	};
	
	
	/**
	Remove all kind of events from the specified object
	
	@method removeAllEvents
	@static
	@param {Object} obj DOM element to remove event listeners from.
	@param {String} [key] unique key to match, when removing events.
	*/
	var removeAllEvents = function(obj, key) {		
		if (!obj || !obj[uid]) {
			return;
		}
		
		Basic.each(eventhash[obj[uid]], function(events, name) {
			removeEvent(obj, name, key);
		});
	};

	return {
		addEvent: addEvent,
		removeEvent: removeEvent,
		removeAllEvents: removeAllEvents
	};
});

// Included from: src/javascript/runtime/html5/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/file/FileInput
@private
*/
define("moxie/runtime/html5/file/FileInput", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/utils/Events",
	"moxie/core/utils/Mime",
	"moxie/core/utils/Env"
], function(extensions, Basic, Dom, Events, Mime, Env) {
	
	function FileInput() {
		var _files = [], _options;

		Basic.extend(this, {
			init: function(options) {
				var comp = this, I = comp.getRuntime(), input, shimContainer, mimes, browseButton, zIndex, top;

				_options = options;
				_files = [];

				// figure out accept string
				mimes = _options.accept.mimes || Mime.extList2mimes(_options.accept, I.can('filter_by_extension'));

				shimContainer = I.getShimContainer();

				shimContainer.innerHTML = '<input id="' + I.uid +'" type="file" style="font-size:999px;opacity:0;"' +
					(_options.multiple && I.can('select_multiple') ? 'multiple' : '') + 
					(_options.directory && I.can('select_folder') ? 'webkitdirectory directory' : '') + // Chrome 11+
					(mimes ? ' accept="' + mimes.join(',') + '"' : '') + ' />';

				input = Dom.get(I.uid);

				// prepare file input to be placed underneath the browse_button element
				Basic.extend(input.style, {
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				});


				browseButton = Dom.get(_options.browse_button);

				// Route click event to the input[type=file] element for browsers that support such behavior
				if (I.can('summon_file_dialog')) {
					if (Dom.getStyle(browseButton, 'position') === 'static') {
						browseButton.style.position = 'relative';
					}

					zIndex = parseInt(Dom.getStyle(browseButton, 'z-index'), 10) || 1;

					browseButton.style.zIndex = zIndex;
					shimContainer.style.zIndex = zIndex - 1;

					Events.addEvent(browseButton, 'click', function(e) {
						var input = Dom.get(I.uid);
						if (input && !input.disabled) { // for some reason FF (up to 8.0.1 so far) lets to click disabled input[type=file]
							input.click();
						}
						e.preventDefault();
					}, comp.uid);
				}

				/* Since we have to place input[type=file] on top of the browse_button for some browsers,
				browse_button loses interactivity, so we restore it here */
				top = I.can('summon_file_dialog') ? browseButton : shimContainer;

				Events.addEvent(top, 'mouseover', function() {
					comp.trigger('mouseenter');
				}, comp.uid);

				Events.addEvent(top, 'mouseout', function() {
					comp.trigger('mouseleave');
				}, comp.uid);

				Events.addEvent(top, 'mousedown', function() {
					comp.trigger('mousedown');
				}, comp.uid);

				Events.addEvent(Dom.get(_options.container), 'mouseup', function() {
					comp.trigger('mouseup');
				}, comp.uid);


				input.onchange = function onChange() { // there should be only one handler for this
					_files = [];

					if (_options.directory) {
						// folders are represented by dots, filter them out (Chrome 11+)
						Basic.each(this.files, function(file) {
							if (file.name !== ".") { // if it doesn't looks like a folder
								_files.push(file);
							}
						});
					} else {
						_files = [].slice.call(this.files);
					}

					// clearing the value enables the user to select the same file again if they want to
					if (Env.browser !== 'IE' && Env.browser !== 'IEMobile') {
						this.value = '';
					} else {
						// in IE input[type="file"] is read-only so the only way to reset it is to re-insert it
						var clone = this.cloneNode(true);
						this.parentNode.replaceChild(clone, this);
						clone.onchange = onChange;
					}
					comp.trigger('change');
				};

				// ready event is perfectly asynchronous
				comp.trigger({
					type: 'ready',
					async: true
				});

				shimContainer = null;
			},

			getFiles: function() {
				return _files;
			},

			disable: function(state) {
				var I = this.getRuntime(), input;

				if ((input = Dom.get(I.uid))) {
					input.disabled = !!state;
				}
			},

			destroy: function() {
				var I = this.getRuntime()
				, shim = I.getShim()
				, shimContainer = I.getShimContainer()
				;
				
				Events.removeAllEvents(shimContainer, this.uid);
				Events.removeAllEvents(_options && Dom.get(_options.container), this.uid);
				Events.removeAllEvents(_options && Dom.get(_options.browse_button), this.uid);
				
				if (shimContainer) {
					shimContainer.innerHTML = '';
				}

				shim.removeInstance(this.uid);

				_files = _options = shimContainer = shim = null;
			}
		});
	}

	return (extensions.FileInput = FileInput);
});

// Included from: src/javascript/runtime/html5/file/FileDrop.js

/**
 * FileDrop.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/file/FileDrop
@private
*/
define("moxie/runtime/html5/file/FileDrop", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/utils/Events",
	"moxie/core/utils/Mime"
], function(extensions, Basic, Dom, Events, Mime) {
	
	function FileDrop() {
		var _files = [], _allowedExts = [], _options;

		Basic.extend(this, {
			init: function(options) {
				var comp = this, dropZone;

				_options = options;
				_allowedExts = _extractExts(_options.accept);
				dropZone = _options.container;

				Events.addEvent(dropZone, 'dragover', function(e) {
					if (!_hasFiles(e)) {
						return;
					}
					e.preventDefault();
					e.dataTransfer.dropEffect = 'copy';
				}, comp.uid);

				Events.addEvent(dropZone, 'drop', function(e) {
					if (!_hasFiles(e)) {
						return;
					}
					e.preventDefault();

					_files = [];

					// Chrome 21+ accepts folders via Drag'n'Drop
					if (e.dataTransfer.items && e.dataTransfer.items[0].webkitGetAsEntry) {
						_readItems(e.dataTransfer.items, function() {
							comp.trigger("drop");
						});
					} else {
						Basic.each(e.dataTransfer.files, function(file) {
							if (_isAcceptable(file)) {
								_files.push(file);
							}
						});
						comp.trigger("drop");
					}
				}, comp.uid);

				Events.addEvent(dropZone, 'dragenter', function(e) {
					comp.trigger("dragenter");
				}, comp.uid);

				Events.addEvent(dropZone, 'dragleave', function(e) {
					comp.trigger("dragleave");
				}, comp.uid);
			},

			getFiles: function() {
				return _files;
			},

			destroy: function() {
				Events.removeAllEvents(_options && Dom.get(_options.container), this.uid);
				_files = _allowedExts = _options = null;
			}
		});


		function _hasFiles(e) {
			if (!e.dataTransfer || !e.dataTransfer.types) { // e.dataTransfer.files is not available in Gecko during dragover
				return false;
			}

			var types = Basic.toArray(e.dataTransfer.types || []);

			return Basic.inArray("Files", types) !== -1 ||
				Basic.inArray("public.file-url", types) !== -1 || // Safari < 5
				Basic.inArray("application/x-moz-file", types) !== -1 // Gecko < 1.9.2 (< Firefox 3.6)
				;
		}

		
		function _extractExts(accept) {
			var exts = [];
			for (var i = 0; i < accept.length; i++) {
				[].push.apply(exts, accept[i].extensions.split(/\s*,\s*/));
			}
			return Basic.inArray('*', exts) === -1 ? exts : [];
		}


		function _isAcceptable(file) {
			if (!_allowedExts.length) {
				return true;
			}
			var ext = Mime.getFileExtension(file.name);
			return !ext || Basic.inArray(ext, _allowedExts) !== -1;
		}


		function _readItems(items, cb) {
			var entries = [];
			Basic.each(items, function(item) {
				var entry = item.webkitGetAsEntry();
				// Address #998 (https://code.google.com/p/chromium/issues/detail?id=332579)
				if (entry) {
					// file() fails on OSX when the filename contains a special character (e.g. umlaut): see #61
					if (entry.isFile) {
						var file = item.getAsFile();
						if (_isAcceptable(file)) {
							_files.push(file);
						}
					} else {
						entries.push(entry);
					}
				}
			});

			if (entries.length) {
				_readEntries(entries, cb);
			} else {
				cb();
			}
		}


		function _readEntries(entries, cb) {
			var queue = [];
			Basic.each(entries, function(entry) {
				queue.push(function(cbcb) {
					_readEntry(entry, cbcb);
				});
			});
			Basic.inSeries(queue, function() {
				cb();
			});
		}


		function _readEntry(entry, cb) {
			if (entry.isFile) {
				entry.file(function(file) {
					if (_isAcceptable(file)) {
						_files.push(file);
					}
					cb();
				}, function() {
					// fire an error event maybe
					cb();
				});
			} else if (entry.isDirectory) {
				_readDirEntry(entry, cb);
			} else {
				cb(); // not file, not directory? what then?..
			}
		}


		function _readDirEntry(dirEntry, cb) {
			var entries = [], dirReader = dirEntry.createReader();

			// keep quering recursively till no more entries
			function getEntries(cbcb) {
				dirReader.readEntries(function(moreEntries) {
					if (moreEntries.length) {
						[].push.apply(entries, moreEntries);
						getEntries(cbcb);
					} else {
						cbcb();
					}
				}, cbcb);
			}

			// ...and you thought FileReader was crazy...
			getEntries(function() {
				_readEntries(entries, cb);
			}); 
		}
	}

	return (extensions.FileDrop = FileDrop);
});

// Included from: src/javascript/runtime/html5/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/file/FileReader
@private
*/
define("moxie/runtime/html5/file/FileReader", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Encode",
	"moxie/core/utils/Basic"
], function(extensions, Encode, Basic) {
	
	function FileReader() {
		var _fr, _convertToBinary = false;

		Basic.extend(this, {

			read: function(op, blob) {
				var target = this;

				_fr = new window.FileReader();

				_fr.addEventListener('progress', function(e) {
					target.trigger(e);
				});

				_fr.addEventListener('load', function(e) {
					target.trigger(e);
				});

				_fr.addEventListener('error', function(e) {
					target.trigger(e, _fr.error);
				});

				_fr.addEventListener('loadend', function() {
					_fr = null;
				});

				if (Basic.typeOf(_fr[op]) === 'function') {
					_convertToBinary = false;
					_fr[op](blob.getSource());
				} else if (op === 'readAsBinaryString') { // readAsBinaryString is depricated in general and never existed in IE10+
					_convertToBinary = true;
					_fr.readAsDataURL(blob.getSource());
				}
			},

			getResult: function() {
				return _fr && _fr.result ? (_convertToBinary ? _toBinary(_fr.result) : _fr.result) : null;
			},

			abort: function() {
				if (_fr) {
					_fr.abort();
				}
			},

			destroy: function() {
				_fr = null;
			}
		});

		function _toBinary(str) {
			return Encode.atob(str.substring(str.indexOf('base64,') + 7));
		}
	}

	return (extensions.FileReader = FileReader);
});

// Included from: src/javascript/runtime/html5/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global ActiveXObject:true */

/**
@class moxie/runtime/html5/xhr/XMLHttpRequest
@private
*/
define("moxie/runtime/html5/xhr/XMLHttpRequest", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Mime",
	"moxie/core/utils/Url",
	"moxie/file/File",
	"moxie/file/Blob",
	"moxie/xhr/FormData",
	"moxie/core/Exceptions",
	"moxie/core/utils/Env"
], function(extensions, Basic, Mime, Url, File, Blob, FormData, x, Env) {
	
	function XMLHttpRequest() {
		var self = this
		, _xhr
		, _filename
		;

		Basic.extend(this, {
			send: function(meta, data) {
				var target = this
				, isGecko2_5_6 = (Env.browser === 'Mozilla' && Env.version >= 4 && Env.version < 7)
				, isAndroidBrowser = Env.browser === 'Android Browser'
				, mustSendAsBinary = false
				;

				// extract file name
				_filename = meta.url.replace(/^.+?\/([\w\-\.]+)$/, '$1').toLowerCase();

				_xhr = _getNativeXHR();
				_xhr.open(meta.method, meta.url, meta.async, meta.user, meta.password);


				// prepare data to be sent
				if (data instanceof Blob) {
					if (data.isDetached()) {
						mustSendAsBinary = true;
					}
					data = data.getSource();
				} else if (data instanceof FormData) {

					if (data.hasBlob()) {
						if (data.getBlob().isDetached()) {
							data = _prepareMultipart.call(target, data); // _xhr must be instantiated and be in OPENED state
							mustSendAsBinary = true;
						} else if ((isGecko2_5_6 || isAndroidBrowser) && Basic.typeOf(data.getBlob().getSource()) === 'blob' && window.FileReader) {
							// Gecko 2/5/6 can't send blob in FormData: https://bugzilla.mozilla.org/show_bug.cgi?id=649150
							// Android browsers (default one and Dolphin) seem to have the same issue, see: #613
							_preloadAndSend.call(target, meta, data);
							return; // _preloadAndSend will reinvoke send() with transmutated FormData =%D
						}	
					}

					// transfer fields to real FormData
					if (data instanceof FormData) { // if still a FormData, e.g. not mangled by _prepareMultipart()
						var fd = new window.FormData();
						data.each(function(value, name) {
							if (value instanceof Blob) {
								fd.append(name, value.getSource());
							} else {
								fd.append(name, value);
							}
						});
						data = fd;
					}
				}


				// if XHR L2
				if (_xhr.upload) {
					if (meta.withCredentials) {
						_xhr.withCredentials = true;
					}

					_xhr.addEventListener('load', function(e) {
						target.trigger(e);
					});

					_xhr.addEventListener('error', function(e) {
						target.trigger(e);
					});

					// additionally listen to progress events
					_xhr.addEventListener('progress', function(e) {
						target.trigger(e);
					});

					_xhr.upload.addEventListener('progress', function(e) {
						target.trigger({
							type: 'UploadProgress',
							loaded: e.loaded,
							total: e.total
						});
					});
				// ... otherwise simulate XHR L2
				} else {
					_xhr.onreadystatechange = function onReadyStateChange() {
						
						// fake Level 2 events
						switch (_xhr.readyState) {
							
							case 1: // XMLHttpRequest.OPENED
								// readystatechanged is fired twice for OPENED state (in IE and Mozilla) - neu
								break;
							
							// looks like HEADERS_RECEIVED (state 2) is not reported in Opera (or it's old versions) - neu
							case 2: // XMLHttpRequest.HEADERS_RECEIVED
								break;
								
							case 3: // XMLHttpRequest.LOADING 
								// try to fire progress event for not XHR L2
								var total, loaded;
								
								try {
									if (Url.hasSameOrigin(meta.url)) { // Content-Length not accessible for cross-domain on some browsers
										total = _xhr.getResponseHeader('Content-Length') || 0; // old Safari throws an exception here
									}

									if (_xhr.responseText) { // responseText was introduced in IE7
										loaded = _xhr.responseText.length;
									}
								} catch(ex) {
									total = loaded = 0;
								}

								target.trigger({
									type: 'progress',
									lengthComputable: !!total,
									total: parseInt(total, 10),
									loaded: loaded
								});
								break;
								
							case 4: // XMLHttpRequest.DONE
								// release readystatechange handler (mostly for IE)
								_xhr.onreadystatechange = function() {};

								// usually status 0 is returned when server is unreachable, but FF also fails to status 0 for 408 timeout
								if (_xhr.status === 0) {
									target.trigger('error');
								} else {
									target.trigger('load');
								}							
								break;
						}
					};
				}
				

				// set request headers
				if (!Basic.isEmptyObj(meta.headers)) {
					Basic.each(meta.headers, function(value, header) {
						_xhr.setRequestHeader(header, value);
					});
				}

				// request response type
				if ("" !== meta.responseType && 'responseType' in _xhr) {
					if ('json' === meta.responseType && !Env.can('return_response_type', 'json')) { // we can fake this one
						_xhr.responseType = 'text';
					} else {
						_xhr.responseType = meta.responseType;
					}
				}

				// send ...
				if (!mustSendAsBinary) {
					_xhr.send(data);
				} else {
					if (_xhr.sendAsBinary) { // Gecko
						_xhr.sendAsBinary(data);
					} else { // other browsers having support for typed arrays
						(function() {
							// mimic Gecko's sendAsBinary
							var ui8a = new Uint8Array(data.length);
							for (var i = 0; i < data.length; i++) {
								ui8a[i] = (data.charCodeAt(i) & 0xff);
							}
							_xhr.send(ui8a.buffer);
						}());
					}
				}

				target.trigger('loadstart');
			},

			getStatus: function() {
				// according to W3C spec it should return 0 for readyState < 3, but instead it throws an exception
				try {
					if (_xhr) {
						return _xhr.status;
					}
				} catch(ex) {}
				return 0;
			},

			getResponse: function(responseType) {
				var I = this.getRuntime();

				try {
					switch (responseType) {
						case 'blob':
							var file = new File(I.uid, _xhr.response);
							
							// try to extract file name from content-disposition if possible (might be - not, if CORS for example)	
							var disposition = _xhr.getResponseHeader('Content-Disposition');
							if (disposition) {
								// extract filename from response header if available
								var match = disposition.match(/filename=([\'\"'])([^\1]+)\1/);
								if (match) {
									_filename = match[2];
								}
							}
							file.name = _filename;

							// pre-webkit Opera doesn't set type property on the blob response
							if (!file.type) {
								file.type = Mime.getFileMime(_filename);
							}
							return file;

						case 'json':
							if (!Env.can('return_response_type', 'json')) {
								return _xhr.status === 200 && !!window.JSON ? JSON.parse(_xhr.responseText) : null;
							}
							return _xhr.response;

						case 'document':
							return _getDocument(_xhr);

						default:
							return _xhr.responseText !== '' ? _xhr.responseText : null; // against the specs, but for consistency across the runtimes
					}
				} catch(ex) {
					return null;
				}				
			},

			getAllResponseHeaders: function() {
				try {
					return _xhr.getAllResponseHeaders();
				} catch(ex) {}
				return '';
			},

			abort: function() {
				if (_xhr) {
					_xhr.abort();
				}
			},

			destroy: function() {
				self = _filename = null;
			}
		});


		// here we go... ugly fix for ugly bug
		function _preloadAndSend(meta, data) {
			var target = this, blob, fr;
				
			// get original blob
			blob = data.getBlob().getSource();
			
			// preload blob in memory to be sent as binary string
			fr = new window.FileReader();
			fr.onload = function() {
				// overwrite original blob
				data.append(data.getBlobName(), new Blob(null, {
					type: blob.type,
					data: fr.result
				}));
				// invoke send operation again
				self.send.call(target, meta, data);
			};
			fr.readAsBinaryString(blob);
		}

		
		function _getNativeXHR() {
			if (window.XMLHttpRequest && !(Env.browser === 'IE' && Env.version < 8)) { // IE7 has native XHR but it's buggy
				return new window.XMLHttpRequest();
			} else {
				return (function() {
					var progIDs = ['Msxml2.XMLHTTP.6.0', 'Microsoft.XMLHTTP']; // if 6.0 available, use it, otherwise failback to default 3.0
					for (var i = 0; i < progIDs.length; i++) {
						try {
							return new ActiveXObject(progIDs[i]);
						} catch (ex) {}
					}
				})();
			}
		}
		
		// @credits Sergey Ilinsky	(http://www.ilinsky.com/)
		function _getDocument(xhr) {
			var rXML = xhr.responseXML;
			var rText = xhr.responseText;
			
			// Try parsing responseText (@see: http://www.ilinsky.com/articles/XMLHttpRequest/#bugs-ie-responseXML-content-type)
			if (Env.browser === 'IE' && rText && rXML && !rXML.documentElement && /[^\/]+\/[^\+]+\+xml/.test(xhr.getResponseHeader("Content-Type"))) {
				rXML = new window.ActiveXObject("Microsoft.XMLDOM");
				rXML.async = false;
				rXML.validateOnParse = false;
				rXML.loadXML(rText);
			}
	
			// Check if there is no error in document
			if (rXML) {
				if ((Env.browser === 'IE' && rXML.parseError !== 0) || !rXML.documentElement || rXML.documentElement.tagName === "parsererror") {
					return null;
				}
			}
			return rXML;
		}


		function _prepareMultipart(fd) {
			var boundary = '----moxieboundary' + new Date().getTime()
			, dashdash = '--'
			, crlf = '\r\n'
			, multipart = ''
			, I = this.getRuntime()
			;

			if (!I.can('send_binary_string')) {
				throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
			}

			_xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);

			// append multipart parameters
			fd.each(function(value, name) {
				// Firefox 3.6 failed to convert multibyte characters to UTF-8 in sendAsBinary(), 
				// so we try it here ourselves with: unescape(encodeURIComponent(value))
				if (value instanceof Blob) {
					// Build RFC2388 blob
					multipart += dashdash + boundary + crlf +
						'Content-Disposition: form-data; name="' + name + '"; filename="' + unescape(encodeURIComponent(value.name || 'blob')) + '"' + crlf +
						'Content-Type: ' + (value.type || 'application/octet-stream') + crlf + crlf +
						value.getSource() + crlf;
				} else {
					multipart += dashdash + boundary + crlf +
						'Content-Disposition: form-data; name="' + name + '"' + crlf + crlf +
						unescape(encodeURIComponent(value)) + crlf;
				}
			});

			multipart += dashdash + boundary + dashdash + crlf;

			return multipart;
		}
	}

	return (extensions.XMLHttpRequest = XMLHttpRequest);
});

// Included from: src/javascript/runtime/html5/utils/BinaryReader.js

/**
 * BinaryReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/utils/BinaryReader
@private
*/
define("moxie/runtime/html5/utils/BinaryReader", [], function() {
	return function() {
		var II = false, bin;

		// Private functions
		function read(idx, size) {
			var mv = II ? 0 : -8 * (size - 1), sum = 0, i;

			for (i = 0; i < size; i++) {
				sum |= (bin.charCodeAt(idx + i) << Math.abs(mv + i*8));
			}

			return sum;
		}

		function putstr(segment, idx, length) {
			length = arguments.length === 3 ? length : bin.length - idx - 1;
			bin = bin.substr(0, idx) + segment + bin.substr(length + idx);
		}

		function write(idx, num, size) {
			var str = '', mv = II ? 0 : -8 * (size - 1), i;

			for (i = 0; i < size; i++) {
				str += String.fromCharCode((num >> Math.abs(mv + i*8)) & 255);
			}

			putstr(str, idx, size);
		}

		// Public functions
		return {
			II: function(order) {
				if (order === undefined) {
					return II;
				} else {
					II = order;
				}
			},

			init: function(binData) {
				II = false;
				bin = binData;
			},

			SEGMENT: function(idx, length, segment) {
				switch (arguments.length) {
					case 1:
						return bin.substr(idx, bin.length - idx - 1);
					case 2:
						return bin.substr(idx, length);
					case 3:
						putstr(segment, idx, length);
						break;
					default: return bin;
				}
			},

			BYTE: function(idx) {
				return read(idx, 1);
			},

			SHORT: function(idx) {
				return read(idx, 2);
			},

			LONG: function(idx, num) {
				if (num === undefined) {
					return read(idx, 4);
				} else {
					write(idx, num, 4);
				}
			},

			SLONG: function(idx) { // 2's complement notation
				var num = read(idx, 4);

				return (num > 2147483647 ? num - 4294967296 : num);
			},

			STRING: function(idx, size) {
				var str = '';

				for (size += idx; idx < size; idx++) {
					str += String.fromCharCode(read(idx, 1));
				}

				return str;
			}
		};
	};
});

// Included from: src/javascript/runtime/html5/image/JPEGHeaders.js

/**
 * JPEGHeaders.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */
 
/**
@class moxie/runtime/html5/image/JPEGHeaders
@private
*/
define("moxie/runtime/html5/image/JPEGHeaders", [
	"moxie/runtime/html5/utils/BinaryReader"
], function(BinaryReader) {
	
	return function JPEGHeaders(data) {
		var headers = [], read, idx, marker, length = 0;

		read = new BinaryReader();
		read.init(data);

		// Check if data is jpeg
		if (read.SHORT(0) !== 0xFFD8) {
			return;
		}

		idx = 2;

		while (idx <= data.length) {
			marker = read.SHORT(idx);

			// omit RST (restart) markers
			if (marker >= 0xFFD0 && marker <= 0xFFD7) {
				idx += 2;
				continue;
			}

			// no headers allowed after SOS marker
			if (marker === 0xFFDA || marker === 0xFFD9) {
				break;
			}

			length = read.SHORT(idx + 2) + 2;

			// APPn marker detected
			if (marker >= 0xFFE1 && marker <= 0xFFEF) {
				headers.push({
					hex: marker,
					name: 'APP' + (marker & 0x000F),
					start: idx,
					length: length,
					segment: read.SEGMENT(idx, length)
				});
			}

			idx += length;
		}

		read.init(null); // free memory

		return {
			headers: headers,

			restore: function(data) {
				var max, i;

				read.init(data);

				idx = read.SHORT(2) == 0xFFE0 ? 4 + read.SHORT(4) : 2;

				for (i = 0, max = headers.length; i < max; i++) {
					read.SEGMENT(idx, 0, headers[i].segment);
					idx += headers[i].length;
				}

				data = read.SEGMENT();
				read.init(null);
				return data;
			},

			strip: function(data) {
				var headers, jpegHeaders, i;

				jpegHeaders = new JPEGHeaders(data);
				headers = jpegHeaders.headers;
				jpegHeaders.purge();

				read.init(data);

				i = headers.length;
				while (i--) {
					read.SEGMENT(headers[i].start, headers[i].length, '');
				}
				
				data = read.SEGMENT();
				read.init(null);
				return data;
			},

			get: function(name) {
				var array = [];

				for (var i = 0, max = headers.length; i < max; i++) {
					if (headers[i].name === name.toUpperCase()) {
						array.push(headers[i].segment);
					}
				}
				return array;
			},

			set: function(name, segment) {
				var array = [], i, ii, max;

				if (typeof(segment) === 'string') {
					array.push(segment);
				} else {
					array = segment;
				}

				for (i = ii = 0, max = headers.length; i < max; i++) {
					if (headers[i].name === name.toUpperCase()) {
						headers[i].segment = array[ii];
						headers[i].length = array[ii].length;
						ii++;
					}
					if (ii >= array.length) {
						break;
					}
				}
			},

			purge: function() {
				headers = [];
				read.init(null);
				read = null;
			}
		};
	};
});

// Included from: src/javascript/runtime/html5/image/ExifParser.js

/**
 * ExifParser.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/ExifParser
@private
*/
define("moxie/runtime/html5/image/ExifParser", [
	"moxie/core/utils/Basic",
	"moxie/runtime/html5/utils/BinaryReader"
], function(Basic, BinaryReader) {
	
	return function ExifParser() {
		// Private ExifParser fields
		var data, tags, Tiff, offsets = {}, tagDescs;

		data = new BinaryReader();

		tags = {
			tiff : {
				/*
				The image orientation viewed in terms of rows and columns.

				1 = The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.
				2 = The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.
				3 = The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.
				4 = The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.
				5 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.
				6 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.
				7 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.
				8 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.
				*/
				0x0112: 'Orientation',
				0x010E: 'ImageDescription',
				0x010F: 'Make',
				0x0110: 'Model',
				0x0131: 'Software',
				0x8769: 'ExifIFDPointer',
				0x8825:	'GPSInfoIFDPointer'
			},
			exif : {
				0x9000: 'ExifVersion',
				0xA001: 'ColorSpace',
				0xA002: 'PixelXDimension',
				0xA003: 'PixelYDimension',
				0x9003: 'DateTimeOriginal',
				0x829A: 'ExposureTime',
				0x829D: 'FNumber',
				0x8827: 'ISOSpeedRatings',
				0x9201: 'ShutterSpeedValue',
				0x9202: 'ApertureValue'	,
				0x9207: 'MeteringMode',
				0x9208: 'LightSource',
				0x9209: 'Flash',
				0x920A: 'FocalLength',
				0xA402: 'ExposureMode',
				0xA403: 'WhiteBalance',
				0xA406: 'SceneCaptureType',
				0xA404: 'DigitalZoomRatio',
				0xA408: 'Contrast',
				0xA409: 'Saturation',
				0xA40A: 'Sharpness'
			},
			gps : {
				0x0000: 'GPSVersionID',
				0x0001: 'GPSLatitudeRef',
				0x0002: 'GPSLatitude',
				0x0003: 'GPSLongitudeRef',
				0x0004: 'GPSLongitude'
			}
		};

		tagDescs = {
			'ColorSpace': {
				1: 'sRGB',
				0: 'Uncalibrated'
			},

			'MeteringMode': {
				0: 'Unknown',
				1: 'Average',
				2: 'CenterWeightedAverage',
				3: 'Spot',
				4: 'MultiSpot',
				5: 'Pattern',
				6: 'Partial',
				255: 'Other'
			},

			'LightSource': {
				1: 'Daylight',
				2: 'Fliorescent',
				3: 'Tungsten',
				4: 'Flash',
				9: 'Fine weather',
				10: 'Cloudy weather',
				11: 'Shade',
				12: 'Daylight fluorescent (D 5700 - 7100K)',
				13: 'Day white fluorescent (N 4600 -5400K)',
				14: 'Cool white fluorescent (W 3900 - 4500K)',
				15: 'White fluorescent (WW 3200 - 3700K)',
				17: 'Standard light A',
				18: 'Standard light B',
				19: 'Standard light C',
				20: 'D55',
				21: 'D65',
				22: 'D75',
				23: 'D50',
				24: 'ISO studio tungsten',
				255: 'Other'
			},

			'Flash': {
				0x0000: 'Flash did not fire.',
				0x0001: 'Flash fired.',
				0x0005: 'Strobe return light not detected.',
				0x0007: 'Strobe return light detected.',
				0x0009: 'Flash fired, compulsory flash mode',
				0x000D: 'Flash fired, compulsory flash mode, return light not detected',
				0x000F: 'Flash fired, compulsory flash mode, return light detected',
				0x0010: 'Flash did not fire, compulsory flash mode',
				0x0018: 'Flash did not fire, auto mode',
				0x0019: 'Flash fired, auto mode',
				0x001D: 'Flash fired, auto mode, return light not detected',
				0x001F: 'Flash fired, auto mode, return light detected',
				0x0020: 'No flash function',
				0x0041: 'Flash fired, red-eye reduction mode',
				0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
				0x0047: 'Flash fired, red-eye reduction mode, return light detected',
				0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
				0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
				0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
				0x0059: 'Flash fired, auto mode, red-eye reduction mode',
				0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
				0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
			},

			'ExposureMode': {
				0: 'Auto exposure',
				1: 'Manual exposure',
				2: 'Auto bracket'
			},

			'WhiteBalance': {
				0: 'Auto white balance',
				1: 'Manual white balance'
			},

			'SceneCaptureType': {
				0: 'Standard',
				1: 'Landscape',
				2: 'Portrait',
				3: 'Night scene'
			},

			'Contrast': {
				0: 'Normal',
				1: 'Soft',
				2: 'Hard'
			},

			'Saturation': {
				0: 'Normal',
				1: 'Low saturation',
				2: 'High saturation'
			},

			'Sharpness': {
				0: 'Normal',
				1: 'Soft',
				2: 'Hard'
			},

			// GPS related
			'GPSLatitudeRef': {
				N: 'North latitude',
				S: 'South latitude'
			},

			'GPSLongitudeRef': {
				E: 'East longitude',
				W: 'West longitude'
			}
		};

		function extractTags(IFD_offset, tags2extract) {
			var length = data.SHORT(IFD_offset), i, ii,
				tag, type, count, tagOffset, offset, value, values = [], hash = {};

			for (i = 0; i < length; i++) {
				// Set binary reader pointer to beginning of the next tag
				offset = tagOffset = IFD_offset + 12 * i + 2;

				tag = tags2extract[data.SHORT(offset)];

				if (tag === undefined) {
					continue; // Not the tag we requested
				}

				type = data.SHORT(offset+=2);
				count = data.LONG(offset+=2);

				offset += 4;
				values = [];

				switch (type) {
					case 1: // BYTE
					case 7: // UNDEFINED
						if (count > 4) {
							offset = data.LONG(offset) + offsets.tiffHeader;
						}

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.BYTE(offset + ii);
						}

						break;

					case 2: // STRING
						if (count > 4) {
							offset = data.LONG(offset) + offsets.tiffHeader;
						}

						hash[tag] = data.STRING(offset, count - 1);

						continue;

					case 3: // SHORT
						if (count > 2) {
							offset = data.LONG(offset) + offsets.tiffHeader;
						}

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.SHORT(offset + ii*2);
						}

						break;

					case 4: // LONG
						if (count > 1) {
							offset = data.LONG(offset) + offsets.tiffHeader;
						}

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.LONG(offset + ii*4);
						}

						break;

					case 5: // RATIONAL
						offset = data.LONG(offset) + offsets.tiffHeader;

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.LONG(offset + ii*4) / data.LONG(offset + ii*4 + 4);
						}

						break;

					case 9: // SLONG
						offset = data.LONG(offset) + offsets.tiffHeader;

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.SLONG(offset + ii*4);
						}

						break;

					case 10: // SRATIONAL
						offset = data.LONG(offset) + offsets.tiffHeader;

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.SLONG(offset + ii*4) / data.SLONG(offset + ii*4 + 4);
						}

						break;

					default:
						continue;
				}

				value = (count == 1 ? values[0] : values);

				if (tagDescs.hasOwnProperty(tag) && typeof value != 'object') {
					hash[tag] = tagDescs[tag][value];
				} else {
					hash[tag] = value;
				}
			}

			return hash;
		}

		function getIFDOffsets() {
			var idx = offsets.tiffHeader;

			// Set read order of multi-byte data
			data.II(data.SHORT(idx) == 0x4949);

			// Check if always present bytes are indeed present
			if (data.SHORT(idx+=2) !== 0x002A) {
				return false;
			}

			offsets.IFD0 = offsets.tiffHeader + data.LONG(idx += 2);
			Tiff = extractTags(offsets.IFD0, tags.tiff);

			if ('ExifIFDPointer' in Tiff) {
				offsets.exifIFD = offsets.tiffHeader + Tiff.ExifIFDPointer;
				delete Tiff.ExifIFDPointer;
			}

			if ('GPSInfoIFDPointer' in Tiff) {
				offsets.gpsIFD = offsets.tiffHeader + Tiff.GPSInfoIFDPointer;
				delete Tiff.GPSInfoIFDPointer;
			}
			return true;
		}

		// At the moment only setting of simple (LONG) values, that do not require offset recalculation, is supported
		function setTag(ifd, tag, value) {
			var offset, length, tagOffset, valueOffset = 0;

			// If tag name passed translate into hex key
			if (typeof(tag) === 'string') {
				var tmpTags = tags[ifd.toLowerCase()];
				for (var hex in tmpTags) {
					if (tmpTags[hex] === tag) {
						tag = hex;
						break;
					}
				}
			}
			offset = offsets[ifd.toLowerCase() + 'IFD'];
			length = data.SHORT(offset);

			for (var i = 0; i < length; i++) {
				tagOffset = offset + 12 * i + 2;

				if (data.SHORT(tagOffset) == tag) {
					valueOffset = tagOffset + 8;
					break;
				}
			}

			if (!valueOffset) {
				return false;
			}

			data.LONG(valueOffset, value);
			return true;
		}


		// Public functions
		return {
			init: function(segment) {
				// Reset internal data
				offsets = {
					tiffHeader: 10
				};

				if (segment === undefined || !segment.length) {
					return false;
				}

				data.init(segment);

				// Check if that's APP1 and that it has EXIF
				if (data.SHORT(0) === 0xFFE1 && data.STRING(4, 5).toUpperCase() === "EXIF\0") {
					return getIFDOffsets();
				}
				return false;
			},

			TIFF: function() {
				return Tiff;
			},

			EXIF: function() {
				var Exif;

				// Populate EXIF hash
				Exif = extractTags(offsets.exifIFD, tags.exif);

				// Fix formatting of some tags
				if (Exif.ExifVersion && Basic.typeOf(Exif.ExifVersion) === 'array') {
					for (var i = 0, exifVersion = ''; i < Exif.ExifVersion.length; i++) {
						exifVersion += String.fromCharCode(Exif.ExifVersion[i]);
					}
					Exif.ExifVersion = exifVersion;
				}

				return Exif;
			},

			GPS: function() {
				var GPS;

				GPS = extractTags(offsets.gpsIFD, tags.gps);

				// iOS devices (and probably some others) do not put in GPSVersionID tag (why?..)
				if (GPS.GPSVersionID && Basic.typeOf(GPS.GPSVersionID) === 'array') {
					GPS.GPSVersionID = GPS.GPSVersionID.join('.');
				}

				return GPS;
			},

			setExif: function(tag, value) {
				// Right now only setting of width/height is possible
				if (tag !== 'PixelXDimension' && tag !== 'PixelYDimension') {return false;}

				return setTag('exif', tag, value);
			},


			getBinary: function() {
				return data.SEGMENT();
			},

			purge: function() {
				data.init(null);
				data = Tiff = null;
				offsets = {};
			}
		};
	};
});

// Included from: src/javascript/runtime/html5/image/JPEG.js

/**
 * JPEG.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/JPEG
@private
*/
define("moxie/runtime/html5/image/JPEG", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/runtime/html5/image/JPEGHeaders",
	"moxie/runtime/html5/utils/BinaryReader",
	"moxie/runtime/html5/image/ExifParser"
], function(Basic, x, JPEGHeaders, BinaryReader, ExifParser) {
	
	function JPEG(binstr) {
		var _binstr, _br, _hm, _ep, _info, hasExif;

		function _getDimensions() {
			var idx = 0, marker, length;

			// examine all through the end, since some images might have very large APP segments
			while (idx <= _binstr.length) {
				marker = _br.SHORT(idx += 2);

				if (marker >= 0xFFC0 && marker <= 0xFFC3) { // SOFn
					idx += 5; // marker (2 bytes) + length (2 bytes) + Sample precision (1 byte)
					return {
						height: _br.SHORT(idx),
						width: _br.SHORT(idx += 2)
					};
				}
				length = _br.SHORT(idx += 2);
				idx += length - 2;
			}
			return null;
		}

		_binstr = binstr;

		_br = new BinaryReader();
		_br.init(_binstr);

		// check if it is jpeg
		if (_br.SHORT(0) !== 0xFFD8) {
			throw new x.ImageError(x.ImageError.WRONG_FORMAT);
		}

		// backup headers
		_hm = new JPEGHeaders(binstr);

		// extract exif info
		_ep = new ExifParser();
		hasExif = !!_ep.init(_hm.get('app1')[0]);

		// get dimensions
		_info = _getDimensions.call(this);

		Basic.extend(this, {
			type: 'image/jpeg',

			size: _binstr.length,

			width: _info && _info.width || 0,

			height: _info && _info.height || 0,

			setExif: function(tag, value) {
				if (!hasExif) {
					return false; // or throw an exception
				}

				if (Basic.typeOf(tag) === 'object') {
					Basic.each(tag, function(value, tag) {
						_ep.setExif(tag, value);
					});
				} else {
					_ep.setExif(tag, value);
				}

				// update internal headers
				_hm.set('app1', _ep.getBinary());
			},

			writeHeaders: function() {
				if (!arguments.length) {
					// if no arguments passed, update headers internally
					return (_binstr = _hm.restore(_binstr));
				}
				return _hm.restore(arguments[0]);
			},

			stripHeaders: function(binstr) {
				return _hm.strip(binstr);
			},

			purge: function() {
				_purge.call(this);
			}
		});

		if (hasExif) {
			this.meta = {
				tiff: _ep.TIFF(),
				exif: _ep.EXIF(),
				gps: _ep.GPS()
			};
		}

		function _purge() {
			if (!_ep || !_hm || !_br) { 
				return; // ignore any repeating purge requests
			}
			_ep.purge();
			_hm.purge();
			_br.init(null);
			_binstr = _info = _hm = _ep = _br = null;
		}
	}

	return JPEG;
});

// Included from: src/javascript/runtime/html5/image/PNG.js

/**
 * PNG.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/PNG
@private
*/
define("moxie/runtime/html5/image/PNG", [
	"moxie/core/Exceptions",
	"moxie/core/utils/Basic",
	"moxie/runtime/html5/utils/BinaryReader"
], function(x, Basic, BinaryReader) {
	
	function PNG(binstr) {
		var _binstr, _br, _hm, _ep, _info;

		_binstr = binstr;

		_br = new BinaryReader();
		_br.init(_binstr);

		// check if it's png
		(function() {
			var idx = 0, i = 0
			, signature = [0x8950, 0x4E47, 0x0D0A, 0x1A0A]
			;

			for (i = 0; i < signature.length; i++, idx += 2) {
				if (signature[i] != _br.SHORT(idx)) {
					throw new x.ImageError(x.ImageError.WRONG_FORMAT);
				}
			}
		}());

		function _getDimensions() {
			var chunk, idx;

			chunk = _getChunkAt.call(this, 8);

			if (chunk.type == 'IHDR') {
				idx = chunk.start;
				return {
					width: _br.LONG(idx),
					height: _br.LONG(idx += 4)
				};
			}
			return null;
		}

		function _purge() {
			if (!_br) {
				return; // ignore any repeating purge requests
			}
			_br.init(null);
			_binstr = _info = _hm = _ep = _br = null;
		}

		_info = _getDimensions.call(this);

		Basic.extend(this, {
			type: 'image/png',

			size: _binstr.length,

			width: _info.width,

			height: _info.height,

			purge: function() {
				_purge.call(this);
			}
		});

		// for PNG we can safely trigger purge automatically, as we do not keep any data for later
		_purge.call(this);

		function _getChunkAt(idx) {
			var length, type, start, CRC;

			length = _br.LONG(idx);
			type = _br.STRING(idx += 4, 4);
			start = idx += 4;
			CRC = _br.LONG(idx + length);

			return {
				length: length,
				type: type,
				start: start,
				CRC: CRC
			};
		}
	}

	return PNG;
});

// Included from: src/javascript/runtime/html5/image/ImageInfo.js

/**
 * ImageInfo.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/ImageInfo
@private
*/
define("moxie/runtime/html5/image/ImageInfo", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/runtime/html5/image/JPEG",
	"moxie/runtime/html5/image/PNG"
], function(Basic, x, JPEG, PNG) {
	/**
	Optional image investigation tool for HTML5 runtime. Provides the following features:
	- ability to distinguish image type (JPEG or PNG) by signature
	- ability to extract image width/height directly from it's internals, without preloading in memory (fast)
	- ability to extract APP headers from JPEGs (Exif, GPS, etc)
	- ability to replace width/height tags in extracted JPEG headers
	- ability to restore APP headers, that were for example stripped during image manipulation

	@class ImageInfo
	@constructor
	@param {String} binstr Image source as binary string
	*/
	return function(binstr) {
		var _cs = [JPEG, PNG], _img;

		// figure out the format, throw: ImageError.WRONG_FORMAT if not supported
		_img = (function() {
			for (var i = 0; i < _cs.length; i++) {
				try {
					return new _cs[i](binstr);
				} catch (ex) {
					// console.info(ex);
				}
			}
			throw new x.ImageError(x.ImageError.WRONG_FORMAT);
		}());

		Basic.extend(this, {
			/**
			Image Mime Type extracted from it's depths

			@property type
			@type {String}
			@default ''
			*/
			type: '',

			/**
			Image size in bytes

			@property size
			@type {Number}
			@default 0
			*/
			size: 0,

			/**
			Image width extracted from image source

			@property width
			@type {Number}
			@default 0
			*/
			width: 0,

			/**
			Image height extracted from image source

			@property height
			@type {Number}
			@default 0
			*/
			height: 0,

			/**
			Sets Exif tag. Currently applicable only for width and height tags. Obviously works only with JPEGs.

			@method setExif
			@param {String} tag Tag to set
			@param {Mixed} value Value to assign to the tag
			*/
			setExif: function() {},

			/**
			Restores headers to the source.

			@method writeHeaders
			@param {String} data Image source as binary string
			@return {String} Updated binary string
			*/
			writeHeaders: function(data) {
				return data;
			},

			/**
			Strip all headers from the source.

			@method stripHeaders
			@param {String} data Image source as binary string
			@return {String} Updated binary string
			*/
			stripHeaders: function(data) {
				return data;
			},

			/**
			Dispose resources.

			@method purge
			*/
			purge: function() {}
		});

		Basic.extend(this, _img);

		this.purge = function() {
			_img.purge();
			_img = null;
		};
	};
});

// Included from: src/javascript/runtime/html5/image/MegaPixel.js

/**
(The MIT License)

Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Mega pixel image rendering library for iOS6 Safari
 *
 * Fixes iOS6 Safari's image file rendering issue for large size image (over mega-pixel),
 * which causes unexpected subsampling when drawing it in canvas.
 * By using this library, you can safely render the image with proper stretching.
 *
 * Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>
 * Released under the MIT license
 */

/**
@class moxie/runtime/html5/image/MegaPixel
@private
*/
define("moxie/runtime/html5/image/MegaPixel", [], function() {

	/**
	 * Rendering image element (with resizing) into the canvas element
	 */
	function renderImageToCanvas(img, canvas, options) {
		var iw = img.naturalWidth, ih = img.naturalHeight;
		var width = options.width, height = options.height;
		var x = options.x || 0, y = options.y || 0;
		var ctx = canvas.getContext('2d');
		if (detectSubsampling(img)) {
			iw /= 2;
			ih /= 2;
		}
		var d = 1024; // size of tiling canvas
		var tmpCanvas = document.createElement('canvas');
		tmpCanvas.width = tmpCanvas.height = d;
		var tmpCtx = tmpCanvas.getContext('2d');
		var vertSquashRatio = detectVerticalSquash(img, iw, ih);
		var sy = 0;
		while (sy < ih) {
			var sh = sy + d > ih ? ih - sy : d;
			var sx = 0;
			while (sx < iw) {
				var sw = sx + d > iw ? iw - sx : d;
				tmpCtx.clearRect(0, 0, d, d);
				tmpCtx.drawImage(img, -sx, -sy);
				var dx = (sx * width / iw + x) << 0;
				var dw = Math.ceil(sw * width / iw);
				var dy = (sy * height / ih / vertSquashRatio + y) << 0;
				var dh = Math.ceil(sh * height / ih / vertSquashRatio);
				ctx.drawImage(tmpCanvas, 0, 0, sw, sh, dx, dy, dw, dh);
				sx += d;
			}
			sy += d;
		}
		tmpCanvas = tmpCtx = null;
	}

	/**
	 * Detect subsampling in loaded image.
	 * In iOS, larger images than 2M pixels may be subsampled in rendering.
	 */
	function detectSubsampling(img) {
		var iw = img.naturalWidth, ih = img.naturalHeight;
		if (iw * ih > 1024 * 1024) { // subsampling may happen over megapixel image
			var canvas = document.createElement('canvas');
			canvas.width = canvas.height = 1;
			var ctx = canvas.getContext('2d');
			ctx.drawImage(img, -iw + 1, 0);
			// subsampled image becomes half smaller in rendering size.
			// check alpha channel value to confirm image is covering edge pixel or not.
			// if alpha value is 0 image is not covering, hence subsampled.
			return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
		} else {
			return false;
		}
	}


	/**
	 * Detecting vertical squash in loaded image.
	 * Fixes a bug which squash image vertically while drawing into canvas for some images.
	 */
	function detectVerticalSquash(img, iw, ih) {
		var canvas = document.createElement('canvas');
		canvas.width = 1;
		canvas.height = ih;
		var ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		var data = ctx.getImageData(0, 0, 1, ih).data;
		// search image edge pixel position in case it is squashed vertically.
		var sy = 0;
		var ey = ih;
		var py = ih;
		while (py > sy) {
			var alpha = data[(py - 1) * 4 + 3];
			if (alpha === 0) {
				ey = py;
			} else {
			sy = py;
			}
			py = (ey + sy) >> 1;
		}
		canvas = null;
		var ratio = (py / ih);
		return (ratio === 0) ? 1 : ratio;
	}

	return {
		isSubsampled: detectSubsampling,
		renderTo: renderImageToCanvas
	};
});

// Included from: src/javascript/runtime/html5/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/Image
@private
*/
define("moxie/runtime/html5/image/Image", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/core/utils/Encode",
	"moxie/file/File",
	"moxie/runtime/html5/image/ImageInfo",
	"moxie/runtime/html5/image/MegaPixel",
	"moxie/core/utils/Mime",
	"moxie/core/utils/Env"
], function(extensions, Basic, x, Encode, File, ImageInfo, MegaPixel, Mime, Env) {
	
	function HTML5Image() {
		var me = this
		, _img, _imgInfo, _canvas, _binStr, _blob
		, _modified = false // is set true whenever image is modified
		, _preserveHeaders = true
		;

		Basic.extend(this, {
			loadFromBlob: function(blob) {
				var comp = this, I = comp.getRuntime()
				, asBinary = arguments.length > 1 ? arguments[1] : true
				;

				if (!I.can('access_binary')) {
					throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
				}

				_blob = blob;

				if (blob.isDetached()) {
					_binStr = blob.getSource();
					_preload.call(this, _binStr);
					return;
				} else {
					_readAsDataUrl.call(this, blob.getSource(), function(dataUrl) {
						if (asBinary) {
							_binStr = _toBinary(dataUrl);
						}
						_preload.call(comp, dataUrl);
					});
				}
			},

			loadFromImage: function(img, exact) {
				this.meta = img.meta;

				_blob = new File(null, {
					name: img.name,
					size: img.size,
					type: img.type
				});

				_preload.call(this, exact ? (_binStr = img.getAsBinaryString()) : img.getAsDataURL());
			},

			getInfo: function() {
				var I = this.getRuntime(), info;

				if (!_imgInfo && _binStr && I.can('access_image_binary')) {
					_imgInfo = new ImageInfo(_binStr);
				}

				info = {
					width: _getImg().width || 0,
					height: _getImg().height || 0,
					type: _blob.type || Mime.getFileMime(_blob.name),
					size: _binStr && _binStr.length || _blob.size || 0,
					name: _blob.name || '',
					meta: _imgInfo && _imgInfo.meta || this.meta || {}
				};

				return info;
			},

			downsize: function() {
				_downsize.apply(this, arguments);
			},

			getAsCanvas: function() {
				if (_canvas) {
					_canvas.id = this.uid + '_canvas';
				}
				return _canvas;
			},

			getAsBlob: function(type, quality) {
				if (type !== this.type) {
					// if different mime type requested prepare image for conversion
					_downsize.call(this, this.width, this.height, false);
				}
				return new File(null, {
					name: _blob.name || '',
					type: type,
					data: me.getAsBinaryString.call(this, type, quality)
				});
			},

			getAsDataURL: function(type) {
				var quality = arguments[1] || 90;

				// if image has not been modified, return the source right away
				if (!_modified) {
					return _img.src;
				}

				if ('image/jpeg' !== type) {
					return _canvas.toDataURL('image/png');
				} else {
					try {
						// older Geckos used to result in an exception on quality argument
						return _canvas.toDataURL('image/jpeg', quality/100);
					} catch (ex) {
						return _canvas.toDataURL('image/jpeg');
					}
				}
			},

			getAsBinaryString: function(type, quality) {
				// if image has not been modified, return the source right away
				if (!_modified) {
					// if image was not loaded from binary string
					if (!_binStr) {
						_binStr = _toBinary(me.getAsDataURL(type, quality));
					}
					return _binStr;
				}

				if ('image/jpeg' !== type) {
					_binStr = _toBinary(me.getAsDataURL(type, quality));
				} else {
					var dataUrl;

					// if jpeg
					if (!quality) {
						quality = 90;
					}

					try {
						// older Geckos used to result in an exception on quality argument
						dataUrl = _canvas.toDataURL('image/jpeg', quality/100);
					} catch (ex) {
						dataUrl = _canvas.toDataURL('image/jpeg');
					}

					_binStr = _toBinary(dataUrl);

					if (_imgInfo) {
						_binStr = _imgInfo.stripHeaders(_binStr);

						if (_preserveHeaders) {
							// update dimensions info in exif
							if (_imgInfo.meta && _imgInfo.meta.exif) {
								_imgInfo.setExif({
									PixelXDimension: this.width,
									PixelYDimension: this.height
								});
							}

							// re-inject the headers
							_binStr = _imgInfo.writeHeaders(_binStr);
						}

						// will be re-created from fresh on next getInfo call
						_imgInfo.purge();
						_imgInfo = null;
					}
				}

				_modified = false;

				return _binStr;
			},

			destroy: function() {
				me = null;
				_purge.call(this);
				this.getRuntime().getShim().removeInstance(this.uid);
			}
		});


		function _getImg() {
			if (!_canvas && !_img) {
				throw new x.ImageError(x.DOMException.INVALID_STATE_ERR);
			}
			return _canvas || _img;
		}


		function _toBinary(str) {
			return Encode.atob(str.substring(str.indexOf('base64,') + 7));
		}


		function _toDataUrl(str, type) {
			return 'data:' + (type || '') + ';base64,' + Encode.btoa(str);
		}


		function _preload(str) {
			var comp = this;

			_img = new Image();
			_img.onerror = function() {
				_purge.call(this);
				comp.trigger('error', x.ImageError.WRONG_FORMAT);
			};
			_img.onload = function() {
				comp.trigger('load');
			};

			_img.src = /^data:[^;]*;base64,/.test(str) ? str : _toDataUrl(str, _blob.type);
		}


		function _readAsDataUrl(file, callback) {
			var comp = this, fr;

			// use FileReader if it's available
			if (window.FileReader) {
				fr = new FileReader();
				fr.onload = function() {
					callback(this.result);
				};
				fr.onerror = function() {
					comp.trigger('error', x.ImageError.WRONG_FORMAT);
				};
				fr.readAsDataURL(file);
			} else {
				return callback(file.getAsDataURL());
			}
		}

		function _downsize(width, height, crop, preserveHeaders) {
			var self = this
			, scale
			, mathFn
			, x = 0
			, y = 0
			, img
			, destWidth
			, destHeight
			, orientation
			;

			_preserveHeaders = preserveHeaders; // we will need to check this on export (see getAsBinaryString())

			// take into account orientation tag
			orientation = (this.meta && this.meta.tiff && this.meta.tiff.Orientation) || 1;

			if (Basic.inArray(orientation, [5,6,7,8]) !== -1) { // values that require 90 degree rotation
				// swap dimensions
				var tmp = width;
				width = height;
				height = tmp;
			}

			img = _getImg();

			// unify dimensions
			if (!crop) {
				scale = Math.min(width/img.width, height/img.height);
			} else {
				// one of the dimensions may exceed the actual image dimensions - we need to take the smallest value
				width = Math.min(width, img.width);
				height = Math.min(height, img.height);

				scale = Math.max(width/img.width, height/img.height);
			}
		
			// we only downsize here
			if (scale > 1 && !crop && preserveHeaders) {
				this.trigger('Resize');
				return;
			}

			// prepare canvas if necessary
			if (!_canvas) {
				_canvas = document.createElement("canvas");
			}

			// calculate dimensions of proportionally resized image
			destWidth = Math.round(img.width * scale);	
			destHeight = Math.round(img.height * scale);

			// scale image and canvas
			if (crop) {
				_canvas.width = width;
				_canvas.height = height;

				// if dimensions of the resulting image still larger than canvas, center it
				if (destWidth > width) {
					x = Math.round((destWidth - width) / 2);
				}

				if (destHeight > height) {
					y = Math.round((destHeight - height) / 2);
				}
			} else {
				_canvas.width = destWidth;
				_canvas.height = destHeight;
			}

			// rotate if required, according to orientation tag
			if (!_preserveHeaders) {
				_rotateToOrientaion(_canvas.width, _canvas.height, orientation);
			}

			_drawToCanvas.call(this, img, _canvas, -x, -y, destWidth, destHeight);

			this.width = _canvas.width;
			this.height = _canvas.height;

			_modified = true;
			self.trigger('Resize');
		}


		function _drawToCanvas(img, canvas, x, y, w, h) {
			if (Env.OS === 'iOS') { 
				// avoid squish bug in iOS6
				MegaPixel.renderTo(img, canvas, { width: w, height: h, x: x, y: y });
			} else {
				var ctx = canvas.getContext('2d');
				ctx.drawImage(img, x, y, w, h);
			}
		}


		/**
		* Transform canvas coordination according to specified frame size and orientation
		* Orientation value is from EXIF tag
		* @author Shinichi Tomita <shinichi.tomita@gmail.com>
		*/
		function _rotateToOrientaion(width, height, orientation) {
			switch (orientation) {
				case 5:
				case 6:
				case 7:
				case 8:
					_canvas.width = height;
					_canvas.height = width;
					break;
				default:
					_canvas.width = width;
					_canvas.height = height;
			}

			/**
			1 = The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.
			2 = The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.
			3 = The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.
			4 = The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.
			5 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.
			6 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.
			7 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.
			8 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.
			*/

			var ctx = _canvas.getContext('2d');
			switch (orientation) {
				case 2:
					// horizontal flip
					ctx.translate(width, 0);
					ctx.scale(-1, 1);
					break;
				case 3:
					// 180 rotate left
					ctx.translate(width, height);
					ctx.rotate(Math.PI);
					break;
				case 4:
					// vertical flip
					ctx.translate(0, height);
					ctx.scale(1, -1);
					break;
				case 5:
					// vertical flip + 90 rotate right
					ctx.rotate(0.5 * Math.PI);
					ctx.scale(1, -1);
					break;
				case 6:
					// 90 rotate right
					ctx.rotate(0.5 * Math.PI);
					ctx.translate(0, -height);
					break;
				case 7:
					// horizontal flip + 90 rotate right
					ctx.rotate(0.5 * Math.PI);
					ctx.translate(width, -height);
					ctx.scale(-1, 1);
					break;
				case 8:
					// 90 rotate left
					ctx.rotate(-0.5 * Math.PI);
					ctx.translate(-width, 0);
					break;
			}
		}


		function _purge() {
			if (_imgInfo) {
				_imgInfo.purge();
				_imgInfo = null;
			}
			_binStr = _img = _canvas = _blob = null;
			_modified = false;
		}
	}

	return (extensions.Image = HTML5Image);
});

// Included from: src/javascript/runtime/flash/Runtime.js

/**
 * Runtime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global ActiveXObject:true */

/**
Defines constructor for Flash runtime.

@class moxie/runtime/flash/Runtime
@private
*/
define("moxie/runtime/flash/Runtime", [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Env",
	"moxie/core/utils/Dom",
	"moxie/core/Exceptions",
	"moxie/runtime/Runtime"
], function(Basic, Env, Dom, x, Runtime) {
	
	var type = 'flash', extensions = {};

	/**
	Get the version of the Flash Player

	@method getShimVersion
	@private
	@return {Number} Flash Player version
	*/
	function getShimVersion() {
		var version;

		try {
			version = navigator.plugins['Shockwave Flash'];
			version = version.description;
		} catch (e1) {
			try {
				version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
			} catch (e2) {
				version = '0.0';
			}
		}
		version = version.match(/\d+/g);
		return parseFloat(version[0] + '.' + version[1]);
	}

	/**
	Constructor for the Flash Runtime

	@class FlashRuntime
	@extends Runtime
	*/
	function FlashRuntime(options) {
		var I = this, initTimer;

		options = Basic.extend({ swf_url: Env.swf_url }, options);

		Runtime.call(this, options, type, {
			access_binary: function(value) {
				return value && I.mode === 'browser';
			},
			access_image_binary: function(value) {
				return value && I.mode === 'browser';
			},
			display_media: Runtime.capTrue,
			do_cors: Runtime.capTrue,
			drag_and_drop: false,
			report_upload_progress: function() {
				return I.mode === 'client';
			},
			resize_image: Runtime.capTrue,
			return_response_headers: false,
			return_response_type: function(responseType) {
				if (responseType === 'json' && !!window.JSON) {
					return true;
				} 
				return !Basic.arrayDiff(responseType, ['', 'text', 'document']) || I.mode === 'browser';
			},
			return_status_code: function(code) {
				return I.mode === 'browser' || !Basic.arrayDiff(code, [200, 404]);
			},
			select_file: Runtime.capTrue,
			select_multiple: Runtime.capTrue,
			send_binary_string: function(value) {
				return value && I.mode === 'browser';
			},
			send_browser_cookies: function(value) {
				return value && I.mode === 'browser';
			},
			send_custom_headers: function(value) {
				return value && I.mode === 'browser';
			},
			send_multipart: Runtime.capTrue,
			slice_blob: function(value) {
				return value && I.mode === 'browser';
			},
			stream_upload: function(value) {
				return value && I.mode === 'browser';
			},
			summon_file_dialog: false,
			upload_filesize: function(size) {
				return Basic.parseSizeStr(size) <= 2097152 || I.mode === 'client';
			},
			use_http_method: function(methods) {
				return !Basic.arrayDiff(methods, ['GET', 'POST']);
			}
		}, { 
			// capabilities that require specific mode
			access_binary: function(value) {
				return value ? 'browser' : 'client';
			},
			access_image_binary: function(value) {
				return value ? 'browser' : 'client';
			},
			report_upload_progress: function(value) {
				return value ? 'browser' : 'client';
			},
			return_response_type: function(responseType) {
				return Basic.arrayDiff(responseType, ['', 'text', 'json', 'document']) ? 'browser' : ['client', 'browser'];
			},
			return_status_code: function(code) {
				return Basic.arrayDiff(code, [200, 404]) ? 'browser' : ['client', 'browser'];
			},
			send_binary_string: function(value) {
				return value ? 'browser' : 'client';
			},
			send_browser_cookies: function(value) {
				return value ? 'browser' : 'client';
			},
			send_custom_headers: function(value) {
				return value ? 'browser' : 'client';
			},
			stream_upload: function(value) {
				return value ? 'client' : 'browser';
			},
			upload_filesize: function(size) {
				return Basic.parseSizeStr(size) >= 2097152 ? 'client' : 'browser';
			}
		}, 'client');


		// minimal requirement for Flash Player version
		if (getShimVersion() < 10) {
			this.mode = false; // with falsy mode, runtime won't operable, no matter what the mode was before
		}


		Basic.extend(this, {

			getShim: function() {
				return Dom.get(this.uid);
			},

			shimExec: function(component, action) {
				var args = [].slice.call(arguments, 2);
				return I.getShim().exec(this.uid, component, action, args);
			},

			init: function() {
				var html, el, container;

				container = this.getShimContainer();

				// if not the minimal height, shims are not initialized in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
				Basic.extend(container.style, {
					position: 'absolute',
					top: '-8px',
					left: '-8px',
					width: '9px',
					height: '9px',
					overflow: 'hidden'
				});

				// insert flash object
				html = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' +  options.swf_url + '" ';

				if (Env.browser === 'IE') {
					html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
				}

				html += 'width="100%" height="100%" style="outline:0">'  +
					'<param name="movie" value="' + options.swf_url + '" />' +
					'<param name="flashvars" value="uid=' + escape(this.uid) + '&target=' + Env.global_event_dispatcher + '" />' +
					'<param name="wmode" value="transparent" />' +
					'<param name="allowscriptaccess" value="always" />' +
				'</object>';

				if (Env.browser === 'IE') {
					el = document.createElement('div');
					container.appendChild(el);
					el.outerHTML = html;
					el = container = null; // just in case
				} else {
					container.innerHTML = html;
				}

				// Init is dispatched by the shim
				initTimer = setTimeout(function() {
					if (I && !I.initialized) { // runtime might be already destroyed by this moment
						I.trigger("Error", new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));
					}
				}, 5000);
			},

			destroy: (function(destroy) { // extend default destroy method
				return function() {
					destroy.call(I);
					clearTimeout(initTimer); // initialization check might be still onwait
					options = initTimer = destroy = I = null;
				};
			}(this.destroy))

		}, extensions);
	}

	Runtime.addConstructor(type, FlashRuntime);

	return extensions;
});

// Included from: src/javascript/runtime/flash/file/Blob.js

/**
 * Blob.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/file/Blob
@private
*/
define("moxie/runtime/flash/file/Blob", [
	"moxie/runtime/flash/Runtime",
	"moxie/file/Blob"
], function(extensions, Blob) {

	var FlashBlob = {
		slice: function(blob, start, end, type) {
			var self = this.getRuntime();

			if (start < 0) {
				start = Math.max(blob.size + start, 0);
			} else if (start > 0) {
				start = Math.min(start, blob.size);
			}

			if (end < 0) {
				end = Math.max(blob.size + end, 0);
			} else if (end > 0) {
				end = Math.min(end, blob.size);
			}

			blob = self.shimExec.call(this, 'Blob', 'slice', start, end, type || '');

			if (blob) {
				blob = new Blob(self.uid, blob);
			}
			return blob;
		}
	};

	return (extensions.Blob = FlashBlob);
});

// Included from: src/javascript/runtime/flash/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/file/FileInput
@private
*/
define("moxie/runtime/flash/file/FileInput", [
	"moxie/runtime/flash/Runtime"
], function(extensions) {
	
	var FileInput = {		
		init: function(options) {
			this.getRuntime().shimExec.call(this, 'FileInput', 'init', {
				name: options.name,
				accept: options.accept,
				multiple: options.multiple
			});
			this.trigger('ready');
		}
	};

	return (extensions.FileInput = FileInput);
});

// Included from: src/javascript/runtime/flash/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/file/FileReader
@private
*/
define("moxie/runtime/flash/file/FileReader", [
	"moxie/runtime/flash/Runtime",
	"moxie/core/utils/Encode"
], function(extensions, Encode) {

	var _result = '';

	function _formatData(data, op) {
		switch (op) {
			case 'readAsText':
				return Encode.atob(data, 'utf8');
			case 'readAsBinaryString':
				return Encode.atob(data);
			case 'readAsDataURL':
				return data;
		}
		return null;
	}

	var FileReader = {
		read: function(op, blob) {
			var target = this, self = target.getRuntime();

			// special prefix for DataURL read mode
			if (op === 'readAsDataURL') {
				_result = 'data:' + (blob.type || '') + ';base64,';
			}

			target.bind('Progress', function(e, data) {
				if (data) {
					_result += _formatData(data, op);
				}
			});

			return self.shimExec.call(this, 'FileReader', 'readAsBase64', blob.uid);
		},

		getResult: function() {
			return _result;
		},

		destroy: function() {
			_result = null;
		}
	};

	return (extensions.FileReader = FileReader);
});

// Included from: src/javascript/runtime/flash/file/FileReaderSync.js

/**
 * FileReaderSync.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/file/FileReaderSync
@private
*/
define("moxie/runtime/flash/file/FileReaderSync", [
	"moxie/runtime/flash/Runtime",
	"moxie/core/utils/Encode"
], function(extensions, Encode) {
	
	function _formatData(data, op) {
		switch (op) {
			case 'readAsText':
				return Encode.atob(data, 'utf8');
			case 'readAsBinaryString':
				return Encode.atob(data);
			case 'readAsDataURL':
				return data;
		}
		return null;
	}

	var FileReaderSync = {
		read: function(op, blob) {
			var result, self = this.getRuntime();

			result = self.shimExec.call(this, 'FileReaderSync', 'readAsBase64', blob.uid);
			if (!result) {
				return null; // or throw ex
			}

			// special prefix for DataURL read mode
			if (op === 'readAsDataURL') {
				result = 'data:' + (blob.type || '') + ';base64,' + result;
			}

			return _formatData(result, op, blob.type);
		}
	};

	return (extensions.FileReaderSync = FileReaderSync);
});

// Included from: src/javascript/runtime/flash/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/xhr/XMLHttpRequest
@private
*/
define("moxie/runtime/flash/xhr/XMLHttpRequest", [
	"moxie/runtime/flash/Runtime",
	"moxie/core/utils/Basic",
	"moxie/file/Blob",
	"moxie/file/File",
	"moxie/file/FileReaderSync",
	"moxie/xhr/FormData",
	"moxie/runtime/Transporter"
], function(extensions, Basic, Blob, File, FileReaderSync, FormData, Transporter) {
	
	var XMLHttpRequest = {

		send: function(meta, data) {
			var target = this, self = target.getRuntime();

			function send() {
				meta.transport = self.mode;
				self.shimExec.call(target, 'XMLHttpRequest', 'send', meta, data);
			}


			function appendBlob(name, blob) {
				self.shimExec.call(target, 'XMLHttpRequest', 'appendBlob', name, blob.uid);
				data = null;
				send();
			}


			function attachBlob(blob, cb) {
				var tr = new Transporter();

				tr.bind("TransportingComplete", function() {
					cb(this.result);
				});

				tr.transport(blob.getSource(), blob.type, {
					ruid: self.uid
				});
			}

			// copy over the headers if any
			if (!Basic.isEmptyObj(meta.headers)) {
				Basic.each(meta.headers, function(value, header) {
					self.shimExec.call(target, 'XMLHttpRequest', 'setRequestHeader', header, value.toString()); // Silverlight doesn't accept integers into the arguments of type object
				});
			}

			// transfer over multipart params and blob itself
			if (data instanceof FormData) {
				var blobField;
				data.each(function(value, name) {
					if (value instanceof Blob) {
						blobField = name;
					} else {
						self.shimExec.call(target, 'XMLHttpRequest', 'append', name, value);
					}
				});

				if (!data.hasBlob()) {
					data = null;
					send();
				} else {
					var blob = data.getBlob();
					if (blob.isDetached()) {
						attachBlob(blob, function(attachedBlob) {
							blob.destroy();
							appendBlob(blobField, attachedBlob);		
						});
					} else {
						appendBlob(blobField, blob);
					}
				}
			} else if (data instanceof Blob) {
				if (data.isDetached()) {
					attachBlob(data, function(attachedBlob) {
						data.destroy();
						data = attachedBlob.uid;
						send();
					});
				} else {
					data = data.uid;
					send();
				}
			} else {
				send();
			}
		},

		getResponse: function(responseType) {
			var frs, blob, self = this.getRuntime();

			blob = self.shimExec.call(this, 'XMLHttpRequest', 'getResponseAsBlob');

			if (blob) {
				blob = new File(self.uid, blob);

				if ('blob' === responseType) {
					return blob;
				}

				try { 
					frs = new FileReaderSync();

					if (!!~Basic.inArray(responseType, ["", "text"])) {
						return frs.readAsText(blob);
					} else if ('json' === responseType && !!window.JSON) {
						return JSON.parse(frs.readAsText(blob));
					}
				} finally {
					blob.destroy();
				}
			}
			return null;
		},

		abort: function(upload_complete_flag) {
			var self = this.getRuntime();

			self.shimExec.call(this, 'XMLHttpRequest', 'abort');

			this.dispatchEvent('readystatechange');
			// this.dispatchEvent('progress');
			this.dispatchEvent('abort');

			//if (!upload_complete_flag) {
				// this.dispatchEvent('uploadprogress');
			//}
		}
	};

	return (extensions.XMLHttpRequest = XMLHttpRequest);
});

// Included from: src/javascript/runtime/flash/runtime/Transporter.js

/**
 * Transporter.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/runtime/Transporter
@private
*/
define("moxie/runtime/flash/runtime/Transporter", [
	"moxie/runtime/flash/Runtime",
	"moxie/file/Blob"
], function(extensions, Blob) {

	var Transporter = {
		getAsBlob: function(type) {
			var self = this.getRuntime()
			, blob = self.shimExec.call(this, 'Transporter', 'getAsBlob', type)
			;
			if (blob) {
				return new Blob(self.uid, blob);
			}
			return null;
		}
	};

	return (extensions.Transporter = Transporter);
});

// Included from: src/javascript/runtime/flash/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/image/Image
@private
*/
define("moxie/runtime/flash/image/Image", [
	"moxie/runtime/flash/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/Transporter",
	"moxie/file/Blob",
	"moxie/file/FileReaderSync"
], function(extensions, Basic, Transporter, Blob, FileReaderSync) {
	
	var Image = {
		loadFromBlob: function(blob) {
			var comp = this, self = comp.getRuntime();

			function exec(srcBlob) {
				self.shimExec.call(comp, 'Image', 'loadFromBlob', srcBlob.uid);
				comp = self = null;
			}

			if (blob.isDetached()) { // binary string
				var tr = new Transporter();
				tr.bind("TransportingComplete", function() {
					exec(tr.result.getSource());
				});
				tr.transport(blob.getSource(), blob.type, { ruid: self.uid });
			} else {
				exec(blob.getSource());
			}
		},

		loadFromImage: function(img) {
			var self = this.getRuntime();
			return self.shimExec.call(this, 'Image', 'loadFromImage', img.uid);
		},

		getAsBlob: function(type, quality) {
			var self = this.getRuntime()
			, blob = self.shimExec.call(this, 'Image', 'getAsBlob', type, quality)
			;
			if (blob) {
				return new Blob(self.uid, blob);
			}
			return null;
		},

		getAsDataURL: function() {
			var self = this.getRuntime()
			, blob = self.Image.getAsBlob.apply(this, arguments)
			, frs
			;
			if (!blob) {
				return null;
			}
			frs = new FileReaderSync();
			return frs.readAsDataURL(blob);
		}
	};

	return (extensions.Image = Image);
});

// Included from: src/javascript/runtime/silverlight/Runtime.js

/**
 * RunTime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global ActiveXObject:true */

/**
Defines constructor for Silverlight runtime.

@class moxie/runtime/silverlight/Runtime
@private
*/
define("moxie/runtime/silverlight/Runtime", [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Env",
	"moxie/core/utils/Dom",
	"moxie/core/Exceptions",
	"moxie/runtime/Runtime"
], function(Basic, Env, Dom, x, Runtime) {
	
	var type = "silverlight", extensions = {};

	function isInstalled(version) {
		var isVersionSupported = false, control = null, actualVer,
			actualVerArray, reqVerArray, requiredVersionPart, actualVersionPart, index = 0;

		try {
			try {
				control = new ActiveXObject('AgControl.AgControl');

				if (control.IsVersionSupported(version)) {
					isVersionSupported = true;
				}

				control = null;
			} catch (e) {
				var plugin = navigator.plugins["Silverlight Plug-In"];

				if (plugin) {
					actualVer = plugin.description;

					if (actualVer === "1.0.30226.2") {
						actualVer = "2.0.30226.2";
					}

					actualVerArray = actualVer.split(".");

					while (actualVerArray.length > 3) {
						actualVerArray.pop();
					}

					while ( actualVerArray.length < 4) {
						actualVerArray.push(0);
					}

					reqVerArray = version.split(".");

					while (reqVerArray.length > 4) {
						reqVerArray.pop();
					}

					do {
						requiredVersionPart = parseInt(reqVerArray[index], 10);
						actualVersionPart = parseInt(actualVerArray[index], 10);
						index++;
					} while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);

					if (requiredVersionPart <= actualVersionPart && !isNaN(requiredVersionPart)) {
						isVersionSupported = true;
					}
				}
			}
		} catch (e2) {
			isVersionSupported = false;
		}

		return isVersionSupported;
	}

	/**
	Constructor for the Silverlight Runtime

	@class SilverlightRuntime
	@extends Runtime
	*/
	function SilverlightRuntime(options) {
		var I = this, initTimer;

		options = Basic.extend({ xap_url: Env.xap_url }, options);

		Runtime.call(this, options, type, {
			access_binary: Runtime.capTrue,
			access_image_binary: Runtime.capTrue,
			display_media: Runtime.capTrue,
			do_cors: Runtime.capTrue,
			drag_and_drop: false,
			report_upload_progress: Runtime.capTrue,
			resize_image: Runtime.capTrue,
			return_response_headers: function(value) {
				return value && I.mode === 'client';
			},
			return_response_type: function(responseType) {
				if (responseType !== 'json') {
					return true;
				} else {
					return !!window.JSON;
				}
			},
			return_status_code: function(code) {
				return I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);
			},
			select_file: Runtime.capTrue,
			select_multiple: Runtime.capTrue,
			send_binary_string: Runtime.capTrue,
			send_browser_cookies: function(value) {
				return value && I.mode === 'browser';
			},
			send_custom_headers: function(value) {
				return value && I.mode === 'client';
			},
			send_multipart: Runtime.capTrue,
			slice_blob: Runtime.capTrue,
			stream_upload: true,
			summon_file_dialog: false,
			upload_filesize: Runtime.capTrue,
			use_http_method: function(methods) {
				return I.mode === 'client' || !Basic.arrayDiff(methods, ['GET', 'POST']);
			}
		}, { 
			// capabilities that require specific mode
			return_response_headers: function(value) {
				return value ? 'client' : 'browser';
			},
			return_status_code: function(code) {
				return Basic.arrayDiff(code, [200, 404]) ? 'client' : ['client', 'browser'];
			},
			send_browser_cookies: function(value) {
				return value ? 'browser' : 'client';
			},
			send_custom_headers: function(value) {
				return value ? 'client' : 'browser';
			},
			use_http_method: function(methods) {
				return Basic.arrayDiff(methods, ['GET', 'POST']) ? 'client' : ['client', 'browser'];
			}
		});


		// minimal requirement
		if (!isInstalled('2.0.31005.0') || Env.browser === 'Opera') {
			this.mode = false;
		}


		Basic.extend(this, {
			getShim: function() {
				return Dom.get(this.uid).content.Moxie;
			},

			shimExec: function(component, action) {
				var args = [].slice.call(arguments, 2);
				return I.getShim().exec(this.uid, component, action, args);
			},

			init : function() {
				var container;

				container = this.getShimContainer();

				container.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">' +
					'<param name="source" value="' + options.xap_url + '"/>' +
					'<param name="background" value="Transparent"/>' +
					'<param name="windowless" value="true"/>' +
					'<param name="enablehtmlaccess" value="true"/>' +
					'<param name="initParams" value="uid=' + this.uid + ',target=' + Env.global_event_dispatcher + '"/>' +
				'</object>';

				// Init is dispatched by the shim
				initTimer = setTimeout(function() {
					if (I && !I.initialized) { // runtime might be already destroyed by this moment
						I.trigger("Error", new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));
					}
				}, Env.OS !== 'Windows'? 10000 : 5000); // give it more time to initialize in non Windows OS (like Mac)
			},

			destroy: (function(destroy) { // extend default destroy method
				return function() {
					destroy.call(I);
					clearTimeout(initTimer); // initialization check might be still onwait
					options = initTimer = destroy = I = null;
				};
			}(this.destroy))

		}, extensions);
	}

	Runtime.addConstructor(type, SilverlightRuntime); 

	return extensions;
});

// Included from: src/javascript/runtime/silverlight/file/Blob.js

/**
 * Blob.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/Blob
@private
*/
define("moxie/runtime/silverlight/file/Blob", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/file/Blob"
], function(extensions, Basic, Blob) {
	return (extensions.Blob = Basic.extend({}, Blob));
});

// Included from: src/javascript/runtime/silverlight/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/FileInput
@private
*/
define("moxie/runtime/silverlight/file/FileInput", [
	"moxie/runtime/silverlight/Runtime"
], function(extensions) {
	
	var FileInput = {
		init: function(options) {

			function toFilters(accept) {
				var filter = '';
				for (var i = 0; i < accept.length; i++) {
					filter += (filter !== '' ? '|' : '') + accept[i].title + " | *." + accept[i].extensions.replace(/,/g, ';*.');
				}
				return filter;
			}
			
			this.getRuntime().shimExec.call(this, 'FileInput', 'init', toFilters(options.accept), options.name, options.multiple);
			this.trigger('ready');
		}
	};

	return (extensions.FileInput = FileInput);
});

// Included from: src/javascript/runtime/silverlight/file/FileDrop.js

/**
 * FileDrop.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/FileDrop
@private
*/
define("moxie/runtime/silverlight/file/FileDrop", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Dom", 
	"moxie/core/utils/Events"
], function(extensions, Dom, Events) {

	// not exactly useful, since works only in safari (...crickets...)
	var FileDrop = {
		init: function() {
			var comp = this, self = comp.getRuntime(), dropZone;

			dropZone = self.getShimContainer();

			Events.addEvent(dropZone, 'dragover', function(e) {
				e.preventDefault();
				e.stopPropagation();
				e.dataTransfer.dropEffect = 'copy';
			}, comp.uid);

			Events.addEvent(dropZone, 'dragenter', function(e) {
				e.preventDefault();
				var flag = Dom.get(self.uid).dragEnter(e);
				// If handled, then stop propagation of event in DOM
				if (flag) {
					e.stopPropagation();
				}
			}, comp.uid);

			Events.addEvent(dropZone, 'drop', function(e) {
				e.preventDefault();
				var flag = Dom.get(self.uid).dragDrop(e);
				// If handled, then stop propagation of event in DOM
				if (flag) {
					e.stopPropagation();
				}
			}, comp.uid);

			return self.shimExec.call(this, 'FileDrop', 'init');
		}
	};

	return (extensions.FileDrop = FileDrop);
});

// Included from: src/javascript/runtime/silverlight/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/FileReader
@private
*/
define("moxie/runtime/silverlight/file/FileReader", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/file/FileReader"
], function(extensions, Basic, FileReader) {
	return (extensions.FileReader = Basic.extend({}, FileReader));
});

// Included from: src/javascript/runtime/silverlight/file/FileReaderSync.js

/**
 * FileReaderSync.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/FileReaderSync
@private
*/
define("moxie/runtime/silverlight/file/FileReaderSync", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/file/FileReaderSync"
], function(extensions, Basic, FileReaderSync) {
	return (extensions.FileReaderSync = Basic.extend({}, FileReaderSync));
});

// Included from: src/javascript/runtime/silverlight/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/xhr/XMLHttpRequest
@private
*/
define("moxie/runtime/silverlight/xhr/XMLHttpRequest", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/xhr/XMLHttpRequest"
], function(extensions, Basic, XMLHttpRequest) {
	return (extensions.XMLHttpRequest = Basic.extend({}, XMLHttpRequest));
});

// Included from: src/javascript/runtime/silverlight/runtime/Transporter.js

/**
 * Transporter.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/runtime/Transporter
@private
*/
define("moxie/runtime/silverlight/runtime/Transporter", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/runtime/Transporter"
], function(extensions, Basic, Transporter) {
	return (extensions.Transporter = Basic.extend({}, Transporter));
});

// Included from: src/javascript/runtime/silverlight/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */
 
/**
@class moxie/runtime/silverlight/image/Image
@private
*/
define("moxie/runtime/silverlight/image/Image", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/image/Image"
], function(extensions, Basic, Image) {
	return (extensions.Image = Basic.extend({}, Image, {

		getInfo: function() {
			var self = this.getRuntime()
			, grps = ['tiff', 'exif', 'gps']
			, info = { meta: {} }
			, rawInfo = self.shimExec.call(this, 'Image', 'getInfo')
			;

			if (rawInfo.meta) {
				Basic.each(grps, function(grp) {
					var meta = rawInfo.meta[grp]
					, tag
					, i
					, length
					, value
					;
					if (meta && meta.keys) {
						info.meta[grp] = {};
						for (i = 0, length = meta.keys.length; i < length; i++) {
							tag = meta.keys[i];
							value = meta[tag];
							if (value) {
								// convert numbers
								if (/^(\d|[1-9]\d+)$/.test(value)) { // integer (make sure doesn't start with zero)
									value = parseInt(value, 10);
								} else if (/^\d*\.\d+$/.test(value)) { // double
									value = parseFloat(value);
								}
								info.meta[grp][tag] = value;
							}
						}
					}
				});
			}

			info.width = parseInt(rawInfo.width, 10);
			info.height = parseInt(rawInfo.height, 10);
			info.size = parseInt(rawInfo.size, 10);
			info.type = rawInfo.type;
			info.name = rawInfo.name;

			return info;
		}
	}));
});

// Included from: src/javascript/runtime/html4/Runtime.js

/**
 * Runtime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global File:true */

/**
Defines constructor for HTML4 runtime.

@class moxie/runtime/html4/Runtime
@private
*/
define("moxie/runtime/html4/Runtime", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/runtime/Runtime",
	"moxie/core/utils/Env"
], function(Basic, x, Runtime, Env) {
	
	var type = 'html4', extensions = {};

	function Html4Runtime(options) {
		var I = this
		, Test = Runtime.capTest
		, True = Runtime.capTrue
		;

		Runtime.call(this, options, type, {
			access_binary: Test(window.FileReader || window.File && File.getAsDataURL),
			access_image_binary: false,
			display_media: Test(extensions.Image && (Env.can('create_canvas') || Env.can('use_data_uri_over32kb'))),
			do_cors: false,
			drag_and_drop: false,
			filter_by_extension: Test(function() { // if you know how to feature-detect this, please suggest
				return (Env.browser === 'Chrome' && Env.version >= 28) || (Env.browser === 'IE' && Env.version >= 10);
			}()),
			resize_image: function() {
				return extensions.Image && I.can('access_binary') && Env.can('create_canvas');
			},
			report_upload_progress: false,
			return_response_headers: false,
			return_response_type: function(responseType) {
				if (responseType === 'json' && !!window.JSON) {
					return true;
				} 
				return !!~Basic.inArray(responseType, ['text', 'document', '']);
			},
			return_status_code: function(code) {
				return !Basic.arrayDiff(code, [200, 404]);
			},
			select_file: function() {
				return Env.can('use_fileinput');
			},
			select_multiple: false,
			send_binary_string: false,
			send_custom_headers: false,
			send_multipart: true,
			slice_blob: false,
			stream_upload: function() {
				return I.can('select_file');
			},
			summon_file_dialog: Test(function() { // yeah... some dirty sniffing here...
				return (Env.browser === 'Firefox' && Env.version >= 4) ||
					(Env.browser === 'Opera' && Env.version >= 12) ||
					!!~Basic.inArray(Env.browser, ['Chrome', 'Safari']);
			}()),
			upload_filesize: True,
			use_http_method: function(methods) {
				return !Basic.arrayDiff(methods, ['GET', 'POST']);
			}
		});


		Basic.extend(this, {
			init : function() {
				this.trigger("Init");
			},

			destroy: (function(destroy) { // extend default destroy method
				return function() {
					destroy.call(I);
					destroy = I = null;
				};
			}(this.destroy))
		});

		Basic.extend(this.getShim(), extensions);
	}

	Runtime.addConstructor(type, Html4Runtime);

	return extensions;
});

// Included from: src/javascript/runtime/html4/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html4/file/FileInput
@private
*/
define("moxie/runtime/html4/file/FileInput", [
	"moxie/runtime/html4/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/utils/Events",
	"moxie/core/utils/Mime",
	"moxie/core/utils/Env"
], function(extensions, Basic, Dom, Events, Mime, Env) {
	
	function FileInput() {
		var _uid, _files = [], _mimes = [], _options;

		function addInput() {
			var comp = this, I = comp.getRuntime(), shimContainer, browseButton, currForm, form, input, uid;

			uid = Basic.guid('uid_');

			shimContainer = I.getShimContainer(); // we get new ref everytime to avoid memory leaks in IE

			if (_uid) { // move previous form out of the view
				currForm = Dom.get(_uid + '_form');
				if (currForm) {
					Basic.extend(currForm.style, { top: '100%' });
				}
			}

			// build form in DOM, since innerHTML version not able to submit file for some reason
			form = document.createElement('form');
			form.setAttribute('id', uid + '_form');
			form.setAttribute('method', 'post');
			form.setAttribute('enctype', 'multipart/form-data');
			form.setAttribute('encoding', 'multipart/form-data');

			Basic.extend(form.style, {
				overflow: 'hidden',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%'
			});

			input = document.createElement('input');
			input.setAttribute('id', uid);
			input.setAttribute('type', 'file');
			input.setAttribute('name', _options.name || 'Filedata');
			input.setAttribute('accept', _mimes.join(','));

			Basic.extend(input.style, {
				fontSize: '999px',
				opacity: 0
			});

			form.appendChild(input);
			shimContainer.appendChild(form);

			// prepare file input to be placed underneath the browse_button element
			Basic.extend(input.style, {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%'
			});

			if (Env.browser === 'IE' && Env.version < 10) {
				Basic.extend(input.style, {
					filter : "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
				});
			}

			input.onchange = function() { // there should be only one handler for this
				var file;

				if (!this.value) {
					return;
				}

				if (this.files) {
					file = this.files[0];
				} else {
					file = {
						name: this.value
					};
				}

				_files = [file];

				this.onchange = function() {}; // clear event handler
				addInput.call(comp);

				// after file is initialized as o.File, we need to update form and input ids
				comp.bind('change', function onChange() {
					var input = Dom.get(uid), form = Dom.get(uid + '_form'), file;

					comp.unbind('change', onChange);

					if (comp.files.length && input && form) {
						file = comp.files[0];

						input.setAttribute('id', file.uid);
						form.setAttribute('id', file.uid + '_form');

						// set upload target
						form.setAttribute('target', file.uid + '_iframe');
					}
					input = form = null;
				}, 998);

				input = form = null;
				comp.trigger('change');
			};


			// route click event to the input
			if (I.can('summon_file_dialog')) {
				browseButton = Dom.get(_options.browse_button);
				Events.removeEvent(browseButton, 'click', comp.uid);
				Events.addEvent(browseButton, 'click', function(e) {
					if (input && !input.disabled) { // for some reason FF (up to 8.0.1 so far) lets to click disabled input[type=file]
						input.click();
					}
					e.preventDefault();
				}, comp.uid);
			}

			_uid = uid;

			shimContainer = currForm = browseButton = null;
		}

		Basic.extend(this, {
			init: function(options) {
				var comp = this, I = comp.getRuntime(), shimContainer;

				// figure out accept string
				_options = options;
				_mimes = options.accept.mimes || Mime.extList2mimes(options.accept, I.can('filter_by_extension'));

				shimContainer = I.getShimContainer();

				(function() {
					var browseButton, zIndex, top;

					browseButton = Dom.get(options.browse_button);

					// Route click event to the input[type=file] element for browsers that support such behavior
					if (I.can('summon_file_dialog')) {
						if (Dom.getStyle(browseButton, 'position') === 'static') {
							browseButton.style.position = 'relative';
						}

						zIndex = parseInt(Dom.getStyle(browseButton, 'z-index'), 10) || 1;

						browseButton.style.zIndex = zIndex;
						shimContainer.style.zIndex = zIndex - 1;
					}

					/* Since we have to place input[type=file] on top of the browse_button for some browsers,
					browse_button loses interactivity, so we restore it here */
					top = I.can('summon_file_dialog') ? browseButton : shimContainer;

					Events.addEvent(top, 'mouseover', function() {
						comp.trigger('mouseenter');
					}, comp.uid);

					Events.addEvent(top, 'mouseout', function() {
						comp.trigger('mouseleave');
					}, comp.uid);

					Events.addEvent(top, 'mousedown', function() {
						comp.trigger('mousedown');
					}, comp.uid);

					Events.addEvent(Dom.get(options.container), 'mouseup', function() {
						comp.trigger('mouseup');
					}, comp.uid);

					browseButton = null;
				}());

				addInput.call(this);

				shimContainer = null;

				// trigger ready event asynchronously
				comp.trigger({
					type: 'ready',
					async: true
				});
			},

			getFiles: function() {
				return _files;
			},

			disable: function(state) {
				var input;

				if ((input = Dom.get(_uid))) {
					input.disabled = !!state;
				}
			},

			destroy: function() {
				var I = this.getRuntime()
				, shim = I.getShim()
				, shimContainer = I.getShimContainer()
				;
				
				Events.removeAllEvents(shimContainer, this.uid);
				Events.removeAllEvents(_options && Dom.get(_options.container), this.uid);
				Events.removeAllEvents(_options && Dom.get(_options.browse_button), this.uid);
				
				if (shimContainer) {
					shimContainer.innerHTML = '';
				}

				shim.removeInstance(this.uid);

				_uid = _files = _mimes = _options = shimContainer = shim = null;
			}
		});
	}

	return (extensions.FileInput = FileInput);
});

// Included from: src/javascript/runtime/html4/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html4/file/FileReader
@private
*/
define("moxie/runtime/html4/file/FileReader", [
	"moxie/runtime/html4/Runtime",
	"moxie/runtime/html5/file/FileReader"
], function(extensions, FileReader) {
	return (extensions.FileReader = FileReader);
});

// Included from: src/javascript/runtime/html4/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html4/xhr/XMLHttpRequest
@private
*/
define("moxie/runtime/html4/xhr/XMLHttpRequest", [
	"moxie/runtime/html4/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/utils/Url",
	"moxie/core/Exceptions",
	"moxie/core/utils/Events",
	"moxie/file/Blob",
	"moxie/xhr/FormData"
], function(extensions, Basic, Dom, Url, x, Events, Blob, FormData) {
	
	function XMLHttpRequest() {
		var _status, _response, _iframe;

		function cleanup(cb) {
			var target = this, uid, form, inputs, i, hasFile = false;

			if (!_iframe) {
				return;
			}

			uid = _iframe.id.replace(/_iframe$/, '');

			form = Dom.get(uid + '_form');
			if (form) {
				inputs = form.getElementsByTagName('input');
				i = inputs.length;

				while (i--) {
					switch (inputs[i].getAttribute('type')) {
						case 'hidden':
							inputs[i].parentNode.removeChild(inputs[i]);
							break;
						case 'file':
							hasFile = true; // flag the case for later
							break;
					}
				}
				inputs = [];

				if (!hasFile) { // we need to keep the form for sake of possible retries
					form.parentNode.removeChild(form);
				}
				form = null;
			}

			// without timeout, request is marked as canceled (in console)
			setTimeout(function() {
				Events.removeEvent(_iframe, 'load', target.uid);
				if (_iframe.parentNode) { // #382
					_iframe.parentNode.removeChild(_iframe);
				}

				// check if shim container has any other children, if - not, remove it as well
				var shimContainer = target.getRuntime().getShimContainer();
				if (!shimContainer.children.length) {
					shimContainer.parentNode.removeChild(shimContainer);
				}

				shimContainer = _iframe = null;
				cb();
			}, 1);
		}

		Basic.extend(this, {
			send: function(meta, data) {
				var target = this, I = target.getRuntime(), uid, form, input, blob;

				_status = _response = null;

				function createIframe() {
					var container = I.getShimContainer() || document.body
					, temp = document.createElement('div')
					;

					// IE 6 won't be able to set the name using setAttribute or iframe.name
					temp.innerHTML = '<iframe id="' + uid + '_iframe" name="' + uid + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>';
					_iframe = temp.firstChild;
					container.appendChild(_iframe);

					/* _iframe.onreadystatechange = function() {
						console.info(_iframe.readyState);
					};*/

					Events.addEvent(_iframe, 'load', function() { // _iframe.onload doesn't work in IE lte 8
						var el;

						try {
							el = _iframe.contentWindow.document || _iframe.contentDocument || window.frames[_iframe.id].document;

							// try to detect some standard error pages
							if (/^4(0[0-9]|1[0-7]|2[2346])\s/.test(el.title)) { // test if title starts with 4xx HTTP error
								_status = el.title.replace(/^(\d+).*$/, '$1');
							} else {
								_status = 200;
								// get result
								_response = Basic.trim(el.body.innerHTML);

								// we need to fire these at least once
								target.trigger({
									type: 'progress',
									loaded: _response.length,
									total: _response.length
								});

								if (blob) { // if we were uploading a file
									target.trigger({
										type: 'uploadprogress',
										loaded: blob.size || 1025,
										total: blob.size || 1025
									});
								}
							}
						} catch (ex) {
							if (Url.hasSameOrigin(meta.url)) {
								// if response is sent with error code, iframe in IE gets redirected to res://ieframe.dll/http_x.htm
								// which obviously results to cross domain error (wtf?)
								_status = 404;
							} else {
								cleanup.call(target, function() {
									target.trigger('error');
								});
								return;
							}
						}	
					
						cleanup.call(target, function() {
							target.trigger('load');
						});
					}, target.uid);
				} // end createIframe

				// prepare data to be sent and convert if required
				if (data instanceof FormData && data.hasBlob()) {
					blob = data.getBlob();
					uid = blob.uid;
					input = Dom.get(uid);
					form = Dom.get(uid + '_form');
					if (!form) {
						throw new x.DOMException(x.DOMException.NOT_FOUND_ERR);
					}
				} else {
					uid = Basic.guid('uid_');

					form = document.createElement('form');
					form.setAttribute('id', uid + '_form');
					form.setAttribute('method', meta.method);
					form.setAttribute('enctype', 'multipart/form-data');
					form.setAttribute('encoding', 'multipart/form-data');
					form.setAttribute('target', uid + '_iframe');

					I.getShimContainer().appendChild(form);
				}

				if (data instanceof FormData) {
					data.each(function(value, name) {
						if (value instanceof Blob) {
							if (input) {
								input.setAttribute('name', name);
							}
						} else {
							var hidden = document.createElement('input');

							Basic.extend(hidden, {
								type : 'hidden',
								name : name,
								value : value
							});

							// make sure that input[type="file"], if it's there, comes last
							if (input) {
								form.insertBefore(hidden, input);
							} else {
								form.appendChild(hidden);
							}
						}
					});
				}

				// set destination url
				form.setAttribute("action", meta.url);

				createIframe();
				form.submit();
				target.trigger('loadstart');
			},

			getStatus: function() {
				return _status;
			},

			getResponse: function(responseType) {
				if ('json' === responseType) {
					// strip off <pre>..</pre> tags that might be enclosing the response
					if (Basic.typeOf(_response) === 'string' && !!window.JSON) {
						try {
							return JSON.parse(_response.replace(/^\s*<pre[^>]*>/, '').replace(/<\/pre>\s*$/, ''));
						} catch (ex) {
							return null;
						}
					} 
				} else if ('document' === responseType) {

				}
				return _response;
			},

			abort: function() {
				var target = this;

				if (_iframe && _iframe.contentWindow) {
					if (_iframe.contentWindow.stop) { // FireFox/Safari/Chrome
						_iframe.contentWindow.stop();
					} else if (_iframe.contentWindow.document.execCommand) { // IE
						_iframe.contentWindow.document.execCommand('Stop');
					} else {
						_iframe.src = "about:blank";
					}
				}

				cleanup.call(this, function() {
					// target.dispatchEvent('readystatechange');
					target.dispatchEvent('abort');
				});
			}
		});
	}

	return (extensions.XMLHttpRequest = XMLHttpRequest);
});

// Included from: src/javascript/runtime/html4/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html4/image/Image
@private
*/
define("moxie/runtime/html4/image/Image", [
	"moxie/runtime/html4/Runtime",
	"moxie/runtime/html5/image/Image"
], function(extensions, Image) {
	return (extensions.Image = Image);
});

expose(["moxie/core/utils/Basic","moxie/core/I18n","moxie/core/utils/Mime","moxie/core/utils/Env","moxie/core/utils/Dom","moxie/core/Exceptions","moxie/core/EventTarget","moxie/core/utils/Encode","moxie/runtime/Runtime","moxie/runtime/RuntimeClient","moxie/file/Blob","moxie/file/File","moxie/file/FileInput","moxie/file/FileDrop","moxie/runtime/RuntimeTarget","moxie/file/FileReader","moxie/core/utils/Url","moxie/file/FileReaderSync","moxie/xhr/FormData","moxie/xhr/XMLHttpRequest","moxie/runtime/Transporter","moxie/image/Image","moxie/core/utils/Events"]);
})(this);/**
 * o.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global moxie:true */

/**
Globally exposed namespace with the most frequently used public classes and handy methods.

@class o
@static
@private
*/
(function(exports) {
	"use strict";

	var o = {}, inArray = exports.moxie.core.utils.Basic.inArray;

	// directly add some public classes
	// (we do it dynamically here, since for custom builds we cannot know beforehand what modules were included)
	(function addAlias(ns) {
		var name, itemType;
		for (name in ns) {
			itemType = typeof(ns[name]);
			if (itemType === 'object' && !~inArray(name, ['Exceptions', 'Env', 'Mime'])) {
				addAlias(ns[name]);
			} else if (itemType === 'function') {
				o[name] = ns[name];
			}
		}
	})(exports.moxie);

	// add some manually
	o.Env = exports.moxie.core.utils.Env;
	o.Mime = exports.moxie.core.utils.Mime;
	o.Exceptions = exports.moxie.core.Exceptions;

	// expose globally
	exports.mOxie = o;
	if (!exports.o) {
		exports.o = o;
	}
	return o;
})(this);


/***/ }),

/***/ "./qsuploader/plupload.dev.js":
/*!************************************!*\
  !*** ./qsuploader/plupload.dev.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moxie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moxie.js */ "./qsuploader/moxie.js");
/* harmony import */ var _moxie_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moxie_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Plupload - multi-runtime File Uploader
 * v2.1.2
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-05-14
 */
/**
 * Plupload.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global mOxie:true */



;(function(window, o, undef) {
console.log(o);
var delay = window.setTimeout
, fileFilters = {}
;

// convert plupload features to caps acceptable by mOxie
function normalizeCaps(settings) {		
	var features = settings.required_features, caps = {};

	function resolve(feature, value, strict) {
		// Feature notation is deprecated, use caps (this thing here is required for backward compatibility)
		var map = { 
			chunks: 'slice_blob',
			jpgresize: 'send_binary_string',
			pngresize: 'send_binary_string',
			progress: 'report_upload_progress',
			multi_selection: 'select_multiple',
			dragdrop: 'drag_and_drop',
			drop_element: 'drag_and_drop',
			headers: 'send_custom_headers',
			urlstream_upload: 'send_binary_string',
			canSendBinary: 'send_binary',
			triggerDialog: 'summon_file_dialog'
		};

		if (map[feature]) {
			caps[map[feature]] = value;
		} else if (!strict) {
			caps[feature] = value;
		}
	}

	if (typeof(features) === 'string') {
		plupload.each(features.split(/\s*,\s*/), function(feature) {
			resolve(feature, true);
		});
	} else if (typeof(features) === 'object') {
		plupload.each(features, function(value, feature) {
			resolve(feature, value);
		});
	} else if (features === true) {
		// check settings for required features
		if (settings.chunk_size > 0) {
			caps.slice_blob = true;
		}

		if (settings.resize.enabled || !settings.multipart) {
			caps.send_binary_string = true;
		}
		
		plupload.each(settings, function(value, feature) {
			resolve(feature, !!value, true); // strict check
		});
	}
	
	return caps;
}

/** 
 * @module plupload	
 * @static
 */
var plupload = {
	/**
	 * Plupload version will be replaced on build.
	 *
	 * @property VERSION
	 * @for Plupload
	 * @static
	 * @final
	 */
	VERSION : '2.1.2',

	/**
	 * Inital state of the queue and also the state ones it's finished all it's uploads.
	 *
	 * @property STOPPED
	 * @static
	 * @final
	 */
	STOPPED : 1,

	/**
	 * Upload process is running
	 *
	 * @property STARTED
	 * @static
	 * @final
	 */
	STARTED : 2,

	/**
	 * File is queued for upload
	 *
	 * @property QUEUED
	 * @static
	 * @final
	 */
	QUEUED : 1,

	/**
	 * File is being uploaded
	 *
	 * @property UPLOADING
	 * @static
	 * @final
	 */
	UPLOADING : 2,

	/**
	 * File has failed to be uploaded
	 *
	 * @property FAILED
	 * @static
	 * @final
	 */
	FAILED : 4,

	/**
	 * File has been uploaded successfully
	 *
	 * @property DONE
	 * @static
	 * @final
	 */
	DONE : 5,

	// Error constants used by the Error event

	/**
	 * Generic error for example if an exception is thrown inside Silverlight.
	 *
	 * @property GENERIC_ERROR
	 * @static
	 * @final
	 */
	GENERIC_ERROR : -100,

	/**
	 * HTTP transport error. For example if the server produces a HTTP status other than 200.
	 *
	 * @property HTTP_ERROR
	 * @static
	 * @final
	 */
	HTTP_ERROR : -200,

	/**
	 * Generic I/O error. For example if it wasn't possible to open the file stream on local machine.
	 *
	 * @property IO_ERROR
	 * @static
	 * @final
	 */
	IO_ERROR : -300,

	/**
	 * @property SECURITY_ERROR
	 * @static
	 * @final
	 */
	SECURITY_ERROR : -400,

	/**
	 * Initialization error. Will be triggered if no runtime was initialized.
	 *
	 * @property INIT_ERROR
	 * @static
	 * @final
	 */
	INIT_ERROR : -500,

	/**
	 * File size error. If the user selects a file that is too large it will be blocked and an error of this type will be triggered.
	 *
	 * @property FILE_SIZE_ERROR
	 * @static
	 * @final
	 */
	FILE_SIZE_ERROR : -600,

	/**
	 * File extension error. If the user selects a file that isn't valid according to the filters setting.
	 *
	 * @property FILE_EXTENSION_ERROR
	 * @static
	 * @final
	 */
	FILE_EXTENSION_ERROR : -601,

	/**
	 * Duplicate file error. If prevent_duplicates is set to true and user selects the same file again.
	 *
	 * @property FILE_DUPLICATE_ERROR
	 * @static
	 * @final
	 */
	FILE_DUPLICATE_ERROR : -602,

	/**
	 * Runtime will try to detect if image is proper one. Otherwise will throw this error.
	 *
	 * @property IMAGE_FORMAT_ERROR
	 * @static
	 * @final
	 */
	IMAGE_FORMAT_ERROR : -700,

	/**
	 * While working on files runtime may run out of memory and will throw this error.
	 *
	 * @since 2.1.2
	 * @property MEMORY_ERROR
	 * @static
	 * @final
	 */
	MEMORY_ERROR : -701,

	/**
	 * Each runtime has an upper limit on a dimension of the image it can handle. If bigger, will throw this error.
	 *
	 * @property IMAGE_DIMENSIONS_ERROR
	 * @static
	 * @final
	 */
	IMAGE_DIMENSIONS_ERROR : -702,

	/**
	 * Mime type lookup table.
	 *
	 * @property mimeTypes
	 * @type Object
	 * @final
	 */
	mimeTypes : o.mimes,

	/**
	 * In some cases sniffing is the only way around :(
	 */
	ua: o.ua,

	/**
	 * Gets the true type of the built-in object (better version of typeof).
	 * @credits Angus Croll (http://javascriptweblog.wordpress.com/)
	 *
	 * @method typeOf
	 * @static
	 * @param {Object} o Object to check.
	 * @return {String} Object [[Class]]
	 */
	typeOf: o.typeOf,

	/**
	 * Extends the specified object with another object.
	 *
	 * @method extend
	 * @static
	 * @param {Object} target Object to extend.
	 * @param {Object..} obj Multiple objects to extend with.
	 * @return {Object} Same as target, the extended object.
	 */
	extend : o.extend,

	/**
	 * Generates an unique ID. This is 99.99% unique since it takes the current time and 5 random numbers.
	 * The only way a user would be able to get the same ID is if the two persons at the same exact milisecond manages
	 * to get 5 the same random numbers between 0-65535 it also uses a counter so each call will be guaranteed to be page unique.
	 * It's more probable for the earth to be hit with an ansteriod. You can also if you want to be 100% sure set the plupload.guidPrefix property
	 * to an user unique key.
	 *
	 * @method guid
	 * @static
	 * @return {String} Virtually unique id.
	 */
	guid : o.guid,

	/**
	 * Get array of DOM Elements by their ids.
	 * 
	 * @method get
	 * @for Utils
	 * @param {String} id Identifier of the DOM Element
	 * @return {Array}
	*/
	get : function get(ids) {
		var els = [], el;

		if (o.typeOf(ids) !== 'array') {
			ids = [ids];
		}

		var i = ids.length;
		while (i--) {
			el = o.get(ids[i]);
			if (el) {
				els.push(el);
			}
		}

		return els.length ? els : null;
	},

	/**
	 * Executes the callback function for each item in array/object. If you return false in the
	 * callback it will break the loop.
	 *
	 * @method each
	 * @static
	 * @param {Object} obj Object to iterate.
	 * @param {function} callback Callback function to execute for each item.
	 */
	each : o.each,

	/**
	 * Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.
	 *
	 * @method getPos
	 * @static
	 * @param {Element} node HTML element or element id to get x, y position from.
	 * @param {Element} root Optional root element to stop calculations at.
	 * @return {object} Absolute position of the specified element object with x, y fields.
	 */
	getPos : o.getPos,

	/**
	 * Returns the size of the specified node in pixels.
	 *
	 * @method getSize
	 * @static
	 * @param {Node} node Node to get the size of.
	 * @return {Object} Object with a w and h property.
	 */
	getSize : o.getSize,

	/**
	 * Encodes the specified string.
	 *
	 * @method xmlEncode
	 * @static
	 * @param {String} s String to encode.
	 * @return {String} Encoded string.
	 */
	xmlEncode : function(str) {
		var xmlEncodeChars = {'<' : 'lt', '>' : 'gt', '&' : 'amp', '"' : 'quot', '\'' : '#39'}, xmlEncodeRegExp = /[<>&\"\']/g;

		return str ? ('' + str).replace(xmlEncodeRegExp, function(chr) {
			return xmlEncodeChars[chr] ? '&' + xmlEncodeChars[chr] + ';' : chr;
		}) : str;
	},

	/**
	 * Forces anything into an array.
	 *
	 * @method toArray
	 * @static
	 * @param {Object} obj Object with length field.
	 * @return {Array} Array object containing all items.
	 */
	toArray : o.toArray,

	/**
	 * Find an element in array and return it's index if present, otherwise return -1.
	 *
	 * @method inArray
	 * @static
	 * @param {mixed} needle Element to find
	 * @param {Array} array
	 * @return {Int} Index of the element, or -1 if not found
	 */
	inArray : o.inArray,

	/**
	 * Extends the language pack object with new items.
	 *
	 * @method addI18n
	 * @static
	 * @param {Object} pack Language pack items to add.
	 * @return {Object} Extended language pack object.
	 */
	addI18n : o.addI18n,

	/**
	 * Translates the specified string by checking for the english string in the language pack lookup.
	 *
	 * @method translate
	 * @static
	 * @param {String} str String to look for.
	 * @return {String} Translated string or the input string if it wasn't found.
	 */
	translate : o.translate,

	/**
	 * Checks if object is empty.
	 *
	 * @method isEmptyObj
	 * @static
	 * @param {Object} obj Object to check.
	 * @return {Boolean}
	 */
	isEmptyObj : o.isEmptyObj,

	/**
	 * Checks if specified DOM element has specified class.
	 *
	 * @method hasClass
	 * @static
	 * @param {Object} obj DOM element like object to add handler to.
	 * @param {String} name Class name
	 */
	hasClass : o.hasClass,

	/**
	 * Adds specified className to specified DOM element.
	 *
	 * @method addClass
	 * @static
	 * @param {Object} obj DOM element like object to add handler to.
	 * @param {String} name Class name
	 */
	addClass : o.addClass,

	/**
	 * Removes specified className from specified DOM element.
	 *
	 * @method removeClass
	 * @static
	 * @param {Object} obj DOM element like object to add handler to.
	 * @param {String} name Class name
	 */
	removeClass : o.removeClass,

	/**
	 * Returns a given computed style of a DOM element.
	 *
	 * @method getStyle
	 * @static
	 * @param {Object} obj DOM element like object.
	 * @param {String} name Style you want to get from the DOM element
	 */
	getStyle : o.getStyle,

	/**
	 * Adds an event handler to the specified object and store reference to the handler
	 * in objects internal Plupload registry (@see removeEvent).
	 *
	 * @method addEvent
	 * @static
	 * @param {Object} obj DOM element like object to add handler to.
	 * @param {String} name Name to add event listener to.
	 * @param {Function} callback Function to call when event occurs.
	 * @param {String} (optional) key that might be used to add specifity to the event record.
	 */
	addEvent : o.addEvent,

	/**
	 * Remove event handler from the specified object. If third argument (callback)
	 * is not specified remove all events with the specified name.
	 *
	 * @method removeEvent
	 * @static
	 * @param {Object} obj DOM element to remove event listener(s) from.
	 * @param {String} name Name of event listener to remove.
	 * @param {Function|String} (optional) might be a callback or unique key to match.
	 */
	removeEvent: o.removeEvent,

	/**
	 * Remove all kind of events from the specified object
	 *
	 * @method removeAllEvents
	 * @static
	 * @param {Object} obj DOM element to remove event listeners from.
	 * @param {String} (optional) unique key to match, when removing events.
	 */
	removeAllEvents: o.removeAllEvents,

	/**
	 * Cleans the specified name from national characters (diacritics). The result will be a name with only a-z, 0-9 and _.
	 *
	 * @method cleanName
	 * @static
	 * @param {String} s String to clean up.
	 * @return {String} Cleaned string.
	 */
	cleanName : function(name) {
		var i, lookup;

		// Replace diacritics
		lookup = [
			/[\300-\306]/g, 'A', /[\340-\346]/g, 'a',
			/\307/g, 'C', /\347/g, 'c',
			/[\310-\313]/g, 'E', /[\350-\353]/g, 'e',
			/[\314-\317]/g, 'I', /[\354-\357]/g, 'i',
			/\321/g, 'N', /\361/g, 'n',
			/[\322-\330]/g, 'O', /[\362-\370]/g, 'o',
			/[\331-\334]/g, 'U', /[\371-\374]/g, 'u'
		];

		for (i = 0; i < lookup.length; i += 2) {
			name = name.replace(lookup[i], lookup[i + 1]);
		}

		// Replace whitespace
		name = name.replace(/\s+/g, '_');

		// Remove anything else
		name = name.replace(/[^a-z0-9_\-\.]+/gi, '');

		return name;
	},

	/**
	 * Builds a full url out of a base URL and an object with items to append as query string items.
	 *
	 * @method buildUrl
	 * @static
	 * @param {String} url Base URL to append query string items to.
	 * @param {Object} items Name/value object to serialize as a querystring.
	 * @return {String} String with url + serialized query string items.
	 */
	buildUrl : function(url, items) {
		var query = '';

		plupload.each(items, function(value, name) {
			query += (query ? '&' : '') + encodeURIComponent(name) + '=' + encodeURIComponent(value);
		});

		if (query) {
			url += (url.indexOf('?') > 0 ? '&' : '?') + query;
		}

		return url;
	},

	/**
	 * Formats the specified number as a size string for example 1024 becomes 1 KB.
	 *
	 * @method formatSize
	 * @static
	 * @param {Number} size Size to format as string.
	 * @return {String} Formatted size string.
	 */
	formatSize : function(size) {

		if (size === undef || /\D/.test(size)) {
			return plupload.translate('N/A');
		}

		function round(num, precision) {
			return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
		}

		var boundary = Math.pow(1024, 4);

		// TB
		if (size > boundary) {
			return round(size / boundary, 1) + " " + plupload.translate('tb');
		}

		// GB
		if (size > (boundary/=1024)) {
			return round(size / boundary, 1) + " " + plupload.translate('gb');
		}

		// MB
		if (size > (boundary/=1024)) {
			return round(size / boundary, 1) + " " + plupload.translate('mb');
		}

		// KB
		if (size > 1024) {
			return Math.round(size / 1024) + " " + plupload.translate('kb');
		}

		return size + " " + plupload.translate('b');
	},


	/**
	 * Parses the specified size string into a byte value. For example 10kb becomes 10240.
	 *
	 * @method parseSize
	 * @static
	 * @param {String|Number} size String to parse or number to just pass through.
	 * @return {Number} Size in bytes.
	 */
	parseSize : o.parseSizeStr,


	/**
	 * A way to predict what runtime will be choosen in the current environment with the
	 * specified settings.
	 *
	 * @method predictRuntime
	 * @static
	 * @param {Object|String} config Plupload settings to check
	 * @param {String} [runtimes] Comma-separated list of runtimes to check against
	 * @return {String} Type of compatible runtime
	 */
	predictRuntime : function(config, runtimes) {
		var up, runtime;

		up = new plupload.Uploader(config);
		runtime = o.Runtime.thatCan(up.getOption().required_features, runtimes || config.runtimes);
		up.destroy();
		return runtime;
	},

	/**
	 * Registers a filter that will be executed for each file added to the queue.
	 * If callback returns false, file will not be added.
	 *
	 * Callback receives two arguments: a value for the filter as it was specified in settings.filters
	 * and a file to be filtered. Callback is executed in the context of uploader instance.
	 *
	 * @method addFileFilter
	 * @static
	 * @param {String} name Name of the filter by which it can be referenced in settings.filters
	 * @param {String} cb Callback - the actual routine that every added file must pass
	 */
	addFileFilter: function(name, cb) {
		fileFilters[name] = cb;
	}
};


plupload.addFileFilter('mime_types', function(filters, file, cb) {
	if (filters.length && !filters.regexp.test(file.name)) {
		this.trigger('Error', {
			code : plupload.FILE_EXTENSION_ERROR,
			message : plupload.translate('File extension error.'),
			file : file
		});
		cb(false);
	} else {
		cb(true);
	}
});


plupload.addFileFilter('max_file_size', function(maxSize, file, cb) {
	var undef;

	maxSize = plupload.parseSize(maxSize);

	// Invalid file size
	if (file.size !== undef && maxSize && file.size > maxSize) {
		this.trigger('Error', {
			code : plupload.FILE_SIZE_ERROR,
			message : plupload.translate('File size error.'),
			file : file
		});
		cb(false);
	} else {
		cb(true);
	}
});


plupload.addFileFilter('prevent_duplicates', function(value, file, cb) {
	if (value) {
		var ii = this.files.length;
		while (ii--) {
			// Compare by name and size (size might be 0 or undefined, but still equivalent for both)
			if (file.name === this.files[ii].name && file.size === this.files[ii].size) {
				this.trigger('Error', {
					code : plupload.FILE_DUPLICATE_ERROR,
					message : plupload.translate('Duplicate file error.'),
					file : file
				});
				cb(false);
				return;
			}
		}
	}
	cb(true);
});


/**
@class Uploader
@constructor

@param {Object} settings For detailed information about each option check documentation.
	@param {String|DOMElement} settings.browse_button id of the DOM element or DOM element itself to use as file dialog trigger.
	@param {String} settings.url URL of the server-side upload handler.
	@param {Number|String} [settings.chunk_size=0] Chunk size in bytes to slice the file into. Shorcuts with b, kb, mb, gb, tb suffixes also supported. `e.g. 204800 or "204800b" or "200kb"`. By default - disabled.
	@param {Boolean} [settings.send_chunk_number=true] Whether to send chunks and chunk numbers, or total and offset bytes.
	@param {String} [settings.container] id of the DOM element to use as a container for uploader structures. Defaults to document.body.
	@param {String|DOMElement} [settings.drop_element] id of the DOM element or DOM element itself to use as a drop zone for Drag-n-Drop.
	@param {String} [settings.file_data_name="file"] Name for the file field in Multipart formated message.
	@param {Object} [settings.filters={}] Set of file type filters.
		@param {Array} [settings.filters.mime_types=[]] List of file types to accept, each one defined by title and list of extensions. `e.g. {title : "Image files", extensions : "jpg,jpeg,gif,png"}`. Dispatches `plupload.FILE_EXTENSION_ERROR`
		@param {String|Number} [settings.filters.max_file_size=0] Maximum file size that the user can pick, in bytes. Optionally supports b, kb, mb, gb, tb suffixes. `e.g. "10mb" or "1gb"`. By default - not set. Dispatches `plupload.FILE_SIZE_ERROR`.
		@param {Boolean} [settings.filters.prevent_duplicates=false] Do not let duplicates into the queue. Dispatches `plupload.FILE_DUPLICATE_ERROR`.
	@param {String} [settings.flash_swf_url] URL of the Flash swf.
	@param {Object} [settings.headers] Custom headers to send with the upload. Hash of name/value pairs.
	@param {Number} [settings.max_retries=0] How many times to retry the chunk or file, before triggering Error event.
	@param {Boolean} [settings.multipart=true] Whether to send file and additional parameters as Multipart formated message.
	@param {Object} [settings.multipart_params] Hash of key/value pairs to send with every file upload.
	@param {Boolean} [settings.multi_selection=true] Enable ability to select multiple files at once in file dialog.
	@param {String|Object} [settings.required_features] Either comma-separated list or hash of required features that chosen runtime should absolutely possess.
	@param {Object} [settings.resize] Enable resizng of images on client-side. Applies to `image/jpeg` and `image/png` only. `e.g. {width : 200, height : 200, quality : 90, crop: true}`
		@param {Number} [settings.resize.width] If image is bigger, it will be resized.
		@param {Number} [settings.resize.height] If image is bigger, it will be resized.
		@param {Number} [settings.resize.quality=90] Compression quality for jpegs (1-100).
		@param {Boolean} [settings.resize.crop=false] Whether to crop images to exact dimensions. By default they will be resized proportionally.
	@param {String} [settings.runtimes="html5,flash,silverlight,html4"] Comma separated list of runtimes, that Plupload will try in turn, moving to the next if previous fails.
	@param {String} [settings.silverlight_xap_url] URL of the Silverlight xap.
	@param {Boolean} [settings.unique_names=false] If true will generate unique filenames for uploaded files.
	@param {Boolean} [settings.send_file_name=true] Whether to send file name as additional argument - 'name' (required for chunked uploads and some other cases where file name cannot be sent via normal ways).
*/
plupload.Uploader = function(options) {
	/**
	 * Fires when the current RunTime has been initialized.
	 *
	 * @event Init
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires after the init event incase you need to perform actions there.
	 *
	 * @event PostInit
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires when the option is changed in via uploader.setOption().
	 *
	 * @event OptionChanged
	 * @since 2.1
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {String} name Name of the option that was changed
	 * @param {Mixed} value New value for the specified option
	 * @param {Mixed} oldValue Previous value of the option
	 */

	/**
	 * Fires when the silverlight/flash or other shim needs to move.
	 *
	 * @event Refresh
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires when the overall state is being changed for the upload queue.
	 *
	 * @event StateChanged
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires when browse_button is clicked and browse dialog shows.
	 *
	 * @event Browse
	 * @since 2.1.2
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */	

	/**
	 * Fires for every filtered file before it is added to the queue.
	 * 
	 * @event FileFiltered
	 * @since 2.1
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file Another file that has to be added to the queue.
	 */

	/**
	 * Fires when the file queue is changed. In other words when files are added/removed to the files array of the uploader instance.
	 *
	 * @event QueueChanged
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */ 

	/**
	 * Fires after files were filtered and added to the queue.
	 *
	 * @event FilesAdded
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {Array} files Array of file objects that were added to queue by the user.
	 */

	/**
	 * Fires when file is removed from the queue.
	 *
	 * @event FilesRemoved
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {Array} files Array of files that got removed.
	 */

	/**
	 * Fires when just before a file is uploaded. This event enables you to override settings
	 * on the uploader instance before the file is uploaded.
	 *
	 * @event BeforeUpload
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File to be uploaded.
	 */

	/**
	 * Fires when a file is to be uploaded by the runtime.
	 *
	 * @event UploadFile
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File to be uploaded.
	 */

	/**
	 * Fires while a file is being uploaded. Use this event to update the current file upload progress.
	 *
	 * @event UploadProgress
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File that is currently being uploaded.
	 */	

	/**
	 * Fires when file chunk is uploaded.
	 *
	 * @event ChunkUploaded
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File that the chunk was uploaded for.
	 * @param {Object} response Object with response properties.
	 */

	/**
	 * Fires when a file is successfully uploaded.
	 *
	 * @event FileUploaded
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File that was uploaded.
	 * @param {Object} response Object with response properties.
	 */

	/**
	 * Fires when all files in a queue are uploaded.
	 *
	 * @event UploadComplete
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {Array} files Array of file objects that was added to queue/selected by the user.
	 */

	/**
	 * Fires when a error occurs.
	 *
	 * @event Error
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {Object} error Contains code, message and sometimes file and other details.
	 */

	/**
	 * Fires when destroy method is called.
	 *
	 * @event Destroy
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */
	var uid = plupload.guid()
	, settings
	, files = []
	, preferred_caps = {}
	, fileInputs = []
	, fileDrops = []
	, startTime
	, total
	, disabled = false
	, xhr
	;


	// Private methods
	function uploadNext() {
		var file, count = 0, i;

		if (this.state == plupload.STARTED) {
			// Find first QUEUED file
			for (i = 0; i < files.length; i++) {
				if (!file && files[i].status == plupload.QUEUED) {
					file = files[i];
					if (this.trigger("BeforeUpload", file)) {
						file.status = plupload.UPLOADING;
						this.trigger("UploadFile", file);
					}
				} else {
					count++;
				}
			}

			// All files are DONE or FAILED
			if (count == files.length) {
				if (this.state !== plupload.STOPPED) {
					this.state = plupload.STOPPED;
					this.trigger("StateChanged");
				}
				this.trigger("UploadComplete", files);
			}
		}
	}


	function calcFile(file) {
		file.percent = file.size > 0 ? Math.ceil(file.loaded / file.size * 100) : 100;
		calc();
	}


	function calc() {
		var i, file;

		// Reset stats
		total.reset();

		// Check status, size, loaded etc on all files
		for (i = 0; i < files.length; i++) {
			file = files[i];

			if (file.size !== undef) {
				// We calculate totals based on original file size
				total.size += file.origSize;

				// Since we cannot predict file size after resize, we do opposite and
				// interpolate loaded amount to match magnitude of total
				total.loaded += file.loaded * file.origSize / file.size;
			} else {
				total.size = undef;
			}

			if (file.status == plupload.DONE) {
				total.uploaded++;
			} else if (file.status == plupload.FAILED) {
				total.failed++;
			} else {
				total.queued++;
			}
		}

		// If we couldn't calculate a total file size then use the number of files to calc percent
		if (total.size === undef) {
			total.percent = files.length > 0 ? Math.ceil(total.uploaded / files.length * 100) : 0;
		} else {
			total.bytesPerSec = Math.ceil(total.loaded / ((+new Date() - startTime || 1) / 1000.0));
			total.percent = total.size > 0 ? Math.ceil(total.loaded / total.size * 100) : 0;
		}
	}


	function getRUID() {
		var ctrl = fileInputs[0] || fileDrops[0];
		if (ctrl) {
			return ctrl.getRuntime().uid;
		}
		return false;
	}


	function runtimeCan(file, cap) {
		if (file.ruid) {
			var info = o.Runtime.getInfo(file.ruid);
			if (info) {
				return info.can(cap);
			}
		}
		return false;
	}


	function bindEventListeners() {
		this.bind('FilesAdded FilesRemoved', function(up) {
			up.trigger('QueueChanged');
			up.refresh();
		});

		this.bind('CancelUpload', onCancelUpload);
		
		this.bind('BeforeUpload', onBeforeUpload);

		this.bind('UploadFile', onUploadFile);

		this.bind('UploadProgress', onUploadProgress);

		this.bind('StateChanged', onStateChanged);

		this.bind('QueueChanged', calc);

		this.bind('Error', onError);

		this.bind('FileUploaded', onFileUploaded);

		this.bind('Destroy', onDestroy);
	}


	function initControls(settings, cb) {
		var self = this, inited = 0, queue = [];

		// common settings
		var options = {
			runtime_order: settings.runtimes,
			required_caps: settings.required_features,
			preferred_caps: preferred_caps,
			swf_url: settings.flash_swf_url,
			xap_url: settings.silverlight_xap_url
		};

		// add runtime specific options if any
		plupload.each(settings.runtimes.split(/\s*,\s*/), function(runtime) {
			if (settings[runtime]) {
				options[runtime] = settings[runtime];
			}
		});

		// initialize file pickers - there can be many
		if (settings.browse_button) {
			plupload.each(settings.browse_button, function(el) {
				queue.push(function(cb) {
					var fileInput = new o.FileInput(plupload.extend({}, options, {
						accept: settings.filters.mime_types,
						name: settings.file_data_name,
						multiple: settings.multi_selection,
						container: settings.container,
						browse_button: el
					}));

					fileInput.onready = function() {
						var info = o.Runtime.getInfo(this.ruid);

						// for backward compatibility
						o.extend(self.features, {
							chunks: info.can('slice_blob'),
							multipart: info.can('send_multipart'),
							multi_selection: info.can('select_multiple')
						});

						inited++;
						fileInputs.push(this);
						cb();
					};

					fileInput.onchange = function() {
						self.addFile(this.files);
					};

					fileInput.bind('mouseenter mouseleave mousedown mouseup', function(e) {
						if (!disabled) {
							if (settings.browse_button_hover) {
								if ('mouseenter' === e.type) {
									o.addClass(el, settings.browse_button_hover);
								} else if ('mouseleave' === e.type) {
									o.removeClass(el, settings.browse_button_hover);
								}
							}

							if (settings.browse_button_active) {
								if ('mousedown' === e.type) {
									o.addClass(el, settings.browse_button_active);
								} else if ('mouseup' === e.type) {
									o.removeClass(el, settings.browse_button_active);
								}
							}
						}
					});

					fileInput.bind('mousedown', function() {
						self.trigger('Browse');
					});

					fileInput.bind('error runtimeerror', function() {
						fileInput = null;
						cb();
					});

					fileInput.init();
				});
			});
		}

		// initialize drop zones
		if (settings.drop_element) {
			plupload.each(settings.drop_element, function(el) {
				queue.push(function(cb) {
					var fileDrop = new o.FileDrop(plupload.extend({}, options, {
						drop_zone: el
					}));

					fileDrop.onready = function() {
						var info = o.Runtime.getInfo(this.ruid);

						self.features.dragdrop = info.can('drag_and_drop'); // for backward compatibility

						inited++;
						fileDrops.push(this);
						cb();
					};

					fileDrop.ondrop = function() {
						self.addFile(this.files);
					};

					fileDrop.bind('error runtimeerror', function() {
						fileDrop = null;
						cb();
					});

					fileDrop.init();
				});
			});
		}


		o.inSeries(queue, function() {
			if (typeof(cb) === 'function') {
				cb(inited);
			}
		});
	}


	function resizeImage(blob, params, cb) {
		var img = new o.Image();

		try {
			img.onload = function() {
				// no manipulation required if...
				if (params.width > this.width &&
					params.height > this.height &&
					params.quality === undef &&
					params.preserve_headers &&
					!params.crop
				) {
					this.destroy();
					return cb(blob);
				}
				// otherwise downsize
				img.downsize(params.width, params.height, params.crop, params.preserve_headers);
			};

			img.onresize = function() {
				cb(this.getAsBlob(blob.type, params.quality));
				this.destroy();
			};

			img.onerror = function() {
				cb(blob);
			};

			img.load(blob);
		} catch(ex) {
			cb(blob);
		}
	}


	function setOption(option, value, init) {
		var self = this, reinitRequired = false;

		function _setOption(option, value, init) {
			var oldValue = settings[option];

			switch (option) {
				case 'max_file_size':
					if (option === 'max_file_size') {
						settings.max_file_size = settings.filters.max_file_size = value;
					}
					break;

				case 'chunk_size':
					if (value = plupload.parseSize(value)) {
						settings[option] = value;
						settings.send_file_name = true;
					}
					break;

				case 'multipart':
					settings[option] = value;
					if (!value) {
						settings.send_file_name = true;
					}
					break;

				case 'unique_names':
					settings[option] = value;
					if (value) {
						settings.send_file_name = true;
					}
					break;

				case 'filters':
					// for sake of backward compatibility
					if (plupload.typeOf(value) === 'array') {
						value = {
							mime_types: value
						};
					}

					if (init) {
						plupload.extend(settings.filters, value);
					} else {
						settings.filters = value;
					}

					// if file format filters are being updated, regenerate the matching expressions
					if (value.mime_types) {
						settings.filters.mime_types.regexp = (function(filters) {
							var extensionsRegExp = [];

							plupload.each(filters, function(filter) {
								plupload.each(filter.extensions.split(/,/), function(ext) {
									if (/^\s*\*\s*$/.test(ext)) {
										extensionsRegExp.push('\\.*');
									} else {
										extensionsRegExp.push('\\.' + ext.replace(new RegExp('[' + ('/^$.*+?|()[]{}\\'.replace(/./g, '\\$&')) + ']', 'g'), '\\$&'));
									}
								});
							});

							return new RegExp('(' + extensionsRegExp.join('|') + ')$', 'i');
						}(settings.filters.mime_types));
					}
					break;
	
				case 'resize':
					if (init) {
						plupload.extend(settings.resize, value, {
							enabled: true
						});
					} else {
						settings.resize = value;
					}
					break;

				case 'prevent_duplicates':
					settings.prevent_duplicates = settings.filters.prevent_duplicates = !!value;
					break;

				case 'browse_button':
				case 'drop_element':
						value = plupload.get(value);

				case 'container':
				case 'runtimes':
				case 'multi_selection':
				case 'flash_swf_url':
				case 'silverlight_xap_url':
					settings[option] = value;
					if (!init) {
						reinitRequired = true;
					}
					break;

				default:
					settings[option] = value;
			}

			if (!init) {
				self.trigger('OptionChanged', option, value, oldValue);
			}
		}

		if (typeof(option) === 'object') {
			plupload.each(option, function(value, option) {
				_setOption(option, value, init);
			});
		} else {
			_setOption(option, value, init);
		}

		if (init) {
			// Normalize the list of required capabilities
			settings.required_features = normalizeCaps(plupload.extend({}, settings));

			// Come up with the list of capabilities that can affect default mode in a multi-mode runtimes
			preferred_caps = normalizeCaps(plupload.extend({}, settings, {
				required_features: true
			}));
		} else if (reinitRequired) {
			self.trigger('Destroy');
			
			initControls.call(self, settings, function(inited) {
				if (inited) {
					self.runtime = o.Runtime.getInfo(getRUID()).type;
					self.trigger('Init', { runtime: self.runtime });
					self.trigger('PostInit');
				} else {
					self.trigger('Error', {
						code : plupload.INIT_ERROR,
						message : plupload.translate('Init error.')
					});
				}
			});
		}
	}


	// Internal event handlers
	function onBeforeUpload(up, file) {
		// Generate unique target filenames
		if (up.settings.unique_names) {
			var matches = file.name.match(/\.([^.]+)$/), ext = "part";
			if (matches) {
				ext = matches[1];
			}
			file.target_name = file.id + '.' + ext;
		}
	}


	function onUploadFile(up, file) {
		var url = up.settings.url
		, chunkSize = up.settings.chunk_size
		, retries = up.settings.max_retries
		, features = up.features
		, offset = 0
		, blob
		;

		// make sure we start at a predictable offset
		if (file.loaded) {
			offset = file.loaded = chunkSize ? chunkSize * Math.floor(file.loaded / chunkSize) : 0;
		}

		function handleError() {
			if (retries-- > 0) {
				delay(uploadNextChunk, 1000);
			} else {
				file.loaded = offset; // reset all progress

				up.trigger('Error', {
					code : plupload.HTTP_ERROR,
					message : plupload.translate('HTTP Error.'),
					file : file,
					response : xhr.responseText,
					status : xhr.status,
					responseHeaders: xhr.getAllResponseHeaders()
				});
			}
		}

		function uploadNextChunk() {
			var chunkBlob, formData, args = {}, curChunkSize;

			// make sure that file wasn't cancelled and upload is not stopped in general
			if (file.status !== plupload.UPLOADING || up.state === plupload.STOPPED) {
				return;
			}

			// send additional 'name' parameter only if required
			if (up.settings.send_file_name) {
				args.name = file.target_name || file.name;
			}

			if (chunkSize && features.chunks && blob.size > chunkSize) { // blob will be of type string if it was loaded in memory 
				curChunkSize = Math.min(chunkSize, blob.size - offset);
				chunkBlob = blob.slice(offset, offset + curChunkSize);
			} else {
				curChunkSize = blob.size;
				chunkBlob = blob;
			}

			// If chunking is enabled add corresponding args, no matter if file is bigger than chunk or smaller
			if (chunkSize && features.chunks) {
				// Setup query string arguments
				if (up.settings.send_chunk_number) {
					args.chunk = Math.ceil(offset / chunkSize);
					args.chunks = Math.ceil(blob.size / chunkSize);
				} else { // keep support for experimental chunk format, just in case
					args.offset = offset;
					args.total = blob.size;
				}
			}

			xhr = new o.XMLHttpRequest();

			// Do we have upload progress support
			if (xhr.upload) {
				xhr.upload.onprogress = function(e) {
					file.loaded = Math.min(file.size, offset + e.loaded);
					up.trigger('UploadProgress', file);
				};
			}

			xhr.onload = function() {
				// check if upload made itself through
				if (xhr.status >= 400) {
					handleError();
					return;
				}

				retries = up.settings.max_retries; // reset the counter

				// Handle chunk response
				if (curChunkSize < blob.size) {
					chunkBlob.destroy();

					offset += curChunkSize;
					file.loaded = Math.min(offset, blob.size);

					up.trigger('ChunkUploaded', file, {
						offset : file.loaded,
						total : blob.size,
						response : xhr.responseText,
						status : xhr.status,
						responseHeaders: xhr.getAllResponseHeaders()
					});

					// stock Android browser doesn't fire upload progress events, but in chunking mode we can fake them
					if (o.Env.browser === 'Android Browser') {
						// doesn't harm in general, but is not required anywhere else
						up.trigger('UploadProgress', file);
					} 
				} else {
					file.loaded = file.size;
				}

				chunkBlob = formData = null; // Free memory

				// Check if file is uploaded
				if (!offset || offset >= blob.size) {
					// If file was modified, destory the copy
					if (file.size != file.origSize) {
						blob.destroy();
						blob = null;
					}

					up.trigger('UploadProgress', file);

					file.status = plupload.DONE;

					up.trigger('FileUploaded', file, {
						response : xhr.responseText,
						status : xhr.status,
						responseHeaders: xhr.getAllResponseHeaders()
					});
				} else {
					// Still chunks left
					delay(uploadNextChunk, 1); // run detached, otherwise event handlers interfere
				}
			};

			xhr.onerror = function() {
				handleError();
			};

			xhr.onloadend = function() {
				this.destroy();
				xhr = null;
			};

			// Build multipart request
			if (up.settings.multipart && features.multipart) {
				xhr.open("post", url, true);

				// Set custom headers
				plupload.each(up.settings.headers, function(value, name) {
					xhr.setRequestHeader(name, value);
				});

				formData = new o.FormData();

				// Add multipart params
				plupload.each(plupload.extend(args, up.settings.multipart_params), function(value, name) {
					formData.append(name, value);
				});

				// Add file and send it
				formData.append(up.settings.file_data_name, chunkBlob);
				xhr.send(formData, {
					runtime_order: up.settings.runtimes,
					required_caps: up.settings.required_features,
					preferred_caps: preferred_caps,
					swf_url: up.settings.flash_swf_url,
					xap_url: up.settings.silverlight_xap_url
				});
			} else {
				// if no multipart, send as binary stream
				url = plupload.buildUrl(up.settings.url, plupload.extend(args, up.settings.multipart_params));

				xhr.open("post", url, true);

				xhr.setRequestHeader('Content-Type', 'application/octet-stream'); // Binary stream header

				// Set custom headers
				plupload.each(up.settings.headers, function(value, name) {
					xhr.setRequestHeader(name, value);
				});

				xhr.send(chunkBlob, {
					runtime_order: up.settings.runtimes,
					required_caps: up.settings.required_features,
					preferred_caps: preferred_caps,
					swf_url: up.settings.flash_swf_url,
					xap_url: up.settings.silverlight_xap_url
				});
			}
		}

		blob = file.getSource();

		// Start uploading chunks
		if (up.settings.resize.enabled && runtimeCan(blob, 'send_binary_string') && !!~o.inArray(blob.type, ['image/jpeg', 'image/png'])) {
			// Resize if required
			resizeImage.call(this, blob, up.settings.resize, function(resizedBlob) {
				blob = resizedBlob;
				file.size = resizedBlob.size;
				uploadNextChunk();
			});
		} else {
			uploadNextChunk();
		}
	}


	function onUploadProgress(up, file) {
		calcFile(file);
	}


	function onStateChanged(up) {
		if (up.state == plupload.STARTED) {
			// Get start time to calculate bps
			startTime = (+new Date());
		} else if (up.state == plupload.STOPPED) {
			// Reset currently uploading files
			for (var i = up.files.length - 1; i >= 0; i--) {
				if (up.files[i].status == plupload.UPLOADING) {
					up.files[i].status = plupload.QUEUED;
					calc();
				}
			}
		}
	}


	function onCancelUpload() {
		if (xhr) {
			xhr.abort();
		}
	}


	function onFileUploaded(up) {
		calc();

		// Upload next file but detach it from the error event
		// since other custom listeners might want to stop the queue
		delay(function() {
			uploadNext.call(up);
		}, 1);
	}


	function onError(up, err) {
		if (err.code === plupload.INIT_ERROR) {
			up.destroy();
		}
		// Set failed status if an error occured on a file
		else if (err.file) {
			err.file.status = plupload.FAILED;
			calcFile(err.file);

			// Upload next file but detach it from the error event
			// since other custom listeners might want to stop the queue
			if (up.state == plupload.STARTED) { // upload in progress
				up.trigger('CancelUpload');
				delay(function() {
					uploadNext.call(up);
				}, 1);
			}
		}
	}


	function onDestroy(up) {
		up.stop();

		// Purge the queue
		plupload.each(files, function(file) {
			file.destroy();
		});
		files = [];

		if (fileInputs.length) {
			plupload.each(fileInputs, function(fileInput) {
				fileInput.destroy();
			});
			fileInputs = [];
		}

		if (fileDrops.length) {
			plupload.each(fileDrops, function(fileDrop) {
				fileDrop.destroy();
			});
			fileDrops = [];
		}

		preferred_caps = {};
		disabled = false;
		startTime = xhr = null;
		total.reset();
	}


	// Default settings
	settings = {
		runtimes: o.Runtime.order,
		max_retries: 0,
		chunk_size: 0,
		multipart: true,
		multi_selection: true,
		file_data_name: 'file',
		flash_swf_url: 'js/Moxie.swf',
		silverlight_xap_url: 'js/Moxie.xap',
		filters: {
			mime_types: [],
			prevent_duplicates: false,
			max_file_size: 0
		},
		resize: {
			enabled: false,
			preserve_headers: true,
			crop: false
		},
		send_file_name: true,
		send_chunk_number: true
	};

	
	setOption.call(this, options, null, true);

	// Inital total state
	total = new plupload.QueueProgress(); 

	// Add public methods
	plupload.extend(this, {

		/**
		 * Unique id for the Uploader instance.
		 *
		 * @property id
		 * @type String
		 */
		id : uid,
		uid : uid, // mOxie uses this to differentiate between event targets

		/**
		 * Current state of the total uploading progress. This one can either be plupload.STARTED or plupload.STOPPED.
		 * These states are controlled by the stop/start methods. The default value is STOPPED.
		 *
		 * @property state
		 * @type Number
		 */
		state : plupload.STOPPED,

		/**
		 * Map of features that are available for the uploader runtime. Features will be filled
		 * before the init event is called, these features can then be used to alter the UI for the end user.
		 * Some of the current features that might be in this map is: dragdrop, chunks, jpgresize, pngresize.
		 *
		 * @property features
		 * @type Object
		 */
		features : {},

		/**
		 * Current runtime name.
		 *
		 * @property runtime
		 * @type String
		 */
		runtime : null,

		/**
		 * Current upload queue, an array of File instances.
		 *
		 * @property files
		 * @type Array
		 * @see plupload.File
		 */
		files : files,

		/**
		 * Object with name/value settings.
		 *
		 * @property settings
		 * @type Object
		 */
		settings : settings,

		/**
		 * Total progess information. How many files has been uploaded, total percent etc.
		 *
		 * @property total
		 * @type plupload.QueueProgress
		 */
		total : total,


		/**
		 * Initializes the Uploader instance and adds internal event listeners.
		 *
		 * @method init
		 */
		init : function() {
			var self = this;

			if (typeof(settings.preinit) == "function") {
				settings.preinit(self);
			} else {
				plupload.each(settings.preinit, function(func, name) {
					self.bind(name, func);
				});
			}

			bindEventListeners.call(this);

			// Check for required options
			if (!settings.browse_button || !settings.url) {
				this.trigger('Error', {
					code : plupload.INIT_ERROR,
					message : plupload.translate('Init error.')
				});
				return;
			}

			initControls.call(this, settings, function(inited) {
				if (typeof(settings.init) == "function") {
					settings.init(self);
				} else {
					plupload.each(settings.init, function(func, name) {
						self.bind(name, func);
					});
				}

				if (inited) {
					self.runtime = o.Runtime.getInfo(getRUID()).type;
					self.trigger('Init', { runtime: self.runtime });
					self.trigger('PostInit');
				} else {
					self.trigger('Error', {
						code : plupload.INIT_ERROR,
						message : plupload.translate('Init error.')
					});
				}
			});
		},

		/**
		 * Set the value for the specified option(s).
		 *
		 * @method setOption
		 * @since 2.1
		 * @param {String|Object} option Name of the option to change or the set of key/value pairs
		 * @param {Mixed} [value] Value for the option (is ignored, if first argument is object)
		 */
		setOption: function(option, value) {
			setOption.call(this, option, value, !this.runtime); // until runtime not set we do not need to reinitialize
		},

		/**
		 * Get the value for the specified option or the whole configuration, if not specified.
		 * 
		 * @method getOption
		 * @since 2.1
		 * @param {String} [option] Name of the option to get
		 * @return {Mixed} Value for the option or the whole set
		 */
		getOption: function(option) {
			if (!option) {
				return settings;
			}
			return settings[option];
		},

		/**
		 * Refreshes the upload instance by dispatching out a refresh event to all runtimes.
		 * This would for example reposition flash/silverlight shims on the page.
		 *
		 * @method refresh
		 */
		refresh : function() {
			if (fileInputs.length) {
				plupload.each(fileInputs, function(fileInput) {
					fileInput.trigger('Refresh');
				});
			}
			this.trigger('Refresh');
		},

		/**
		 * Starts uploading the queued files.
		 *
		 * @method start
		 */
		start : function() {
			if (this.state != plupload.STARTED) {
				this.state = plupload.STARTED;
				this.trigger('StateChanged');

				uploadNext.call(this);
			}
		},

		/**
		 * Stops the upload of the queued files.
		 *
		 * @method stop
		 */
		stop : function() {
			if (this.state != plupload.STOPPED) {
				this.state = plupload.STOPPED;
				this.trigger('StateChanged');
				this.trigger('CancelUpload');
			}
		},


		/**
		 * Disables/enables browse button on request.
		 *
		 * @method disableBrowse
		 * @param {Boolean} disable Whether to disable or enable (default: true)
		 */
		disableBrowse : function() {
			disabled = arguments[0] !== undef ? arguments[0] : true;

			if (fileInputs.length) {
				plupload.each(fileInputs, function(fileInput) {
					fileInput.disable(disabled);
				});
			}

			this.trigger('DisableBrowse', disabled);
		},

		/**
		 * Returns the specified file object by id.
		 *
		 * @method getFile
		 * @param {String} id File id to look for.
		 * @return {plupload.File} File object or undefined if it wasn't found;
		 */
		getFile : function(id) {
			var i;
			for (i = files.length - 1; i >= 0; i--) {
				if (files[i].id === id) {
					return files[i];
				}
			}
		},

		/**
		 * Adds file to the queue programmatically. Can be native file, instance of Plupload.File,
		 * instance of mOxie.File, input[type="file"] element, or array of these. Fires FilesAdded, 
		 * if any files were added to the queue. Otherwise nothing happens.
		 *
		 * @method addFile
		 * @since 2.0
		 * @param {plupload.File|mOxie.File|File|Node|Array} file File or files to add to the queue.
		 * @param {String} [fileName] If specified, will be used as a name for the file
		 */
		addFile : function(file, fileName) {
			var self = this
			, queue = [] 
			, filesAdded = []
			, ruid
			;

			function filterFile(file, cb) {
				var queue = [];
				o.each(self.settings.filters, function(rule, name) {
					if (fileFilters[name]) {
						queue.push(function(cb) {
							fileFilters[name].call(self, rule, file, function(res) {
								cb(!res);
							});
						});
					}
				});
				o.inSeries(queue, cb);
			}

			/**
			 * @method resolveFile
			 * @private
			 * @param {o.File|o.Blob|plupload.File|File|Blob|input[type="file"]} file
			 */
			function resolveFile(file) {
				var type = o.typeOf(file);

				// o.File
				if (file instanceof o.File) { 
					if (!file.ruid && !file.isDetached()) {
						if (!ruid) { // weird case
							return false;
						}
						file.ruid = ruid;
						file.connectRuntime(ruid);
					}
					resolveFile(new plupload.File(file));
				}
				// o.Blob 
				else if (file instanceof o.Blob) {
					resolveFile(file.getSource());
					file.destroy();
				} 
				// plupload.File - final step for other branches
				else if (file instanceof plupload.File) {
					if (fileName) {
						file.name = fileName;
					}
					
					queue.push(function(cb) {
						// run through the internal and user-defined filters, if any
						filterFile(file, function(err) {
							if (!err) {
								// make files available for the filters by updating the main queue directly
								files.push(file);
								// collect the files that will be passed to FilesAdded event
								filesAdded.push(file); 

								self.trigger("FileFiltered", file);
							}
							delay(cb, 1); // do not build up recursions or eventually we might hit the limits
						});
					});
				} 
				// native File or blob
				else if (o.inArray(type, ['file', 'blob']) !== -1) {
					resolveFile(new o.File(null, file));
				} 
				// input[type="file"]
				else if (type === 'node' && o.typeOf(file.files) === 'filelist') {
					// if we are dealing with input[type="file"]
					o.each(file.files, resolveFile);
				} 
				// mixed array of any supported types (see above)
				else if (type === 'array') {
					fileName = null; // should never happen, but unset anyway to avoid funny situations
					o.each(file, resolveFile);
				}
			}

			ruid = getRUID();
			
			resolveFile(file);

			if (queue.length) {
				o.inSeries(queue, function() {
					// if any files left after filtration, trigger FilesAdded
					if (filesAdded.length) {
						self.trigger("FilesAdded", filesAdded);
					}
				});
			}
		},

		/**
		 * Removes a specific file.
		 *
		 * @method removeFile
		 * @param {plupload.File|String} file File to remove from queue.
		 */
		removeFile : function(file) {
			var id = typeof(file) === 'string' ? file : file.id;

			for (var i = files.length - 1; i >= 0; i--) {
				if (files[i].id === id) {
					return this.splice(i, 1)[0];
				}
			}
		},

		/**
		 * Removes part of the queue and returns the files removed. This will also trigger the FilesRemoved and QueueChanged events.
		 *
		 * @method splice
		 * @param {Number} start (Optional) Start index to remove from.
		 * @param {Number} length (Optional) Lengh of items to remove.
		 * @return {Array} Array of files that was removed.
		 */
		splice : function(start, length) {
			// Splice and trigger events
			var removed = files.splice(start === undef ? 0 : start, length === undef ? files.length : length);

			// if upload is in progress we need to stop it and restart after files are removed
			var restartRequired = false;
			if (this.state == plupload.STARTED) { // upload in progress
				plupload.each(removed, function(file) {
					if (file.status === plupload.UPLOADING) {
						restartRequired = true; // do not restart, unless file that is being removed is uploading
						return false;
					}
				});
				
				if (restartRequired) {
					this.stop();
				}
			}

			this.trigger("FilesRemoved", removed);

			// Dispose any resources allocated by those files
			plupload.each(removed, function(file) {
				file.destroy();
			});
			
			if (restartRequired) {
				this.start();
			}

			return removed;
		},

		/**
		 * Dispatches the specified event name and it's arguments to all listeners.
		 *
		 *
		 * @method trigger
		 * @param {String} name Event name to fire.
		 * @param {Object..} Multiple arguments to pass along to the listener functions.
		 */

		/**
		 * Check whether uploader has any listeners to the specified event.
		 *
		 * @method hasEventListener
		 * @param {String} name Event name to check for.
		 */


		/**
		 * Adds an event listener by name.
		 *
		 * @method bind
		 * @param {String} name Event name to listen for.
		 * @param {function} func Function to call ones the event gets fired.
		 * @param {Object} scope Optional scope to execute the specified function in.
		 */
		bind : function(name, func, scope) {
			var self = this;
			// adapt moxie EventTarget style to Plupload-like
			plupload.Uploader.prototype.bind.call(this, name, function() {
				var args = [].slice.call(arguments);
				args.splice(0, 1, self); // replace event object with uploader instance
				return func.apply(this, args);
			}, 0, scope);
		},

		/**
		 * Removes the specified event listener.
		 *
		 * @method unbind
		 * @param {String} name Name of event to remove.
		 * @param {function} func Function to remove from listener.
		 */

		/**
		 * Removes all event listeners.
		 *
		 * @method unbindAll
		 */


		/**
		 * Destroys Plupload instance and cleans after itself.
		 *
		 * @method destroy
		 */
		destroy : function() {
			this.trigger('Destroy');
			settings = total = null; // purge these exclusively
			this.unbindAll();
		}
	});
};

plupload.Uploader.prototype = o.EventTarget.instance;

/**
 * Constructs a new file instance.
 *
 * @class File
 * @constructor
 * 
 * @param {Object} file Object containing file properties
 * @param {String} file.name Name of the file.
 * @param {Number} file.size File size.
 */
plupload.File = (function() {
	var filepool = {};

	function PluploadFile(file) {

		plupload.extend(this, {

			/**
			 * File id this is a globally unique id for the specific file.
			 *
			 * @property id
			 * @type String
			 */
			id: plupload.guid(),

			/**
			 * File name for example "myfile.gif".
			 *
			 * @property name
			 * @type String
			 */
			name: file.name || file.fileName,

			/**
			 * File type, `e.g image/jpeg`
			 *
			 * @property type
			 * @type String
			 */
			type: file.type || '',

			/**
			 * File size in bytes (may change after client-side manupilation).
			 *
			 * @property size
			 * @type Number
			 */
			size: file.size || file.fileSize,

			/**
			 * Original file size in bytes.
			 *
			 * @property origSize
			 * @type Number
			 */
			origSize: file.size || file.fileSize,

			/**
			 * Number of bytes uploaded of the files total size.
			 *
			 * @property loaded
			 * @type Number
			 */
			loaded: 0,

			/**
			 * Number of percentage uploaded of the file.
			 *
			 * @property percent
			 * @type Number
			 */
			percent: 0,

			/**
			 * Status constant matching the plupload states QUEUED, UPLOADING, FAILED, DONE.
			 *
			 * @property status
			 * @type Number
			 * @see plupload
			 */
			status: plupload.QUEUED,

			/**
			 * Date of last modification.
			 *
			 * @property lastModifiedDate
			 * @type {String}
			 */
			lastModifiedDate: file.lastModifiedDate || (new Date()).toLocaleString(), // Thu Aug 23 2012 19:40:00 GMT+0400 (GET)

			/**
			 * Returns native window.File object, when it's available.
			 *
			 * @method getNative
			 * @return {window.File} or null, if plupload.File is of different origin
			 */
			getNative: function() {
				var file = this.getSource().getSource();
				return o.inArray(o.typeOf(file), ['blob', 'file']) !== -1 ? file : null;
			},

			/**
			 * Returns mOxie.File - unified wrapper object that can be used across runtimes.
			 *
			 * @method getSource
			 * @return {mOxie.File} or null
			 */
			getSource: function() {
				if (!filepool[this.id]) {
					return null;
				}
				return filepool[this.id];
			},

			/**
			 * Destroys plupload.File object.
			 *
			 * @method destroy
			 */
			destroy: function() {
				var src = this.getSource();
				if (src) {
					src.destroy();
					delete filepool[this.id];
				}
			}
		});

		filepool[this.id] = file;
	}

	return PluploadFile;
}());


/**
 * Constructs a queue progress.
 *
 * @class QueueProgress
 * @constructor
 */
 plupload.QueueProgress = function() {
	var self = this; // Setup alias for self to reduce code size when it's compressed

	/**
	 * Total queue file size.
	 *
	 * @property size
	 * @type Number
	 */
	self.size = 0;

	/**
	 * Total bytes uploaded.
	 *
	 * @property loaded
	 * @type Number
	 */
	self.loaded = 0;

	/**
	 * Number of files uploaded.
	 *
	 * @property uploaded
	 * @type Number
	 */
	self.uploaded = 0;

	/**
	 * Number of files failed to upload.
	 *
	 * @property failed
	 * @type Number
	 */
	self.failed = 0;

	/**
	 * Number of files yet to be uploaded.
	 *
	 * @property queued
	 * @type Number
	 */
	self.queued = 0;

	/**
	 * Total percent of the uploaded bytes.
	 *
	 * @property percent
	 * @type Number
	 */
	self.percent = 0;

	/**
	 * Bytes uploaded per second.
	 *
	 * @property bytesPerSec
	 * @type Number
	 */
	self.bytesPerSec = 0;

	/**
	 * Resets the progress to it's initial values.
	 *
	 * @method reset
	 */
	self.reset = function() {
		self.size = self.loaded = self.uploaded = self.failed = self.queued = self.percent = self.bytesPerSec = 0;
	};
};

window.plupload = plupload;

}(window, _moxie_js__WEBPACK_IMPORTED_MODULE_0___default.a.mOxie));


/***/ })

/******/ });