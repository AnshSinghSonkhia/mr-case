const sentenceCase = require('../src/sentenceCase');

test('converts to sentence case', () => {
    expect(sentenceCase('HELLO WORLD')).toBe('Hello world');
    expect(sentenceCase('javaScript is fun')).toBe('Javascript is fun');
});
