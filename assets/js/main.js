$(function () {
	/*
			https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
			===========================*/
	// $("html").easeScroll({
	// 	frameRate: 60,
	// 	animationTime: 1000,
	// 	stepSize: 90,
	// 	pulseAlgorithm: 1,
	// 	pulseScale: 8,
	// 	pulseNormalize: 1,
	// 	accelerationDelta: 20,
	// 	accelerationMax: 1,
	// 	keyboardSupport: true,
	// 	arrowScroll: 50,
	// 	touchpadSupport: true,
	// 	fixedBackground: true
	// });

	let mainSlider = function () {
		if ($('#js-main-slider').length > 0) {
			$('#js-main-slider').slick({
				arrows: false,
				dots: false
			});
		}
	};
	mainSlider();

	let sandwitch = function () {
		$('.sandwitch').on('click', function () {
			// $('#js-main-menu').slideToggle();
			$('#js-main-menu').fadeToggle();

			$(this).toggleClass('sandwitch--active');
			$(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
		});
	};
	sandwitch();

	if ($('#js-alte-bevande').length) {
		let mixer = mixitup('#js-alte-bevande');
	}

	let activeMenuItem = function () {
		let urlLink = window.location.pathname;

		$('#js-main-menu li a').each(function () {

			if('/' + $(this).attr('href') === urlLink){
				$(this).parent().addClass('current-menu-item');
			}
		});
	};
	activeMenuItem();

	let mixitupActiveMenuItem = function () {
		$();
	};
	mixitupActiveMenuItem();
});



