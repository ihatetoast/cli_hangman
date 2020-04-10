const _ = require('lodash');

const options = require('./options');
const Letter = require('./letter');

//just an easier way to find random words. 
//used an api (with Request) but only for me, not for the game.
const animalArray = options.animals;
const sportsArray = options.sports;
const emotionsArray = options.emotions;
const literatureArray = options.literature;
const foodArray = options.food;

let wordsArray = [...animalArray, ...sportsArray, ...emotionsArray, ...literatureArray, ...foodArray];

const Word = function(){
  this.wordsArray = [...animalArray, ...sportsArray, ...emotionsArray, ...literatureArray, ...foodArray];
  this.randomWord  = _.sample(this.wordsArray);  
}


module.exports = Word;

