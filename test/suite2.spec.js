const { quiet } = require('../src/index');

test('quite sums two numbers', () => {
  expect(quiet(2, 3)).toBe(5);
});
