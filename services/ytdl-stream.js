const ytdl = require("ytdl-core");
const queue = require("./queue");

module.exports = {
    audiostream: undefined,
    dispatcher: undefined,
    connection: undefined,
    play() {
        this.dispatcher = this.connection.playStream(this.audiostream, {volume: 0.5});
    },
    play_handler(){
        this.dispatcher.on("end", () => {
            if(!queue.isEmpty())
                this.audiostream = ytdl(queue.next(), {filter: 'audioonly'});
                play();
        });
    },
    set_voice(connection){
        this.connection = connection;
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