var priorityTotal = 0;
var charCodes = {};

var priorityCount = 1;
for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++, priorityCount++) charCodes[String.fromCharCode(i)] = priorityCount;
for (let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++, priorityCount++) charCodes[String.fromCharCode(i)] = priorityCount;

var sacks = document.getElementsByTagName('pre')[0].textContent.split("\n").filter(a => a.length > 0);

for (let i = 0; i < sacks.length;) {
	let one = sacks[i++].split("");
	let two = sacks[i++].split("");
	let three = sacks[i++].split("");
	
	let intersectionOneTwo = one.filter(a => two.includes(a));
	let intersection = intersectionOneTwo.filter(a => three.includes(a));
	
	priorityTotal += charCodes[intersection[0]];
}

console.log(priorityTotal);