const queue = require('../services/queue');
const Discord = require('discord.js');
const ytdl = require("../services/ytdl-stream");

module.exports = {
    name: 'queue',
    description: 'Displaying current queue',
    aliases: ['show_queue', "showqueue", "show-queue"],
    usage: '',
    async execute(message, args) {
        let q = queue.get();
        if (q.length) {
            message.channel.send(await show(q));
        } else await message.reply('Nothing plays now!');
    }
};

async function show(q) {
    let Embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Current queue')
                .addField('Now playing:', queue.song_title)
                .addBlankField();
    for (let i = 0; i < q.length; i++) {
        await Embed.addField(i+1+': ', await ytdl.get_video_title(q[i]));
    }
    return Embed;
}