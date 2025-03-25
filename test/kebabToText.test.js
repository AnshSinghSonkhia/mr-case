const kebabToText = require('../src/kebabToText');

test('converts kebab-case to text', () => {
    expect(kebabToText('hello-world')).toBe('Hello World');
});
