const obfuscateEmail = require('../src/obfuscateEmail');

test('obfuscates email', () => {
    expect(obfuscateEmail('john.doe@gmail.com')).toBe('j***@g****.com');
});
