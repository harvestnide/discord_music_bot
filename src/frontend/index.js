function play() {
    const stream = require("../services/ytdl-stream");

}

function set_voice_channel(promt) {
    const stream = require("../services/ytdl-stream");
    stream.set_voice(promt);
}

function showQueue() {
    //import get from "../services/queue";
    let div = document.getElementById('queue');
    div.innerHTML += "Queue!";
    //let [q, meta] = get();
    //for (let i = 0; i < meta.length; i++) {
    //   div.innerHTML += "<p class='queue_inner'>" + i + 1 + ": " + meta[i] + "</p>";
    //}
    //if (!meta.length) div.innerHTML = '<p class="queue_inner">Queue is empty</p>';
}

showQueue();
setInterval(interval => showQueue(), 5000);