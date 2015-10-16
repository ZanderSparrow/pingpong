$(function() {
  var countTo = parseInt(prompt("What number would you like to ping-pong up to?"));
  for(var i = 1; i <= countTo; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      $('div#output ul').append("<li>ping-pong</li>");
    } else if(i % 3 === 0) {
      $('div#output ul').append("<li>ping</li>");
    } else if(i % 5 === 0) {
      $('div#output ul').append("<li>pong</li>");
    } else {
      $('div#output ul').append("<li>" + i + "</li>");
    }
  }
});