#!/bin/bash
echo "Cloning into discord_music_bot"
git clone https://github.com/harvestnide/discord_music_bot.git
touch src/config.json
cd discord_music_bot
echo -ne "Input command prefix [!]: "
read prefix
echo -ne "Input your bot token [undefined]: "
read token
cat << EOF > src/config.json
{"prefix": "${prefix}", "discord_token": "${token}"}
EOF
echo "Building docker image"
docker build -f Dockerfile -t discord_bot .
