const arrToCamel = require('../src/arrToCamel');

test('converts array of underscore_case strings to camelCase', () => {
    expect(arrToCamel(['hello_world', 'this_is_test'])).toEqual(['helloWorld', 'thisIsTest']);
    expect(arrToCamel([])).toEqual([]);
    expect(arrToCamel(['alreadyCamel'])).toEqual(['alreadyCamel']);
});
