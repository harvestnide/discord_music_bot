const queue = require('../services/queue');
const Discord = require('discord.js');
const ytdl = require("../services/ytdl-stream");

module.exports = {
    name: 'queue',
    description: 'Displaying current queue\ncurrently fucking broken',
    aliases: ['show_queue'],
    usage: '',
    execute(message, args) {
        let queue = queue.get();
        if (queue.length) {
            message.channel.send(show(queue));
        } else message.reply('Nothing plays now!');
    }
};

function show(queue) {
    let Embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Current queue')
                .addField('Now playing:', queue.playingNow)
                .addBlankField();
    for (let i = 0; i < queue.length; i++) {
        Embed.addField(i+1+': ', ytdl.get_video_title(queue[i]));
    }
    return Embed;
}