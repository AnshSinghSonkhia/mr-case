function camelToText(str) {
    if (typeof str !== 'string' || !str.trim()) throw new Error('Input must be a non-empty string');

    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before uppercase letters
        .replace(/\b\w/, char => char.toUpperCase()); // Capitalize first letter
}

module.exports = camelToText;
