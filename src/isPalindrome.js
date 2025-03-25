function isPalindrome(str) {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = isPalindrome;
