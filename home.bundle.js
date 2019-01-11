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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modals/about-game/style.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modals/about-game/style.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".about-game {\r\n\tposition: fixed;\r\n\toverflow: hidden;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tmargin: 20px 35%;\r\n\twidth: 30%;\r\n\theight: 400px;\r\n\tborder-radius: 20px;\r\n\tbackground: rgba(11,16,45,0.9);\r\n\tz-index: 3;\r\n}\r\n\r\n.close-cross {\r\n\talign-self: flex-end;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tmargin: 10px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.close-cross:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n.about-game p {\r\n\tmargin: 20px;\r\n\tjustify-self: center;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/screenshots/style.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/screenshots/style.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".screens {\r\n\theight: 70%;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n}\r\n\r\n.screen-card {\r\n\tflex-shrink: 0;\r\n\twidth: 384px;\r\n\theight: auto;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 10px;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/footer/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/footer/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".footer {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: linear-gradient(180deg, rgba(14,19,54,1) 0%, rgba(11,16,45,1) 51%, rgba(11,16,45,1) 73%);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center; \r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/header/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/header/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".header {\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tbackground: linear-gradient(0deg, rgba(14,19,54,1) 0%, rgba(11,16,45,1) 51%, rgba(11,16,45,1) 73%);\r\n}\r\n\r\n.nav {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tlist-style: none;\r\n}\r\n\r\n.nav a {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n}\r\n\r\n.nav li {\r\n\twidth: 90px;\r\n\theight: 50%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.nav li a:hover,\r\n.nav li a:focus {\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 10px;\r\n\tpadding: 5px 10px;\r\n\toutline: none;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/main/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/main/style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../components/backgrounds/img/game_background_3.png */ "./src/components/backgrounds/img/game_background_3.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../../components/backgrounds/img/game_background_4.png */ "./src/components/backgrounds/img/game_background_4.png"));

// Module
exports.push([module.i, "* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nbody {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbox-sizing: border-box;\r\n\tcolor: #fff;\r\n\tfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.main {\r\n\twidth: 100%;\r\n}\r\n\r\n.menu {\r\n\twidth: 100%;\r\n\theight: 600px;\r\n\tbackground: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat top;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n}\r\n\r\n.menu h1 {\r\n\tfont-size: 60px;\r\n}\r\n\r\n.menu div {\r\n\twidth: 30%;\r\n\theight: 60%;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 40px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 15px;\r\n}\r\n\r\n.menu-button {\r\n\twidth: 100%;\r\n\tfont-size: 40px;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 35px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content:center; \r\n\tflex-basis: 30%;\r\n}\r\n\r\n.menu-button:hover,\r\n.menu-button:focus {\r\n\tfont-size: 50px;\r\n\tbackground: linear-gradient(3deg, rgba(14,19,54,1) 0%, rgba(11,16,45,1) 100%);\r\n\tcursor: pointer;\r\n\toutline: none;\r\n}\r\n\r\n.screenshots {\r\n\twidth: 100%;\r\n\theight: 650px;\r\n\tbackground: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat center;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n}\r\n\r\n.screenshots h2 {\r\n\tfont-size: 40px;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url)) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
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

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
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

/***/ "./src/components/backgrounds/img/game_background_3.png":
/*!**************************************************************!*\
  !*** ./src/components/backgrounds/img/game_background_3.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "95456702b39bc223d5a4947b8b509ad8.png";

/***/ }),

/***/ "./src/components/backgrounds/img/game_background_4.png":
/*!**************************************************************!*\
  !*** ./src/components/backgrounds/img/game_background_4.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b878a23add9b5e96b64a6ef776c50d29.png";

/***/ }),

/***/ "./src/components/buttons/Button/Button.js":
/*!*************************************************!*\
  !*** ./src/components/buttons/Button/Button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/buttons/Button/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Button =
/*#__PURE__*/
function () {
  function Button(name, selector) {
    _classCallCheck(this, Button);

    this.name = name;
    this.selector = selector;
  }

  _createClass(Button, [{
    key: "createButton",
    value: function createButton() {
      var button = document.createElement('a');
      button.classList.add(this.selector);
      button.textContent = this.name;
      button.setAttribute('tabindex', '2');
      return button;
    }
  }]);

  return Button;
}();



/***/ }),

/***/ "./src/components/buttons/Button/style.css":
/*!*************************************************!*\
  !*** ./src/components/buttons/Button/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/buttons/buttons-group/creating-buttons.js":
/*!******************************************************************!*\
  !*** ./src/components/buttons/buttons-group/creating-buttons.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buttons; });
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button/Button */ "./src/components/buttons/Button/Button.js");

