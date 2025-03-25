const deepSnake = require('../src/deepSnake');

test('converts nested object keys from camelCase to underscore_case', () => {
    const input = {
        firstName: 'John',
        lastName: 'Doe',
        addressInfo: {
            streetName: 'Main St',
            zipCode: 12345
        }
    };

    const expected = {
        first_name: 'John',
        last_name: 'Doe',
        address_info: {
            street_name: 'Main St',
            zip_code: 12345
        }
    };

    expect(deepSnake(input)).toEqual(expected);
});
