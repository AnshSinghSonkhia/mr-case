const detectCase = require('../src/detectCase');

test('detects the case of a string', () => {
    expect(detectCase('helloWorld')).toBe('camel');
    expect(detectCase('HelloWorld')).toBe('pascal');
    expect(detectCase('hello_world')).toBe('snake');
    expect(detectCase('hello-world')).toBe('kebab');
    expect(detectCase('random text')).toBe('other');
});
