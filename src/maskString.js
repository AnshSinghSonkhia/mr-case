function maskString(str, visible) {
    if (typeof str !== 'string' || typeof visible !== 'number') 
        throw new Error('Invalid input types');

    if (visible === 0) return '*'.repeat(str.length); // Handle zero visibility case
    if (str.length <= 2 * visible) return str;

    return str.slice(0, visible) + '*'.repeat(str.length - 2 * visible) + str.slice(-visible);
}

module.exports = maskString;
