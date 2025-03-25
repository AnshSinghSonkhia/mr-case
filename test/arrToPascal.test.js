const arrToPascal = require('../src/arrToPascal');

test('converts an array of strings to PascalCase', () => {
    expect(arrToPascal(['hello_world', 'test_case'])).toEqual(['HelloWorld', 'TestCase']);
    expect(arrToPascal(['camelCase', 'snake_case'])).toEqual(['CamelCase', 'SnakeCase']);
});
