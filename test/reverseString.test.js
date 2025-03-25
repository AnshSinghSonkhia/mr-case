const reverseString = require('../src/reverseString');

test('reverses string', () => {
    expect(reverseString('Hello')).toBe('olleH');
});
