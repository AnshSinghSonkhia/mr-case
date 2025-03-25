const autoConvert = require('../src/autoConvert');

test('auto-converts a string to the target case', () => {
    expect(autoConvert('hello_world', 'camel')).toBe('helloWorld');
    expect(autoConvert('helloWorld', 'snake')).toBe('hello_world');
    expect(autoConvert('hello-world', 'pascal')).toBe('HelloWorld');
    expect(autoConvert('HelloWorld', 'kebab')).toBe('hello-world');
    expect(autoConvert('hello world', 'title')).toBe('Hello World');
});
