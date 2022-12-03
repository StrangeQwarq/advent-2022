var maxCalories = 0;
var totalCalories = 0;

document.getElementsByTagName('pre')[0].textContent.split("\n").forEach((calories) => {
	if (a.length) totalCalories += parseInt(calories);
	else {
		if (totalCalories > maxCalories) {
			maxCalories = totalCalories;
		}
		totalCalories = 0;
	}
});

console.log(maxCalories);