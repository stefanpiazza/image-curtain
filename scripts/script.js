var touchStart = false,
	startY = 0,
	distanceY = 0,
	currentDistanceY1 = 0,
	currentDistanceY2 = 0,
	translateDistanceY1 = 0,
	translateDistanceY2 = 0,
	directionY = 0,
	scaler = 0;

window.addEventListener('touchstart', startHandler);
window.addEventListener('touchmove', moveHandler);
window.addEventListener('touchend', endHandler);

window.addEventListener('mousedown', startHandler);
window.addEventListener('mousemove', moveHandler);
window.addEventListener('mouseup', endHandler);

window.addEventListener('mouseleave', endHandler);

function startHandler(event) {
	touchStart = true;

	startY = (event.touches ? event.touches[0].pageY : event.pageY);
	scaler = (window.innerWidth / window.innerHeight).toFixed(5);

	document.getElementById('left-3').style.webkitTransitionDuration = '0ms';
	document.getElementById('right-3').style.webkitTransitionDuration = '0ms';
	document.getElementById('left-2').style.webkitTransitionDuration = '0ms';
	document.getElementById('right-2').style.webkitTransitionDuration = '0ms';
	document.getElementById('left-1').style.webkitTransitionDuration = '0ms';
	document.getElementById('right-1').style.webkitTransitionDuration = '0ms';

	document.getElementById('section-1').style.webkitTransitionDuration = '0ms';
	document.getElementById('section-2').style.webkitTransitionDuration = '0ms';
	document.getElementById('section-3').style.webkitTransitionDuration = '0ms';

	document.getElementById('fade-left-2').style.webkitTransitionDuration = '0ms';
	document.getElementById('fade-right-2').style.webkitTransitionDuration = '0ms';	
	document.getElementById('fade-left-3').style.webkitTransitionDuration = '0ms';
	document.getElementById('fade-right-3').style.webkitTransitionDuration = '0ms';	

	event.preventDefault();
};

function moveHandler(event) {
	if (touchStart) {
		distanceY = (event.touches ? event.touches[0].pageY : event.pageY) - startY;

		distanceY = (distanceY * scaler / 2);

		translateDistanceY1 = -distanceY + currentDistanceY1,
		translateDistanceY2 = distanceY + currentDistanceY2;

		if ((translateDistanceY2) < 0) {
			document.getElementById('left-1').style.webkitTransform = 'translate3d(' + (-translateDistanceY1) + 'px, 0px, 0px)';
			document.getElementById('right-1').style.webkitTransform = 'translate3d(' + (-translateDistanceY2) + 'px, 0px, 0px)';				

			document.getElementById('section-2').style.webkitTransform = 'scale3d(' + ((((-translateDistanceY2 / window.innerWidth) * 2) / 10) + 1).toFixed(3) + ', ' + ((((-translateDistanceY2 / window.innerWidth) * 2) / 10) + 1).toFixed(3) + ', ' + ((((-translateDistanceY2 / window.innerWidth) * 2) / 10) + 1).toFixed(3) + ')';

			document.getElementById('fade-left-2').style.opacity = 0.7 - (((((-translateDistanceY2 / window.innerWidth))))*1.4).toFixed(2);		
			document.getElementById('fade-right-2').style.opacity = 0.7 - (((((-translateDistanceY2 / window.innerWidth))))*1.4).toFixed(2);			
		}

		else {
			document.getElementById('left-1').style.webkitTransform = 'translate3d(' + 0 + 'px, 0px, 0px)';
			document.getElementById('right-1').style.webkitTransform = 'translate3d(' + 0 + 'px, 0px, 0px)';

		}
		
		if ((translateDistanceY2) < -(window.innerWidth / 2)) {
			document.getElementById('left-2').style.webkitTransform = 'translate3d(' + ((window.innerWidth/2) + (-translateDistanceY1)) + 'px, 0px, 0px)';
			document.getElementById('right-2').style.webkitTransform = 'translate3d(' + (-(window.innerWidth/2) + (-translateDistanceY2)) + 'px, 0px, 0px)';				
		
			document.getElementById('section-2').style.webkitTransform = 'scale3d(' + 1.1 + ', ' + 1.1 + ', ' + 1.1 + ')';	
			document.getElementById('section-3').style.webkitTransform = 'scale3d(' + ((((-translateDistanceY2 / window.innerWidth) * 2) / 10) + 0.9).toFixed(3) + ', ' + ((((-translateDistanceY2 / window.innerWidth) * 2) / 10) + 0.9).toFixed(3) + ', ' + ((((-translateDistanceY2 / window.innerWidth) * 2) / 10) + 0.9).toFixed(3) + ')';
		
			document.getElementById('fade-left-3').style.opacity = 1.4 - (((((-translateDistanceY2 / window.innerWidth))))*1.4).toFixed(2);			
			document.getElementById('fade-right-3').style.opacity = 1.4 - (((((-translateDistanceY2 / window.innerWidth))))*1.4).toFixed(2);			
		}

		else {
			document.getElementById('left-2').style.webkitTransform = 'translate3d(' + 0 + 'px, 0px, 0px)';
			document.getElementById('right-2').style.webkitTransform = 'translate3d(' + 0 + 'px, 0px, 0px)';
		}

		//Stops zoom of image when on last panel
		// if ((translateDistanceY2) < -(window.innerWidth)) {
		// 	document.getElementById('section-3').style.webkitTransform = 'scale3d(' + 1.1 + ', ' + 1.1 + ', ' + 1.1 + ')';	
		// }

		event.preventDefault();
	}
};

