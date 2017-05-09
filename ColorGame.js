/* Declaring variables at the top to be used and 
functions later on*/

var colors = document.getElementById("colors");
/*colors.addEventListener("click",Rainbow );*/

var square = document.getElementById("square");
	
var oval = document.getElementById("oval"); 
	
var egg = document.getElementById("egg");
	

var rectangle = document.getElementById("rectangle");


var par = document.getElementById("par");


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

var shapes = [circle,square,oval,rectangle,par,egg];

var shapes1 =[square,oval,circle];

var red = Math.floor(256*Math.random());

var green = Math.floor(256*Math.random());

var blue = Math.floor(256*Math.random());

var rgb = "rgb(" + red + "," + green + "," + blue +")";
	

