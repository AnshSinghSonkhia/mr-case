// function textToCamel(text) {
//     if (typeof text !== 'string' || !text.trim()) throw new Error('Input must be a non-empty string');

//     return text
//         .toLowerCase()
//         .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
// }

// module.exports = textToCamel;

function textToCamel(text) {
    if (typeof text !== 'string' || !text.trim()) throw new Error('Input must be a non-empty string');

    return text
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
        .replace(/^./, firstChar => firstChar.toLowerCase()); // Ensure first letter is lowercase
}

module.exports = textToCamel;
