const extractPath = require('../src/extractPath');

test('extracts path from URL', () => {
    expect(extractPath('https://example.com/blog/article')).toBe('/blog/article');
});
