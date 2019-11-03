const gapi = require("../services/yt_api");

module.exports = {
    name: 'beautify',
    description: 'test_func',
    args: true,
    guildOnly: true,
    aliases: [],
    usage: '[youtube-url]',
    execute(message, args) {
        message.reply(gapi.beautify());
    },
};