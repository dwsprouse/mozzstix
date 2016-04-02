$(document).ready(function() {
	// $.ajaxSetup({ cache: true });
	// $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
	// FB.init({
	// 	appId: '{your-app-id}',
	// 	version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
	// });     
	// $('#loginbutton,#feedbutton').removeAttr('disabled');
	// FB.getLoginStatus(updateStatusCallback);
 //  });
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