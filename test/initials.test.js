const initials = require('../src/initials');

test('gets initials', () => {
    expect(initials('John Doe')).toBe('J.D.');
    expect(initials('Alice Bob Carter')).toBe('A.B.C.');
});
