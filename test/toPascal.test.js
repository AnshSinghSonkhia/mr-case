const toPascal = require('../src/toPascal');

test('converts any case to PascalCase', () => {
    expect(toPascal('hello_world')).toBe('HelloWorld');
    expect(toPascal('helloWorld')).toBe('HelloWorld');
    expect(toPascal('hello-world')).toBe('HelloWorld');
    expect(toPascal('Hello World')).toBe('HelloWorld');
});
