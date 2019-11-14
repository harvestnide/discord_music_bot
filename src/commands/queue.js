const queue = require('../services/queue');
const Discord = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Displaying current queue',
    aliases: ['show_queue', "showqueue", "show-queue"],
    usage: '',
    execute(message, args) {
        if (!queue.isEmpty() || queue.get_current() !== undefined) {
            message.channel.send(show(queue.get()));
        } else message.reply('Nothing plays now!');
    }
};

function show(q) {
    let current = queue.get_current();
    if (current !== undefined) current = current.title + " by user " + current.user;
    else current = "Nothing";
    let Embed = new Discord.RichEmbed()
        .setColor('#ffa500')
        .setTitle('Current queue')
        .addField('Now playing:', current)
        .addBlankField();
    for (let i = 0; i < q.length; i++) {
        Embed.addField(i + 1 + ': ', q[i].title + " by user " + q[i].user);
    }
    return Embed;
}