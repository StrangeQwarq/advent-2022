var treeGrid = [];
var visibleTrees = 0;

document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).forEach((row) => {
	treeGrid.push(row.split('').map(x => parseInt(x)));
});

var height = treeGrid.length;
var width = treeGrid[0].length;

for (let row = 1; row < height - 1; row++) {
	for (let col = 1; col < width - 1; col++) {
		let visible = 4;
		let currentTree = treeGrid[row][col];

		// top
		for (let row2 = 0; row2 < row; row2++) {
			if (treeGrid[row2][col] >= currentTree) {
				visible--;
				break;
			}
		}

		// bottom
		for (let row2 = row + 1; row2 < height; row2++) {
			if (treeGrid[row2][col] >= currentTree) {
				visible--;
				break;
			}
		}

		// left
		for (let col2 = 0; col2 < col; col2++) {
			if (treeGrid[row][col2] >= currentTree) {
				visible--;
				break;
			}
		}

		// right
		for (let col2 = col + 1; col2 < width; col2++) {
			if (treeGrid[row][col2] >= currentTree) {
				visible--;
				break;
			}
		}

		visibleTrees += (visible === 0) ? 0 : 1;
	}
}

console.log(visibleTrees + (width * 2) + (height * 2) - 4);
