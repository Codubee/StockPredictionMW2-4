FROM node:12-alpine as base

WORKDIR /src
COPY package.json package-lock.json /src/
COPY . /src
EXPOSE 8080

FROM base as production

ENV NODE_ENV=production
RUN npm install --production

CMD ["node", "index.js", "echo $FINNHUB_API_KEY"]