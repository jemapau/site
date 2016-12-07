$(document).ready(function() {

	load_files();
	$('.anim').fadeIn('slow');
});


function load_files() {

	$( ".top-header--inner" ).load( "views/header.html", function(){
		menu();
		links();
	});
	$( ".foo" ).load( "views/footer.html" );


}

function menu () {
	$( "#nav-open" ).click(function() {
	  $( "#full-menu" ).toggleClass( "open-menu");
	});
}

function links() {
	$('a.links').click(function(){
		event.preventDefault();
		var enlace = $(this).attr('href');
		$('body').fadeOut("slow", function () {
			window.location.href = enlace;
		});
	});
}
