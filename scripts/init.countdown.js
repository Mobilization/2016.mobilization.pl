/** *************Init JS*********************

    TABLE OF CONTENTS
	---------------------------
	Notify Me
	IE9 Pleaceholder Support
	Preloader
	Counter JS
	Only play video on desktop devices
 ** ***************************************/
 "use strict";


/***********************************/
/*Ready function*/
/**********************************/
$(document).ready(function() {

	/** Subscribe JS **/
	$("#notifyMe").notifyMe(); // Activate notifyMe plugin on a '#notifyMe' element

	/** Placeholder JS call **/
	$('input[type=text], textarea').placeholder();

  /** Cookies **/
  $.cookieCuttr({
    cookieAnalyticsMessage: 'We use cookies just to track visits to our website, we store no personal details.'
  });
});

/***********************************/
/*Preloader */
/**********************************/

jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(100).fadeOut("slow");
	jQuery("body").css('overflow-y','visible');

});

/***********************************/
/*Counter JS*/
/**********************************/
$(function () {

  var austDay = new Date();
  //Set counter date
  austDay =  new Date(2016, 10 - 1, 22, 9, 0, 0, 0);
  jQuery('#defaultCountdown').countdown({until: austDay, padZeroes: true, format: 'DHMS'});
  jQuery('#year').text(austDay.getFullYear());
});
/***************************************/
/*only play video on desktop devices  */
/**************************************/
	var isMobile = {
	Android: function() {
	return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
	return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
	return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
	return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
	return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

var trueMobile = isMobile.any()
if (trueMobile){
	$('#video').css('display','none');
}
