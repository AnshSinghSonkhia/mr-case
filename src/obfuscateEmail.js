function obfuscateEmail(email) {
    if (typeof email !== 'string') throw new Error('Input must be a string');

    const [name, domain] = email.split('@');
    return `${name[0]}***@${domain[0]}****.${domain.split('.').pop()}`;
}

module.exports = obfuscateEmail;
