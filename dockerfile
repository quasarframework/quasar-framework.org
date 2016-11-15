FROM  mhart/alpine-node:latest

MAINTAINER Scott Molinari <scott.molinari@adduco.de>

ENV PATH /usr/lib/node_modules:$PATH

RUN apk add --no-cache bash &&\
    npm install hexo-cli -g

WORKDIR /opt/app

COPY package.json /opt/app/package.json

RUN npm install

COPY . /opt/app

EXPOSE 4000

EXPOSE 3001

CMD /bin/sh