const inquirer = require('inquirer');

const Word = require('./word');
const Gameword = require('./gameword');
const Letter = require('./letter');


var z = new Letter("z");
var text = new Word();

console.log(z.printLetter('z'));
console.log(`game word array is ${Gameword.wordArr}`);