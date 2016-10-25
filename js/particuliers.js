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





