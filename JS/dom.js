////DOM Select and Manipulate

//These all return node-lists. - close to array but can't
//loop them.

var tag = document.getElementById("highlight");
//selects an element by id called hightlight
//<li id = "highlight">"new" - Add a ToDo</li>

//select all elements by class name
var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);
//<li class = "bolded">"list" - View all Todos</li>
//<li class = "bolded">"delete" = Remove Specific Todo</li>

//select all elements by tags
var tags = document.getElementsByTagName("li");
//returns all the <li> as list
//can also use ("body") or ("h1") or ("title")

//Query Selector
var tag = document.querySelector("#hightlight");
var tag = document.querySelector(".bolded");
//returns first element that matches a given
//CSS-style selector.
//Can also take tag name like ("h1")
//Make css selections ("li a.special")

//Query Selector ALL
var tag = document.querySelectorAll("#hightlight");
//same as original, but all of the matching items

//diff ways to select <p>
//<p id="first" class="special">Hello turds</p>
var p = document.getElementsByTagName("p")[0];
var p = document.querySelector("p");
var p = document.querySelector("#first");
var p = document.querySelectorAll("p")[0];
var p = document.getElementById("first");
var p = document.getElementsByClassName("special")[0];

//<p id="first" class="special">Hello turds</p>
p.textContent //hello turds

//alter it
p.textContent = "kys"; //replaces the <p with kys. Will
//overwrite strong tag, or text formatting. Return text only.

//keep html elements in tact
p.innerHTML //keeps formatting, like ul tags, strong tags, etc

////////////////////////////////////////////////MANIPULATE

//js can select and change
var h1 = document.querySelector("hightlight");
hightlight.style.color = "yellow"//changes h1 to yellow
hightlight.style.border = "10px solid red" //adds border

//but can do that in css. Intead define class in CSS

.some-class {
	color: blue;
	border: 10px solid red;
}

var tag = document.getElementById("hightlight");
//add the new class to the selected element. classList is not an array
tag.classList.add("some-class") //adds to selected element
tag.classList.remove("some-class") //removes a class
tag.classList.toggle("some-class") //toggle a class

///////////////////////////////////////////////////////ATTRIBUTES
//getAttribute and setAttribute

// <a href="www.google.com">I am a link</a>
// <img src="logo.png">

var link = document.querySelector("a");
link.getAttribute("href"); //"www.google.com"
//change href attribute
link.setAttribute("href","www.dogs.com");
//<a href="www.dogs.com">I am a link</a>

//change img
var img = document.querySelector("img");
img.setAttribute("src","corgi.png");
//<img src="corgi.png">

// srcset intead of src

//change all links on page to go to something else
var link = document.getElementsByTagName("a");

//have to loop through all links. setAtt won't work
//since that is for 1 element and we need to change all
//can't use foreach since not real array
for(var i = 0; i < link.length; i++) {
	link[i].style.background = "pink" //pink link zone 
	link[i].style.border = "1px dashed purple"; //border
	link[i].style.color = "orange";
} 

for(var i = 0; i < link.length; i++) {
	console.log(link[i].getAttribute("href"))
} //prints all links on a page
for(var i = 0; i < link.length; i++) {
	link[i].setAttribute("href", "http://www.bing.com")
} 


///////////////////////////////////////////////////////EVENTS
//How it works
//Listen for the click on this <button>
//Listen for the hover on the <h1>
//Listen for keypress on text input

// this is the basic line
element.addEventListener(type, functionToCall);

//ex
var button = document.querySelector("button");

button.addEventListener("click", function() {
	console.log("SOMEONE CLICKED THE BUTTON");
});

//ex
// <button>Click Me</button>
// <p>No one has clicked me yet</p>

//select the button and select the text
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//setup click listener
button.addEventListener("click", function() {
	paragraph.textContent = "Someone clicked the button";
})
