$(window).scroll(function() {
          if ($(document).scrollTop() > 100) {
            $('.secondul').addClass('navbar-fixed-top mynavbar');
             
          } else {
            $('.secondul').removeClass('navbar-fixed-top mynavbar');
          }
        });
$('ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(1000);
		});
		new WOW().init();
   
 
