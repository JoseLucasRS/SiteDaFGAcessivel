var $fonteElements = $("p, a, h2, h3, div");
var fonte = 0;

$(document).ready(function(){
	$('#real-accessability-biggerFont').on('click', increaseFont);
	$('#real-accessability-smallerFont').on('click', decreaseFont);
	$('#real-accessability-invert').on('click', invert);
	$('#real-accessability-grayscale').on('click', grayscale);
	$('#real-accessability-linkHighlight').on('click', linkHighlight);
	$('#real-accessability-regularFont').on('click', regularFont);
	$('#real-accessability-reset').on('click', reset);
})

$fonteElements.each( function(){
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size") );
});

function increaseFont() {
	if (fonte < 4){
		fonte++;
		$fonteElements.each( function(){
				var $this = $(this);
				$this.css( "font-size" , parseInt($this.css("font-size")) + 1 );
				
    	});
	}
}

function decreaseFont() {
 	if (fonte > -4){
		fonte--;
		$fonteElements.each( function(){
			var $this = $(this);
			$this.css( "font-size" , parseInt($this.css("font-size")) - 1 );
		});
	}
}

function invert() {
	if($('body').hasClass("real-accessability-invert")){
		$('body').removeClass("real-accessability-invert");	
	} else {
		$('body').removeClass("real-accessability-grayscale");
		$('body').addClass("real-accessability-invert");
	}
}

function grayscale() {
	if($('body').hasClass("real-accessability-grayscale")){
		$('body').removeClass("real-accessability-grayscale");	
	} else {
		$('body').removeClass("real-accessability-invert");
		$('body').addClass("real-accessability-grayscale");			
	}
}

function linkHighlight() {
	if($('body').hasClass("real-accessability-linkHighlight")){
		$('body').removeClass("real-accessability-linkHighlight");	
	} else {
		$('body').addClass("real-accessability-linkHighlight");			
	}
}
function regularFont() {
	$fonteElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , $this.data("orig-size") );
   });
}

function reset() {
	$('body').removeClass("real-accessability-invert");	
	$('body').removeClass("real-accessability-linkHighlight");
	$('body').removeClass("real-accessability-grayscale");
	regularFont();
	fonte = 0;
}