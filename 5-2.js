var lines = document.getElementsByTagName('pre')[0].textContent.split("\n").filter(a => a.length > 0);
var answer = "";
var stacks = [];
lines[8].replace(/\s/g, "").split('').forEach(() => stacks.push([]));

lines.slice(0, 8).reverse().forEach((line) => {
	let column = 0;
	line.match(/.{1,4}/g).map(x => x.replace(/[\s\[\]]/g, '')).forEach((v) => {
		if (v)
			stacks[column].push(v);
		column++;
	});
});

lines.slice(9).forEach((line) => {
	let matches = line.match(/move (\d+) from (\d+) to (\d+)/).map(x => parseInt(x));
	let fromStack = stacks[matches[2] - 1];
	stacks[matches[3] - 1] = stacks[matches[3] - 1].concat(fromStack.splice(fromStack.length - matches[1]));
});

stacks.forEach((x) => {
	answer += x[x.length - 1];
});

console.log(answer);