window.onload = function() {

var rightAns = 0;
var wrongAns = 0;
var intervalId;
var correctAnswer;
var timeLeft = 30;
var questionsPassed = 0;
var gifsArr = ['assets/images/varg.gif', 'assets/images/windmill.gif', 'assets/images/tree-headbang.gif', 'assets/images/devil.gif', 'assets/images/crabwalk.gif', 'assets/images/gwar.gif']

var question1 = {
	q: 'What year was Metallica formed?',
	a1: '1981',
	a2: '1983',
	a3: '1979',
	a4: '1989',
	correct: '1981'
};

var question2 = {
	q: 'Who is the lead singer of Black Sabbath?',
	a1: 'Mike Patton',
	a2: 'Rob Halford',
	a3: 'Ozzy Osbourne',
	a4: 'Bruce Dickinson',
	correct: 'Ozzy Osbourne'
};

var question3 = {
	q: "What is the name of Iron Maiden's mascot?",
	a1: 'Fred',
	a2: 'Tom',
	a3: 'Eddie',
	a4: 'Rob',
	correct: 'Eddie'
};

var question4 =  {
	q: "Which band is not in the 'Big Four of Thrash'?",
	a1: 'Slayer',
	a2: 'Metallica',
	a3: 'Anthrax',
	a4: 'DragonForce',
	correct: 'DragonForce'
};

var questionArr = [question1, question2, question3, question4]

var template = `<div id="timer">
			Time Left: 30
			</div>
			<div id="question"><br>
			</div>
			<div><br>
				<ul id="answers">
					<li><button id="1" class ='answer'></button></li>
					<li><button id="2" class ='answer'></button></li>
					<li><button id="3" class ='answer'></button></li>
					<li><button id="4" class ='answer'></button></li>
				</ul>
			</div>`;

var outOfTimeTemp = `<div id="timer">
			Time Left: 0
			</div>
			<div><br>
				<p>You're out of time!</p><br>
				<div id="gif">
					
				</div>
			</div>`;

var incorrectTemp = `<div>
				<p>You chose incorrectly</p>
				<p id='correct-answer'></p>
				<div id="gif">
					
				</div>
			</div>`;

var correctTemp = `<div>
				<p>You're correct</p><br>
				<p id='correct-answer'></p>
				<div id="gif">
					
				</div>
			</div>`

var results = `<div>
				<p>Quiz over!</p><br>
				<p>answered correctly: <div id='right-total'></div></p>
				<p>answered incorrectly: <div id='wrong-total'></div></p>
				<button id='restart'>Restart</button>
			</div>`;

var game = $("#game");

game.html('<button id="start">Click to start game</button>');

$("body").on('click', '#restart', function() {
	rightAns = 0;
	wrongAns = 0;
	questionsPassed = 0;
	intervalId = setInterval(startCount, 1000)
	game.html(template);
	$("#question").append(question1.q);
	$("#1").append(question1.a1);
	$("#2").append(question1.a2);
	$("#3").append(question1.a3);
	$("#4").append(question1.a4);
})

document.getElementById('start').onclick = function() {
	intervalId = setInterval(startCount, 1000)
	game.html(template);
	$("#question").append(question1.q);
	$("#1").append(question1.a1);
	$("#2").append(question1.a2);
	$("#3").append(question1.a3);
	$("#4").append(question1.a4);
} 

function showResults() {
	game.html(results);
	$("#right-total").text(rightAns)
	$("#wrong-total").text(wrongAns)
}

function startCount() {
	timeLeft--;
	$("#timer").text('Time Left: ' + timeLeft);
	if (timeLeft === 0 && questionsPassed === questionArr.length - 1) {
		clearInterval(intervalId);
		setTimeout(showResults, 1000 * 1);
	} else if (timeLeft === 0) {
		clearInterval(intervalId);		
		$("#timer").text('Time Left:' + timeLeft)
		game.html(outOfTimeTemp);
		var randomGif = Math.floor(Math.random() * gifsArr.length)		
		$("#gif").html('<img id="gif-img">')
		$("#gif-img").attr('src', gifsArr[randomGif])
		setTimeout(nextQuestion, 1000 * 1)
		questionsPassed++
	}	
}

game.on('click', '.answer', function() {
	if ($(this).text() === question1.correct || $(this).text() === question2.correct || $(this).text() === question3.correct || $(this).text() ===  question4.correct) {
		rightAns++;
		correctAnswer = $(this).text();
		clearInterval(intervalId);
		var randomGif = Math.floor(Math.random() * gifsArr.length);
		questionsPassed++;
		if (questionsPassed === questionArr.length) {
			game.html(correctTemp);
			$("#gif").html('<img id="gif-img">');
			$("#gif-img").attr('src', gifsArr[randomGif]);
			$("#correct-answer").append('The correct answer is ' + correctAnswer);
			setTimeout(showResults, 1000 * 2);
		} else {
			game.html(correctTemp);
			$("#gif").html('<img id="gif-img">');
			$("#gif-img").attr('src', gifsArr[randomGif]);
			$("#correct-answer").append('The correct answer is ' + correctAnswer);
			setTimeout(nextQuestion, 1000 * 2);
		}
	} else {
		clearInterval(intervalId);
		var randomGif = Math.floor(Math.random() * gifsArr.length);
		wrongAns++;
		questionsPassed++;
		if (questionsPassed === questionArr.length) {
			game.html(incorrectTemp);
			$("#gif").html('<img id="gif-img">');
			$("#gif-img").attr('src', gifsArr[randomGif]);
			$("#correct-answer").append('The correct answer is ' + questionArr[questionsPassed - 1].correct);
			setTimeout(showResults, 1000 * 2);
		} else {
			game.html(incorrectTemp);
			$("#gif").html('<img id="gif-img">');
			$("#gif-img").attr('src', gifsArr[randomGif]);
			$("#correct-answer").append('The correct answer is ' + questionArr[questionsPassed - 1].correct);
			setTimeout(nextQuestion, 1000 * 2);
		}
	}
})

function nextQuestion() {
	timeLeft = 30;
	intervalId = setInterval(startCount, 1000)
	game.html(template);
	$("#question").append(questionArr[questionsPassed].q);
	$("#1").append(questionArr[questionsPassed].a1);
	$("#2").append(questionArr[questionsPassed].a2);
	$("#3").append(questionArr[questionsPassed].a3);
	$("#4").append(questionArr[questionsPassed].a4);
}

}