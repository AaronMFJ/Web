
console.log("dom.js is connected");


//   The Syntax

//   element.addEventListener(type, functionToCall);

//   var button = document.querySelector("button");
//   button.addEventListener("click", function() {
//      console.log("Someone Clicked the button");   
//   });


//  Below is two ways to change color of background with a button.
//  The first way is classic changing the color by selecting elements

var button = document.querySelector("button");
// var paragraph = document.querySelector("p");
// var body = document.querySelector("body");
// var backColor = false;

//when you click the button, if backColor is even, change white, if off change blue.
//Then add 1 to backcolor
// button.addEventListener("click", function() {
//     if (backColor == true) {
//        body.style.background = "white";
//     }
//     else (body.style.background = "blue");
//     backColor = !backColor; //toggle true/false

// });


//   Another way using class set in the HTML but toggling it on and off

button.addEventListener("click", function (){
    document.body.classList.toggle("purple");
});