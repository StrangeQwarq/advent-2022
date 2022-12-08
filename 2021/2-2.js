var position = {x: 0, depth: 0, aim};

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).forEach((command) => {
	commandParts = command.split(' ');
	let direction = commandParts[0];
	let amount = parseInt(commandParts[1]);

	switch (direction) {
		case 'forward':
			position.x += amount;
			position.depth += position.aim * amount;
			break;
		case 'down':
			position.aim += amount;
			break;
		case 'up':
			position.aim -= amount;
			break;
	}
});

console.log(position.x * position.depth);
