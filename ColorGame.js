/* Declaring variables for shapes to add event listeners to
functions later on*/

var colors = document.getElementById("colors");

var square = document.getElementById("square");
	
var oval = document.getElementById("oval"); 
	
var egg = document.getElementById("egg");
	
var rectangle = document.getElementById("rectangle");

var par = document.getElementById("par");

// Start button even listener to randomize shapes, rephresh wrong shapes
// from unfisnished rounds as well as adding back shapes removed when the 
//  easy button is clicked as well as reseting the background image

var journey= document.getElementById("journey");
journey.addEventListener("click", function() {

	oval.addEventListener("click", oval2);
	square.addEventListener("click", square2);
	egg.addEventListener("click", egg2); 
	circle.addEventListener("click", circle2);
	rectangle.addEventListener("click", rectangle2);
	par.addEventListener("click", par2);
	$("body").css("background-image","url('http://www.backgroundsy.com/file/large/light-colorful-background.jpg')");	
	
	
	var random = Math.floor(Math.random() *6 );
	
	var select = shapes[random];

	$("#square").removeClass("face");
	$("#square").addClass("square");

	$("#egg").removeClass("face");
	$("#egg").addClass("egg");

	$("#rectangle").removeClass("face");
	$("#rectangle").addClass("rectangle");

	$("#par").removeClass("face");
	$("#par").addClass("par");

	$("#circle").removeClass("face");
	$("#circle").addClass("circle");
	
	$("#oval").removeClass("face");
	$("#oval").addClass("oval");

	for (var i = 0; i < shapes.length; i++) {
		var red = Math.floor(256*Math.random());
		var green = Math.floor(256*Math.random());
		var blue = Math.floor(256*Math.random());
		var rgb ="rgb(" + red + "," + green + "," + blue +")";
		shapes[i].style.backgroundColor = rgb;
		
	}
	numbers.style.color = "black";
	
	numbers.innerHTML = select.style.backgroundColor;
	
	journey.textContent = "Start your journey";

	difficult.textContent = "Difficult";

	novice.textContent="Novice";
	
	console.log(select);

});

// Grabbing more elements and id's for use

var circle = document.getElementById("circle");


var div = document.getElementsByTagName("div");

var span = document.getElementsByTagName("span");

var header = document.getElementsByTagName("header");

var h1 = document.getElementsByTagName("h1");

var table = document.getElementsByTagName("table");

var thead =document.getElementsByTagName("thead");

var th = document.getElementsByTagName("th");

var tr =  document.getElementsByTagName("tr");

var novice = document.getElementById("easy");

// Note all the functions change the background image when
// the shape is anything but not equal to the numerical rgb 
// value displayed

// function to be used in the circle click event listener in easy mode

function circle1() {
	
	if(numbers.innerHTML != shapes1[2].style.backgroundColor){
		$("#circle").removeClass("circle");
		$("#circle").addClass("face");
	}
	else {
		$("#square").removeClass("face");
		$("#square").addClass("square");
		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		$("#oval").removeClass("face");
		$("#oval").addClass("oval");
		square.style.backgroundColor = shapes1[2].style.backgroundColor;
		oval.style.backgroundColor = shapes1[2].style.backgroundColor;
		circle.style.backgroundColor = shapes1[2].style.backgroundColor;
		numbers.style.color = shapes1[2].style.backgroundColor;
		$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

	}
}

// function to be used in the oval click event listener in easy mode

function oval1(){
	if(numbers.innerHTML != shapes1[1].style.backgroundColor){
		$("#oval").removeClass("oval");
		$("#oval").addClass("face");
	}
	else{
		$("#square").removeClass("face");
		$("#square").addClass("square");
		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		$("#oval").removeClass("face");
		$("#oval").addClass("oval");
		oval.style.backgroundColor = shapes1[1].style.backgroundColor;
		circle.style.backgroundColor = shapes1[1].style.backgroundColor;
		square.style.backgroundColor = shapes1[1].style.backgroundColor;
	 	numbers.style.color = shapes1[1].style.backgroundColor;
	 	$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

	}
}

