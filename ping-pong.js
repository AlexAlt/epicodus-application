$(document).ready(function() {
  var maxIndex = parseInt(prompt("What number would you like to ping pong us to?"));

  if(maxIndex) {
    for(var index = 1; index <= maxIndex; index += 1) {
      var result;
      if(index % 3 === 0 && index % 5 === 0) {
        result = "ping-pong";
      } else if (index % 3 === 0) {
        result = "ping";
      } else if (index % 5 === 0) {
        result = "pong";
      } else {
        result = index;
      }

      $('.ping-pong-container').append("<li>" + result + "</li>");
    }
  } else {
    $(".try-again").show();
  }
});
