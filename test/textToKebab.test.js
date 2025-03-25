const textToKebab = require('../src/textToKebab');

test('converts text to kebab-case', () => {
    expect(textToKebab('Hello World!')).toBe('hello-world');
    expect(textToKebab('JavaScript is fun!')).toBe('javascript-is-fun');
});
