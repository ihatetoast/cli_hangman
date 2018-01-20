// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
// var urlDatamuseApi = `https://api.datamuse.com/words?rel_trg=emotion}`


const request = require('request');

const wordArr = ['game', 'dog', 'cat','horse', 'emotion', 'programming','texas', 'australia', 'sport', 'art', 'literature', 'monkey'];

//generates a wordbank. right now hard coded
function WordBank(theme){
  this.fillBank = function(){
    var bank = []
    var urlDatamuseApi = `https://api.datamuse.com/words?rel_trg=${theme}`
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

//get one word from 
var newWordbank = new WordBank('dog');
console.log(newWordbank.fillBank());

//player chooses theme