const keysToKebab = require('../src/keysToKebab');

test('converts all object keys to kebab-case', () => {
    expect(keysToKebab({ helloWorld: 1, testCase: 2 })).toEqual({ 'hello-world': 1, 'test-case': 2 });
    expect(keysToKebab({ snake_case: 3, PascalCase: 4 })).toEqual({ 'snake-case': 3, 'pascal-case': 4 });
});
