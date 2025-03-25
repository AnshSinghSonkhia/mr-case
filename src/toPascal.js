function toPascal(str) {
    return str
        .replace(/(^|_|\s|-)(\w)/g, (_, __, char) => char.toUpperCase())
        .replace(/[_\s-]/g, '');
}

module.exports = toPascal;
