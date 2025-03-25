const pascalToText = require('../src/pascalToText');

test('converts PascalCase to text', () => {
    expect(pascalToText('HelloWorld')).toBe('Hello World');
});
