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
Player.prototype.addPair = function (imgname) {
  this.cards.push(imgname);
};
exports.playerModule = Player;
