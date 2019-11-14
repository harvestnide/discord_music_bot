# HN's discord music bot (v. 0.9)
Just another discord.js/ytdl bot for discord. Nothing fancy

Still pretty much in development, so feel free to open issues of any sort.

## Functions
- Playing music from youtube in ur voice channel. You can add it from youtube url or using inline youtube search.
- Has playback queue, but sometimes it not stable and hungry for ur RAM

In development:
- Frontend
- Audiofilters
- Other music's hosting services support
- Playback control (play/pause/rewind/etc)


DM `[command prefix]help` to your bot to learn more
## Autosetup

### Using node:
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/harvestnide/discord_music_bot/master/setup_node.sh)"
```

btw sorry yarn users, i have litteraly no idea how to use yarn, so only npm autodeploy for now
### Using docker:
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/harvestnide/discord_music_bot/master/setup_docker.sh)"
```

__Not properly tested yet. If it's not working - you can pull from__ `harvestnide/discord_bot`, __but you need to add `/src/config.json` by yourself (using, for example, `docker exec -i discord_bot sh -c 'cat > /src/config.json' < config.json`).__

__Also, you can clone repo and build it by yourself using included Dockerfile__ :rainbow:

__And also, if your user wasn't configured to docker workgroup - you need to run this script as root. I really don't appreciate it, take your time and configure it right before launching. I double tested it, but I'm not sure, that it's completlly safe and you shoudn't eather__

## Manual setup ##
Clone project, edit scr/config.json, install dependencies. Dockerfile and pakage.json are included

config.json format:
``` json
{"prefix": "put your prefix here", "discord_token": "put your token here"}
```

##### Related stuff #####
- [Howto: create bot and get token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
- [Howto: proper docker config](https://docs.docker.com/install/linux/linux-postinstall/)
