function kebabToText(str) {
    if (typeof str !== 'string' || !str.trim()) throw new Error('Input must be a non-empty string');

    return str
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
}

module.exports = kebabToText;
