/* h1 Element targeted*/
var h1 = document.getElementsByTagName("h1");

var begin = Number(h1.innerHTML);

/*targeting element by Id which effects
 the number im playing too*/

var game = document.getElementById("max");

/* Declaring a variable to set it equal to 
the targeted span Id in points1 and which is 
later targeted*/
var base = 0;


/* Declaring a variable for the input 
field to target its value */
var box = document.getElementById("box");


/* Declaring a variable and adding an event to
the reset button as well as defining a function 
for it */

var reset = document.getElementById("reset");
reset.addEventListener("click", Reset);
 
function Reset() {
	 var end = 0
	points1.innerHTML = end;
	points2.innerHTML =  end;
	if (points1.innerHTML == end) {
		points1.style.color = "black";
	}
	 if (points2.innerHTML == end) {
		points2.style.color = "black";

	}
}

/* Adding an event listener to variable box 
and creating a function that causes variable 
max content when the input field number is changed*/ 

box.addEventListener("change", function() {
	var end = 0
	max.textContent = box.value;
	points1.innerHTML = end;
	points2.innerHTML =  end;
	if(points1.innerHTML = end) {
	Reset();
	}
	if(points2.innerHTML == end) {
	Reset();
	}
	
});

/*Declaring a variable fot the span elements with id
points that is going to be used to effect the score*/


var points2 = document.getElementById("points2");
points2.innerHTML = base;

var points1 = document.getElementById("points1");
points1.innerHTML = base;



/* Creating a function for both points to
incremented if the 2 conditions are met 
and once the points = box.value it changes 
the color to green*/

var p1 = document.getElementById("p1");
p1.addEventListener("click",PlayerOne); 
	
function PlayerOne() {
	if(points1.innerHTML !== box.value){
		if(points2.innerHTML !== box.value){
			points1.innerHTML++;
		}
	}
		
	if(points1.innerHTML == box.value){
		points1.style.color = "green";
	}

};

var p2 = document.getElementById("p2");
p2.addEventListener("click", PlayerTwo)

function PlayerTwo() {
	if(points2.innerHTML !== box.value){
		if(points1.innerHTML !== box.value){
			points2.innerHTML++ ;
		}
		
	}

	
	if(points2.innerHTML == box.value){
		points2.style.color = "green";
	}
}






