#!/bin/bash
echo "Pulling image from dockerhub!"
docker image pull harvestnide/discord_bot
touch config.json
echo -ne "Input command prefix [!]: "
read prefix
echo -ne "Input your bot token [undefined]: "
read token
cat << EOF > config.json
{"prefix": "${prefix}", "discord_token": "${token}"}
EOF
echo "copying config into docker image"
docker exec -i discord_bot sh -c 'cat > /src/config.json' < config.json
rm config.json
echo "Done!"
echo "Start ur bot with docker run discord_bot!"
