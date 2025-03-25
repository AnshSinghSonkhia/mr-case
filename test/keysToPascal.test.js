const keysToPascal = require('../src/keysToPascal');

test('converts all object keys to PascalCase', () => {
    expect(keysToPascal({ hello_world: 1, test_case: 2 })).toEqual({ HelloWorld: 1, TestCase: 2 });
    expect(keysToPascal({ camelCase: 3, snake_case: 4 })).toEqual({ CamelCase: 3, SnakeCase: 4 });
});
