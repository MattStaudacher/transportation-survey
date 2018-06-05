$(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#responses-work").show();
    $("input:checkbox[name=transport-work]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#responses-work').append(workTransportationMode + "<br>");
    });
    $("#responses-non-work").show();
    $("input:checkbox[name=transport-non-work]:checked").each(function() {
      var funTransportationMode = $(this).val();
      $('#responses-non-work').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
