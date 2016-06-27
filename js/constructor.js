for(var i = 0; i < cards.length; i++) {
	var div = document.createElement("div");
	var q = document.createElement("q");
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var node = document.createTextNode(cards[i].question);
	var btn1Node = document.createTextNode(cards[i].btn1.text);
	var btn2Node = document.createTextNode(cards[i].btn2.text);
	p1.setAttribute("class", "buttonTxt");
	p1.setAttribute("id", "btn1");
	p1.appendChild(btn1Node);
	p2.setAttribute("class", "buttonTxt");
	p2.setAttribute("id", "btn2");
	p2.appendChild(btn2Node);
	q.appendChild(node);
	div.appendChild(q);
	div.appendChild(p1);
	div.appendChild(p2);

	var element = document.getElementById("impress");
	element.appendChild(div);
}
var elements = document.getElementsByTagName("div");
for(var i = 1; i < elements.length; i++) {
	if(i == 1){
		elements[i].setAttribute("class", "step slide");
	} else {
		elements[i].setAttribute("class", "step slide rightLine");
	}
	if(i > 1) {
		elements[i].setAttribute("data-x", cards[i-2].x);
		elements[i].setAttribute("data-y", cards[i-2].y);
	}
}