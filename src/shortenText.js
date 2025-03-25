function shortenText(str, limit) {
    if (typeof str !== 'string' || typeof limit !== 'number') 
        throw new Error('Invalid input types');

    const words = str.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : str;
}

module.exports = shortenText;
