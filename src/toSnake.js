function toSnake(str) {
    return str.replace(/[A-Z]/g, char => `_${char.toLowerCase()}`);
}

module.exports = toSnake;
