#!/bin/bash
if hash npm 2>/dev/null; then
  echo "Npm installed and working correctly"
else
  echo "Dude, u selected node installation, but u dont have one. Whats wrong with you?"
  echo "Install npm and get back here"
  exit
fi
echo "Cloning project from github!"
git clone https://github.com/harvestnide/discord_music_bot.git
cd discord_music_bot || return 2
echo "Installing dependencies..."
npm install
touch src/config.json
echo -ne "Input command prefix [!]:"
read prefix
if [ -z "$prefix" ]; then
  prefix="!"
fi
isCorrect=false
until [ $isCorrect ]; do
  echo -ne "Input your bot token [undefined]: "
  read token
  echo "checking your token"
  isCorrect="node token_check.js $token"
done
cat <<EOF >src/config.json
{"prefix": "${prefix}", "discord_token": "${token}"}
EOF
if hash ffmpeg 2>/dev/null; then
  echo "Done!"
else
  echo "You dont have ffmpeg installed, but you need it to stream audio"
  echo "Install it, than - "
fi

echo "Use cd discord_music_bot Then npm start to use ur bot!"
echo "DM ${prefix}help to ur bot to observe it full potential!"
