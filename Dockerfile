FROM node:lts

WORKDIR /root

COPY package*.json .

RUN npm install

COPY *.js .

ENTRYPOINT [ "node", "index.js" ]