const removeSpecialChars = require('../src/removeSpecialChars');

test('removes non-alphanumeric characters', () => {
    expect(removeSpecialChars('Hello@#$ World!')).toBe('Hello World');
});
