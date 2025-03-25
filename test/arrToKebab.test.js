const arrToKebab = require('../src/arrToKebab');

test('converts an array of strings to kebab-case', () => {
    expect(arrToKebab(['helloWorld', 'testCase'])).toEqual(['hello-world', 'test-case']);
    expect(arrToKebab(['snake_case', 'PascalCase'])).toEqual(['snake-case', 'pascal-case']);
});
