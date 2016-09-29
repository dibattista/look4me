
/* animation.js/scrollTop */

$('a[href^="#"]').click(function(){
	var jean-michel = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$('#jean-michel').offset().top
	}, 5000);
	return false;
});





/*$(document).ready(function() {
   
    $('.yolo').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 500);
        return false;
    });

});*/


/*$(document).ready(function(){
   $('.yolo').click(function(){
      $('html, body').animate({
       scrollTop: $($(this).attr('href','#jean-michel')).offset().top
      }, 2000);
       
   });
});*/

