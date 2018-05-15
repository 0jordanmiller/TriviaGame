var template = `<div id="timer">
			Time Left: 30
			</div>
			<div id="question">
			</div>
			<div><br>
				<ul id="answers">
					<li><button id="1"></button></li>
					<li><button id="2"></button></li>
					<li><button id="3"></button></li>
					<li><button id="4"></button></li>
				</ul>
			</div>`


$("#game").html('<button id="start">Click to start game</button>');


document.getElementById('start').onclick = function() {
	countdown = true;
	question1 = true;
	setInterval(startCount, 1000)
	$("#game").html(template);
	$("#question").text(question1.q);
	$("#1").text(question1.a1);
	$("#2").append(question1.a2);
	$("#3").append(question1.a3);
	$("#4").append(question1.a4);
}

function startCount() {
	timeLeft--;
	$("#timer").text('Time Left: ' + timeLeft);
	console.log(timeLeft);
}
if (question1) {
	$("#2").on('click', function() {
		question1 = false;
		question2 = true;
		correctGuesses++;

})
}

}