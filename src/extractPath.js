function extractPath(url) {
    if (typeof url !== 'string') throw new Error('Input must be a string');

    return url.replace(/(https?:\/\/)?(www\.)?[^\/]+/, '');
}

module.exports = extractPath;
