
console.log("dom.js is connected");


//   The Syntax

//   element.addEventListener(type, functionToCall);

//   var button = document.querySelector("button");
//   button.addEventListener("click", function() {
//      console.log("Someone Clicked the button");   
//   });



var button = document.querySelector("button");
var paragraph = document.querySelector("p");


button.addEventListener("click", function() {
    paragraph.textContent = "Yay we changed the text";
    console.log("button clicked");
});
