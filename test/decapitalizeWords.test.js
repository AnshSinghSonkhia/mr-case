const decapitalizeWords = require('../src/decapitalizeWords');

test('makes first letter of every word lowercase', () => {
    expect(decapitalizeWords('Hello World')).toBe('hello world');
});
