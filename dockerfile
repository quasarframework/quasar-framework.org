FROM  quasarframework/quasar-org:latest

MAINTAINER Scott Molinari <scott.molinari@adduco.de>

WORKDIR /opt/app

COPY package.json /opt/app/package.json

RUN npm install

COPY . /opt/app

EXPOSE 4000

EXPOSE 3001

CMD /bin/sh