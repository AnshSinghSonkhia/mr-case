function abbreviate(text) {
    if (typeof text !== 'string') throw new Error('Input must be a string');
    return text.split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}

module.exports = abbreviate;
