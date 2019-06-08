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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/shards/javascripts/app.js":
/*!**********************************************!*\
  !*** ./app/assets/shards/javascripts/app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).on('turbolinks:load', function () {
  // Hide the loader and show the elements.
  setTimeout(function () {
    $('.loader').addClass('hidden').delay(200).remove();
    $('.slide-in').each(function () {
      $(this).addClass('visible');
    });
  }, 1900); // Enable popovers everywhere.

  $('[data-toggle="popover"]').popover(); // Enable tooltips everywhere.

  $('[data-toggle="tooltip"]').tooltip(); // Disable example anchors scroll to top action.

  $('.example a').click(function (event) {
    event.target.getAttribute('href') === '#' && event.preventDefault();
  }); // Hook the "Learn More" button event to scroll to content.

  $('#scroll-to-content').click(function (ev) {
    ev.preventDefault();

    if (typeof ev.target.dataset.scrollTo === 'undefined') {
      return;
    }

    $('html, body').animate({
      scrollTop: $(ev.target.dataset.scrollTo).offset().top - 100
    }, 1000);
  }); //
  // Setup examples.
  //
  // Slider example 1.

  $('#slider-example-1').customSlider({
    start: [20, 80],
    range: {
      min: 0,
      max: 100
    },
    connect: true
  }); // Slider example 2.

  $('#slider-example-2').customSlider({
    start: [20, 80],
    range: {
      min: 0,
      max: 100
    },
    connect: true,
    tooltips: true
  }); // Slider example 3.

  $('#slider-example-3').customSlider({
    start: [20, 80],
    range: {
      min: 0,
      max: 100
    },
    connect: true,
    tooltips: true,
    pips: {
      mode: 'positions',
      values: [0, 25, 50, 75, 100],
      density: 5
    }
  }); // Datepicker example 1.

  $('#datepicker-example-1').datepicker({}); // Datepicker example 2.

  $('#datepicker-example-2').datepicker({});
});

/***/ }),

/***/ 6:
/*!****************************************************!*\
  !*** multi ./app/assets/shards/javascripts/app.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/weston/html/ruby/locomotive_cms/wagon_kitchen_sink/app/assets/shards/javascripts/app.js */"./app/assets/shards/javascripts/app.js");


/***/ })

/******/ });