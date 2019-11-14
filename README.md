# HN's discord music bot
Just another discord.js/ytdl bot for discord. Nothing fancy

## Autosetup

### Using node:
>sh -c "$(curl -fsSL https://raw.githubusercontent.com/harvestnide/discord_music_bot/master/setup_node.sh)"

btw sorry yarn users, i have litteraly no idea how to use yarn, so only npm autodeploy for now
### Using docker:
>sh -c "$(curl -fsSL https://raw.githubusercontent.com/harvestnide/discord_music_bot/master/setup_docker.sh)"

** not properly tested yet. If it's not working - you can pull from harvestnide/discord_bot, but you need to add /src/config.json by yourself


## Manual setup ##
Clone project, edit scr/config.json, install dependencies. Dockerfile and pakage.json are included

##### Related stuff #####
- [Howto get bot token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
