Array.prototype.contains = function(element) {
	var i = this.length;
	while (i--) {
		if (this[i] === element) {
			return true;
		}
	}
	return false;
}

function CardNode (question, statement) {
	this.adjEdges = [];
	this.question = question;
	this.choices = [];
	this.statement = statement;
	this.x = 0;
	this.y = 0;
	this.z = 0;
}

CardNode.prototype.setQuestion = function(question) {
	this.question = question;
}

CardNode.prototype.setStatement = function(statement) {
	this.statement = statement;
}

CardNode.prototype.setX = function(x) {
	this.x = x;
}

CardNode.prototype.setY = function(y) {
	this.y = y;
}

CardNode.prototype.setZ = function(z) {
	this.z = z;
}

CardNode.prototype.addEdge = function(newEdge) {
	this.adjEdges.push(newEdge);
}

CardNode.prototype.addChoice = function(newChoice) {
	this.choices.push(newChoice);
}

function Graph () {
	this.nodes = [];
}

Graph.prototype.addNode = function(node) {
	this.nodes.push(node);
}

Graph.prototype.addEdge = function(startNode, endNode) {
	var first = this.nodes.contains(startNode);
	var second = this.nodes.contains(endNode);

	if (first) {
		var i = this.nodes.length;
		while (i--) {
			if (this.nodes[i] === startNode) {
				this.nodes[i].addEdge(endNode);
				break;
			}
		}
	}

	if (second) {
		i = this.nodes.length;
		while (i--) {
			if (this.nodes[i] === endNode) {
				this.nodes[i].addEdge(startNode);
				break;
			}
		}
	}

	if ( (!first) || (!second)) {
		if (!first) {
			startNode.addEdge(endNode);
			this.nodes.push(startNode);
		}

		if (!second) {
			endNode.addEdge(startNode);
			this.nodes.push(endNode);
		}
	}
}