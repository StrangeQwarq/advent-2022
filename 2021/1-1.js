var increases = 0;
var previous = Infinity;
document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).map(x => parseInt(x)).forEach((reading) => {
	if (reading > previous) increases++;
	previous = reading
});

console.log(increases);
