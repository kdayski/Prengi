$(document).ready(function(){
	$('.slider_inner').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 420,
				settings: {
					dots: false,
					arrows: false
				},
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false
				},
				breakpoint: 1200,
				settings: {
					dots: true,
					arrows: false
				}
			}
	  	]
	});
});