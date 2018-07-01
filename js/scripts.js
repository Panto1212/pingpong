//backend logic

// using variables to replace the numbers but without displaying all the numbers before the input
/*var pingpong = function(numb) {
  var divByThree = "Ping"
  var divByFive = "Pong"
  if (numb % 15 === 0) {
    return divByThree+divByFive;
  }
else if (numb % 5 === 0) {
  return divByFive;
}
  else if (numb % 3 === 0) {
    return divByThree;
  } else {
    return numb;
  };
};*/

//using another variable within the loop to display all numbers including the input while doing replacement but displayin the result on the console.
/*var pingpong = function(numb) {

  var counter = 0;
  while (counter < numb) {
  counter++;

var output = "";

    if (counter % 15 === 0)
      output += "PingPong";


  else if (counter % 5 === 0)
    output += "Pong";


    else if (counter % 3 === 0)
      output += "Ping";

      console.log(output || counter);
  };
};*/

//using .append() to display in a list, all numbers before and including the input number while doing replacement
var pingpong = function(numb) {

  var counter = 0;
  while (counter < numb) {
  counter++;

    if (counter % 15 === 0){
      $("#result").append("<li> PingPong </li>")
    }  else if (counter % 5 === 0) {
      $("#result").append("<li> Pong </li>")
    }  else if (counter % 3 === 0) {
      $("#result").append("<li> Ping </li>")
    } else {
      $("#result").append("<li>" + counter + "</li>")
    };
  };
};













//frontend logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#num").val());
    var result = pingpong(input);
$("#num").val("")
  //  $("#result").text(result);
  });
});
