var numberofSquares=6;
var colors=[];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay=document.querySelector("#message");
var h1 =document.querySelector("h1");// for coloring the back with the correct color
var resetButton = document.querySelector("#reset");

var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listener
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"?numberofSquares=3:numberofSquares=6; //by using ternary operator rather than using if loop below //
	        reset();
			// if(this.textContent ==="Easy"){
			// 	numberofSquares=3;
			// }
			// else{
			// 	numberofSquares=6;
			// }
		});
	}

	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.background = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.background;

			//compare color to pickedColor
			console.log(clickedColor,pickedColor);

			if(clickedColor === pickedColor) 
			{
				messageDisplay.textContent="Correct !";
				resetButton.textContent="Play Again !!"
				changeColors(clickedColor);
				h1.style.background=clickedColor;
			} else {
				this.style.background="#F49B49e";
				messageDisplay.textContent="TRY AGAIN";
			}
		});
	}
	reset();
}


function reset(){
	//geneerating random colors//
	colors=generateRandomColors(numberofSquares);

	//pick new color from array
	pickedColor=pickColor();

	//chnge color on the page 
	colorDisplay.textContent= pickedColor;
	resetButton.textContent="New Colors";

	messageDisplay.textContent="";

	for(var i = 0;i < squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.background="#F49B49"

}

resetButton.addEventListener("click",function(){
	reset();
})




function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length); // to generate random number array  for getting diff colors every time
    return colors[random];
   }

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for (var i = 0; i <num; i++) {
		//get random Color and push into arr
		arr.push(randomColor())
		
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255
    var r = Math.floor(Math.random()*256);

	//pick a "green" from 0-255
    var g = Math.floor(Math.random()*256);

	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256);
	"rgb(r,g,b)"
	return "rgb("+ r +", "+ g +", "+ b +")"; //trickey bug:-space after the commas help it to compare properly
}