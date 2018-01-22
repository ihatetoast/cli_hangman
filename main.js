const inquirer = require('inquirer');

const Word = require('./word');
const Letter = require('./letter');
const GameWord = require('./gameword');

//do you want to play a game
'use strict';
function playGame(){
  inquirer
  .prompt([
    {
      type: "confirm",
      name: "playgame",
      message: "Do you want to play hangman?",
      default: true
    }] 
  )
  .then(function(answer){
    if(!answer.playgame){
      console.log("Bugger. Come back soon.");
      setTimeout(()=>{
        console.log("😁 Ok. What about now?");
        playGame();
      }, 3000);
    }
    else {
      console.log("player wants to play");
      const wordArr = ['Game', 'Animals', 'Plants', 'Emotion', 'Programming','Texas', 'Australia', 'Sports', 'Art', 'Literature', 'Food'];
      //get the theme
      inquirer
      .prompt(
        {
          type: 'list',
          name: 'theme',
          message: 'What theme do you want?',
          choices: wordArr,
          filter: function(val) {
            return val.toLowerCase();
          }
        }
      )
      .then(function(answer){
        const theme = answer.theme;
        //pass theme into the word fcn
        console.log(`user's chosen theme is ${theme}`);
      })
      
    }
  })
};

playGame();

// console.log(z.printLetter('z'));
// console.log(`game word array is ${Gameword.wordArr}`);