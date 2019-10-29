const ytdl = require("ytdl-core");

module.exports = {
    queue: [],
    async play(connection){
        console.log("Now playing: " + this.queue[0]);
        let audiostream = ytdl(this.queue[0], {filter: 'audioonly'});
        let dispatcher = connection.playStream(audiostream, {volume: 0.5});
        this.queue.shift();
        return dispatcher;
    },
    async next(connection){
        if(this.queue.lenght)
            this.play(connection);
        else
            console.log("Queue Finished!");
            return false;
    },
    add_queue(url){
        let q = this.queue;
        q.push(url);
        this.queue = q;
    }
};