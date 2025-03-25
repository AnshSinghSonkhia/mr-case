const toPascal = require('./toPascal');

function deepPascal(obj) {
    if (typeof obj !== 'object' || obj === null) throw new Error('Input must be an object');

    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            toPascal(key),
            typeof value === 'object' && value !== null ? deepPascal(value) : value
        ])
    );
}

module.exports = deepPascal;
