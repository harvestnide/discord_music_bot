const AudioStream = require('../services/ytdl-stream');

module.exports = {
    name: 'add',
    description: 'add song to queue',
    aliases: ['add_song', "song"],
    usage: '',
    execute(message, args){
        let queue = AudioStream.queue;
        queue.push(args[0]);
        AudioStream.queue = queue;
    }
};
