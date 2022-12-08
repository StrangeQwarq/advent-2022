var increases = 0;
var previous = Infinity;
var readings = document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).map(x => parseInt(x));

for (let i = 0; i < readings.length - 2; i++) {
	let windowTotals = readings[i] + readings[i + 1] + readings[i + 2];
	if (windowTotals > previous) increases++;
	previous = windowTotals;
}

console.log(increases);
