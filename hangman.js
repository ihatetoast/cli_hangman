const fs = require('fs');
const inquirer = require('inquirer');
const _ = require ('lodash');

const Word = require('./word');

const Hangman = function(theme){
  this.theme = theme;
  this.guessesRem = 10;//decide later. to match body parts only or scaffold, too?
  this.lettersGuessed =[];
  this.wins = 0;
  this.losses = 0;
  this.wordToGuess = '';
//retrieves words and picks one at random from txt files
  this.getWord = function(theme){
    fs.readFile(`${theme}.txt`, "utf-8", function(err, data){
      if(err) throw error;
      const wordString = data;
      const wordStringArr = wordString.split(',');
      wordToGuess = _.sample(wordStringArr);
      console.log(`Player needs to guess ${wordToGuess}`);
    })
    this.startGame();
  };
  this.startGame = function(){
    console.log("starting game;");
    this.guessesRem = 10;
    this.lettersGuessed = [];
    //recursively ask for a letter
    inquirer
    .prompt([{
      name: "ready", 
      type: "confirm", 
      message: "Ok, ready?"
    }])
    .then(function(answer){
      if(answer.ready){
        console.log("user wants to play a game.");
        let GameWord = new Word(wordToGuess);
        console.log(`GameWord is ${GameWord.word}`);
        GameWord.makeDashes();
      }
      else{
        console.log("Make up your mind!");
      }
    })

  }

  
}


module.exports = Hangman;