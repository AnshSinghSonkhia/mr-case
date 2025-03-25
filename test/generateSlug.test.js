const generateSlug = require('../src/generateSlug');

test('generates a slug', () => {
    expect(generateSlug('Hello World!')).toBe('hello-world');
});
