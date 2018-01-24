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
      choices: ["Nah. I'd rather chew glass.", "Not now. Ask me later.", "Do I ever! Prepared to be smoked."]
    }] 
  )
  .then (function (answers){
    var ans = answers.playgame;
    var player = answers.player;
    switch(ans){
      case "Nah. I'd rather chew glass.":
        console.log(`Oh, ${player}. I get it.`);
        break;
      case "Not now. Ask me later.":
        console.log(`No sweat, ${player}. I can wait.`);
        setTimeout(()=>{
          console.log("How about now?");
          playGame();
        }, 3000);
        break;
      case `Do I ever! Prepared to be smoked.`:
        console.log(`Yeah, good luck with that, ${player}`);
        askTheme();
        break;
      default:
      console.log("I'm lost. Try again.");
    }
  })
}//end fcn playGame

function askTheme(){
  inquirer
  .prompt([{
    type: "list", 
    name: "themes", 
    message: "Pick a theme, and I'll find a word that relates to it somehow.",
    choices: ["animals", "sports", "literature", "history"]
  }])
  .then(function(answer){
    console.log(`You\'ve chosen ${answer.themes}`);
    // const GameWord = new GameWord(answer.themes)
  })
}

playGame();
