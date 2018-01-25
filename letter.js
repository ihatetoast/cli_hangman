// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
const isLetter = require('is-letter');


const Letter = function(gameword){
  //arrays to hold
  this.trueLetters = [];
  this.placeHolders = []; 
  //handle spaces and character not letters (if i have hyphens or phrases)
  this.isALetter = function (char){
    if(isLetter(char)){
      return true;
    }
    else{
      return false;
    }
  };//end validator (could put on inquirer)
  //fill the arrays above
  this.fillArrays= function(){
    const gamewordArr = gameword.split('');
    console.log(`gamewordArr is ${gamewordArr}`);
    // gameword.forEach(ltr, idx)
  }
}
let a = new Letter('a');
let aa = new Letter('aa')
let nine = new Letter(9);
let nineStr = new Letter('9');

//hackey tests
// console.log(`a.current expects to be _: ${a.current}`);
// console.log(`a.trueLetter expects to be a: ${a.trueLetter}`);
// console.log(`a.isALetter expects to be true: ${a.isALetter('a')}`);
// console.log(`aa.isALetter expects to be false: ${aa.isALetter('aa')}`);
// console.log(`nine.isALetter expects to be false: ${nine.isALetter(9)}`);
// console.log(`nineStr.isALetter expects to be false: ${a.isALetter('9')}`);
module.exports = Letter;