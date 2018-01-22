const request = require('request');

var theme;
const GameWord = function(){
//to become method to get theme
  this.getTheme = function(){
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
        theme = answer.theme;
        console.log(`returned theme is ${theme}`);
      })
  },
  this.fillBank = function(theme){
    console.log("got this far");
    this.theme = theme;
    var bank = []
    var urlDatamuseApi = `https://api.datamuse.com/words?rel_trg=${this.theme}`
    request(`${urlDatamuseApi}`, function (err, res, body) {
      if(err) throw err;
      let bodyJSON = JSON.parse(body);//because body is a string
      console.log(`bodyJSON is type of ${typeof bodyJSON}`);
      for(i in bodyJSON){
        console.log("damn word: ",bodyJSON[i]["word"])
        bank.push(bodyJSON[i]["word"])
      }
      let keys = Object.keys(bodyJSON);
      wordBankLength = `length of bank is ${keys.length}`;
      console.log(keys.length );
      
      setTimeout(()=>{
        console.log(`bank is ${bank}`);
      }, 1500);
    });
  }
}

module.exports = GameWord;