function removeNumbers(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.replace(/\d+/g, '');
}

module.exports = removeNumbers;
