var [cycle, x, signal] = [0, 1, 0];

function tick() {
	cycle++;
	signal += ((cycle - 20) % 40) === 0 ? x * cycle : 0;
}

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).forEach((instruction) => {
	let [opCode, operand] = instruction.split(" ");

	tick();

	if (opCode === "addx") {
		tick();
		x += parseInt(operand);
	}
});

console.log(signal);
