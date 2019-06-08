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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/pluton/javascripts/app.js":
/*!**********************************************!*\
  !*** ./app/assets/pluton/javascripts/app.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_jquery_mixitup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/jquery.mixitup.js */ "./app/assets/pluton/javascripts/vendor/jquery.mixitup.js");
/* harmony import */ var _vendor_jquery_mixitup_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_mixitup_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_jquery_bxslider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/jquery.bxslider.js */ "./app/assets/pluton/javascripts/vendor/jquery.bxslider.js");
/* harmony import */ var _vendor_jquery_bxslider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_bxslider_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_jquery_cslider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/jquery.cslider.js */ "./app/assets/pluton/javascripts/vendor/jquery.cslider.js");
/* harmony import */ var _vendor_jquery_cslider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_cslider_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_jquery_placeholder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/jquery.placeholder.js */ "./app/assets/pluton/javascripts/vendor/jquery.placeholder.js");
/* harmony import */ var _vendor_jquery_placeholder_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_placeholder_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendor_jquery_inview_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/jquery.inview.js */ "./app/assets/pluton/javascripts/vendor/jquery.inview.js");
/* harmony import */ var _vendor_jquery_inview_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_inview_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_appli_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/appli.js */ "./app/assets/pluton/javascripts/vendor/appli.js");
/* harmony import */ var _vendor_appli_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_appli_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_javascripts_sections_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/javascripts/sections/_manager */ "./app/assets/shared/javascripts/sections/_manager.js");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections */ "./app/assets/pluton/javascripts/sections/index.js");
// https://github.com/VodkaBears/Vide/issues/183#issuecomment-365603849
jQuery.fn.load = function (callback) {
  $(window).on("load", callback);
};






 // Tell Webpack to load the style
//import '../stylesheets/app.scss';
// Import the classes required to handle sections



$(document).on('turbolinks:load', function () {
  // Load all the sections
  var sectionsManager = new _shared_javascripts_sections_manager__WEBPACK_IMPORTED_MODULE_6__["default"](); // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE

  sectionsManager.registerSection('contact', _sections__WEBPACK_IMPORTED_MODULE_7__["Contact"]);
  sectionsManager.registerSection('price', _sections__WEBPACK_IMPORTED_MODULE_7__["Price"]);
  sectionsManager.registerSection('clients', _sections__WEBPACK_IMPORTED_MODULE_7__["Client"]);
  sectionsManager.registerSection('about', _sections__WEBPACK_IMPORTED_MODULE_7__["About"]);
  sectionsManager.registerSection('portfolio', _sections__WEBPACK_IMPORTED_MODULE_7__["Portfolio"]);
  sectionsManager.registerSection('service', _sections__WEBPACK_IMPORTED_MODULE_7__["Service"]);
  sectionsManager.registerSection('home', _sections__WEBPACK_IMPORTED_MODULE_7__["Home"]);
  sectionsManager.start();
});

/***/ }),

/***/ "./app/assets/pluton/javascripts/sections/about.js":
/*!*********************************************************!*\
  !*** ./app/assets/pluton/javascripts/sections/about.js ***!
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

/***/ "./app/assets/pluton/javascripts/sections/clients.js":
/*!***********************************************************!*\
  !*** ./app/assets/pluton/javascripts/sections/clients.js ***!
  \***********************************************************/
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

/***/ "./app/assets/pluton/javascripts/sections/contact.js":
/*!***********************************************************!*\
  !*** ./app/assets/pluton/javascripts/sections/contact.js ***!
  \***********************************************************/
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

/***/ "./app/assets/pluton/javascripts/sections/home.js":
/*!********************************************************!*\
  !*** ./app/assets/pluton/javascripts/sections/home.js ***!
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

/***/ "./app/assets/pluton/javascripts/sections/index.js":
/*!*********************************************************!*\
  !*** ./app/assets/pluton/javascripts/sections/index.js ***!
  \*********************************************************/
/*! exports provided: Home, Service, Portfolio, About, Client, Price, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./app/assets/pluton/javascripts/sections/home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./app/assets/pluton/javascripts/sections/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _service__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio */ "./app/assets/pluton/javascripts/sections/portfolio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return _portfolio__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./app/assets/pluton/javascripts/sections/about.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _about__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients */ "./app/assets/pluton/javascripts/sections/clients.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _clients__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./price */ "./app/assets/pluton/javascripts/sections/price.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return _price__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact */ "./app/assets/pluton/javascripts/sections/contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _contact__WEBPACK_IMPORTED_MODULE_6__["default"]; });

// Import all the sections here
//
// Example:
// export { default as Hero } from './hero';
//








/***/ }),

/***/ "./app/assets/pluton/javascripts/sections/portfolio.js":
/*!*************************************************************!*\
  !*** ./app/assets/pluton/javascripts/sections/portfolio.js ***!
  \*************************************************************/
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

/***/ "./app/assets/pluton/javascripts/sections/price.js":
/*!*********************************************************!*\
  !*** ./app/assets/pluton/javascripts/sections/price.js ***!
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

/***/ "./app/assets/pluton/javascripts/sections/service.js":
/*!***********************************************************!*\
  !*** ./app/assets/pluton/javascripts/sections/service.js ***!
  \***********************************************************/
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

/***/ "./app/assets/pluton/javascripts/vendor/appli.js":
/*!*******************************************************!*\
  !*** ./app/assets/pluton/javascripts/vendor/appli.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * A Design by GraphBerry
 * Author: GraphBerry
 * Author URL: http://graphberry.com
 * License: http://graphberry.com/pages/license
 */

jQuery(document).ready(function ($) {
  var lastId,
      topMenu = $("#top-navigation"),
      topMenuHeight = topMenu.outerHeight(),
      // All list items
  menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var href = $(this).attr("href");

    if (href.indexOf("#") === 0) {
      var item = $($(this).attr("href"));

      if (item.length) {
        return item;
      }
    }
  }); //Get width of container

  var containerWidth = $('.section .container').width(); //Resize animated triangle

  $(".triangle").css({
    "border-left": containerWidth / 2 + 'px outset transparent',
    "border-right": containerWidth / 2 + 'px outset transparent'
  });
  $(window).resize(function () {
    containerWidth = $('.container').width();
    $(".triangle").css({
      "border-left": containerWidth / 2 + 'px outset transparent',
      "border-right": containerWidth / 2 + 'px outset transparent'
    });
  }); //Initialize header slider.

  $('#da-slider').cslider(); //Initial mixitup, used for animated filtering portgolio.

  $('#portfolio-grid').mixitup({
    'onMixStart': function onMixStart(config) {
      $('div.toggleDiv').hide();
    }
  }); //Initial Out clients slider in client section

  $('#clint-slider').bxSlider({
    pager: false,
    minSlides: 1,
    maxSlides: 5,
    moveSlides: 2,
    slideWidth: 210,
    slideMargin: 25,
    prevSelector: $('#client-prev'),
    nextSelector: $('#client-next'),
    prevText: '<i class="icon-left-open"></i>',
    nextText: '<i class="icon-right-open"></i>'
  });
  $('input, textarea').placeholder(); // Bind to scroll

  $(window).scroll(function () {
    //Display or hide scroll to top button
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }

    if ($(this).scrollTop() > 130) {
      $('.navbar').addClass('navbar-fixed-top animated fadeInDown');
    } else {
      $('.navbar').removeClass('navbar-fixed-top animated fadeInDown');
    } // Get container scroll position


    var fromTop = $(this).scrollTop() + topMenuHeight + 10; // Get id of current scroll item

    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    }); // Get the id of the current element

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id; // Set/remove active class

      menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });
  /*
  Function for scroliing to top
  ************************************/

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
  $(window).load(function () {
    function filterPath(string) {
      return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
    }

    $("a[href*='#']").each(function () {
      if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
        var $targetId = $(this.hash),
            $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
        var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;

        if ($target) {
          $(this).click(function () {
            //Hack collapse top navigation after clicking
            topMenu.parent().attr('style', 'height:0px').removeClass('in'); //Close navigation

            $('.navbar .btn-navbar').addClass('collapsed');
            var targetOffset = $target.offset().top - 63;
            $('html, body').animate({
              scrollTop: targetOffset
            }, 800);
            return false;
          });
        }
      }
    });
  });
  /*
  Send newsletter
  **********************************************************************/

  $('#subscribe').click(function () {
    var error = false;
    var emailCompare = /^([a-z0-9_.-]+)@([0-9a-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input

    var email = $('input#nlmail').val().toLowerCase(); // get the value of the input field

    if (email == "" || email == " " || !emailCompare.test(email)) {
      $('#err-subscribe').show(500);
      $('#err-subscribe').delay(4000);
      $('#err-subscribe').animate({
        height: 'toggle'
      }, 500, function () {// Animation complete.
      });
      error = true; // change the error state to true
    }

    if (error === false) {
      $.ajax({
        type: 'POST',
        url: 'php/newsletter.php',
        data: {
          email: $('#nlmail').val()
        },
        error: function error(request, _error) {
          alert("An error occurred");
        },
        success: function success(response) {
          if (response == 'OK') {
            $('#success-subscribe').show();
            $('#nlmail').val('');
          } else {
            alert("An error occurred");
          }
        }
      });
    }

    return false;
  });
  /*
  Send mail
  **********************************************************************/

  $("#send-mail").click(function () {
    var name = $('input#name').val(); // get the value of the input field

    var error = false;

    if (name == "" || name == " ") {
      $('#err-name').show(500);
      $('#err-name').delay(4000);
      $('#err-name').animate({
        height: 'toggle'
      }, 500, function () {// Animation complete.
      });
      error = true; // change the error state to true
    }

    var emailCompare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input

    var email = $('input#email').val().toLowerCase(); // get the value of the input field

    if (email == "" || email == " " || !emailCompare.test(email)) {
      $('#err-email').show(500);
      $('#err-email').delay(4000);
      $('#err-email').animate({
        height: 'toggle'
      }, 500, function () {// Animation complete.
      });
      error = true; // change the error state to true
    }

    var comment = $('textarea#comment').val(); // get the value of the input field

    if (comment == "" || comment == " ") {
      $('#err-comment').show(500);
      $('#err-comment').delay(4000);
      $('#err-comment').animate({
        height: 'toggle'
      }, 500, function () {// Animation complete.
      });
      error = true; // change the error state to true
    }

    if (error == false) {
      var dataString = $('#contact-form').serialize(); // Collect data from form

      $.ajax({
        type: "POST",
        url: $('#contact-form').attr('action'),
        data: dataString,
        timeout: 6000,
        error: function error(request, _error2) {},
        success: function success(response) {
          response = $.parseJSON(response);

          if (response.success) {
            $('#successSend').show();
            $("#name").val('');
            $("#email").val('');
            $("#comment").val('');
          } else {
            $('#errorSend').show();
          }
        }
      });
      return false;
    }

    return false; // stops user browser being directed to the php file
  }); //Function for show or hide portfolio desctiption.

  $.fn.showHide = function (options) {
    var defaults = {
      speed: 1000,
      easing: '',
      changeText: 0,
      showText: 'Show',
      hideText: 'Hide'
    };
    var options = $.extend(defaults, options);
    $(this).click(function () {
      $('.toggleDiv').slideUp(options.speed, options.easing);
      var toggleClick = $(this);
      var toggleDiv = $(this).attr('rel');
      $(toggleDiv).slideToggle(options.speed, options.easing, function () {
        if (options.changeText == 1) {
          $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
        }
      });
      return false;
    });
  }; //Initial Show/Hide portfolio element.


  $('div.toggleDiv').hide();
  $('.show_hide').showHide({
    speed: 500,
    changeText: 0,
    showText: 'View',
    hideText: 'Close'
  });
  /************************
  Animate elements
  *************************/
  //Animate thumbnails

  jQuery('.thumbnail').one('inview', function (event, visible) {
    if (visible == true) {
      jQuery(this).addClass("animated fadeInDown");
    } else {
      jQuery(this).removeClass("animated fadeInDown");
    }
  }); //Animate triangles

  jQuery('.triangle').bind('inview', function (event, visible) {
    if (visible == true) {
      jQuery(this).addClass("animated fadeInDown");
    } else {
      jQuery(this).removeClass("animated fadeInDown");
    }
  }); //animate first team member

  jQuery('#person-0').bind('inview', function (event, visible) {
    if (visible == true) {
      jQuery('#person-0').addClass("animated pulse");
    } else {
      jQuery('#person-0').removeClass("animated pulse");
    }
  }); //animate second team member

  jQuery('#person-1').bind('inview', function (event, visible) {
    if (visible == true) {
      jQuery('#person-1').addClass("animated pulse");
    } else {
      jQuery('#person-1').removeClass("animated pulse");
    }
  }); //animate thrid team member

  jQuery('#person-2').bind('inview', function (event, visible) {
    if (visible == true) {
      jQuery('#person-2').addClass("animated pulse");
    } else {
      jQuery('#person-2').removeClass("animated pulse");
    }
  }); //Animate price columns

  jQuery('.price-column, .testimonial').bind('inview', function (event, visible) {
    if (visible == true) {
      jQuery(this).addClass("animated fadeInDown");
    } else {
      jQuery(this).removeClass("animated fadeInDown");
    }
  }); //Animate contact form

  jQuery('.contact-form').bind('inview', function (event, visible) {
    if (visible == true) {
      jQuery('.contact-form').addClass("animated bounceIn");
    } else {
      jQuery('.contact-form').removeClass("animated bounceIn");
    }
  }); //Animate skill bars

  jQuery('.skills > li > span').one('inview', function (event, visible) {
    if (visible == true) {
      jQuery(this).each(function () {
        jQuery(this).animate({
          width: jQuery(this).attr('data-width')
        }, 3000);
      });
    }
  });
}); //Initialize google map for contact setion with your location.

