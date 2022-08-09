var readlineSync = require("readline-sync");

var score = 0;
const quiz = [
	{ question: "Whats my favourite color ? ", answer: "black" },
	{ question: "Whats my favourite dish ? ", answer: "pizza" },
	{ question: "Do I like to gym ? ", answer: "yes" },
];

const initialPlayers = { naveen: 3, vishal: 1 };

function getUserName() {
	var userName = readlineSync.question("May I have your name? ");
	console.log("Welcome " + userName + "!" + " How much do you know Sonu?");
}

function testMyFriend() {
	for (let i = 0; i < quiz.length; i++) {
		let answer = readlineSync.question(quiz[i].question);
		if (answer.toUpperCase() === quiz[i].answer.toUpperCase()) {
			console.log("You're Right!");
			score += 1;
		} else {
			console.log("Sorry!, You're Wrong");
		}
		console.log("Your Current Score is ", score);
		console.log("------------------");
	}
}

function checkHighest() {
	if (score >= initialPlayers.naveen) {
		console.log("Congralutations! You beat other players");
	} else {
		console.log("Your final score is:", score, "\nOther competitors");
		for (const key in initialPlayers) {
			console.log(key + ":" + initialPlayers[key]);
		}
	}
}

getUserName();
testMyFriend();
checkHighest();
