var files = {};
var cwdPath = [];
var cwd = files;
var availableDiskSpace = 70000000;
var minimumDiskSpace = 30000000;
var smallestValidDirectory = Infinity;

function getCwd() {
	let dir = files;
	cwdPath.forEach((x) => dir = dir[x]);
	return dir;
}

function findDirectorySize(dir) {
	let dirSize = 0;
	for (let k in dir) {
		dirSize += (typeof dir[k] === "object") ? findDirectorySize(dir[k]) : dir[k];
	}

	if(availableDiskSpace + dirSize > minimumDiskSpace && dirSize < smallestValidDirectory) {
		smallestValidDirectory = dirSize;
	}

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
		if (commandParts[0] === 'dir') {
			cwd[commandParts[1]] = {};
		}
		else {
			availableDiskSpace -= (cwd[commandParts[1]] = parseInt(commandParts[0]));
		}
	}
});

findDirectorySize(files);
console.log(smallestValidDirectory);
