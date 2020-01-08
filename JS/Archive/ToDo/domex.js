
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
	link[i].setAttribute("href", "http://www.bing.com")
} 

//change img
var img = document.querySelector("img");
img.setAttribute("src","https://static01.nyt.com/images/2018/02/11/realestate/11dogs-topbreeds1/11dogs-topbreeds1-master675.jpg");
//<img src="https://static01.nyt.com/images/2018/02/11/realestate/11dogs-topbreeds1/11dogs-topbreeds1-master675.jpg">

// srcset intead of src

//make h1 change color when user clicks (dom-shit)
var h1 = document.querySelector("h1 + h1");
h1.addEventListener("click", function() {
	h1.style.color = "red";
})

//add one to parent element, ul
document.querySelector("ul").addEventListener("click", function() {
	console.log("UL WAS CLICKED");
}) //ouputs for every li in the ul that you click

//change individual li with separate listeners
//changed this from selecting li to p to do other things
var lis = document.querySelectorAll("p");

for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.style.color = "pink";
	})
};


//select the button and select the text
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//setup click listener
// button.addEventListener("click", function() {
// 	paragraph.textContent = "Someone clicked the button";
// }) //marking this // for below exercise

//you can use named function instead of anon
//Same as previous button click 
// button.addEventListener("click", changeText);

// function changeText() {
// 	paragraph.textContent = "Someone Clicked the BUTTON";
// }

//change background with button click
var backButton = document.querySelector("button");
var body = document.querySelector("body");
// var bToggle = false;


backButton.addEventListener("click", function() {
	document.body.classList.toggle("altToggle");
	// 	bToggle = true;
	// 	if(bToggle) {
	// 	body.classList.toggle("altToggle");
	// }; //altToggle is a css class
})

//////////////////////////////////////////////////////////////////////hover events

//changed this from firstLis to lis
var lis = document.querySelectorAll("li");


//change li to blue on mouse over 
// firstLi.addEventListener("mouseover", function() {
// 	// console.log("mouse over");
// 	firstLi.style.color = "blue"
// })
// //changes it back to a different color when mouse over is done
// firstLi.addEventListener("mouseout", function() {
// 	// console.log("mouse over");
// 	firstLi.style.color = "black"
// })

//instead, let's apply it to all lis with a loop
for (var i = 0; i < lis.length; i++) 
{
	lis[i].addEventListener("mouseover", function() {
	this.classList.add("selected"); //this applies to THIS LOOP
	});

	lis[i].addEventListener("mouseout", function() {
	// console.log("mouse over");
	this.classList.remove("selected");
	});
	
	lis[i].addEventListener("click", function() {
		this.classList.toggle("done");
	})
}




