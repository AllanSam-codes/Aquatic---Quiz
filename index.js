const chalk = require('chalk');
var score = 0

var readlineSync = require("readline-sync");

console.log(chalk.black.bgWhite.bold("Hi ! Are you a pet lover ?" + "\n"))
console.log(chalk.blueBright.bold("Many of them have intrested in diffrent kinds of pets " + " \n "))
console.log(chalk.cyan.bold("I am a Aquatic pet lover ! Are you ! Then let see how crazy are you in .", "\n"))
console.log("          ")

var userName = readlineSync.question("welcome ! what is your name ? ")
console.log(chalk.visible.magentaBright("Welcome " + userName.toUpperCase() + " let's have some fun quiz. ! "))
// console.log("      ")


function play(question, answer, options) {
  console.log(question);

  for (var i = 0; i < options.length; i++) {
    console.log(options[i]);
  }
  console.log("         ")

  var userAnswer = readlineSync.question(chalk.white.bgBlack.italic("Choose your option : "));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.bold("you are Right"))
    score = score + 1
  }
  else {
    console.log(chalk.bold.red("you are Wrong"))
    score = score - 1
  }
  console.log(chalk.visible.cyanBright("current score is ", score))
  console.log("------------------")
}
console.log("------------------")


var question = [
  {
    question: "which type of container would you like to keep ? ",
    answer: "a",
    options: ["a)Tank", "b)bowl", "c)pond"],
  },
  {
    question: "which type of fish would you love ? ",
    answer: "b",
    options: ["a)Guppies", "b)Goldfish", "c)shark"],
  },
  {
    question: "Most species of goldfish belong to which fish family ? ",
    answer: "b",
    options: ["a)Herring family", "b)Carp family", "c)Beta fish family"],
  },
  {
    question: "Fish have no lungs. Instead, they breathe and pull air through which part ? ",
    answer: "c",
    options: ["a)Dorsal fins", "b)Scales", "c)Gills"],
  },
  {
    question: "Which species of fish is Nemo in the 2003 animation “Finding Nemo” ?",
    answer: "a",
    options: ["a)Clownfish", "b)Rasbora", "c)Angelfish"],
  },
  {
    question: "What is the biggest fish in the world ? ",
    answer: "b",
    options: ["a)Ocean sunfish", "b)Whale shark", "c)Beluga sturgeon"],
  },
];

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}

var highestScore = [
  {
    Name: "Aneena",
    score: 6
  },
  {
    Name: "surya",
    score: 6
  }
];

console.log("    ")
console.log(chalk.magentaBright.visible("You scored = ", score))
console.log(chalk.magentaBright.visible("Congrats on your great score !"))


console.log("-----------------------")
console.log("    ")
console.log(chalk.yellow.bgBlack.underline("Thank you for playing this quiz  ! Have a nice day ! "))
console.log("    ")
console.log(chalk.cyanBright.bgBlack("List of user's who have scored at top. "))
console.log("    ")

for (var i = 0; i < highestScore.length; i++) {
  var currentScore = highestScore[i]
  console.log("Name :", currentScore.Name, "\nscore", currentScore.score)
}

