//console.dir(document) prints out entire object

//just like CSS when we write a selector to select elements and apply styles
//with JS and DOM we SELECT and MANIUPLATE it.

var hi = document.querySelector("h1");
//selects an h1 on the page and saves it into the h1 variable

h1.style.color = "pink";
//changes the h1 variable style color to pink

var body = document.querySelector("body");
var inBlue = false;

setInterval(function(){
    if (inBlue) {
        body.style.background = "white";
    }
    else {
        body.style.background = "#3498db"
    }
    isBlue = !isBlue;
}, 1000);