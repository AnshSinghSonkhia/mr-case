const toCamel = require('./toCamel');

function arrToCamel(arr) {
    return arr.map(toCamel);
}

module.exports = arrToCamel;
