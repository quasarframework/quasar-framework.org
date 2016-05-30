module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(2);\n\nmodule.exports = {\n  template: html,\n  data: {\n    mainColors: ['primary', 'secondary', 'tertiary', 'neutral', 'positive', 'negative', 'info', 'warning', 'light', 'dark', 'faded'],\n    colors: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29sb3JzL3NjcmlwdC5jb2xvcnMuanM/OWIxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuY29sb3JzLmh0bWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICBkYXRhOiB7XG4gICAgbWFpbkNvbG9yczogWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXJ0aWFyeScsICduZXV0cmFsJywgJ3Bvc2l0aXZlJywgJ25lZ2F0aXZlJywgJ2luZm8nLCAnd2FybmluZycsICdsaWdodCcsICdkYXJrJywgJ2ZhZGVkJ10sXG4gICAgY29sb3JzOiBbJ3JlZCcsICdwaW5rJywgJ3B1cnBsZScsICdkZWVwLXB1cnBsZScsICdpbmRpZ28nLCAnYmx1ZScsICdsaWdodC1ibHVlJywgJ2N5YW4nLCAndGVhbCcsICdncmVlbicsICdsaWdodC1ncmVlbicsICdsaW1lJywgJ3llbGxvdycsICdhbWJlcicsICdvcmFuZ2UnLCAnZGVlcC1vcmFuZ2UnLCAnYnJvd24nLCAnZ3JleScsICdibHVlLWdyZXknXVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9jb2xvcnMvc2NyaXB0LmNvbG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"screen-bar shadow-1 fixed-top\\\">Quasar Color Palette</div>\\n\\n<div class=\\\"text-center\\\">\\n  <h2>Main Colors</h2>\\n  <div class=\\\"main-color shadow-1 row inline items-center justify-center\\\" v-for=\\\"color in mainColors\\\" :class=\\\"'bg-' + color\\\">{{color}}</div>\\n\\n  <h2>Full Palette</h2>\\n  <div class=\\\"detail\\\" v-for=\\\"color in colors\\\">\\n    <h5 class=\\\"detailed-color shadow-1 column items-center justify-center text-white\\\" :class=\\\"'bg-' + color\\\">{{color}}</h5>\\n    <div class=\\\"detailed-color column items-center justify-center\\\" v-for=\\\"n in 14\\\" :class=\\\"'bg-' + color + '-' + (n+1)\\\">{{color}}-{{(n+1)}}</div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29sb3JzL3ZpZXcuY29sb3JzLmh0bWw/YzA3OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1UkFBdVIsT0FBTywwTUFBME0sT0FBTyx1SUFBdUksT0FBTyxHQUFHLE9BQU8iLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzY3JlZW4tYmFyIHNoYWRvdy0xIGZpeGVkLXRvcFxcXCI+UXVhc2FyIENvbG9yIFBhbGV0dGU8L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuICA8aDI+TWFpbiBDb2xvcnM8L2gyPlxcbiAgPGRpdiBjbGFzcz1cXFwibWFpbi1jb2xvciBzaGFkb3ctMSByb3cgaW5saW5lIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxcXCIgdi1mb3I9XFxcImNvbG9yIGluIG1haW5Db2xvcnNcXFwiIDpjbGFzcz1cXFwiJ2JnLScgKyBjb2xvclxcXCI+e3tjb2xvcn19PC9kaXY+XFxuXFxuICA8aDI+RnVsbCBQYWxldHRlPC9oMj5cXG4gIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCIgdi1mb3I9XFxcImNvbG9yIGluIGNvbG9yc1xcXCI+XFxuICAgIDxoNSBjbGFzcz1cXFwiZGV0YWlsZWQtY29sb3Igc2hhZG93LTEgY29sdW1uIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlXFxcIiA6Y2xhc3M9XFxcIidiZy0nICsgY29sb3JcXFwiPnt7Y29sb3J9fTwvaDU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbGVkLWNvbG9yIGNvbHVtbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcXFwiIHYtZm9yPVxcXCJuIGluIDE0XFxcIiA6Y2xhc3M9XFxcIidiZy0nICsgY29sb3IgKyAnLScgKyAobisxKVxcXCI+e3tjb2xvcn19LXt7KG4rMSl9fTwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2NvbG9ycy92aWV3LmNvbG9ycy5odG1sXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);