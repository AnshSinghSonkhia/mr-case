const snakeToText = require('../src/snakeToText');

test('converts snake_case to text', () => {
    expect(snakeToText('hello_world')).toBe('Hello World');
});
