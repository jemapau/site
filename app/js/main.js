$( "#nav-open" ).click(function() {
  $( "#full-menu" ).slideDown( "slow", function() {
    // Animation complete.
  });
});

$( "#service-thumb--link" ).mouseover(function() {
  $( "#graph-block" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});
