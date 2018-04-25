// $('div')[0];
console.log("connected")

//Sekecting elements

//similar to querySelectorAll in that we give it
//css style selector.

//all images 
$("img")

//select first h1
$("h1")[0]

//selecting id
$("#wife")

//manipulating styles
$("h1").css("color", "yellow")
//var h1 = document.querySelector("h1").style.color = "yellow"

//seleting multiple objects
var style = {
	color: "red",
	background: "pink",
	border: "2px solid red"
}

//then can pass that to jquery
$("h1").css(style) //will make h1 match the style defined

//style multiple elements at once
$("li").css("color", "blue") //selects all lis and changs them
//no need to loop through like below
var lis = document.querySelector("li");
for (var i = 0; i < lis.length; i++) {
	lis[i].style.color = "blue"
}

//apply style to all lis css method
$("li").css({
	fontSize: "10px",
	border: "3px dashed purple",
	background: "rgba(89, 45, 20, 0.5)"
})


$("div").css("background-color", "green")
$(".highlight").css("width", "200px")
$("#third").css("border", "solid orange 2px")
$("div:first-of-type").css("color", "pink")
//or $("div:first").css("color", "pink")



////////METHODS

//basically like textContent. returns text in the element
$("h1").text(); //returns all h1 text
$("ul").text();

//pass in a value
$("h1").text("new text"); //will change h1s to the new text

//innerhtml
$("ul").html(); //returns the html of the ul in html form
$("ul").html("<li>I changed your UL</li><ul>And again</ul>");
$("li").html("<a href='duckduckgo.com'>DUCK DUCK GO</a>"); //changes lis to link

//attributes. gets the value of an attribute for the first element or retrieve one
//$("h1").attr();

//change penguin picture to construction
$("img").css("width", "300px"); //set the size, it's too big
$("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/15-08-historischesRaupenfahrzeug_IMG_1446.JPG/1280px-15-08-historischesRaupenfahrzeug_IMG_1446.JPG");
$("input").attr("type", "color") //changes text input box to color picker