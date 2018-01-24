//NODE
const fs = require('fs');
//THIRD PARTY
const _ = require ('lodash');

//OWN
const Word = require('./word');
const options = require('./options');

//only fcn of this is to get a random word based on the theme and then use that word to make a new GameWord;

const Game = function(theme){
  this.animalsOptions = _.sample(options.animals);
  this.sportsOptions = _.sample(options.sports);
  this.emotionsOptions = _.sample(options.emotions);
  this.literatureOptions = _.sample(options.literature);
  this.foodOptions = _.sample(options.food);
  //instantiate word for these. I know it's not dry, but hey. 
  switch(theme){
    case "animals":
      this.gameWord = new Word(this.animalsOptions);
      console.log('theme is animals and game word is:', this.gameWord);
      break;
    case "sports":
      this.gameWord = new Word(this.sportsOptions);
      console.log('theme is sports and game word is:', this.gameWord);
      break;
    case "literature":
      this.gameWord = new Word(this.literatureOptions);
      console.log('theme is literature and game word is:', this.gameWord);
      break;
    case "emotions":
      this.gameWord = new Word(this.emotionsOptions);
      console.log('theme is emotions and game word is:', this.gameWord);
      break;
    case "food":
      this.gameWord = new Word(this.foodOptions);
      console.log('theme is food and game word is:', this.gameWord);
      break;
    default:
      this.gameWord = "monkeypooinmyshoe";
  }
};
module.exports = Game;
// const sports = new Game('sports');
// console.log("word", sports.gameWord);
// const food = new Game('food');
// console.log("word", food.gameWord);
// const animals = new Game('animals');
// console.log("word", animals.gameWord);
// const literature = new Game('literature');
// console.log("word", literature.gameWord);
// const emotions = new Game('emotions');
// console.log("word", emotions.gameWord);



// parts i could not get to work:
// this.getWord = function(theme){fs.readFile(`${this.theme}.txt`, "utf-8", function(err, data){
//   if(err) throw err;
//   const wordString = data;
//   // console.log(wordString);
//   const wordStringArr = wordString.split(',');
//   // use lodash for random word:
//   const randoWord = _.sample(wordStringArr); 
//   console.log("rando word inside method", randoWord);
//   gameWord.push(randoWord)
//   console.log("gameword arr is ", gameWord);
//   return gameWord;
// })};
//issues: i could get the random word, but it would not push. said it was undef.