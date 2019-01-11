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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/health-scale/style.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/health-scale/style.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".scale {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-basis: 40%;\r\n  border-radius: 10px;\r\n  border: 1px solid #000;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.hp {\r\n  background: rgb(32, 189, 128);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: width 1.5s linear;\r\n}\r\n  ", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modals/gameover/style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modals/gameover/style.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".gameover-modal {\r\n    width: 50%;\r\n    height: 70%;\r\n    border-radius: 25px;\r\n    background: linear-gradient(3deg, rgba(3, 4, 12, 0.99) 0%, rgba(4, 6, 19, 0.99) 100%);\r\n    margin: 110px 25%;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n \r\n.gameover-modal h2 {\r\n    font-size: 40px;\r\n}\r\n\r\n.gameover-modal p {\r\n    font-size: 30px\r\n}\r\n\r\n.ending-btn {\r\n  width: 20%;\r\n  height: 40px;\r\n  border: 1px solid #fff;\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.ending-button:hover,\r\n.ending-button:focus {\r\n  font-size: 45px;\r\n  background: linear-gradient(3deg, rgb(3, 4, 12) 0%, rgb(4, 6, 19) 100%);\r\n  cursor: pointer;\r\n  outline: none;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modals/task/style.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modals/task/style.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".task-modal {\r\n  position: absolute;\r\n  margin: 110px 35%;\r\n  top: 0;\r\n  z-index: 2;\r\n  width: 30%;\r\n  height: 40%;\r\n  border-radius: 25px;\r\n  background: linear-gradient(3deg, rgba(3, 4, 12, 0.99) 0%, rgba(4, 6, 19, 0.99) 100%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.correct {\r\n  border: 2px solid rgb(71, 197, 71);\r\n}\r\n\r\n.fail {\r\n  border: 2px solid rgb(228, 17, 17);\r\n}\r\n\r\n.check-btn {\r\n  width: 40%;\r\n  height: 40px;\r\n  border: 1px solid #fff;\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/players/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/players/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/3_head.png */ "./src/components/players/player/img/3_head.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/3_body.png */ "./src/components/players/player/img/3_body.png"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/3_leg_left.png */ "./src/components/players/player/img/3_leg_left.png"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/3_leg_right.png */ "./src/components/players/player/img/3_leg_right.png"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/3_arm_left.png */ "./src/components/players/player/img/3_arm_left.png"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/3_arm_right.png */ "./src/components/players/player/img/3_arm_right.png"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/fingers.png */ "./src/components/players/player/img/fingers.png"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/stick.png */ "./src/components/players/player/img/stick.png"));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../../components/players/player/img/3_boll.png */ "./src/components/players/player/img/3_boll.png"));

// Module
exports.push([module.i, ".player {\r\n  position: absolute;\r\n  left: -300px;\r\n  bottom: -560px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transform: scale(.25);\r\n}\r\n\r\n.player-head {\r\n  background: url(" + ___CSS_LOADER_URL___0___ + ");\r\n  width: 565px;\r\n  height: 552px;\r\n  transform: translate(0, 220px);\r\n  z-index: 5;\r\n  transform-origin: 0% 100%;\r\n  animation: static 1.5s infinite;\r\n}\r\n\r\n.player-body {\r\n  height: 567px;\r\n  z-index: 3;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.player-torso {\r\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\r\n  width: 566px;\r\n  height: 567px;\r\n  z-index: 3;\r\n  transform: translate(50px, 0);\r\n}\r\n\r\n.player-legs {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  transform: translate(0, -100px);\r\n  z-index: 2;\r\n}\r\n\r\n.player-legleft {\r\n  background: url(" + ___CSS_LOADER_URL___2___ + ");\r\n  width: 227px;\r\n  height: 258px;\r\n}\r\n\r\n.player-legright {\r\n  background: url(" + ___CSS_LOADER_URL___3___ + ");\r\n  width: 227px;\r\n  height: 261px;\r\n}\r\n.player-armleft {\r\n  background: url(" + ___CSS_LOADER_URL___4___ + ");\r\n  width: 311px;\r\n  height: 326px;\r\n  transform-origin: 30% 0%;\r\n  transform: translate(-120PX, 170px);\r\n}\r\n.player-armright {\r\n  background: url(" + ___CSS_LOADER_URL___5___ + ");\r\n  width: 224px;\r\n  height: 372px;\r\n  z-index: 3;\r\n  transform: translate(-180px, 170px);\r\n  transform-origin: 50% 0%;\r\n  position: absolute;\r\n}\r\n.player-hand {\r\n  background: url(" + ___CSS_LOADER_URL___6___ + ");\r\n  width: 124px;\r\n  height: 178px;\r\n  transform: translate(200px, 150px);\r\n  z-index: 4;\r\n  position: absolute;\r\n}\r\n.player-weapon {\r\n  background: url(" + ___CSS_LOADER_URL___7___ + ");\r\n  width: 248px;\r\n  height: 514px;\r\n  transform: translate(180px, -110px);\r\n  z-index: 3;\r\n  position: absolute;\r\n}\r\n\r\n.player-spell {\r\n  background: url(" + ___CSS_LOADER_URL___8___ + ");\r\n  width: 211px;\r\n  height: 193px;\r\n  position: absolute;\r\n  left: 115px;\r\n  top: -160px;\r\n  animation: static-spell 2s linear infinite;\r\n}\r\n\r\n.player.player-damage .player-head {\r\n  animation: player-head-damage 1s !important; \r\n}\r\n.player.player-damage .player-torso {\r\n  animation: player-torso-damage 1s;\r\n}\r\n.player.player-damage .player-armright {\r\n  animation: player-armright-damage 1s;\r\n}\r\n.player.player-damage .player-armleft {\r\n  animation: player-armleft-damage 1s;\r\n}\r\n\r\n.player.player-healing .player-armleft {\r\n  animation: player-armleft-healing 1s;\r\n}\r\n.player.player-healing .player-armleft {\r\n  animation: player-armleft-healing 1s;\r\n}\r\n.player.player-healing .player-spell{\r\n  animation: player-spell-healing 1s;\r\n}\r\n\r\n.player.player-attack .player-head {\r\n  animation: player-head-attack 1s;\r\n}\r\n.player.player-attack .player-armright {\r\n  animation: player-armright-attack 1s;\r\n}\r\n.player.player-attack .player-armleft {\r\n  animation: player-armleft-attack 1s;\r\n}\r\n.player.player-attack .player-spell {\r\n  animation: player-spell-attack 1s;\r\n}\r\n\r\n@keyframes static {\r\n  0%, 100% {\r\n    transform: translate(0px, 220px);\r\n  }\r\n  50% {\r\n    transform: translate(0, 235px);\r\n  }\r\n}\r\n\r\n@keyframes static-spell{\r\n  50% {\r\n    transform: rotate(180deg) scale(1.3);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg) scale(1);\r\n  }\r\n}\r\n\r\n@keyframes player-head-damage {\r\n  0%, 100% {\r\n    transform: translate(0, 220px);\r\n  }\r\n  50% {\r\n    transform: translate(-10px, 220px) rotate(-5deg);\r\n  }\r\n}\r\n\r\n@keyframes player-torso-damage {\r\n  0%, 100% {\r\n    transform: translate(50px, 0)\r\n  }\r\n  50% {\r\n    transform: translate(50px, 0) rotate(-3deg);\r\n  }\r\n}\r\n\r\n@keyframes player-armright-damage {\r\n  0%, 100% {\r\n    transform: translate(-180px, 170px);\r\n  }\r\n  50% {\r\n    transform: translate(-180px, 170px) rotate(5deg);;\r\n  }\r\n}\r\n\r\n@keyframes player-armleft-damage {\r\n  0%, 100% {\r\n    transform: translate(-120PX, 170px);\r\n  }\r\n  50% {\r\n    transform: translate(-120PX, 170px) rotate(10deg);\r\n  }\r\n}\r\n\r\n@keyframes player-armleft-healing {\r\n  0%, 100% {\r\n    transform: translate(-120PX, 170px);    \r\n  }\r\n  50% {\r\n    transform: translate(-120PX, 170px) rotate(-30deg);\r\n  }\r\n}\r\n\r\n@keyframes player-spell-healing {\r\n  100% {\r\n    transform: scale(3);\r\n  }\r\n}\r\n\r\n@keyframes player-head-attack {\r\n  0%, 100% {\r\n    transform: translate(0px, 220px);\r\n  }\r\n  50% {\r\n    transform: translate(10px, 220px);\r\n  }\r\n}\r\n\r\n@keyframes player-armright-attack {\r\n  0%, 100% {\r\n    transform: translate(-180px, 170px);\r\n  }\r\n  50% {\r\n    transform: translate(-180px, 170px) rotate(40deg);\r\n  }\r\n}\r\n\r\n@keyframes player-armleft-attack {\r\n  0%, 100% {\r\n    transform: translate(-120PX, 170px);    \r\n  }\r\n  50% {\r\n    transform: translate(-120PX, 170px) rotate(-25deg);\r\n  }\r\n}\r\n\r\n@keyframes player-spell-attack {\r\n  100% {\r\n    left: 1000%;\r\n    transform: scale(2);\r\n  }\r\n}\r\n\r\n.monster {\r\n  position: absolute;\r\n  right: -170px;\r\n  bottom: -170px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transform: scale(-0.5, 0.5);\r\n}\r\n\r\n.monster-head {\r\n  width: 267px;\r\n  height: 311px;\r\n  transform: translate(-10px, 250px);\r\n  transform-origin: 0% 0%;\r\n  z-index: 5;\r\n  animation: static 1.5s infinite;\r\n}\r\n\r\n.monster-body {\r\n  height: 423px;\r\n  z-index: 3;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.monster-torso {\r\n  width: 329px;\r\n  height: 423px;\r\n  z-index: 3;\r\n  transform: translate(165px, 0);\r\n}\r\n\r\n.monster-legs {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  transform: translate(0, -100px);\r\n  z-index: 2;\r\n  position: relative;\r\n}\r\n\r\n.monster-legleft {\r\n  position: absolute;\r\n  width: 109px;\r\n  height: 161px;\r\n  z-index: 1;\r\n}\r\n\r\n.monster-legright {\r\n  width: 112px;\r\n  height: 166px;  \r\n  position: absolute;\r\n  transform: translate(-85px, 0px);\r\n  z-index: 2;\r\n}\r\n.monster-armleft {\r\n  width: 427px;\r\n  height: 319px;\r\n  transform: translate(50px, 100px);\r\n  transform-origin: 0% 0%;\r\n\r\n}\r\n.monster-armright {\r\n  width: 198px;\r\n  height: 357px;\r\n  z-index: 3;\r\n  transform: translate(-215PX, 95px);\r\n  transform-origin: 50% 0%;\r\n  position: absolute;\r\n}\r\n\r\n.monster.monster-damage .monster-head {\r\n  animation: monster-head-damage 1s !important; \r\n}\r\n.monster.monster-damage .monster-torso {\r\n  animation: monster-torso-damage 1s;\r\n}\r\n.monster.monster-damage .monster-armright {\r\n  animation: monster-armright-damage 1s;\r\n}\r\n.monster.monster-damage .monster-armleft {\r\n  animation: monster-armleft-damage 1s;\r\n}\r\n\r\n.monster.monster-healing .monster-armleft {\r\n  animation: monster-armleft-healing 1s;\r\n}\r\n\r\n.monster.monster-attack .monster-armleft {\r\n  animation: monster-armleft-attack 1s;\r\n}\r\n\r\n@keyframes monster-head-damage {\r\n  0%, 100% {\r\n    transform: translate(-10px, 250px);\r\n  }\r\n  50% {\r\n    transform: translate(-20px, 250px) rotate(-10deg);\r\n  }\r\n}\r\n\r\n@keyframes monster-torso-damage {\r\n  0%, 100% {\r\n    transform: translate(165px, 0);\r\n  }\r\n  50% {\r\n    transform: translate(165px, 0) rotate(-5deg);\r\n  }\r\n}\r\n\r\n@keyframes monster-armright-damage {\r\n  0%, 100% {\r\n    transform: translate(-215PX, 95px);\r\n  }\r\n  50% {\r\n    transform:  translate(-215PX, 95px) rotate(10deg);\r\n  }\r\n}\r\n\r\n@keyframes monster-armleft-damage {\r\n  0%, 100% {\r\n    transform: translate(50px, 100px);\r\n  }\r\n  50% {\r\n    transform: translate(50px, 100px) rotate(-10deg);\r\n  }\r\n}\r\n\r\n@keyframes monster-armleft-healing {\r\n  0%, 100% {\r\n    transform: translate(50px, 100px);    \r\n  }\r\n  50% {\r\n    transform: translate(50px, 100px) rotate(-40deg);\r\n  }\r\n}\r\n\r\n@keyframes monster-armleft-attack {\r\n  0%, 100% {\r\n    transform: translate(50px, 100px);\r\n  }\r\n  40% {\r\n    transform: translate(50px, 100px) rotate(-80deg);\r\n  }\r\n  70% {\r\n    transform: translate(50px, 100px) rotate(20deg);\r\n  }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/tasks/arithmetic/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/tasks/arithmetic/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".task {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-basis: 50%;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.expression {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.expression input {\r\n  width: 20%;\r\n  height: 30px;\r\n  font-size: 20px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/tasks/translate/style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/tasks/translate/style.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".task-translation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-basis: 50%;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.task-translation input {\r\n  width: 70%;\r\n  height: 30px;\r\n  font-size: 20px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/screens/playing/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/screens/playing/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../components/backgrounds/img/game_background_3.png */ "./src/components/backgrounds/img/game_background_3.png"));

// Module
exports.push([module.i, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  color: #fff;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.modal-info {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.modal-info h1 {\r\n  font-size: 40px;\r\n}\r\n\r\n.modal-info h3 {\r\n  font-size: 20px;\r\n}\r\n\r\n.player-name {\r\n  width: 30%;\r\n  height: 70px;\r\n  font-size: 30px;\r\n  border-radius: 30px;\r\n  outline: none;\r\n  padding: 0 10px;\r\n}\r\n\r\n.start-button {\r\n  width: 30%;\r\n  height: 110px;\r\n  border-radius: 35px;\r\n  font-size: 40px;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content:center; \r\n}\r\n\r\n.start-button:hover, .active {\r\n  font-size: 45px;\r\n  background: linear-gradient(3deg, rgb(3, 4, 12) 0%, rgb(4, 6, 19) 100%);\r\n  cursor: pointer;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.battle-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.data {\r\n  width: 90%;\r\n  height: 60px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: linear-gradient(3deg, rgba(3, 4, 12, 0.8) 0%, rgba(4, 6, 19, 0.8) 100%);\r\n  border-radius: 35px;\r\n}\r\n\r\n.names {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.health-scales {\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.monster-hp > .hp {\r\n  position: absolute;\r\n  right: 0px;\r\n}\r\n\r\n.spell-select {\r\n  width: 20%;\r\n  height: 100px;\r\n  margin: 10px;\r\n  padding: 10px;\r\n  display: flex;\r\n  background: linear-gradient(3deg, rgba(3, 4, 12, 0.8) 0%, rgba(4, 6, 19, 0.8) 100%);\r\n  border-radius: 20px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.spell-btn {\r\n  width: 100%;\r\n  border: 1px solid #fff;\r\n  border-radius: 15px;\r\n  font-size: 20px;\r\n  flex-basis: 45%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 2;\r\n}\r\n\r\n@keyframes pulsing {\r\n  0%, 100% { \r\n    font-size: 20px;\r\n  }\r\n  50% {\r\n    font-size: 25px;\r\n  }\r\n}\r\n\r\n.spell-btn:hover,\r\n.spell-btn:focus {\r\n  animation: pulsing 1.5s infinite;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.battle-area {\r\n  width: 100%;\r\n  height: 50%;\r\n  position: relative;\r\n}", ""]);



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

/***/ "./src/components/backgrounds/img/game_background_1.png":
/*!**************************************************************!*\
  !*** ./src/components/backgrounds/img/game_background_1.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a4b95f79a5c14a5f76e386c2d62425ed.png";

/***/ }),

/***/ "./src/components/backgrounds/img/game_background_2.png":
/*!**************************************************************!*\
  !*** ./src/components/backgrounds/img/game_background_2.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf7ad7bae367686970b82fe500e80632.png";

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

/***/ "./src/components/backgrounds/index.js":
/*!*********************************************!*\
  !*** ./src/components/backgrounds/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return randomBackground; });
/* harmony import */ var _randomizer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../randomizer/index */ "./src/components/randomizer/index.js");
/* harmony import */ var _img_game_background_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/game_background_1.png */ "./src/components/backgrounds/img/game_background_1.png");
/* harmony import */ var _img_game_background_1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_game_background_1_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_game_background_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/game_background_2.png */ "./src/components/backgrounds/img/game_background_2.png");
/* harmony import */ var _img_game_background_2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_game_background_2_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_game_background_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/game_background_3.png */ "./src/components/backgrounds/img/game_background_3.png");
/* harmony import */ var _img_game_background_3_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_game_background_3_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_game_background_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/game_background_4.png */ "./src/components/backgrounds/img/game_background_4.png");
/* harmony import */ var _img_game_background_4_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_game_background_4_png__WEBPACK_IMPORTED_MODULE_4__);





function randomBackground() {
  var url = [_img_game_background_1_png__WEBPACK_IMPORTED_MODULE_1___default.a, _img_game_background_2_png__WEBPACK_IMPORTED_MODULE_2___default.a, _img_game_background_3_png__WEBPACK_IMPORTED_MODULE_3___default.a, _img_game_background_4_png__WEBPACK_IMPORTED_MODULE_4___default.a];
  var back = Object(_randomizer_index__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
  document.querySelector('.battle-wrapper').style.background = "url(".concat(back, ") no-repeat center 80%");
}

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

/***/ "./src/components/health-scale/Health.js":
/*!***********************************************!*\
  !*** ./src/components/health-scale/Health.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Health; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/health-scale/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Health =
/*#__PURE__*/
function () {
  function Health(selector) {
    _classCallCheck(this, Health);

    this.selector = selector;
    this.health = 100;
  }

  _createClass(Health, [{
    key: "healthScale",
    value: function healthScale() {
      var scale = document.createElement('div');
      scale.classList.add('scale', "".concat(this.selector));
      var hp = document.createElement('div');
      hp.classList.add('hp');
      scale.appendChild(hp);
      this.hp = hp;
      return scale;
    }
  }, {
    key: "damage",
    value: function damage() {
      this.health -= 20;
      this.hp.style.width = "".concat(this.health, "%");
    }
  }, {
    key: "healing",
    value: function healing() {
      this.health += 20;
      this.hp.style.width = "".concat(this.health, "%");
    }
  }]);

  return Health;
}();



/***/ }),

/***/ "./src/components/health-scale/style.css":
/*!***********************************************!*\
  !*** ./src/components/health-scale/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/health-scale/style.css");

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

/***/ "./src/components/modals/gameover/index.js":
/*!*************************************************!*\
  !*** ./src/components/modals/gameover/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gameover; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/modals/gameover/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buttons/Button/Button */ "./src/components/buttons/Button/Button.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Gameover =
/*#__PURE__*/
function () {
  function Gameover(wins) {
    _classCallCheck(this, Gameover);

    this.gameoverModal = document.createElement('div');
    this.gameoverModal.classList.add('gameover-modal');
    this.btn = new _buttons_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"]('Main menu', 'ending-btn').createButton();
    this.wins = wins;
  }

  _createClass(Gameover, [{
    key: "render",
    value: function render() {
      var head = document.createElement('h2');
      var text = document.createElement('p');
      var winscount = document.createElement('p');
      head.textContent = 'Sorry! You Died!';
      text.textContent = 'You killed monsters:';
      winscount.textContent = this.wins;
      this.gameoverModal.appendChild(head);
      this.gameoverModal.appendChild(text);
      this.gameoverModal.appendChild(winscount);
      this.gameoverModal.appendChild(this.btn);
      this.btn.setAttribute('href', 'index.html');
      document.body.appendChild(this.gameoverModal);
    }
  }]);

  return Gameover;
}();



/***/ }),

