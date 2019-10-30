const queue = require('../services/queue');

module.exports = {
    name: 'queue',
    description: 'Displaying current queue',
    aliases: ['show_queue'],
    usage: '',
    execute(message, args){
        let queue = queue.get();
        if(queue.length)
            message.reply(`**Current queue:\n** ${queue.join('\n')}`);
        else
            message.reply('Nothing plays now!');
    }
};
