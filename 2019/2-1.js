var memory = document.getElementsByTagName('pre')[0].textContent.split(",").filter(x => x.length).map(x => parseInt(x));
var ip = 0;
var opCodes = {
	1: {
		instructionSize: 4,
		run: () => {
			write(read(ip + 3), readRef(ip + 1) + readRef(ip + 2));
		}
	},
	2: {
		instructionSize: 4,
		run: () => {
			write(read(ip + 3), readRef(ip + 1) * readRef(ip + 2));
		}
	},
	99: {
		instructionSize: 1,
		run: () => {
			console.log(memory[0]);
			ip = -10;
		}
	}
}

function write(addr, value) {
	memory[addr] = value;
}

function read(addr) {
	return memory[addr];
}

function readRef(addr) {
	return memory[memory[addr]];
}

write(1, 12);
write(2, 2);

while (ip < memory.length && ip >= 0) {
	let op = opCodes[memory[ip]];
	op.run();
	ip += op.instructionSize;
}