/***/ "./src/components/modals/gameover/style.css":
/*!**************************************************!*\
  !*** ./src/components/modals/gameover/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modals/gameover/style.css");

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

/***/ "./src/components/modals/task/style.css":
/*!**********************************************!*\
  !*** ./src/components/modals/task/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modals/task/style.css");

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

/***/ "./src/components/modals/task/task-modal.js":
/*!**************************************************!*\
  !*** ./src/components/modals/task/task-modal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskModal; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/modals/task/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tasks_arithmetic_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks/arithmetic/index */ "./src/components/tasks/arithmetic/index.js");
/* harmony import */ var _tasks_translate_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks/translate/index */ "./src/components/tasks/translate/index.js");
/* harmony import */ var _buttons_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../buttons/Button/Button */ "./src/components/buttons/Button/Button.js");
/* harmony import */ var _randomizer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../randomizer/index */ "./src/components/randomizer/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var TaskModal =
/*#__PURE__*/
function () {
  function TaskModal() {
    _classCallCheck(this, TaskModal);

    this.modal = document.createElement('div');
    this.modal.classList.add('task-modal');
    var checkBtn = new _buttons_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"]('Check Result', 'check-btn');
    this.btn = checkBtn.createButton();
    this.tasks = [Object(_tasks_arithmetic_index__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_tasks_translate_index__WEBPACK_IMPORTED_MODULE_2__["default"])()];
    this.chosenTask = Object(_randomizer_index__WEBPACK_IMPORTED_MODULE_4__["default"])(this.tasks);
    var _this$chosenTask = this.chosenTask,
        task = _this$chosenTask.task,
        res = _this$chosenTask.res,
        answer = _this$chosenTask.answer;
    this.task = task;
    this.answer = answer;
    this.res = res;
    this.correct = res[res.length - 1];
    this.isCorrect = this.isCorrect.bind(this);
  }

  _createClass(TaskModal, [{
    key: "render",
    value: function render() {
      this.modal.appendChild(this.task);
      this.modal.appendChild(this.btn);
      document.body.appendChild(this.modal);
      this.answer.focus();
    }
  }, {
    key: "remove",
    value: function remove() {
      this.modal.remove();
      return null;
    }
  }, {
    key: "isCorrect",
    value: function isCorrect() {
      switch (this.chosenTask.type) {
        case 'math':
          return this.correct == this.answer.value;

        case 'translate':
          return this.res.includes(this.answer.value);
      }
    }
  }, {
    key: "correctColor",
    value: function correctColor() {
      this.modal.classList.add('correct');
    }
  }, {
    key: "failColor",
    value: function failColor() {
      this.modal.classList.add('fail');
    }
  }]);

  return TaskModal;
}();



