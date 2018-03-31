printReverse([3,6,2,5]);

function printReverse(array) {
	var reverseArray = array.slice();
	for(var i = reverseArray.length - 1; i >= 0; i--) {
		console.log(reverseArray[i]);
	}
}


isUniform([1,2,1,1]);

function isUniform(num) {
	var newArray = num.slice();
	var prevNum = newArray[0];
	for(var i = 0; i < newArray.length; i++) {
		if(prevNum !== num[i]) {
			return console.log(false);
		} 
	}
	return console.log(true);
}


sumArray([10,3,10,4]);

function sumArray(numbers) {
	var newSum = numbers.slice();
	var results = 0;
	newSum.forEach(function(element) {
		results += element;
	});
	console.log(results);
}


max([2,44,0,1,55,10,23])

function max(nums) {
	var highNum = 0;
	nums.forEach(function(element) {
		if(highNum <= element) {
			highNum = element;
		}
	});
	console.log(highNum);
}

////////////////////////////////////
////////////////BUILDING OWN FOREACH

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
//this below will run an alert 3 times with HI in the alert, instead of the arr names.
myForEach(colors, function(){
	alert("hi");
});

myForEach(colors, function(boop){
	console.log(boop);
});





