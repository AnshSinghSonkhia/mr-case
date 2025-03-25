const shortenText = require('../src/shortenText');

test('shortens text by word limit', () => {
    expect(shortenText('Hello world this is a test', 3)).toBe('Hello world this...');
});