/***/ }),

/***/ "./src/components/players/Character.js":
/*!*********************************************!*\
  !*** ./src/components/players/Character.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/players/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _health_scale_Health__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../health-scale/Health */ "./src/components/health-scale/Health.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Character =
/*#__PURE__*/
function () {
  function Character(selector, name) {
    _classCallCheck(this, Character);

    this.name = document.createElement('p');
    this.name.textContent = name;
    this.scale = new _health_scale_Health__WEBPACK_IMPORTED_MODULE_1__["default"](selector);
    this.health = this.scale.healthScale();
  }

  _createClass(Character, [{
    key: "renderPlayer",
    value: function renderPlayer() {
      this.player = document.createElement('div');
      this.player.classList.add('player');
      var body = document.createElement('div');
      var legs = document.createElement('div');
      body.classList.add('player-body');
      legs.classList.add('player-legs');
      var head = document.createElement('div');
      var torso = document.createElement('div');
      var armLeft = document.createElement('div');
      var armRight = document.createElement('div');
      var hand = document.createElement('div');
      var legLeft = document.createElement('div');
      var legRight = document.createElement('div');
      var weapon = document.createElement('div');
      var spell = document.createElement('div');
      head.classList.add('player-head');
      torso.classList.add('player-torso');
      armLeft.classList.add('player-armleft');
      armRight.classList.add('player-armright');
      hand.classList.add('player-hand');
      legLeft.classList.add('player-legleft');
      legRight.classList.add('player-legright');
      weapon.classList.add('player-weapon');
      spell.classList.add('player-spell');
      weapon.appendChild(spell);
      armLeft.appendChild(hand);
      armLeft.appendChild(weapon);
      body.appendChild(torso);
      body.appendChild(armRight);
      body.appendChild(armLeft);
      legs.appendChild(legRight);
      legs.appendChild(legLeft);
      this.player.appendChild(head);
      this.player.appendChild(body);
      this.player.appendChild(legs);
      return this.player;
    }
  }, {
    key: "renderMonster",
    value: function renderMonster() {
      var random = function random() {
        return Math.floor(Math.random() * 3) + 1;
      };

      this.monster = document.createElement('div');
      this.monster.classList.add('monster');
      var body = document.createElement('div');
      var legs = document.createElement('div');
      body.classList.add('monster-body');
      legs.classList.add('monster-legs');
      var head = document.createElement('div');
      var torso = document.createElement('div');
      var armLeft = document.createElement('div');
      var armRight = document.createElement('div');
      var legLeft = document.createElement('div');
      var legRight = document.createElement('div');
      head.style.background = "url(".concat(__webpack_require__("./src/components/players/enemy/img/heads sync recursive ^\\.\\/.*_head\\.png$")("./".concat(random(), "_head.png")), ") 50% no-repeat");
      torso.style.background = "url(".concat(__webpack_require__("./src/components/players/enemy/img/bodys sync recursive ^\\.\\/.*_body\\.png$")("./".concat(random(), "_body.png")), ") no-repeat");
      var randomArm = random();
      var randomLeg = random();
      armLeft.style.background = "url(".concat(__webpack_require__("./src/components/players/enemy/img/arms sync recursive ^\\.\\/.*\\/left_arm\\.png$")("./".concat(randomArm, "/left_arm.png")), ")  no-repeat");
      armRight.style.background = "url(".concat(__webpack_require__("./src/components/players/enemy/img/arms sync recursive ^\\.\\/.*\\/right_arm\\.png$")("./".concat(randomArm, "/right_arm.png")), ")  no-repeat");
      legLeft.style.background = "url(".concat(__webpack_require__("./src/components/players/enemy/img/legs sync recursive ^\\.\\/.*\\/left_leg\\.png$")("./".concat(randomLeg, "/left_leg.png")), ") no-repeat");
      legRight.style.background = "url(".concat(__webpack_require__("./src/components/players/enemy/img/legs sync recursive ^\\.\\/.*\\/right_leg\\.png$")("./".concat(randomLeg, "/right_leg.png")), ") no-repeat");
      head.classList.add('monster-head');
      torso.classList.add('monster-torso');
      armLeft.classList.add('monster-armleft');
      armRight.classList.add('monster-armright');
      legLeft.classList.add('monster-legleft');
      legRight.classList.add('monster-legright');
      body.appendChild(torso);
      body.appendChild(armRight);
      body.appendChild(armLeft);
      legs.appendChild(legRight);
      legs.appendChild(legLeft);
      this.monster.appendChild(head);
      this.monster.appendChild(body);
      this.monster.appendChild(legs);
      return this.monster;
    }
  }]);

  return Character;
}();



