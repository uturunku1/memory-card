var Player = require('./../js/player.js').playerModule;
var Card = require('./../js/card.js').cardModule;
var GameManager = require('./../js/gameManager.js').gameManagerModule;

$(document).ready(function() {
  $('#start').submit(function(event){
    event.preventDefault();
    var player1= $('#player-one').val();
    var player2= $('#player-two').val();
    var playerone= new Player(player1);
    var playertwo= new Player(player2);
    var gameManager = new GameManager(playerone, playertwo);

    gameManager.getCards().forEach(function(card){
      $('#position-' + card.getPosition()).append('<img src=img/' + card.getImage() + '>');
    });




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
