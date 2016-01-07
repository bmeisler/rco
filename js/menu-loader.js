$(function(){
      $("#include-rco-header").load("inc/rco-header.html"); 
});

$(document).ready(function () {
        $('li').click(function (e) {
        	alert("clicked");
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
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