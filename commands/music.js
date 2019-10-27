module.exports = {
    name: 'music',
    description: 'Playing music at your voice channel!',
    args: true,
    guildOnly: true,
    aliases: ['play'],
    usage: '[youtube-url]/[play]/[stop]/[pause]',
    async execute(message, args) {
        let url = args[0];
        console.log("Now playing: " + url);
        if (message.member.voiceChannel) {
            const connection = await message.member.voiceChannel.join();
            const ytdl = require('ytdl-core');
            const dispatcher = connection.playStream(ytdl(url, {filter: 'audioonly'}),
                { volume: 0.5 });
            dispatcher.on('finish', () => {
                message.member.voiceChannel.leave();
                message.reply('Queue Finished!')
            });
        } else {
            await message.reply('You need to join a voice channel first!');
        }
    },
};