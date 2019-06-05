// Tell Webpack to load the style
//import '../stylesheets/app.scss';

import './vendor/jquery.easing.1.3';
require('bootstrap-datepicker');
import './vendor/jquery.waypoints.min';
import './vendor/jquery.stellar.min';
require('flexslider');

// Import the classes required to handle sections
import SectionsManager from '../../shared/javascripts/sections/_manager';
import * as Sections from './sections';

$(document).on('DOMContentLoaded turbolinks:load', event => {
  // Load all the sections
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('footer', Sections.Footer);
  sectionsManager.registerSection('reservation', Sections.Reservation);
  sectionsManager.registerSection('events', Sections.Event);
  sectionsManager.registerSection('menu', Sections.Menu);
  sectionsManager.registerSection('features', Sections.Feature);
  sectionsManager.registerSection('about', Sections.About);
  sectionsManager.registerSection('home', Sections.Home);

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
  goToTop();


  // Animations
  homeAnimate();
});

// iPad and iPod detection
var isiPad = function(){
  return (navigator.platform.indexOf("iPad") != -1);
};

var isiPhone = function(){
  return (
    (navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1)
  );
};

var fullHeight = function() {
  if ( !isiPad() && !isiPhone() ) {
    $('.js-fullheight').css('height', $(window).height());

    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    })
  }
};

var sliderMain = function() {

  $('#fh5co-home .flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 5000
  });

  $('#fh5co-home .flexslider .slides > li').css('height', $(window).height());
  $(window).resize(function(){
    $('#fh5co-home .flexslider .slides > li').css('height', $(window).height());
  });

};

var sliderSayings = function() {
  $('#fh5co-sayings .flexslider').flexslider({
    animation: "slide",
    slideshowSpeed: 5000,
    directionNav: false,
    controlNav: true,
    smoothHeight: true,
    reverse: true
  });
}

var offcanvasMenu = function() {
  $('body').prepend('<div id="fh5co-offcanvas" />');
  $('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');

  $('.fh5co-main-nav .fh5co-menu-1 a, .fh5co-main-nav .fh5co-menu-2 a').each(function(){

    var $this = $(this);

    $('#fh5co-offcanvas').append($this.clone());

  });
  // $('#fh5co-offcanvas').append
};

var mainMenuSticky = function() {

  var sticky = $('.js-sticky');

  sticky.css('height', sticky.height());
  $(window).resize(function(){
    sticky.css('height', sticky.height());
  });

  var $section = $('.fh5co-main-nav');

  $section.waypoint(function(direction) {

    if (direction === 'down') {

      $section.css({
        'position' : 'fixed',
        'top' : 0,
        'width' : '100%',
        'z-index' : 99999
      }).addClass('fh5co-shadow');;

    }

  }, {
    offset: '0px'
  });

  $('.js-sticky').waypoint(function(direction) {
    if (direction === 'up') {
      $section.attr('style', '').removeClass('fh5co-shadow');
    }
  }, {
    offset: function() { return -$(this.element).height() + 69; }
  });

};

// Parallax
var parallax = function() {

  $(window).stellar();

};


// Burger Menu
var burgerMenu = function() {

  $('body').on('click', '.js-fh5co-nav-toggle', function(event){

    var $this = $(this);

    $('body').toggleClass('fh5co-overflow offcanvas-visible');
    $this.toggleClass('active');
    event.preventDefault();

  });

};

var scrolledWindow = function() {

  $(window).scroll(function(){

    var scrollPos = $(this).scrollTop();


    $('#fh5co-home .fh5co-text').css({
      'opacity' : 1-(scrollPos/300),
      'margin-top' : (-212) + (scrollPos/1)
    });

    $('#fh5co-home .flexslider .fh5co-overlay').css({
      'opacity' : (.5)+(scrollPos/2000)
    });

    if (scrollPos > 300) {
      $('#fh5co-home .fh5co-text').css('display', 'none');
    } else {
      $('#fh5co-home .fh5co-text').css('display', 'block');
    }


  });

  $(window).resize(function() {
    if ( $('body').hasClass('offcanvas-visible') ) {
      $('body').removeClass('offcanvas-visible');
      $('.js-fh5co-nav-toggle').removeClass('active');
    }
  });

};


var goToTop = function() {

  $('.js-gotop').on('click', function(event){

    event.preventDefault();

    $('html, body').animate({
      scrollTop: $('html').offset().top
    }, 500);

    return false;
  });

};


// Page Nav
var clickMenu = function() {
  var topVal = ( $(window).width() < 769 ) ? 0 : 58;

  $(window).resize(function(){
    topVal = ( $(window).width() < 769 ) ? 0 : 58;
  });
  $('.fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])').click(function(event){
    var section = $(this).data('nav-section');

    if ( $('div[data-section="' + section + '"]').length ) {

      $('html, body').animate({
        scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
      }, 500);

    }

    event.preventDefault();

    // return false;
  });


};

// Reflect scrolling in navigation
var navActive = function(section) {

  $('.fh5co-main-nav a[data-nav-section], #fh5co-offcanvas a[data-nav-section]').removeClass('active');
  $('.fh5co-main-nav, #fh5co-offcanvas').find('a[data-nav-section="'+section+'"]').addClass('active');

};

var navigationSection = function() {

  var $section = $('div[data-section]');

  $section.waypoint(function(direction) {
    if (direction === 'down') {
      navActive($(this.element).data('section'));
    }

  }, {
    offset: '150px'
  });

  $section.waypoint(function(direction) {
    if (direction === 'up') {
      navActive($(this.element).data('section'));
    }
  }, {
    offset: function() { return -$(this.element).height() + 155; }
  });

};


// Animations
var homeAnimate = function() {
  if ( $('#fh5co-home').length > 0 ) {

    $('#fh5co-home').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('animated') ) {


        setTimeout(function() {
          $('#fh5co-home .to-animate').each(function( k ) {
            var el = $(this);

            setTimeout ( function () {
              el.addClass('fadeInUp animated');
            },  k * 200, 'easeInOutExpo' );

          });
        }, 200);


        $(this.element).addClass('animated');

      }
    } , { offset: '80%' } );

  }
};
