const AudioStream = require('../services/ytdl-stream');
const queue = require("../services/queue");

module.exports = {
    name: 'music',
    description: 'Playing music at your voice channel!',
    args: true,
    guildOnly: true,
    aliases: [],
    usage: '[youtube-url]',
    async execute(message, args) {
        if(!args.lenght) queue.add(args[0], message.member.nickname);
        if (message.member.voiceChannel) {
            AudioStream.set_voice(await message.member.voiceChannel.join());
            AudioStream.play_handler();
        } else {
            await message.reply('You need to join a voice channel first!');
        }
    },
};