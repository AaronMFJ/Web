


//get player buttons on the page. query to mix it up
var p1ScoreButton = document.querySelector("#p1Button"); 
var p2ScoreButton = document.querySelector("#p2Button");
var rButton = document.getElementById("resetButton");
var scoreBox = document.querySelector("input");
//get player score area on the page
var p1Score = document.querySelector("#pOneScore");
var p2Score = document.querySelector("#pTwoScore");
var setScore = document.getElementById("playTo");
//set up iterator to iterate score when button press
var p1Keeper = 0;
var p2Keeper = 0;
//game state
var gameOver = false;
var winScore = 5;


p1ScoreButton.addEventListener("click", player1);

p2ScoreButton.addEventListener("click", player2);

rButton.addEventListener("click", playerR);

scoreBox.addEventListener("change", changeScore);



function player1() {
	if(!gameOver) {//if gameOver is false
		p1Keeper++; //++score behind scenes in js
		p1Score.textContent = p1Keeper;//set scene to match js
		if(setScore.textContent == p1Keeper) {//add green if win
			p1Score.classList.add("win")
			gameOver = true;//end the game
		};
	};

};

//Add ++ to the score when Player 2 button is pressed
function player2() {
	if(!gameOver) {
		p2Keeper++;
		p2Score.textContent = p2Keeper;
		if(setScore.textContent == p2Keeper) {
			p2Score.classList.add("win")
			gameOver = true;
		};
	};

};

//Reset the scores
function playerR() {
	p1Keeper = 0;
	p2Keeper = 0;
	p1Score.textContent = 0;
	p2Score.textContent = 0;
	p1Score.classList.remove("win")
	p2Score.classList.remove("win")
	// scoreBox.value = null;
	// setScore.textContent = 5;
	gameOver = false;
}

//set playing to: = what's in the box
//win score updates and accepts a string
//resets the game when scorebox changes
function changeScore() {
	setScore.textContent = scoreBox.value;
	winScore = Number(scoreBox.value);
	playerR();
}