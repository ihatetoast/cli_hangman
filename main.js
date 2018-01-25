
const inquirer = require('inquirer');

const isLetter = require('is-letter');

const Word = require('./word');
const Letter = require('./letter');


console.log(`CLIngman: Like Hangman but without the draconian reaction to guessing incorrectly.`);

//variables:
let wordToGuess = null;
let wins = 0;
let losses = 0;
let chances = 10;
let player;
//save word as obj for tru and plhldr
let word = { }
let gameLetters = {}


  
//retrieves words and picks one at random from txt files
  


//USER PLAYS A LETTER (called within playGame)
//inside userPlays, getLetter is called
//asks user for a letter input
const getLetter = function(){
  console.log(`You have ${chances - gameLetters.badGuesses.length} chances remaining.`);
  console.log("Game (in getLetter):", gameLetters.placeHolders.join(' '));
  inquirer
  .prompt([
    {
      name: 'letter',
      message: `Give me a letter, ${player}`,
      filter: function(input){
        return input.toLowerCase();
      },
      validate: function(input){
        if(!isLetter(input)){
          return 'Please enter a letter.'
        }
        return true;
      }
    }
  ])
  .then(function(answer){
    console.log("game:", gameLetters.placeHolders.join(' '));
    addSpaces();  
    console.log("is guess in word?");
    gameLetters.inWord(answer.letter);
    // console.log("blanks from Letter const");
    gameLetters.showLetter(answer.letter);
   
    setTimeout(()=>{
      userPlays();
    }, 1000);
    
  })
}

//USER PLAYS A LETTER (called within playGame)
//inside userPlays, getLetter is called
//asks user for play continuation or lets them quit
const userPlays = function(){ 
  addSpaces();
  inquirer
    .prompt([
      { 
        type: "list",
        name: "taketurn",
        message: "Think of a letter. \n",
        choices: ["Ok!", "No. I'm over it."]
      }
    ])
    .then(function(ans){
      if(ans.taketurn !== "Ok!"){
        console.log(`I'm sorry to see you go, ${player}. Enter "npm start" to play again.`);
        setTimeout(()=>{
          console.clear();
        }, 500);
      }
      else {
        getLetter();
      }
    })
}

//PLAYS THE GAME (called within inviteToPlay)
//instantiates the word
//inside playGame, userPlays is called
const playGame = function(){
  word = new Word();
  wordToGuess = word.randomWord;
  gameLetters = new Letter(wordToGuess);
  console.log(`word to guess: ${wordToGuess}`);
  gameLetters.fillArrays();
  console.log(`Oh, ${player}, I am not sure you will get this one.`);
  setTimeout(()=>{
    userPlays()
  }, 1500);
} //ends playGame

//INVITES PLAYER TO PLAY. CALLED FIRST.
//inside inviteToPlay, playGame is called
const inviteToPlay = function(){
  inquirer
  .prompt(
    [{
      name: "player",
      message: "What is your name? \n",
    },
      {
      type: "list",
      name: "playgame",
      message: "\n\nDo you want to play hangman?",
      choices: ["Do I ever! Prepared to be smoked.", "Nah. I'd rather chew glass.", "Not now. Ask me later.", ]
    }] 
  )
  .then (function (answers){
    var ans = answers.playgame;
    player = answers.player || "Sparkle Bunny";
    switch(ans){
      case "Nah. I'd rather chew glass.":
        addSpaces();
        console.log(`Oh, ${player}. I get it.`);
        break;
      case "Not now. Ask me later.":
        addSpaces();
        console.log(`No sweat, ${player}. I can wait.`);
        setTimeout(()=>{
          addSpaces();
          console.log("How about now?");
          addSpaces();
          playGame();
        }, 3000);
        break;
        //WHERE THE GAME STARTS
      case `Do I ever! Prepared to be smoked.`:
        addSpaces();
        console.log(`Yeah, good luck with that, ${player}`);
        playGame()
        break;
      default:
      console.log("I'm lost. Try again.");
    }
  })
} //ends invite play

//helper function to just add empty lines for spacing
const addSpaces = function(){
  console.log("\n\n");
}

inviteToPlay();