// function to be used in the square click event listener in easy mode

function square1() {
	
	if(numbers.innerHTML != shapes1[0].style.backgroundColor){
		$("#square").removeClass("square");
		$("#square").addClass("face");
	}
	else{
		$("#square").removeClass("face");
		$("#square").addClass("square");
		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		$("#oval").removeClass("face");
		$("#oval").addClass("oval")
		oval.style.backgroundColor = shapes1[0].style.backgroundColor;
		circle.style.backgroundColor = shapes1[0].style.backgroundColor;
		square.style.backgroundColor = shapes1[0].style.backgroundColor;
	 	numbers.style.color = shapes1[0].style.backgroundColor;
	 	$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

	}
}

// function for circle event listener in starting mode and hard mode
	
function circle2() {
 	if(numbers.innerHTML != shapes[0].style.backgroundColor){
		$("#circle").removeClass("circle");
		$("#circle").addClass("face");
	}
	else{
		$("#square").removeClass("face");
		$("#square").addClass("square");


		$("#egg").removeClass("face");
		$("#egg").addClass("egg");

		$("#rectangle").removeClass("face");
		$("#rectangle").addClass("rectangle");

		$("#par").removeClass("face");
		$("#par").addClass("par");

		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		
		$("#oval").removeClass("face");
		$("#oval").addClass("oval")
		oval.style.backgroundColor = shapes[0].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[0].style.backgroundColor;
	 	square.style.backgroundColor = shapes[0].style.backgroundColor;
	 	par.style.backgroundColor = shapes[0].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes[0].style.backgroundColor;
	 	numbers.style.color = shapes[0].style.backgroundColor;
	 	$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

	}
};

// function for paralellogram event listener in starting mode and hard mode

function par2() {
	if(numbers.innerHTML != shapes[4].style.backgroundColor){
	 	$("#par").removeClass("par");
	 	$("#par").addClass("face");
	}
	else{
		numbers.style.color = shapes[4].style.backgroundColor;
		oval.style.backgroundColor = shapes[4].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[4].style.backgroundColor;
	 	circle.style.backgroundColor = shapes[4].style.backgroundColor;
	 	square.style.backgroundColor = shapes[4].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes[4].style.backgroundColor;
		$("#square").removeClass("face");
		$("#square").addClass("square");
		
		$("#egg").removeClass("face");
		$("#egg").addClass("egg");

		$("#rectangle").removeClass("face");
		$("#rectangle").addClass("rectangle");

		$("#par").removeClass("face");
		$("#par").addClass("par");

		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		
		$("#oval").removeClass("face");
		$("#oval").addClass("oval")
		numbers.style.color = shapes[4].style.backgroundColor;
		oval.style.backgroundColor = shapes[4].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[4].style.backgroundColor;
	 	circle.style.backgroundColor = shapes[4].style.backgroundColor;
	 	square.style.backgroundColor = shapes[4].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes[4].style.backgroundColor;
	 	$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

	}
};

// function for rectangle event listener in starting mode and hard mode

function rectangle2() {

	if(numbers.innerHTML != shapes[3].style.backgroundColor){
	 	$("#rectangle").removeClass("rectangle");
		$("#rectangle").addClass("face");
	}
	else{
		oval.style.backgroundColor = shapes[3].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[3].style.backgroundColor;
	 	circle.style.backgroundColor = shapes[3].style.backgroundColor;
	 	par.style.backgroundColor = shapes[3].style.backgroundColor;
	 	square.style.backgroundColor = shapes[3].style.backgroundColor;
	 	numbers.style.color = shapes[3].style.backgroundColor;
	 	$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

		$("#square").removeClass("face");
		$("#square").addClass("square");


		$("#egg").removeClass("face");
		$("#egg").addClass("egg");

		$("#rectangle").removeClass("face");
		$("#rectangle").addClass("rectangle");

		$("#par").removeClass("face");
		$("#par").addClass("par");

		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		
		$("#oval").removeClass("face");
		$("#oval").addClass("oval")
	 }
};

