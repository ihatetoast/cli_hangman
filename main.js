
const inquirer = require('inquirer');

const Word = require('./word');
const Letter = require('./letter');


console.log(`CLIngman: Like Hangman but without the draconian reaction to guessing incorrectly.`);

//variables:
let wordToGuess = null;
let wins = 0;
let losses = 0;
let turns = 10;

//save word as obj for tru and plhldr
let word = { }
let gameLetters = {}

  
//retrieves words and picks one at random from txt files
  
const inviteToPlay = function(){
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
          playGame()
          break;
        default:
        console.log("I'm lost. Try again.");
      }
    })
  }

const playGame = function(){
  //deal with the word const
  //instantiate
  word = new Word();
  //get that random word
  wordToGuess = word.randomWord;
  console.log(`the word for this game: ${wordToGuess}`);
  console.log("playgame was called");

  //deal with the letters from wordtoguess
  gameLetters = new Letter(wordToGuess);
  gameLetters.fillArrays();

}

inviteToPlay();