/***/ }),

/***/ "./src/components/players/enemy-name-rendering/index.js":
/*!**************************************************************!*\
  !*** ./src/components/players/enemy-name-rendering/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderName; });
/* harmony import */ var _randomizer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../randomizer/index */ "./src/components/randomizer/index.js");

function renderName() {
  var adjective = ['Ужасный', 'Злой', 'Трусливый', 'Огромный', 'Голодный', 'Злобный', 'Тупой', 'Уродливый'];
  var monstr = ['Огр', 'Тролль', 'Гоблин', 'Гном', 'Людоед', 'Великан'];
  var name = ['Василий', 'Пётр', 'Игнатий', 'Виталий', 'Николай', 'Валентин', 'Тимофей'];
  var fullName = Object(_randomizer_index__WEBPACK_IMPORTED_MODULE_0__["default"])(adjective) + ' ' + Object(_randomizer_index__WEBPACK_IMPORTED_MODULE_0__["default"])(monstr) + ' ' + Object(_randomizer_index__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return fullName;
}

/***/ }),

/***/ "./src/components/players/enemy/img/arms sync recursive ^\\.\\/.*\\/left_arm\\.png$":
/*!****************************************************************************!*\
  !*** ./src/components/players/enemy/img/arms sync ^\.\/.*\/left_arm\.png$ ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1/left_arm.png": "./src/components/players/enemy/img/arms/1/left_arm.png",
	"./2/left_arm.png": "./src/components/players/enemy/img/arms/2/left_arm.png",
	"./3/left_arm.png": "./src/components/players/enemy/img/arms/3/left_arm.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/players/enemy/img/arms sync recursive ^\\.\\/.*\\/left_arm\\.png$";

/***/ }),

/***/ "./src/components/players/enemy/img/arms sync recursive ^\\.\\/.*\\/right_arm\\.png$":
/*!*****************************************************************************!*\
  !*** ./src/components/players/enemy/img/arms sync ^\.\/.*\/right_arm\.png$ ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1/right_arm.png": "./src/components/players/enemy/img/arms/1/right_arm.png",
	"./2/right_arm.png": "./src/components/players/enemy/img/arms/2/right_arm.png",
	"./3/right_arm.png": "./src/components/players/enemy/img/arms/3/right_arm.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/players/enemy/img/arms sync recursive ^\\.\\/.*\\/right_arm\\.png$";

/***/ }),

/***/ "./src/components/players/enemy/img/arms/1/left_arm.png":
/*!**************************************************************!*\
  !*** ./src/components/players/enemy/img/arms/1/left_arm.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd8eb2a8ad631c3e31076f7f3c41003f.png";

/***/ }),

/***/ "./src/components/players/enemy/img/arms/1/right_arm.png":
/*!***************************************************************!*\
  !*** ./src/components/players/enemy/img/arms/1/right_arm.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b36324a172503fa9f8cb6773a04e1a5d.png";

/***/ }),

/***/ "./src/components/players/enemy/img/arms/2/left_arm.png":
/*!**************************************************************!*\
  !*** ./src/components/players/enemy/img/arms/2/left_arm.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d402efffee2eb60db84123a70328a455.png";

/***/ }),

/***/ "./src/components/players/enemy/img/arms/2/right_arm.png":
/*!***************************************************************!*\
  !*** ./src/components/players/enemy/img/arms/2/right_arm.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c2734d4185ea04c4eec17382945f631a.png";

/***/ }),

/***/ "./src/components/players/enemy/img/arms/3/left_arm.png":
/*!**************************************************************!*\
  !*** ./src/components/players/enemy/img/arms/3/left_arm.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "48ff16e5a489de37449631e1b1d300c4.png";

/***/ }),

/***/ "./src/components/players/enemy/img/arms/3/right_arm.png":
/*!***************************************************************!*\
  !*** ./src/components/players/enemy/img/arms/3/right_arm.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7625641b8cdb6c541f8d16493e7435e6.png";

/***/ }),

/***/ "./src/components/players/enemy/img/bodys sync recursive ^\\.\\/.*_body\\.png$":
/*!************************************************************************!*\
  !*** ./src/components/players/enemy/img/bodys sync ^\.\/.*_body\.png$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1_body.png": "./src/components/players/enemy/img/bodys/1_body.png",
	"./2_body.png": "./src/components/players/enemy/img/bodys/2_body.png",
	"./3_body.png": "./src/components/players/enemy/img/bodys/3_body.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/players/enemy/img/bodys sync recursive ^\\.\\/.*_body\\.png$";

/***/ }),

/***/ "./src/components/players/enemy/img/bodys/1_body.png":
/*!***********************************************************!*\
  !*** ./src/components/players/enemy/img/bodys/1_body.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "953b24b129600b119e463ff8771c59eb.png";

/***/ }),

/***/ "./src/components/players/enemy/img/bodys/2_body.png":
/*!***********************************************************!*\
  !*** ./src/components/players/enemy/img/bodys/2_body.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "07a0a1bc9115a4b1efd8d4887435e678.png";

/***/ }),

/***/ "./src/components/players/enemy/img/bodys/3_body.png":
/*!***********************************************************!*\
  !*** ./src/components/players/enemy/img/bodys/3_body.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3008da6f4e1d974d806ec3821179905c.png";

/***/ }),

/***/ "./src/components/players/enemy/img/heads sync recursive ^\\.\\/.*_head\\.png$":
/*!************************************************************************!*\
  !*** ./src/components/players/enemy/img/heads sync ^\.\/.*_head\.png$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1_head.png": "./src/components/players/enemy/img/heads/1_head.png",
	"./2_head.png": "./src/components/players/enemy/img/heads/2_head.png",
	"./3_head.png": "./src/components/players/enemy/img/heads/3_head.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/players/enemy/img/heads sync recursive ^\\.\\/.*_head\\.png$";

/***/ }),

/***/ "./src/components/players/enemy/img/heads/1_head.png":
/*!***********************************************************!*\
  !*** ./src/components/players/enemy/img/heads/1_head.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "958a5b0b90b5a26cdc3689e9b3b90906.png";

/***/ }),

