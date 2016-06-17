$(document).ready(function(){
	var waypoint = new Waypoint({
  		element: document.getElementById('header'),
		handler: function() {
		   $('.logo').addClass('animated lightSpeedIn');
		   $('#nav-container').addClass('animated fadeInUp');
		   $('#hero-container').addClass('animated fadeInDown');
		   $('.button-1').addClass('animated fadeInLeft');
		   $('.button-2').addClass('animated fadeInRight');
		   $('.rabbit-icon img').addClass('animated fadeInUp');
		   $('#footer').addClass('animated fadeInUp');
		}
	})

	$('.logo').hover(function(){
		$('.logo img').toggleClass('animated pulse');
	});

	$('#nav-container li').hover(function(){
		$(this).toggleClass('animated jello');
	});

});