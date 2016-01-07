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