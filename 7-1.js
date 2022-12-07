var files = {};
var cwdPath = [];
var cwd = files;
var maxSize = 100000;
var totalSize = 0;

function getCwd() {
	let dir = files;
	cwdPath.forEach((x) => dir = dir[x]);
	return dir;
}

function findDirectorySize(dir, maximumSize) {
	let dirSize = 0;
	for (let k in dir) {
		dirSize += (typeof dir[k] === "object") ? findDirectorySize(dir[k], maximumSize) : dir[k];
	}

	totalSize += (dirSize < maximumSize) ? dirSize : 0;
	return dirSize;
}


document.getElementsByTagName('pre')[0].textContent.split("\n").filter(a => a.length).forEach((command) => {
	let commandParts = command.split(' ');
	if (commandParts[0] === '$' && commandParts[1] === 'cd') {
		if (commandParts[2] == '..') cwdPath.pop();
		else if (commandParts[2] == '/') cwdPath = [];
		else cwdPath.push(commandParts[2]);
		cwd = getCwd();
	}
	else if (commandParts[0] !== '$') {
		cwd[commandParts[1]] = commandParts[0] === 'dir' ? {} : parseInt(commandParts[0]);
	}
});

findDirectorySize(files, maxSize);
console.log(totalSize);
