function textToSnake(text) {
    if (typeof text !== 'string' || !text.trim()) throw new Error('Input must be a non-empty string');

    return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/^_|_$/g, ''); // Remove leading & trailing underscores
}

module.exports = textToSnake;
