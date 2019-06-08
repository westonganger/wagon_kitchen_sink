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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/foodee/javascripts/app.js":
/*!**********************************************!*\
  !*** ./app/assets/foodee/javascripts/app.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_javascripts_sections_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/javascripts/sections/_manager */ "./app/assets/shared/javascripts/sections/_manager.js");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections */ "./app/assets/foodee/javascripts/sections/index.js");
// Tell Webpack to load the style
//import '../stylesheets/app.scss';
// Import the classes required to handle sections


$(document).on('turbolinks:load', function (event) {
  // Load all the sections
  var sectionsManager = new _shared_javascripts_sections_manager__WEBPACK_IMPORTED_MODULE_0__["default"](); // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE

  sectionsManager.registerSection('footer', _sections__WEBPACK_IMPORTED_MODULE_1__["Footer"]);
  sectionsManager.registerSection('reservation', _sections__WEBPACK_IMPORTED_MODULE_1__["Reservation"]);
  sectionsManager.registerSection('events', _sections__WEBPACK_IMPORTED_MODULE_1__["Event"]);
  sectionsManager.registerSection('menu', _sections__WEBPACK_IMPORTED_MODULE_1__["Menu"]);
  sectionsManager.registerSection('features', _sections__WEBPACK_IMPORTED_MODULE_1__["Feature"]);
  sectionsManager.registerSection('about', _sections__WEBPACK_IMPORTED_MODULE_1__["About"]);
  sectionsManager.registerSection('home', _sections__WEBPACK_IMPORTED_MODULE_1__["Home"]);
  sectionsManager.start();
  $('#date').datepicker();
  fullHeight();
  sliderMain();
  sliderSayings();
  offcanvasMenu();
  mainMenuSticky();
  parallax();
  burgerMenu();
  scrolledWindow();
  clickMenu();
  navigationSection();
  goToTop(); // Animations

  homeAnimate();
}); // iPad and iPod detection

var isiPad = function isiPad() {
  return navigator.platform.indexOf("iPad") != -1;
};

var isiPhone = function isiPhone() {
  return navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPod") != -1;
};

var fullHeight = function fullHeight() {
  if (!isiPad() && !isiPhone()) {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  }
};

var sliderMain = function sliderMain() {
  $('#fh5co-home .flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 5000
  });
  $('#fh5co-home .flexslider .slides > li').css('height', $(window).height());
  $(window).resize(function () {
    $('#fh5co-home .flexslider .slides > li').css('height', $(window).height());
  });
};

var sliderSayings = function sliderSayings() {
  $('#fh5co-sayings .flexslider').flexslider({
    animation: "slide",
    slideshowSpeed: 5000,
    directionNav: false,
    controlNav: true,
    smoothHeight: true,
    reverse: true
  });
};

var offcanvasMenu = function offcanvasMenu() {
  $('body').prepend('<div id="fh5co-offcanvas" />');
  $('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');
  $('.fh5co-main-nav .fh5co-menu-1 a, .fh5co-main-nav .fh5co-menu-2 a').each(function () {
    var $this = $(this);
    $('#fh5co-offcanvas').append($this.clone());
  }); // $('#fh5co-offcanvas').append
};

var mainMenuSticky = function mainMenuSticky() {
  var sticky = $('.js-sticky');
  sticky.css('height', sticky.height());
  $(window).resize(function () {
    sticky.css('height', sticky.height());
  });
  var $section = $('.fh5co-main-nav');
  $section.waypoint(function (direction) {
    if (direction === 'down') {
      $section.css({
        'position': 'fixed',
        'top': 0,
        'width': '100%',
        'z-index': 99999
      }).addClass('fh5co-shadow');
      ;
    }
  }, {
    offset: '0px'
  });
  $('.js-sticky').waypoint(function (direction) {
    if (direction === 'up') {
      $section.attr('style', '').removeClass('fh5co-shadow');
    }
  }, {
    offset: function offset() {
      return -$(this.element).height() + 69;
    }
  });
}; // Parallax


var parallax = function parallax() {
  $(window).stellar();
}; // Burger Menu


