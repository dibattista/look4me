
/* animation.js/scrollTop */
<<<<<<< HEAD

$(document).ready(function(){
   $('.yolo').click(function(){
      $('html, body').animate({
       scrollTop: $($(this).attr('href', '#jean-michel')).offset().top
      }, 2000);
   });
});
=======
$( document ).ready(function() {
  $('a[href^="#"]').click(function(){
	var id = $(this).attr("href");
  var offset = $(id).offset().top 
$('html, body').animate({scrollTop: offset}, 'slow'); 
    return false;
  }); 


function(){
	$('a[href^=""]').onmouseover(){
		this.src='img/news:presse/img-presse2.png'
		onmouseout(){ this.src='img/news:presse/img-presse3.png'}
};
};

>>>>>>> 557e1e948d04b1ab5ce6c3b6e89ebc530bc9d7fa

