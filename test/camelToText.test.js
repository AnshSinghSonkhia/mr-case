const camelToText = require('../src/camelToText');

test('converts camelCase to text', () => {
    expect(camelToText('helloWorld')).toBe('Hello World');
});
