FROM node:latest

COPY package.json app/

WORKDIR /app

RUN yarn install

COPY . /app

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "serve", "--host" ]