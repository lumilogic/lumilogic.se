FROM node:18

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN npm i -g serve

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]

