const toKebab = require('./toKebab');

function arrToKebab(arr) {
    if (!Array.isArray(arr)) throw new Error('Input must be an array of strings');
    return arr.map(toKebab);
}

module.exports = arrToKebab;
