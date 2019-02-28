/*
Author       : 
Template Name: Guident Event template
Version      : 1.0
*/


// Preloader
$(window).load(function () {
	$("#loader .icon").fadeOut();
	$("#loader").fadeOut("slow");
});

jQuery(function ($) {
	"use strict";
	/*START MENU JS*/
	$(window).on('scroll', function () {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		}
		else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
	$('a.page-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 10
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
	
	/* jquery scroll spy	*/
	jQuery('body').scrollspy({
			target: '.navbar-fixed-top'
		})
		/* Closes the Responsive Menu on Menu Item Click*/
	$('.navbar-collapse ul li a').on('click', function () {
		$('.navbar-toggle:visible').click();
	});
	
	/*END MENU JS*/
	
	// =========== wow aniamation========================
	new WOW().init();
	//	 custom owl carousel pricing
	$('.loop').owlCarousel({
		center: true
		, autoplay: true
		, items: 2
		, dots: true
		, loop: true
		, margin: 10
		, responsive: {
			600: {
				items: 4
			}
		}
	});
});