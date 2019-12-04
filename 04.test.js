const { isNotDecreasing, hasDouble } = require('./04.js');

test('is not decreasing', () => {
	expect(isNotDecreasing(123456)).toBe(true);
});

test('is not decreasing', () => {
	expect(isNotDecreasing(111111)).toBe(true);
});


test('is decreasing', () => {
	expect(isNotDecreasing(123056)).toBe(false);
})

test('has no double', () => {
	expect(hasDouble(123056)).toBe(false);
})

test('has double', () => {
	expect(hasDouble(122056)).toBe(true);
})
