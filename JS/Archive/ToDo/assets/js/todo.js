console.log("TODO.JS CONNECTED")

//check off specific todos by clicking
var complete = false;

$("li").click(function() {
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "black"
			textDecoration = "none"
		});
	}
	else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
});