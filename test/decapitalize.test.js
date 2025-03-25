const decapitalize = require('../src/decapitalize');

test('converts the first letter to lowercase', () => {
    expect(decapitalize('Hello')).toBe('hello');
    expect(decapitalize('World')).toBe('world');
    expect(decapitalize('JavaScript')).toBe('javaScript');
});

test('throws error for invalid input', () => {
    expect(() => decapitalize('')).toThrow();
    expect(() => decapitalize(123)).toThrow();
    expect(() => decapitalize(null)).toThrow();
});
