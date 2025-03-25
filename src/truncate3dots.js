function truncate3dots(str, length) {
    if (typeof str !== 'string' || typeof length !== 'number') 
        throw new Error('Invalid input types');
    
    return str.length > length ? str.slice(0, length) + '...' : str;
}

module.exports = truncate3dots;
