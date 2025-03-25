function isAnagram(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') 
        throw new Error('Both inputs must be strings');

    const clean = str => str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
    return clean(str1) === clean(str2);
}

module.exports = isAnagram;
