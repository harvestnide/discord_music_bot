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
        queue.add(args, message.author.username).then(result => {
            if (result !== '') message.reply(result);
        });
        if (message.member.voiceChannel) {
            await AudioStream.set_voice(message.member.voiceChannel);
            await AudioStream.play_handler();
        } else {
            await message.reply('You need to join a voice channel first!');
        }
    },
};