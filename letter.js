// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
const isLetter = require('is-letter');


const Letter = function(gameword){
  //arrays to hold
  this.trueLetters = [];
  this.placeHolders = []; 
  //fill the arrays above
  this.fillArrays= function(){
    this.trueLetters = gameword.split('');
    this.placeHolders = this.trueLetters.map((idx) =>{
      return '_ ';
    });
    console.log(`trueLetters is ${this.trueLetters}`);
    // console.log(`${placeHolders.join(' ')}`);
    // gameword.forEach(ltr, idx)

  }
}

//DEAL WITH THE LETTERS WITH PROTOTYPES
//is the letter in the word?
//show the letter if inWord is true
Letter.prototype.inWord = function(guess){
  //iterate over trueLetters. if guess is the ltr, replace DASH with letter at index.
  this.trueLetters.forEach((ltr, idx, arr) =>{
    if(guess === ltr){
      this.placeHolders[idx] = guess; 
      return true;
    }
    else {
      return false;
    }
  })
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