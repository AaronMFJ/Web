

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

// //isEven?
// function isEven(num) {
// // 	//alternate
// // 	return num % 2 ===0;
// // }
// 	if(num % 2 === 0) {
// 		return true
// 	}
// 	else {
// 		return false;
// 	}
// }

// console.log(isEven(4));
// console.log(isEven(21));
// console.log(isEven(68));
// console.log(isEven(333));

// //Factorize 5x4x3x2x1
// function factor(num) 
// {
// 	//version A
// 	if (num == 0) {
// 		return 1;
// 	}
// 	var result = num
// 	for(var result = num; num > 1; num--) {
// 		result *= (num - 1);	
// 	}
// 	// Version B
// 	// while(num > 1) 
// 	// {
// 	// 	result *= (num - 1);
// 	// 	num--;
// 	// }

// 	//Version C
// 	// var result = 1;
// 	// for(var i = 2; i <= num; i++) {
// 	// 	result *= i;
// 	// }
// 	return result;
// }

// console.log(factor(5));
// console.log(factor(2));
// console.log(factor(10));
// console.log(factor(0));

// //Replace all - with _
// // /term/g does a global replace
// function kebab(str) 
// {
// 	if(str.indexOf("-")) 
// 	{
// 	var result = str.replace(/-/g, "_")
// 	return result;
// 	}
// }

// console.log(kebab("hello-world"));
// console.log(kebab("dogs-are-awesome"));
// console.log(kebab("blah"));

/////////////////////////////////////////////////////////
/////////////////JS SCOPE///////////////////////////////

//Scope is the context that code is executed in.

//in the example, x is only available in the fuction.
//not defined in the global scope
// funciton doMath() {
// 	var x = 40;
// 	console.log(x);
// }

//in this example var y = 99; y is defined in the global scope.
// funciton doMoreMath() {
// 	console.log(y);
// }
// returns 99

// child scopes have access to global/parent scope. But the
// global scope can be changed if changed in the child
// you can keep name in scope by adding var. So, global str 
// and var str in child will be separate.

///////////////////////////////////////////////////////
/////////////////////HIGHER ORDER FUNCTIONS////////////

// // setInterval(anotherFunction, interval in ms)

// function sing() {
// 	console.log("twinkle twinkle");
// 	console.log("how I wonder");
// }

// function song() {
// 	console.log("little start");
// }

// // will run sing every 1 second
// // clearInterval() can stop it
// setInterval(sing, 1000);

// // You can use anonymous function to use to call code
// setInterval(function() {
// 	console.log("I am anonymous function");
// }, 2000);

//////////////////////////////////////////////////////////
//////////////// JS ARRAYS ///////////////////////////////

// var friends = ["eva", "comet", "siarra"];
// // (eva 0, comet 1, siarra 2) indexed at 0
//  console.log(friends[0]) is eva

// //can set different index
// friends[0] = "bug" will put bug in index 0

// add another index to the array to add to it
// friends[3] = "David"

// //can initialze different ways
// var friends = []
// var friends = new Array()

// //can hold any data
// var random = [39, true, "hey", null]

// //arrays have a length property 
// var nums = [35, 43, 23, 23];
// nums.length //4


/////////////////////////
// PUSH AND POP

//PUSH adding something to end or array; returns array.length

// var colors = ["red", "orange", "yellow"];
// colors.push("green") adds green to end of array and returns array length

//POP removes last item in array; returns removed item

// var colors = ["red", "orange", "yellow"];
// colors.pop() returns last item in array and removes it

/////////////////////////
// SHIFT AND UNSHIFT

// //UNSHIFT adds to the front of array;
// // var colors = ["red", "orange", "yellow"];
// colors.unshift("teal") adds to index 0

//SHIFT removes first item in array; returns item removed
// var colors = ["red", "orange", "yellow"];
// colors.shift() removes red from array; returns red
// Can be stored in variable
// var ded = colors.shift() //ded = red


///////////////////////
/////INDEXOF/////////

// //use indexOf to find index of item in array
// var colors = ["red", "orange", "yellow"];
// colors.indexOf("red") returns 0
// colors.indexOf("yellow") returns 2
// //returns -1 if doens't exist

///////////////////////
//// SLICE

// //Use to copy parts of an array .slice(start, stop)
// var colors = ["red", "orange", "yellow"];
// var warm = colors.slice(1, 2) returns orange

// // Does not alter original array
// // You can also use Slice to copy entire array
// var newColors = colors.slice()

/////////////////////////////////////////////////////////
///////////////// ARRAY ITERATION ///////////////////////
