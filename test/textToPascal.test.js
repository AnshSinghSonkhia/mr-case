const textToPascal = require('../src/textToPascal');

test('converts text to PascalCase', () => {
    expect(textToPascal('hello world')).toBe('HelloWorld');
    expect(textToPascal('javaScript is fun')).toBe('JavaScriptIsFun');
});