var burgerMenu = function burgerMenu() {
  $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
    var $this = $(this);
    $('body').toggleClass('fh5co-overflow offcanvas-visible');
    $this.toggleClass('active');
    event.preventDefault();
  });
};

var scrolledWindow = function scrolledWindow() {
  $(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    $('#fh5co-home .fh5co-text').css({
      'opacity': 1 - scrollPos / 300,
      'margin-top': -212 + scrollPos / 1
    });
    $('#fh5co-home .flexslider .fh5co-overlay').css({
      'opacity': .5 + scrollPos / 2000
    });

    if (scrollPos > 300) {
      $('#fh5co-home .fh5co-text').css('display', 'none');
    } else {
      $('#fh5co-home .fh5co-text').css('display', 'block');
    }
  });
  $(window).resize(function () {
    if ($('body').hasClass('offcanvas-visible')) {
      $('body').removeClass('offcanvas-visible');
      $('.js-fh5co-nav-toggle').removeClass('active');
    }
  });
};

var goToTop = function goToTop() {
  $('.js-gotop').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('html').offset().top
    }, 500);
    return false;
  });
}; // Page Nav


var clickMenu = function clickMenu() {
  var topVal = $(window).width() < 769 ? 0 : 58;
  $(window).resize(function () {
    topVal = $(window).width() < 769 ? 0 : 58;
  });
  $('.fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])').click(function (event) {
    var section = $(this).data('nav-section');

    if ($('div[data-section="' + section + '"]').length) {
      $('html, body').animate({
        scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
      }, 500);
    }

    event.preventDefault(); // return false;
  });
}; // Reflect scrolling in navigation


var navActive = function navActive(section) {
  $('.fh5co-main-nav a[data-nav-section], #fh5co-offcanvas a[data-nav-section]').removeClass('active');
  $('.fh5co-main-nav, #fh5co-offcanvas').find('a[data-nav-section="' + section + '"]').addClass('active');
};

var navigationSection = function navigationSection() {
  var $section = $('div[data-section]');
  $section.waypoint(function (direction) {
    if (direction === 'down') {
      navActive($(this.element).data('section'));
    }
  }, {
    offset: '150px'
  });
  $section.waypoint(function (direction) {
    if (direction === 'up') {
      navActive($(this.element).data('section'));
    }
  }, {
    offset: function offset() {
      return -$(this.element).height() + 155;
    }
  });
}; // Animations


var homeAnimate = function homeAnimate() {
  if ($('#fh5co-home').length > 0) {
    $('#fh5co-home').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        setTimeout(function () {
          $('#fh5co-home .to-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');
          });
        }, 200);
        $(this.element).addClass('animated');
      }
    }, {
      offset: '80%'
    });
  }
};

/***/ }),

/***/ "./app/assets/foodee/javascripts/sections/about.js":
/*!*********************************************************!*\
  !*** ./app/assets/foodee/javascripts/sections/about.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/foodee/javascripts/sections/events.js":
/*!**********************************************************!*\
  !*** ./app/assets/foodee/javascripts/sections/events.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/foodee/javascripts/sections/features.js":
/*!************************************************************!*\
  !*** ./app/assets/foodee/javascripts/sections/features.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/foodee/javascripts/sections/footer.js":
/*!**********************************************************!*\
  !*** ./app/assets/foodee/javascripts/sections/footer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/foodee/javascripts/sections/home.js":
/*!********************************************************!*\
  !*** ./app/assets/foodee/javascripts/sections/home.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/foodee/javascripts/sections/index.js":
/*!*********************************************************!*\
  !*** ./app/assets/foodee/javascripts/sections/index.js ***!
  \*********************************************************/
/*! exports provided: Home, About, Feature, Menu, Event, Reservation, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./app/assets/foodee/javascripts/sections/home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./app/assets/foodee/javascripts/sections/about.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _about__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features */ "./app/assets/foodee/javascripts/sections/features.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return _features__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./app/assets/foodee/javascripts/sections/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _menu__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./app/assets/foodee/javascripts/sections/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _events__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation */ "./app/assets/foodee/javascripts/sections/reservation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reservation", function() { return _reservation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./app/assets/foodee/javascripts/sections/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_6__["default"]; });

