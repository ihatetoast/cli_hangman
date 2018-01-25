// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
//needs the letter constructor
const Letter = require('./letter');

const Word = function(word){
  this.word = word;
  //what word becomes when it's prepped for the game. solid word string to an array of new Letters
  this.preppedWord = [];
  //store to avoid repeats
  this.guesses = [];
  this.won = false;
  //prepare the word (as in applying Letter const which deals only with letters to blanks and checks for appearance in word. that is Letter only. )
  this.prepareWord = function(){
    //loop over word to instantiate a Letter for every letter
    for(let l = 0; l<this.word.length; l++){
      var newGameLtr = new Letter(this.word[l]);
      // console.log(newGameLtr);
      this.preppedWord.push(newGameLtr);
    }
  };
  this.prepareWord();//call it now. don't ask

  //need a method to iterate over word
  this.checkLetter = function(){
    //loop over word
    for(let l = 0; l < this.word.length; l++){
      if(this.word.charAt(l) !==)
    }

  }
}
const apple = new Word("apple");

console.log(apple.word);
apple.prepareWord('apple');
console.log(apple.preppedWord);

//export to be used in Game
module.exports = Word;


/**
 * apple.prepareWord('apple');
 returned:
  Letter {
  current: '_ ',
  wordsLetters: 'a',
  display: false,
  letterMatch: [Function],
  displayLetter: [Function] }
Letter {
  current: '_ ',
  wordsLetters: 'p',
  display: false,
  letterMatch: [Function],
  displayLetter: [Function] }
Letter {
  current: '_ ',
  wordsLetters: 'p',
  display: false,
  letterMatch: [Function],
  displayLetter: [Function] }
Letter {
  current: '_ ',
  wordsLetters: 'l',
  display: false,
  letterMatch: [Function],
  displayLetter: [Function] }
Letter {
  current: '_ ',
  wordsLetters: 'e',
  display: false,
  letterMatch: [Function],
  displayLetter: [Function] }
 * 
 */