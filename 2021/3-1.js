var numbers = document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length);
var numberLength = numbers[0].length;
var bitCounts = new Array(numberLength).fill(0);
var gammaBits = [];

bitCounts.forEach((b, i) => {
	numbers.forEach((bits) => bitCounts[i] += (bits[i] == '1') ? 1 : -1);
	gammaBits.push(bitCounts[i] > 0 ? 1 : 0);
});

var gamma   = gammaBits.reduce((a, b, i) => a + (b << (numbers[0].length - i - 1)), 0);
var epsilon = gammaBits.reduce((a, b, i) => a + (Math.abs(b - 1) << (numbers[0].length - i - 1)), 0);

console.log(gamma * epsilon);
