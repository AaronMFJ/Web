
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

/////////////////////////////////
//////////////////////////OBJECTS

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

