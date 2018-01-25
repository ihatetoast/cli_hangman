const Word = require('./word');

const Game = {
  wins: 0,
  losses: 0,
  turns: 10,
  gameword: null,
  testMessage: function(){
    console.log("test message called from game.js");
  },
  initializeGame: function(){
    this.turns = 10;
    this.gameword = new Word();
  }
}
module.exports = Game;