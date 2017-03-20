
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	//mose buttons event listeners
	setupModeButton();
	setupSquares();
	reset();

	//add initial colors to square
//add click listeners to squares

}

reset();

function setupModeButton() {
	for (var i =0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			
			reset();

			//figure out how many squares to show
			//pick new colors
			//pick a new pickedColor
			//update page to reflect changes

		});
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		//add initial colors to square
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			//squares.style.background = pickedColor;
		}	else {
				this.style.background = "#232323";
				this.style.boxShadow = "none";
				messageDisplay.textContent = "Try Again";
			}
		
		});
	}
}


function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	
	pickedColor = pickColor();
	console.log(pickColor);
	//change colorDisplay to match pickedd Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
	        squares[i].style.boxShadow =
			"0 0 0.2em #fff,0 0 0.4em #fff,0 0 0.6em #fff,0 0 0.8em " + colors[i] +",0 0 1.2em " + colors[i] +",0 0 1.6em " + colors[i] +",0 0 2.0em " + colors[i]+",0 0 2.4em " + colors[i] ;
		} 
		else {
			squares[i].style.display = "none";
			
		}
		squares[i].style.background = colors[i];
		squares[i].style.boxShadow =
			"0 0 0.2em #fff,0 0 0.4em #fff,0 0 0.6em #fff,0 0 0.8em " + colors[i] +",0 0 1.2em " + colors[i] +",0 0 1.6em " + colors[i] +",0 0 2.0em " + colors[i]+",0 0 2.4em " + colors[i] ;
	}
	h1.style.background = "steelblue";

}




resetButton.addEventListener("click", function(){
reset();
});




function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
		squares[i].style.boxShadow = 
		"0 0 0.2em #fff,0 0 0.4em #fff,0 0 0.6em #fff,0 0 0.8em " + color +",0 0 1.2em " + color +",0 0 1.6em " + color +",0 0 2.0em " + color +",0 0 2.4em " + color ;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}
function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
		//get random color and push into arr
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);

	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}