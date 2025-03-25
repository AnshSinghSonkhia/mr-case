function replaceSeparator(str, from, to) {
    if (typeof str !== 'string' || typeof from !== 'string' || typeof to !== 'string') {
        throw new Error('All inputs must be strings');
    }
    return str.split(from).join(to);
}

module.exports = replaceSeparator;
