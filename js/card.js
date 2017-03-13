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