/***/ "./src/components/players/enemy/img/heads/2_head.png":
/*!***********************************************************!*\
  !*** ./src/components/players/enemy/img/heads/2_head.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "84ad4cb67e181bb545d27452dd145f02.png";

/***/ }),

/***/ "./src/components/players/enemy/img/heads/3_head.png":
/*!***********************************************************!*\
  !*** ./src/components/players/enemy/img/heads/3_head.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd0c7f79ad6abcbb6e5bfffc6911529e.png";

/***/ }),

/***/ "./src/components/players/enemy/img/legs sync recursive ^\\.\\/.*\\/left_leg\\.png$":
/*!****************************************************************************!*\
  !*** ./src/components/players/enemy/img/legs sync ^\.\/.*\/left_leg\.png$ ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1/left_leg.png": "./src/components/players/enemy/img/legs/1/left_leg.png",
	"./2/left_leg.png": "./src/components/players/enemy/img/legs/2/left_leg.png",
	"./3/left_leg.png": "./src/components/players/enemy/img/legs/3/left_leg.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/players/enemy/img/legs sync recursive ^\\.\\/.*\\/left_leg\\.png$";

/***/ }),

/***/ "./src/components/players/enemy/img/legs sync recursive ^\\.\\/.*\\/right_leg\\.png$":
/*!*****************************************************************************!*\
  !*** ./src/components/players/enemy/img/legs sync ^\.\/.*\/right_leg\.png$ ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1/right_leg.png": "./src/components/players/enemy/img/legs/1/right_leg.png",
	"./2/right_leg.png": "./src/components/players/enemy/img/legs/2/right_leg.png",
	"./3/right_leg.png": "./src/components/players/enemy/img/legs/3/right_leg.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/players/enemy/img/legs sync recursive ^\\.\\/.*\\/right_leg\\.png$";

/***/ }),

/***/ "./src/components/players/enemy/img/legs/1/left_leg.png":
/*!**************************************************************!*\
  !*** ./src/components/players/enemy/img/legs/1/left_leg.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0455feed990a54bfafbfcdac35e14166.png";

/***/ }),

/***/ "./src/components/players/enemy/img/legs/1/right_leg.png":
/*!***************************************************************!*\
  !*** ./src/components/players/enemy/img/legs/1/right_leg.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2427e9366e50105a9b89f7fd6e83584f.png";

/***/ }),

/***/ "./src/components/players/enemy/img/legs/2/left_leg.png":
/*!**************************************************************!*\
  !*** ./src/components/players/enemy/img/legs/2/left_leg.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c9e652bca340274bb2bbc03257c22b5c.png";

/***/ }),

/***/ "./src/components/players/enemy/img/legs/2/right_leg.png":
/*!***************************************************************!*\
  !*** ./src/components/players/enemy/img/legs/2/right_leg.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9d32330eb730886071c92002fed8c856.png";

/***/ }),

/***/ "./src/components/players/enemy/img/legs/3/left_leg.png":
/*!**************************************************************!*\
  !*** ./src/components/players/enemy/img/legs/3/left_leg.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b4291ba726247c13df3ffc4bb16948f.png";

/***/ }),

/***/ "./src/components/players/enemy/img/legs/3/right_leg.png":
/*!***************************************************************!*\
  !*** ./src/components/players/enemy/img/legs/3/right_leg.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bcf735f85b5e9af909937b548ad30ee5.png";

/***/ }),

/***/ "./src/components/players/player/img/3_arm_left.png":
/*!**********************************************************!*\
  !*** ./src/components/players/player/img/3_arm_left.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "35cda7a7bfd356f968530621b6710d90.png";

/***/ }),

/***/ "./src/components/players/player/img/3_arm_right.png":
/*!***********************************************************!*\
  !*** ./src/components/players/player/img/3_arm_right.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f8dfa0211ba9c852cde5f8e73212715.png";

/***/ }),

/***/ "./src/components/players/player/img/3_body.png":
/*!******************************************************!*\
  !*** ./src/components/players/player/img/3_body.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be2f02f59c419b98cf20cdc964515914.png";

/***/ }),

/***/ "./src/components/players/player/img/3_boll.png":
/*!******************************************************!*\
  !*** ./src/components/players/player/img/3_boll.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21540b05ebc1823ee17994641a518569.png";

/***/ }),

/***/ "./src/components/players/player/img/3_head.png":
/*!******************************************************!*\
  !*** ./src/components/players/player/img/3_head.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "08ce93649086e1c9af439a7e1dd3a850.png";

/***/ }),

/***/ "./src/components/players/player/img/3_leg_left.png":
/*!**********************************************************!*\
  !*** ./src/components/players/player/img/3_leg_left.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4d9e3f7022d6f1542a90b1d4e364657.png";

/***/ }),

/***/ "./src/components/players/player/img/3_leg_right.png":
/*!***********************************************************!*\
  !*** ./src/components/players/player/img/3_leg_right.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "40ce61a95724a899c67063da23c0f18c.png";

/***/ }),

/***/ "./src/components/players/player/img/fingers.png":
/*!*******************************************************!*\
  !*** ./src/components/players/player/img/fingers.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8fa02384c0e8435fc9ea34654ac8c882.png";

/***/ }),

/***/ "./src/components/players/player/img/stick.png":
/*!*****************************************************!*\
  !*** ./src/components/players/player/img/stick.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a94e4522aefe2b855d3ff180541939ef.png";

/***/ }),

/***/ "./src/components/players/style.css":
/*!******************************************!*\
  !*** ./src/components/players/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/players/style.css");

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

/***/ "./src/components/randomizer/index.js":
/*!********************************************!*\
  !*** ./src/components/randomizer/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return random; });
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/***/ }),

/***/ "./src/components/soundeffects/correct.mp3":
/*!*************************************************!*\
  !*** ./src/components/soundeffects/correct.mp3 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8aac48fddb727fec26068e45cb018390.mp3";

/***/ }),

/***/ "./src/components/soundeffects/fail.mp3":
/*!**********************************************!*\
  !*** ./src/components/soundeffects/fail.mp3 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f5db81f885f9227149e2d8ff5fdc466d.mp3";

/***/ }),

/***/ "./src/components/soundeffects/healing.mp3":
/*!*************************************************!*\
  !*** ./src/components/soundeffects/healing.mp3 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "476696f11065bba488bb06c03a4654b2.mp3";

/***/ }),

/***/ "./src/components/soundeffects/monster_attack_song.mp3":
/*!*************************************************************!*\
  !*** ./src/components/soundeffects/monster_attack_song.mp3 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dba5d6c960986b0db77903829fba4289.mp3";

/***/ }),

/***/ "./src/components/soundeffects/monster_damage_song.mp3":
/*!*************************************************************!*\
  !*** ./src/components/soundeffects/monster_damage_song.mp3 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ef75bf40a75274b497ede62b8b85ff50.mp3";

/***/ }),

/***/ "./src/components/soundeffects/player_attack_song.mp3":
/*!************************************************************!*\
  !*** ./src/components/soundeffects/player_attack_song.mp3 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0052c192635132d1281d224b5a28a0c3.mp3";

/***/ }),

/***/ "./src/components/soundeffects/player_damage_song.mp3":
/*!************************************************************!*\
  !*** ./src/components/soundeffects/player_damage_song.mp3 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2c0fc4c215402726d3d150ae0f163c05.mp3";

/***/ }),

/***/ "./src/components/tasks/arithmetic/index.js":
/*!**************************************************!*\
  !*** ./src/components/tasks/arithmetic/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateMath; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/tasks/arithmetic/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _randomizer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../randomizer/index */ "./src/components/randomizer/index.js");



function generateSum() {
  var a = Math.floor(Math.random() * 100) + 11;
  var b = Math.floor(Math.random() * 100) + 11;
  var c = a + b;
  return [a, b, c];
}

function generateSub() {
  var a = Math.floor(Math.random() * 100) + 11;
  var b = Math.floor(Math.random() * 100) + 11;
  var c = a - b;
  return [a, b, c];
}

function generateMul() {
  var a = Math.floor(Math.random() * 12) + 3;
  var b = Math.floor(Math.random() * 12) + 3;
  var c = a * b;
  return [a, b, c];
}

function generateDiv() {
  var a = Math.floor(Math.random() * 12) + 3;
  var b = Math.floor(Math.random() * 12) + 3;
  var c = a * b;
  return [c, b, a];
}

