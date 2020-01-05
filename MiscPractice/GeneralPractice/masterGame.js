console.log("guessingGame.js is connected!");

//setup info for games
var firstName = prompt("Enter first name: ");
var lastName = prompt("Enter last name: ");
var fullName = firstName + " " + lastName;
var age = Number(prompt("Enter your age: "));

//Select a game
var stringChoice = prompt(`Select game number: 1-guessing, 2-whileloops, 3-AgeVerification, 
4-forloops. 5-Functions`);
var numChoice = Number(stringChoice); //convert choice from str to num

//create secret number for games
var number = 10;
console.log(number);

//Ask to play again
function playAgain(){
	playAnswer = prompt("Play again? yes/no");
	return playAnswer;
}

//1: Guessing Game. Ask user for a guess.
if(numChoice === 1){
	guessFunc();

	// func(guess){
	// 	var numGuess = alert("Guess a number: ")
	// };

	//check the guess
	function guessFunc(){
		var stringGuess = prompt("Guess a number: ");
		var numGuess = Number(stringGuess); //convert the string input into a number
		console.log(numGuess, number);

		if(numGuess === number) {
			console.log("you guess correctly");
			alert("you guessed correctly!");
		}

		else if(numGuess > number) {
			alert("your guess is too high!");
			guessFunc();
		}

		else {
			alert("your guess is too low!");
			guessFunc();
		}
	};
	response = playAgain(); //ask user if they want to play again via function
		if (response === `yes`){
			guessFunc();
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
}

//4. ForLoops
else if(numChoice === 4) {
	console.log(`starting ForLoops`);
	
	for(let count = 0; count < 6; count++) {
		console.log(count);
	}
		//LOG<> take the full name entered at start and print out each letter
	for(let i = 0; i < fullName.length; i++) {
		console.log(fullName[i]);
	}

	console.log(`starting prob 1`);
	for(i = -10; i < 19; i++) {
		console.log(i);
	}

	console.log(`starting prob 2`);
	for(i = 9; i <= 40; i++) {
		if (i % 2 === 0){
		console.log(i);
		}

	}

	console.log(`starting prob 3`);
	for(i = 300; i <= 333; i++) {
		if (i % 2 !== 0) {
		console.log(i);
		}
	}

	console.log(`starting prob 4`);
	for(i = 5; i <= 50; i++) {
		if ((i % 3 === 0) && (i % 5 === 0)) {
			console.log(i);
		}

	}
}

//5. Section 12 Functions
else if(numChoice === 5) {
	console.log(`running selection 5`);
	console.log(`Hello ${fullName}`);

	//change - to _
	function kebabChange() {
		console.log(`kebab to snake`);
		let kebabName = prompt(`Enter kebab-cased string: `);
		//regular expression /chartoreplace/g=>replaceall
		return kebabName.replace(/-/g , "_");
	}

	//return true if even and false otherwise
	//decided to use an expression since I never need to know the return or change it
	let isEven = function(numCheck) {
		// if (numCheck % 2 === 0) {
		// 	return true
		// };
		// return false;
		return numCheck % 2 === 0;
	}

	function sing() {
		console.log(`Twinkle twinkle..`);
		console.log(`How I wonder..`);
	}

	setInterval(sing, 1000);//runs sing every 1000ms
	setInterval(function() { //same thing but just defining here
		console.log(`I am an anonymous function`);
		console.log(`this is awesome`);
	}, 2000);

	console.log(kebabChange());
	console.log(isEven(prompt(`Pick a number: `)));




}

