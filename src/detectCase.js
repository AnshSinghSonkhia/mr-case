function detectCase(str) {
    if (/^[a-z][a-zA-Z0-9]*$/.test(str)) return 'camel';
    if (/^[A-Z][a-zA-Z0-9]*$/.test(str)) return 'pascal';
    if (/^[a-z]+(_[a-z0-9]+)*$/.test(str)) return 'snake';
    if (/^[a-z]+(-[a-z0-9]+)*$/.test(str)) return 'kebab';
    return 'other';
}

module.exports = detectCase;
