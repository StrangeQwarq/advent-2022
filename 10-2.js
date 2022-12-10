var [cycle, x, lineWidth] = [0, 1, 40];
var [screen, screenLine] = ["", ""];

function tick() {
	hPos = cycle++ % lineWidth;
	screenLine += [1, 0].includes(Math.abs(x - hPos)) ? "#" : ".";
	if (screenLine.length == lineWidth) {
		screen += screenLine + "\n";
		screenLine = "";
	}
}

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).forEach((instruction) => {
	let [opCode, operand] = instruction.split(" ");

	tick();
	if (opCode === "addx") {
		tick();
		x += parseInt(operand);
	}
});

console.log(screen);
