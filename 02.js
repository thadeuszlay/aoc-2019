const inputOrg = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,19,9,23,1,23,9,27,1,10,27,31,1,13,31,35,1,35,10,39,2,39,9,43,1,43,13,47,1,5,47,51,1,6,51,55,1,13,55,59,1,59,6,63,1,63,10,67,2,67,6,71,1,71,5,75,2,75,10,79,1,79,6,83,1,83,5,87,1,87,6,91,1,91,13,95,1,95,6,99,2,99,10,103,1,103,6,107,2,6,107,111,1,13,111,115,2,115,10,119,1,119,5,123,2,10,123,127,2,127,9,131,1,5,131,135,2,10,135,139,2,139,9,143,1,143,2,147,1,5,147,0,99,2,0,14,0];

function mult(a,b) {
	if (isNaN(a) || isNaN(b)) return; 
	return a * b;
}
function add(a,b) {
	if (isNaN(a) || isNaN(b)) return; 
	return a + b;
}

for (let noun = 0; noun <= 99; noun++) {
	for (let verb = 0; verb <= 99; verb++) {
		// const noun = 12;
		// const verb = 2;
		const inputTask = inputOrg.slice(0);
		inputTask[1] = noun;
		inputTask[2] = verb;
		if (doCalc(inputTask) === 19690720) {

			console.log('res: ', 100 * noun + verb);
		}
	}
}

function doCalc(inputTask) {
	let i = 0;
	while(i < inputTask.length && !isNaN(inputTask[i])) {
		const mode = inputTask[i++];
		if (mode === 99) {
			break;			
		}
		const inp1Pos = inputTask[i++];
		const inp2Pos = inputTask[i++];
		const resPos = inputTask[i++];

		const inp1Val = inputTask[inp1Pos];
		const inp2Val = inputTask[inp2Pos];
		let resVal;
		if (mode === 1) {
			resVal = add(inp1Val, inp2Val);
		} else if (mode === 2) {
			resVal = mult(inp1Val, inp2Val);
		}
		if (resVal === undefined || isNaN(resVal)) {
			break;
		}
		inputTask[resPos] = resVal;
	}
	return inputTask[0];
}

