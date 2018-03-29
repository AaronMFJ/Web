
//TODO List that prompts user to add to array

var todoList = ["buy turtles"];
var input = prompt("What do you want to do? ");

window.setTimeout(function() {
 // gives html .5 second to load before running js


 while (input != "quit") 
 {
 	if (input === "new") 
 	{
 		var newItem = prompt("What do you want to add? ");
 		console.log([newItem]);
 		todoList.push(newItem);
 	}
 	else if (input === "list") 
 	{
 		console.log(todoList.slice());
 	}
 	else 
 	{
 		prompt("Not a valid selection.");
 	}
 	input = prompt("What do you want to do? ");
 }

 console.log("quitting")

}, 500);
