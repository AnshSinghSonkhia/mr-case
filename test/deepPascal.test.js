const deepPascal = require('../src/deepPascal');

test('converts all nested object keys to PascalCase', () => {
    expect(deepPascal({
        hello_world: {
            nested_key: 1
        },
        another_key: {
            inner_case: {
                deep_case: 2
            }
        }
    })).toEqual({
        HelloWorld: {
            NestedKey: 1
        },
        AnotherKey: {
            InnerCase: {
                DeepCase: 2
            }
        }
    });
});
