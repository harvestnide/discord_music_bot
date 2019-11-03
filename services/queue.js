let queue = [];

module.exports = {
    playingNow: "",
    add(url, username) {
        let q = queue;
        q.push(url);
        queue = q;
    },
    remove(track_number) {

    },
    next() {
        //todo: get title from yt and put it in playingNow
        return queue.pop();
    },
    shuffle() {
        for (let i = queue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [queue[i], queue[j]] = [queue[j], queue[i]];
        }
    }, isEmpty() {
        return (queue.length === 0);
    }, get() {
        return queue;
    }
};