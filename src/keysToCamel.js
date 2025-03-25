const toCamel = require('./toCamel');

function keysToCamel(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    
    return Object.keys(obj).reduce((acc, key) => {
        acc[toCamel(key)] = obj[key];
        return acc;
    }, {});
}

module.exports = keysToCamel;
