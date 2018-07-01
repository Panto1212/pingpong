//backend logic
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
var pingpong = function(numb) {

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

};














//frontend logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#num").val());
    var result = pingpong(input);

    $("#result").text(result);
  });
});
