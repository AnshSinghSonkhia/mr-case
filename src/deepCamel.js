const toCamel = require('./toCamel');

function deepCamel(obj) {
    if (!obj || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
        return obj.map(deepCamel);
    }

    return Object.keys(obj).reduce((acc, key) => {
        acc[toCamel(key)] = deepCamel(obj[key]);
        return acc;
    }, {});
}

module.exports = deepCamel;
