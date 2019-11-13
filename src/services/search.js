const ytsr = require('ytsr');
const queue = require('./queue');
let filter;

module.exports = {
    search(query, username) {
        ytsr.getFilters(query, function (err, filters) {
            if (err) throw err;
            filter = filters.get('Type').find(obj => obj.name === 'Video');
            ytsr(null, {limit: 1, nextpageRef: filter.ref}, function (err, searchResults) {
                if (err) throw err;
                queue.add([searchResults.items[0].link], username);
            });
        });
    }

    /*
    search(query, username){
        let filters = filters.get('Type').find(o => o.name === 'Video');
        ytsr(query, {limit: 1},function (err, results) {
            if(err) throw err;

            queue.add([results.items[0].link], username);
        });
    }
     */
};