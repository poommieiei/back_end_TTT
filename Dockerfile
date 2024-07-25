#select Image
#FROM node:10.0.0-alpine
FROM node:20-alpine3.18

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# To handle 'not get uid/gid'


RUN apk add --no-cache tzdata

ENV TZ Asia/Bangkok

# Install app dependencies
COPY . /usr/src/app

RUN npm install

RUN START_PROJECT=production

CMD [ "npm", "start" ]