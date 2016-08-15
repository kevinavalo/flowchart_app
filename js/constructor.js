for(var i = 0; i < cards.length; i++) {
	var div = document.createElement("div");
	var q = document.createElement("q");
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var node = document.createTextNode(cards[i].question);
	var btn1Node = document.createTextNode(cards[i].btn1.text);
	var btn2Node = document.createTextNode(cards[i].btn2.text);
	var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("x", "0");
	svg.setAttribute("y", "0");
	if(i === 80) {
		svg.setAttribute("width", "15000");
	} else {
		svg.setAttribute("width", "5000");
	}
	if(i === 45) {
		svg.setAttribute("height", "6000");
	} else if(i == 80) {
		svg.setAttribute("height", "15000");
	} else {
		svg.setAttribute("height", "5000");
	}
	svg.setAttribute("class", "svg");
//	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	if(path1MX[i] !== undefined) {
		var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		if(path1V1st[i]) {
			path1.setAttribute("d", "M" + path1MX[i] + " " + path1MY[i] + " v " + path1V[i] + " h " + path1H[i]);
		} else {
			path1.setAttribute("d", "M" + path1MX[i] + " " + path1MY[i] + " h " + path1H[i] + " v " + path1V[i])
		}
		path1.setAttribute("fill", "transparent");
		path1.setAttribute("stroke", "mediumslateblue");
		path1.setAttribute("stroke-width", "5");
		svg.appendChild(path1);
	}

	if(path2MX[i] !== undefined) {
		var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		if(path2V1st[i]) {
			path2.setAttribute("d", "M" + path2MX[i] + " " + path2MY[i] + " v " + path2V[i] + " h " + path2H[i]);
		} else {
			path2.setAttribute("d", "M" + path2MX[i] + " " + path2MY[i] + " h " + path2H[i] + " v " + path2V[i])
		}
		path2.setAttribute("fill", "transparent");
		path2.setAttribute("stroke", "mediumslateblue");
		path2.setAttribute("stroke-width", "5");
		svg.appendChild(path2);	
	}

	if(i === 0) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1500 1995 h -1350");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1650 2200 v -100 h 1000 v -1100 h 340");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M3650 700 v -700 h -2000 v -500");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 6) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M900 245 h 400 v 750");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 8) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M900 245 h 400 v 500 h 1200 v 1800");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 10) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M900 245 h 200 v 3000");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 12) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M270 495 v 700 h 300 v 500 h 1430");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M460 495 v 600 h 800 v 300 h 2300 v 105");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M640 495 v 400 h 800 v 200 h 3450 v 500 h 110");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 17) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M400 3700 h 990 v -3450 h 110");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 19) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M450 495 v 505 h -320 v 500");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 21) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M800 1495 v -500 h 500 v -800 h 3197");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 32) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M450 485 v 800 h 2200 v 2500 h -2200 v -295");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M450 1285 h 3000");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 38) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 1500 v -200 h 1200 v -1100 h 225");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 39) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1580 495 v 200 h -550 v 205");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 40) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M160 1600 v -200 h 1000 v -600 h 700 v -305");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 43) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M900 400 h 300 v 300 h 2650 v -210");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M4300 490 v 100 h -1000 v -345 h -564");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}	

	if(i === 45) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1660 0 v 5295");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 51) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 495 v 800 h 4500 v 205");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 52) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 495 v 600 h 4600 v 1910");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M620 495 v 500 h 2000  v 2205 h 383");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 53) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M105 495 v 800 h 2520 v 1200");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 54) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M620 495 v 800 h 500 v 1500 h -1000");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 55) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M2700 1987 v 800 h -2500 v 705");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M582 4197 v -2500 h 417");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M2560 3987 v 300 h -900 v 205");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1360 4492 v -2510");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 56) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1605 1500 v -300 h 1100 v -930 h 295");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 57) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M450 495 v 700 h 150 v 305");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 58) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M450 495 v 800 h -300 v 205");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 59) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M450 485 v 505 h -300 v 205");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 61) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M2150 1750 h 1900 v -1410 h 200");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M900 245 h 350");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 62) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M450 495 v 800 h -350 v 205");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 63) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1000 1493 v -300 h 450 v -704");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1600 1493 v -300 h 1250 v -704");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 64) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M450 1505 v -500 h 800 v -510");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 65) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M800 3000 v -200 h 1999 v -1200");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 70) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 495 v 200 h 3690 v 1500");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 72) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 495 v 200 h 1300 v 305");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 73) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 495 v 150 h 1600 v 1360");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 74) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 495 v 300 h 1000 v 2560 h -175");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M1570 495 v 1300 h -1385");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M2130 495 v 1400 h -1050 v 300");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 77) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M700 1995 v 500 h 2000 v -2255 h 300");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 495 v 100 h 975 v -370");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}

	if(i === 80) {
		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M75 495 v 150 h 7500 v 13000 h -425");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M6330 495 v 2800 h -3180");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);

		var extraPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		extraPath.setAttribute("d", "M6875 495 v 4000 h -1800 v 1500");
		extraPath.setAttribute("fill", "transparent");
		extraPath.setAttribute("stroke", "mediumslateblue");
		extraPath.setAttribute("stroke-width", "5");
		svg.appendChild(extraPath);
	}



	if(cards[i].statement !== "") {
		var p = document.createElement("p");
		var pnode = document.createTextNode(cards[i].question);
		node = document.createTextNode(cards[i].statement);
		p.appendChild(pnode);
		div.appendChild(p);
	}

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
	div.appendChild(svg);

	if(cards[i].btn3.text !== "") {
		var p3 = document.createElement("p");
		var btn3Node = document.createTextNode(cards[i].btn3.text);
		p3.setAttribute("class", "buttonTxt");
		p3.setAttribute("id", "btn3");
		p3.appendChild(btn3Node);
		div.appendChild(p3);
	}

	if(cards[i].btn4.text !== "") {
		var p4 = document.createElement("p");
		var btn4Node = document.createTextNode(cards[i].btn4.text);
		p4.setAttribute("class", "buttonTxt");
		p4.setAttribute("id", "btn4");
		p4.appendChild(btn4Node);
		div.appendChild(p4);
	}

	var element = document.getElementById("impress");
	element.appendChild(div);
}



var elements = document.getElementsByTagName("div");
var x = elements[1];
elements[1] = elements[2];
elements[2] = x;
for(var i = 2; i < elements.length; i++) {
	if(i == 2) {
		elements[i].setAttribute("class", "step");
	} else if(cards[i-3].statement != "") {
		elements[i].setAttribute("class", "step slide");
	} else {
		elements[i].setAttribute("class", "step");
	}

	if(i > 2) {
		elements[i].setAttribute("data-x", cards[i-3].x);
		elements[i].setAttribute("data-y", cards[i-3].y);
	}
}