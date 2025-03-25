function titleCase(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

module.exports = titleCase;
