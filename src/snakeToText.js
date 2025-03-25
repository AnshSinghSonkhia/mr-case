function snakeToText(str) {
    if (typeof str !== 'string' || !str.trim()) throw new Error('Input must be a non-empty string');

    return str
        .replace(/_/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter of each word
}

module.exports = snakeToText;
