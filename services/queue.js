let queue = [];
let metadata = [];

module.exports = {
    song_title: "Nothing playing now!",
    async add(urls, username) {
        const ytdl = require("ytdl-core");
        const stream = require("./ytdl-stream");
        let q = queue;
        let response = '';
        for (let i = 0; i < urls.length; i++) {
            let id = /.*(?:youtu.be|youtube.com)\/(?:watch\?v=|)(\w*)/g.exec(urls[i]); //ytdl.getVideoID
            if (id !== null && id.length > 1 && ytdl.validateID(id[1])) {
                q.push(id[1]);
                stream.get_video_title(id[1]).then(result => metadata.push(result +  ' req by ' + username));
            } else {
                response += 'Link ' + urls[i] + ' is incorrect\n';
            }
        }
        response += "Done!";
        queue = q;
        return response;
    },
    remove(track_number) {

    },
    next() {
        return [queue.shift(), metadata.shift()];
    },
    shuffle() {
        for (let i = queue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [queue[i], queue[j]] = [queue[j], queue[i]];
        }
    }, isEmpty() {
        return (queue.length === 0);
    }, get() {
        return [queue, metadata];
    },
    clear() {
        queue = [];
        metadata = [];
    }
};