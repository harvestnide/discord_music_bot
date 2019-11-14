const AudioStream = require('../services/ytdl-stream');
const queue = require("../services/queue");

module.exports = {
    name: 'music',
    description: 'Playing music at your voice channel!',
    args: false,
    guildOnly: true,
    aliases: [],
    usage: '[youtube-url]',
    async execute(message, args) {
        await message.reply(queue.add(args, message.author.username));
        if (message.member.voiceChannel) {
            await AudioStream.set_voice(message.member.voiceChannel);
            await AudioStream.play_handler();
        } else {
            await message.reply('You need to join a voice channel first!');
        }
    },
};