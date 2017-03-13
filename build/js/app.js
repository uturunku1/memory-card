(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Card(card_image, position)
{
  this.card_image = card_image;
  this.card_position = position;
}

Card.prototype.getImage = function () {
  return this.card_image;
};

Card.prototype.getPosition = function () {
  return this.card_position;
};

Card.prototype.checkMatch = function (card_image) {
  if (card_image === this.card_image){
    return true;
  }
  else {
    return false;
  }
};

exports.cardModule = Card;

},{}],2:[function(require,module,exports){
var Player = require('./../js/player.js').playerModule;
var Card = require('./../js/card.js').cardModule;

function GameManager(p1, p2)
{
  this.numberOfCards = 10;
  this.cardDeck = this.buildCardDeck();
  this.playerOne = p1;
  this.playerTwo = p2;
  this.turn = this.playerOne;

}

GameManager.prototype.assignPlayerOne = function (playerOne) {
  this.playerOne = playerOne;
}

GameManager.prototype.assignPlayerTwo = function (playerTwo) {
  this.playerTwo = playerTwo;
}

GameManager.prototype.switchPlayer = function () {
  if (this.turn === this.playerOne){
    this.turn = this.playerTwo;
  } else {
    this.turn = this.playerOne;
  }
};

GameManager.prototype.getCards = function () {
  return this.cardDeck;
};

GameManager.prototype.addCard = function (card) {
  this.cardDeck.push(card);
};

GameManager.prototype.buildCardDeck = function () {

  // shuffle function for array
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  var numberList = [];
  // builds a list from 1 to the number of cards
  for (x = 1; x <= this.numberOfCards; x++)
  {
    numberList.push(x);
  }

  // image array
  var images = ['draco.jpg', 'draco.jpg', 'ginny.jpg', 'ginny.jpg', 'harry.jpg', 'harry.jpg', 'hermione.jpg', 'hermione.jpg', 'ron_weasley.jpg', 'ron_weasley.jpg'];

  randomNumbers = shuffle(numberList);

  var returnArray = [];

  randomNumbers.forEach(function(number){
    image = images.pop();
    card = new Card(image, number);
    returnArray.push(card);
  });



  return returnArray;

};


exports.gameManagerModule = GameManager;

},{"./../js/card.js":1,"./../js/player.js":3}],3:[function(require,module,exports){
function Player(playername)
{
  this.playername= playername;
  this.score= 0;
  this.cards= [];
}

Player.prototype.getName = function () {
  return this.playername;
};

Player.prototype.getScore = function () {
  return this.score;
};

Player.prototype.getCards = function () {
  return this.cards;
};

Player.prototype.addPair = function (card_name) {
  this.cards.push(card_name);
};

exports.playerModule = Player;

},{}],4:[function(require,module,exports){
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
  $('#box1').click(function() {
    $('#position-1 img').toggle()
  })
  $('#box2').click(function() {
    $('#position-2 img').toggle()
  })
  $('#box3').click(function() {
    $('#position-3 img').toggle()
  })
  $('#box4').click(function() {
    $('#position-4 img').toggle()
  })
  $('#box5').click(function() {
    $('#position-5 img').toggle()
  })
  $('#box6').click(function() {
    $('#position-6 img').toggle()
  })
  $('#box7').click(function() {
    $('#position-7 img').toggle()
  })
  $('#box8').click(function() {
    $('#position-8 img').toggle()
  })
  $('#box9').click(function() {
    $('#position-9 img').toggle()
  })
  $('#box10').click(function() {
    $('#position-10 img').toggle()
  })


});

},{"./../js/card.js":1,"./../js/gameManager.js":2,"./../js/player.js":3}]},{},[4]);
