const fs = require('fs');
const Discord = require('discord.js');
const moment = require('moment');
const {prefix, discord_token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const path = require("path");
const commandFiles = fs.readdirSync(path.resolve(path.resolve(__dirname, "./commands"))).filter(file => (file.endsWith('.js') && !file.startsWith("_")));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(moment().format('HH:mm:ss') + ': Ready!');
    let query = "Connected to ";
    client.guilds.every(guild => {
            query += guild.name;
        }
    );
    console.log(query);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/\s+/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    try {
        console.log(moment().format('HH:mm:ss') + ":" + message.author.username + " executing: !" + command.name + " " + args.join(" "));
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});

client.login(discord_token);