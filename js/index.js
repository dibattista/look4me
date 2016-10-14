
/* animation.js/scrollTop */

$(document).ready(function(){
   $('.yolo').click(function(){
      $('html, body').animate({
       scrollTop: $($(this).attr('href', '#jean-michel')).offset().top
      }, 2000);
   });
});

