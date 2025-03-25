function pascalToText(str) {
    if (typeof str !== 'string' || !str.trim()) throw new Error('Input must be a non-empty string');

    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/, char => char.toUpperCase());
}

module.exports = pascalToText;
