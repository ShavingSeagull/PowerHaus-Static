$(document).ready(function(){

	const NAV = $("#main-nav");
	const NAVHIDDENELEMS = $("#nav-list").children('li').children('a').children('span');
	const BUTTON = $("#nav-button");

	function navControl() {

		if ($(window).width() <= 1000) {
			if (NAV.css('left') < '0') {
				NAV.css('left', '0');
				BUTTON.css('box-shadow', '0 0');
			} else {
				NAV.css('left', '-100%');
				BUTTON.css('box-shadow', '2px 0 3px #000');
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

	// Event handlers for mousing over on larger screens
	$(NAV).mouseenter(() => {
		navControl();
		// Timeout has to fire slightly after the CSS transition property of 0.4s
		setTimeout(showElements, 410);

	});

	$(NAV).mouseleave(() => {
		navControl();
		hideElements();
	});

	// Click handler for nav button on smaller screens
	$("#nav-button").click(() => {
		navControl();
		NAVHIDDENELEMS.removeClass('d-none');
	});

	// This acts as a reset in case the user changes their browser window size. 
	// Unlikely to be needed much, but a safeguard nonetheless
	$(window).resize(() => {
		if ($(window).width() <= 1000) {
			NAV.css({'left': '-100%', 'width': '180px'});
		} else {
			NAV.css({'left': '0', 'width': '80px'});
		}
		hideElements();
	});
});