const inquirer = require('inquirer');

'use strict';
function playGame(){
  getWords();
  //ask if they want to play
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
        //WHERE THE GAME STARTS
      case `Do I ever! Prepared to be smoked.`:
        console.log(`Yeah, good luck with that, ${player}`);
        //ask for a theme
        // askTheme();
        break;
      default:
      console.log("I'm lost. Try again.");
    }
  })
}//end fcn playGame



playGame();
