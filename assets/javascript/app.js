window.onload = function() {
var correctGuesses = 0;
var incorrectGuesses = 0;
var timeLeft = 30;
var countdown = false;
var intervalId;
var question1 = false;
var question2 = false;


var question1 = {
	q: '<p>What year was Metallica formed?</p>',
	a1: '<li>1981</li>',
	a2: '<li>1983</li>',
	a3: '<li>1979</li>',
	a4: '<li>1989</li>'
};

var question2 = {
	q: 'Which subgenre rarely uses guitar solos?',
	a1: '<li>Black Metal</li>',
	a2: '<li>Thrash Metal</li>',
	a3: '<li>Death metal</li>',
	a4: '<li>Power Metal</li>'
}

var template = `<div id="timer">
			Time Left: 30
			</div>
			<div id="question"><br>
			</div>
			<div><br>
				<ul id="answers">
					<li><button id="1"></button></li>
					<li><button id="2"></button></li>
					<li><button id="3"></button></li>
					<li><button id="4"></button></li>
				</ul>
			</div>`

var afterGuessTemp = ``

$("#game").html('<button id="start">Click to start game</button>');



console.log(question1.q);

document.getElementById('start').onclick = function() {
	countdown = true;
	intervalId = setInterval(startCount, 1000)
	$("#game").html(template);
	$("#question").append(question1.q);
	$("#1").append(question1.a1);
	$("#2").append(question1.a2);
	$("#3").append(question1.a3);
	$("#4").append(question1.a4);
}

function startCount() {
	timeLeft--;
	$("#timer").text('Time Left: ' + timeLeft);
}

if (question1) {
	$("#2").on('click', function() {
		question1 = false;
		question2 = true;
		correctGuesses++;
		$("#game").html(afterGuessTemp);
		clearInterval(intervalId)

})


}






}



