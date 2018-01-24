const request = require('request');
const _ = require('lodash');

const GameWord = function(theme){ 
  this.theme = theme;
  var bank = [];
  this.fillBank = function(){

    var urlDatamuseApi = `https://api.datamuse.com/words?rel_trg=${this.theme}`;
    request(`${urlDatamuseApi}`, function (err, res, body) {
      if(err) throw err;
      let bodyJSON = JSON.parse(body);
      for(i in bodyJSON){
        bank.push(bodyJSON[i]["word"])
      }
      let keys = Object.keys(bodyJSON);
      const wordbankLength = keys.length;
      //want to build out game and then return to deal with this promise other than the set timeout hack
      setTimeout(()=>{
        // console.log(`bank is ${bank} and length is ${bank.length}`);
        //use lodash for random word
        const thisGameWord = _.sample(bank);
        // console.log(`game word is ${thisGameWord}`);
        return thisGameWord
      }, 1000);
    });
  }
}
var apples = new GameWord('animals');
console.log(apples.fillBank());
// module.exports = GameWord;