function buttons(btnName, selector) {
  var btns = document.createElement('div');
  btnName.forEach(function (v) {
    var btn = new _Button_Button__WEBPACK_IMPORTED_MODULE_0__["default"](v, selector);
    var element = btn.createButton();
    btns.appendChild(element);
  });
  return btns;
}

/***/ }),

/***/ "./src/components/modals/about-game/about.js":
/*!***************************************************!*\
  !*** ./src/components/modals/about-game/about.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return aboutGame; });
/* harmony import */ var _buttons_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../buttons/Button/Button */ "./src/components/buttons/Button/Button.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/modals/about-game/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);


function aboutGame() {
  var windowAbout = document.createElement('section');
  windowAbout.classList.add('hidden');
  var cross = new _buttons_Button_Button__WEBPACK_IMPORTED_MODULE_0__["default"]('x', 'close-cross');
  var closeCross = cross.createButton();
  var head = document.createElement('h2');
  var description = document.createElement('p');
  head.textContent = 'About Game';
  description.textContent = 'This game will take you on an incredible journey! You will fight with differenr enemys opening new horizonts and applying your knowledge. Your own record will be the best result. Good Luck!';
  windowAbout.appendChild(closeCross);
  windowAbout.appendChild(head);
  windowAbout.appendChild(description);

  function close() {
    windowAbout.classList.remove('about-game');
    windowAbout.classList.add('hidden');
  }

  closeCross.addEventListener('click', close);
  document.body.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      close();
    }
  });
  return windowAbout;
}

/***/ }),

/***/ "./src/components/modals/about-game/style.css":
/*!****************************************************!*\
  !*** ./src/components/modals/about-game/style.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modals/about-game/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/screenshots/img/Screen_1.png":
/*!*****************************************************!*\
  !*** ./src/components/screenshots/img/Screen_1.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a2ed734aa870d9b75c1ec06849477b5e.png";

/***/ }),

/***/ "./src/components/screenshots/img/Screen_2.png":
/*!*****************************************************!*\
  !*** ./src/components/screenshots/img/Screen_2.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85061f35ee8e6c8b2ce124154dbcaf35.png";

/***/ }),

/***/ "./src/components/screenshots/img/Screen_3.png":
/*!*****************************************************!*\
  !*** ./src/components/screenshots/img/Screen_3.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d16a08a1655120b3525534600d37cb01.png";

/***/ }),

/***/ "./src/components/screenshots/img/Screen_4.png":
/*!*****************************************************!*\
  !*** ./src/components/screenshots/img/Screen_4.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "058eea1a8c474b5febeadddd25b00e21.png";

/***/ }),

/***/ "./src/components/screenshots/index.js":
/*!*********************************************!*\
  !*** ./src/components/screenshots/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameplayScreens; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/screenshots/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


function gameplayScreens(src) {
  var cards = document.createElement('div');
  cards.classList.add('screens');
  src.forEach(function (v) {
    var screen = new Screen(v);
    var picture = screen.createScreen();
    cards.appendChild(picture);
  });
  return cards;
}

var Screen =
/*#__PURE__*/
function () {
  function Screen(url) {
    _classCallCheck(this, Screen);

    this.url = url;
  }

  _createClass(Screen, [{
    key: "createScreen",
    value: function createScreen() {
      var card = document.createElement('img');
      card.setAttribute('src', this.url);
      card.classList.add('screen-card');
      return card;
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/components/screenshots/style.css":
/*!**********************************************!*\
  !*** ./src/components/screenshots/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/screenshots/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_landing_page_header_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/landing-page/header/index */ "./src/screens/landing-page/header/index.js");
/* harmony import */ var _screens_landing_page_main_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/landing-page/main/index */ "./src/screens/landing-page/main/index.js");
/* harmony import */ var _screens_landing_page_footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/landing-page/footer/index */ "./src/screens/landing-page/footer/index.js");



Object(_screens_landing_page_header_index__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_screens_landing_page_main_index__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_screens_landing_page_footer_index__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/screens/landing-page/footer/index.js":
/*!**************************************************!*\
  !*** ./src/screens/landing-page/footer/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFooter; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/screens/landing-page/footer/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);

function createFooter() {
  var footer = document.createElement('footer');
  footer.classList.add('footer');
  var name = document.createElement('h3');
  name.setAttribute('id', 'author');
  name.textContent = 'created by Nаstassia Kraseuskaya';
  footer.appendChild(name);
  document.body.appendChild(footer);
}

/***/ }),

/***/ "./src/screens/landing-page/footer/style.css":
/*!***************************************************!*\
  !*** ./src/screens/landing-page/footer/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/footer/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/landing-page/header/index.js":
/*!**************************************************!*\
  !*** ./src/screens/landing-page/header/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createheader; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/screens/landing-page/header/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);

function createheader() {
  var head = document.createElement('header');
  head.classList.add('header');
  var nav = document.createElement('ul');
  nav.classList.add('nav');
  var navList = ['main', 'gameplay', 'author'];
  navList.forEach(function (v) {
    var link = document.createElement('li');
    var navLink = document.createElement('a');
    navLink.setAttribute('href', "#".concat(v));
    navLink.textContent = v;
    navLink.setAttribute('tab-index', "-1");
    link.setAttribute('tab-index', "0");
    link.appendChild(navLink);
    nav.appendChild(link);
  });
  head.appendChild(nav);
  document.body.appendChild(head);
}

/***/ }),

