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
     




    event.preventDefault();
  });


});
// if (helping === "noHelp" && ambition === "yesAmbition" && mistakes === "noMistakes" && creative === "noCreative" && worker === "noWorker") {
//   $("#slytherin").show();
// }

// $(document).ready(function() {
//   $("form#celebrity").submit(function(event) {
//     var age = parseInt($("input#age").val());
//     var gender = $("select#gender").val();
//     var travel = $("select#travel").val();
//     var food = $("select#food").val();
//
//     if (age >= 30 && travel === "italy" && gender === "female" && food === "pizza" || food === "watermelon") {
//       $("#steve").show();
//
//     } else if (age <= 22  && travel === "hongKong") {
//       $("#gilbert").show();
//
//     } else {
//       $("#maggie").show();
//   }
//     event.preventDefault();
//   });
//
// });
