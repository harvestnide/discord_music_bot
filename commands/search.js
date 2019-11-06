const search = require("../services/search");

module.exports = {
    name: 'search',
    description: 'Search for [query]',
    args: true,
    guildOnly: true,
    aliases: [],
    usage: '[query]',
    execute(message, args) {
        search.search(args.join(' '), message.author.username);
    },
};