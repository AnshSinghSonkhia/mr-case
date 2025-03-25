const truncate3dots = require('../src/truncate3dots');

test('truncates with dots', () => {
    expect(truncate3dots('Hello World', 5)).toBe('Hello...');
});
