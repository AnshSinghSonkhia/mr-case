const textToSnake = require('../src/textToSnake');

test('converts text to snake_case', () => {
    expect(textToSnake('Hello World!')).toBe('hello_world');
    expect(textToSnake('JavaScript is fun!')).toBe('javascript_is_fun');
});
