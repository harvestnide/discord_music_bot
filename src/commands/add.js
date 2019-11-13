module.exports = {
    name: 'add',
    description: 'add song(s) to queue',
    aliases: ['add_song', "add_songs", "song", "songs"],
    usage: 'one or multiple youtube links, divided by whitespaces',
    execute(message, args) {
        const queue = require("../services/queue");
        message.reply(queue.add(args, message.author.username));
    }
};
