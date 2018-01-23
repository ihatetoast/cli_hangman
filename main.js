// NOTES FROM TRAIN:
// https://www.npmjs.com/package/is-letter
// $ npm install is-letter (instead of regex)
// var isLetter = require('is-letter');
 
// isLetter('a'); // => true 
// isLetter('abba'); // => false 
//
	
// Here is a list of current possibilities:

// 2. (ES6) includes—go to answer, or this answer

// var string = "foo",
//     substring = "oo";
// string.includes(substring);




const inquirer = require('inquirer');

//do you want to play a game
'use strict';
function playGame(){
  inquirer
  .prompt(
    [{
      name: "player",
      message: "What is your name?",
    },
      {
      type: "list",
      name: "playgame",
      message: "Do you want to play hangman?",
      choices: ["Nah. I'd rather chew glass.", "Not now. Ask me later.", "Do I ever! I'm the best at this game. Prepared to be smoked"]
    }] 
  )
  .then (function (answer){
    if(answer.playgame === choices[0]){
      console.log(`I get it, ${answer.player}. I'm not into old west justice, either.`);
    }
    else if(answer.playGame === choices[1]){
      console.log(`I understand, ${answer.player}.`);
      setTimeout(()=>{
        console.log("How about now?");
        playGame();
      }, 2000);
    }
    else{
      console.log(`Ah, you're the best, ${answer.player}.`);
    }
  })
  }
  .then(function(answer){
    
}; //end fcn playGame

playGame();

// console.log(z.printLetter('z'));
// console.log(`game word array is ${Gameword.wordArr}`);