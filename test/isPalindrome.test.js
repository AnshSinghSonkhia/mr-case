const isPalindrome = require('../src/isPalindrome');

test('checks for palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
});
