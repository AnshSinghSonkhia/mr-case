const toSnake = require('./toSnake');

function deepSnake(obj) {
    if (!obj || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
        return obj.map(deepSnake);
    }

    return Object.keys(obj).reduce((acc, key) => {
        acc[toSnake(key)] = deepSnake(obj[key]);
        return acc;
    }, {});
}

module.exports = deepSnake;
