const toKebab = require('./toKebab');

function keysToKebab(obj) {
    if (typeof obj !== 'object' || obj === null) throw new Error('Input must be an object');

    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [toKebab(key), value])
    );
}

module.exports = keysToKebab;
