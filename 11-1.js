var monkeys = {};
var numRounds = 20;
var lines = document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).map(x => x.trim());

for (let i = 0; i < lines.length; i+=6) {
	let newMonkey = {
		monkeyNumber: parseInt(lines[i].match(/Monkey (\d+):/)[1]),
		items:        lines[i + 1].replace("Starting items: ", "").split(",").map(x => parseInt(x.trim())),
		op:           lines[i + 2].match(/Operation: new = old ([+*]) (\d+|old)/)[1],
		opValue:      lines[i + 2].match(/Operation: new = old [+*] (\d+|old)/)[1],
		divisible:    parseInt(lines[i + 3].replace("Test: divisible by ", "")),
		trueTarget:   parseInt(lines[i + 4].replace("If true: throw to monkey ", "")),
		falseTarget:  parseInt(lines[i + 5].replace("If false: throw to monkey ", "")),
		inspections:  0
	}

	monkeys[newMonkey.monkeyNumber] = newMonkey;
}

Array(numRounds).fill(0).forEach((x, roundNumber) => {
	Object.keys(monkeys).forEach((monkeyIndex) => {
		let m = monkeys[monkeyIndex];
		m.inspections += m.items.length;

		for (let item of m.items) {
			let opValue = parseInt(m.opValue) || item;
			let throwTarget = m.trueTarget

			if (m.op == '*') item = item * opValue;
			else if (m.op == '+') item = item + opValue;

			item = Math.floor(item / 3);
			if (item % m.divisible !== 0) throwTarget = m.falseTarget;


			monkeys[throwTarget].items.push(item);
		}

		m.items = [];
	});
});

var inspectionCounts = Object.keys(monkeys).map(m => monkeys[m].inspections).sort((a, b) => a < b ? 1 : -1)
console.log(inspectionCounts[0] * inspectionCounts[1]);