function showTask(s, res) {
  var task = document.createElement('div');
  task.classList.add('task');
  var question = document.createElement('h3');
  question.textContent = 'Enter the correct answer';
  var fullExp = document.createElement('div');
  fullExp.classList.add('expression');
  var expression = document.createElement('p');
  expression.textContent = "".concat(res[0], " ").concat(s, " ").concat(res[1], " = ");
  var answer = document.createElement('input');
  answer.setAttribute('type', 'textarea');
  answer.setAttribute('tabindex', '1');
  fullExp.appendChild(expression);
  fullExp.appendChild(answer);
  task.appendChild(question);
  task.appendChild(fullExp);
  return {
    task: task,
    res: res,
    answer: answer,
    type: 'math'
  };
}

function generateMath() {
  var symbols = ['+', '-', '*', '/'];
  var chosen = Object(_randomizer_index__WEBPACK_IMPORTED_MODULE_1__["default"])(symbols);

  switch (chosen) {
    case '+':
      return showTask(chosen, generateSum());

    case '-':
      return showTask(chosen, generateSub());

    case '*':
      return showTask(chosen, generateMul());

    case '/':
      return showTask(chosen, generateDiv());
  }
}

/***/ }),

/***/ "./src/components/tasks/arithmetic/style.css":
/*!***************************************************!*\
  !*** ./src/components/tasks/arithmetic/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/tasks/arithmetic/style.css");

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

/***/ "./src/components/tasks/translate/index.js":
/*!*************************************************!*\
  !*** ./src/components/tasks/translate/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateTranslate; });
/* harmony import */ var _vocabulary_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vocabulary/index */ "./src/components/vocabulary/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/tasks/translate/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _randomizer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../randomizer/index */ "./src/components/randomizer/index.js");



function generateTranslate() {
  var checkingWord = Object(_randomizer_index__WEBPACK_IMPORTED_MODULE_2__["default"])(_vocabulary_index__WEBPACK_IMPORTED_MODULE_0__["vocabulary"]);
  console.log(checkingWord);
  var word = Object.keys(checkingWord);
  var res = checkingWord[word[0]];
  var task = document.createElement('div');
  task.classList.add('task-translation');
  var question = document.createElement('h3');
  question.textContent = 'Translate this word:';
  var showWord = document.createElement('p');
  showWord.classList.add('word');
  showWord.textContent = "".concat(word[0]);
  var answer = document.createElement('input');
  answer.setAttribute('type', 'textarea');
  answer.setAttribute('tabindex', '1');
  task.appendChild(question);
  task.appendChild(showWord);
  task.appendChild(answer);
  return {
    task: task,
    res: res,
    answer: answer,
    type: 'translate'
  };
}

/***/ }),

/***/ "./src/components/tasks/translate/style.css":
/*!**************************************************!*\
  !*** ./src/components/tasks/translate/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/tasks/translate/style.css");

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

/***/ "./src/components/utils/index.js":
/*!***************************************!*\
  !*** ./src/components/utils/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return behavior; });
function behavior(t, fn) {
  return fn ? new Promise(function (res, rej) {
    return setTimeout(function () {
      fn() ? res() : rej();
    });
  }) : new Promise(function (res) {
    return setTimeout(res, t);
  });
}

/***/ }),

/***/ "./src/components/vocabulary/index.js":
/*!********************************************!*\
  !*** ./src/components/vocabulary/index.js ***!
  \********************************************/
/*! exports provided: vocabulary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vocabulary", function() { return vocabulary; });
var vocabulary = [{
  'angle': ['угол', 'поворачивать']
}, {
  'ant': ['муравей']
}, {
  'apple': ['яблоко']
}, {
  'arch': ['арка', 'дуга', 'выгибать']
}, {
  'arm': ['рука', 'вооружать']
}, {
  'army': ['армия']
}, {
  'bag': ['сумка']
}, {
  'ball': ['мяч']
}, {
  'bank': ['банк']
}, {
  'basin': ['бассейн']
}, {
  'basket': ['корзина']
}, {
  'bath': ['ванна', 'купаться']
}, {
  'bed': ['кровать']
}, {
  'bee': ['пчела']
}, {
  'bell': ['колокольчик']
}, {
  'berry': ['ягода']
}, {
  'bird': ['птица']
}, {
  'blade': ['лезвие']
}, {
  'board': ['доска']
}, {
  'boat': ['лодка', 'судно']
}, {
  'bone': ['кость']
}, {
  'book': ['книга']
}, {
  'boot': ['ботинок', 'загружать']
}, {
  'bottle': ['бутылка']
}, {
  'box': ['коробка']
}, {
  'boy': ['мальчик']
}, {
  'brain': ['мозг']
}, {
  'brake': ['тормоз', 'тормозить']
}, {
  'branch': ['ветвь', 'отделение']
}, {
  'brick': ['кирпич']
}, {
  'bridge': ['мост']
}, {
  'brush': ['щётка', 'кисть']
}, {
  'bucket': ['ведро', 'черпать']
}, {
  'bulb': ['луковица', 'выпирать']
}, {
  'button': ['кнопка', 'застёгивать']
}, {
  'baby': ['ребёнок', 'младенец']
}, {
  'cake': ['пирог']
}, {
  'camera': ['камера']
}, {
  'card': ['карта', 'чесать']
}, {
  'cart': ['везти']
}, {
  'carriage': ['вагон']
}, {
  'cat': ['кот', 'кошка', 'котик']
}, {
  'chain': ['цепь', 'сеть']
}, {
  'cheese': ['сыр']
}, {
  'chest': ['грудь', 'сундук']
}, {
  'chin': ['подбородок']
}, {
  'church': ['церковь']
}, {
  'circle': ['круг']
}, {
  'clock': ['часы']
}, {
  'cloud': ['облако']
}, {
  'coat': ['пальто', 'покрывать']
}, {
  'collar': ['воротник', 'хватать', 'ошейник']
}, {
  'comb': ['расчёсывать']
}, {
  'cord': ['шнур', 'связывать']
}, {
  'cow': ['корова']
}, {
  'cup': ['чашка']
}, {
  'curtain': ['занавес', 'штора']
}, {
  'cushion': ['подушка']
}, {
  'dog': ['собака']
}, {
  'door': ['дверь']
}, {
  'drain': ['утечка']
}, {
  'drawer': ['ящик']
}, {
  'dress': ['платье', 'одевать']
}, {
  'drop': ['капля', 'опускать']
}, {
  'ear': ['ухо']
}, {
  'egg': ['яйцо']
}, {
  'eye': ['глаз']
}, {
  'face': ['лицо']
}, {
  'farm': ['ферма']
}, {
  'feather': ['перо', 'украшать']
}, {
  'finger': ['палец']
}, {
  'fish': ['рыба']
}, {
  'flag': ['флаг', 'сигнализировать']
}, {
  'floor': ['пол', 'этаж', 'дно']
}, {
  'fly': ['муха', 'лететь']
}, {
  'foot': ['нога']
}, {
  'fork': ['вилка']
}, {
  'frame': ['структура', 'рамка', 'создавать']
}, {
  'garden': ['сад']
}, {
  'girl': ['девочка']
}, {
  'glove': ['перчатка']
}, {
  'goat': ['коза']
}, {
  'gun': ['оружие']
}, {
  'hair': ['волосы']
}, {
  'hammer': ['молоток']
}, {
  'hand': ['рука']
}, {
  'hat': ['шляпа']
}, {
  'head': ['голова']
}, {
  'heart': ['сердце']
}, {
  'hook': ['крюк', 'вербовать']
}, {
  'horn': ['рожок']
}, {
  'horse': ['лошадь']
}, {
  'hospital': ['больница']
}, {
  'house': ['дом']
}, {
  'island': ['остров']
}, {
  'kettle': ['чайник']
}, {
  'key': ['ключ']
}, {
  'knee': ['колено']
}, {
  'knife': ['нож']
}, {
  'knot': ['узел']
}, {
  'leaf': ['лист']
}, {
  'leg': ['нога']
}, {
  'library': ['библиотека']
}, {
  'line': ['линия', 'очередь', 'выравнивать']
}, {
  'lip': ['губа']
}, {
  'lock': ['замок']
}, {
  'map': ['карта']
}, {
  'match': ['спичка', 'сделки', 'соответствовать']
}, {
  'monkey': ['обезьяна']
}, {
  'moon': ['луна']
}, {
  'mouth': ['рот', 'жевать']
}, {
  'muscle': ['мускул']
}, {
  'nail': ['ноготь']
}, {
  'neck': ['шея', 'обниматься']
}, {
  'nerve': ['нерв']
}, {
  'net': ['чистый', 'сеть']
}, {
  'nose': ['нос']
}, {
  'nut': ['орех']
}, {
  'office': ['офис']
}, {
  'orange': ['апельсин', 'оранжевый']
}, {
  'oven': ['духовка', 'печь']
}, {
  'parcel': ['пакет', 'распределять']
}, {
  'pen': ['ручка']
}, {
  'pencil': ['карандаш']
}, {
  'picture': ['картина']
}, {
  'pig': ['свинья']
}, {
  'pin': ['булавка', 'прикреплять']
}, {
  'pipe': ['труба']
}, {
  'plane': ['самолёт']
}, {
  'plate': ['пластина']
}, {
  'plow': ['плуг', 'пахать']
}, {
  'pocket': ['карман', 'присваивать']
}, {
  'pot': ['горшок']
}, {
  'potato': ['картофель']
}, {
  'prison': ['тюрьма']
}, {
  'pump': ['насос', 'качать']
}, {
  'rail': ['рельс', 'перевозить поездом']
}, {
  'rat': ['крыса']
}, {
  'receipt': ['квитанция']
}, {
  'ring': ['кольцо', 'звонить']
}, {
  'rod': ['прут']
}, {
  'roof': ['крыша']
}, {
  'root': ['корень']
}, {
  'sail': ['парус']
}, {
  'school': ['школа']
}, {
  'scissors': ['ножницы']
}, {
  'screw': ['винт']
}, {
  'seed': ['семя']
}, {
  'sheep': ['баран', 'овца', 'овчина']
}, {
  'shelf': ['полка']
}, {
  'ship': ['корабль']
}, {
  'shirt': ['рубашка']
}, {
  'shoe': ['ботинок']
}, {
  'skin': ['кожа', 'очищать']
}, {
  'skirt': ['юбка']
}, {
  'snake': ['змея']
}, {
  'sock': ['носок']
}, {
  'spade': ['лопата']
}, {
  'sponge': ['губка']
}, {
  'spoon': ['ложка']
}, {
  'spring': ['весна']
}, {
  'square': ['квадрат']
}, {
  'stamp': ['печать', 'марка', 'отпечатывать']
}, {
  'star': ['звезда']
}, {
  'station': ['станция']
}, {
  'stem': ['стебель', 'происходить']
}, {
  'stick': ['палка', 'прикреплять']
}, {
  'stomach': ['живот', 'смелость', 'переваривать']
}, {
  'store': ['магазин', 'запас']
}, {
  'street': ['улица']
}, {
  'sun': ['солнце']
}, {
  'table': ['стол']
}, {
  'tail': ['хвост', 'выслеживать']
}, {
  'thread': ['нить', 'пронизывать']
}, {
  'throat': ['горло']
}, {
  'thumb': ['листать', 'большой палец']
}, {
  'ticket': ['билет']
}, {
  'tongue': ['язык']
}, {
  'tooth': ['зуб']
}, {
  'town': ['город']
}, {
  'train': ['поезд']
}, {
  'tray': ['поднос']
}, {
  'tree': ['дерево']
}, {
  'trousers': ['брюки']
}, {
  'umbrella': ['зонт']
}, {
  'wall': ['стена']
}, {
  'watch': ['часы']
}, {
  'wheel': ['колесо', 'вертеть']
}, {
  'whip': ['кнут', 'хлестать']
}, {
  'whistle': ['свист', 'свистеть']
}, {
  'window': ['окно']
}, {
  'wing': ['крыло']
}, {
  'wire': ['провод']
}, {
  'worm': ['червь']
}];


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_playing_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/playing/style.css */ "./src/screens/playing/style.css");
/* harmony import */ var _screens_playing_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_screens_playing_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _screens_playing_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/playing/info */ "./src/screens/playing/info.js");