// function for egg event listener in starting mode and hard mode

function egg2() {
	if(numbers.innerHTML != shapes[5].style.backgroundColor){
	 	$("#egg").removeClass("egg");
		$("#egg").addClass("face");
		
	}
	else{
	 	oval.style.backgroundColor = shapes[5].style.backgroundColor;
	 	square.style.backgroundColor = shapes[5].style.backgroundColor;
	 	circle.style.backgroundColor = shapes[5].style.backgroundColor;
	 	par.style.backgroundColor = shapes[5].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes[5].style.backgroundColor;
	 	numbers.style.color = shapes[5].style.backgroundColor;
	 	$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

	 	$("#square").removeClass("face");
		$("#square").addClass("square");


		$("#egg").removeClass("face");
		$("#egg").addClass("egg");

		$("#rectangle").removeClass("face");
		$("#rectangle").addClass("rectangle");

		$("#par").removeClass("face");
		$("#par").addClass("par");

		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		
		$("#oval").removeClass("face");
		$("#oval").addClass("oval")
	}
};

// function for oval event listener in starting mode and hard mode

function oval2() {
	if(numbers.innerHTML != shapes[2].style.backgroundColor){
		$("#oval").removeClass("oval");
		$("#oval").addClass("face");
	}
	else{
		$("#oval").removeClass("face");
		$("#oval").addClass("oval");

		$("#square").removeClass("face");
		$("#square").addClass("square");


		$("#egg").removeClass("face");
		$("#egg").addClass("egg");

		$("#rectangle").removeClass("face");
		$("#rectangle").addClass("rectangle");

		$("#par").removeClass("face");
		$("#par").addClass("par");

		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		
		square.style.backgroundColor = shapes[2].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[2].style.backgroundColor;
	 	circle.style.backgroundColor = shapes[2].style.backgroundColor;
	 	par.style.backgroundColor = shapes[2].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes[2].style.backgroundColor;
	 	oval.style.backgroundColor = shapes[2].style.backgroundColor;
	 	numbers.style.color = shapes[2].style.backgroundColor;
	 	$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

	}
};

// function for square event listener in starting mode and hard mode

function square2() {
	if(numbers.innerHTML != shapes[1].style.backgroundColor){
	 	$("#square").removeClass("square");
		$("#square").addClass("face");
	}
	else{
		$("#square").removeClass("face");
		$("#square").addClass("square");


		$("#egg").removeClass("face");
		$("#egg").addClass("egg");

		$("#rectangle").removeClass("face");
		$("#rectangle").addClass("rectangle");

		$("#par").removeClass("face");
		$("#par").addClass("par");

		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		
		$("#oval").removeClass("face");
		$("#oval").addClass("oval")
	 	oval.style.backgroundColor = shapes[1].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[1].style.backgroundColor;
	 	circle.style.backgroundColor = shapes[1].style.backgroundColor;
	 	par.style.backgroundColor = shapes[1].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes[1].style.backgroundColor;
	 	numbers.style.color = shapes[1].style.backgroundColor;
	 	$("body").css("background-image","url('http://33.media.tumblr.com/3e4ccc13280095f28acf4ef91cda36fa/tumblr_n7l8pdSEtp1slt6qeo2_500.gif')");

	}
};


// Easy buttpm which removes the classes of the bottom 3 shapes and 
// uses the functions for the 3 shapes with an easy mode function for
// their event listener ie circle, square, and oval as well as setting
// as well as reseting the background image

