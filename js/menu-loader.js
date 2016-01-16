//$(function(){
      //$("#include-rco-header").load("inc/rco-header.html"); 
      // $("#include-rco-footer").load("inc/rco-footer.html"); 
//});

$(document).ready(function () {
        $('li').click(function (e) {
        	  //alert("clicked");
            // var anchor = jQuery(this).find('a');
            // var url = anchor[0].href;

            // //alert(url); 
            // window.location = url; 
            // $('ul.nav > li').removeClass('active');
            // $(this).addClass('active'); 
            // e.preventDefault();   
                      
        }); 

        /* Scroll with class */
        $('.scroll').bind('click',function(event){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top-50
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });  




        $j.getJSON(url +"?api_key=9e1b08f9af16f8d7c20c0dd0aeb4749a",
              function(data) {

                  var items = [];
                  var summary;

                  $j.each(data.results, function(index, currentMovie){
                    console.log(currentMovie.title);

                    // image = "http://image.tmdb.org/t/p/w600" + currentMovie.backdrop_path;
                    // if(image !==null){
                    //   console.log("image: " + image);
                    // }
                    //TO DO: handle 400 error for missing images - some sort of try/catch
                    if (currentMovie.overview !==null){
                      summary = currentMovie.overview;
                    }else{
                      summary = "No summary at this time."
                    }

                    items.push("<div class='movie-box'><h3 class='movie-title'>" + currentMovie.title + "</h3>" + summary
                       + "<br/><em>release date: </em>" + currentMovie.release_date + "<br/><a class='btn btn-ticket btn-primary btn-small' href='http://www.fandango.com/search/?q=" + currentMovie.title + "' target='_blank'>" + "Buy tickets" + "</a>" + "<figure class='figure-medium-left'><img src ='http://image.tmdb.org/t/p/w600" + currentMovie.backdrop_path +"'/>" +
                      "</figure></div>" + "<hr/>");
                  })

                  $j('.movie-list').remove();

                  $j("<ul/>", {
                      "class": "movie-list",
                      html: items.join("")
                  }).appendTo(".span8");
              });


});

// $('#myTab a').click(function (e) {
//   e.preventDefault();
//   $(this).tab('show');
// })
$(document).scroll(function (){ 
  var value = $(this).scrollTop();
  //console.log(value);
  /* Minified bar */
  if ( value > 100 ){
    $("#top-menu").addClass('minified');
  } else {
    $("#top-menu").removeClass('minified');
  }
  if ( value > 100 ){
    console.log("make it static")
    $("#top-menu").addClass('navbar-fixed-top');
    $("#top-menu").removeClass('navbar-static-top');
  } else {
    $("#top-menu").removeClass('navbar-fixed-top');
    $("#top-menu").addClass('navbar-static-top');
  }
});