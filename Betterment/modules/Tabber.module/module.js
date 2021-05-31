//variables
var tabs = $('ul.tabs');
var tab = $('.tab');
var slides = $('.slides');
var slide = $('.slides .slide');

// Tab Click Function
  $('.tab').click(function(){
    var iteration = $(this).attr('iteration');
    $('.tab').removeClass('active');
    $(this).addClass('active');
    console.log('iteration');
    $('.slide').removeClass('active');
    $('.slide-' + iteration).addClass('active');
  });


