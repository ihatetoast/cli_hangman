// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.


function Word(word){
  this.word = word;
  console.log(`this is the word const and this is the word: ${word}`);
  
  this.makeDashes = function(word){
    let wordDashes = ''
    for(var l = 0; l < this.word.length; l++){
      wordDashes += "- ";
    }
    console.log(wordDashes);
  };
  this.checkLetter = function(ltr, word){
    if(word.indexOf(ltr) !== -1){
      console.log(`${ltr} is in ${word}`);
      
    } 
    else {
      console.log(`${ltr} is NOT in ${word}`);
    }
  }
}
const Apple = new Word("apple");
console.log(Apple.checkLetter('b', 'apple'));
// module.exports = Word;
