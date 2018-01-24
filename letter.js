// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
//store the letter guessed. letter guessed is new Letter
//default appearance in word is false. Will change to true if letter guessed is in word

const isLetter = require('is-letter');

const Letter = function(ltr){
  this.ltr = ltr;  
  this.isLetter = function(ltr){
    if(!isLetter(ltr)){
      console.log(`${ltr} is NOT a letter.`);
      return false
    }
    else{
      console.log(`${ltr} is a letter.`);
    }
  } 
  
}
const userGuess = new Letter();
userGuess.isLetter('5');
// module.exports = Letter;