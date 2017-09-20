$(document).ready(function(){
	$('#real-accessability-biggerFont').on('click', increaseFont);
	$('#real-accessability-smallerFont').on('click', decreaseFont);
	$('#real-accessability-invert').on('click', invert);
	$('#real-accessability-linkHighlight').on('click', linkHighlight);
	$('#real-accessability-regularFont').on('click', regularFont);
	$('#real-accessability-reset').on('click', reset);
})

function increaseFont() {
	var invert = $(this).attr('id');
	
	showLoader(function() {					
		if($('body').hasClass("real-accessability-invert")){
			$('body').removeClass("real-accessability-invert");	
		} else {
			$('body').addClass("real-accessability-invert");			
		}
	});
}

function decreaseFont() {
	var invert = $(this).attr('id');
	
	showLoader(function() {					
		if($('body').hasClass("real-accessability-invert")){
			$('body').removeClass("real-accessability-invert");	
		} else {
			$('body').addClass("real-accessability-invert");			
		}
	});
}

function invert() {
	if($('body').hasClass("real-accessability-invert")){
		$('body').removeClass("real-accessability-invert");	
	} else {
		$('body').addClass("real-accessability-invert");			
	}
}

function linkHighlight() {
	var invert = $(this).attr('id');
	
	showLoader(function() {					
		if($('body').hasClass("real-accessability-invert")){
			$('body').removeClass("real-accessability-invert");	
		} else {
			$('body').addClass("real-accessability-invert");			
		}
	});
}
function regularFont() {
	var invert = $(this).attr('id');
	
	showLoader(function() {					
		if($('body').hasClass("real-accessability-invert")){
			$('body').removeClass("real-accessability-invert");	
		} else {
			$('body').addClass("real-accessability-invert");			
		}
	});
}

function reset() {
	var invert = $(this).attr('id');
	
	showLoader(function() {					
		if($('body').hasClass("real-accessability-invert")){
			$('body').removeClass("real-accessability-invert");	
		} else {
			$('body').addClass("real-accessability-invert");			
		}
	});
}
