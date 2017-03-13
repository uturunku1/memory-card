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
