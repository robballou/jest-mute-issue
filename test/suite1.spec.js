const mute = require('mute');
const { loud } = require('../src/index');

test('loud sums two numbers', () => {
  const unmute = mute();
  expect(loud(2, 3)).toBe(5);
  unmute();
});
