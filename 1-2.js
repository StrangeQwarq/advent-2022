var elves = [];
var currentCalories = 0;

document.getElementsByTagName('pre')[0].textContent.split("\n").forEach((a) => {
	if (a.length) currentCalories += parseInt(a);
	else {
		elves.push(currentCalories)
		currentCalories = 0;
	}
});

elves = elves.sort((a, b) => a < b ? 1 : -1);
console.log(elves[0] + elves[1] + elves[2]);