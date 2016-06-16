var main = function() {
	$("h1").text(cards[0].question);
	$("h2").text(cards[0].statement);
	$(".btn1").text(cards[0].btn1.text);
	$(".pair2").css("display", "none");
	$(".pair3").css("display", "none");
	$(".pair4").css("display", "none");

	var index = 0;
	var restartIndex = true;
		$('#button1, #button2, #button3, #button4').click(function() {
			if(this.id == 'button1') {
				index = cards[index].btn1.pathID;
			} else if (this.id == 'button2') {
				index = cards[index].btn2.pathID;
			} else if (this.id == 'button3') {
				index = cards[index].btn3.pathID;
			} else if (this.id == 'button4') {
				index = cards[index].btn4.pathID;
			}

			if(index == 0) {
				restartIndex = true;
			}

			console.log(index);

			if (cards[index].question != "") {
				$("h1").fadeOut(function() {
					$("h1").text(cards[index].question).slideDown();
				}).slideDown();
			}
			if (cards[index].statement != null) {
				$("h2").fadeOut( function() {
					$("h2").text(cards[index].statement).fadeIn();
				}).fadeIn();
			}
			if(cards[index].btn1.text != ""){
				$(".b1").fadeOut(function(){
					$(".btn1").text(cards[index].btn1.text);
				}).fadeIn();
				
			} else {
				$(".btn1").text("Restart");
			}
			if(cards[index].btn2.text != ""){
				$(".b2").fadeOut(function() {
					$(".btn2").text(cards[index].btn2.text);
					if(restartIndex) {
						$(".pair2").css("display", "inline-block");
						restartIndex = false;
					}
				}).fadeIn();
			} else {
				$(".b2").fadeOut(function() {
					$(".btn2").text("");
					$(".pair2").css("display", "none");
				}).fadeIn();
			}
			if(cards[index].btn3.text != "") {
				$(".b3").fadeOut(function() {
					$(".pair3").css("display", "inline-block");
					$(".btn3").text(cards[index].btn3.text);
				}).fadeIn();
			} else {
				$(".b3").fadeOut(function() {
					$(".pair3").css("display", "none");
				}).fadeIn();
			}
			if(cards[index].btn4.text != "") {
				$(".b4").fadeOut(function() {			
					$(".pair4").css("display", "inline-block");
					$(".btn4").text(cards[index].btn4.text);
				}).fadeIn();
			} else {
				$(".b4").fadeOut(function() {
					$(".pair4").css("display", "none");
				}).fadeIn();
			}
		});
}

$(document).ready(main);