novice.addEventListener("click", function() {
	$("#square").removeClass("face");
	$("#square").addClass("square");

	$("#circle").removeClass("face");
	$("#circle").addClass("circle");
	
	$("#oval").removeClass("face");
	$("#oval").addClass("oval");


	$("#egg").removeClass("egg");
	$("#egg").removeClass("face");


	$("#rectangle").removeClass("rectangle");
	$("#rectangle").removeClass("face");

	$("#par").removeClass("face");
	$("#par").removeClass("par");
	$("body").css("background-image","url('http://www.backgroundsy.com/file/large/light-colorful-background.jpg')");


	oval.removeEventListener("click", oval2);
	square.removeEventListener("click", square2);
	egg.removeEventListener("click", egg2); 
	circle.removeEventListener("click", circle2);
	rectangle.removeEventListener("click", rectangle2);
	par.removeEventListener("click", par2);

	circle.addEventListener("click", circle1);
	square.addEventListener("click", square1);
	oval.addEventListener("click", oval1);	
	

	var random = Math.floor(Math.random() *3 );
	
	var select1 = shapes1[random];
	for (var i = 0; i < shapes1.length ; i++) {
		var red = Math.floor(256*Math.random());
		var green = Math.floor(256*Math.random());
		var blue = Math.floor(256*Math.random());
		var rgb ="rgb(" + red + "," + green + "," + blue +")";
		shapes1[i].style.backgroundColor = rgb;
		
	}
	numbers.style.color = "black";
	
	numbers.innerHTML = select1.style.backgroundColor;
	
	journey.textContent = "Start over";

	novice.textContent="Next Easy journey";
	
	difficult.textContent = "Difficult";
	
	console.log(select1);

	
});

// Hard mode event listener which does the same thing as the start menu excpet with 
// some text content changes
	
var difficult = document.getElementById("hard");
difficult.addEventListener("click",function() {

	oval.addEventListener("click", oval2);
	square.addEventListener("click", square2);
	egg.addEventListener("click", egg2); 
	circle.addEventListener("click", circle2);
	rectangle.addEventListener("click", rectangle2);
	par.addEventListener("click", par2);
	$("body").css("background-image","url('http://www.backgroundsy.com/file/large/light-colorful-background.jpg')");

	$("#square").removeClass("face");
	$("#square").addClass("square");


	$("#egg").removeClass("face");
	$("#egg").addClass("egg");

	$("#rectangle").removeClass("face");
	$("#rectangle").addClass("rectangle");

	$("#par").removeClass("face");
	$("#par").addClass("par");

	$("#circle").removeClass("face");
	$("#circle").addClass("circle");
	
	$("#oval").removeClass("face");
	$("#oval").addClass("oval");

	
	var random = Math.floor(Math.random() *6 );
	
	var select = shapes[random];

	for (var i = 0; i < shapes.length; i++) {
		var red = Math.floor(256*Math.random());
		var green = Math.floor(256*Math.random());
		var blue = Math.floor(256*Math.random());
		var rgb ="rgb(" + red + "," + green + "," + blue +")";
		shapes[i].style.backgroundColor = rgb;
	}

	numbers.style.color = "black";
	
	numbers.innerHTML = select.style.backgroundColor;
	
	journey.textContent = "Start over";

	difficult.textContent = "Next hard journey";

	novice.textContent="Novice";

	console.log(select);
	
});

// Array of shapes used to go through to add randomized rgb value for 
// start and difficulty mode

var shapes = [circle,square,oval,rectangle,par,egg];

// Array of shapes used to go through to add randomized rgb value for 
// easy mode


var shapes1 =[square,oval,circle];

// Color randomizer using the math.random() method and math.floor method 
// to get the numerical value to assign rgb values for the background color

var red = Math.floor(256*Math.random());

var green = Math.floor(256*Math.random());

var blue = Math.floor(256*Math.random());

var rgb = "rgb(" + red + "," + green + "," + blue +")";
	

