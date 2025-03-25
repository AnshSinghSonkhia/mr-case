const capitalizeWords = require('../src/capitalizeWords');

test('capitalizes every word in a sentence', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
});
