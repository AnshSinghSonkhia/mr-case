const toSnake = require('./toSnake');

function keysToSnake(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    
    return Object.keys(obj).reduce((acc, key) => {
        acc[toSnake(key)] = obj[key];
        return acc;
    }, {});
}

module.exports = keysToSnake;
