function toCamel(str) {
    return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

module.exports = toCamel;