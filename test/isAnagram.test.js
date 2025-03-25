const isAnagram = require('../src/isAnagram');

test('checks if words are anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('hello', 'world')).toBe(false);
});
