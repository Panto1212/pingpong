//backend logic
if (input === false) {
  alert("Enter a number");
} else {
  return true;
}










//frontend logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#num").val());
    var result = input;
$("#result").text(result);
  });
});
