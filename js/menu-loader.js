$(function(){
      $("#include-rco-header").load("inc/rco-header.html"); 
      // $("#include-rco-footer").load("inc/rco-footer.html"); 
});

$(document).ready(function () {
        $('li').click(function (e) {
        	alert("clicked");
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        }); 

  /* Scroll on Top */
  $('.scrolltotop, .navbar-brand').click(function(evt){
    $('html, body').animate({scrollTop: '0'}, 1200, 'easeInOutCubic');
    pde(evt);
  });
  /* Smooth Scroll */
  jQuery('#my-nav li').bind('click',function(event){
      var anchor = jQuery(this).find('a');
      jQuery('#my-nav li').removeClass('active');
      jQuery(this).addClass('active');
      jQuery('html, body').stop().animate({
          scrollTop: jQuery(anchor.attr('href')).offset().top-50
      }, 1500,'easeInOutExpo');
      event.preventDefault();
  });
  /* Scroll with class */
  jQuery('.scroll').bind('click',function(event){
      var anchor = jQuery(this);
    jQuery('html, body').stop().animate({
          scrollTop: jQuery(anchor.attr('href')).offset().top-50
      }, 1500,'easeInOutExpo');
      event.preventDefault();
  });         
    });

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

//change the navbar depending on the scroll position
 $(document).scroll( function() {
  
   var value = $(this).scrollTop();
   console.log(value);
   if ( value > 100  ){
      console.log("do something");
      $nav.animate({height:45},"slow");
      $('nav').css('background-color', 'red');
      $('nav').removeClass('navbar-fixed-top');
      $('body').css('background-color', 'red');
      navIsBig = false;

   } else if (value <= 100  ) {
      $nav.animate({height:100},"slow");
      $('nav').css('background-color', 'white');
      navIsBig = true;
  }
 });