const reverseWords = require('../src/reverseWords');

test('reverses words in sentence', () => {
    expect(reverseWords('Hello World')).toBe('World Hello');
});
