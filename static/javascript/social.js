$(document).ready(function() {
	
	$(window).scroll(function () {
		moveSocial();
	});

	function moveSocial() {
		if ($(window).width() < 668) {
			if ($(window).scrollTop() > 230) {
				$('.social-module').addClass('in-nav');
				$('#logo').hide(); 
			}
			if ($(window).scrollTop() < 230) {
				$('.social-module').removeClass('in-nav');
				$('#logo').show();
			}
		} else {
			if ($(window).scrollTop() > 450) {
				$('.social-module').addClass('in-nav');
				$('#logo').hide(); 
			}
			if ($(window).scrollTop() < 450) {
				$('.social-module').removeClass('in-nav');
				$('#logo').show();
			}
		}
	}
});