var monkeys = {};
var numRounds = 10000;
var lines = document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).map(x => x.trim());
var divisibilityProduct = 1;

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

	divisibilityProduct *= newMonkey.divisible;
	monkeys[newMonkey.monkeyNumber] = newMonkey;
}

Array(numRounds).fill(0).forEach((x, roundNumber) => {
	for (let monkeyIndex in monkeys) {
		let m = monkeys[monkeyIndex];
		m.inspections += m.items.length;

		for (let item of m.items) {
			let opValue = parseInt(m.opValue) || item;
			let throwTarget = m.trueTarget

			if (m.op == '*') item = item * opValue;
			else if (m.op == '+') item = item + opValue;

			if (item % m.divisible !== 0) throwTarget = m.falseTarget;
			item = item % divisibilityProduct;

			monkeys[throwTarget].items.push(item);
		}

		m.items = [];
	};
});

var inspectionCounts = Object.keys(monkeys).map(m => monkeys[m].inspections).sort((a, b) => a < b ? 1 : -1)
console.log(inspectionCounts[0] * inspectionCounts[1]);
