const ytdl = require('../services/ytdl-stream');

module.exports = {
    name: 'resume',
    description: 'resume current audiostream',
    aliases: [],
    usage: '',
    execute(message, args) {
        ytdl.audio_resume();
    }
};
