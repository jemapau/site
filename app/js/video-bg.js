$(document).ready(function() {	
	links();
	movemouse();
	overs();
	navegadores();
	typed();
	cube();
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


function typed() {

    $(".text-sli").typed({
        strings: ["Conectamos con nuevas ^1000 <span>audiencias</span>", "Conectamos con nuevas ^1000 <span>emociones</span>", "Conectamos con nuevas ^1000 <span>alegrias</span>"],
        typeSpeed: 12,
        loop: true,
        backDelay: 2000,
    });
	    
}

function cube() {
	var w = $(window).width(); 
	var h = $(window).height();
	var transZ = w / 2;
	$('#cont').css({'transform': 'translateZ('+-transZ+'px)'});
	$('#wrapper, #cubo, .caras').width(w).height(h);
	$('#facefront').css({'transform': 'translateZ('+transZ+'px)'});
	$('#faceback').css({'transform': 'rotateY(90deg) translateZ('+transZ+'px)'});

	$(window).resize(function() {
		var w = $(window).width(); 
		var h = $(window).height();
		var transZ = w / 2;
		$('#wrapper, #cubo, .caras').width(w).height(h);
		$('#facefront').css({'transform': 'translateZ('+transZ+'px)'});
		$('#faceback').css({'transform': 'rotateY(90deg) translateZ('+transZ+'px) '});



	});

	$('.work-trigger').click(function() {
	    event.preventDefault();
	    var enlace = $(this).attr('href');
	    $('#cont').css({'transform': 'translateZ('+-w+'px)'});
	    // $('body').fadeOut("slow", function () {
	    //   window.location.href = enlace;
	    // });
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