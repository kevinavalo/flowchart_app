function Card(i, q, s, btnTxt1, btnTxt2, btnTxt3, btnTxt4, path1, path2, path3, path4, xpos, ypos, zpos) {
	this.id = i;
	this.question = q;
	this.statement = s;
	this.btn1 = new Button(btnTxt1, path1);
	this.btn2 = new Button(btnTxt2, path2);
	this.btn3 = new Button(btnTxt3, path3);
	this.btn4 = new Button(btnTxt4, path4);
	this.x = xpos;
	this.y = ypos;
	this.z = zpos;
}

function Button(y, z) {
	this.text = y;
	this.pathID = z;
}

var questions = ["Should you buy this?", "Is this necessary?",
								 "Will it make you happy?", "Is it for the home?", "Buy it"];
var statements = ["", "",
									"", "", "You definitely need it"];
var btnTxt1 = ["Maybe", "Of course it is",
							 "Obviously", "Yes", ""];
var btnTxt2 = ["Nahh", "Not really",
							 "Nothing makes me happy", "No", ""]; 
var btn1Path = [2, 3,
								1, 4, -2];
var btn2Path = [1, 3,
								4, 2, -2];
var xpos = [];
var ypos = [];
var xFound = false;
var yFound = false;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var i = 0; i < questions.length; i++) {
	xpos[i] = 500 + i*1000;
	ypos[i] = 1000;
	console.log("x = " + xpos[i] + ", y = " + ypos[i]);
}

var cards = [];
for(var i = 0; i < questions.length; i++) {
	var card = new Card(i, questions[i], statements[i], btnTxt1[i], btnTxt2[i], "", "", btn1Path[i], btn2Path[i], null, null, xpos[i], ypos[i], null);
	cards[i] = card;
}

for(var i = 0; i < questions.length; i++) {
	console.log(cards[cards[i].btn1.pathID].x + " , " + cards[cards[i].btn1.pathID].y );
}