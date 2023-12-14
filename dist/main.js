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

eval("const {\n  default: Example\n} = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new Example(main);\n  console.log(\"Hello world!\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtFQUFFQSxPQUFPLEVBQUVDO0FBQVEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG1EQUFtQixDQUFDO0FBRXpEQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUMsSUFBSUwsT0FBTyxDQUFDSSxJQUFJLENBQUM7RUFDakJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUMvQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWFzb25zX2JlYXRpbmdzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkZWZhdWx0OiBFeGFtcGxlIH0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL2V4YW1wbGVcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG5ldyBFeGFtcGxlKG1haW4pO1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGQhXCIpO1xufSkiXSwibmFtZXMiOlsiZGVmYXVsdCIsIkV4YW1wbGUiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>it's Alive!!!!</h1>\";\n    debugger;\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHlCQUF5QjtJQUM5QztJQUNBLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRTlDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUM7RUFDeEQ7RUFFQUEsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDRixHQUFHLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87RUFDNUM7QUFDSjtBQUVBLCtEQUFlUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vhc29uc19iZWF0aW5ncy8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGUpIHtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPml0J3MgQWxpdmUhISEhPC9oMT5cIjtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcblxuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nexpected \";\".\n  ╷\n1 │ @import \"./styles/example.scss\"\n  │                                ^\n  ╵\n  src/index.scss 1:32  root stylesheet\n    at tryRunOrWebpackError (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5067:12)\n    at __webpack_require__ (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5024:18)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5095:20\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3485:9)\n    at done (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/Hook.js:18:14)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5002:43\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3463:5)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4967:16\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3463:5)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4935:15\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3485:9)\n    at done (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3527:9)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4882:8\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:3361:32\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Cache.js:107:20)\n    at ItemCacheFacade.store (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:3361:11\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Cache.js:75:18)\n    at ItemCacheFacade.get (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:3331:9)\n    at codeGen (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4870:11)\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3463:5)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4900:14\n    at processQueue (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nexpected \";\".\n  ╷\n1 │ @import \"./styles/example.scss\"\n  │                                ^\n  ╵\n  src/index.scss 1:32  root stylesheet\n    at Object.<anonymous> (/home/peter/aa_projects/Seasons_beatings/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/home/peter/aa_projects/Seasons_beatings/node_modules/sass-loader/dist/cjs.js!/home/peter/aa_projects/Seasons_beatings/src/index.scss:1:7)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\n    at Hook.eval [as call] (eval at create (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/Hook.js:14:14)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5069:39\n    at tryRunOrWebpackError (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5067:12)\n    at __webpack_require__ (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5024:18)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5095:20\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3485:9)\n    at done (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/Hook.js:18:14)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:5002:43\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3463:5)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4967:16\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3463:5)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4935:15\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3485:9)\n    at done (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3527:9)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4882:8\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:3361:32\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Cache.js:107:20)\n    at ItemCacheFacade.store (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:3361:11\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (/home/peter/aa_projects/Seasons_beatings/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Cache.js:75:18)\n    at ItemCacheFacade.get (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:3331:9)\n    at codeGen (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4870:11)\n    at symbolIterator (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/peter/aa_projects/Seasons_beatings/node_modules/neo-async/async.js:3463:5)\n    at /home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/Compilation.js:4900:14\n    at processQueue (/home/peter/aa_projects/Seasons_beatings/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /home/peter/aa_projects/Seasons_beatings/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/home/peter/aa_projects/Seasons_beatings/node_modules/sass-loader/dist/cjs.js!/home/peter/aa_projects/Seasons_beatings/src/index.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\";\\\".\\n  ╷\\n1 │ @import \\\"./styles/example.scss\\\"\\n  │                                ^\\n  ╵\\n  src/index.scss 1:32  root stylesheet\");");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;