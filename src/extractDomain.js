function extractDomain(url) {
    if (typeof url !== 'string') throw new Error('Input must be a string');
    
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('/')[0];
}

module.exports = extractDomain;
