const randomCase = require('../src/randomCase');

test('randomly changes case', () => {
    const str = 'hello world';
    const result = randomCase(str);
    expect(result.length).toBe(str.length);
});
