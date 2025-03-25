const isCamel = require('../src/isCamel');

test('checks if a string is in camelCase', () => {
    expect(isCamel('camelCase')).toBe(true);
    expect(isCamel('CamelCase')).toBe(false);
    expect(isCamel('snake_case')).toBe(false);
    expect(isCamel('kebab-case')).toBe(false);
    expect(isCamel('')).toBe(false);
});
