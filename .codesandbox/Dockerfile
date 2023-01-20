FROM node:19.4.0-alpine3.16

WORKDIR /app

RUN corepack enable \
    && corepack prepare yarn@stable --activate \
    && corepack enable yarn

COPY package.json .yarnrc.yml yarn.lock ./

RUN yarn install --immutable

CMD yarn run dev

