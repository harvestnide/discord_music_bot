# Basic node
FROM node:carbon AS base
WORKDIR /src

# ---- Dependencies ----
FROM base AS dependencies
# Copying package and package-lock
COPY package*.json ./
# installing dependencies
RUN npm install

# ---- Copy code base ----
FROM dependencies AS build
WORKDIR /src
COPY src /src

# --- Alpine ----
FROM node:8.9-alpine AS release
# installing ffmpeg for music streaming todo: delete this after discord.js v12
RUN apk add  --no-cache ffmpeg

WORKDIR /src

COPY --from=dependencies src/package.json ./

RUN npm install --only=production
COPY --from=build /src ./

CMD ["node", "bot.js"]


