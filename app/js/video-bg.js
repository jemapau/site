$(document).ready(function() {

  	fullpage_f()
  	video_bg();	
  	links();
  	
});






function video_bg() {
	$('.section .container').on({
		mouseenter: function(){
			var video_name = $(this).attr('data-video');
			var sel = $('#'+video_name);
			var reproduce = $('#'+video_name)[0];
			sel.stop().fadeIn('fast');
			reproduce.currentTime = 0;
			reproduce.play();
			console.log('entro');
		},
		mouseleave: function(){
        	var video_name = $(this).attr('data-video');
			var sel = $('#'+video_name);
			var reproduce = $('#'+video_name)[0];
			sel.fadeOut('fast',function() {
				reproduce.pause();
				reproduce.currentTime = 0;
			});
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

function getNumber() {
   
	var cards = $(".cuadros li");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) + 1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	}

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

	      //Scrolling
	      css3: true,
	      scrollingSpeed: 700,
	      autoScrolling: true,
	      fitToSection: true,
	      fitToSectionDelay: 1000,
	      scrollBar: false,
	      easing: 'easeInOutCubic',
	      easingcss3: 'ease',
	      loopBottom: false,
	      loopTop: false,
	      loopHorizontal: true,
	      continuousVertical: false,
	      continuousHorizontal: false,
	      scrollHorizontally: false,
	      interlockedSlides: false,
	      resetSliders: false,
	      fadingEffect: false,
	      normalScrollElements: '#element1, .element2',
	      scrollOverflow: false,
	      scrollOverflowOptions: null,
	      touchSensitivity: 15,
	      normalScrollElementTouchThreshold: 5,
	      bigSectionsDestination: null,

	      //Accessibility
	      keyboardScrolling: true,
	      animateAnchor: true,
	      recordHistory: true,

	      //Design
	      controlArrows: true,
	      verticalCentered: true,
	      sectionsColor : ['#ccc', '#fff'],
	      paddingTop: '3em',
	      paddingBottom: '10px',
	      fixedElements: '#header, .footer',
	      responsiveWidth: 0,
	      responsiveHeight: 0,
	      responsiveSlides: false,

	      //Custom selectors
	      sectionSelector: '.section',
	      slideSelector: '.slide',

	      //events
	      onLeave: function(index, nextIndex, direction){getNumber();},
	      afterLoad: function(anchorLink, index){},
	      afterRender: function(){},
	      afterResize: function(){},
	      afterResponsive: function(isResponsive){},
	      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
	      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	  });
}