$(document).ready(function() {
  $(".main").onepage_scroll({
    sectionContainer: "section",     
    easing: "ease",           
    animationTime: 500,
    pagination: true,
    updateURL: false,
    beforeMove: function(index) {
      if(index === 1) {
        $('#navigation').removeClass('white navy light');
      }
      if(index === 2) {
        $('#navigation').removeClass('light white').addClass('navy');
      }
      else if(index === 3) {
        $('#navigation').removeClass('navy light').addClass('white');
      }
      else if(index === 4) {
        $('#navigation').removeClass('navy light').addClass('white');
        //$('#navigation').removeClass('white navy').addClass('light');
      }
    },
    afterMove: function(index) {},
    loop: false,
    keyboard: true,
    responsiveFallback: 720,
    direction: "vertical" 
  });

  $('#proj-link').click(function() {
    $(".main").moveTo(2);
  });
  $('#con-link').click(function() {
    $(".main").moveTo(4);
  });
  $('#below').click(function() {
    $(".main").moveTo(4);
  });
});