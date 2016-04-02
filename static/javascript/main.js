$(document).ready(function() {

	var divs = $('div[id^="option-"]').hide(),
	    i = 0;
	(function cycle() { 
	    divs.eq(i).fadeIn(400)
	              .delay(1000)
	              .fadeOut(400, cycle);
	    i = ++i % divs.length;
	})();

  $(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
      $('.sidebar').addClass('locked-at-top');
    }
    if ($(window).scrollTop() < 451) {
      $('.sidebar').removeClass('locked-at-top');
    }
  });


 });