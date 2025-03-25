const deepKebab = require('../src/deepKebab');

test('converts all nested object keys to kebab-case', () => {
    expect(deepKebab({
        helloWorld: {
            nestedKey: 1
        },
        anotherKey: {
            innerCase: {
                deepCase: 2
            }
        }
    })).toEqual({
        'hello-world': {
            'nested-key': 1
        },
        'another-key': {
            'inner-case': {
                'deep-case': 2
            }
        }
    });
});
