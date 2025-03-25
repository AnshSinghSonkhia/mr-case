const capitalize = require('../src/capitalize');

test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('javaScript')).toBe('JavaScript');
});

test('throws error for invalid input', () => {
    expect(() => capitalize('')).toThrow();
    expect(() => capitalize(123)).toThrow();
    expect(() => capitalize(null)).toThrow();
});
