const stream = require("../services/ytdl-stream");

module.exports = {
    name: 'skip',
    description: 'skip current track',
    args: false,
    guildOnly: true,
    aliases: [],
    usage: '[]',
    execute(message, args) {
        stream.audio_skip();
    },
};