window.initializeMap = function () {
  var lat = '44.8164056'; //Set your latitude.

  var lon = '20.46090424'; //Set your longitude.

  var centerLon = lon - 0.0105;
  var myOptions = {
    scrollwheel: false,
    draggable: false,
    disableDefaultUI: true,
    center: new google.maps.LatLng(lat, centerLon),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }; //Bind map to elemet with id map-canvas

  var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
  var marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(lat, lon)
  });
  var infowindow = new google.maps.InfoWindow({
    content: "Your content goes here!"
  });
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
};

/***/ }),

/***/ "./app/assets/pluton/javascripts/vendor/jquery.bxslider.js":
/*!*****************************************************************!*\
  !*** ./app/assets/pluton/javascripts/vendor/jquery.bxslider.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
;

(function ($) {
  var plugin = {};
  var defaults = {
    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,
    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,
    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,
    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    autoHover: false,
    autoDelay: 0,
    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    // CALLBACKS
    onSliderLoad: function onSliderLoad() {},
    onSlideBefore: function onSlideBefore() {},
    onSlideAfter: function onSlideAfter() {},
    onSlideNext: function onSlideNext() {},
    onSlidePrev: function onSlidePrev() {}
  };

  $.fn.bxSlider = function (options) {
    if (this.length == 0) return this; // support mutltiple elements

    if (this.length > 1) {
      this.each(function () {
        $(this).bxSlider(options);
      });
      return this;
    } // create a namespace to be used throughout the plugin


    var slider = {}; // set a reference to our slider element

    var el = this;
    plugin.el = this;
    /**
     * Makes slideshow responsive
     */
    // first get the original window dimens (thanks alot IE)

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */

    var init = function init() {
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options); // parse slideWidth setting

      slider.settings.slideWidth = parseInt(slider.settings.slideWidth); // store the original children

      slider.children = el.children(slider.settings.slideSelector); // check if actual number of slides is less than minSlides / maxSlides

      if (slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
      if (slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length; // if random start, set the startSlide setting to random number

      if (slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); // store active slide information

      slider.active = {
        index: slider.settings.startSlide // store if the slider is in carousel mode (displaying / moving multiple slides)

      };
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1; // if carousel, force preloadImages = 'all'

      if (slider.carousel) slider.settings.preloadImages = 'all'; // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions

      slider.minThreshold = slider.settings.minSlides * slider.settings.slideWidth + (slider.settings.minSlides - 1) * slider.settings.slideMargin;
      slider.maxThreshold = slider.settings.maxSlides * slider.settings.slideWidth + (slider.settings.maxSlides - 1) * slider.settings.slideMargin; // store the current state of the slider (if currently animating, working is true)

      slider.working = false; // initialize the controls object

      slider.controls = {}; // initialize an auto interval

      slider.interval = null; // determine which property to use for transitions

      slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left'; // determine if hardware acceleration can be used

      slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && function () {
        // create our test div element
        var div = document.createElement('div'); // css transition properties

        var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']; // test for each property

        for (var i in props) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }

        return false;
      }(); // if vertical mode always make maxSlides and minSlides equal


      if (slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides; // save original style data

      el.data("origStyle", el.attr("style"));
      el.children(slider.settings.slideSelector).each(function () {
        $(this).data("origStyle", $(this).attr("style"));
      }); // perform all DOM / CSS modifications

      setup();
    };
    /**
     * Performs all DOM and CSS modifications
     */


    var setup = function setup() {
      // wrap el in a wrapper
      el.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'); // store a namspace reference to .bx-viewport

      slider.viewport = el.parent(); // add a loading div to display while images are loading

      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader); // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el

      el.css({
        width: slider.settings.mode == 'horizontal' ? slider.children.length * 100 + 215 + '%' : 'auto',
        position: 'relative'
      }); // if using CSS, add the easing property

      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing); // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }

      var slidesShowing = getNumberSlidesShowing(); // make modifications to the viewport (.bx-viewport)

      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      }); // make modification to the wrapper (.bx-wrapper)

      if (!slider.settings.pager) {
        slider.viewport.parent().css({
          margin: '0 auto 0px'
        });
      } // apply css to all slider children


      slider.children.css({
        'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      }); // apply the calculated width after the float is applied to prevent scrollbar interference

      slider.children.css('width', getSlideWidth()); // if slideMargin is supplied, add the css

      if (slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
      if (slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin); // if "fade" mode, add positioning and z-index CSS

      if (slider.settings.mode == 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        }); // prepare the z-index on the showing element

        slider.children.eq(slider.settings.startSlide).css({
          zIndex: 50,
          display: 'block'
        });
      } // create an element to contain all slider controls (pager, start / stop, etc)


      slider.controls.el = $('<div class="bx-controls" />'); // if captions are requested, add them

      if (slider.settings.captions) appendCaptions(); // check if startSlide is last slide

      slider.active.last = slider.settings.startSlide == getPagerQty() - 1; // if video is true, set up the fitVids plugin

      if (slider.settings.video) el.fitVids(); // set the default preload selector (visible)

      var preloadSelector = slider.children.eq(slider.settings.startSlide);
      if (slider.settings.preloadImages == "all") preloadSelector = slider.children; // only check for control addition if not in "ticker" mode

      if (!slider.settings.ticker) {
        // if pager is requested, add it
        if (slider.settings.pager) appendPager(); // if controls are requested, add them

        if (slider.settings.controls) appendControls(); // if auto is true, and auto controls are requested, add them

        if (slider.settings.auto && slider.settings.autoControls) appendControlsAuto(); // if any control option is requested, add the controls wrapper

        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el); // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      } // preload all images, then perform final DOM / CSS modifications that depend on images being loaded


      loadElements(preloadSelector, start);
    };

    var loadElements = function loadElements(selector, callback) {
      var total = selector.find('img, iframe').length;

      if (total == 0) {
        callback();
        return;
      }

      var count = 0;
      selector.find('img, iframe').each(function () {
        if ($(this).is('img')) $(this).attr('src', $(this).attr('src') + '?timestamp=' + new Date().getTime());
        $(this).load(function () {
          setTimeout(function () {
            if (++count == total) callback();
          }, 0);
        });
      });
    };
    /**
     * Start the slider
     */


    var start = function start() {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker) {
        var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
        var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
        var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
        el.append(sliceAppend).prepend(slicePrepend);
      } // remove the loading DOM element


      slider.loader.remove(); // set the left / top position of "el"

      setSlidePosition(); // if "vertical" mode, always use adaptiveHeight to prevent odd behavior

      if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true; // set the viewport height

      slider.viewport.height(getViewportHeight()); // make sure everything is positioned just right (same as a window resize)

      el.redrawSlider(); // onSliderLoad callback

      slider.settings.onSliderLoad(slider.active.index); // slider has been fully initialized

      slider.initialized = true; // bind the resize call to the window

      if (slider.settings.responsive) $(window).bind('resize', resizeWindow); // if auto is true, start the show

      if (slider.settings.auto && slider.settings.autoStart) initAuto(); // if ticker is true, start the ticker

      if (slider.settings.ticker) initTicker(); // if pager is requested, make the appropriate pager link active

      if (slider.settings.pager) updatePagerActive(slider.settings.startSlide); // check for any updates to the controls (like hideControlOnEnd updates)

      if (slider.settings.controls) updateDirectionControls(); // if touchEnabled is true, setup the touch events

      if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
    };
    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */


    var getViewportHeight = function getViewportHeight() {
      var height = 0; // first determine which children (slides) should be used in our height calculation

      var children = $(); // if mode is not "vertical" and adaptiveHeight is false, include all children

      if (slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index); // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy(); // add the current slide to the children

          children = slider.children.eq(currentIndex); // cycle through the remaining "showing" slides

          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      } // if "vertical" mode, calculate the sum of the heights of the children


      if (slider.settings.mode == 'vertical') {
        children.each(function (index) {
          height += $(this).outerHeight();
        }); // add user-supplied margins

        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        } // if not "vertical" mode, calculate the max height of the children

      } else {
        height = Math.max.apply(Math, children.map(function () {
          return $(this).outerHeight(false);
        }).get());
      }

      return height;
    };
    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */


    var getViewportMaxWidth = function getViewportMaxWidth() {
      var width = '100%';

      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode == 'horizontal') {
          width = slider.settings.maxSlides * slider.settings.slideWidth + (slider.settings.maxSlides - 1) * slider.settings.slideMargin;
        } else {
          width = slider.settings.slideWidth;
        }
      }

      return width;
    };
    /**
     * Returns the calculated width to be applied to each slide
     */


    var getSlideWidth = function getSlideWidth() {
      // start with any user-supplied slide width
      var newElWidth = slider.settings.slideWidth; // get the current viewport width

      var wrapWidth = slider.viewport.width(); // if slide width was not supplied, or is larger than the viewport use the viewport width

      if (slider.settings.slideWidth == 0 || slider.settings.slideWidth > wrapWidth && !slider.carousel || slider.settings.mode == 'vertical') {
        newElWidth = wrapWidth; // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - slider.settings.slideMargin * (slider.settings.minSlides - 1)) / slider.settings.minSlides;
        }
      }

      return newElWidth;
    };
    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */


    var getNumberSlidesShowing = function getNumberSlidesShowing() {
      var slidesShowing = 1;

      if (slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides; // if viewport is larger than minThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides; // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          var childWidth = slider.children.first().width();
          slidesShowing = Math.floor(slider.viewport.width() / childWidth);
        } // if "vertical" mode, slides showing will always be minSlides

      } else if (slider.settings.mode == 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }

      return slidesShowing;
    };
    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */


    var getPagerQty = function getPagerQty() {
      var pagerQty = 0; // if moveSlides is specified by the user

      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = slider.children.length / getMoveBy();
        } else {
          // use a while loop to determine pages
          var breakPoint = 0;
          var counter = 0; // when breakpoint goes above children length, counter is the number of pages

          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
        } // if moveSlides is 0 (auto) divide children length by sides showing, then round up

      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }

      return pagerQty;
    };
    /**
     * Returns the number of indivual slides by which to shift the slider
     */


    var getMoveBy = function getMoveBy() {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      } // if moveSlides is 0 (auto)


      return getNumberSlidesShowing();
    };
    /**
     * Sets the slider's (el) left or top position
     */


    var setSlidePosition = function setSlidePosition() {
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode == 'horizontal') {
          // get the last child's position
          var lastChild = slider.children.last();
          var position = lastChild.position(); // set the left position

          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.width())), 'reset', 0);
        } else if (slider.settings.mode == 'vertical') {
          // get the last showing index's position
          var lastShowingIndex = slider.children.length - slider.settings.minSlides;
          var position = slider.children.eq(lastShowingIndex).position(); // set the top position

          setPositionProperty(-position.top, 'reset', 0);
        } // if not last slide

      } else {
        // get the position of the first showing slide
        var position = slider.children.eq(slider.active.index * getMoveBy()).position(); // check for last slide

        if (slider.active.index == getPagerQty() - 1) slider.active.last = true; // set the repective position

        if (position != undefined) {
          if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
        }
      }
    };
    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int) 
     *  - the animating property's value
     *
     * @param type (string) 'slider', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int) 
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */


    var setPositionProperty = function setPositionProperty(value, type, duration, params) {
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)'; // add the CSS transition-duration

        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');

        if (type == 'slide') {
          // set the property value
          el.css(slider.animProp, propValue); // bind a callback method - executes when CSS transition completes

          el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
            // unbind the callback
            el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
            updateAfterSlideTransition();
          });
        } else if (type == 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type == 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue); // bind a callback method - executes when CSS transition completes

          el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
            // unbind the callback
            el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd'); // reset the position

            setPositionProperty(params['resetValue'], 'reset', 0); // start the loop again

            tickerLoop();
          });
        } // use JS animate

      } else {
        var animateObj = {};
        animateObj[slider.animProp] = value;

        if (type == 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function () {
            updateAfterSlideTransition();
          });
        } else if (type == 'reset') {
          el.css(slider.animProp, value);
        } else if (type == 'ticker') {
          el.animate(animateObj, speed, 'linear', function () {
            setPositionProperty(params['resetValue'], 'reset', 0); // run the recursive loop after animation

            tickerLoop();
          });
        }
      }
    };
    /**
     * Populates the pager with proper amount of pages
     */


    var populatePager = function populatePager() {
      var pagerHtml = '';
      var pagerQty = getPagerQty(); // loop through each pager item

      for (var i = 0; i < pagerQty; i++) {
        var linkContent = ''; // if a buildPager function is supplied, use it to get pager link value, else use index + 1

        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager)) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        } // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string


        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }

      ; // populate the pager element with pager links

      slider.pagerEl.html(pagerHtml);
    };
    /**
     * Appends the pager to the controls element
     */


    var appendPager = function appendPager() {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />'); // if a pager selector was supplied, populate it with the pager

        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl); // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        } // populate the pager


        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      } // assign the pager click binding


      slider.pagerEl.delegate('a', 'click', clickPagerBind);
    };
    /**
     * Appends prev / next controls to the controls element
     */


    var appendControls = function appendControls() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>'); // bind click actions to the controls

      slider.controls.next.bind('click', clickNextBind);
      slider.controls.prev.bind('click', clickPrevBind); // if nextSlector was supplied, populate it

      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      } // if prevSlector was supplied, populate it


      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      } // if no custom selectors were supplied


      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />'); // add the control elements to the directionEl

        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next); // slider.viewport.append(slider.controls.directionEl);

        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };
    /**
     * Appends start / stop auto controls to the controls element
     */


    var appendControlsAuto = function appendControlsAuto() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>'); // add the controls to the DOM

      slider.controls.autoEl = $('<div class="bx-controls-auto" />'); // bind click actions to the controls

      slider.controls.autoEl.delegate('.bx-start', 'click', clickStartBind);
      slider.controls.autoEl.delegate('.bx-stop', 'click', clickStopBind); // if autoControlsCombine, insert only the "start" control

      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start); // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      } // if auto controls selector was supplied, populate it with the controls


      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl); // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      } // update the auto controls


      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };
    /**
     * Appends image captions to the DOM
     */


    var appendCaptions = function appendCaptions() {
      // cycle through each child
      slider.children.each(function (index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title'); // append the caption

        if (title != undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };
    /**
     * Click next binding
     *
     * @param e (event) 
     *  - DOM event object
     */


    var clickNextBind = function clickNextBind(e) {
      // if auto show is running, stop it
      if (slider.settings.auto) el.stopAuto();
      el.goToNextSlide();
      e.preventDefault();
    };
    /**
     * Click prev binding
     *
     * @param e (event) 
     *  - DOM event object
     */


    var clickPrevBind = function clickPrevBind(e) {
      // if auto show is running, stop it
      if (slider.settings.auto) el.stopAuto();
      el.goToPrevSlide();
      e.preventDefault();
    };
    /**
     * Click start binding
     *
     * @param e (event) 
     *  - DOM event object
     */


    var clickStartBind = function clickStartBind(e) {
      el.startAuto();
      e.preventDefault();
    };
    /**
     * Click stop binding
     *
     * @param e (event) 
     *  - DOM event object
     */


    var clickStopBind = function clickStopBind(e) {
      el.stopAuto();
      e.preventDefault();
    };
    /**
     * Click pager binding
     *
     * @param e (event) 
     *  - DOM event object
     */


    var clickPagerBind = function clickPagerBind(e) {
      // if auto show is running, stop it
      if (slider.settings.auto) el.stopAuto();
      var pagerLink = $(e.currentTarget);
      var pagerIndex = parseInt(pagerLink.attr('data-slide-index')); // if clicked pager link is not active, continue with the goToSlide call

      if (pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
      e.preventDefault();
    };
    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int) 
     *  - index of slide to make active
     */


    var updatePagerActive = function updatePagerActive(slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children

      if (slider.settings.pagerType == 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }

        slider.pagerEl.html(slideIndex + 1 + slider.settings.pagerShortSeparator + len);
        return;
      } // remove all pager active classes


      slider.pagerEl.find('a').removeClass('active'); // apply the active class for all pagers

      slider.pagerEl.each(function (i, el) {
        $(el).find('a').eq(slideIndex).addClass('active');
      });
    };
    /**
     * Performs needed actions after a slide transition
     */


    var updateAfterSlideTransition = function updateAfterSlideTransition() {
      // if infinte loop is true
      if (slider.settings.infiniteLoop) {
        var position = ''; // first slide

        if (slider.active.index == 0) {
          // set the new position
          position = slider.children.eq(0).position(); // carousel, last slide
        } else if (slider.active.index == getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position(); // last slide
        } else if (slider.active.index == slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }

        if (slider.settings.mode == 'horizontal') {
          setPositionProperty(-position.left, 'reset', 0);
          ;
        } else if (slider.settings.mode == 'vertical') {
          setPositionProperty(-position.top, 'reset', 0);
          ;
        }
      } // declare that the transition is complete


      slider.working = false; // onSlideAfter callback

      slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };
    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */


    var updateAutoControls = function updateAutoControls(state) {
      // if autoControlsCombine is true, replace the current control with the new state 
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]); // if autoControlsCombine is false, apply the "active" class to the appropriate control 
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };
    /**
     * Updates the direction controls (checks if either should be hidden)
     */


    var updateDirectionControls = function updateDirectionControls() {
      if (getPagerQty() == 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index == 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled'); // if last slide
        } else if (slider.active.index == getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled'); // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };
    /**
     * Initialzes the auto process
     */


    var initAuto = function initAuto() {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay); // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();
      } // if autoHover is requested


      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function () {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true agument which will prevent control update
            el.stopAuto(true); // create a new autoPaused value which will be used by the relative "mouseout" event

            slider.autoPaused = true;
          }
        }, function () {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true agument which will prevent control update
            el.startAuto(true); // reset the autoPaused value

            slider.autoPaused = null;
          }
        });
      }
    };
    /**
     * Initialzes the ticker process
     */


    var initTicker = function initTicker() {
      var startPosition = 0; // if autoDirection is "next", append a clone of the entire slider

      if (slider.settings.autoDirection == 'next') {
        el.append(slider.children.clone().addClass('bx-clone')); // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        var position = slider.children.first().position();
        startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
      }

      setPositionProperty(startPosition, 'reset', 0); // do not allow controls in ticker mode

      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false; // if autoHover is requested

      if (slider.settings.tickerHover && !slider.usingCSS) {
        // on el hover
        slider.viewport.hover(function () {
          el.stop();
        }, function () {
          // calculate the total width of children (used to calculate the speed ratio)
          var totalDimens = 0;
          slider.children.each(function (index) {
            totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
          }); // calculate the speed ratio (used to determine the new speed to finish the paused animation)

          var ratio = slider.settings.speed / totalDimens; // determine which property to use

          var property = slider.settings.mode == 'horizontal' ? 'left' : 'top'; // calculate the new speed

          var newSpeed = ratio * (totalDimens - Math.abs(parseInt(el.css(property))));
          tickerLoop(newSpeed);
        });
      } // start the ticker loop


      tickerLoop();
    };
    /**
     * Runs a continuous loop, news ticker-style
     */


    var tickerLoop = function tickerLoop(resumeSpeed) {
      speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
      var position = {
        left: 0,
        top: 0
      };
      var reset = {
        left: 0,
        top: 0
      }; // if "next" animate left position to last child, then reset left to 0

      if (slider.settings.autoDirection == 'next') {
        position = el.find('.bx-clone').first().position(); // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }

      var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
      var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
      var params = {
        resetValue: resetValue
      };
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };
    /**
     * Initializes touch events
     */


    var initTouch = function initTouch() {
      // initialize object to contain all touch values
      slider.touch = {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      };
      slider.viewport.bind('touchstart', onTouchStart);
    };
    /**
     * Event handler for "touchstart"
     *
     * @param e (event) 
     *  - DOM event object
     */


    var onTouchStart = function onTouchStart(e) {
      if (slider.working) {
        e.preventDefault();
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent; // record the starting touch x, y coordinates

        slider.touch.start.x = orig.changedTouches[0].pageX;
        slider.touch.start.y = orig.changedTouches[0].pageY; // bind a "touchmove" event to the viewport

        slider.viewport.bind('touchmove', onTouchMove); // bind a "touchend" event to the viewport

        slider.viewport.bind('touchend', onTouchEnd);
      }
    };
    /**
     * Event handler for "touchmove"
     *
     * @param e (event) 
     *  - DOM event object
     */


    var onTouchMove = function onTouchMove(e) {
      var orig = e.originalEvent; // if scrolling on y axis, do not prevent default

      var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
      var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y); // x axis swipe

      if (xMovement * 3 > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault(); // y axis swipe
      } else if (yMovement * 3 > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }

      if (slider.settings.mode != 'fade' && slider.settings.oneToOneTouch) {
        var value = 0; // if horizontal, drag along x axis

        if (slider.settings.mode == 'horizontal') {
          var change = orig.changedTouches[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change; // if vertical, drag along y axis
        } else {
          var change = orig.changedTouches[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }

        setPositionProperty(value, 'reset', 0);
      }
    };
    /**
     * Event handler for "touchend"
     *
     * @param e (event) 
     *  - DOM event object
     */


    var onTouchEnd = function onTouchEnd(e) {
      slider.viewport.unbind('touchmove', onTouchMove);
      var orig = e.originalEvent;
      var value = 0; // record end x, y positions

      slider.touch.end.x = orig.changedTouches[0].pageX;
      slider.touch.end.y = orig.changedTouches[0].pageY; // if fade mode, check if absolute x distance clears the threshold

      if (slider.settings.mode == 'fade') {
        var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);

        if (distance >= slider.settings.swipeThreshold) {
          slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
          el.stopAuto();
        } // not fade mode

      } else {
        var distance = 0; // calculate distance and el's animate property

        if (slider.settings.mode == 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        } // if not infinite loop and first / last slide, do not attempt a slide transition


        if (!slider.settings.infiniteLoop && (slider.active.index == 0 && distance > 0 || slider.active.last && distance < 0)) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }

      slider.viewport.unbind('touchend', onTouchEnd);
    };
    /**
     * Window resize event callback
     */


    var resizeWindow = function resizeWindow(e) {
      // get the new window dimens (again, thank you IE)
      var windowWidthNew = $(window).width();
      var windowHeightNew = $(window).height(); // make sure that it is a true window resize
      // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
      // are resized. Can you just die already?*

      if (windowWidth != windowWidthNew || windowHeight != windowHeightNew) {
        // set the new window dimens
        windowWidth = windowWidthNew;
        windowHeight = windowHeightNew; // update all dynamic elements

        el.redrawSlider();
      }
    };
    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int) 
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string) 
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */


    el.goToSlide = function (slideIndex, direction) {
      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index == slideIndex) return; // declare that plugin is in motion

      slider.working = true; // store the old index

      slider.oldIndex = slider.active.index; // if slideIndex is less than zero, set active index to last child (this happens during infinite loop)

      if (slideIndex < 0) {
        slider.active.index = getPagerQty() - 1; // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        slider.active.index = 0; // set active index to requested slide
      } else {
        slider.active.index = slideIndex;
      } // onSlideBefore, onSlideNext, onSlidePrev callbacks


      slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      if (direction == 'next') {
        slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
      } else if (direction == 'prev') {
        slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
      } // check if last slide


      slider.active.last = slider.active.index >= getPagerQty() - 1; // update the pager with active class

      if (slider.settings.pager) updatePagerActive(slider.active.index); // // check for direction control update

      if (slider.settings.controls) updateDirectionControls(); // if slider is set to mode: "fade"

      if (slider.settings.mode == 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()) {
          slider.viewport.animate({
            height: getViewportHeight()
          }, slider.settings.adaptiveHeightSpeed);
        } // fade out the visible child and reset its z-index value


        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({
          zIndex: 0
        }); // fade in the newly requested slide

        slider.children.eq(slider.active.index).css('zIndex', 51).fadeIn(slider.settings.speed, function () {
          $(this).css('zIndex', 50);
          updateAfterSlideTransition();
        }); // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()) {
          slider.viewport.animate({
            height: getViewportHeight()
          }, slider.settings.adaptiveHeightSpeed);
        }

        var moveBy = 0;
        var position = {
          left: 0,
          top: 0
        }; // if carousel and not infinite loop

        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode == 'horizontal') {
            // get the last child position
            var lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position(); // calculate the position of the last slide

            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            var lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          } // horizontal carousel, going previous while on first slide (infiniteLoop mode)

        } else if (slider.carousel && slider.active.last && direction == 'prev') {
          // get the last child position
          var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : (getPagerQty() - 1) * getMoveBy() - (slider.children.length - slider.settings.maxSlides);
          var lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position(); // if infinite loop and "Next" is clicked on the last slide
        } else if (direction == 'next' && slider.active.index == 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false; // normal non-zero requests
        } else if (slideIndex >= 0) {
          var requestEl = slideIndex * getMoveBy();
          position = slider.children.eq(requestEl).position();
        }
        /* If the position doesn't exist 
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */


        if ("undefined" !== typeof position) {
          var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top; // plugin values to be animated

          setPositionProperty(value, 'slide', slider.settings.speed);
        }
      }
    };
    /**
     * Transitions to the next slide in the show
     */


    el.goToNextSlide = function () {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) return;
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };
    /**
     * Transitions to the prev slide in the show
     */


    el.goToPrevSlide = function () {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };
    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean) 
     *  - if true, auto controls state will not be updated
     */


    el.startAuto = function (preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) return; // create an interval

      slider.interval = setInterval(function () {
        slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
      }, slider.settings.pause); // if auto controls are displayed and preventControlUpdate is not true

      if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
    };
    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean) 
     *  - if true, auto controls state will not be updated
     */


    el.stopAuto = function (preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) return; // clear the interval

      clearInterval(slider.interval);
      slider.interval = null; // if auto controls are displayed and preventControlUpdate is not true

      if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
    };
    /**
     * Returns current slide index (zero-based)
     */


    el.getCurrentSlide = function () {
      return slider.active.index;
    };
    /**
     * Returns number of slides in show
     */


    el.getSlideCount = function () {
      return slider.children.length;
    };
    /**
     * Update all dynamic slider elements
     */


    el.redrawSlider = function () {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth()); // adjust the height

      slider.viewport.css('height', getViewportHeight()); // update the slide position

      if (!slider.settings.ticker) setSlidePosition(); // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on

      if (slider.active.last) slider.active.index = getPagerQty() - 1; // if the active index (page) no longer exists due to the resize, simply set the index as last

      if (slider.active.index >= getPagerQty()) slider.active.last = true; // if a pager is being displayed and a custom pager is not being used, update it

      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
    };
    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */


    el.destroySlider = function () {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) return;
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function () {
        $(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
      });
      $(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
      $(this).unwrap().unwrap();
      if (slider.controls.el) slider.controls.el.remove();
      if (slider.controls.next) slider.controls.next.remove();
      if (slider.controls.prev) slider.controls.prev.remove();
      if (slider.pagerEl) slider.pagerEl.remove();
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) slider.controls.autoEl.remove();
      clearInterval(slider.interval);
      if (slider.settings.responsive) $(window).unbind('resize', resizeWindow);
    };
    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */


    el.reloadSlider = function (settings) {
      if (settings != undefined) options = settings;
      el.destroySlider();
      init();
    };

    init(); // returns the current jQuery object

    return this;
  };
})(jQuery);

