/*jslint browser: true*/ /*global  $*/
$(document).ready(function(){
	$(".flippinLogo").on('mouseover', function(e){
		$(this).addClass("flipTheLogo");
	});
	$(".flippinLogo").on('animationend', function(){
		$(this).removeClass("flipTheLogo");;
	})
});


