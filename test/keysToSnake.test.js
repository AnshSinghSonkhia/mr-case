const keysToSnake = require('../src/keysToSnake');

test('converts object keys from camelCase to underscore_case', () => {
    expect(keysToSnake({ helloWorld: 'value', thisIsTest: 42 }))
        .toEqual({ hello_world: 'value', this_is_test: 42 });

    expect(keysToSnake({})).toEqual({});
});
