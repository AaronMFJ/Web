// secrets.js connects to secrets.html with parent of practice.html
console.log("secrets.js is connected");

var firstName = prompt("Enter first name: ");
var lastName = prompt("Enter last name: ");
var age = Number(prompt("Enter your age: "));
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



