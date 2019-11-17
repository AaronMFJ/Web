console.log("guessingGame.js is connected!");


//create secret number
var number = 10;
console.log(number);

//ask user for a guess
var stringGuess = prompt("Guess a number: ");
var numGuess = Number(stringGuess);
console.log(numGuess, number);

// func(guess){
// 	var numGuess = alert("Guess a number: ")
// };

//check the guess

if(Number(numGuess) === number) {
	console.log("you guess correctly");
	alert("you guessed correctly!");
}

else if(Number(numGuess > number)) {
	alert("your guess is too high!");
}

else {
	alert("your guess is too low!");
}

