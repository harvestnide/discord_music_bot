const AudioStream = require('../services/ytdl-stream');

module.exports = {
    name: 'music',
    description: 'Playing music at your voice channel!',
    args: true,
    guildOnly: true,
    aliases: [],
    usage: '[youtube-url]',
    currentlyPlaying: false,
    async execute(message, url) {
        AudioStream.add_queue(url);
        if (message.member.voiceChannel) {
            const connection = await message.member.voiceChannel.join();
            let dispatcher = AudioStream.play(connection);
            this.currentlyPlaying = true;

            dispatcher.on("end", () => {
                dispatcher = AudioStream.next(connection);
                this.currentlyPlaying = (dispatcher !== false);
            });
        } else {
            await message.reply('You need to join a voice channel first!');
        }
    },
};