// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.


function Letter(char) {
  this.char = char;
  this.isLetter = function(char){
    const letterTest = [/^[A-Za-z]+$/];
    if(this.char.match(letterTest)){
      console.log("this is a letter");
    }
    else {
      console.log("this is not ");
    }
  },
  this.printLetter = function(char){
    console.log(`printLetter called with char ${char} from ./letter.js`);
  }
}

module.exports = Letter;