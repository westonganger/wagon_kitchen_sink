// Tell Webpack to load the style
//import '../stylesheets/app.scss';

// Import the classes required to handle sections
import SectionsManager from '../../shared/javascripts/sections/_manager';
import * as Sections from './sections';

$(document).on('DOMContentLoaded turbolinks:load',  function(){
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('bootstrap-business', Sections.BootstrapBusiness);

  sectionsManager.start();
});
