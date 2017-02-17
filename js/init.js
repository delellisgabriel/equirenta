$(document).ready(function($){
  $(function(){

  	$('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  	$('.carousel').carousel();
  	$('.collapsible').collapsible();
 	$('.datepicker').pickadate({
    	selectMonths: true, // Creates a dropdown to control month
    	selectYears: 2 // Creates a dropdown of 2 years to control year
  	});

  	//Bóton para volver al incio de la pagina 
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	//Desaparece elemento cuando se esta al final de la página
	$(window).scroll(function(){
	  var threshold = 200; // number of pixels before bottom of page that you want to start fading
	  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
		if( op <= 0 ){
			$("#esconder-elemento").hide();
		} else {
			$("#esconder-elemento").show();
		}
		$("#esconder-elemento").css("opacity", op ); 
	});

  }); // end of document ready
})(jQuery); // end of jQuery name spacefile:///C:/Users/Administrador.000/Downloads/equirenta/parallax-template/parallax-template/index.html#two!