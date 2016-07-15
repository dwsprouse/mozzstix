$(document).ready(function() {
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		$('nav').toggleClass('open');
		$('#nav-items').toggleClass('open');
	});
	var divs = $('div[id^="option-"]').hide(),
	i = 0;
	(function cycle() { 
		divs.eq(i).fadeIn(400)
			.delay(1000)
			.fadeOut(400, cycle);
		i = ++i % divs.length;
	})();

	$(window).scroll(function () {
		lockSidebar();
	});
	$(window).resize(function () {
		lockSidebar();
		closeHamburger();
	});
	$( window ).on( "orientationchange", function() {
		closeHamburger();
	});

	var heroH = 450;
	var sidebarH = $('.sidebar').height() + 200;

	function lockSidebar() {
		if ($(window).height() > sidebarH) {
			if ($(window).scrollTop() > heroH) {
				$('.sidebar').addClass('locked-at-top');
				$('.sidebar').removeClass('locked-at-bottom');
			}
			if ($(window).scrollTop() <= heroH) {
				$('.sidebar').removeClass('locked-at-top');
			}
		} else {
			if ($(window).scrollTop() > heroH + sidebarH - $(window).height()) {
				$('.sidebar').addClass('locked-at-bottom');
				$('.sidebar').removeClass('locked-at-top');
			}
			if ($(window).scrollTop() <= heroH + sidebarH - $(window).height()) {
				$('.sidebar').removeClass('locked-at-bottom');
			}
		}
	}

	function closeHamburger() {
		if ($(window).width() > 767) {
			if ($('#hamburger').hasClass('open')) {
				$('#hamburger').toggleClass('open');
				$('nav').toggleClass('open');
				$('#nav-items').toggleClass('open');
			}
		}
	}
 });