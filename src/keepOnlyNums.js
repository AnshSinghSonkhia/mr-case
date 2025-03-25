function keepOnlyNums(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.replace(/\D+/g, '');
}

module.exports = keepOnlyNums;
