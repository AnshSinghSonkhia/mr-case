function textToKebab(text) {
    if (typeof text !== 'string' || !text.trim()) throw new Error('Input must be a non-empty string');

    return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-|-$|--+/g, ''); // Remove leading, trailing & extra hyphens
}

module.exports = textToKebab;
