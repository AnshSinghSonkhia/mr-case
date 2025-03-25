const keepOnlyNums = require('../src/keepOnlyNums');

test('keeps only numbers', () => {
    expect(keepOnlyNums('Hello123 World456')).toBe('123456');
});
