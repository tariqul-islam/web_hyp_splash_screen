/*
Website Splash
Simple Splash Screen for Websites

Tariqul Islam Ponir
ponir(dot)bd(at)hotmail(dot)com
*/

$(document).ready( function(){

	$("#hyp_splash_terminate").on("click", function(){
		$("#hyp_splash_screen").toggle(1000);
		$("html").css("overflow", "visible");
		return false;
	});
});