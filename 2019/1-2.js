var total = 0;

function calcFuel(mass) {
	return Math.floor(mass / 3) - 2;
}

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).map(x => parseInt(x)).forEach((fuel) => {
	let additionalFuel = calcFuel(fuel);
	while (additionalFuel > 0) {
		total += additionalFuel;
		additionalFuel = calcFuel(additionalFuel);
	}
});
console.log(total);
