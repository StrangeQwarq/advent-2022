var head = {x: 0, y: 0};
var tail = {x: 0, y: 0};
var locations = new Set();

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).forEach((move) => {
	let parts = move.split(" ");

	for (let i = 0; i < parts[1]; i++) {
		switch (parts[0]) {
			case 'R': head.x += 1; break;
			case 'L': head.x -= 1; break;
			case 'U': head.y += 1; break;
			case 'D': head.y -= 1; break;
		}

		if (Math.abs(head.x - tail.x) == 2 || Math.abs(head.y - tail.y) == 2) {
			tail.x += Math.sign(head.x - tail.x);
			tail.y += Math.sign(head.y - tail.y);
		}

		locations.add(`${tail.x},${tail.y}`);
	}
});

console.log(locations.size);
