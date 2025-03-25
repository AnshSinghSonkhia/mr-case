const toSnake = require('./toSnake');

function arrToSnake(arr) {
    return arr.map(toSnake);
}

module.exports = arrToSnake;
