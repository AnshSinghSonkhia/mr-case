const toCamel = require('../src/toCamel');

test('converts underscore_case to camelCase', () => {
    expect(toCamel('hello_world')).toBe('helloWorld');
    expect(toCamel('this_is_a_test')).toBe('thisIsATest');
    expect(toCamel('_leading_underscore')).toBe('LeadingUnderscore');
    expect(toCamel('alreadyCamel')).toBe('alreadyCamel'); // No change
    expect(toCamel('single')).toBe('single'); // No change
});
