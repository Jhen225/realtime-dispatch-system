FROM node:16-slim

RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . .