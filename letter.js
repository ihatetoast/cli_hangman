// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
//store the letter guessed. letter guessed is new Letter
//default appearance in word is false. Will change to true if letter guessed is in word

const Letter = function(letter){
  //(placeholder)
  this.current ='_ ';
  //(the underlying char)
  this.trueLetter = letter;  

  this.letterMatch = function(userLtr){
    if(this.trueLetter === userLtr){
      //if true, set current to be the
      this.current = this.trueLetter;
      return true;
    }
    else {
      return false;
    }
  };
  this.displayLetter = function(){
    //return placeholder or letter
    return this.current;
  }
  
}
/*
let a = new Letter('a');
console.log("letter player gave is ", a.wordsLetters);
console.log("as is, the letter displays as ", a.displayLetter());
//compare a to a
console.log(a.letterMatch("a"));
console.log("as is, the letter displays as ", a.displayLetter(), `and I expect to see a: ${a.current}`);
//compare a to z
console.log(a.letterMatch("z"));
console.log("as is, the letter displays as ", a.displayLetter(), `and I expect to see underscore:  ${a.current}`);
*/

module.exports = Letter;