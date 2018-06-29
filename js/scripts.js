//backend logic



var pingpong = function(numb) {
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
    return false;
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
