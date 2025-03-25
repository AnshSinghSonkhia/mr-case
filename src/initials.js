function initials(name) {
    if (typeof name !== 'string') throw new Error('Input must be a string');
    return name.split(' ')
        .map(word => word.charAt(0).toUpperCase() + '.')
        .join('');
}

module.exports = initials;
