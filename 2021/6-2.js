// this is from last year's AoC because someone pointed me to this saying it's kinda hard
// so i was duty bound to solve it and i'm proud i was able to figure it out reasonably fast
var fishData = document.getElementsByTagName('pre')[0].textContent.split(',').map(x => parseInt(x));
var totalFish = 0;
var singleFishCounts128 = {};

function extrapolateFish(initialFish, days) {
	let fish = initialFish.slice();

	for (let day = 1; day <= days; day++) {
		let newFish = [];
		fish = fish.map((x) => {
			if (x === 0) newFish.push(8);
			x = (x === 0) ? 6 : x - 1;
			return x;
		});

		fish = fish.concat(newFish);
	}

	return fish;
}

for (let i = 0; i < 9; i++) {
	singleFishCounts128[i] = extrapolateFish([i], 128).length;
}

var fishAfter128Days = extrapolateFish(fishData, 128);
fishAfter128Days.forEach(x => totalFish += singleFishCounts128[x])
console.log(totalFish);

