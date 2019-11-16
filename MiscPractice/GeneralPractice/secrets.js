// secrets.js connects to secrets.html with parent of practice.html
console.log("secrets.js is connected");

var firstName = prompt("Enter first name: ");
var lastName = prompt("Enter last name: ");
var age = prompt("Enter your age: ");
var daysAlive = age * 365.25;

var fullName = firstName + " " + lastName;

console.log("Your name is " + fullName + " and your age is " + age);
alert("You have been alive ~" + daysAlive + " days.");



