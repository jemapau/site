$(document).ready(function() {
  $( "#nav-open" ).click(function() {
    $(this).toggleClass('open');
    $( "#full-menu" ).toggleClass( "open-menu");
  });

// Menu hover

$('a.nav-full--link').mouseover(function() {
  $(this).fadeIn('.nav-full--en');
});

//Date and phrases

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
                  'Creando experiencias de marca <span class="icon-ico-heart"></span>', 'Creamos desde el corazón de tu marca <span class="icon-ico-smile"></span>',
                  'Cuentanos de tu marca <span class="icon-ico-coffee"></span>', 'Creando experiencias de marca <span class="icon-ico-heart"></span>',
                  'Creamos desde el corazón de tu marca <span class="icon-ico-heart"></span>', 'Creando experiencias de marca <span class="icon-ico-heart icon-animate-heart"></span>',
                  'Creando experiencias de marca <span class="icon-ico-smile"></span>',
                ]

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
});
