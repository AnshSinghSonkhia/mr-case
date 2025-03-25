function capitalize(str) {
    if (typeof str !== 'string' || !str.length) throw new Error('Input must be a non-empty string');
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;
