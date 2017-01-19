$(function() {

  var texto = $('.animar-texto').html();
  var partir = texto.split("");
  $('.animar-texto').html("");
  for (var i = 0; i < partir.length; i++) {
    $('.animar-texto').append('<span class="letras">'+ partir[i] +'</span>');
  }

  $('.letras').each(function(index) {
    var randX = Math.floor(Math.random() * $(window).width());
    var randY = Math.floor(Math.random() * $(window).height());

    if (index >= 0) {
      $(this).css({"center":randX+'px', "top":randY+'px', "opacity":0}, 3000 );
    }
  });

  $('.animar-texto-h').mouseenter(function() {
    $('.letras').animate({"left": 0, "top": 0, "opacity": 1}, 3000);
  });


});
