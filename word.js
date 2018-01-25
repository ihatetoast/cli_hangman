const _ = require('lodash');

const options = require('./options');
const Letter = require('./letter');

//just an easier way to find random words. 
//used an api but only for me, not for the game.
const animalArray = options.animals;
const sportsArray = options.sports;
const emotionsArray = options.emotions;
const literatureArray = options.literature;
const foodArray = options.food;

let wordsArray = [...animalArray, ...sportsArray, ...emotionsArray, ...literatureArray, ...foodArray];

const Word = function(){
  this.word  = _.sample(wordsArray);
  this.preppedWord = [];
  this.prepareWord = function(){
    //loop over word to instantiate a Letter for every letter
    for(let l = 0; l<this.word.length; l++){
      var newGameLtr = new Letter(this.word[l]);
      // console.log(newGameLtr);
      this.preppedWord.push(newGameLtr);
    }
  };
  this.prepareWord()
}

const gameword = new Word(this.word);

console.log(gameword.word);
gameword.prepareWord();
console.log(typeof gameword.preppedWord);

module.exports = Word;