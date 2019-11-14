#!/bin/bash
touch file.json
echo -ne "Input command prefix [!]:"
read prefix
echo -ne "Input your bot token [undefined]: "
read token
cat << EOF > file.json
{"prefix": "${prefix}", "discord_token": "${token}"}
EOF
