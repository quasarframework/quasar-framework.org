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

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(4);\n\nmodule.exports = {\n  template: html,\n  data: {\n    styles: [\n      '',\n      'inner-delimiter',\n      'bordered',\n      'striped',\n      'highlight',\n      'centered',\n      'compact'\n    ]\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaHRtbC10YWJsZXMvc2NyaXB0Lmh0bWwtdGFibGVzLmpzPzc5MmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuaHRtbC10YWJsZXMuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIGRhdGE6IHtcbiAgICBzdHlsZXM6IFtcbiAgICAgICcnLFxuICAgICAgJ2lubmVyLWRlbGltaXRlcicsXG4gICAgICAnYm9yZGVyZWQnLFxuICAgICAgJ3N0cmlwZWQnLFxuICAgICAgJ2hpZ2hsaWdodCcsXG4gICAgICAnY2VudGVyZWQnLFxuICAgICAgJ2NvbXBhY3QnXG4gICAgXVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9odG1sLXRhYmxlcy9zY3JpcHQuaHRtbC10YWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"screen-bar shadow-1 fixed-top\\\">Quasar HTML Tables</div>\\n\\n<div v-for=\\\"style in styles\\\" style=\\\"margin-bottom: 30px; max-width: 400px\\\">\\n  <h5>{{style ? 'Class \\\"' + style + '\\\"' : 'Default'}}</h5>\\n  <table :class=\\\"style\\\">\\n    <thead>\\n      <tr>\\n          <th>Name</th>\\n          <th>Price</th>\\n          <th>In Stock</th>\\n      </tr>\\n    </thead>\\n\\n    <tbody>\\n      <tr>\\n        <td>Item #1</td>\\n        <td>$10.11</td>\\n        <td>101</td>\\n      </tr>\\n      <tr>\\n        <td>Item #2</td>\\n        <td>$8.88</td>\\n        <td>34</td>\\n      </tr>\\n      <tr>\\n        <td>Item #3</td>\\n        <td>$0.15</td>\\n        <td>1670</td>\\n      </tr>\\n    </tbody>\\n  </table>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaHRtbC10YWJsZXMvdmlldy5odG1sLXRhYmxlcy5odG1sP2JjMTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0pBQXNKLDhCQUE4QiwrQ0FBK0MiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzY3JlZW4tYmFyIHNoYWRvdy0xIGZpeGVkLXRvcFxcXCI+UXVhc2FyIEhUTUwgVGFibGVzPC9kaXY+XFxuXFxuPGRpdiB2LWZvcj1cXFwic3R5bGUgaW4gc3R5bGVzXFxcIiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbTogMzBweDsgbWF4LXdpZHRoOiA0MDBweFxcXCI+XFxuICA8aDU+e3tzdHlsZSA/ICdDbGFzcyBcXFwiJyArIHN0eWxlICsgJ1xcXCInIDogJ0RlZmF1bHQnfX08L2g1PlxcbiAgPHRhYmxlIDpjbGFzcz1cXFwic3R5bGVcXFwiPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgPHRyPlxcbiAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxuICAgICAgICAgIDx0aD5QcmljZTwvdGg+XFxuICAgICAgICAgIDx0aD5JbiBTdG9jazwvdGg+XFxuICAgICAgPC90cj5cXG4gICAgPC90aGVhZD5cXG5cXG4gICAgPHRib2R5PlxcbiAgICAgIDx0cj5cXG4gICAgICAgIDx0ZD5JdGVtICMxPC90ZD5cXG4gICAgICAgIDx0ZD4kMTAuMTE8L3RkPlxcbiAgICAgICAgPHRkPjEwMTwvdGQ+XFxuICAgICAgPC90cj5cXG4gICAgICA8dHI+XFxuICAgICAgICA8dGQ+SXRlbSAjMjwvdGQ+XFxuICAgICAgICA8dGQ+JDguODg8L3RkPlxcbiAgICAgICAgPHRkPjM0PC90ZD5cXG4gICAgICA8L3RyPlxcbiAgICAgIDx0cj5cXG4gICAgICAgIDx0ZD5JdGVtICMzPC90ZD5cXG4gICAgICAgIDx0ZD4kMC4xNTwvdGQ+XFxuICAgICAgICA8dGQ+MTY3MDwvdGQ+XFxuICAgICAgPC90cj5cXG4gICAgPC90Ym9keT5cXG4gIDwvdGFibGU+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2h0bWwtdGFibGVzL3ZpZXcuaHRtbC10YWJsZXMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);