// Import all the sections here
//
// Example:
// export { default as Hero } from './hero';
//








/***/ }),

/***/ "./app/assets/foodee/javascripts/sections/menu.js":
/*!********************************************************!*\
  !*** ./app/assets/foodee/javascripts/sections/menu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/foodee/javascripts/sections/reservation.js":
/*!***************************************************************!*\
  !*** ./app/assets/foodee/javascripts/sections/reservation.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/shared/javascripts/sections/_manager.js":
/*!************************************************************!*\
  !*** ./app/assets/shared/javascripts/sections/_manager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Manager =
/*#__PURE__*/
function () {
  function Manager() {
    _classCallCheck(this, Manager);

    this.sections = {};
  }

  _createClass(Manager, [{
    key: "registerSection",
    value: function registerSection(type, actions) {
      this.sections[type] = actions;
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.eachType(function (type, actions) {
        _this.queryAll(".locomotive-section[data-locomotive-section-type=\"".concat(type, "\"]")).forEach(function (section, index) {
          _this.runAction(actions, 'load', section);
        });
      });
      this.registerEvents();
      window._sectionsManager = this;
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this2 = this;

      var events = {
        section: ['load', 'unload', 'select', 'deselect', 'reorder'],
        block: ['select', 'deselect']
      };

      for (var namespace in events) {
        events[namespace].forEach(function (eventType) {
          var eventName = "locomotive::".concat(namespace, "::").concat(eventType);

          var actionName = _this2.eventTypeToActionName(namespace, eventType);

          document.addEventListener(eventName, function (event) {
            _this2.applyRuleToEvent(actionName, event);
          });
        });
      }
    }
  }, {
    key: "applyRuleToEvent",
    value: function applyRuleToEvent(actionName, event) {
      var _event$detail = event.detail,
          sectionId = _event$detail.sectionId,
          blockId = _event$detail.blockId;
      var section = document.getElementById("locomotive-section-".concat(sectionId));
      var type = section.getAttribute('data-locomotive-section-type');
      var block = this.queryOne("[data-locomotive-block=\"section-".concat(sectionId, "-block-").concat(blockId, "\"]"), section);
      this.runAction(this.sections[type], actionName, section, block);
    }
  }, {
    key: "eventTypeToActionName",
    value: function eventTypeToActionName(namespace, eventType) {
      if (namespace === 'section') return eventType;else return namespace + eventType.charAt(0).toUpperCase() + eventType.slice(1);
    }
  }, {
    key: "runAction",
    value: function runAction(actions, actionName, section, block) {
      var action = actions[actionName];
      if (action !== undefined) action(section, block);
    }
  }, {
    key: "eachType",
    value: function eachType(callback) {
      for (var type in this.sections) {
        var actions = this.sections[type];
        callback(type, actions);
      }
    }
  }, {
    key: "queryAll",
    value: function queryAll(selector, scope) {
      scope = scope ? scope : document;
      return scope.querySelectorAll(selector);
    }
  }, {
    key: "queryOne",
    value: function queryOne(selector, scope) {
      scope = scope ? scope : document;
      return scope.querySelector(selector);
    }
  }, {
    key: "testAction",
    value: function testAction(eventType, section, block) {
      var hasBlock = block !== undefined && block !== null;
      var namespace = hasBlock ? 'block' : 'section';
      var sectionId = section.getAttribute('id').replace('locomotive-section-', '');
      var blockId = hasBlock ? block.getAttribute('data-locomotive-block').replace("section-".concat(sectionId, "-block-"), '') : null;
      var detail = {
        detail: {
          sectionId: sectionId,
          blockId: blockId
        }
      };
      var eventName = "locomotive::".concat(namespace, "::").concat(eventType);
      document.dispatchEvent(new CustomEvent(eventName, detail));
    }
  }]);

  return Manager;
}();

/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ 3:
/*!****************************************************!*\
  !*** multi ./app/assets/foodee/javascripts/app.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/weston/html/ruby/locomotive_cms/wagon_kitchen_sink/app/assets/foodee/javascripts/app.js */"./app/assets/foodee/javascripts/app.js");


/***/ })

/******/ });