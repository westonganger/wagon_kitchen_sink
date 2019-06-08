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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/fresh/javascripts/app.js":
/*!*********************************************!*\
  !*** ./app/assets/fresh/javascripts/app.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_javascripts_sections_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/javascripts/sections/_manager */ "./app/assets/shared/javascripts/sections/_manager.js");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections */ "./app/assets/fresh/javascripts/sections/index.js");
//Preloader
$(window).on('load', function () {
  // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation

  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.

  $('body').delay(350).css({
    'overflow': 'visible'
  });
});
$(document).on('turbolinks:load', function () {
  //Mobile menu toggle
  if ($('.navbar-burger').length) {
    $('.navbar-burger').on("click", function () {
      var menu_id = $(this).attr('data-target');
      $(this).toggleClass('is-active');
      $("#" + menu_id).toggleClass('is-active');
      $('.navbar.is-light').toggleClass('is-dark-mobile');
    });
  } //Animate left hamburger icon and open sidebar


  $('.menu-icon-trigger').click(function (e) {
    e.preventDefault();
    $('.menu-icon-wrapper').toggleClass('open');
    $('.sidebar').toggleClass('is-active');
  }); //Close sidebar

  $('.sidebar-close').click(function () {
    $('.sidebar').removeClass('is-active');
    $('.menu-icon-wrapper').removeClass('open');
  }); //Sidebar menu

  if ($('.sidebar').length) {
    $(".sidebar-menu > li.have-children a").on("click", function (i) {
      i.preventDefault();

      if (!$(this).parent().hasClass("active")) {
        $(".sidebar-menu li ul").slideUp();
        $(this).next().slideToggle();
        $(".sidebar-menu li").removeClass("active");
        $(this).parent().addClass("active");
      } else {
        $(this).next().slideToggle();
        $(".sidebar-menu li").removeClass("active");
      }
    });
  } //Navbar Clone


  if ($('#navbar-clone').length) {
    $(window).scroll(function () {
      // this will work when your window scrolled.
      var height = $(window).scrollTop(); //getting the scrolling height of window

      if (height > 50) {
        $("#navbar-clone").addClass('is-active');
      } else {
        $("#navbar-clone").removeClass('is-active');
      }
    });
  } //reveal elements on scroll so animations trigger the right way


  var $window = $(window),
      win_height_padded = $window.height() * 1.1; // isTouch = Modernizr.touch;

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop();
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function () {
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'), 10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
  } // Back to Top button behaviour


  var pxShow = 600;
  var scrollSpeed = 500;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= pxShow) {
      $("#backtotop").addClass('visible');
    } else {
      $("#backtotop").removeClass('visible');
    }
  });
  $('#backtotop a').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
    return false;
  }); //modals

  $('.modal-trigger').on('click', function () {
    var modalID = $(this).attr('data-modal');
    $('#' + modalID).addClass('is-active');
  });
  $('.modal-close, .close-modal').on('click', function () {
    $(this).closest('.modal').removeClass('is-active');
  }); // Select all links with hashes

  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]') // Remove links that don't actually link to anything
  .click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 550, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
}); // Import the classes required to handle sections



$(document).on('DOMContentLoaded turbolinks:load', function () {
  // Load all the sections
  var sectionsManager = new _shared_javascripts_sections_manager__WEBPACK_IMPORTED_MODULE_0__["default"](); // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE

  sectionsManager.registerSection('footer', _sections__WEBPACK_IMPORTED_MODULE_1__["Footer"]);
  sectionsManager.registerSection('section_four', _sections__WEBPACK_IMPORTED_MODULE_1__["SectionFour"]);
  sectionsManager.registerSection('section_three', _sections__WEBPACK_IMPORTED_MODULE_1__["SectionThree"]);
  sectionsManager.registerSection('section_two', _sections__WEBPACK_IMPORTED_MODULE_1__["SectionTwo"]);
  sectionsManager.registerSection('section_one', _sections__WEBPACK_IMPORTED_MODULE_1__["SectionOne"]);
  sectionsManager.registerSection('hero', _sections__WEBPACK_IMPORTED_MODULE_1__["Hero"]);
  sectionsManager.registerSection('header', _sections__WEBPACK_IMPORTED_MODULE_1__["Header"]);
  sectionsManager.start();
});

/***/ }),

/***/ "./app/assets/fresh/javascripts/sections/footer.js":
/*!*********************************************************!*\
  !*** ./app/assets/fresh/javascripts/sections/footer.js ***!
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

/***/ "./app/assets/fresh/javascripts/sections/header.js":
/*!*********************************************************!*\
  !*** ./app/assets/fresh/javascripts/sections/header.js ***!
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

/***/ "./app/assets/fresh/javascripts/sections/hero.js":
/*!*******************************************************!*\
  !*** ./app/assets/fresh/javascripts/sections/hero.js ***!
  \*******************************************************/
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

/***/ "./app/assets/fresh/javascripts/sections/index.js":
/*!********************************************************!*\
  !*** ./app/assets/fresh/javascripts/sections/index.js ***!
  \********************************************************/
/*! exports provided: Hero, Header, SectionOne, SectionTwo, SectionThree, SectionFour, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./app/assets/fresh/javascripts/sections/hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./app/assets/fresh/javascripts/sections/header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _section_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section_one */ "./app/assets/fresh/javascripts/sections/section_one.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionOne", function() { return _section_one__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _section_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section_two */ "./app/assets/fresh/javascripts/sections/section_two.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTwo", function() { return _section_two__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _section_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section_three */ "./app/assets/fresh/javascripts/sections/section_three.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionThree", function() { return _section_three__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _section_four__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section_four */ "./app/assets/fresh/javascripts/sections/section_four.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionFour", function() { return _section_four__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./app/assets/fresh/javascripts/sections/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_6__["default"]; });

// Import all the sections here








/***/ }),

/***/ "./app/assets/fresh/javascripts/sections/section_four.js":
/*!***************************************************************!*\
  !*** ./app/assets/fresh/javascripts/sections/section_four.js ***!
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

/***/ "./app/assets/fresh/javascripts/sections/section_one.js":
/*!**************************************************************!*\
  !*** ./app/assets/fresh/javascripts/sections/section_one.js ***!
  \**************************************************************/
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

/***/ "./app/assets/fresh/javascripts/sections/section_three.js":
/*!****************************************************************!*\
  !*** ./app/assets/fresh/javascripts/sections/section_three.js ***!
  \****************************************************************/
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

/***/ "./app/assets/fresh/javascripts/sections/section_two.js":
/*!**************************************************************!*\
  !*** ./app/assets/fresh/javascripts/sections/section_two.js ***!
  \**************************************************************/
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

/***/ 5:
/*!***************************************************!*\
  !*** multi ./app/assets/fresh/javascripts/app.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/weston/html/ruby/locomotive_cms/wagon_kitchen_sink/app/assets/fresh/javascripts/app.js */"./app/assets/fresh/javascripts/app.js");


/***/ })

/******/ });