const toTitle = require('../src/toTitle');

test('converts any case to Title Case', () => {
    expect(toTitle('hello_world')).toBe('Hello World');
    expect(toTitle('hello-world')).toBe('Hello World');
    expect(toTitle('helloWorld')).toBe('HelloWorld');
});
