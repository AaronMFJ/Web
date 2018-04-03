console.log("connected")



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
// var newColors = document.querySelector()
var gameOver = false;
var easyMode = false;
var hardMode = true;



//set title display to match pickedColor
colorDisplay.textContent = pickedColor.toUpperCase()



easy.addEventListener("click", function() {
	this.classList.add("difficulty")
	hard.classList.remove("difficulty")
	easyMode = true;
	hardMode = false;
	console.log("easy activated")
	colors = colorGenerator(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = "none"
		}
	}
});
hard.addEventListener("click", function() {
	this.classList.add("difficulty")
	easy.classList.remove("difficulty")
	easyMode = false;
	hardMode = true;
	console.log("hard activated")
	colors = colorGenerator(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = "none"
		}
	}
});


//Note:1
for(var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//Note:2
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
			
			}
		};
	});
};

retry.addEventListener("click", function() {
	console.log("newgame")
	newGame()
})


///////////////////	FUNCTIONS	////////////////////

function win() {
	if(gameOver) {
		winResult.style.backgroundColor = pickedColor;
		for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = pickedColor;
		};
		retry.textContent = "Play Again? "
		// retry.addEventListener("click", newGame());
		retry.addEventListener("mouseover", function() {
			this.classList.add("selected");
		});
		retry.addEventListener("mouseout", function() {
			this.classList.remove("selected");
		});
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
	var rgb = "rgb("
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return rgb + r + ", " + g + ", " + b + ")"

}



function newGame() {
	colors = colorGenerator(6)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	colorDisplay.textContent = pickedColor.toUpperCase();
	retry.textContent = "New Colors";
	resultDisplay.textContent = null
	winResult.style.backgroundColor = "#232323";
	gameOver = false;
}
//Note1:
//for each square box, change background color
//to each rbg color in the array. While cycling
//through, also add click listeners to each square.

//Note2:
//clickedColor is being set to the background color
//of each square. .style.backgroundColor returns a rgb
//color and it's beting set to clickedColor.
//The if statement covers if the clickedColor is the
//pickedColor that was randomly generated.
//Selecting the wrong color (else) changes square to background
//color

//Note3:
//Math.random() is between 0-.99. Math.random() * 5 = 0-4.99
//Math.floor() returns highest of the random
//Math.floor(Math.random() * 5 + 1) = 0-5