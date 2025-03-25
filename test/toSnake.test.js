const toSnake = require('../src/toSnake');

test('converts camelCase to underscore_case', () => {
    expect(toSnake('helloWorld')).toBe('hello_world');
    expect(toSnake('thisIsATest')).toBe('this_is_a_test');
    expect(toSnake('AlreadySnake')).toBe('_already_snake');
    expect(toSnake('single')).toBe('single'); // No change
});
