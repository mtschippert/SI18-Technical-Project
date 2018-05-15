var start = document.getElementById("start");
var memory, player, red, green, yellow, blue, y, z;
start.addEventListener("click",function(){init()});

function getRand(){
	return Math.floor(Math.random()*4);
}

function getValue(x){
	if (x.id=="contactinfo"){return 0;}
	if (x.id=="about"){return 1;}
	if (x.id=="skills"){return 2;}
	if (x.id=="portfolio"){return 3;}
	
	return 0;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function init(){
	memory = [];
	
	red = document.getElementById("contactinfo");			//0
	green = document.getElementById("about");				//1
	yellow = document.getElementById("skills");				//2
	blue = document.getElementById("portfolio");			//3
	
	red.addEventListener("click",function(){playPlayer(this)});
	green.addEventListener("click",function(){playPlayer(this)});
	yellow.addEventListener("click",function(){playPlayer(this)});
	blue.addEventListener("click",function(){playPlayer(this)});
	
	document.getElementById("start").innerHTML="Score: "+0;
	
	playSimon();
}

async function playSimon(){
	y=0;
	
	while (y < memory.length){
		press(memory[y]);
		await sleep(600);
		y++;
	}
	
	var x = getRand();
	switch (x){
		case 0: memory.push(x);
				press(x);
				break;
		case 1: memory.push(x);
				press(x);
				break;
		case 2: memory.push(x);
				press(x);
				break;
		case 3: memory.push(x);
				press(x);
				break;
		default: break;
	}
	
	z=0;
}

async function playPlayer(x){
	press(getValue(x));
	
	if (getValue(x)!=memory[z]){
		lose();
	}
	else if (y==z){
		document.getElementById("start").innerHTML="Score: "+(y+1);
		await sleep(1000);
		playSimon();
	}
	else {
		z++;
	}
}

async function press(x){
	
	switch (x){
			case 0: 
					red.style.background="red";
					await sleep(500);
					red.style.background="white";
					break;
			case 1: 
					green.style.background="green";
					await sleep(500);
					green.style.background="white";
					break;
			case 2: 
					yellow.style.background="yellow";
					await sleep(500);
					yellow.style.background="white";
					break;
			case 3: 
					blue.style.background="blue";
					await sleep(500);
					blue.style.background="white";
					break;
			default: break;
	}
}

function lose(){
	console.log("You lost.");
	document.getElementById("start").innerHTML="You lost. Click to Play Again?";
	memory = [];
}