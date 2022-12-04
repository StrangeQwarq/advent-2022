var overlappedRanges = 0;

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(a => a.length > 0).forEach((assignment) => {
	let ranges = assignment.split(/[,-]/).map(x => parseInt(x));
	overlappedRanges += (ranges[1] < ranges[2] || ranges[3] < ranges[0]) ? 0 : 1;
});

console.log(overlappedRanges);