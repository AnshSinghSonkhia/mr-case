const textToCamel = require('../src/textToCamel');

test('converts text to camelCase', () => {
    expect(textToCamel('Hello world, this is a test')).toBe('helloWorldThisIsATest');
    expect(textToCamel('JavaScript is fun!')).toBe('javaScriptIsFun!');
    expect(textToCamel('convert text   to CamelCase')).toBe('convertTextToCamelCase');
});

test('throws error for invalid input', () => {
    expect(() => textToCamel('')).toThrow();
    expect(() => textToCamel(123)).toThrow();
    expect(() => textToCamel(null)).toThrow();
});
