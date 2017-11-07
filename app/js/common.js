$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Smitler">'
	},
	offCanvas: {
		position: 'right'
	}
});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:start', function(){
		$('.hamburger').removeClass('is-active');
	});
	
	
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		}, 200);
	});
	
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			800: {
				items: 2,
			},
			1100: {
				items: 3,
			}
		}
	}).on('changed.owl.carousel', function() {
		carouselService();
	});
		
	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths  = $(this);
					thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();
	
	$('select').selectize();
	
	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		dots: true,
		navText: false,
		autoHeight: true
	});
	
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.succes').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.succes').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	
	//Resize Window
	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {
		onResize()
	};
	
});