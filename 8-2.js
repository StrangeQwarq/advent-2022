var treeGrid = [];

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).forEach((row) => {
	treeGrid.push(row.split('').map(x => parseInt(x)));
});

var height = treeGrid.length;
var width = treeGrid[0].length;
var maxScore = 0;

for (let row = 0; row < height; row++) {
	for (let col = 0; col < width; col++) {
		let scores = {top: 0, bottom: 0, left: 0, right: 0};
		let currentTree = treeGrid[row][col];

		// top
		for (let row2 = row - 1; row2 >= 0; row2--) {
			scores.top++;
			if (treeGrid[row2][col] >= currentTree) break;
		}

		// bottom
		for (let row2 = row + 1; row2 < height; row2++) {
			scores.bottom++;
			if (treeGrid[row2][col] >= currentTree) break;
		}

		// left
		for (let col2 = col - 1; col2 >= 0; col2--) {
			scores.left++;
			if (treeGrid[row][col2] >= currentTree) break;
		}

		// right
		for (let col2 = col + 1; col2 < width; col2++) {
			scores.right++;
			if (treeGrid[row][col2] >= currentTree) break;
		}

		let totalScore = scores.left * scores.right * scores.top * scores.bottom;
		if (totalScore > maxScore) maxScore = totalScore
	}
}

console.log(maxScore);
