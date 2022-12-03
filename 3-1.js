var priorityTotal = 0;
var charCodes = {};

var priorityCount = 1;
for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++, priorityCount++) charCodes[String.fromCharCode(i)] = priorityCount;
for (let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++, priorityCount++) charCodes[String.fromCharCode(i)] = priorityCount;

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(a => a.length > 0).forEach((sack) => {
	let left = sack.substring(0, sack.length / 2).split("");
	let right = sack.substring(sack.length / 2).split("");

	let misplaced = left.filter(a => right.includes(a));
	priorityTotal += charCodes[misplaced[0]];
});

console.log(priorityTotal);