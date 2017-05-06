/* Declaring variables at the top to be used and 
functions later on*/

var colors = document.getElementById("colors");
/*colors.addEventListener("click",Rainbow );*/

var square = document.getElementById("square");
square.addEventListener("click",function() {
	if(numbers.innerHTML != shapes[1].style.backgroundColor){
	 	$("#square").removeClass("square");
		$("#square").addClass("face");
	}
	if(numbers.innerHTML != shapes1[0].style.backgroundColor){
		$("#square").removeClass("square");
		$("#square").addClass("face");
		return;
	}
	if(numbers.innerHTML == shapes1[0].style.backgroundColor){
		$("#square").removeClass("face");
		$("#square").addClass("square");
		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		$("#oval").removeClass("face");
		$("#oval").addClass("oval")
		oval.style.backgroundColor = shapes1[0].style.backgroundColor;
		circle.style.backgroundColor = shapes1[0].style.backgroundColor;
		square.style.backgroundColor = shapes1[0].style.backgroundColor;
		par.style.backgroundColor = shapes1[0].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes1[0].style.backgroundColor;
	 	egg.style.backgroundColor = shapes1[0].style.backgroundColor;
	 	numbers.style.color = shapes1[0].style.backgroundColor;

		return;
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

	}
	
	
});


var oval = document.getElementById("oval"); 
oval.addEventListener("click", function() {
	if(numbers.innerHTML != shapes[2].style.backgroundColor){
		$("#oval").removeClass("oval");
		$("#oval").addClass("face");
	}
	if(numbers.innerHTML != shapes1[1].style.backgroundColor){
		$("#oval").removeClass("oval");
		$("#oval").addClass("face");
		return;
	}	
	if(numbers.innerHTML == shapes1[1].style.backgroundColor){
		$("#square").removeClass("face");
		$("#square").addClass("square");
		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		$("#oval").removeClass("face");
		$("#oval").addClass("oval");
		oval.style.backgroundColor = shapes1[1].style.backgroundColor;
		circle.style.backgroundColor = shapes1[1].style.backgroundColor;
		square.style.backgroundColor = shapes1[1].style.backgroundColor;
		par.style.backgroundColor = shapes1[1].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes1[1].style.backgroundColor;
	 	egg.style.backgroundColor = shapes1[1].style.backgroundColor;
	 	numbers.style.color = shapes1[1].style.backgroundColor;

		return;
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

	}
	
	
});


var egg = document.getElementById("egg");
egg.addEventListener("click",function () {
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

	
});

var rectangle = document.getElementById("rectangle");
rectangle.addEventListener("click", function () {

	if(numbers.innerHTML != shapes[3].style.backgroundColor){
	 	$("#rectangle").removeClass("rectangle");
		$("#rectangle").addClass("face");
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
	 	oval.style.backgroundColor = shapes[3].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[3].style.backgroundColor;
	 	circle.style.backgroundColor = shapes[3].style.backgroundColor;
	 	par.style.backgroundColor = shapes[3].style.backgroundColor;
	 	square.style.backgroundColor = shapes[3].style.backgroundColor;
	 	numbers.style.color = shapes[3].style.backgroundColor;
	 	
	}
	return;
	
});

var par = document.getElementById("par");
par.addEventListener("click", function () {
	if(numbers.innerHTML != shapes[4].style.backgroundColor){
	 	$("#par").removeClass("par");
	 	$("#par").addClass("face");
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
		numbers.style.color = shapes[4].style.backgroundColor;
		oval.style.backgroundColor = shapes[4].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[4].style.backgroundColor;
	 	circle.style.backgroundColor = shapes[4].style.backgroundColor;
	 	square.style.backgroundColor = shapes[4].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes[4].style.backgroundColor;
	}
	return;
});

var journey= document.getElementById("journey");
journey.addEventListener("click", Start);

var circle = document.getElementById("circle");
circle.addEventListener("click", function () {
	if(numbers.innerHTML != shapes[0].style.backgroundColor){
		$("#circle").removeClass("circle");
		$("#circle").addClass("face");
	}
	if(numbers.innerHTML != shapes1[2].style.backgroundColor){
		$("#circle").removeClass("circle");
		$("#circle").addClass("face");
		return;

	}
	if(numbers.innerHTML == shapes1[2].style.backgroundColor){
		$("#square").removeClass("face");
		$("#square").addClass("square");
		$("#circle").removeClass("face");
		$("#circle").addClass("circle");
		$("#oval").removeClass("face");
		$("#oval").addClass("oval")
		oval.style.backgroundColor = shapes1[2].style.backgroundColor;
		circle.style.backgroundColor = shapes1[2].style.backgroundColor;
		square.style.backgroundColor = shapes1[2].style.backgroundColor;
		par.style.backgroundColor = shapes1[2].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes1[2].style.backgroundColor;
	 	egg.style.backgroundColor = shapes1[2].style.backgroundColor;
	 	numbers.style.color = shapes1[2].style.backgroundColor;

		return;
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
		numbers.style.color = shapes[0].style.backgroundColor;
		oval.style.backgroundColor = shapes[0].style.backgroundColor;
	 	egg.style.backgroundColor = shapes[0].style.backgroundColor;
	 	square.style.backgroundColor = shapes[0].style.backgroundColor;
	 	par.style.backgroundColor = shapes[0].style.backgroundColor;
	 	rectangle.style.backgroundColor = shapes[0].style.backgroundColor;
		
	}
	
});

var div = document.getElementsByTagName("div");

var span = document.getElementsByTagName("span");

var header = document.getElementsByTagName("header");

var h1 = document.getElementsByTagName("h1");

var table = document.getElementsByTagName("table");

var thead =document.getElementsByTagName("thead");

var th = document.getElementsByTagName("th");

var tr =  document.getElementsByTagName("tr");

var novice = document.getElementById("easy");

novice.addEventListener("click", function() {
	
	$("#egg").removeClass("egg");

	$("#rectangle").removeClass("rectangle");
	

	$("#par").removeClass("par");

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
	
} );

var difficult = document.getElementById("hard");
difficult.addEventListener("click",function() {
	$("#egg").addClass("egg");

	$("#rectangle").addClass("rectangle");

	$("#par").addClass("par");
	
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
	

function Start() {
	
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

	difficult.textContet = "Difficult";

	novice.textContent="Novice";
	
	console.log(select);
}

	 




  

 



	




