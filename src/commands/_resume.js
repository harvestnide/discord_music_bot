const ytdl = require('../services/ytdl-stream');

module.exports = {
    name: 'resume',
    description: 'resume current audiostream\nNot working correctly now', //todo
    aliases: [],
    usage: '',
    execute(message, args) {
        ytdl.audio_resume();
    }
};
