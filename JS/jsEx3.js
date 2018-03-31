
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////BUILDING OWN FOREACH

var nums = [45,65,77,34 ]

//standard forEach
nums.forEach(function(num) {
console.log(num);
});
//custom func that does the same
myForEach(nums, function(num) {
	console.log(num);
});

///////lets make a custom looping function
var colors = ["red", "orange", "yellow"];

// function that takes an array and a function as args
function myForEach(arr, func) {
	//loop through array
	for(var i = 0; i < arr.length; i++) {
		//call func for each item in array
		// func() -->
		func(arr[i]);
	}
}
//this will call alert 3 times. Let's pass data into the func now (see -->)
myForEach(colors, alert)
// --> turns each alert into a titled alert per array item

//usually it's an anonymous function. Remember anon can have ()
myForEach(colors, function(){
	alert("hi"); //runs an alert 3 times with HI in the alert, instead of the arr names.
});

//cool, now if we do the same as a forEach...
//function(whatever) will output each array item
myForEach(colors, function(boop){
	console.log(boop);
}); //prints red orange yellow

///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////OBJECTS

//take the above and apply it to objects.
//Adding myForEach to the proptype as array.
//it takes function(func) and this is itself.
//basically this states what to do when it's used
array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	} 
}

//colors=this, myforEach->prototype.
//This is the code called when you run custom 
colors.myForEach(function(color)) {
	console.log(color);
}

/////////////////////////////////////////////////////////////OBJECT EXAMPLES

//Model a single person in city

//this it not very helpful. Arrays are in order
var person = ["Aaron", 32, "Raleigh"];
person[2] //to retrieve hometown. But you may not know where it's at in array
//could have messed up the order

//instead, let's create an object. {}
//unlike arrays, objects have no order
var person = {
	name: "Aaron", //aaron is under key name
	age: 32,	   //32 under age key
	city: "Raleigh"
};

//To update

//Can update age this way
person["age"] += 1;
//Or even this way
person.city = "Austin"

//To initialize

//make an empty object and add to it
var person = {}
person.name = "Siarra";
person.age = 30;
person.city = "Raleigh";

//all at once
var person = {
	person.name = "Siarra";
	person.age = 30;
	person.city = "Raleigh";
};

//another way
var person = new object();
person.name = "Siarra";
person.age = 32;
person.city = "raleigh";



//NOTES
//objects can have objects and arrays inside of them
//arrays are very specific order and bound indexes
//objects have no specific order, just key value pairs (dictionaries)

//bracket notation, like arrays
console.log(person["name"]);

//you can lookup using a variable with bracket notation
var str = "name";
console.log(someObj.str)      //does not look for "name"
console.log(someObj[str]) 	  //does evaluate str and looks for "name"

//dot notation but not if starts with a number or spaces
console.log(person.name); 	  //good
console.log(person.1name);    //bad
console.log(person.dog name); //bad


//you can add arrays into objects
//this array with make a collection of objects.
var posts = [
	{ //array index 0 is this
		titles: "Cats meh",
		author: "Aaron",
		comments: ["stupid book", "loved it"]
	},
	{ //array index 1 is this
		title: "how to fly",
		author: "Siarra",
		comments: ["she's not a pilot", "wrong book"]
	}
];
//posts.length = 2, posts has 2 objects
//lets pull some data out
posts[0] = will give the first array
posts[0].title = "cats meh"
posts[1].comments[0] = "shes not a pilot"

/////////////////////////////////////////////////////OBJECT EXERCISES
//create an array of movie objects. Each with title, rating and hasWatched properties

var movies = [
	{
		title: "Batman Begins",
		rating: 4.5,
		hasWatched: true
	},
	{
		title: "Apollo 13",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Wall-E",
		rating: 4.0,
		hasWatched: true
	},
	{
		title: "Wrinkle in Time",
		rating: 3.5,
		hasWatched: false
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	},
	{
		title: "Star Wars",
		rating: 5,
		hasWatched: true
	}

]

//for each movie in movies, run function and pass each element
movies.forEach(function(movie) {
console.log(buildString(movie));
});

//take the movie element, run it through some shit
 function buildString(element) {
	var result = "You have ";
	if(element.hasWatched == true) {
		result += "watched "
		// console.log(result + element.title + " - " + element.rating + " stars");
	} else {
		result += "not watched "
		// console.log(result + element.title + " - " + element.rating + " stars");
	}
	result += "\"" + element.title + "\" - ";
	result += element.rating + " stars"
	return result;
};

//returns
// You have watched "Batman Begins" - 4.5 stars
// You have watched "Apollo 13" - 5 stars
// You have watched "Wall-E" - 4 stars
// You have not watched "Wrinkle in Time" - 3.5 stars
// You have not watched "Les Miserables" - 3.5 stars
// You have watched "Star Wars" - 5 stars

/////////////////////////////////////////////////////////OBJECT METHODS
//you can add functions into a property, which is called methods

var obj = {
	name: "chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: function(x,y) {
		return x + y;
	}
}
//if we wanted to call add
obj.add(10,5) //returns 15

//why add a function as a method?
//keeps organized, and logically together. 
//Lets say we wanted speak() to work for cats and dogs
//but speak is a namespace collision (woof, or meow?)
var dog = {};
dog.speak = function() {
	return "woof";
}
var cat = {};
cat.speak = function() {
	return "meow"
}

dog.speak() //returns woof
cat.speak() //returns cat

//now we can have dog and cat methods w/functions that are same name but inside
//other groups. Like user.delete post.delete comments.delete all do different things
//but don't conflict with each other

//THIS

var comments = {};
comments.data = ["good", "yay", "lame", "kys"];
function prints(arr) {
	arr.forEach(function(element) {
		console.log(element);
	});
}

//if we want to print what is in comments.dat
prints(comments.data); //returns the .data array

//or we can do THIS
//this refers to the object comments
comments.print = function() {
	this.data.forEach(function(element) {
		console.log(element);
	});
}

comments.print() //returns the comments.data array

