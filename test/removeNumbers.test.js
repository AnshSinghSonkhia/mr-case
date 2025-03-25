const removeNumbers = require('../src/removeNumbers');

test('removes numbers', () => {
    expect(removeNumbers('Hello123 World456')).toBe('Hello World');
});
