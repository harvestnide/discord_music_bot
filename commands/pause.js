const ytdl = require('../services/ytdl-stream');

module.exports = {
    name: 'pause',
    description: 'pause current audiostream',
    aliases: [],
    usage: '',
    execute(message, args) {
        ytdl.audio_pause();
    }
};
