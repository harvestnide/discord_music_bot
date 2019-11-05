const queue = require('../services/queue');
const Discord = require('discord.js');
const ytdl = require("../services/ytdl-stream");

module.exports = {
    name: 'queue',
    description: 'Displaying current queue',
    aliases: ['show_queue'],
    usage: '',
    async execute(message, args) {
        let queue = queue.get();
        if (queue.length) {
            message.channel.send(show(queue));
        } else await message.reply('Nothing plays now!');
    }
};

async function show(queue) {
    let Embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Current queue')
                .addField('Now playing:', queue.playingNow)
                .addBlankField();
    for (let i = 0; i < queue.length; i++) {
        Embed.addField(i+1+': ', await ytdl.get_video_title(queue[i]));
    }
    return Embed;
}