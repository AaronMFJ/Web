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
