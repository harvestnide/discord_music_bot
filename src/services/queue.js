const moment = require("moment");

let queue = [];
let metadata = [];

module.exports = {
    async add(urls, username) {
        const ytdl = require("ytdl-core");
        let response = '';
        const stream = require("./ytdl-stream");
        for (let i = 0; i < urls.length; i++) {
            let id = /.*(?:youtu.be|youtube.com)\/(?:watch\?v=|)(\w*)/g.exec(urls[i]); //ytdl.getVideoID
            if (id !== null && id.length > 1 && ytdl.validateID(id[1])) {
                queue.push(id[1]);
                stream.get_video_title(id[1]).then(result => {
                    metadata.push(result + ' req by ' + username);
                    response += "Added: " + result;
                    console.log(moment().format('HH:mm:ss') + ": Added: " + id[1] + " - " + result);
                });
            } else {
                response += 'Link ' + urls[i] + ' is incorrect\n';
                console.log(moment().format('HH:mm:ss') + ": Adding error, not a youtube link:" + urls[i]);
            }
        }
        return response;
    },
    next() {
        return [queue[0], metadata[0]];
    },
    remove0(){
        queue.shift();
        metadata.shift();
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