/***/ "./src/screens/landing-page/header/style.css":
/*!***************************************************!*\
  !*** ./src/screens/landing-page/header/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/header/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/landing-page/main/index.js":
/*!************************************************!*\
  !*** ./src/screens/landing-page/main/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMain; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/screens/landing-page/main/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_buttons_buttons_group_creating_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/buttons/buttons-group/creating-buttons */ "./src/components/buttons/buttons-group/creating-buttons.js");
/* harmony import */ var _components_screenshots_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/screenshots/index */ "./src/components/screenshots/index.js");
/* harmony import */ var _components_modals_about_game_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modals/about-game/about */ "./src/components/modals/about-game/about.js");
/* harmony import */ var _components_screenshots_img_Screen_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/screenshots/img/Screen_1.png */ "./src/components/screenshots/img/Screen_1.png");
/* harmony import */ var _components_screenshots_img_Screen_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_screenshots_img_Screen_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_screenshots_img_Screen_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/screenshots/img/Screen_2.png */ "./src/components/screenshots/img/Screen_2.png");
/* harmony import */ var _components_screenshots_img_Screen_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_screenshots_img_Screen_2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_screenshots_img_Screen_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/screenshots/img/Screen_3.png */ "./src/components/screenshots/img/Screen_3.png");
/* harmony import */ var _components_screenshots_img_Screen_3_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_screenshots_img_Screen_3_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_screenshots_img_Screen_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/screenshots/img/Screen_4.png */ "./src/components/screenshots/img/Screen_4.png");
/* harmony import */ var _components_screenshots_img_Screen_4_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_screenshots_img_Screen_4_png__WEBPACK_IMPORTED_MODULE_7__);








function createMain() {
  var main = document.createElement('main');
  main.classList.add('main');
  var name = document.createElement('h1');
  name.setAttribute('id', 'main');
  name.textContent = 'Fantastic Adventure';
  var menuArea = document.createElement('section');
  menuArea.classList.add('menu');
  var screensArea = document.createElement('section');
  screensArea.classList.add('screenshots');
  var headScreen = document.createElement('h2');
  headScreen.setAttribute('id', 'gameplay');
  headScreen.textContent = 'Gameplay screenshots';
  var btnnames = ['Play', 'Score', 'About'];
  var menu = Object(_components_buttons_buttons_group_creating_buttons__WEBPACK_IMPORTED_MODULE_1__["default"])(btnnames, 'menu-button');
  menu.classList.add('main-menu');
  var aboutG = Object(_components_modals_about_game_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var src = [_components_screenshots_img_Screen_1_png__WEBPACK_IMPORTED_MODULE_4___default.a, _components_screenshots_img_Screen_2_png__WEBPACK_IMPORTED_MODULE_5___default.a, _components_screenshots_img_Screen_3_png__WEBPACK_IMPORTED_MODULE_6___default.a, _components_screenshots_img_Screen_4_png__WEBPACK_IMPORTED_MODULE_7___default.a];
  var screens = Object(_components_screenshots_index__WEBPACK_IMPORTED_MODULE_2__["default"])(src);
  menuArea.appendChild(name);
  menuArea.appendChild(menu);
  screensArea.appendChild(headScreen);
  screensArea.appendChild(screens);
  main.appendChild(aboutG);
  main.appendChild(menuArea);
  main.appendChild(screensArea);
  document.body.appendChild(main);
  document.querySelector('.menu-button').setAttribute('href', 'game.html');
  var aboutBtn = document.querySelector('.menu-button:nth-child(3)');

  function modalAbout() {
    aboutG.classList.remove('hidden');
    aboutG.classList.add('about-game');
  }

  ;
  aboutBtn.addEventListener('click', modalAbout);
  aboutBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      modalAbout();
    }
  });
}

/***/ }),

/***/ "./src/screens/landing-page/main/style.css":
/*!*************************************************!*\
  !*** ./src/screens/landing-page/main/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/screens/landing-page/main/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=home.bundle.js.map