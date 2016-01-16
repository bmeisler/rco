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


});

 $(function(){
        // $.getJSON('names.json',function(data){
        //     console.log('success');
        //     $.each(data.employees,function(i,emp){
        //         $('#ticket-info').append('<li>'+emp.firstName+' '+emp.lastName+'</li>');
        //     });
        // }).error(function(){
        //     console.log('error');
        // });

        // $.getJSON('concerts.json',function(data){
        //     console.log('success');
        //     $.each(data.concerts,function(i,con){
        //         $('#ticket-info').append('<h4 class="rco-date">'+con.date+'</h4>'
        //           +' <p class="rco-pieces">'+con.performance+'</p>'
        //           +'<h2 class="rco-players">'+con.soloist+'</h2>'
        //           );
        //     });
        // }).error(function(){
        //     console.log('error');
        // });

        //  $.getJSON('concerts2.json',function(data){
        //     console.log('success');
        //     var fullString = '';
        //     $.each(data.concerts,function(i,con){
        //         fullString = '<h4 class="rco-date">'+con.date+'</h4>';
        //         var performances = con.performances;
        //           $.each(con.performances, function(index, value){
        //             console.log(value);
        //             fullString += '<p class="rco-pieces">' + value +'</p>';
        //           });
                  
        //           fullString += '<h2 class="rco-players">'+con.soloist+'</h2>';
        //         $('#ticket-info').append(fullString);
                

        //     });
        // }).error(function(){
        //     console.log('error');
        // });

        //  $.getJSON('concerts3.json',function(data){
        //     console.log('success');
        //     var fullString = '';
        //     $.each(data.concerts,function(i,con){
        //         fullString = '<h4 class="rco-date">'+con.date+'</h4>';
        //         var performances = con.performances;
        //           $.each(con.performances, function(index, value){
        //             console.log(value);
        //             fullString += '<p class="rco-pieces">' + value +'</p>';
        //           });

        //           $.each(con.soloists, function(index, value){
        //             console.log(value);
        //             fullString += '<h2 class="rco-players">' + value +'</h2>';
        //           });
                  
        //         $('#ticket-info').append(fullString);
                

        //     });
        // }).error(function(){
        //     console.log('error');
        // });

        //  $.getJSON('concerts4.json',function(data){
        //     console.log('success');
        //     var fullString = '';
        //     $.each(data.concerts,function(i,con){
        //         fullString = '<h4 class="rco-date">'+con.date+'</h4>';
              
        //         $.each(con.location, function(index, value){
        //             console.log(value);
        //             fullString += '<address><strong>'+value.name + '</strong><br>'
        //             + value.place + '<br>'
        //             + value.when + '</address>';
        //           });
                
                
        //           $.each(con.performances, function(index, value){
        //             console.log(value);
        //             fullString += '<p class="rco-pieces">' + value +'</p>';
        //           });

        //           $.each(con.soloists, function(index, value){
        //             console.log(value);
        //             fullString += '<h2 class="rco-players">' 
        //             + '<a href="musicians.php#' 
        //             + value.name + '"</a>' 
        //             +  '<em>' 
        //             + value.name 
        //             + '</em>, ' 
        //             + value.instrument + '</h2>';

        //             //<h2 class="rco-players"><a href="musicians.html#Alena Tsoi"><em>Alena Tsoi,</em></a> violin</h2>

        //           });
                  
        //         $('#ticket-info').append(fullString);
                

        //     });
        // }).error(function(){
        //     console.log('error');
        // });

  // $.getJSON('concerts5.json',function(data){
  //           console.log('success');
  //           var fullString = '';
  //           $.each(data.concerts,function(i,con){
  //               fullString = '<h4 class="rco-date">'+con.date+'</h4>';
              
  //               $.each(con.location, function(index, value){
  //                   console.log(value);
  //                   fullString += '<address><strong>'+value.name + '</strong><br>'
  //                   + value.place + '<br>'
  //                   + value.when + '</address>';
  //                 });
                
                
  //                 $.each(con.performances, function(index, value){
  //                   console.log(value);
  //                   // fullString += '<p class="rco-pieces">' + value +'</p>';

  //                   fullString += '<p class="rco-pieces">' 
  //                   + value.name 
  //                   +  ' - ' 
  //                   + value.piece;
  //                   + '</p>'

  //                 });

  //                 $.each(con.soloists, function(index, value){
  //                   console.log(value);
  //                   fullString += '<h2 class="rco-players">' 
  //                   + '<a href="musicians.php#' 
  //                   + value.name + '"</a>' 
  //                   +  '<em>' 
  //                   + value.name 
  //                   + '</em>, ' 
  //                   + value.instrument + '</h2>';

  //                   //<h2 class="rco-players"><a href="musicians.html#Alena Tsoi"><em>Alena Tsoi,</em></a> violin</h2>

  //                 });
                  
  //               $('#ticket-info').append(fullString);
                

  //           });
  //       }).error(function(){
  //           console.log('error');
  //       });
  //   });
$.getJSON('concerts6.json',function(data){
            console.log('success');
            var fullString = '';
            var currentString = '';
            var found = false;
            var nextConcertIndex=null;
            var nextConcertString = '';



            $.each(data.concerts,function(i,con){
                currentString = '<h4 class="rco-date">'+con.date+'</h4>';

                //compare today's date to the concert date, see if it's occurred yet
                var d = Date.parse(con.date);
                var t = Date.today();
                console.log(d);
                console.log(t);
                console.log(d >= t);
                if (d>=t && found==false){
                  found = true;
                  nextConcertIndex = i;
                }
              
                $.each(con.location, function(index, value){
                    //console.log(value);
                    currentString += '<address><strong>'+value.name + '</strong><br>'
                    + value.place + '<br>'
                    + value.when + '</address>';
                  });
                
                
                  $.each(con.performances, function(index, value){
                    //console.log(value);
                    // fullString += '<p class="rco-pieces">' + value +'</p>';

                    currentString += '<p class="rco-pieces">' 
                    + '<em>' + value.name + '</em>'
                    +  ' - ' 
                    + value.piece;
                    + '</p>'

                  });

                  $.each(con.soloists, function(index, value){
                    //console.log(value);
                    currentString += '<h2 class="rco-players">' 
                    + '<a href="musicians.php#' 
                    + value.name + '"</a>' 
                    +  '<em>' 
                    + value.name 
                    + '</em>, ' 
                    + value.instrument + '</h2>';

                    //<h2 class="rco-players"><a href="musicians.html#Alena Tsoi"><em>Alena Tsoi,</em></a> violin</h2>

                  });
                  
                $('#ticket-info').append(currentString);//build the string of the season's concert on the tickets page
                if (i==nextConcertIndex){
                    nextConcertString = currentString;
                }
                

            });
            $('#next-concert').append(nextConcertString);//put the next concert on the home page
        }).error(function(){
            console.log('error');
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