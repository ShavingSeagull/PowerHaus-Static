$(document).ready(function(){

	const NAV = $("#main-nav");
	const NAVHIDDENELEMS = $("#nav-list").children('li').children('a').children('span');
	const BUTTON = document.getElementById("nav-button");

	function navControl() {

		if ($(window).width() <= 1000) {
			if (NAV.css('left') < '0') {
				NAV.css('left', '0');
			} else {
				NAV.css('left', '-100%');
			}
		} else {
			if (NAV.width() == 80) {
				NAV.css('width', '180px');
			} else {
				NAV.css('width', '80px');
			}
		}
	}

	function showElements() {
		// The check prevents the elements appearing if the user quickly mouses
		// in and out, which would create overflow
		if (NAV.css('left') == '0px' || NAV.css('width') == '180px') {
			NAVHIDDENELEMS.removeClass('d-none');
		}
	}

	function hideElements() {
		NAVHIDDENELEMS.addClass('d-none');
	}

	$(NAV).mouseenter(() => {
		navControl();
		// Timeout has to fire slightly after the CSS transition property of 0.4s
		setTimeout(showElements, 410);

	});

	$(NAV).mouseleave(() => {
		navControl();
		hideElements();
	});

	if ($(window).width() <= 1000) {
		$("#nav-button").click(() => {
			navControl();
			NAVHIDDENELEMS.removeClass('d-none');
		});
	}

	// This acts as a reset in case the user changes their browser window size. 
	// Unlikely to be needed much, but a safeguard nonetheless
	$(window).resize(() => {
		if ($(window).width() <= 1000) {
			NAV.css('left', '-100%');
		} else {
			NAV.css('left', '0');
			NAV.css('width', '80px');
		}
		hideElements();
	});
});