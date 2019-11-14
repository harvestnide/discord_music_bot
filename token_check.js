const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {console.log(0); process.exit(0);});
client.login(process.argv[2]).catch(() => {console.log(1); return;});