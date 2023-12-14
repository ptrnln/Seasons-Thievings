/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const {\n  default: Example\n} = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\nconst {\n  default: Game\n} = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  const canvas = document.getElementById(\"game-canvas\");\n  const fullscreen = false;\n  document.onfullscreenchange = e => {\n    fullscreen ? fullscreen = false : fullscreen = true;\n  };\n  visualViewport.addEventListener(\"resize\", this.onresize);\n  canvas.width = Math.floor(.8 * visualViewport.width);\n  this.game = new Game(canvas);\n  onresize = e => {\n    if (fullscreen) {\n      canvas.height = visualViewport.height;\n      canvas.width = Math.floor(1.333 * canvas.height);\n    } else {\n      canvas.width = Math.floor(.8 * visualViewport.width);\n      canvas.height = Math.floor(.75 * canvas.width);\n    }\n    this.game.redraw();\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtFQUFFQSxPQUFPLEVBQUVDO0FBQVEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG1EQUFtQixDQUFDO0FBQ3pELE1BQU07RUFBRUYsT0FBTyxFQUFFRztBQUFLLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyw2Q0FBZ0IsQ0FBQztBQUVuREUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLE1BQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JELE1BQU1FLFVBQVUsR0FBRyxLQUFLO0VBRXhCTCxRQUFRLENBQUNNLGtCQUFrQixHQUFJQyxDQUFDLElBQUs7SUFDakNGLFVBQVUsR0FBR0EsVUFBVSxHQUFHLEtBQUssR0FBR0EsVUFBVSxHQUFHLElBQUk7RUFDdkQsQ0FBQztFQUVERyxjQUFjLENBQUNQLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNRLFFBQVEsQ0FBQztFQUV4REwsTUFBTSxDQUFDTSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsR0FBR0osY0FBYyxDQUFDRSxLQUFLLENBQUM7RUFFcEQsU0FBUyxHQUFHLElBQUlYLElBQUksQ0FBQ0ssTUFBTSxDQUFDO0VBRTVCSyxRQUFRLEdBQUlGLENBQUMsSUFBSztJQUNkLElBQUlGLFVBQVUsRUFBRTtNQUNaRCxNQUFNLENBQUNVLE1BQU0sR0FBR04sY0FBYyxDQUFDTSxNQUFNO01BQ3JDVixNQUFNLENBQUNNLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsS0FBSyxHQUFHUixNQUFNLENBQUNVLE1BQU0sQ0FBQztJQUNwRCxDQUFDLE1BQU07TUFDSFYsTUFBTSxDQUFDTSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsR0FBR0osY0FBYyxDQUFDRSxLQUFLLENBQUM7TUFDcEROLE1BQU0sQ0FBQ1UsTUFBTSxHQUFHSCxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUdSLE1BQU0sQ0FBQ00sS0FBSyxDQUFDO0lBQ2xEO0lBQ0EsSUFBSSxDQUFDRyxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDO0VBQ3RCLENBQUM7QUFHTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWFzb25zX2JlYXRpbmdzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkZWZhdWx0OiBFeGFtcGxlIH0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL2V4YW1wbGVcIik7XG5jb25zdCB7IGRlZmF1bHQ6IEdhbWUgfSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZVwiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBmdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgXG4gICAgZG9jdW1lbnQub25mdWxsc2NyZWVuY2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgZnVsbHNjcmVlbiA/IGZ1bGxzY3JlZW4gPSBmYWxzZSA6IGZ1bGxzY3JlZW4gPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB2aXN1YWxWaWV3cG9ydC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25yZXNpemUpO1xuXG4gICAgY2FudmFzLndpZHRoID0gTWF0aC5mbG9vciguOCAqIHZpc3VhbFZpZXdwb3J0LndpZHRoKTtcblxuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG5cbiAgICBvbnJlc2l6ZSA9IChlKSA9PiB7XG4gICAgICAgIGlmIChmdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcigxLjMzMyAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gTWF0aC5mbG9vciguOCAqIHZpc3VhbFZpZXdwb3J0LndpZHRoKTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKC43NSAqIGNhbnZhcy53aWR0aClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWUucmVkcmF3KCk7XG4gICAgfVxuICAgIFxuXG59KSJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiRXhhbXBsZSIsInJlcXVpcmUiLCJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiZnVsbHNjcmVlbiIsIm9uZnVsbHNjcmVlbmNoYW5nZSIsImUiLCJ2aXN1YWxWaWV3cG9ydCIsIm9ucmVzaXplIiwid2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJnYW1lIiwiaGVpZ2h0IiwicmVkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/entity.js":
/*!*******************************!*\
  !*** ./src/scripts/entity.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Entity {\n  constructor(id, name) {\n    let pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];\n    this.id = id;\n    this.name = name;\n    this.pos = pos;\n    this.redraw = this.redraw.bind(this);\n    this.width = .1;\n    this.height = .1;\n  }\n  redraw(ctx) {\n    // let that = this;\n    ctx.fillStyle = 'red';\n    ctx.fillRect(this.pos[0],\n    // x coordinate\n    this.pos[1],\n    // y coordinate\n    Math.floor(this.width * ctx.canvas.width),\n    // width (relative to canvas size)\n    Math.floor(this.height * ctx.canvas.width) // height\n    );\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbnRpdHkuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxFQUFFLEVBQUVDLElBQUksRUFBZ0I7SUFBQSxJQUFkQyxHQUFHLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUNILEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDSSxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEMsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDcEI7RUFFQUgsTUFBTUEsQ0FBQ0ksR0FBRyxFQUFFO0lBQ1I7SUFDQUEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsS0FBSztJQUNyQkQsR0FBRyxDQUFDRSxRQUFRLENBQ1IsSUFBSSxDQUFDVixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQUU7SUFDYixJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFBRTtJQUNaVyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNOLEtBQUssR0FBR0UsR0FBRyxDQUFDSyxNQUFNLENBQUNQLEtBQUssQ0FBQztJQUFHO0lBQzVDSyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNMLE1BQU0sR0FBR0MsR0FBRyxDQUFDSyxNQUFNLENBQUNQLEtBQUssQ0FBQyxDQUFFO0lBQ2pELENBQUM7RUFDTDtBQUNKO0FBRUEsK0RBQWVWLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWFzb25zX2JlYXRpbmdzLy4vc3JjL3NjcmlwdHMvZW50aXR5LmpzP2I1OTQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgcG9zID0gWzAsIDBdKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICAgIHRoaXMucmVkcmF3ID0gdGhpcy5yZWRyYXcuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLndpZHRoID0gLjE7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gLjE7XG4gICAgfVxuXG4gICAgcmVkcmF3KGN0eCkge1xuICAgICAgICAvLyBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJ1xuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSwgLy8geCBjb29yZGluYXRlXG4gICAgICAgICAgICB0aGlzLnBvc1sxXSwgLy8geSBjb29yZGluYXRlXG4gICAgICAgICAgICAoTWF0aC5mbG9vcih0aGlzLndpZHRoICogY3R4LmNhbnZhcy53aWR0aCkpLCAvLyB3aWR0aCAocmVsYXRpdmUgdG8gY2FudmFzIHNpemUpXG4gICAgICAgICAgICAoTWF0aC5mbG9vcih0aGlzLmhlaWdodCAqIGN0eC5jYW52YXMud2lkdGgpKSAvLyBoZWlnaHRcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5OyJdLCJuYW1lcyI6WyJFbnRpdHkiLCJjb25zdHJ1Y3RvciIsImlkIiwibmFtZSIsInBvcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJlZHJhdyIsImJpbmQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiTWF0aCIsImZsb29yIiwiY2FudmFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/entity.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>it's Alive!!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHlCQUF5QjtJQUM5QyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUU5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBQ3hEO0VBRUFBLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0YsR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxPQUFPO0VBQzVDO0FBQ0o7QUFFQSwrREFBZVIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlYXNvbnNfYmVhdGluZ3MvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT5pdCdzIEFsaXZlISEhITwvaDE+XCI7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcblxuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/scripts/entity.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\n\nclass Game {\n  constructor(ele) {\n    this.ele = ele;\n    this.ctx = this.ele.getContext(\"2d\");\n    this.redraw = this.redraw.bind(this);\n    this.spawnEntity = this.spawnEntity.bind(this);\n    this.entities = [];\n    this.ctx.fillStyle = 'black';\n    this.ctx.fillRect(0, 0, this.ele.width, this.ele.height);\n    this.entities.push(new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.entities.length, \"player\"));\n  }\n  redraw() {\n    this.ctx.fillRect(0, 0, this.ele.width, this.ele.height);\n    this.entities.forEach(entity => {\n      entity.redraw(this.ctx);\n    });\n  }\n  spawnEntity(name) {\n    this.entities.push(new _entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.entities.length, name));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7OztBQUE4QjtBQUNBO0FBRTlCLE1BQU1FLElBQUksQ0FBQztFQUNQQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFDYixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3BDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BDLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ0UsUUFBUSxHQUFHLEVBQUU7SUFFbEIsSUFBSSxDQUFDTCxHQUFHLENBQUNNLFNBQVMsR0FBRyxPQUFPO0lBQzVCLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsS0FBSyxFQUFFLElBQUksQ0FBQ1QsR0FBRyxDQUFDVSxNQUFNLENBQUM7SUFDeEQsSUFBSSxDQUFDSixRQUFRLENBQUNLLElBQUksQ0FBQyxJQUFJZCwrQ0FBTSxDQUFDLElBQUksQ0FBQ1MsUUFBUSxDQUFDTSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7RUFDbEU7RUFFQVQsTUFBTUEsQ0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDRixHQUFHLENBQUNPLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ1IsR0FBRyxDQUFDUyxLQUFLLEVBQUUsSUFBSSxDQUFDVCxHQUFHLENBQUNVLE1BQU0sQ0FBQztJQUN4RCxJQUFJLENBQUNKLFFBQVEsQ0FBQ08sT0FBTyxDQUFFQyxNQUFNLElBQUs7TUFDOUJBLE1BQU0sQ0FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0YsR0FBRyxDQUFDO0lBQzNCLENBQUMsQ0FBQztFQUNOO0VBRUFJLFdBQVdBLENBQUNVLElBQUksRUFBRTtJQUNkLElBQUksQ0FBQ1QsUUFBUSxDQUFDSyxJQUFJLENBQUMsSUFBSWYsK0NBQU0sQ0FBQyxJQUFJLENBQUNVLFFBQVEsQ0FBQ00sTUFBTSxFQUFFRyxJQUFJLENBQUMsQ0FBQztFQUM5RDtBQUNKO0FBRUEsK0RBQWVqQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vhc29uc19iZWF0aW5ncy8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuZWxlLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5yZWRyYXcgPSB0aGlzLnJlZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNwYXduRW50aXR5ID0gdGhpcy5zcGF3bkVudGl0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gW107XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5lbGUud2lkdGgsIHRoaXMuZWxlLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChuZXcgUGxheWVyKHRoaXMuZW50aXRpZXMubGVuZ3RoLCBcInBsYXllclwiKSk7XG4gICAgfVxuXG4gICAgcmVkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmVsZS53aWR0aCwgdGhpcy5lbGUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgIGVudGl0eS5yZWRyYXcodGhpcy5jdHgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3Bhd25FbnRpdHkobmFtZSkge1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2gobmV3IEVudGl0eSh0aGlzLmVudGl0aWVzLmxlbmd0aCwgbmFtZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiRW50aXR5IiwiUGxheWVyIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJlZHJhdyIsImJpbmQiLCJzcGF3bkVudGl0eSIsImVudGl0aWVzIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInB1c2giLCJsZW5ndGgiLCJmb3JFYWNoIiwiZW50aXR5IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/scripts/entity.js\");\n\nclass Player extends _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(id, name) {\n    super(id, name);\n    this.redraw = this.redraw.bind(this);\n  }\n  move(newPos) {\n    this.pos = newPos;\n  }\n  render() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUM7QUFFakMsTUFBTUMsTUFBTSxTQUFTRCxrREFBTSxDQUFDO0VBQ3hCRSxXQUFXQSxDQUFDQyxFQUFFLEVBQUVDLElBQUksRUFBRTtJQUNsQixLQUFLLENBQUNELEVBQUUsRUFBRUMsSUFBSSxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7RUFDeEM7RUFHQUMsSUFBSUEsQ0FBQ0MsTUFBTSxFQUFFO0lBQ1QsSUFBSSxDQUFDQyxHQUFHLEdBQUdELE1BQU07RUFDckI7RUFFQUUsTUFBTUEsQ0FBQSxFQUFHLENBRVQ7QUFDSjtBQUVBLCtEQUFlVCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vhc29uc19iZWF0aW5ncy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5LmpzXCI7XG5cbmNsYXNzIFBsYXllciBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUpIHtcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUpO1xuICAgICAgICB0aGlzLnJlZHJhdyA9IHRoaXMucmVkcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBtb3ZlKG5ld1Bvcykge1xuICAgICAgICB0aGlzLnBvcyA9IG5ld1BvcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwibmFtZXMiOlsiRW50aXR5IiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJpZCIsIm5hbWUiLCJyZWRyYXciLCJiaW5kIiwibW92ZSIsIm5ld1BvcyIsInBvcyIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWFzb25zX2JlYXRpbmdzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;