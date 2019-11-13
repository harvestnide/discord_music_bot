const queue = require('../services/queue');

module.exports = {
    name: 'clear',
    description: "clears current queue. Doesn't stop or delete current song. Check !help (not_implementet_yet) if you want to clear queue and destroy current stream",
    aliases: ['flush'],
    usage: '',
    execute(message, args) {
        queue.clear();
    }
};
