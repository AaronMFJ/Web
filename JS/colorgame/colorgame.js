

//////////////////	VARIABLES	/////////////////////


var colors = colorGenerator(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var resultDisplay = document.querySelector("#results");
var winResult = document.querySelector("#win");
var retry = document.querySelector("#retry");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");
var gameOver = false;
var easyMode = false;
var hardMode = true;


//set title display to match pickedColor
colorDisplay.textContent = pickedColor


//Easy Difficulty
easy.addEventListener("click", easyGame);


//Hard Difficulty
hard.addEventListener("click", hardGame); 


//Note:1
for(var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor)
		if(!gameOver) {
			if(clickedColor === pickedColor) {
			resultDisplay.textContent = "Correct!";
			gameOver = true;
			win();
		} else {
			this.style.backgroundColor = "#232323";
			resultDisplay.textContent = "Try Again!";
			
			};
		};
	});
};


//Try Again?
retry.addEventListener("click", newGame);


///////////////////	FUNCTIONS	////////////////////



function win() {
	if(gameOver) {
		winResult.style.backgroundColor = pickedColor;
		for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = pickedColor;
		};
		retry.textContent = "Play Again? "
	};
};


//Note:3
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function colorGenerator(num) {
	var colorArray = [];
	for (var i = 0; i < num; i++) {
		colorArray.push(randomColor())
	};
	return colorArray;
};


function randomColor() {
	var rgb = "rgb(";
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return rgb + r + ", " + g + ", " + b + ")"

}


function newGame() {
	if (easyMode) {
		colors = colorGenerator(3)
	} else {
		colors = colorGenerator(6)
	};
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		if (hardMode) {
			squares[i].style.display = "block"
		} else {
			if (colors[i]) {
				squares[i].style.backgroundColor = colors[i]
			} else {
				squares[i].style.display = "none"
			};
		}
	};
	colorDisplay.textContent = pickedColor
	retry.textContent = "New Colors";
	resultDisplay.textContent = null;
	winResult.style.backgroundColor = "#3097e1";
	gameOver = false;
};



function easyGame() {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	easyMode = true;
	hardMode = false;
	console.log("easy activated")
	colors = colorGenerator(3);
	newGame();
};


function hardGame() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	easyMode = false;
	hardMode = true;
	console.log("hard activated");
	newGame();

};



/////////////////////	NOTES	////////////////////////////
// Note1:
// For each squarebox in the array,
// 	change background color to the random
// 	generated color rgb values.
// 	Add clicklisteners to each square,
// 	Create var clickedcolor and set it to
// 	whichever squares background color you clicked.
// 	If gameover is false,
// 		if clickedcolor matches pickedcolor,
// 		show you win, set gameover to true,
// 		and call the win function.
// 	if gameover is true,
// 		set the background color of squre you clicked on
// 		to blend into background and say sorry sucker



//Note3:
//Math.random() is between 0-.99. Math.random() * 5 = 0-4.99
//Math.floor() returns highest of the random
//Math.floor(Math.random() * 5 + 1) = 0-5



//alternative mouseover function, replaced by css
		// retry.addEventListener("click", newGame());
		// retry.addEventListener("mouseover", function() {
		// 	this.classList.add("selected");
		// });
		// retry.addEventListener("mouseout", function() {
		// 	this.classList.remove("selected");
		// });


/////////////////////// BUGS ////////////////////////////
