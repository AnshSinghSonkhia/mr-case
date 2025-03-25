const maskString = require('../src/maskString');

test('masks a string while keeping first and last few characters', () => {
    expect(maskString('HelloWorld', 3)).toBe('Hel****rld');
});

test('returns the same string if visible characters are more than half the length', () => {
    expect(maskString('Hello', 3)).toBe('Hello');
});

test('throws an error for invalid input types', () => {
    expect(() => maskString(12345, 3)).toThrow('Invalid input types');
    expect(() => maskString('Hello', '3')).toThrow('Invalid input types');
});

test('returns the same string if visible characters are equal to half the length', () => {
    expect(maskString('HelloWorld', 5)).toBe('HelloWorld');
});

test('masks a string with only one visible character at each end', () => {
    expect(maskString('HelloWorld', 1)).toBe('H********d');
});

test('returns the same string if it is empty', () => {
    expect(maskString('', 3)).toBe('');
});

test('returns the same string if visible characters are zero', () => {
    expect(maskString('HelloWorld', 0)).toBe('**********');
});
