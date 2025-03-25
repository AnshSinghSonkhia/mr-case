const toPascal = require('./toPascal');

function keysToPascal(obj) {
    if (typeof obj !== 'object' || obj === null) throw new Error('Input must be an object');

    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [toPascal(key), value])
    );
}

module.exports = keysToPascal;
