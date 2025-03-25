const abbreviate = require('../src/abbreviate');

test('converts to abbreviations', () => {
    expect(abbreviate('United Nations')).toBe('UN');
    expect(abbreviate('Machine Learning')).toBe('ML');
});