/***/ }),

/***/ "./app/assets/pluton/javascripts/vendor/jquery.cslider.js":
/*!****************************************************************!*\
  !*** ./app/assets/pluton/javascripts/vendor/jquery.cslider.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, undefined) {
  /*
   * Slider object.
   */
  $.Slider = function (options, element) {
    this.$el = $(element);

    this._init(options);
  };

  $.Slider.defaults = {
    width: 1170,
    //Max slider width
    height: 500,
    //max slider height
    current: 0,
    // index of current slide
    bgincrement: 100,
    // increment the bg position (parallax effect) when sliding
    autoplay: true,
    // slideshow on / off
    interval: 6000 // time between transitions

  };
  $.Slider.prototype = {
    _init: function _init(options) {
      var self = this;
      this.options = $.extend(true, {}, $.Slider.defaults, options);
      this.ratio = this.$el.width() / this.$el.height();
      this.$slides = this.$el.children().children('.da-slide');
      this.slidesCount = this.$slides.length;
      this.current = this.options.current;

      if (this.current < 0 || this.current >= this.slidesCount) {
        this.current = 0;
      }

      this.$slides.eq(this.current).addClass('da-slide-current');
      var $navigation = $('<nav class="da-dots"/>');

      for (var i = 0; i < this.slidesCount; ++i) {
        $navigation.append('<span/>');
      }

      $navigation.appendTo(this.$el);
      this.$pages = this.$el.find('nav.da-dots > span');
      this.$navNext = this.$el.find('span.da-arrows-next');
      this.$navPrev = this.$el.find('span.da-arrows-prev');
      this.isAnimating = false;
      this.bgpositer = 0;
      this.cssAnimations = true; //this.cssAnimations = Modernizr.cssanimations;

      this.cssTransitions = true; //this.cssTransitions = Modernizr.csstransitions;

      if (!this.cssAnimations || !this.cssAnimations) {
        this.$el.addClass('da-slider-fb');
      }

      this._updatePage(); // load the events


      this._loadEvents(); // slideshow


      if (this.options.autoplay) {
        this._startSlideshow();
      }

      $(window).bind('resize', function () {
        setTimeout(function () {
          self._makeResponsive();
        }, 150);
      });

      this._makeResponsive();
    },
    _navigate: function _navigate(page, dir) {
      var $current = this.$slides.eq(this.current),
          $next,
          _self = this;

      if (this.current === page || this.isAnimating) return false;
      this.isAnimating = true; // check dir

      var classTo, classFrom, d;

      if (!dir) {
        page > this.current ? d = 'next' : d = 'prev';
      } else {
        d = dir;
      }

      if (this.cssAnimations && this.cssAnimations) {
        if (d === 'next') {
          classTo = 'da-slide-toleft';
          classFrom = 'da-slide-fromright';
          ++this.bgpositer;
        } else {
          classTo = 'da-slide-toright';
          classFrom = 'da-slide-fromleft';
          --this.bgpositer;
        }

        this.$el.css('background-position', this.bgpositer * this.options.bgincrement + '% center');
      }

      this.current = page;
      $next = this.$slides.eq(this.current);

      if (this.cssAnimations && this.cssAnimations) {
        var rmClasses = 'da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright';
        $current.removeClass(rmClasses);
        $next.removeClass(rmClasses);
        $current.addClass(classTo);
        $next.addClass(classFrom);
        $current.removeClass('da-slide-current');
        $next.addClass('da-slide-current');
      } // fallback


      if (!this.cssAnimations || !this.cssAnimations) {
        $next.addClass('da-slide-current');
        $next.css('left', d === 'next' ? '100%' : '-100%').stop().animate({
          left: '0%'
        }, 1000, function () {
          _self.isAnimating = false;
        });
        $current.stop().animate({
          left: d === 'next' ? '-100%' : '100%'
        }, 1000, function () {
          $current.removeClass('da-slide-current');
        });
      }

      this._updatePage();
    },
    _updatePage: function _updatePage() {
      this.$pages.removeClass('da-dots-current');
      this.$pages.eq(this.current).addClass('da-dots-current');
    },
    _startSlideshow: function _startSlideshow() {
      var _self = this;

      this.slideshow = setTimeout(function () {
        var page = _self.current < _self.slidesCount - 1 ? page = _self.current + 1 : page = 0;

        _self._navigate(page, 'next');

        if (_self.options.autoplay) {
          _self._startSlideshow();
        }
      }, this.options.interval);
    },
    page: function page(idx) {
      if (idx >= this.slidesCount || idx < 0) {
        return false;
      }

      if (this.options.autoplay) {
        clearTimeout(this.slideshow);
        this.options.autoplay = false;
      }

      this._navigate(idx);
    },
    _makeResponsive: function _makeResponsive() {
      var _self = this;

      var w = this.$el.width();
      var h = this.$el.height();
      var nH = h;

      if (w < _self.options.width) {
        var xy = this.options.width / this.options.height;
        var nH = w / xy;
        this.$el.height(Math.ceil(nH));
      } else {
        this.$el.height(Math.ceil(this.options.height));
      }
    },
    _loadEvents: function _loadEvents() {
      var _self = this;

      this.$pages.on('click.cslider', function (event) {
        _self.page($(this).index());

        return false;
      });
      this.$navNext.on('click.cslider', function (event) {
        if (_self.options.autoplay) {
          clearTimeout(_self.slideshow);
          _self.options.autoplay = false;
        }

        var page = _self.current < _self.slidesCount - 1 ? page = _self.current + 1 : page = 0;

        _self._navigate(page, 'next');

        return false;
      });
      this.$navPrev.on('click.cslider', function (event) {
        if (_self.options.autoplay) {
          clearTimeout(_self.slideshow);
          _self.options.autoplay = false;
        }

        var page = _self.current > 0 ? page = _self.current - 1 : page = _self.slidesCount - 1;

        _self._navigate(page, 'prev');

        return false;
      });

      if (this.cssTransitions) {
        if (!this.options.bgincrement) {
          this.$el.on('webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider', function (event) {
            if (event.originalEvent.animationName === 'toRightAnim4' || event.originalEvent.animationName === 'toLeftAnim4') {
              _self.isAnimating = false;
            }
          });
        } else {
          this.$el.on('webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider', function (event) {
            if (event.target.id === _self.$el.attr('id')) _self.isAnimating = false;
          });
        }
      }
    }
  };

  var logError = function logError(message) {
    if (this.console) {
      console.error(message);
    }
  };

  $.fn.cslider = function (options) {
    if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var instance = $.data(this, 'cslider');

        if (!instance) {
          logError("cannot call methods on cslider prior to initialization; " + "attempted to call method '" + options + "'");
          return;
        }

        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
          logError("no such method '" + options + "' for cslider instance");
          return;
        }

        instance[options].apply(instance, args);
      });
    } else {
      this.each(function () {
        var instance = $.data(this, 'cslider');

        if (!instance) {
          $.data(this, 'cslider', new $.Slider(options, this));
        }
      });
    }

    return this;
  };
})(jQuery);

