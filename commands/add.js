const queue = require('../services/queue');

module.exports = {
    name: 'add',
    description: 'add song(s) to queue',
    aliases: ['add_song', "add_songs", "song", "songs"],
    usage: 'one or multiple youtube links, divided by whitespaces',
    execute(message, args){
        //for (let url in args){
            message.reply(queue.add(args, message.member.nickname));
        //}
    }
};