function endHandler(event) {
	touchStart = false;

	currentDistanceY1 = -distanceY + currentDistanceY1;
	currentDistanceY2 = distanceY + currentDistanceY2;

	document.getElementById('left-3').style.webkitTransitionDuration = '500ms';
	document.getElementById('right-3').style.webkitTransitionDuration = '500ms';
	document.getElementById('left-2').style.webkitTransitionDuration = '500ms';
	document.getElementById('right-2').style.webkitTransitionDuration = '500ms';
	document.getElementById('left-1').style.webkitTransitionDuration = '500ms';
	document.getElementById('right-1').style.webkitTransitionDuration = '500ms';

	document.getElementById('section-1').style.webkitTransitionDuration = '500ms';
	document.getElementById('section-2').style.webkitTransitionDuration = '500ms';
	document.getElementById('section-3').style.webkitTransitionDuration = '500ms';	

	document.getElementById('fade-left-2').style.webkitTransitionDuration = '500ms';
	document.getElementById('fade-right-2').style.webkitTransitionDuration = '500ms';	
	document.getElementById('fade-left-3').style.webkitTransitionDuration = '500ms';
	document.getElementById('fade-right-3').style.webkitTransitionDuration = '500ms';		

	if (currentDistanceY2 > -(window.innerWidth / 4)) {
		currentDistanceY1 = 0;
		currentDistanceY2 = 0;

		document.getElementById('left-1').style.webkitTransform = 'translate3d(' + 0 + 'px, 0px, 0px)';
		document.getElementById('right-1').style.webkitTransform = 'translate3d(' + 0 + 'px, 0px, 0px)';
	
		document.getElementById('section-2').style.webkitTransform = 'scale3d(1, 1, 1)';
	}

	else if (currentDistanceY2 < -(window.innerWidth / 4) && currentDistanceY2 > -(window.innerWidth / 2)) {
		currentDistanceY1 = (window.innerWidth / 2);
		currentDistanceY2 = -(window.innerWidth / 2);

		document.getElementById('left-1').style.webkitTransform = 'translate3d(' + -(window.innerWidth / 2) + 'px, 0px, 0px)';
		document.getElementById('right-1').style.webkitTransform = 'translate3d(' + (window.innerWidth / 2) + 'px, 0px, 0px)';
	
		document.getElementById('section-2').style.webkitTransform = 'scale3d(1.1, 1.1, 1.1)';

		document.getElementById('fade-left-2').style.opacity = 0;		
		document.getElementById('fade-right-2').style.opacity = 0;				
	}

	if (currentDistanceY2 < -(window.innerWidth / 2) && currentDistanceY2 > -(window.innerWidth - (window.innerWidth/4))) {
		currentDistanceY1 = (window.innerWidth / 2);
		currentDistanceY2 = -(window.innerWidth / 2);

		document.getElementById('left-2').style.webkitTransform = 'translate3d(' + 0 + 'px, 0px, 0px)';
		document.getElementById('right-2').style.webkitTransform = 'translate3d(' + 0 + 'px, 0px, 0px)';	

		document.getElementById('section-3').style.webkitTransform = 'scale3d(1, 1, 1)';
	}

	else if (currentDistanceY2 < -(window.innerWidth - (window.innerWidth/4))) {
		currentDistanceY1 = window.innerWidth;
		currentDistanceY2 = -window.innerWidth;

		document.getElementById('left-2').style.webkitTransform = 'translate3d(' + -(window.innerWidth / 2) + 'px, 0px, 0px)';
		document.getElementById('right-2').style.webkitTransform = 'translate3d(' + (window.innerWidth / 2) + 'px, 0px, 0px)';		
	
		document.getElementById('section-3').style.webkitTransform = 'scale3d(1.1, 1.1, 1.1)';

		document.getElementById('fade-left-3').style.opacity = 0;		
		document.getElementById('fade-right-3').style.opacity = 0;			
	}

	event.preventDefault();
};

