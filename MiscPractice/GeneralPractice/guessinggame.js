console.log("guessingGame.js is connected!");

//setup info for games
var firstName = prompt("Enter first name: ");
var lastName = prompt("Enter last name: ");
var fullName = firstName + " " + lastName;
var age = Number(prompt("Enter your age: "));

//Select a game
var stringChoice = prompt("Select game number: 1-guessing, 2-whileloops, 3-AgeVerification, 4-forloops ");
var numChoice = Number(stringChoice);

//create secret number for games
var number = 10;
console.log(number);

//1: Guessing Game. Ask user for a guess.
if(numChoice === 1){
	var stringGuess = prompt("Guess a number: ");
	var numGuess = Number(stringGuess);
	console.log(numGuess, number);
	// func(guess){
	// 	var numGuess = alert("Guess a number: ")
	// };

	//check the guess
	if(numGuess === number) {
		console.log("you guess correctly");
		alert("you guessed correctly!");
	}

	else if(numGuess > number) {
		alert("your guess is too high!");
	}

	else {
		alert("your guess is too low!");
	}
}

//2: While Loops.
else if(numChoice === 2){
	var count = 0;
	// var strName = prompt("enter your name: ");
	// var numName = Number(strName);

	//remind user of name
	alert(`You said your name was ${fullName}`);
	console.log("Length of name: " + fullName.length);

	//display name, letter by letter
	while(count < fullName.length){
		console.log(fullName[count]);
		count++;
	}
	//display ran number, in increments of 5
	while(number > 0) {
		console.log("rand number: " + number);
		number-=5;
	}

	//While Loops Problem Set
	var oneNum = -11;
	while(oneNum < 19) {
		console.log("numbers between -10 and 19: " + oneNum);
		oneNum++;
	}
	var twoNum = 10;
	while(twoNum < 40) {
		if(twoNum % 2 === 0){
		console.log("even numbers btwn 10-40: " + twoNum);
		}
		twoNum++;
	}
	var threeNum = 300;
	while(threeNum < 333) {
		if(threeNum % 2 === 1){
		console.log("odd numbers between 300-333: " + threeNum);
		}
		threeNum++;
	}
	var fourNum = 5;
	while(fourNum < 50) {
		if(fourNum % 5 === 0 && fourNum % 3 === 0){
		console.log("numbers divisible by 5-3 between 5-50: " + fourNum);
		}
		fourNum++;
	}
	var answer = prompt("are we there yet?");
	//-1 returns if what you indexOf doesn't exist
	while(answer.indexOf("yes") === -1) {
		var answer = prompt("are we there yet?");
	}
}

//3. Drinking Age Guessing (if statements)
else if(numChoice === 3) {
	// var firstName = prompt("Enter first name: ");
	// var lastName = prompt("Enter last name: ");
	// var age = Number(prompt("Enter your age: "));
	var daysAlive = age * 365.25;

	var fullName = firstName + " " + lastName;

	console.log("Your name is " + fullName + " and your age is " + age);
	alert("You have been alive ~" + daysAlive + " days.");

	if(age % 2 === 1){
		console.log("Your age is odd.");
	}

	if(age % Math.sqrt(age) === 0){
		console.log("Perfect Square");
	}

	if(age < 18){
		if(age < 0){
			console.log("ERROR: Age is negative.");
		}
		else{
			console.log("You cannot enter.");
		}
	}

	else if(age < 21){
		console.log("You may enter but cannot drink.");
	}

	else{
		if(age === 21){
			console.log("Happy 21st birthday!");
		}
		console.log("Welcome. Drinking age verified.");
	}

//4. ForLoops
// else if(numChoice === 4) {




// 	}

}
