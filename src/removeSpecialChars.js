function removeSpecialChars(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');

    return str.replace(/[^a-zA-Z0-9\s]/g, '');
}

module.exports = removeSpecialChars;
