var outcomeScores = {
	A: {X: 1 + 3, Y: 2 + 6, Z: 3 + 0},
	B: {X: 1 + 0, Y: 2 + 3, Z: 3 + 6},
	C: {X: 1 + 6, Y: 2 + 0, Z: 3 + 3},
};

var outcomes = {
	A: {X: 'Z', Y: 'X', Z: 'Y'},
	B: {X: 'X', Y: 'Y', Z: 'Z'},
	C: {X: 'Y', Y: 'Z', Z: 'X'},
};

var scoreTotal = 0;

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(a => a.length == 3).forEach((round) => {
	let choices = round.split(" ");
	let myChoice = outcomes[choices[0]][choices[1]];
	scoreTotal += outcomeScores[choices[0]][myChoice];
});

console.log(scoreTotal);