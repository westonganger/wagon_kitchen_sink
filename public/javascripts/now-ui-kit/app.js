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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/now-ui-kit/javascripts/app.js":
/*!**************************************************!*\
  !*** ./app/assets/now-ui-kit/javascripts/app.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var transparent = true;
var big_image;
var transparentDemo = true;
var fixedTop = false;
var navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;
var $navbar, scroll_distance, oVal;
var nowuiKit = {
  misc: {
    navbar_menu_visible: 0
  },
  checkScrollForTransparentNavbar: debounce(function () {
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
      }
    }
  }, 17),
  initNavbarImage: function initNavbarImage() {
    var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
    var background_image = $navbar.data('nav-image');

    if (background_image != undefined) {
      if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
        $navbar.css('background', "url('" + background_image + "')").removeAttr('data-nav-image').css('background-size', "cover").addClass('has-image');
      } else {
        $navbar.css('background', "").attr('data-nav-image', '' + background_image + '').css('background-size', "").removeClass('has-image');
      }
    }
  },
  initSliders: function initSliders() {
    // Sliders for demo purpose in refine cards section
    var slider = document.getElementById('sliderRegular');
    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });
    var slider2 = document.getElementById('sliderDouble');
    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
}; // Javascript just for Demo purpose, remove it from your project

var nowuiKitDemo = {
  checkScrollForParallax: debounce(function () {
    var current_scroll = $(this).scrollTop();
    oVal = $(window).scrollTop() / 3;
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });
  }, 6)
};

function scrollToDownload() {
  if ($('.section-download').length != 0) {
    $("html, body").animate({
      scrollTop: $('.section-download').offset().top
    }, 1000);
  }
}

$(document).on('turbolinks:load', function () {
  //  Activate the Tooltips
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(); // Activate Popovers and set color for popovers

  $('[data-toggle="popover"]').each(function () {
    color_class = $(this).data('color');
    $(this).popover({
      template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
  }); // Activate the image for the navbar-collapse

  nowuiKit.initNavbarImage();
  $navbar = $('.navbar[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500; // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

  if ($('.navbar[color-on-scroll]').length != 0) {
    nowuiKit.checkScrollForTransparentNavbar();
    $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar);
  }

  $('.form-control').on("focus", function () {
    $(this).parent('.input-group').addClass("input-group-focus");
  }).on("blur", function () {
    $(this).parent(".input-group").removeClass("input-group-focus");
  }); // Activate bootstrapSwitch

  $('.bootstrap-switch').each(function () {
    $this = $(this);
    data_on_label = $this.data('on-label') || '';
    data_off_label = $this.data('off-label') || '';
    $this.bootstrapSwitch({
      onText: data_on_label,
      offText: data_off_label
    });
  });

  if ($(window).width() >= 992) {
    big_image = $('.page-header-image[data-parallax="true"]');
    $(window).on('scroll', nowuiKitDemo.checkScrollForParallax);
  } // Activate Carousel


  $('.carousel').carousel({
    interval: 4000
  });
  $('.date-picker').each(function () {
    $(this).datepicker({
      templates: {
        leftArrow: '<i class="now-ui-icons arrows-1_minimal-left"></i>',
        rightArrow: '<i class="now-ui-icons arrows-1_minimal-right"></i>'
      }
    }).on('show', function () {
      $('.datepicker').addClass('open');
      datepicker_color = $(this).data('datepicker-color');

      if (datepicker_color.length != 0) {
        $('.datepicker').addClass('datepicker-' + datepicker_color + '');
      }
    }).on('hide', function () {
      $('.datepicker').removeClass('open');
    });
  });
}); // Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

;
$(window).on('resize', function () {
  nowuiKit.initNavbarImage();
});
$(document).on('click', '.navbar-toggler', function () {
  $toggle = $(this);

  if (nowuiKit.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    nowuiKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function () {
      $toggle.removeClass('toggled');
    }, 550);
  } else {
    setTimeout(function () {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function () {
      $('html').removeClass('nav-open');
      nowuiKit.misc.navbar_menu_visible = 0;
      setTimeout(function () {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });
    $('html').addClass('nav-open');
    nowuiKit.misc.navbar_menu_visible = 1;
  }
});

/***/ }),

/***/ 7:
/*!********************************************************!*\
  !*** multi ./app/assets/now-ui-kit/javascripts/app.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/weston/html/ruby/locomotive_cms/wagon_kitchen_sink/app/assets/now-ui-kit/javascripts/app.js */"./app/assets/now-ui-kit/javascripts/app.js");


/***/ })

/******/ });