/***/ }),

/***/ "./app/assets/pluton/javascripts/vendor/jquery.inview.js":
/*!***************************************************************!*\
  !*** ./app/assets/pluton/javascripts/vendor/jquery.inview.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
  function getViewportHeight() {
    var height = window.innerHeight; // Safari, Opera

    var mode = document.compatMode;

    if (mode || !$.support.boxModel) {
      // IE, Gecko
      height = mode == 'CSS1Compat' ? document.documentElement.clientHeight : // Standards
      document.body.clientHeight; // Quirks
    }

    return height;
  }

  $(window).scroll(function () {
    var vpH = getViewportHeight(),
        scrolltop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop,
        elems = []; // naughty, but this is how it knows which elements to check for

    $.each($.cache, function () {
      if (this.events && this.events.inview) {
        elems.push(this.handle.elem);
      }
    });

    if (elems.length) {
      $(elems).each(function () {
        var $el = $(this),
            top = $el.offset().top,
            height = $el.height(),
            inview = $el.data('inview') || false;

        if (scrolltop > top + height || scrolltop + vpH < top) {
          if (inview) {
            $el.data('inview', false);
            $el.trigger('inview', [false]);
          }
        } else if (scrolltop < top + height) {
          if (!inview) {
            $el.data('inview', true);
            $el.trigger('inview', [true]);
          }
        }
      });
    }
  }); // kick the event to pick up any elements already in view.
  // note however, this only works if the plugin is included after the elements are bound to 'inview'

  $(function () {
    $(window).scroll();
  });
})(jQuery);

/***/ }),

