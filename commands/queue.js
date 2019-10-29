const AudioStream = require('../services/ytdl-stream');

module.exports = {
    name: 'queue',
    description: 'Displaying current queue',
    aliases: ['show_queue'],
    usage: '',
    execute(message, args){
        let queue = AudioStream.queue;
        if(queue.length)
            message.reply(`**Current queue:** ${queue.join(', ')}`);
        else
            message.reply('Nothing plays now!');
    }
};
