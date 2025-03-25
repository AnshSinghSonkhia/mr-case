function toKebab(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
        .replace(/_/g, '-') // underscore to hyphen
        .toLowerCase();
}

module.exports = toKebab;
