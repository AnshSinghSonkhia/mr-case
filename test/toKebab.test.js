const toKebab = require('../src/toKebab');

test('converts any case to kebab-case', () => {
    expect(toKebab('helloWorld')).toBe('hello-world');
    expect(toKebab('hello_world')).toBe('hello-world');
    expect(toKebab('HelloWorld')).toBe('hello-world');
});
