

// var firstName = prompt("What is your name?");
// var lastLame = prompt("What is your last name")
// var userAge = prompt("What is your age")
// var fullName = firstName + lastLame
// console.log("Hi there " + " " + fullName)
// console.log(firstName + " is " + userAge + " years old")

// var userAge = prompt("What is your age");
// var time = userAge * 365.25;
// console.log("You've been alive " + time + " days.");

// assuming x = 5
// x === "5"  false
// x !== "5" true

///////////////////////////
// Number Guessing Game
// var number = 5;

// var guess = prompt("guess a number");

// if(Number(guess) === number) {
// alert("You guesssed it");
// }

// else if(Number(guess) < number) {
// alert("too low");
// }

// else {
// alert("too high");
// }

//////////////////////////
// print while loop count
// var word = "hello";
// var count = 0;

// // .lenth is len()
// while(count < word.length) {
// 	console.log(word[count]);
// 	count++;
// }

/////////////////////////
// print numbers divisible by 4
// var num = 1;

// while(num <= 20)
// 	{
// 		if(num % 4 === 0)
// 			{
// 				console.log(num);
// 			}
// 		num++;	
// 	}

// ///////////////////////////////////////////////////////
// /////////////////EXERCISES WHILE LOOPS/////////////////
// console.log("Print all numbers between -10 and 19")
// var number = -10;
// while(number <= 19) {
// 	console.log(number);
// 	number++;
// }

// console.log("Pring all even numbers between 10 and 40")
// var evenNumbers = 0;
// while(evenNumbers <= 40) {
// 	if(evenNumbers >=10 && evenNumbers % 2 === 0) {
// 		console.log(evenNumbers)
// 	}
// evenNumbers++;
// }


// console.log("Print all odd numbers between 300 and 333")
// var oddNumbers = 0;
// while(oddNumbers <= 333) {
// 	if(oddNumbers >= 300 && oddNumbers % 2 === 1) {
// 		console.log(oddNumbers)
// 	}
// oddNumbers++;
// }

// console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
// var divNumber = 0;
// while(divNumber <= 50) {
// 	if(divNumber >= 5 && divNumber <= 50) {
// 		if((divNumber % 5 === 0) && (divNumber % 3 === 0)){
// 			console.log(divNumber);
// 		}
// 	}
// divNumber++;	
// }
////////////////////////////////////

// ANNOYOMATIC WHILE LOOOP IndexOf
// var question = prompt("Are we there yet?");

// while(question !== "yes" && question !== "yeah") {
// 	var question = prompt("Are we there yet?");
// }

// alert("yay")

// V2
// IndexOf version will search for any version of yes
// var question = prompt("Are we there yet?");

// while(question.indexOf("yes") === -1) {
// 	var question = prompt("Are we there yet?");
// }

// alert("yay")

///////////////////////////////////////////////////////////
///////////////////// FOR LOOPS  /////////////////////////

// for(initialize; condition; step)
// for(var count = 0; count < 6; count ++){
// 	console.log(count);
// }

// var str = "hello"
// for(var i = 0; i < str.length; i++){
// 	console.log(str[i]);
// }

// console.log("Print all numbers between -10 and 19")
// for(var i = -10; i <= 19; i++) {
// 	console.log(i)
// }

// console.log("Pring all even numbers between 10 and 40")
// for(var i = 10; i <= 40; i++) {
// 	if(i % 2 === 0) {
// 	console.log(i);		
// 	}

// }

// console.log("Print all odd numbers between 300 and 333")
// for(var i = 300; i <= 333; i++) {
// 	if(i % 2 !== 0) {
// 	console.log(i);
// 	}
// }

// console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
// for(var i = 5; i <= 50; i++) {
// 	if(i % 5 == 0 && i % 3 == 0) {
// 	console.log(i);	
// 	}
	
// }
///////////////////////////////////////////////////////////////
//////////////////// FUNCTIONS ///////////////////////////////
// function doSomething() {
// 	console.log("hello world");
// }
// doSomething();

// function sayHi() {
// 	console.log("hey");
// 	console.log("bye");
// }

// sayHi();

// function sayHello(name) {
// 	console.log("hey" + name);
// }

// sayHello("Aaron")

// Function Declarations////////////////////
// function area(len, wid) {
// 	console.log(len * wid);
// 	var result = len * wid;
// 	return result
// }

// area(9,2)

// function capitalize(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var city = "paris";
// var capital = capitalize(city);
// console.log(capital);

// function expression//////////////////
// var capitalize = function(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }

//EXERCISES////////////////////
// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true
// 	}
// 	else {
// 		return false;
// 	}
// }

// isEven(3)
// console.log(isEven(4));
// console.log(isEven(21));
// console.log(isEven(68));
// console.log(isEven(333));

function factor(num) {
	var result = 0
	while(num > 0) {
		num *= (num - 1);
		num--;
	}
return result;
}

console.log(factor(5));
console.log(factor(2));
console.log(factor(10));
//console.log(factor(0));