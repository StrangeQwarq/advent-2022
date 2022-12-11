var initialMemory = memory = document.getElementsByTagName('pre')[0].textContent.split(",").filter(x => x.length).map(x => parseInt(x));
var memory = [];
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
			ip = -10;
		}
	}
};

function reset() {
	memory = initialMemory.slice(0);
	ip = 0;
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

function run() {
	while (ip < memory.length && ip >= 0) {
		let op = opCodes[memory[ip]];
		op.run();
		ip += op.instructionSize;
	}
}

var target = 19690720;

for (let noun = 0; noun < 100; noun++) {
	for (let verb = 0; verb < 100; verb++) {
		reset();
		write(1, noun);
		write(2, verb);
		run();

		if (read(0) === target) {
			console.log(100 * noun + verb, noun, verb);
			noun = verb = 100;
		}
	}
}
