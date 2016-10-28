$(document).ready(function() {

	fullpage_f()
	video_bg();	
	links();

});






function video_bg() {

	$('.section .container').on({
		mouseenter: function(){
			$('.letra').addClass('bola');
		},
		mouseleave: function(){
			$('.letra').removeClass('bola');
		}
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



function fullpage_f() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
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
				$('.bg').addClass('baa');
			}
			if (index == 2) {
				$('.letra').html('A');
				$('.bg').addClass('bab');
			}
			if (index == 3) {
				$('.letra').html('K');
				$('.bg').addClass('bac');

			}

		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
}