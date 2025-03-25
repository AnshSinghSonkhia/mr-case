const swapCase = require('../src/swapCase');
test('swaps case of letters', () => {
    expect(swapCase('Hello World')).toBe('hELLO wORLD');
    expect(swapCase('JavaScript')).toBe('jAVAsCRIPT');
});

test('handles empty string', () => {
    expect(swapCase('')).toBe('');
});

test('handles all lowercase', () => {
    expect(swapCase('lowercase')).toBe('LOWERCASE');
});

test('handles all uppercase', () => {
    expect(swapCase('UPPERCASE')).toBe('uppercase');
});

test('handles mixed case with numbers and symbols', () => {
    expect(swapCase('123 ABC def!')).toBe('123 abc DEF!');
});

test('throws error for non-string input', () => {
    expect(() => swapCase(123)).toThrow('Input must be a string');
    expect(() => swapCase({})).toThrow('Input must be a string');
    expect(() => swapCase([])).toThrow('Input must be a string');
    expect(() => swapCase(null)).toThrow('Input must be a string');
    expect(() => swapCase(undefined)).toThrow('Input must be a string');
});
