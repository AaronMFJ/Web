

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


var number = 5;

var guess = prompt("guess a number");

if(Number(guess) === number) {
alert("You guesssed it");
}

else if(Number(guess) < number) {
alert("too low");
}

else {
alert("too high");
}
