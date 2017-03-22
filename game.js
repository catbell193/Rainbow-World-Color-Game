var h1 = document.getElementsByTagName("h1");

var begin = Number(h1.innerHTML);

var game = document.getElementById("max");

var base = 0;


var box = document.getElementById("box");






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



 



var points2 = document.getElementById("points2");
points2.innerHTML = base;

var points1 = document.getElementById("points1");
points1.innerHTML = base;

var base = 0;




/*var input = document.getElementsByTagName("input");
input.addEventListener("change",function() {

});*/



var p1 = document.getElementById("p1");
p1.addEventListener("click",PlayerOne); 
	
function PlayerOne() {
	if(points1.innerHTML !== box.value){
		if(points2.innerHTML !== box.value)
			points1.innerHTML++;
	}
			
	
	if(points1.innerHTML == box.value){
		points1.style.color = "green";
	}

};

var p2 = document.getElementById("p2");
p2.addEventListener("click", PlayerTwo)

function PlayerTwo() {
	if(points2.innerHTML !== box.value){
		if(points1.innerHTML !== box.value)
			points2.innerHTML++ ;
		
	}

	
	if(points2.innerHTML == box.value){
		points2.style.color = "green";
	}
}






