const ytdl = require('../services/ytdl-stream');

module.exports = {
    name: 'pause',
    description: 'pause current audiostream\nNot working correctly now', //todo
    aliases: [],
    usage: '',
    execute(message, args) {
        ytdl.audio_pause();
    }
};
