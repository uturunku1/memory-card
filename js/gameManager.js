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
