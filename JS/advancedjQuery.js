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
$('input').keypress(function() {
	console.log("key is pressed")
})


$('input').keypress(function(event) {
	if(event.which === 13){
		console.log("you hit ENTER")
	}
	// console.log(event)
	//finds the key event number used above
})


//on()
//acts like addEventListener it lets you 
//specify the type of event to listen for

$('h1').on("click", function() {
	//change all
	//$('h1').css("color", "purple");
	//change only clicked
	$(this).css("color", "purple");
});

$('input').on("keypress", function(){
	console.log("keypressed!")
});

//make buttons bold on hover and normal on leave
$('button').on("mouseenter", function(){
	console.log("mouse enter");
	$(this).css("font-weight", "bold");
});

$('button').on("mouseleave", function(){
	console.log("mouse leave");
	$(this).css("font-weight", "normal");
});

//why you use on()?
//In most cases click() and on('click') will work. One
//difference is
//click() only adds listeners to existing elements
//on() will add listeners to potential future elements


//FX

//fades out, and deletes item
$("#buttonFade").on("click", function(){
	$("div").fadeOut(1000, function(){
		$(this).remove();
		console.log("divs removed")
	});
});

//fadeIn (fades in)
//fadeToggle (toggles in or out)
//fadeToggle(500)

//slideDown brings in vis
//slideUp sends out vis
//slideToggle toggles one
$("#buttonSlide").on("click", function(){
	$("#div3").slideToggle(1000, function(){
		console.log("slide complete");
	});
});


