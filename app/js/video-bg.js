$(document).ready(function() {

	fullpage_f();	
	links();
	movemouse();
	overs();
	navegadores();
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
	       "left":+ e.pageX - 100,
	       "top": +  e.pageY - 100
	    },10000);
	});
}


function overs() {

	$('.container').mouseover(function() {
	   $('.move').addClass('moveg');
	})
 	.mouseout(function() {
    	  $('.move').removeClass('moveg');
  	});

  $('.links').mouseover(function() {
		$('.move').addClass('moveg2');
	}).mouseout(function() {
    	 $('.move').removeClass('moveg2');
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
		



		},
		afterLoad: function(anchorLink, index){    
			
		
		
		

		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
}


function navegadores () {

  var sBrowser, sUsrAg = navigator.userAgent;
  if(sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome";
  } else if (sUsrAg.indexOf("Safari") > -1) {
  	$('.videobg-elm').remove();
  	$('.mas2, .move').removeClass();

  	

  } else if (sUsrAg.indexOf("Opera") > -1) {
  sBrowser = "Opera";
  } else if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
  } else if (sUsrAg.indexOf("MSIE") > -1) {
  sBrowser = "Microsoft Internet Explorer";
  }
  console.log("Usted está utilizando: " + sBrowser);
}