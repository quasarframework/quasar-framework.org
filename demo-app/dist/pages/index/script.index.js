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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(8);\n\nfunction getPages() {\n  var pages = $.extend(true, {}, quasar.data.manifest.pages);\n\n  delete pages.index;\n  return pages;\n}\n\nmodule.exports = {\n  template: html,\n  data: {\n    pages: getPages()\n  },\n  methods: {\n    navigateTo: function(pageName) {\n      quasar.navigate.to.route('#/' + pageName);\n    }\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgvc2NyaXB0LmluZGV4LmpzP2QzZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3LmluZGV4Lmh0bWwnKTtcblxuZnVuY3Rpb24gZ2V0UGFnZXMoKSB7XG4gIHZhciBwYWdlcyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBxdWFzYXIuZGF0YS5tYW5pZmVzdC5wYWdlcyk7XG5cbiAgZGVsZXRlIHBhZ2VzLmluZGV4O1xuICByZXR1cm4gcGFnZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIHBhZ2VzOiBnZXRQYWdlcygpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBuYXZpZ2F0ZVRvOiBmdW5jdGlvbihwYWdlTmFtZSkge1xuICAgICAgcXVhc2FyLm5hdmlnYXRlLnRvLnJvdXRlKCcjLycgKyBwYWdlTmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9pbmRleC9zY3JpcHQuaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 8:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"screen-bar shadow-1 fixed-top\\\">Quasar Framework</div>\\n\\n<div class=\\\"list bordered inner-delimiter\\\">\\n  <div class=\\\"item\\\" v-for=\\\"page in pages\\\">\\n    <i>{{page.icon}}</i>\\n    <div class=\\\"item-content cursor-pointer\\\" @click=\\\"navigateTo(page.name)\\\">\\n      <div class=\\\"item-label\\\">{{page.label}}</div>\\n      <i>chevron_right</i>\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgvdmlldy5pbmRleC5odG1sPzA4YTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaU1BQWlNLFdBQVcsMEhBQTBILFlBQVkiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzY3JlZW4tYmFyIHNoYWRvdy0xIGZpeGVkLXRvcFxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImxpc3QgYm9yZGVyZWQgaW5uZXItZGVsaW1pdGVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIHYtZm9yPVxcXCJwYWdlIGluIHBhZ2VzXFxcIj5cXG4gICAgPGk+e3twYWdlLmljb259fTwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50IGN1cnNvci1wb2ludGVyXFxcIiBAY2xpY2s9XFxcIm5hdmlnYXRlVG8ocGFnZS5uYW1lKVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+e3twYWdlLmxhYmVsfX08L2Rpdj5cXG4gICAgICA8aT5jaGV2cm9uX3JpZ2h0PC9pPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9pbmRleC92aWV3LmluZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });