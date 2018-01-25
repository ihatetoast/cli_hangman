
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


//NODE MODULES 
const fs = require('fs');
//3rd PARTY MODULES
const inquirer = require('inquirer');
// const request = require('request');//only for me to get words instead of making my own up.
const _ = require('lodash');

//OWN MODULES
const options = require('./options');

//topics globally as used in diff fcn
// var topics = ["animals", "sports", "literature", "emotions", "food", "programming"];


//just an easier way to find random words. 
//used an api but only for me, not for the game.
const animalArray = options.animals;
const sportsArray = options.sports;
const emotionsArray = options.emotions;
const literatureArray = options.literature;
const foodArray = options.food;

hangman = {
  wordsArray: [...animalArray, ...sportsArray, ...emotionsArray, ...literatureArray, ...foodArray],
  wins: 0, 
  losses: 0, 
  turns: 10,
  thisWord: null,

  reset: function(){
    this.turns = 10; //only reset turns. keep track of wins
  },
  

}
// console.log(`animalArray is ${animalArray}`);
// console.log(`wordsArray is ${hangman.wordsArray}`);
console.log(`random word is ${_.sample(hangman.wordsArray)}`);














//function that retrieves many words related to a topic. stores in a text file. write and not append file as i don't want duplicate words
// const getWords = function(){ 
//   topics.forEach(topic => {
//     let bank = []
//     let urlDatamuseApi = `https://api.datamuse.com/words?rel_trg=${topic}`;
//     request(`${urlDatamuseApi}`, function (err, res, body) {
//       if(err) throw err;
//       let bodyJSON = JSON.parse(body);
//       for(i in bodyJSON){
//         bank.push(bodyJSON[i]["word"])
//       }
//        fs.writeFileSync(`${topic}.txt`, bank)
//     });
//   })
// }
  

//THE MAIN ENTRY TO THE GAME
// 'use strict';
// function playGame(){
//   getWords();
//   //ask if they want to play
//   inquirer
//   .prompt(
//     [{
//       name: "player",
//       message: "What is your name?",
//     },
//       {
//       type: "list",
//       name: "playgame",
//       message: "Do you want to play hangman?",
//       choices: ["Nah. I'd rather chew glass.", "Not now. Ask me later.", "Do I ever! Prepared to be smoked."]
//     }] 
//   )
//   .then (function (answers){
//     var ans = answers.playgame;
//     var player = answers.player;
//     switch(ans){
//       case "Nah. I'd rather chew glass.":
//         console.log(`Oh, ${player}. I get it.`);
//         break;
//       case "Not now. Ask me later.":
//         console.log(`No sweat, ${player}. I can wait.`);
//         setTimeout(()=>{
//           console.log("How about now?");
//           playGame();
//         }, 3000);
//         break;
//         //WHERE THE GAME STARTS
//       case `Do I ever! Prepared to be smoked.`:
//         console.log(`Yeah, good luck with that, ${player}`);
//         //ask for a theme
//         // askTheme();
//         break;
//       default:
//       console.log("I'm lost. Try again.");
//     }
//   })
// }//end fcn playGame



// //THEMES DETERMINE THE WORDS CHOSEN
// // function askTheme(){
// //   inquirer
// //   .prompt([{
// //     type: "list", 
// //     name: "themes", 
// //     message: "Pick a theme, and I'll find a word that relates to it somehow.",
// //     choices: topics
// //   }])
// //   .then(function(answer){
// //     var gameTheme = answer.themes;
// //     switch(gameTheme){
// //       case "animals":
// //         console.log(`expect answer to be animals:  ${gameTheme}`);
// //         const Animals = new Hangman("animals");
// //         Animals.getWord("animals");
// //         break;
// //       case "sports":
// //       console.log(`expect answer to be sports: ${gameTheme}`);
// //         const Sports = new Hangman("sports");
// //         Sports.getWord("sports");
// //         break;
// //       case "literature":
// //       console.log(`expect answer to be literature: ${gameTheme}`);
// //         const Literature = new Hangman("literature");
// //         Literature.getWord("literature");
// //         break;
// //       case "emotions":
// //       console.log(`expect answer to be emotions: ${gameTheme}`);
// //         const Emotions = new Hangman("emotions");
// //         Emotions.getWord("emotions");
// //         break;
// //       case "food":
// //         console.log(`expect answer to be food: ${gameTheme}`);
// //         const Food = new Hangman("food");
// //         Food.getWord("food");
// //         break;
// //       case "programming":
// //         console.log(`expect answer to be programming: ${gameTheme}`);
// //         const Programming = new Hangman("programming");
// //         Programming.getWord("programming");
// //         break;
// //       default:
// //       console.log("ERMAHGERD. MER NERD BERKED.");
// //     }
// //   })
// // }

// playGame();
