

// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
const isLetter = require('is-letter');
const _ = require('lodash');
const negSledge = [', but you look pretty.', ', and I didn\'t think you\'d guess it', '. You just always disappoint me.', '. ERMAHGERD, YER DERM!', '. Aw, little kitten.', '. Give up.', '. I love the smell of hangman in the morning.', ', but you tried. That\'s important', '. Are you even trying?'];
const posSledge = ['Lucky guess, paste-eater.', 'Whoo hoooo. Think you\'re Cap\'n Dictionary.', 'Whoa, now. Settle.', 'You get \'em, punkin.', 'You know all the letters.'];
const Letter = function(gameword){
  //arrays to hold
  this.trueLetters = [];
  this.placeHolders = [];
  this.badGuesses = [];
  this.goodGuesses = [];
  //fill the arrays above
  this.fillArrays= function(){
    this.trueLetters = gameword.split('');
    this.placeHolders = this.trueLetters.map((idx) =>{
      return '_ ';
    });
    // console.log(`${placeHolders.join(' ')}`);
    // gameword.forEach(ltr, idx)

  }
}
// console.log(this.placeHolders.join(' '));
//     console.log(`trueLetters is ${this.trueLetters}`);
//DEAL WITH THE LETTERS WITH PROTOTYPES
//is the letter in the word?
//show the letter if inWord is true
Letter.prototype.inWord = function(guess){
  if(this.trueLetters.indexOf(guess) !== -1){
    console.log(`${_.sample(posSledge)}\n`);
    this.goodGuesses.push(guess);
  }
  else{
    console.log(`${guess} is NOT in the word${_.sample(negSledge)}\n`);
    this.badGuesses.push(guess);
  }
}
Letter.prototype.showLetter = function(guess){
  //iterate over trueLetters. if guess is the ltr, replace DASH with letter at index.
  this.trueLetters.forEach((ltr, idx, arr) =>{
    if(guess === ltr){
      this.placeHolders[idx] = guess; 
    }
  });
  console.log(this.placeHolders.join(' '));
}
//show - 

/*
hackey tests
let monkey = new Letter("monkey");
monkey.fillArrays();
console.log(monkey.trueLetters);
console.log(monkey.placeHolders);
monkey.inWord("o");

let mississippi = new Letter("mississippi");
mississippi.fillArrays();
console.log(mississippi.trueLetters);
console.log(mississippi.placeHolders);
mississippi.inWord("s");
mississippi.inWord("i");
*/


module.exports = Letter;