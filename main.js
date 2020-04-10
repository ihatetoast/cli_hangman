const inquirer = require('inquirer');
const isLetter = require('is-letter');
const Word = require('./word');
const Letter = require('./letter');

console.log(`
CLIngman: Hangman on the CLI.`);

//variables:
let wordToGuess = null;
let chances = 10;
let player;
//save word as obj for tru and plhldr
let word = {};
let gameLetters = {};

//CHECKS TO SEE IF GAME IS OVER
const checkWinLoss = function(){
  if(gameLetters.badGuesses.length === 10){
    console.log(`
      I'm sorry, ${player}, but you lost.
    `);
    inviteToPlay();
    return;
  } else if(gameLetters.placeHolders.indexOf('_ ') === -1){
    console.log(`
      Congrats, ${player}! You won.
    `);
    inviteToPlay();
    return;
  } else{
    console.log(`Bad guesses remaining: ${chances - gameLetters.badGuesses.length}`);
    userPlays();
  }
}


//USER PLAYS A LETTER (called within playGame)
//inside userPlays, getLetter is called
//asks user for a letter input
const getLetter = function(){
  addSpaces()
  console.log("Game:", gameLetters.placeHolders.join(' '));
  inquirer
  .prompt([
    {
      name: 'letter',
      message: `Guess a letter, ${player}`,
      filter: function(input){
        return input.toLowerCase();
      },
      validate: function(input){
        if(!isLetter(input)){
          return 'Please enter a letter.'
        } else if((gameLetters.goodGuesses.indexOf(input) !== -1) || (gameLetters.badGuesses.indexOf(input) !== -1)){
          return `You\'ve already guessed ${input}.`
        }
        return true;
      }
    }
  ])
  .then(function(answer){
    addSpaces();  
    gameLetters.inWord(answer.letter);
    gameLetters.showLetter(answer.letter);
    checkWinLoss();
    
  })
}

//USER PLAYS  (called within playGame)
//inside userPlays, getLetter is called
//asks user for play continuation or lets them quit
const userPlays = function(){ 
  addSpaces();
  
  inquirer
    .prompt([
      { 
        type: "list",
        name: "taketurn",
        message: "What do you want to do: guess a letter, solve the word, or quit?",
        choices: ["Guess a letter!", "Guess the Word.", "Quit."]
      }
    ])
    .then(function(ans){
      if(ans.taketurn === "Guess the Word."){
        inquirer
        .prompt([
          {
          name: "wholeword",
          message: "Ok, what is the word?",
          filter: function(val){
            return val.toLowerCase();
          }
        }])
        .then(function(answer){
          if(answer.wholeword ===wordToGuess){
            console.log(`Huzzah, ${player}!`);
            inviteToPlay();
          } else{
            console.log(`Wrongo, ${player}-o! You lost. Instant death. Should have thought about that.`);
            inviteToPlay();
          }
        })//ends Guess the Word
      } else if(ans.taketurn === "Guess a letter!"){
        getLetter();
      }else {
        console.log(`I'm sorry to see you go, ${player}. Enter "npm start" to play again.`);
        setTimeout(()=>{
          console.clear();
        }, 500);
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
  // console.log(`Word to solve (for demo only): ${wordToGuess}`);

  gameLetters.fillArrays();
  checkWinLoss();
} //ends playGame

//INVITES PLAYER TO PLAY. CALLED FIRST.
//inside inviteToPlay, playGame is called
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
          console.log("How about now?");
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
  console.log("\n");
}

inviteToPlay();