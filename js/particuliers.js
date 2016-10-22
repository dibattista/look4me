$(document).ready(function() {
	$("#buttonfemmes").click(function(){
		$('#hommes').removeClass('active');
		$("#femmes").addClass("active");
		window.location.hash = "#femmes";
	});


	$("#buttonhommes").click(function(){
		$('#femmes').removeClass('active');
		$("#hommes").addClass("active");
		window.location.hash = "#hommes";
	});

});

document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(ev) {
    document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
  };
});





