$(document).ready(function() {
  $("#movie").submit(function(event){
    $("#gryffindor").hide();
    $("#hufflepuff").hide();
    $("#ravenclaw").hide();
    $("#slytherin").hide();
    var total = parseInt($("select#helping").val());
     total += parseInt($("select#ambition").val());
     total += parseInt($("select#mistakes").val());
     total += parseInt($("select#creative").val());
     total += parseInt($("select#worker").val());

     console.log(total);

     if (total >= 13) {
      $("#slytherin").show();
    } else if (total >= 10 && total < 13) {
      $("#ravenclaw").show();
    } else if (total >= 7 && total < 10) {
      $("#hufflepuff").show();
    } else {
      $("#gryffindor").show();
    }



    event.preventDefault();
  });


});
