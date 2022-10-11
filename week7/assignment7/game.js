window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick= startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById("clock");
	x.innerHTML = second;
	//setting timer using setInterval function
	timer = setInterval(timeCount ,TIMER_TICK);
	
	function timeCount(){
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		var allbox = document.querySelectorAll("#game-layer div");
			second = second-1;
			x.innerHTML = second;
			
		if(allbox.length == 0 && second != 0)
		{
			clearInterval(timer);
			alert("YOU WIN");
			second = 0;
			x.innerHTML = second ;

		}
		else if(allbox.length != 0 && second == 0)
		{
			clearInterval(timer);
			alert("Game over");
			second = 0;
			x.innerHTML = second ;
			clearScreen(allbox);
		}
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer =document.getElementById("game-layer") ;
	var colorDrop =document.getElementById("color");
	for (var i =0; i<numbox;i++){
		var tempbox =  document.createElement("div"); 
		tempbox.className = "square" ;//ดูคลาสที่สร้างสี่เหลี่ยม
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		
		//สีกล่อง
		if(colorDrop.value=="red"){
			tempbox.style.backgroundColor = "red";
		}
		else if (colorDrop.value=="blue"){
			tempbox.style.backgroundColor = "blue";
		}
		else{
			tempbox.style.backgroundColor = "green";
		}	
		bindBox(tempbox,i);
	}
}
function bindBox(box,i){
		//เมื่อกดแล้ว กล่องจะหายไป
		box.onclick = function(){
		//กดกล่องแล้ว 
	  	var box  = document.getElementById("box"+i);
	    box.parentNode.removeChild(box);
	}
}

function clearScreen(allbox){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	//var allbox = document.querySelectorAll("#game-layer div") ;
	for (var i=0;i<allbox.length;i++){
		console.log(i);
		allbox[i].parentNode.removeChild(allbox[i]);	
	}
	
	//delete all  div
	
}




