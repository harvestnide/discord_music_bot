const moment = require("moment");

let current = undefined;
let queue = [];
const stream = require("./ytdl-stream");

async function verifyid(url, username) {
    const ytdl = require("ytdl-core");
    if (url !== null && url.length > 1 && ytdl.validateID(url[1])) {
        stream.get_video_title(url[1]).then(result => {
            const n = {id: url[1], title: result, user: username};
            queue.push(n);
            console.log(moment().format('HH:mm:ss') + ": Added: " + url[1] + " - " + result);
            return "Added: " + result;
        });
    } else {
        return 'Link ' + url.join(' ') + ' is incorrect\n';
    }
}

module.exports = {
    async add(urls, username) {
        let query = '';
        for (let i = 0; i < urls.length; i++) {
            let id = /.*(?:youtu.be|youtube.com)\/(?:watch\?v=|)(\w*)/g.exec(urls[i]);
            verifyid(id, username).then(result => query += result);
        }
        return query;
    },
    next() {
        current = queue.shift();
        return current;
    },
    shuffle() {
        for (let i = queue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [queue[i], queue[j]] = [queue[j], queue[i]];
        }
    },
    clear() {
        queue = [];
        stream.audio_skip();
    },
    isEmpty() {
        return (queue.length === 0)
    },
    get() {
        return queue
    },
    get_current() {
        return current
    }
};