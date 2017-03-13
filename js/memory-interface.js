var Player = require('./../js/player.js').playerModule;

$(document).ready(function() {
  $('#start').submit(function(event){
    event.preventDefault();
    var player1= $('#player-one').val();
    var player2= $('#player-two').val();
    var playerone= new Player(player1);
    var playertwo= new Player(player2);

    $('#player-one-name').text(player1);
    console.log(player1);
    console.log($('#player-one-name').text(player1));
    $('#player-two-name').text(player2);

  });
});
