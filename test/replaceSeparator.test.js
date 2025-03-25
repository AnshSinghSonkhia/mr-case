const replaceSeparator = require('../src/replaceSeparator');

test('replaces all occurrences of the separator', () => {
    expect(replaceSeparator('hello_world_test', '_', '-')).toBe('hello-world-test');
    expect(replaceSeparator('hello world test', ' ', '_')).toBe('hello_world_test');
    expect(replaceSeparator('abc.def.ghi', '.', '/')).toBe('abc/def/ghi');
});

test('throws error for invalid input', () => {
    expect(() => replaceSeparator(null, '_', '-')).toThrow();
    expect(() => replaceSeparator('hello_world', 123, '-')).toThrow();
    expect(() => replaceSeparator('hello_world', '_', null)).toThrow();
});