Object(_screens_playing_info__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/screens/playing/Game.js":
/*!*************************************!*\
  !*** ./src/screens/playing/Game.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _components_backgrounds_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/backgrounds/index */ "./src/components/backgrounds/index.js");
/* harmony import */ var _components_players_enemy_name_rendering_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/players/enemy-name-rendering/index */ "./src/components/players/enemy-name-rendering/index.js");
/* harmony import */ var _components_buttons_buttons_group_creating_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/buttons/buttons-group/creating-buttons */ "./src/components/buttons/buttons-group/creating-buttons.js");
/* harmony import */ var _components_modals_task_task_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modals/task/task-modal */ "./src/components/modals/task/task-modal.js");
/* harmony import */ var _components_players_Character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/players/Character */ "./src/components/players/Character.js");
/* harmony import */ var _components_modals_gameover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modals/gameover */ "./src/components/modals/gameover/index.js");
/* harmony import */ var _components_soundeffects_correct_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/soundeffects/correct.mp3 */ "./src/components/soundeffects/correct.mp3");
/* harmony import */ var _components_soundeffects_correct_mp3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_soundeffects_correct_mp3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_soundeffects_fail_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/soundeffects/fail.mp3 */ "./src/components/soundeffects/fail.mp3");
/* harmony import */ var _components_soundeffects_fail_mp3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_soundeffects_fail_mp3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_soundeffects_healing_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/soundeffects/healing.mp3 */ "./src/components/soundeffects/healing.mp3");
/* harmony import */ var _components_soundeffects_healing_mp3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_soundeffects_healing_mp3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_soundeffects_monster_attack_song_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/soundeffects/monster_attack_song.mp3 */ "./src/components/soundeffects/monster_attack_song.mp3");
/* harmony import */ var _components_soundeffects_monster_attack_song_mp3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_soundeffects_monster_attack_song_mp3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_soundeffects_monster_damage_song_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/soundeffects/monster_damage_song.mp3 */ "./src/components/soundeffects/monster_damage_song.mp3");
/* harmony import */ var _components_soundeffects_monster_damage_song_mp3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_soundeffects_monster_damage_song_mp3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_soundeffects_player_attack_song_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/soundeffects/player_attack_song.mp3 */ "./src/components/soundeffects/player_attack_song.mp3");
/* harmony import */ var _components_soundeffects_player_attack_song_mp3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_soundeffects_player_attack_song_mp3__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_soundeffects_player_damage_song_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/soundeffects/player_damage_song.mp3 */ "./src/components/soundeffects/player_damage_song.mp3");
/* harmony import */ var _components_soundeffects_player_damage_song_mp3__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_soundeffects_player_damage_song_mp3__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_utils_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/utils/index */ "./src/components/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
















