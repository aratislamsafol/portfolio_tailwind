$(document).ready(function(){
  $('#bar').click(function(){
    $('#mobile_nav').toggle(120);
    $('#bar').hide();
    $('#close').show();
  });
});
$(document).ready(function(){
  $('#close').click(function(){
    $('#mobile_nav').toggle(120);
    $('#bar').show();
    $('#close').hide();
  });
});