const ytdl = require("ytdl-core");
const queue = require("./queue");
let connection = undefined, dispatcher = undefined, audiostream = undefined;
let stop = false;

async function video_title(url) {
     const info =  await ytdl.getInfo(url);
     return info.title;
}

async function play(next, title) {
    return new Promise(function (resolve, reject) {
        try {
            audiostream = ytdl(next, {filter: 'audioonly'});
            queue.song_title = title;
            dispatcher = connection.playStream(audiostream, {volume: 0.5})
                .on("end", () => {
                    audiostream = undefined;
                    resolve(0);
                });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    async get_video_title(url){
      return await video_title(url);
    },
    async play_handler() {
        if (connection === undefined) console.error("play_handler: No voice channel!");
        if (audiostream !== undefined) return;
        let [next, title] = queue.next();
        stop = false;
        while (!queue.isEmpty()) {
            await play(next, title).then(
                result => [next, title] = queue.next(),
                error => console.log(error)
            );
        }
        queue.song_title = "Nothing playing now!";
    },
    async set_voice(_connection) {
        connection = await _connection.join();
    },
    audio_forward(time) {

    },
    audio_rewind(time) {

    },
    audio_pause() {
        if (audiostream !== undefined)
            audiostream.pause();
    },
    audio_resume() {
        if (audiostream !== undefined && audiostream.isPaused()) audiostream.resume();
    },
    audio_stop() {

    }, audio_skip() {
        dispatcher.end();
    }
};