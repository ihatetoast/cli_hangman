# CLIngman

CLIngman is a hangman game built with NodeJS using constructors.

This is a command line game, so to play the game, you must fork it and run with "npm start".

npm packages used:

* Lodash
* Inquirer
* Is-letter
* Request (see note below)

Demo:
Please note, the demo below includes the word to guess logged to the console in order to speed up the guessing process to keep the demo short.

![Demo as gif](clingman.gif)

APIs used: [DataMuse](https://api.datamuse.com/api) to help me come up with scores of words in seconds, which allowed me more time for the logic.

### Note:
Request was used to collect various words from an api vocabulary / word bank, thus saving me from coming up with words on my own. It is not used in any part of the game's function. Request is deprecated and one of its dependencies, Cryptiles, has a security issue. I have since uninstalled Request since it is not part of the game. I do, however, believe in giving it credit for helping me out. Thanks, Request. You made my life easier. Sniff. G'bye.