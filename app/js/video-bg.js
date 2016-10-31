$(document).ready(function() {

	fullpage_f()	
	links();
	movemouse()

});


function links() {
	$('a.links').click(function(){
		event.preventDefault();
		var enlace = $(this).attr('href');
		$('body').fadeOut("slow", function () {
			window.location.href = enlace;
		});
	});
}

function movemouse() {
	$(document).on('mousemove', function(e){
	    $('.move').css({
	       "left":+ e.pageX - 40,
	       "top": +  e.pageY - 50
	    },10000);
	});
}


function fullpage_f() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['01', '02', '03', '04', '05'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',



		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		//events
		onLeave: function(index, nextIndex, direction){
			var video_name = $(this).attr('data-video');
			var sel = $('#'+video_name);
			var reproduce = $('#'+video_name)[0];
			sel.fadeOut('fast',function() {
				reproduce.pause();
				reproduce.currentTime = 0;
			});



		},
		afterLoad: function(anchorLink, index){    
			var video_name = $(this).attr('data-video');
			var sel = $('#'+video_name);
			var reproduce = $('#'+video_name)[0];
			sel.stop().fadeIn('fast');
			reproduce.currentTime = 0;
			reproduce.play();
			console.log('entro', index, video_name );

			if (index == 1) {
				$('.letra').html('M');
				
			}
			if (index == 2) {
				$('.letra').html('A');
				
				
			}
			if (index == 3) {
				$('.letra').html('K');
			}

			if (index == 4) {
				$('.letra').html('E');
			}

			if (index == 5) {
				$('.letra').html('D');
			}

			console.log();


		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
}