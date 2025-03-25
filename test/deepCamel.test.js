const deepCamel = require('../src/deepCamel');

test('converts nested object keys from underscore_case to camelCase', () => {
    const input = {
        first_name: 'John',
        last_name: 'Doe',
        address_info: {
            street_name: 'Main St',
            zip_code: 12345
        }
    };

    const expected = {
        firstName: 'John',
        lastName: 'Doe',
        addressInfo: {
            streetName: 'Main St',
            zipCode: 12345
        }
    };

    expect(deepCamel(input)).toEqual(expected);
});
