function isSnake(str) {
    return /^[a-z]+(_[a-z0-9]+)*$/.test(str);
}

module.exports = isSnake;
