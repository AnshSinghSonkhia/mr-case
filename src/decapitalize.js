function decapitalize(str) {
    if (typeof str !== 'string' || !str.length) throw new Error('Input must be a non-empty string');
    return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = decapitalize;
