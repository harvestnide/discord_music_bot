const ytsr = require('ytsr');
const queue = require('./queue');

module.exports = {
    search(query, username){
        ytsr(query, {limit: 1},function (err, results) {
            if(err) throw err;
            queue.add([results.items[0].link], username);
        });
    }
};