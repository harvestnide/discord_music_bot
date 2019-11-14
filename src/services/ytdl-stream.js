const ytdl = require("ytdl-core");
const queue = require("./queue");
const moment = require("moment");
let connection = undefined, dispatcher = undefined, audiostream = undefined;
let stop = false;

async function video_title(url) {
     const info =  await ytdl.getInfo(url);
     return info.title;
}

async function play(next, title) {
    return await new Promise(function (resolve, reject) {
        try {
            console.log(moment().format('HH:mm:ss') + ": Playing: " + next + " - " + title);
            audiostream = ytdl(next, {filter: 'audioonly'});
            dispatcher = connection.playStream(audiostream, {volume: 0.5})
                .on("end", () => {
                    audiostream = undefined;
                    resolve(0);
                    console.log(moment().format('HH:mm:ss') + ": Finished: " + next + " - " + title)
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
        while (next !== undefined) {
            const p = await play(next, title).then(
                result => {queue.remove0(); [next, title] = queue.next()},
                error => {console.log(moment().format('HH:mm:ss') + ": " + error)}
            );
        }
        console.log(moment().format('HH:mm:ss') + ": Queue finished")
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