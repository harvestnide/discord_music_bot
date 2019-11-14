#!/bin/bash
echo "Cloning project from github!"
git clone https://github.com/harvestnide/discord_music_bot.git
cd discord_music_bot
touch src/config.json
echo -ne "Input command prefix [!]:"
read prefix
echo -ne "Input your bot token [undefined]: "
read token
cat << EOF > src/config.json
{"prefix": "${prefix}", "discord_token": "${token}"}
EOF
echo "Installing dependencies..."
npm install
echo "Done!"
echo "Use cd discord_music_bot Then npm start to use ur bot!"
