// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
//store the letter guessed. letter guessed is new Letter
//default appearance in word is false. Will change to true if letter guessed is in word

function Letter(char) {
  this.char = char;
  this.inWord = false;
  this.showLetter = function(){
   if(this.char === '-'){
     //deal with hyphens and phrases. 
     this.inWord = true;
     return '-';
   } 
   else if(this.char === ' '){
    this.inWord = true;
    return '-';
   } else if (this.inWord === true){
    return this.char
   }
   else {
     //it's a bad guess
     return ' _ '
   }
  }

}

module.exports = Letter;