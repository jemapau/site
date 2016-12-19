$(document).ready(function() {
  load_files();
  $('.anim').fadeIn('slow');

  function load_files() {
    $( ".top-header--inner" ).load( "views/header.html", function(){
      menu();
      links();
    });
    $( ".foo" ).load( "views/footer.html", function() {
      initclock();
      read_bar();
      checkbox();
    });
    $( ".logo-makemark" ).load( "images/makemark-logo.svg");
  }

  $( "#nav-open" ).click(function() {
    $(this).toggleClass('open');
    $( "#full-menu" ).toggleClass( "open-menu");
  });

  $("#nav-close").click(function(a) {
      a.preventDefault();
      $("#full-menu").removeClass("open-menu");
      $header.headroom("pin");
  });

  var newClass = window.location.pathname;
  newClass = newClass.substring(newClass.lastIndexOf('/') + 1, newClass.lastIndexOf("."));
  $('body').addClass(newClass);

  function menu () {
  	$( "#nav-open" ).click(function() {
  	  $( "#full-menu" ).toggleClass( "open-menu");
  	});

    $("#nav-close").click(function(a) {
        a.preventDefault();
        $("#full-menu").removeClass("open-menu");
        $header.headroom("pin");
    });
  }

  function read_bar() {

      var windHeight = $(window).height(),
      docHeight = $(document).height(),
        progressBar = $('.progress'),

      max = docHeight - windHeight;
      progressBar.css('width', max);

      $(document).on('scroll', function(){
          value = $(window).scrollTop();
          progressBar.css('width', value);
      });
  }

// work 
$('.work-trigger').mouseenter(function () {

  $('.work--giro').addClass('work--gire').dequeue();
  $('.work').addClass('blue');

  if ( $(this).hasClass('video-bg') ) {
    var video_name = $(this).attr('data-service');
    var sel = $('#'+video_name);
    var reproduce = $('#'+video_name)[0];
    reproduce.currentTime = 0;
    reproduce.play();
  }
  if ( $(this).hasClass('image-bg') ) {
    var image_name = $(this).attr('data-service');
    var sel = $('#'+image_name);
  }


  
  $('.videobg-elm, .videobg-wrp').fadeOut('fast');
  $('.videobg-wrp').fadeIn('fast');
  $('.logo-makemark *').css({'fill':'#fff'});
  $('.text-sli').css({'color':'#fff'});
  sel.stop().fadeIn('fast');

  
  

}).mouseleave(function () {


  $('.work--giro').removeClass('work--gire');
  $('.work').removeClass('blue');

  

  if ( $(this).hasClass('video-bg') ) {
    var video_name = $(this).attr('data-service');
    var sel = $('#'+video_name);
    var reproduce = $('#'+video_name)[0];
    reproduce.pause();
    reproduce.currentTime = 0;
  }


  $('.videobg-elm, .videobg-wrp').stop().fadeOut('fast');
  $('.logo-makemark *').css({'fill':'#000'});
  $('.text-sli').css({'color':'#333'});
    

  

});

function Animation() {
  $('#divAnimation').animateCss('fadeInLeft');
}


// Menu hover

$('a.nav-full--link').mouseover(function() {
  $(this).fadeIn('.nav-full--en');
});

//Date and phrases

function initclock(){
  var clock = (function(){
    'use-strict';
    return {
        // new date
        now: new Date(),
        // short selector
        _: function(e){
            return document.querySelector(e);
        },
        // check time
        checkTime: function(a){
            return (((a < 10) ? "0" : "") + a);
        },
        // show date
        showDate: function(){
            // if exists
            if (this._("#date")) {

                // days
                var days = [
                    'Domingo', 'Lunes',
                    'Martes', 'Miércoles',
                    'Jueves', 'Viernes',
                    'Sábado'
                ];

                // months
                var months = [
                    'Enero', 'Febrero', 'Marzo',
                    'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre',
                    'Octubre', 'Noviembre', 'Diciembre'
                ];

                //
                var phrases = [
                  'Creando experiencias de marca <span class="icon-ico-heart"></span>', 'Creamos desde el corazón de tu marca <span class="icon-ico-smile"></span>', 'Cuentanos de tu marca <span class="icon-ico-coffee"></span>', 'Creando experiencias de marca <span class="icon-ico-heart"></span>', 'Creamos desde el corazón de tu marca <span class="icon-ico-heart"></span>', 'Creando experiencias de marca <span class="icon-ico-heart icon-animate-heart"></span>', 'Creando experiencias de marca <span class="icon-ico-smile"></span>',
                ];

                // show html
                this._("#date").innerHTML =
                    days[this.now.getDay()] + ", " +
                    this.checkTime(this.now.getDate()) + " de " +
                    months[this.now.getMonth()] + " de " +
                    this.now.getFullYear() +  "<div class='foo-top--phrase'>" + phrases[this.now.getDay()] + " </div> ";
            }
        },
        // init clock and date
        init: function(){
            var self = this;
            setInterval(this.newClock,1000);
            this.showDate();
        }
      };
  })();
  clock.init();
}
});

function checkbox() {

$(".area .input").click(function(e) {

   $("label[type='checkbox']", this)
   var pX = e.pageX,
      pY = e.pageY,
      oX = parseInt($(this).offset().left),
      oY = parseInt($(this).offset().top);

   $(this).addClass('active');

   if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      if ($(this).hasClass('active-2')) {
         if ($("input", this).attr("type") == "checkbox") {
            if ($("span", this).hasClass('click-efect')) {
               $(".click-efect").css({
                  "color": "white",
                  "margin-left": (pX - oX) + "px",
                  "margin-top": (pY - oY) + "px",
               });
               $(".click-efect", this).animate({
                  "width": "0",
                  "height": "0",
                  "top": "0",
                  "left": "0"
               }, 400, function() {
                  $(this).remove();
               });
            } else {
               $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>');
               $('.x-' + oX + '.y-' + oY + '').animate({
                  "width": "500px",
                  "height": "500px",
                  "top": "-250px",
                  "left": "-250px",
               }, 600);
            }
         }

         if ($("input", this).attr("type") == "radio") {

            $(".area .input input[type='radio']").parent().removeClass('active-radio').addClass('no-active-radio');
            $(this).addClass('active-radio').removeClass('no-active-radio');

            $(".area .input.no-active-radio").each(function() {
               $(".click-efect", this).animate({
                  "width": "0",
                  "height": "0",
                  "top": "0",
                  "left": "0"
               }, 400, function() {
                  $(this).remove();
               });
            });

            if (!$("span", this).hasClass('click-efect')) {
               $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>');
               $('.x-' + oX + '.y-' + oY + '').animate({
                  "width": "500px",
                  "height": "500px",
                  "top": "-250px",
                  "left": "-250px",
               }, 600);
            }

         }
      }
      if ($(this).hasClass('active-2')) {
         $(this).removeClass('active-2');
      } else {
         $(this).addClass('active-2');
      }
   }

});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

}
