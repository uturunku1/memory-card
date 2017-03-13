(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/player.js":1}]},{},[2]);