/***/ "./app/assets/pluton/javascripts/vendor/jquery.mixitup.js":
/*!****************************************************************!*\
  !*** ./app/assets/pluton/javascripts/vendor/jquery.mixitup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/
(function ($) {
  // DECLARE METHODS
  var methods = {
    // "INIT" METHOD
    init: function init(settings) {
      return this.each(function () {
        // BUILD CONFIG OBJECT
        var config = {
          // PUBLIC PROPERTIES
          targetSelector: '.mix',
          filterSelector: '.filter',
          sortSelector: '.sort',
          buttonEvent: 'click',
          effects: ['fade', 'scale'],
          listEffects: null,
          easing: 'smooth',
          layoutMode: 'grid',
          targetDisplayGrid: 'inline-block',
          targetDisplayList: 'block',
          listClass: '',
          gridClass: '',
          transitionSpeed: 600,
          showOnLoad: 'all',
          sortOnLoad: false,
          multiFilter: false,
          filterLogic: 'or',
          resizeContainer: true,
          minHeight: 0,
          failClass: 'fail',
          perspectiveDistance: '3000',
          perspectiveOrigin: '50% 50%',
          animateGridList: true,
          onMixLoad: null,
          onMixStart: null,
          onMixEnd: null,
          // MISC
          container: null,
          origOrder: [],
          startOrder: [],
          newOrder: [],
          origSort: [],
          checkSort: [],
          filter: '',
          mixing: false,
          origDisplay: '',
          origLayout: '',
          origHeight: 0,
          newHeight: 0,
          isTouch: false,
          resetDelay: 0,
          failsafe: null,
          // CSS
          prefix: '',
          easingFallback: 'ease-in-out',
          transition: {},
          perspective: {},
          clean: {},
          fade: '1',
          scale: '',
          rotateX: '',
          rotateY: '',
          rotateZ: '',
          blur: '',
          grayscale: ''
        };

        if (settings) {
          $.extend(config, settings);
        }

        ; // ADD CONFIG OBJECT TO CONTAINER OBJECT PER INSTANTIATION

        this.config = config; // DETECT TOUCH

        $.support.touch = 'ontouchend' in document;

        if ($.support.touch) {
          config.isTouch = true;
          config.resetDelay = 350;
        }

        ; // LOCALIZE CONTAINER

        config.container = $(this);
        var $cont = config.container; // GET VENDOR PREFIX

        config.prefix = prefix($cont[0]);
        config.prefix = config.prefix ? '-' + config.prefix.toLowerCase() + '-' : ''; // CACHE 'DEFAULT' SORTING ORDER

        $cont.find(config.targetSelector).each(function () {
          config.origOrder.push($(this));
        }); // PERFORM SORT ON LOAD 

        if (config.sortOnLoad) {
          var sortby, order;

          if ($.isArray(config.sortOnLoad)) {
            sortby = config.sortOnLoad[0], order = config.sortOnLoad[1];
            $(config.sortSelector + '[data-sort=' + config.sortOnLoad[0] + '][data-order=' + config.sortOnLoad[1] + ']').addClass('active');
          } else {
            $(config.sortSelector + '[data-sort=' + config.sortOnLoad + ']').addClass('active');
            sortby = config.sortOnLoad, config.sortOnLoad = 'desc';
          }

          ;
          sort(sortby, order, $cont, config);
        }

        ; // BUILD TRANSITION AND PERSPECTIVE OBJECTS

        for (var i = 0; i < 2; i++) {
          var a = i == 0 ? a = config.prefix : '';
          config.transition[a + 'transition'] = 'all ' + config.transitionSpeed + 'ms ease-in-out';
          config.perspective[a + 'perspective'] = config.perspectiveDistance + 'px';
          config.perspective[a + 'perspective-origin'] = config.perspectiveOrigin;
        }

        ; // BUILD TRANSITION CLEANER

        for (var i = 0; i < 2; i++) {
          var a = i == 0 ? a = config.prefix : '';
          config.clean[a + 'transition'] = 'none';
        }

        ; // CHOOSE GRID OR LIST

        if (config.layoutMode == 'list') {
          $cont.addClass(config.listClass);
          config.origDisplay = config.targetDisplayList;
        } else {
          $cont.addClass(config.gridClass);
          config.origDisplay = config.targetDisplayGrid;
        }

        ;
        config.origLayout = config.layoutMode; // PARSE 'SHOWONLOAD'

        var showOnLoadArray = config.showOnLoad.split(' '); // GIVE ACTIVE FILTER ACTIVE CLASS

        $.each(showOnLoadArray, function () {
          $(config.filterSelector + '[data-filter="' + this + '"]').addClass('active');
        }); // RENAME "ALL" CATEGORY TO "MIX_ALL"

        $cont.find(config.targetSelector).addClass('mix_all');

        if (showOnLoadArray[0] == 'all') {
          showOnLoadArray[0] = 'mix_all', config.showOnLoad = 'mix_all';
        }

        ; // FADE IN 'SHOWONLOAD'

        var $showOnLoad = $();
        $.each(showOnLoadArray, function () {
          $showOnLoad = $showOnLoad.add($('.' + this));
        });
        $showOnLoad.each(function () {
          var $t = $(this);

          if (config.layoutMode == 'list') {
            $t.css('display', config.targetDisplayList);
          } else {
            $t.css('display', config.targetDisplayGrid);
          }

          ;
          $t.css(config.transition);
        }); // WRAP FADE-IN TO PREVENT RACE CONDITION

        var delay = setTimeout(function () {
          config.mixing = true;
          $showOnLoad.css('opacity', '1'); // CLEAN UP

          var reset = setTimeout(function () {
            if (config.layoutMode == 'list') {
              $showOnLoad.removeStyle(config.prefix + 'transition, transition').css({
                display: config.targetDisplayList,
                opacity: 1
              });
            } else {
              $showOnLoad.removeStyle(config.prefix + 'transition, transition').css({
                display: config.targetDisplayGrid,
                opacity: 1
              });
            }

            ; // FIRE "ONMIXLOAD" CALLBACK

            config.mixing = false;

            if (typeof config.onMixLoad == 'function') {
              var output = config.onMixLoad.call(this, config); // UPDATE CONFIG IF DATA RETURNED

              config = output ? output : config;
            }

            ;
          }, config.transitionSpeed);
        }, 10); // PRESET ACTIVE FILTER

        config.filter = config.showOnLoad; // BIND SORT CLICK HANDLERS

        $(config.sortSelector).bind(config.buttonEvent, function () {
          if (!config.mixing) {
            // PARSE SORT ARGUMENTS FROM BUTTON CLASSES
            var $t = $(this),
                sortby = $t.attr('data-sort'),
                order = $t.attr('data-order');

            if (!$t.hasClass('active')) {
              $(config.sortSelector).removeClass('active');
              $t.addClass('active');
            } else {
              if (sortby != 'random') return false;
            }

            ;
            $cont.find(config.targetSelector).each(function () {
              config.startOrder.push($(this));
            });
            goMix(config.filter, sortby, order, $cont, config);
          }

          ;
        }); // BIND FILTER CLICK HANDLERS

        $(config.filterSelector).bind(config.buttonEvent, function () {
          if (!config.mixing) {
            var $t = $(this); // PARSE FILTER ARGUMENTS FROM BUTTON CLASSES

            if (config.multiFilter == false) {
              // SINGLE ACTIVE BUTTON
              $(config.filterSelector).removeClass('active');
              $t.addClass('active');
              config.filter = $t.attr('data-filter');
              $(config.filterSelector + '[data-filter="' + config.filter + '"]').addClass('active');
            } else {
              // MULTIPLE ACTIVE BUTTONS
              var thisFilter = $t.attr('data-filter');

              if ($t.hasClass('active')) {
                $t.removeClass('active'); // REMOVE FILTER FROM SPACE-SEPERATED STRING

                var re = new RegExp('(\\s|^)' + thisFilter);
                config.filter = config.filter.replace(re, '');
              } else {
                // ADD FILTER TO SPACE-SEPERATED STRING
                $t.addClass('active');
                config.filter = config.filter + ' ' + thisFilter;
              }

              ;
            }

            ; // GO MIX

            goMix(config.filter, null, null, $cont, config);
          }

          ;
        });
      });
    },
    // "TOGRID" METHOD
    toGrid: function toGrid() {
      return this.each(function () {
        var config = this.config;

        if (config.layoutMode != 'grid') {
          config.layoutMode = 'grid';
          goMix(config.filter, null, null, $(this), config);
        }

        ;
      });
    },
    // "TOLIST" METHOD
    toList: function toList() {
      return this.each(function () {
        var config = this.config;

        if (config.layoutMode != 'list') {
          config.layoutMode = 'list';
          goMix(config.filter, null, null, $(this), config);
        }

        ;
      });
    },
    // "FILTER" METHOD
    filter: function filter(arg) {
      return this.each(function () {
        var config = this.config;

        if (!config.mixing) {
          $(config.filterSelector).removeClass('active');
          $(config.filterSelector + '[data-filter="' + arg + '"]').addClass('active');
          goMix(arg, null, null, $(this), config);
        }

        ;
      });
    },
    // "SORT" METHOD
    sort: function sort(args) {
      return this.each(function () {
        var config = this.config,
            $t = $(this);

        if (!config.mixing) {
          $(config.sortSelector).removeClass('active');

          if ($.isArray(args)) {
            var sortby = args[0],
                order = args[1];
            $(config.sortSelector + '[data-sort="' + args[0] + '"][data-order="' + args[1] + '"]').addClass('active');
          } else {
            $(config.sortSelector + '[data-sort="' + args + '"]').addClass('active');
            var sortby = args,
                order = 'desc';
          }

          ;
          $t.find(config.targetSelector).each(function () {
            config.startOrder.push($(this));
          });
          goMix(config.filter, sortby, order, $t, config);
        }

        ;
      });
    },
    // "MULTIMIX" METHOD
    multimix: function multimix(args) {
      return this.each(function () {
        var config = this.config,
            $t = $(this);
        multiOut = {
          filter: config.filter,
          sort: null,
          order: 'desc',
          layoutMode: config.layoutMode
        };
        $.extend(multiOut, args);

        if (!config.mixing) {
          $(config.filterSelector).add(config.sortSelector).removeClass('active');
          $(config.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass('active');

          if (typeof multiOut.sort !== 'undefined') {
            $(config.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass('active');
            $t.find(config.targetSelector).each(function () {
              config.startOrder.push($(this));
            });
          }

          ;
          config.layoutMode = multiOut.layoutMode;
          goMix(multiOut.filter, multiOut.sort, multiOut.order, $t, config);
        }

        ;
      });
    },
    // "REMIX" METHOD
    remix: function remix(arg) {
      return this.each(function () {
        var config = this.config,
            $t = $(this);
        config.origOrder = [];
        $t.find(config.targetSelector).each(function () {
          var $th = $(this);
          $th.addClass('mix_all');
          config.origOrder.push($th);
        });

        if (!config.mixing && typeof arg !== 'undefined') {
          $(config.filterSelector).removeClass('active');
          $(config.filterSelector + '[data-filter="' + arg + '"]').addClass('active');
          goMix(arg, null, null, $t, config);
        }

        ;
      });
    }
  }; // DECLARE PLUGIN

  $.fn.mixitup = function (method, arg) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (_typeof(method) === 'object' || !method) {
      return methods.init.apply(this, arguments);
    }

    ;
  };
  /* ==== THE MAGIC ==== */


  function goMix(filter, sortby, order, $cont, config) {
    // WE ARE NOW MIXING
    clearInterval(config.failsafe);
    config.mixing = true; // APPLY ARGS TO CONFIG

    config.filter = filter; // FIRE "ONMIXSTART" CALLBACK

    if (typeof config.onMixStart == 'function') {
      var output = config.onMixStart.call(this, config); // UPDATE CONFIG IF DATA RETURNED

      config = output ? output : config;
    }

    ; // SHORT LOCAL VARS

    var speed = config.transitionSpeed; // REBUILD TRANSITION AND PERSPECTIVE OBJECTS

    for (var i = 0; i < 2; i++) {
      var a = i == 0 ? a = config.prefix : '';
      config.transition[a + 'transition'] = 'all ' + speed + 'ms linear';
      config.transition[a + 'transform'] = a + 'translate3d(0,0,0)';
      config.perspective[a + 'perspective'] = config.perspectiveDistance + 'px';
      config.perspective[a + 'perspective-origin'] = config.perspectiveOrigin;
    }

    ; // CACHE TARGET ELEMENTS FOR QUICK ACCESS

    var mixSelector = config.targetSelector,
        $targets = $cont.find(mixSelector); // ADD DATA OBJECT TO EACH TARGET

    $targets.each(function () {
      this.data = {};
    }); // RE-DEFINE CONTAINER INCASE NOT IMMEDIATE PARENT OF TARGET ELEMENTS 

    var $par = $targets.parent(); // ADD PERSPECTIVE TO CONTAINER 

    $par.css(config.perspective); // SETUP EASING

    config.easingFallback = 'ease-in-out';
    if (config.easing == 'smooth') config.easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    if (config.easing == 'snap') config.easing = 'cubic-bezier(0.77, 0, 0.175, 1)';

    if (config.easing == 'windback') {
      config.easing = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)', config.easingFallback = 'cubic-bezier(0.175, 0.885, 0.320, 1)'; // Fall-back for old webkit, with no values > 1 or < 1
    }

    ;

    if (config.easing == 'windup') {
      config.easing = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)', config.easingFallback = 'cubic-bezier(0.6, 0.28, 0.735, 0.045)';
    }

    ; // USE LIST SPECIFIC EFFECTS IF DECLARED

    var effectsOut = config.layoutMode == 'list' && config.listEffects != null ? config.listEffects : config.effects; // BUILD EFFECTS STRINGS & SKIP IF IE8

    if (Array.prototype.indexOf) {
      config.fade = effectsOut.indexOf('fade') > -1 ? '0' : '';
      config.scale = effectsOut.indexOf('scale') > -1 ? 'scale(.01)' : '';
      config.rotateZ = effectsOut.indexOf('rotateZ') > -1 ? 'rotate(180deg)' : '';
      config.rotateY = effectsOut.indexOf('rotateY') > -1 ? 'rotateY(90deg)' : '';
      config.rotateX = effectsOut.indexOf('rotateX') > -1 ? 'rotateX(90deg)' : '';
      config.blur = effectsOut.indexOf('blur') > -1 ? 'blur(8px)' : '';
      config.grayscale = effectsOut.indexOf('grayscale') > -1 ? 'grayscale(100%)' : '';
    }

    ; // DECLARE NEW JQUERY OBJECTS FOR GROUPING

    var $show = $(),
        $hide = $(),
        filterArray = [],
        multiDimensional = false; // BUILD FILTER ARRAY(S)

    if (typeof filter === 'string') {
      // SINGLE DIMENSIONAL FILTERING
      filterArray = buildFilterArray(filter);
    } else {
      // MULTI DIMENSIONAL FILTERING
      multiDimensional = true;
      $.each(filter, function (i) {
        filterArray[i] = buildFilterArray(this);
      });
    }

    ; // "OR" LOGIC (DEFAULT)

    if (config.filterLogic == 'or') {
      if (filterArray[0] == '') filterArray.shift(); // IF FIRST ITEM IN ARRAY IS AN EMPTY SPACE, DELETE
      // IF NO ELEMENTS ARE DESIRED THEN HIDE ALL VISIBLE ELEMENTS

      if (filterArray.length < 1) {
        $hide = $hide.add($cont.find(mixSelector + ':visible'));
      } else {
        // ELSE CHECK EACH TARGET ELEMENT FOR ANY FILTER CATEGORY:
        $targets.each(function () {
          var $t = $(this);

          if (!multiDimensional) {
            // IF HAS ANY FILTER, ADD TO "SHOW" OBJECT
            if ($t.is('.' + filterArray.join(', .'))) {
              $show = $show.add($t); // ELSE IF HAS NO FILTERS, ADD TO "HIDE" OBJECT
            } else {
              $hide = $hide.add($t);
            }

            ;
          } else {
            var pass = 0; // FOR EACH DIMENSION

            $.each(filterArray, function (i) {
              if (this.length) {
                if ($t.is('.' + this.join(', .'))) {
                  pass++;
                }

                ;
              } else if (pass > 0) {
                pass++;
              }

              ;
            }); // IF PASSES ALL DIMENSIONS, SHOW

            if (pass == filterArray.length) {
              $show = $show.add($t); // ELSE HIDE
            } else {
              $hide = $hide.add($t);
            }

            ;
          }

          ;
        });
      }

      ;
    } else {
      // "AND" LOGIC
      // ADD "MIX_SHOW" CLASS TO ELEMENTS THAT HAVE ALL FILTERS
      $show = $show.add($par.find(mixSelector + '.' + filterArray.join('.'))); // ADD "MIX_HIDE" CLASS TO EVERYTHING ELSE

      $hide = $hide.add($par.find(mixSelector + ':not(.' + filterArray.join('.') + '):visible'));
    }

    ; // GET TOTAL NUMBER OF ELEMENTS TO SHOW

    var total = $show.length; // DECLARE NEW JQUERY OBJECTS

    var $tohide = $(),
        $toshow = $(),
        $pre = $(); // FOR ELEMENTS TO BE HIDDEN, IF NOT ALREADY HIDDEN THEN ADD TO OBJECTS "TOHIDE" AND "PRE" 
    // TO INDICATE PRE-EXISTING ELEMENTS TO BE HIDDEN

    $hide.each(function () {
      var $t = $(this);

      if ($t.css('display') != 'none') {
        $tohide = $tohide.add($t);
        $pre = $pre.add($t);
      }

      ;
    }); // IF ALL ELEMENTS ARE ALREADY SHOWN AND THERE IS NOTHING TO HIDE, AND NOT PERFORMING A LAYOUT CHANGE OR SORT:

    if ($show.filter(':visible').length == total && !$tohide.length && !sortby) {
      if (config.origLayout == config.layoutMode) {
        // THEN CLEAN UP AND GO HOME
        resetFilter();
        return false;
      } else {
        // IF ONLY ONE ITEM AND CHANGING FORM GRID TO LIST, MOST LIKELY POSITION WILL NOT CHANGE SO WE'RE DONE
        if ($show.length == 1) {
          if (config.layoutMode == 'list') {
            $cont.addClass(config.listClass);
            $cont.removeClass(config.gridClass);
            $pre.css('display', config.targetDisplayList);
          } else {
            $cont.addClass(config.gridClass);
            $cont.removeClass(config.listClass);
            $pre.css('display', config.targetDisplayGrid);
          }

          ; // THEN CLEAN UP AND GO HOME

          resetFilter();
          return false;
        }
      }

      ;
    }

    ; // GET CONTAINER'S STARTING HEIGHT

    config.origHeight = $par.height(); // IF THERE IS SOMETHING TO BE SHOWN:

    if ($show.length) {
      // REMOVE "FAIL CLASS" FROM CONTAINER IF EXISTS
      $cont.removeClass(config.failClass); // FOR ELEMENTS TO BE SHOWN, IF NOT ALREADY SHOWN THEN ADD TO OBJECTS "TOSHOW" ELSE ADD CLASS "MIX_PRE"
      // TO INDICATE PRE-EXISTING ELEMENT

      $show.each(function () {
        var $t = $(this);

        if ($t.css('display') == 'none') {
          $toshow = $toshow.add($t);
        } else {
          $pre = $pre.add($t);
        }

        ;
      }); // IF NON-ANIMATED LAYOUT MODE TRANSITION:

      if (config.origLayout != config.layoutMode && config.animateGridList == false) {
        // ADD NEW DISPLAY TYPES, CLEAN UP AND GO HOME
        if (config.layoutMode == 'list') {
          $cont.addClass(config.listClass);
          $cont.removeClass(config.gridClass);
          $pre.css('display', config.targetDisplayList);
        } else {
          $cont.addClass(config.gridClass);
          $cont.removeClass(config.listClass);
          $pre.css('display', config.targetDisplayGrid);
        }

        ;
        resetFilter();
        return false;
      }

      ; // IF IE, FUCK OFF, AND THEN CLEAN UP AND GO HOME

      if (!window.atob) {
        resetFilter();
        return false;
      }

      ; // OVERRIDE ANY EXISTING TRANSITION TIMING FOR CALCULATIONS

      $targets.css(config.clean); // FOR EACH PRE-EXISTING ELEMENT, ADD STARTING POSITION TO 'ORIGPOS' ARRAY

      $pre.each(function () {
        this.data.origPos = $(this).offset();
      }); // TEMPORARILY SHOW ALL ELEMENTS TO SHOW (THAT ARE NOT ALREADY SHOWN), WITHOUT HIDING ELEMENTS TO HIDE
      // AND ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER

      if (config.layoutMode == 'list') {
        $cont.addClass(config.listClass);
        $cont.removeClass(config.gridClass);
        $toshow.css('display', config.targetDisplayList);
      } else {
        $cont.addClass(config.gridClass);
        $cont.removeClass(config.listClass);
        $toshow.css('display', config.targetDisplayGrid);
      }

      ; // FOR EACH ELEMENT NOW SHOWN, ADD ITS INTERMEDIATE POSITION TO 'SHOWINTERPOS' ARRAY

      $toshow.each(function () {
        this.data.showInterPos = $(this).offset();
      }); // FOR EACH ELEMENT TO BE HIDDEN, BUT NOT YET HIDDEN, AND NOW MOVED DUE TO SHOWN ELEMENTS,
      // ADD ITS INTERMEDIATE POSITION TO 'HIDEINTERPOS' ARRAY

      $tohide.each(function () {
        this.data.hideInterPos = $(this).offset();
      }); // FOR EACH PRE-EXISTING ELEMENT, NOW MOVED DUE TO SHOWN ELEMENTS, ADD ITS POSITION TO 'PREINTERPOS' ARRAY

      $pre.each(function () {
        this.data.preInterPos = $(this).offset();
      }); // SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS INCASE WE ARE CHANGING LAYOUT MODE

      if (config.layoutMode == 'list') {
        $pre.css('display', config.targetDisplayList);
      } else {
        $pre.css('display', config.targetDisplayGrid);
      }

      ; // IF A SORT ARGUMENT HAS BEEN SENT, RUN SORT FUNCTION SO OBJECTS WILL MOVE TO THEIR FINAL ORDER

      if (sortby) {
        sort(sortby, order, $cont, config);
      }

      ; // IF VISIBLE SORT ORDER IS THE SAME (WHICH WOULD NOT TRIGGER A TRANSITION EVENT)

      if (sortby && compareArr(config.origSort, config.checkSort)) {
        // THEN CLEAN UP AND GO HOME
        resetFilter();
        return false;
      }

      ; // TEMPORARILY HIDE ALL SHOWN ELEMENTS TO HIDE

      $tohide.hide(); // FOR EACH ELEMENT TO SHOW, AND NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED, 
      // ADD ITS POSITION TO 'FINALPOS' ARRAY

      $toshow.each(function (i) {
        this.data.finalPos = $(this).offset();
      }); // FOR EACH PRE-EXISTING ELEMENT NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED,
      // ADD ITS POSITION TO 'FINALPREPOS' ARRAY

      $pre.each(function () {
        this.data.finalPrePos = $(this).offset();
      }); // SINCE WE ARE IN OUT FINAL STATE, GET NEW HEIGHT OF CONTAINER

      config.newHeight = $par.height(); // IF A SORT ARGUMENT AS BEEN SENT, RUN SORT FUNCTION 'RESET' TO MOVE ELEMENTS BACK TO THEIR STARTING ORDER

      if (sortby) {
        sort('reset', null, $cont, config);
      }

      ; // RE-HIDE ALL ELEMENTS TEMPORARILY SHOWN

      $toshow.hide(); // SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS BACK TO THEIR 
      // ORIGINAL PROPERTY, INCASE WE ARE CHANGING LAYOUT MODE

      $pre.css('display', config.origDisplay); // ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER

      if (config.origDisplay == 'block') {
        $cont.addClass(config.listClass);
        $toshow.css('display', config.targetDisplayList);
      } else {
        $cont.removeClass(config.listClass);
        $toshow.css('display', config.targetDisplayGrid);
      }

      ; // IF WE ARE ANIMATING CONTAINER, RESET IT TO ITS STARTING HEIGHT

      if (config.resizeContainer) $par.css('height', config.origHeight + 'px'); // ADD TRANSFORMS TO ALL ELEMENTS TO SHOW

      var toShowCSS = {};

      for (var i = 0; i < 2; i++) {
        var a = i == 0 ? a = config.prefix : '';
        toShowCSS[a + 'transform'] = config.scale + ' ' + config.rotateX + ' ' + config.rotateY + ' ' + config.rotateZ;
        toShowCSS[a + 'filter'] = config.blur + ' ' + config.grayscale;
      }

      ;
      $toshow.css(toShowCSS); // FOR EACH PRE-EXISTING ELEMENT, SUBTRACT ITS INTERMEDIATE POSITION FROM ITS ORIGINAL POSITION 
      // TO GET ITS STARTING OFFSET

      $pre.each(function () {
        var data = this.data,
            $t = $(this);

        if ($t.hasClass('mix_tohide')) {
          data.preTX = data.origPos.left - data.hideInterPos.left;
          data.preTY = data.origPos.top - data.hideInterPos.top;
        } else {
          data.preTX = data.origPos.left - data.preInterPos.left;
          data.preTY = data.origPos.top - data.preInterPos.top;
        }

        ;
        var preCSS = {};

        for (var i = 0; i < 2; i++) {
          var a = i == 0 ? a = config.prefix : '';
          preCSS[a + 'transform'] = 'translate(' + data.preTX + 'px,' + data.preTY + 'px)';
        }

        ;
        $t.css(preCSS);
      }); // ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER

      if (config.layoutMode == 'list') {
        $cont.addClass(config.listClass);
        $cont.removeClass(config.gridClass);
      } else {
        $cont.addClass(config.gridClass);
        $cont.removeClass(config.listClass);
      }

      ; // WRAP ANIMATION FUNCTIONS IN 10ms TIMEOUT TO PREVENT RACE CONDITION

      var delay = setTimeout(function () {
        // APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
        if (config.resizeContainer) {
          var containerCSS = {};

          for (var i = 0; i < 2; i++) {
            var a = i == 0 ? a = config.prefix : '';
            containerCSS[a + 'transition'] = 'all ' + speed + 'ms ease-in-out';
            containerCSS['height'] = config.newHeight + 'px';
          }

          ;
          $par.css(containerCSS);
        }

        ; // BEGIN FADING IN/OUT OF ALL ELEMENTS TO SHOW/HIDE

        $tohide.css('opacity', config.fade);
        $toshow.css('opacity', 1); // FOR EACH ELEMENT BEING SHOWN, CALCULATE ITS TRAJECTORY BY SUBTRACTING
        // ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
        // ALSO ADD SPEED AND EASING

        $toshow.each(function () {
          var data = this.data;
          data.tX = data.finalPos.left - data.showInterPos.left;
          data.tY = data.finalPos.top - data.showInterPos.top;
          var toShowCSS = {};

          for (var i = 0; i < 2; i++) {
            var a = i == 0 ? a = config.prefix : '';
            toShowCSS[a + 'transition-property'] = a + 'transform, ' + a + 'filter, opacity';
            toShowCSS[a + 'transition-timing-function'] = config.easing + ', linear, linear';
            toShowCSS[a + 'transition-duration'] = speed + 'ms';
            toShowCSS[a + 'transition-delay'] = '0';
            toShowCSS[a + 'transform'] = 'translate(' + data.tX + 'px,' + data.tY + 'px)';
            toShowCSS[a + 'filter'] = 'none';
          }

          ;
          $(this).css('-webkit-transition', 'all ' + speed + 'ms ' + config.easingFallback).css(toShowCSS);
        }); // FOR EACH PRE-EXISTING ELEMENT, IF IT HAS A FINAL POSITION, CALCULATE 
        // ITS TRAJETORY BY SUBTRACTING ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
        // ALSO ADD SPEED AND EASING

        $pre.each(function () {
          var data = this.data;
          data.tX = data.finalPrePos.left != 0 ? data.finalPrePos.left - data.preInterPos.left : 0;
          data.tY = data.finalPrePos.left != 0 ? data.finalPrePos.top - data.preInterPos.top : 0;
          var preCSS = {};

          for (var i = 0; i < 2; i++) {
            var a = i == 0 ? a = config.prefix : '';
            preCSS[a + 'transition'] = 'all ' + speed + 'ms ' + config.easing;
            preCSS[a + 'transform'] = 'translate(' + data.tX + 'px,' + data.tY + 'px)';
          }

          ;
          $(this).css('-webkit-transition', 'all ' + speed + 'ms ' + config.easingFallback).css(preCSS);
        }); // BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN

        var toHideCSS = {};

        for (var i = 0; i < 2; i++) {
          var a = i == 0 ? a = config.prefix : '';
          toHideCSS[a + 'transition'] = 'all ' + speed + 'ms ' + config.easing + ', ' + a + 'filter ' + speed + 'ms linear, opacity ' + speed + 'ms linear';
          toHideCSS[a + 'transform'] = config.scale + ' ' + config.rotateX + ' ' + config.rotateY + ' ' + config.rotateZ;
          toHideCSS[a + 'filter'] = config.blur + ' ' + config.grayscale;
          toHideCSS['opacity'] = config.fade;
        }

        ;
        $tohide.css(toHideCSS); // ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:

        $par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd', function (e) {
          if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1) {
            if (mixSelector.indexOf('.') > -1) {
              // IF MIXSELECTOR IS A CLASS NAME
              if ($(e.target).hasClass(mixSelector.replace('.', ''))) {
                resetFilter();
              }

              ;
            } else {
              // IF MIXSELECTOR IS A TAG
              if ($(e.target).is(mixSelector)) {
                resetFilter();
              }

              ;
            }

            ;
          }

          ;
        });
      }, 10); // LAST RESORT EMERGENCY FAILSAFE

      config.failsafe = setTimeout(function () {
        if (config.mixing) {
          resetFilter();
        }

        ;
      }, speed + 400);
    } else {
      // ELSE IF NOTHING TO SHOW, AND EVERYTHING TO BE HIDDEN
      // IF WE ARE RESIZING CONTAINER, SET ITS STARTING HEIGHT
      if (config.resizeContainer) $par.css('height', config.origHeight + 'px'); // IF IE, FUCK OFF, AND THEN GO HOME

      if (!window.atob) {
        resetFilter();
        return false;
      }

      ; // GROUP ALL ELEMENTS TO HIDE INTO JQUERY OBJECT

      $tohide = $hide; // WRAP ANIMATION FUNCTIONS IN A 10ms DELAY TO PREVENT RACE CONDITION

      var delay = setTimeout(function () {
        // APPLY PERSPECTIVE TO CONTAINER
        $par.css(config.perspective); // APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT

        if (config.resizeContainer) {
          var containerCSS = {};

          for (var i = 0; i < 2; i++) {
            var a = i == 0 ? a = config.prefix : '';
            containerCSS[a + 'transition'] = 'height ' + speed + 'ms ease-in-out';
            containerCSS['height'] = config.minHeight + 'px';
          }

          ;
          $par.css(containerCSS);
        }

        ; // APPLY TRANSITION TIMING TO ALL TARGET ELEMENTS

        $targets.css(config.transition); // GET TOTAL NUMBER OF ELEMENTS TO HIDE

        var totalHide = $hide.length; // IF SOMETHING TO HIDE:

        if (totalHide) {
          // BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN
          var toHideCSS = {};

          for (var i = 0; i < 2; i++) {
            var a = i == 0 ? a = config.prefix : '';
            toHideCSS[a + 'transform'] = config.scale + ' ' + config.rotateX + ' ' + config.rotateY + ' ' + config.rotateZ;
            toHideCSS[a + 'filter'] = config.blur + ' ' + config.grayscale;
            toHideCSS['opacity'] = config.fade;
          }

          ;
          $tohide.css(toHideCSS); // ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:

          $par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd', function (e) {
            if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1) {
              $cont.addClass(config.failClass);
              resetFilter();
            }

            ;
          });
        } else {
          // ELSE, WE'RE DONE MIXING
          config.mixing = false;
        }

        ;
      }, 10);
    }

    ; // CLEAN UP AND RESET FUNCTION

    function resetFilter() {
      // UNBIND TRANSITION END EVENTS FROM CONTAINER
      $par.unbind('webkitTransitionEnd transitionend otransitionend oTransitionEnd'); // IF A SORT ARGUMENT HAS BEEN SENT, SORT ELEMENTS TO THEIR FINAL ORDER

      if (sortby) {
        sort(sortby, order, $cont, config);
      }

      ; // EMPTY SORTING ARRAYS

      config.startOrder = [], config.newOrder = [], config.origSort = [], config.checkSort = []; // REMOVE INLINE STYLES FROM ALL TARGET ELEMENTS AND SLAM THE BRAKES ON

      $targets.removeStyle(config.prefix + 'filter, filter, ' + config.prefix + 'transform, transform, opacity, display').css(config.clean).removeAttr('data-checksum'); // BECAUSE IE SUCKS

      if (!window.atob) {
        $targets.css({
          display: 'none',
          opacity: '0'
        });
      }

      ; // REMOVE HEIGHT FROM CONTAINER ONLY IF RESIZING

      var remH = config.resizeContainer ? 'height' : ''; // REMOVE INLINE STYLES FROM CONTAINER

      $par.removeStyle(config.prefix + 'transition, transition, ' + config.prefix + 'perspective, perspective, ' + config.prefix + 'perspective-origin, perspective-origin, ' + remH); // ADD FINAL DISPLAY PROPERTIES AND OPACITY TO ALL SHOWN ELEMENTS
      // CACHE CURRENT LAYOUT MODE & SORT FOR NEXT MIX

      if (config.layoutMode == 'list') {
        $show.css({
          display: config.targetDisplayList,
          opacity: '1'
        });
        config.origDisplay = config.targetDisplayList;
      } else {
        $show.css({
          display: config.targetDisplayGrid,
          opacity: '1'
        });
        config.origDisplay = config.targetDisplayGrid;
      }

      ;
      config.origLayout = config.layoutMode;
      var wait = setTimeout(function () {
        // LET GO OF THE BRAKES
        $targets.removeStyle(config.prefix + 'transition, transition'); // WE'RE DONE MIXING

        config.mixing = false; // FIRE "ONMIXEND" CALLBACK

        if (typeof config.onMixEnd == 'function') {
          var output = config.onMixEnd.call(this, config); // UPDATE CONFIG IF DATA RETURNED

          config = output ? output : config;
        }

        ;
      });
    }

    ;
  }

  ; // SORT FUNCTION

  function sort(sortby, order, $cont, config) {
    // COMPARE BY ATTRIBUTE
    function compare(a, b) {
      var sortAttrA = isNaN(a.attr(sortby) * 1) ? a.attr(sortby).toLowerCase() : a.attr(sortby) * 1,
          sortAttrB = isNaN(b.attr(sortby) * 1) ? b.attr(sortby).toLowerCase() : b.attr(sortby) * 1;
      if (sortAttrA < sortAttrB) return -1;
      if (sortAttrA > sortAttrB) return 1;
      return 0;
    }

    ; // REBUILD DOM

    function rebuild(element) {
      if (order == 'asc') {
        $sortWrapper.prepend(element).prepend(' ');
      } else {
        $sortWrapper.append(element).append(' ');
      }

      ;
    }

    ; // RANDOMIZE ARRAY

    function arrayShuffle(oldArray) {
      var newArray = oldArray.slice();
      var len = newArray.length;
      var i = len;

      while (i--) {
        var p = parseInt(Math.random() * len);
        var t = newArray[i];
        newArray[i] = newArray[p];
        newArray[p] = t;
      }

      ;
      return newArray;
    }

    ; // SORT

    $cont.find(config.targetSelector).wrapAll('<div class="mix_sorter"/>');
    var $sortWrapper = $cont.find('.mix_sorter');

    if (!config.origSort.length) {
      $sortWrapper.find(config.targetSelector + ':visible').each(function () {
        $(this).wrap('<s/>');
        config.origSort.push($(this).parent().html().replace(/\s+/g, ''));
        $(this).unwrap();
      });
    }

    ;
    $sortWrapper.empty();

    if (sortby == 'reset') {
      $.each(config.startOrder, function () {
        $sortWrapper.append(this).append(' ');
      });
    } else if (sortby == 'default') {
      $.each(config.origOrder, function () {
        rebuild(this);
      });
    } else if (sortby == 'random') {
      if (!config.newOrder.length) {
        config.newOrder = arrayShuffle(config.startOrder);
      }

      ;
      $.each(config.newOrder, function () {
        $sortWrapper.append(this).append(' ');
      });
    } else if (sortby == 'custom') {
      $.each(order, function () {
        rebuild(this);
      });
    } else {
      // SORT BY ATTRIBUTE
      if (typeof config.origOrder[0].attr(sortby) === 'undefined') {
        console.log('No such attribute found. Terminating');
        return false;
      }

      ;

      if (!config.newOrder.length) {
        $.each(config.origOrder, function () {
          config.newOrder.push($(this));
        });
        config.newOrder.sort(compare);
      }

      ;
      $.each(config.newOrder, function () {
        rebuild(this);
      });
    }

    ;
    config.checkSort = [];
    $sortWrapper.find(config.targetSelector + ':visible').each(function (i) {
      var $t = $(this);

      if (i == 0) {
        // PREVENT COMPARE RETURNING FALSE POSITIVES ON ELEMENTS WITH NO CLASS/ATTRIBUTES
        $t.attr('data-checksum', '1');
      }

      ;
      $t.wrap('<s/>');
      config.checkSort.push($t.parent().html().replace(/\s+/g, ''));
      $t.unwrap();
    });
    $cont.find(config.targetSelector).unwrap();
  }

  ; // FIND VENDOR PREFIX

  function prefix(el) {
    var prefixes = ["Webkit", "Moz", "O", "ms"];

    for (var i = 0; i < prefixes.length; i++) {
      if (prefixes[i] + "Transition" in el.style) {
        return prefixes[i];
      }

      ;
    }

    ;
    return "transition" in el.style ? "" : false;
  }

  ; // REMOVE SPECIFIC STYLES

  $.fn.removeStyle = function (style) {
    return this.each(function () {
      var obj = $(this);
      style = style.replace(/\s+/g, '');
      var styles = style.split(',');
      $.each(styles, function () {
        var search = new RegExp(this.toString() + '[^;]+;?', 'g');
        obj.attr('style', function (i, style) {
          if (style) return style.replace(search, '');
        });
      });
    });
  }; // COMPARE ARRAYS 


  function compareArr(a, b) {
    if (a.length != b.length) return false;

    for (var i = 0; i < b.length; i++) {
      if (a[i].compare) {
        if (!a[i].compare(b[i])) return false;
      }

      ;
      if (a[i] !== b[i]) return false;
    }

    ;
    return true;
  }

  ; // BUILD FILTER ARRAY(S)

  function buildFilterArray(str) {
    // CLEAN FILTER STRING
    str = str.replace(/\s{2,}/g, ' '); // FOR EACH PEROID SEPERATED CLASS NAME, ADD STRING TO FILTER ARRAY

    var arr = str.split(' '); // IF ALL, REPLACE WITH MIX_ALL

    $.each(arr, function (i) {
      if (this == 'all') arr[i] = 'mix_all';
    });
    if (arr[0] == "") arr.shift();
    return arr;
  }

  ;
})(jQuery);

