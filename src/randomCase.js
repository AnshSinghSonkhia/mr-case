function randomCase(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str.split('').map(char => 
        Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
}

module.exports = randomCase;
