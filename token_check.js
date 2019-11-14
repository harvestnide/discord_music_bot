const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log("Token is OK!");
    let query = "Connected to ";
    client.guilds.every(guild => {
            query += guild.name;
        }
    );
    console.log(query);
    return true;
});

client.login(process.argv[2]).catch(e => {
    console.log(e);
    return false;
});