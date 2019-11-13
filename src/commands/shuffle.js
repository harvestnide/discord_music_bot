const queue = require("../services/queue");

module.exports = {
    name: 'shuffle',
    description: 'Shuffle queue',
    args: false,
    guildOnly: true,
    aliases: ['random'],
    usage: '',
    execute(message, args) {
        queue.shuffle()
    },
};