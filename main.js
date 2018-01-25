
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
let player = 'Eddy Mologie';
//save word as obj for tru and plhldr
let word = { }
let gameLetters = {}

const addSpaces = function(){
  console.log("\n\n");
}
  
//retrieves words and picks one at random from txt files
  
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
        choices: ["Nah. I'd rather chew glass.", "Not now. Ask me later.", "Do I ever! Prepared to be smoked."]
      }] 
    )
    .then (function (answers){
      var ans = answers.playgame;
      player = answers.player;
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
  }

const userPlays = function(){ 
  console.log(`userPlays called. word to guess is ${wordToGuess}`);
  console.log(`You have ${chances} chances remaining.`);
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
      addSpaces();
      if(ans.taketurn !== "Ok!"){
        addSpaces();
        console.log(`I'm sorry to see you go, ${player}. Enter "npm start" to play again.`);
        setTimeout(()=>{
          console.clear();
        }, 2000);
      }
      else {
        addSpaces();
        getLetter();
      }
    })
}
const getLetter = function(){
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
    let turn = gameLetters.inWord(answer.letter);
    setTimeout(()=>{
      userPlays()
    }, 1000);
  })
}

//set up. once set up, start asking
const playGame = function(){
  //deal with the word const
  //instantiate
  word = new Word();
  //get that random word
  wordToGuess = word.randomWord;
  // console.log(`the word for this game: ${wordToGuess}`);
  // console.log("playgame was called");
  //deal with the letters from wordtoguess
  gameLetters = new Letter(wordToGuess);
  gameLetters.fillArrays();
  //start taking input from user. userplays deals with the turns/chances
  console.log(`Oh, ${player}, I am not sure you will get this one.`);
  setTimeout(()=>{
    userPlays()
  }, 1500);
}

inviteToPlay();