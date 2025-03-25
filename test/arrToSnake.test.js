const arrToSnake = require('../src/arrToSnake');

test('converts array of camelCase strings to underscore_case', () => {
    expect(arrToSnake(['helloWorld', 'thisIsTest'])).toEqual(['hello_world', 'this_is_test']);
    expect(arrToSnake([])).toEqual([]);
    expect(arrToSnake(['already_snake'])).toEqual(['already_snake']);
});
