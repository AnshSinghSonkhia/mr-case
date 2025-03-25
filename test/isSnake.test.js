const isSnake = require('../src/isSnake');

test('checks if a string is in underscore_case', () => {
    expect(isSnake('snake_case')).toBe(true);
    expect(isSnake('Snake_case')).toBe(false);
    expect(isSnake('camelCase')).toBe(false);
    expect(isSnake('kebab-case')).toBe(false);
    expect(isSnake('')).toBe(false);
});
