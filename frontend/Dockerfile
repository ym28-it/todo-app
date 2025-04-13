FROM node:22-alpine

WORKDIR /app

COPY ./app/package.json ./app/package-lock.json ./

RUN npm install

CMD [ "npm", "start", "--", "--host", "0.0.0.0" ]