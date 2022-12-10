var tempNumbers = document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length);
var o2Numbers = tempNumbers.map(x => x.split("").map(x => parseInt(x)));
var co2Numbers = tempNumbers.map(x => x.split("").map(x => parseInt(x)));

function getRating(numbers, type) {
	Array(numbers[0].length).fill(0).every((b, i) => {
		let counts = new Array(numbers[0].length).fill(0);
		numbers.forEach((bits) => counts[i] += bits[i] ? 1 : -1);
		numbers = numbers.filter((bits) => counts[i] >= 0 && bits[i] == type || counts[i] < 0 && bits[i] == (type ? 0 : 1));
		return numbers.length > 1;
	});

	return numbers;
}

var o2 =  getRating(o2Numbers,  1)[0].reverse().reduce((a, b, i) => a + (b << i), 0);
var co2 = getRating(co2Numbers, 0)[0].reverse().reduce((a, b, i) => a + (b << i), 0);

console.log(o2 * co2);
