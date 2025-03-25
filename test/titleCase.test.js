const titleCase = require('../src/titleCase');

test('converts to title case', () => {
    expect(titleCase('hello world')).toBe('Hello World');
    expect(titleCase('JAVA SCRIPT')).toBe('Java Script');
    expect(titleCase('tEsT sTrIng')).toBe('Test String');
});