/***/ }),

/***/ "./app/assets/pluton/javascripts/vendor/jquery.placeholder.js":
/*!********************************************************************!*\
  !*** ./app/assets/pluton/javascripts/vendor/jquery.placeholder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! http://mths.be/placeholder v2.0.7 by @mathias */
;

(function (window, document, $) {
  var isInputSupported = 'placeholder' in document.createElement('input');
  var isTextareaSupported = 'placeholder' in document.createElement('textarea');
  var prototype = $.fn;
  var valHooks = $.valHooks;
  var propHooks = $.propHooks;
  var hooks;
  var placeholder;

  if (isInputSupported && isTextareaSupported) {
    placeholder = prototype.placeholder = function () {
      return this;
    };

    placeholder.input = placeholder.textarea = true;
  } else {
    placeholder = prototype.placeholder = function () {
      var $this = this;
      $this.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({
        'focus.placeholder': clearPlaceholder,
        'blur.placeholder': setPlaceholder
      }).data('placeholder-enabled', true).trigger('blur.placeholder');
      return $this;
    };

    placeholder.input = isInputSupported;
    placeholder.textarea = isTextareaSupported;
    hooks = {
      'get': function get(element) {
        var $element = $(element);
        var $passwordInput = $element.data('placeholder-password');

        if ($passwordInput) {
          return $passwordInput[0].value;
        }

        return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
      },
      'set': function set(element, value) {
        var $element = $(element);
        var $passwordInput = $element.data('placeholder-password');

        if ($passwordInput) {
          return $passwordInput[0].value = value;
        }

        if (!$element.data('placeholder-enabled')) {
          return element.value = value;
        }

        if (value == '') {
          element.value = value; // Issue #56: Setting the placeholder causes problems if the element continues to have focus.

          if (element != document.activeElement) {
            // We can't use `triggerHandler` here because of dummy text/password inputs :(
            setPlaceholder.call(element);
          }
        } else if ($element.hasClass('placeholder')) {
          clearPlaceholder.call(element, true, value) || (element.value = value);
        } else {
          element.value = value;
        } // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363


        return $element;
      }
    };

    if (!isInputSupported) {
      valHooks.input = hooks;
      propHooks.value = hooks;
    }

    if (!isTextareaSupported) {
      valHooks.textarea = hooks;
      propHooks.value = hooks;
    }

    $(function () {
      // Look for forms
      $(document).delegate('form', 'submit.placeholder', function () {
        // Clear the placeholder values so they don't get submitted
        var $inputs = $('.placeholder', this).each(clearPlaceholder);
        setTimeout(function () {
          $inputs.each(setPlaceholder);
        }, 10);
      });
    }); // Clear placeholder values upon page reload

    $(window).bind('beforeunload.placeholder', function () {
      $('.placeholder').each(function () {
        this.value = '';
      });
    });
  }

  function args(elem) {
    // Return an object of element attributes
    var newAttrs = {};
    var rinlinejQuery = /^jQuery\d+$/;
    $.each(elem.attributes, function (i, attr) {
      if (attr.specified && !rinlinejQuery.test(attr.name)) {
        newAttrs[attr.name] = attr.value;
      }
    });
    return newAttrs;
  }

  function clearPlaceholder(event, value) {
    var input = this;
    var $input = $(input);

    if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
      if ($input.data('placeholder-password')) {
        $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id')); // If `clearPlaceholder` was called from `$.valHooks.input.set`

        if (event === true) {
          return $input[0].value = value;
        }

        $input.focus();
      } else {
        input.value = '';
        $input.removeClass('placeholder');
        input == document.activeElement && input.select();
      }
    }
  }

  function setPlaceholder() {
    var $replacement;
    var input = this;
    var $input = $(input);
    var id = this.id;

    if (input.value == '') {
      if (input.type == 'password') {
        if (!$input.data('placeholder-textinput')) {
          try {
            $replacement = $input.clone().attr({
              'type': 'text'
            });
          } catch (e) {
            $replacement = $('<input>').attr($.extend(args(this), {
              'type': 'text'
            }));
          }

          $replacement.removeAttr('name').data({
            'placeholder-password': $input,
            'placeholder-id': id
          }).bind('focus.placeholder', clearPlaceholder);
          $input.data({
            'placeholder-textinput': $replacement,
            'placeholder-id': id
          }).before($replacement);
        }

        $input = $input.removeAttr('id').hide().prev().attr('id', id).show(); // Note: `$input[0] != input` now!
      }

      $input.addClass('placeholder');
      $input[0].value = $input.attr('placeholder');
    } else {
      $input.removeClass('placeholder');
    }
  }
})(this, document, jQuery);

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

/***/ 2:
/*!****************************************************!*\
  !*** multi ./app/assets/pluton/javascripts/app.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/weston/html/ruby/locomotive_cms/wagon_kitchen_sink/app/assets/pluton/javascripts/app.js */"./app/assets/pluton/javascripts/app.js");


/***/ })

/******/ });