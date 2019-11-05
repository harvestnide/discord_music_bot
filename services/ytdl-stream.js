const ytdl = require("ytdl-core");
const queue = require("./queue");
let connection = undefined, dispatcher = undefined, audiostream = undefined;

async function play() {
    audiostream = ytdl(queue.next(), {filter: 'audioonly'});
    dispatcher = await connection.playStream(audiostream, {volume: 0.5})
        .on("end", () => {
            return 0;
        });
}

module.exports = {
    async get_video_title(url) {
        const info = await ytdl.getInfo(url);
        const songtitle = info.title;
        console.log(songtitle);
        return songtitle;
    },
    async play_handler() {
        for (let i = 0; i < queue.get().length; i) {
            await play();
        }
    },
    async set_voice(_connection) {
        connection = await _connection.join();
    },
    audio_forward(time) {

    },
    audio_rewind(time) {

    },
    audio_pause() {

    },
    audio_continue() {
    },
    audio_stop() {

    }
};