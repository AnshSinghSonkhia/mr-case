const removeExtraSpaces = require('../src/removeExtraSpaces');

test('removes extra spaces', () => {
    expect(removeExtraSpaces('  Hello   World  ')).toBe('Hello World');
});
