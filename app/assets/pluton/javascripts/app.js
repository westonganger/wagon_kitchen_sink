// https://github.com/VodkaBears/Vide/issues/183#issuecomment-365603849
jQuery.fn.load = function(callback) { $(window).on("load", callback) };

import './vendor/jquery.mixitup.js';
import './vendor/bootstrap.js';
import './vendor/jquery.bxslider.js';
import './vendor/jquery.cslider.js';
import './vendor/jquery.placeholder.js';
import './vendor/jquery.inview.js';
import './vendor/appli.js';

// Tell Webpack to load the style
//import '../stylesheets/app.scss';

// Import the classes required to handle sections
import SectionsManager from '../../shared/javascripts/sections/_manager';
import * as Sections from './sections';

$(document).on('DOMContentLoaded turbolinks:load',  function(){
  // Load all the sections
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('contact', Sections.Contact);
  sectionsManager.registerSection('price', Sections.Price);
  sectionsManager.registerSection('clients', Sections.Client);
  sectionsManager.registerSection('about', Sections.About);
  sectionsManager.registerSection('portfolio', Sections.Portfolio);
  sectionsManager.registerSection('service', Sections.Service);
  sectionsManager.registerSection('home', Sections.Home);

  sectionsManager.start();
});
