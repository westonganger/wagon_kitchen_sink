global.$ = global.jQuery = require('jquery');

var autosize = require('autosize/dist/autosize.js');
require("./vendor/jquery.tablesorter.js");
require("jquery-enable-disable/dist/jquery-enable-disable.js");

require("@rails/ujs").start();

/* Disabled because we use seperate asset bundles for each theme template */
//var Turbolinks = require("turbolinks");
//Turbolinks.start()

$(document).on('DOMContentLoaded turbolinks:load',  function(){
  /* Vertical Autosizing textarea tags */
  var textarea = $("textarea:not(.no-autosize)");
  textarea.not('.more-rows').prop('rows','1');
  autosize(textarea);

  $("a[href^='#'], a[href^='/#'], a[href^='tel'], a[href^='mailto']").attr('data-turbolinks','false');

  $('form').prop('autocomplete','off');

  $('table.table-sortable').tablesorter();
});

$(document).on('click','a[href^="#"]', function(event){
  var target = $($(this).attr('href'));

  if(target.length){
    event.preventDefault();
    $('html, body').animate({scrollTop: target.offset().top-25}, {duration: 1000, easing: ''});
  }

  $("#navbar-collapse").collapse('hide');
});

$(document).on("click", "a.slow, button.slow", function(){
  $("#loader").show();
});

$(document).on('submit', "form[enctype='multipart/form-data'], form.slow", function(){
  $("#loader").show();
});

/* Disabled because Turbolinks is so fast it doesnt require a loader */
/*
$(window).on('beforeunload', function(){
  if(!window.skipLoader){
    $('#loader').show();
  }
});
*/

/* If an input field has a pattern attribute, we expect it to contain a regular expression */
/* After a key is pressed, if the whole field does not match the regexp then we reject the last input key */
$(document).on('keydown', 'input[pattern]', function(e){
  var input = $(this);
  var oldVal = input.val();
  var regex = new RegExp(input.attr('pattern'), 'g');

  setTimeout(function(){
    var newVal = input.val();
    if(!regex.test(newVal)){
      input.val(oldVal); 
    }
  }, 0);
});

/* If a number input field has a maxlength attribute we limit the length of the input to the specified number of characters */
$(document).on('keydown', 'input[type=number][maxlength]', function(e){
  var input = $(this);
  var oldVal = input.val();
  var maxlength = Number(input.attr('maxlength'));

  setTimeout(function(){
    var newVal = input.val();
    if(newVal.length > maxlength){
      input.val(oldVal); 
    }
  }, 0);
});
