const toCamel = require('./toCamel');
const toSnake = require('./toSnake');
const toPascal = require('./toPascal');
const toKebab = require('./toKebab');
const toTitle = require('./toTitle');
const detectCase = require('./detectCase');

function autoConvert(str, target) {
    if (!['camel', 'snake', 'pascal', 'kebab', 'title'].includes(target)) {
        throw new Error('Invalid target case');
    }

    const detected = detectCase(str);

    if (detected === target) return str;

    switch (target) {
        case 'camel': return toCamel(str);
        case 'snake': return toSnake(str);
        case 'pascal': return toPascal(str);
        case 'kebab': return toKebab(str);
        case 'title': return toTitle(str);
    }
}

module.exports = autoConvert;
