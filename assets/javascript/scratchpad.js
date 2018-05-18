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

<!-- <div id="text-box">
		<h1>Metal Trivia</h1>
		<br>
		<div id="timer">
			<p>Time Left:</p> 
		</div>
		<div id="game">
			<div id="question"><br>
				<p>Question</p>
			</div>
			<div id="answer"> <br>
				<ul>
					<li>a</li>
					<li>b</li>
					<li>c</li>
					<li>d</li>
				</ul>
			</div>
		</div>
	</div> -->

<!-- 	<div id="timer">
			Time Left: 30
			</div>
			<div id="question"><br>
			</div>
			<div><br>
				<ul id="answers">
					<li id="1"></li>
					<li id="2"></li>
					<li id="3"></li>
					<li id="4"></li>
				</ul>
			</div> -->




game.on('click', '.answer', function() {
	if ($(this).text() === question1.correct || $(this).text() === question2.correct || $(this).text() === question3.correct || $(this).text() ===  question4.correct) {
		clearInterval(intervalId);
		game.html(correctTemp);
		rightAns++;
		setTimeout(nextQuestion, 1000 * 6);
		var randomGif = Math.floor(Math.random() * gifsArr.length);
		$("#gif").html('<img id="gif-img">');
		$("#gif-img").attr('src', gifsArr[randomGif]);
		$("#correct-answer").append('The correct answer is ' + correctAnswer);
	} else if ($(this).text() === 'Ozzy Osbourne') {
		correctAnswer = question2.correct;
		clearInterval(intervalId);
		game.html(correctTemp);
		rightAns++;
		setTimeout(nextQuestion, 1000 * 6);
		var randomGif = Math.floor(Math.random() * gifsArr.length);
		$("#gif").html('<img id="gif-img">');
		$("#gif-img").attr('src', gifsArr[randomGif]);
	} else {
		clearInterval(intervalId);
		game.html(incorrectTemp);
		var randomGif = Math.floor(Math.random() * gifsArr.length);
		$("#gif").html('<img id="gif-img">');
		$("#gif-img").attr('src', gifsArr[randomGif])
		wrongAns++;
		setTimeout(nextQuestion, 1000 * 6)
	}
})