var Game =
/*#__PURE__*/
function () {
  function Game(name) {
    _classCallCheck(this, Game);

    this.name = name;
    this.wrapper = document.createElement('section');
    this.wrapper.classList.add('battle-wrapper');
    this.data = document.createElement('div');
    this.names = document.createElement('div');
    this.healthScales = document.createElement('div');
    this.battle = document.createElement('div');
    this.data.classList.add('data');
    this.names.classList.add('names');
    this.healthScales.classList.add('health-scales');
    this.battle.classList.add('battle-area');
    this.player = new _components_players_Character__WEBPACK_IMPORTED_MODULE_4__["default"]('player-hp', this.name);
    this.playerBlock = document.querySelector('.player');
    this.monster = new _components_players_Character__WEBPACK_IMPORTED_MODULE_4__["default"]('monster-hp', Object(_components_players_enemy_name_rendering_index__WEBPACK_IMPORTED_MODULE_1__["default"])());
    this.monsterBlock = document.querySelector('.monster');
    this.spells = Object(_components_buttons_buttons_group_creating_buttons__WEBPACK_IMPORTED_MODULE_2__["default"])(['attack', 'healing'], 'spell-btn');
    this.spells.classList.add('spell-select');
    this.attack = this.attack.bind(this);
    this.healing = this.healing.bind(this);
    this.wins = 0;
    this.correctSound = new Audio(_components_soundeffects_correct_mp3__WEBPACK_IMPORTED_MODULE_6___default.a);
    this.failSong = new Audio(_components_soundeffects_fail_mp3__WEBPACK_IMPORTED_MODULE_7___default.a);
    this.playerAttackSong = new Audio(_components_soundeffects_player_attack_song_mp3__WEBPACK_IMPORTED_MODULE_11___default.a);
    this.playerDamageSong = new Audio(_components_soundeffects_player_damage_song_mp3__WEBPACK_IMPORTED_MODULE_12___default.a);
    this.monsterAttackSong = new Audio(_components_soundeffects_monster_attack_song_mp3__WEBPACK_IMPORTED_MODULE_9___default.a);
    this.monsterDamageSong = new Audio(_components_soundeffects_monster_damage_song_mp3__WEBPACK_IMPORTED_MODULE_10___default.a);
    this.healingSong = new Audio(_components_soundeffects_healing_mp3__WEBPACK_IMPORTED_MODULE_8___default.a);
  }

  _createClass(Game, [{
    key: "taskModalAttack",
    value: function taskModalAttack() {
      this.taskModal = new _components_modals_task_task_modal__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this.taskModal.render();
      this.taskModal.btn.addEventListener('click', this.attack);
      document.addEventListener('keydown', this.attack);
    }
  }, {
    key: "taskModalHealing",
    value: function taskModalHealing() {
      this.taskModal = new _components_modals_task_task_modal__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this.taskModal.render();
      this.taskModal.btn.addEventListener('click', this.healing);
      document.addEventListener('keydown', this.healing);
    }
  }, {
    key: "removeTaskModalAttack",
    value: function removeTaskModalAttack() {
      this.taskModal.btn.removeEventListener('click', this.attack);
      document.removeEventListener('keydown', this.attack);
      this.taskModal = this.taskModal.remove();
    }
  }, {
    key: "removeTaskModalHealing",
    value: function removeTaskModalHealing() {
      this.taskModal.btn.removeEventListener('click', this.healing);
      document.removeEventListener('keydown', this.healing);
      this.taskModal = this.taskModal.remove();
    }
  }, {
    key: "attack",
    value: function attack(e) {
      var _this = this;

      if (e.type == 'keydown' && e.key !== 'Enter') return;
      Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(0, this.taskModal.isCorrect).then(function () {
        _this.correctSound.play();

        _this.taskModal.correctColor();

        Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000).then(function () {
          _this.removeTaskModalAttack();

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          document.querySelector('.player').classList.add('player-attack');

          _this.playerAttackSong.play();

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          _this.monster.scale.damage();

          _this.monsterDamageSong.play();

          document.querySelector('.player').classList.remove('player-attack');
          document.querySelector('.monster').classList.add('monster-damage');

          if (_this.monster.scale.health == 0) {
            _this.wins += 1;
            Object(_components_backgrounds_index__WEBPACK_IMPORTED_MODULE_0__["default"])();

            _this.recreateMonster();
          }

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          document.querySelector('.monster').classList.remove('monster-damage');
        });
      }).catch(function () {
        _this.failSong.play();

        _this.taskModal.failColor();

        Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000).then(function () {
          _this.removeTaskModalAttack();

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          document.querySelector('.monster').classList.add('monster-attack');

          _this.monsterAttackSong.play();

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          _this.player.scale.damage();

          _this.playerDamageSong.play();

          document.querySelector('.player').classList.add('player-damage');
          document.querySelector('.monster').classList.remove('monster-attack');

          if (_this.player.scale.health == 0) {
            new _components_modals_gameover__WEBPACK_IMPORTED_MODULE_5__["default"](_this.wins).render();
          }

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          document.querySelector('.player').classList.remove('player-damage');
        });
      });
    }
  }, {
    key: "healing",
    value: function healing(e) {
      var _this2 = this;

      if (e.type == 'keydown' && e.key !== 'Enter') return;
      Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(0, this.taskModal.isCorrect).then(function () {
        _this2.correctSound.play();

        _this2.taskModal.correctColor();

        Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000).then(function () {
          _this2.removeTaskModalHealing();

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          document.querySelector('.player').classList.add('player-healing');

          _this2.player.scale.healing();

          _this2.healingSong.play();

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          document.querySelector('.player').classList.remove('player-healing');
        });
      }).catch(function () {
        _this2.failSong.play();

        _this2.taskModal.failColor();

        Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000).then(function () {
          _this2.removeTaskModalHealing();

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          debugger;

          if (_this2.monster.scale.health == 100) {
            document.querySelector('.monster').classList.remove('monster-attack');
            document.querySelector('.player').classList.add('player-damage');

            _this2.player.scale.damage();

            _this2.monsterAttackSong.play();

            if (_this2.player.scale.health == 0) {
              new _components_modals_gameover__WEBPACK_IMPORTED_MODULE_5__["default"](_this2.wins).render();
            }
          } else {
            document.querySelector('.monster').classList.add('monster-healing');

            _this2.monster.scale.healing();

            _this2.healingSong.play();
          }

          return Object(_components_utils_index__WEBPACK_IMPORTED_MODULE_13__["default"])(1000);
        }).then(function () {
          document.querySelector('.player').classList.remove('player-damage');
          document.querySelector('.monster').classList.remove('monster-attack');
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      document.body.appendChild(this.wrapper);
      Object(_components_backgrounds_index__WEBPACK_IMPORTED_MODULE_0__["default"])();
      this.names.appendChild(this.player.name);
      this.names.appendChild(this.monster.name);
      this.healthScales.appendChild(this.player.health);
      this.healthScales.appendChild(this.monster.health);
      this.battle.appendChild(this.player.renderPlayer());
      this.battle.appendChild(this.monster.renderMonster());
      this.data.appendChild(this.names);
      this.data.appendChild(this.healthScales);
      this.wrapper.appendChild(this.data);
      this.wrapper.appendChild(this.spells);
      this.wrapper.appendChild(this.battle);
      document.querySelector('.spell-btn').addEventListener('click', this.taskModalAttack.bind(this));
      document.querySelector('.spell-btn:nth-child(2)').addEventListener('click', this.taskModalHealing.bind(this));
      document.querySelector('.spell-btn').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          console.log('ddddddd');

          _this3.taskModalAttack();
        }

        e.stopPropagation();
      });
      document.querySelector('.spell-btn:nth-child(2)').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          _this3.taskModalHealing();
        }

        e.stopPropagation();
      });
    }
  }, {
    key: "recreateMonster",
    value: function recreateMonster() {
      this.monster.name.remove();
      this.monster.health.remove();
      this.monster.monster.remove();
      this.monster = new _components_players_Character__WEBPACK_IMPORTED_MODULE_4__["default"]('monster-hp', Object(_components_players_enemy_name_rendering_index__WEBPACK_IMPORTED_MODULE_1__["default"])());
      this.names.appendChild(this.monster.name);
      this.healthScales.appendChild(this.monster.health);
      this.battle.appendChild(this.monster.renderMonster());
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/screens/playing/info.js":
/*!*************************************!*\
  !*** ./src/screens/playing/info.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return playerInfo; });
/* harmony import */ var _components_buttons_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/buttons/Button/Button */ "./src/components/buttons/Button/Button.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/screens/playing/Game.js");


function playerInfo() {
  //Remove this lines before production
  // new Game('Kisa').render();
  //return;
  var wrapper = document.createElement('section');
  wrapper.classList.add('modal-info');
  var head = document.createElement('h1');
  head.textContent = 'Are you ready to go on a mystical trip?';
  var name = document.createElement('h3');
  name.textContent = 'Please enter your name:';
  var form = document.createElement('input');
  form.classList.add('player-name');
  form.setAttribute('type', 'textarea');
  form.setAttribute('tabindex', '1');
  var nameBtn = 'Start Game';
  var nameSelector = 'start-button';
  var startBtn = new _components_buttons_Button_Button__WEBPACK_IMPORTED_MODULE_0__["default"](nameBtn, nameSelector);
  var element = startBtn.createButton();
  wrapper.appendChild(head);
  wrapper.appendChild(name);
  wrapper.appendChild(form);
  wrapper.appendChild(element);

  function startGame() {
    if (form.value) {
      wrapper.classList.add('hidden');
      new _Game__WEBPACK_IMPORTED_MODULE_1__["default"](form.value).render();
    } else {
      form.focus();
    }
  }

  element.addEventListener('click', startGame);
  wrapper.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      element.classList.add('active');
    }
  });
  wrapper.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      element.classList.remove('active');
      startGame();
    }
  });
  document.body.appendChild(wrapper);
  form.focus();
}

/***/ }),

/***/ "./src/screens/playing/style.css":
/*!***************************************!*\
  !*** ./src/screens/playing/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/screens/playing/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=game.bundle.js.map