function textToPascal(text) {
    if (typeof text !== 'string' || !text.trim()) throw new Error('Input must be a non-empty string');

    return text
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase())
        .replace(/\s+/g, ''); // Remove spaces after capitalization
}

module.exports = textToPascal;
