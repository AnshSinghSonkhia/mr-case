const toKebab = require('./toKebab');

function deepKebab(obj) {
    if (typeof obj !== 'object' || obj === null) throw new Error('Input must be an object');

    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            toKebab(key),
            typeof value === 'object' && value !== null ? deepKebab(value) : value
        ])
    );
}

module.exports = deepKebab;
