function swapCase(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.replace(/[a-zA-Z]/g, char =>
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    );
}

module.exports = swapCase;
