const ytdl = require("ytdl-core");
const moment = require("moment");
let connection = undefined, dispatcher = undefined, audiostream = undefined;
let stop = false;

async function video_title(url) {
    const info = await ytdl.getInfo(url);
    return info.title;
}

async function play(next) {
    return await new Promise(function (resolve, reject) {
        try {
            console.log(moment().format('HH:mm:ss') + ": Playing: " + next.id + " - " + next.title + " by user " + next.user);
            audiostream = ytdl(next.id, {filter: 'audioonly'});
            dispatcher = connection.playStream(audiostream, {volume: 0.5}).on("end", () => {
                    audiostream = undefined;
                    resolve(0);
                console.log(moment().format('HH:mm:ss') + ": Finished: " + next.id + " - " + next.title)
                });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    async get_video_title(url) {
        return await video_title(url);
    },
    async play_handler() {
        const queue = require("./queue");
        if (connection === undefined) console.error("play_handler: No voice channel!");
        if (audiostream !== undefined) return;
        let next = queue.next();
        stop = false;
        while (next !== undefined) {
            const p = await play(next).then(
                result => {
                    next = queue.next()
                },
                error => {
                    console.log(moment().format('HH:mm:ss') + ": " + error)
                }
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
    audio_skip() {
        dispatcher.end();
    }
};