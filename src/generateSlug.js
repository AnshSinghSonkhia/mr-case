function generateSlug(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

module.exports = generateSlug;
