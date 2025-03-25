const keepOnlyNumbers = require('../src/keepOnlyNumbers');

test('keeps only numbers', () => {
    expect(keepOnlyNumbers('Hello123 World456')).toBe('123456');
});
