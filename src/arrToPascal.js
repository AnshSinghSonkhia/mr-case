const toPascal = require('./toPascal');

function arrToPascal(arr) {
    if (!Array.isArray(arr)) throw new Error('Input must be an array of strings');
    return arr.map(toPascal);
}

module.exports = arrToPascal;
