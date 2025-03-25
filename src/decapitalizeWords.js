function decapitalizeWords(str) {
    if (typeof str !== 'string' || !str.trim()) throw new Error('Input must be a non-empty string');

    return str.replace(/\b\w/g, char => char.toLowerCase());
}

module.exports = decapitalizeWords;
