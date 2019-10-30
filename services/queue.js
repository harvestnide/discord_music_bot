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

    }, isEmpty() {
        return (queue.length === 0);
    }, get() {
        return queue;
    }
};