const extractDomain = require('../src/extractDomain');

test('extracts domain from URL', () => {
    expect(extractDomain('https://www.example.com')).toBe('example.com');
});
