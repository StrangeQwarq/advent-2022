var position = {x: 0, y: 0};

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).forEach((command) => {
	commandParts = command.split(' ');
	let direction = commandParts[0];
	let amount = parseInt(commandParts[1]);

	switch (direction) {
		case 'forward': position.x += amount; break;
		case 'down':    position.y -= amount; break;
		case 'up':      position.y += amount; break;
	}
});

console.log(position.x * position.y);

