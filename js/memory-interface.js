var Player = require('./../js/player.js').playerModule;

$(document).ready(function() {
  $('#start').submit(function(event){
    event.preventDefault();
    var player1= $('#player-one').val();
    var player2= $('#player-two').val();
    var playerone= new Player(player1);
    var playertwo= new Player(player2);


    $('#player-one-name').text(playerone.getName());
    $('#player-two-name').text(playertwo.getName());
    $('#player-one-score').text(playerone.getScore());
    $('#player-two-score').text(playertwo.getScore());
    playerone.getCards().forEach(function(card){
      $('#player-one-cards').append('foundcards');
    });

    playertwo.getCards().forEach(function(card){
      $('#player-two-cards').append('foundcards');
    });

  });
});
