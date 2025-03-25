function removeExtraSpaces(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.trim().replace(/\s+/g, ' ');
}

module.exports = removeExtraSpaces;
