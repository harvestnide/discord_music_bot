const queue = require('../services/queue');
const Discord = require('discord.js');
const ytdl = require("../services/ytdl-stream");

module.exports = {
    name: 'queue',
    description: 'Displaying current queue',
    aliases: ['show_queue', "showqueue", "show-queue"],
    usage: '',
    execute(message, args) {
        let [q, meta] = queue.get();
        if (q.length) {
            message.channel.send(show(q, meta));
        } else message.reply('Nothing plays now!');
    }
};

function show(q, meta) {
    let Embed = new Discord.RichEmbed()
        .setColor('#ffa500')
        .setTitle('Current queue')
        .addField('Now playing:', queue.song_title)
        .addBlankField();
    for (let i = 0; i < q.length; i++) {
        Embed.addField(i + 1 + ': ', meta[i]);
    }
    return Embed;
}