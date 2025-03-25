const keysToCamel = require('../src/keysToCamel');

test('converts object keys from underscore_case to camelCase', () => {
    expect(keysToCamel({ hello_world: 'value', this_is_test: 42 }))
        .toEqual({ helloWorld: 'value', thisIsTest: 42 });
    
    expect(keysToCamel({})).toEqual({});
});
