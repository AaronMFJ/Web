console.log("connected advancedjQuery.js");

//common methods!

//click() 
//a quick way to add a click listener to elements
$('#event').click(function() {
	alert("clicked id#event")
});

$('button').click(function() {
	var but = $(this).text();
	console.log("you clicked " + but)
});

$('#spans').click(function() {
	$(this).css("background", "pink")
});

$('p').click(function() {
	$(this).css("background", "blue")
});

$('h1').click(function() {
	var text = $(this).text();
	console.log("you clicked " + text)
});


//vanilla requires variable, set up click listener, 
//loop through all buttons


//keypress()
//quick way to add a keypress listener to elements





//on()