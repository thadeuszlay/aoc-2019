// 367479-893698

function isNotDecreasing(n) {
	const nStr = n.toString(10);
	for (let i = 1; i < nStr.length; i++) {
//		console.log(nStr[i - 1] + ':' + nStr[i]);
		if (nStr[i - 1] > nStr[i]) return false; 
	}
	return true;
}

function hasDouble(n) {
	const nStr = n.toString(10);
	let start = 0;
	let end = 1;

	while(end !== nStr.length) {
		if (nStr[start++] === nStr[end++]) return true;
	}
	return false;
}

function hasExactlyTwoDoubles(n) {
	const nStr = n.toString(10);
	let start = 0;
	let end = 1;
	while(end !== nStr.length) {
		if (nStr[start] !== nStr[end]) {
			if (end - start === 2) {
				return true;
			}
			start = end;
		}
		end++;
	}

	return end - start === 2;
}
function checkPassword(from, to) {

	let counter = 0;
	for (let i = from + 1; i < to; i++) {
		if (isNotDecreasing(i) && hasDouble(i)) {
			++counter; 
		}
	}
	return counter;
}

function checkPassword2(from, to) {

	let counter = 0;
	for (let i = from + 1; i < to; i++) {
		if (isNotDecreasing(i) && hasExactlyTwoDoubles(i)) {
			++counter; 
		}
	}
	return counter;
}

// console.log(isNotDecreasing(num));
// console.log(hasDouble(num));
console.log(checkPassword2(367479, 893698));

module.exports = {
	isNotDecreasing,
	hasDouble,
};

