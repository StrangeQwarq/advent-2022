var numUnique = 14;
var data = document.getElementsByTagName('pre')[0].textContent;
for (let i = 0; i < data.length; i++) {
	let letters = {};
	
	for (let j = 0; j < numUnique; j++) {
		letters[data[i + j]] = true;
	}

	if (Object.keys(letters).length === numUnique) {
		console.log(i + numUnique);
		break;
	}
};
