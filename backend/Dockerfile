FROM node:latest

COPY package.json app/

WORKDIR /app

RUN yarn install

COPY . /app

EXPOSE 5002

CMD [ "node", "index.js" ]