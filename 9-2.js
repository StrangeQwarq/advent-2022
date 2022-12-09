var head = {x: 0, y: 0};
var knots = [];
var locations = new Set();

Array(9).fill(0).map(x => knots.push({x: 0, y: 0}));

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).forEach((move) => {
	let parts = move.split(" ");

	for (let i = 0; i < parts[1]; i++) {
		switch (parts[0]) {
			case 'R': head.x += 1; break;
			case 'L': head.x -= 1; break;
			case 'U': head.y += 1; break;
			case 'D': head.y -= 1; break;
		}

		let prevKnot = head;
		knots.forEach((currentKnot, index) => {
			if (Math.abs(prevKnot.x - currentKnot.x) == 2 || Math.abs(prevKnot.y - currentKnot.y) == 2) {
				currentKnot.x += Math.sign(prevKnot.x - currentKnot.x);
				currentKnot.y += Math.sign(prevKnot.y - currentKnot.y);
			}

			prevKnot = currentKnot;
		});

		locations.add(`${knots[knots.length - 1].x},${knots[knots.length - 1].y}`);
	}
});

console.log(locations.size);
